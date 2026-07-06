import { writeFileSync } from "node:fs";

const text = process.argv[2];
if (!text) throw new Error("Pass a URL to encode.");

const version = 2;
const size = 17 + version * 4;
const dataCodewords = 34;
const ecCodewords = 10;
const matrix = Array.from({ length: size }, () => Array(size).fill(false));
const reserved = Array.from({ length: size }, () => Array(size).fill(false));

function set(row, col, value = true, isReserved = true) {
  if (row < 0 || col < 0 || row >= size || col >= size) return;
  matrix[row][col] = value;
  if (isReserved) reserved[row][col] = true;
}

function finder(row, col) {
  for (let r = -1; r <= 7; r += 1) {
    for (let c = -1; c <= 7; c += 1) {
      const rr = row + r;
      const cc = col + c;
      const isFinder = r >= 0 && r <= 6 && c >= 0 && c <= 6;
      const dark = isFinder && (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
      set(rr, cc, dark);
    }
  }
}

function alignment(row, col) {
  for (let r = -2; r <= 2; r += 1) {
    for (let c = -2; c <= 2; c += 1) {
      const dark = Math.max(Math.abs(r), Math.abs(c)) !== 1;
      set(row + r, col + c, dark);
    }
  }
}

finder(0, 0);
finder(0, size - 7);
finder(size - 7, 0);
alignment(18, 18);

for (let i = 8; i < size - 8; i += 1) {
  set(6, i, i % 2 === 0);
  set(i, 6, i % 2 === 0);
}

set(4 * version + 9, 8, true);
for (let i = 0; i < 9; i += 1) {
  if (i !== 6) {
    reserved[8][i] = true;
    reserved[i][8] = true;
  }
}
for (let i = 0; i < 8; i += 1) {
  reserved[8][size - 1 - i] = true;
  reserved[size - 1 - i][8] = true;
}

function bits(value, length, output) {
  for (let i = length - 1; i >= 0; i -= 1) output.push((value >>> i) & 1);
}

const dataBits = [];
bits(0b0100, 4, dataBits);
bits(text.length, 8, dataBits);
for (const byte of Buffer.from(text, "utf8")) bits(byte, 8, dataBits);
bits(0, Math.min(4, dataCodewords * 8 - dataBits.length), dataBits);
while (dataBits.length % 8) dataBits.push(0);

const data = [];
for (let i = 0; i < dataBits.length; i += 8) {
  data.push(Number.parseInt(dataBits.slice(i, i + 8).join(""), 2));
}
for (let pad = 0; data.length < dataCodewords; pad += 1) data.push(pad % 2 ? 0x11 : 0xec);

const gfExp = Array(512).fill(0);
const gfLog = Array(256).fill(0);
let x = 1;
for (let i = 0; i < 255; i += 1) {
  gfExp[i] = x;
  gfLog[x] = i;
  x <<= 1;
  if (x & 0x100) x ^= 0x11d;
}
for (let i = 255; i < 512; i += 1) gfExp[i] = gfExp[i - 255];

function mul(a, b) {
  return a && b ? gfExp[gfLog[a] + gfLog[b]] : 0;
}

let generator = [1];
for (let i = 0; i < ecCodewords; i += 1) {
  const next = Array(generator.length + 1).fill(0);
  generator.forEach((coef, index) => {
    next[index] ^= coef;
    next[index + 1] ^= mul(coef, gfExp[i]);
  });
  generator = next;
}

const ec = Array(ecCodewords).fill(0);
for (const byte of data) {
  const factor = byte ^ ec.shift();
  ec.push(0);
  for (let i = 0; i < ecCodewords; i += 1) ec[i] ^= mul(generator[i + 1], factor);
}

const finalBits = [];
for (const byte of [...data, ...ec]) bits(byte, 8, finalBits);

let bitIndex = 0;
let upward = true;
for (let col = size - 1; col > 0; col -= 2) {
  if (col === 6) col -= 1;
  for (let i = 0; i < size; i += 1) {
    const row = upward ? size - 1 - i : i;
    for (let offset = 0; offset < 2; offset += 1) {
      const cc = col - offset;
      if (reserved[row][cc]) continue;
      let bit = finalBits[bitIndex] || 0;
      if ((row + cc) % 2 === 0) bit ^= 1;
      set(row, cc, Boolean(bit), false);
      bitIndex += 1;
    }
  }
  upward = !upward;
}

function bchFormat(format) {
  let value = format << 10;
  const generatorBits = 0b10100110111;
  for (let i = 14; i >= 10; i -= 1) {
    if ((value >>> i) & 1) value ^= generatorBits << (i - 10);
  }
  return ((format << 10) | value) ^ 0b101010000010010;
}

const format = bchFormat(0b01000);
for (let i = 0; i < 15; i += 1) {
  const bit = Boolean((format >>> i) & 1);
  const a = [
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 7],
    [8, 8],
    [7, 8],
    [5, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [1, 8],
    [0, 8],
  ][i];
  const b = i < 8 ? [size - 1 - i, 8] : [8, size - 15 + i];
  set(a[0], a[1], bit);
  set(b[0], b[1], bit);
}

const scale = 12;
const quiet = 4;
const svgSize = (size + quiet * 2) * scale;
let rects = "";
for (let r = 0; r < size; r += 1) {
  for (let c = 0; c < size; c += 1) {
    if (matrix[r][c]) {
      rects += `<rect x="${(c + quiet) * scale}" y="${(r + quiet) * scale}" width="${scale}" height="${scale}"/>`;
    }
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgSize} ${svgSize}" width="${svgSize}" height="${svgSize}" role="img" aria-label="QR code for ${text}">
<rect width="100%" height="100%" fill="#fff"/>
<g fill="#000">${rects}</g>
</svg>
`;

writeFileSync("teach-for-tomorrow-qr.svg", svg);
console.log("teach-for-tomorrow-qr.svg");
