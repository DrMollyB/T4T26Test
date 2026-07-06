const sessionRows = [
  ["A101", "Dr. Rebecca Harper", "Writing Workouts: Getting Students Trained and Ready for the Writing Race", "10:00 AM"],
  ["A101", "Dr. Rebecca Harper", "Literacy on the Field: Reading and Writing in Athletic Coaching", "11:00 AM"],
  ["A101", "Dr. Rebecca Harper", "We Are Family: Literacy Events and Engagements that Embrace Families and Communities", "1:00 PM"],
  ["A101", "Dr. Rebecca Harper", "Writing Workouts: Getting Students Trained and Ready for the Writing Race", "2:00 PM"],
  ["A102", "Dr. Stephanie Johnson", "Admin Essentials- Elementary Only", "10:00 AM"],
  ["A102", "Dr. Stephanie Johnson", "Admin Essentials- Secondary Only", "11:00 AM"],
  ["A102", "Alan Coleman", "They Can't Learn if They Can't Hear You", "1:00 PM"],
  ["A102", "Alan Coleman", "Game Film is NOT Just for Athletes: VIEWPath Camera System & MyWorkshop Videos", "2:00 PM"],
  ["A102", "Alan Coleman", "I Love My Audio Enhancement Classroom Solutions, but I Can't Remember How To...", "3:00 PM"],
  ["A103", "Janet Burnett", "Enhancing Formative Assessment with Book Creator", "10:00 AM"],
  ["A103", "Janet Burnett", "Unlock the Magic of Book Creator: Easy and Efficient Lesson Creation", "11:00 AM"],
  ["A103", "Janet Burnett", "Making Literacy Come Alive with Book Creator", "1:00 PM"],
  ["A103", "Janet Burnett", "Enhancing Formative Assessment with Book Creator", "2:00 PM"],
  ["A104", "Kristin Carter", "Bookin' Progress with Book Creator", "2:00 PM"],
  ["A104", "Misty Smith", "Score Big with Classlink Analytics: A Playbook for School Administrators", "10:00 AM"],
  ["A104", "Misty Smith", "Drafting the Best Tech: Navigating the Digital Resources Purchasing Process", "11:00 AM"],
  ["A105", "Linda Cashion", "Interacting with Discovery Education Experience", "9:45 AM"],
  ["A105", "Linda Cashion", "Discovery Education 1:1 Support", "12:30 PM"],
  ["A105", "Linda Cashion", "Engagement and Discovery Education", "1:00 PM"],
  ["A105", "Linda Cashion", "Discovery Education 1:1 Support", "3:00 PM"],
  ["A106", "Sara O'Byrne", "Planning & Creating with NearPod", "10:00 AM"],
  ["A106", "Sara O'Byrne", "New to NearPod", "11:00 AM"],
  ["A106", "Sara O'Byrne", "Science of Reading with NearPod", "1:00 PM"],
  ["A106", "Sara O'Byrne", "Evidence of Learning with NearPod", "2:00 PM"],
  ["A107", "Lori McGovern", "Canvas for Beginners", "1:00 PM"],
  ["A107", "Lori McGovern", "Leveling Up with Lexile", "11:00 AM"],
  ["A107", "Lori McGovern", "Leveling Up with Lexile", "3:00 PM"],
  ["A108", "Teraye Law", "Note-Worthy: Mastering OneNote for Summarizing and Notetaking Success", "10:00 AM"],
  ["A108", "Teraye Law", "Level Up Learning with Book Creator Interactive Notebooks", "11:00 AM"],
  ["A108", "Teraye Law", "Let's Give Them Something to Cheer About: Topics!", "1:00 PM"],
  ["A108", "Teraye Law", "Note-Worthy: Mastering OneNote for Summarizing and Notetaking Success", "2:00 PM"],
  ["A108", "Ali Geigerman", "Book Tasting \"Pages and Pours", "3:00 PM"],
  ["A110", "Melissa Greer & Chansley Wren", "Let's get LIT in Math!", "11:00 AM"],
  ["A110", "Melissa Greer & Chansley Wren", "Let's get LIT in Math!", "1:00 PM"],
  ["A110", "Tamika Nogueras", "Differentiation Made The Difference", "3:00 PM"],
  ["A110", "Shebrie Jones", "ClassLink Features for Teachers", "10:00 AM"],
  ["A111", "Dr. Adam Phyall", "Unlocking Student Engagement Through Meaningful EdTech Infusion", "2:00 PM"],
  ["A111", "Dr. Adam Phyall", "Unlocking Student Engagement Through Meaningful EdTech Infusion", "3:00 PM"],
  ["A112", "Tracy Story", "What's Newt at Zoom", "1:00 PM"],
  ["A112", "Tracy Story", "What's Newt at Zoom", "2:00 PM"],
  ["A113", "Charlene Armstrong", "Excel Basics", "10:00 AM"],
  ["A113", "Charlene Armstrong", "Excel Basics", "1:00 PM"],
  ["A111", "Felishia Wagner", "Canva Your Trick Play", "1:00 PM"],
  ["B101", "Latiffany Montgomery, Tichina Mack, Buffy Day", "Unlocking the Power of STEAM through the Magic of Literacy!", "1:00 PM"],
  ["B101", "Kelly Silver", "Canvas for Beginners", "10:00 AM"],
  ["B101", "Faith Parker and Steven Setser", "Connecting Through Creativity: Exploring Specials, Connections, and Electives with Book Creator", "2:00 PM"],
  ["B102", "Wendy Williamson", "Self-Contained Progress Monitoring with N2Y", "10:00 AM"],
  ["B102", "Krista Safrit", "Lexia Core 5 Life Hacks", "11:00 AM"],
  ["B102", "Dr. Yolanda Williams", "Digital Delights Make Literacy Just Right", "1:00 PM"],
  ["B103", "Kymberli Williams", "Create to Differentiate", "11:00 AM"],
  ["B103", "Batini Farris", "Canva the G.O.A.T.T. (Greatest of All Time Teaching Tool)", "10:00 AM"],
  ["B103", "Toran Davis", "Canvas Quills: Co-Writing Connections", "1:00 PM"],
  ["B103", "Toran Davis", "Beyond Words: Promoting Non-linguistic Representations through NearPod", "2:00 PM"],
  ["B104", "Mary Catherine Whisnant", "What's On Your Plate?", "10:00 AM"],
  ["B104", "Natasha Blades", "Canvas for Beginners", "1:00 PM"],
  ["B104", "Natasha Blades", "Mastering Google Forms: Leveraging Branching for Differentiation", "3:00 PM"],
  ["B104", "Natasha Blades", "Differentiation? NearPod makes that a breeze!", "11:00 AM"],
  ["B105", "Molly Bowden", "Canvas for Beginners", "10:00 AM"],
  ["B105", "Molly Bowden", "Eduprotocols (Iron Chef, Sketch and Tell)", "1:00 PM"],
  ["B105", "Molly Bowden", "Writing Yoga", "2:00 PM"],
  ["B105", "Molly Bowden", "Ignite the Reader Inside", "3:00 PM"],
  ["B106", "Dr. Angela Woods", "Canvas Advanced-Mastery Paths", "10:00 AM"],
  ["B106", "Dr. Angela Woods", "Canvas Intermediate", "11:00 AM"],
  ["B106", "Dr. Angela Woods", "Canvas for Beginners", "1:00 PM"],
  ["B107", "Taylor Oliver", "EVERFI for High School", "10:00 AM"],
  ["B107", "Taylor Oliver", "EVERFI for Elementary", "11:00 AM"],
  ["B107", "Taylor Oliver", "EVERFI for Middle School", "1:00 PM"],
  ["B107", "Taylor Oliver", "EVERFI for High School", "2:00 PM"],
  ["B108", "Dr. Ashante Everett", "504 Training", "1:00 PM"],
  ["B108", "Dr. Ashante Everett", "Behavior Entry Training", "2:30 PM"],
  ["B108", "Dr. Ashante Everett", "Hearing Officer Training", "3:30 PM"],
  ["B110", "Chantal Hendrix", "Canvas for Beginners", "10:00 AM"],
  ["B110", "Chantal Hendrix", "Passing Knowledge Scoring Success!", "1:00 PM"],
  ["B110", "Chantal Hendrix", "Passing Knowledge Scoring Success!", "2:00 PM"],
  ["B110", "Chantal Hendrix", "Canva Magic! Canva Create Updates, Canva Courses, Studio, Design, Write, etc.", "3:00 PM"],
  ["B111", "Shwante Mann", "Microsoft Teams-Getting Started", "10:00 AM"],
  ["B111", "Shawnte Mann", "Canvas for Beginners", "1:00 PM"],
  ["B111", "Shawnte Mann", "Kick off Learning with DE Calendars", "3:00 PM"],
  ["B113", "Joe Marshall", "Introduction to Adobe Express", "10:00 AM"],
  ["B113", "Joe Marshall", "Student Presentation with Adobe Express", "11:00 AM"],
  ["B113", "Joe Marshall", "Introduction to Adobe Express", "1:00 PM"],
  ["B113", "Joe Marshall", "Visible Thinking Routines with Adobe Express", "2:00 PM"],
  ["EHS Auditorium", "Amy Denty", "Keynote Address-Amy Denty", "9:00 AM"],
  ["EHS Learning Commons", "Amy Denty", "GA Literacy and how it affects schools and Media Centers", "10:00 AM"],
  ["EHS Learning Commons", "Amy Denty", "GA Literacy and how it affects schools and Media Centers", "11:00 AM"],
  ["G102", "Kobe Smith-Facilitator/ Jonathan So", "Minecraft for Education", "10:00 AM"],
  ["G102", "Kobe Smith-Facilitator/ Jonathan So", "Minecraft for Education", "11:00 AM"],
  ["G102", "Kobe Smith-Facilitator/ Jonathan So", "Minecraft for Education", "1:00 PM"],
  ["G102", "Kobe Smith-Facilitator/ Jonathan So", "Minecraft for Education", "2:00 PM"],
  ["G104", "Brandi Renfro", "Gamification in Action: Using your Promethean Panel and Classroom Applications to create fun and engaging games and activities in the classroom!", "10:00 AM"],
  ["G104", "Brandi Renfro", "Bringing the FUN back into fundamentals: Using your promethean panel to provide engagement, interaction, and collaboration in the classroom.", "11:00 AM"],
  ["G104", "Brandi Renfro", "Gamification in Action: Using your Promethean Panel and Classroom Applications to create fun and engaging games and activities in the classroom!", "1:00 PM"],
  ["G104", "Brandi Renfro", "Bringing the FUN back into fundamentals: Using your promethean panel to provide engagement, interaction, and collaboration in the classroom.", "2:00 PM"],
  ["G109", "", "Book Giveaway-Veteran Teachers Only", "All Day"],
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inferTrack(title) {
  const text = title.toLowerCase();

  if (text.includes("keynote")) return "Keynote";
  if (text.includes("canvas")) return "Canvas";
  if (text.includes("canva")) return "Canva";
  if (text.includes("book creator")) return "Book Creator";
  if (text.includes("nearpod")) return "NearPod";
  if (text.includes("literacy") || text.includes("reading") || text.includes("writing") || text.includes("lexia")) {
    return "Literacy";
  }
  if (text.includes("math") || text.includes("steam") || text.includes("minecraft")) return "STEM";
  if (text.includes("admin") || text.includes("training") || text.includes("504") || text.includes("hearing officer")) {
    return "Administration";
  }
  if (
    text.includes("classlink") ||
    text.includes("adobe") ||
    text.includes("teams") ||
    text.includes("excel") ||
    text.includes("discovery education") ||
    text.includes("everfi") ||
    text.includes("promethean") ||
    text.includes("zoom") ||
    text.includes("onenote")
  ) {
    return "Technology";
  }
  if (text.includes("family") || text.includes("community")) return "Community";
  if (text.includes("differentiat")) return "Differentiation";
  return "General";
}

function timeValue(time) {
  if (time === "All Day") return 0;

  const match = time.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!match) return Number.MAX_SAFE_INTEGER;

  let hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function isInTimeRange(time, range) {
  if (!range) return false;
  const value = timeValue(time);
  const start = timeValue(range[0]);
  const end = timeValue(range[1]);
  return value >= start && value <= end;
}

const sheetId = "1hkPRbLu896lcpbsNbd5IGjlBXG_2ic0Q_r5J7qB0lmY";
const sheetName = "T4T Check Off";
const detailsSheetName = "Chosen Sessions";
const liveSheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(sheetName)}`;
const liveDetailsUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(detailsSheetName)}`;

let detailsByTitle = new Map();
let detailsByTitlePresenter = new Map();

function normalizeLookup(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function detailKey(title, presenter = "") {
  return `${normalizeLookup(title)}|${normalizeLookup(presenter)}`;
}

function getSessionDetail(title, presenter = "") {
  return detailsByTitlePresenter.get(detailKey(title, presenter)) || detailsByTitle.get(normalizeLookup(title)) || null;
}

function applySessionDetail(session) {
  const detail = getSessionDetail(session.title, session.presenter);
  if (!detail) return session;

  return {
    ...session,
    presenter: session.presenter || detail.presenter || "Teach for Tomorrow",
    description: session.hasDetailDescription ? session.description : detail.description || session.description,
    hasDetailDescription: session.hasDetailDescription || Boolean(detail.description),
    strategy: session.strategy || detail.strategy,
    audience: session.audience || detail.audience,
  };
}

function buildSessions(rows) {
  return rows
    .map(([room, presenter, title, time, description = "", audience = "", strategy = ""], index) => ({
    id: `session-row-${index + 1}`,
    title,
    presenter: presenter || "Teach for Tomorrow",
    time,
    room: room.trim(),
    track: inferTrack(title),
    description: description || `${title} with ${presenter || "Teach for Tomorrow"}.`,
    hasDetailDescription: Boolean(description),
    audience,
    strategy,
  }))
    .map(applySessionDetail)
    .sort((a, b) => timeValue(a.time) - timeValue(b.time) || a.room.localeCompare(b.room));
}

let sessions = buildSessions(sessionRows);

const storageKey = "teachForTomorrowSchedule2026";
const languageStorageKey = "teachForTomorrowLanguage";
const mapStorageKey = "teachForTomorrowMap";
let savedSessionIds = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
let activeTrack = "All";
let currentLanguage = localStorage.getItem(languageStorageKey) || "en";
let selectedPresenter = "";
let selectedDirectoryTime = "";
let selectedDirectoryTimes = [];
let selectedDirectoryRange = null;
let selectedOperationTitle = "";
let viewHistory = [];

const sessionList = document.querySelector("#sessionList");
const operationScheduleList = document.querySelector("#operationScheduleList");
const scheduleList = document.querySelector("#scheduleList");
const searchInput = document.querySelector("#sessionSearch");
const refreshScheduleButton = document.querySelector("#refreshScheduleButton");
const resultCount = document.querySelector("#resultCount");
const syncStatus = document.querySelector("#syncStatus");
const scheduleCount = document.querySelector("#scheduleCount");
const schedulePill = document.querySelector("#schedulePill");
const appBackButton = document.querySelector("#appBackButton");
const trackFilters = document.querySelector("#trackFilters");
const languageSelect = document.querySelector("#languageSelect");
const mapUpload = document.querySelector("#mapUpload");
const mapPreview = document.querySelector("#mapPreview");
const foodTruckList = document.querySelector("#foodTruckList");
const innovationList = document.querySelector("#innovationList");
const presenterSearch = document.querySelector("#presenterSearch");
const presenterList = document.querySelector("#presenterList");
const presenterDetail = document.querySelector("#presenterDetail");
const detailsSearch = document.querySelector("#detailsSearch");
const sessionDetailList = document.querySelector("#sessionDetailList");

const foodTrucks = [
  {
    name: "Food truck options coming soon",
    description: "Vendor names, menus, and service times can be added here when they are finalized.",
    note: "Check back later",
  },
  {
    name: "Lunch details",
    description: "Use this space for meal windows, payment notes, dietary labels, or pickup locations.",
    note: "To be announced",
  },
];

const innovationZoneItems = [
  {
    name: "Nearpod",
    description: "Interactive lesson tools and classroom engagement ideas.",
    host: "Innovation Zone team",
  },
  {
    name: "Amazon",
    description: "Featured resources and classroom technology connections.",
    host: "Innovation Zone team",
  },
  {
    name: "MagicSchool",
    description: "AI-supported planning, productivity, and instructional workflows.",
    host: "Innovation Zone team",
  },
  {
    name: "Sora",
    description: "Digital reading access and student-friendly ebook discovery.",
    host: "Lori McGovern",
  },
  {
    name: "VR",
    description: "Immersive learning experiences and classroom-ready virtual reality ideas.",
    host: "Shawnte Mann",
  },
];

const operationSchedule = [
  {
    time: "8:00-9:00 AM",
    title: "Registration",
    details: "Check in, pick up materials, and get settled for the day.",
    location: "Main entrance",
  },
  {
    time: "9:00-9:45 AM",
    title: "Keynote Address",
    details: "Mission kickoff with Leslie Fisher.",
    location: "EHS Auditorium",
    sessionRange: ["9:00 AM", "9:45 AM"],
  },
  {
    time: "9:45-10:00 AM",
    title: "Transition",
    details: "Move to first breakout session or visit support areas.",
    location: "Hallways",
  },
  {
    time: "10:00-10:50 AM",
    title: "Breakout Sessions",
    details: "First round of morning sessions across campus.",
    location: "Session rooms",
    sessionRange: ["10:10 AM", "11:00 AM"],
  },
  {
    time: "11:00-11:50 AM",
    title: "Breakout Sessions",
    details: "Second round of morning sessions.",
    location: "Session rooms",
    sessionRange: ["11:00 AM", "12:00 PM"],
  },
  {
    time: "12:00-12:50 PM",
    title: "Lunch, Food Trucks, and Innovation Zone",
    details: "Grab lunch, connect with colleagues, and explore featured tools.",
    location: "Food truck area and Innovation Zone",
  },
  {
    time: "1:00-1:50 PM",
    title: "Breakout Sessions",
    details: "Afternoon session block one.",
    location: "Session rooms",
    sessionRange: ["1:00 PM", "2:00 PM"],
  },
  {
    time: "2:00-2:50 PM",
    title: "Breakout Sessions",
    details: "Afternoon session block two.",
    location: "Session rooms",
    sessionRange: ["2:00 PM", "3:00 PM"],
  },
  {
    time: "3:00-3:50 PM",
    title: "Final Sessions and Specialized Training",
    details: "Last session options, trainings, and closing learning opportunities.",
    location: "Session rooms",
    sessionRange: ["3:00 PM", "4:00 PM"],
  },
];

const translations = {
  en: {
    appTitle: "Mission Control",
    backButton: "← Back",
    translateLabel: "Translate",
    openSchedule: "Open My Schedule",
    mySchedule: "My Schedule",
    directoryTitle: "Session Launchpad",
    directoryHelp: "Search by title, presenter, room, track, or keyword.",
    searchLabel: "Search",
    searchPlaceholder: "Try literacy, Room 204, equity...",
    trackFilters: "Track filters",
    scheduleHelp: "Your saved sessions, grouped by time.",
    mainNavigation: "Main navigation",
    directoryTab: "Times",
    detailsTab: "Sessions",
    detailsTitle: "Session Details",
    detailsHelp: "Tap a session to read the full description.",
    detailsSearchPlaceholder: "Search descriptions, presenters, or keywords...",
    operationTab: "Schedule",
    operationTitle: "Operation Schedule",
    operationHelp: "Your day-at-a-glance mission timeline.",
    operationCount: "{count} session options",
    operationBack: "Back to Operation Schedule",
    operationAction: "View session options",
    refreshSchedule: "Refresh schedule",
    syncFallback: "Using built-in schedule.",
    syncLoading: "Checking the live schedule...",
    syncUpdated: "Live schedule updated at {time}.",
    syncError: "Live sheet unavailable. Showing the built-in schedule.",
    mapTab: "Map",
    foodTab: "Food",
    innovationTab: "Innovation",
    presentersTab: "Presenters",
    mapTitle: "School Map",
    mapHelp: "Load a school map for attendees to reference during the conference.",
    mapUploadLabel: "Upload school map",
    mapEmpty: "No map loaded yet. Upload an image of the school map and it will appear here.",
    foodTitle: "Food Trucks",
    foodHelp: "Food truck options and meal notes for attendees.",
    innovationTitle: "Innovation Zone",
    innovationHelp: "Explore hands-on tools and featured experiences.",
    presentersTitle: "Presenters",
    presentersHelp: "Tap a presenter to view details and their sessions.",
    presenterSearchPlaceholder: "Search presenters...",
    presenterInfo: "{presenter} is presenting {count} session(s) at Teach for Tomorrow.",
    presenterSessionCount: "{count} session(s)",
    presenterSessions: "Sessions",
    viewSession: "View session",
    hostedBy: "Hosted by",
    viewDetails: "View details",
    hideDetails: "Hide details",
    strategy: "Strategy",
    audience: "Audience",
    noDetails: "No session descriptions match that search yet.",
    add: "Add to My Schedule",
    added: "Added to My Schedule",
    remove: "Remove from My Schedule",
    presenter: "Presenter",
    time: "Time",
    room: "Room",
    noResults: "No sessions match that search yet.",
    backToTimes: "← All Times",
    chooseTime: "Choose a time",
    noPresenters: "No presenters match that search yet.",
    emptySchedule: "Your schedule is empty. Add sessions from the directory and they will appear here.",
    oneResult: "1 session found",
    manyResults: "{count} sessions found",
    allDay: "All Day",
    description: "Session presented by {presenter}.",
  },
  es: {
    appTitle: "Centro de Misión",
    backButton: "← Atrás",
    translateLabel: "Traducir",
    openSchedule: "Abrir mi horario",
    mySchedule: "Mi horario",
    directoryTitle: "Plataforma de sesiones",
    directoryHelp: "Busque por título, presentador, salón, rama o palabra clave.",
    searchLabel: "Buscar",
    searchPlaceholder: "Pruebe alfabetización, salón 204, equidad...",
    trackFilters: "Filtros de rama",
    scheduleHelp: "Sus sesiones guardadas, agrupadas por hora.",
    mainNavigation: "Navegación principal",
    directoryTab: "Horarios",
    detailsTab: "Sesiones",
    detailsTitle: "Detalles de las sesiones",
    detailsHelp: "Toque una sesión para leer la descripción completa.",
    detailsSearchPlaceholder: "Buscar descripciones, presentadores o palabras clave...",
    operationTab: "Horario",
    operationTitle: "Horario de operación",
    operationHelp: "Su cronograma general de misión para el día.",
    operationCount: "{count} opciones de sesión",
    operationBack: "Volver al horario de operación",
    operationAction: "Ver opciones de sesión",
    refreshSchedule: "Actualizar horario",
    syncFallback: "Usando el horario integrado.",
    syncLoading: "Consultando el horario en vivo...",
    syncUpdated: "Horario en vivo actualizado a las {time}.",
    syncError: "La hoja en vivo no está disponible. Se muestra el horario integrado.",
    mapTab: "Mapa",
    foodTab: "Comida",
    innovationTab: "Innovación",
    presentersTab: "Presentadores",
    mapTitle: "Mapa de la escuela",
    mapHelp: "Cargue un mapa de la escuela para que los asistentes lo consulten durante la conferencia.",
    mapUploadLabel: "Cargar mapa de la escuela",
    mapEmpty: "Aún no se ha cargado ningún mapa. Cargue una imagen del mapa de la escuela y aparecerá aquí.",
    foodTitle: "Camiones de comida",
    foodHelp: "Opciones de comida y notas para los asistentes.",
    innovationTitle: "Zona de Innovación",
    innovationHelp: "Explore herramientas prácticas y experiencias destacadas.",
    presentersTitle: "Presentadores",
    presentersHelp: "Toque un presentador para ver detalles y sus sesiones.",
    presenterSearchPlaceholder: "Buscar presentadores...",
    presenterInfo: "{presenter} presenta {count} sesión(es) en Teach for Tomorrow.",
    presenterSessionCount: "{count} sesión(es)",
    presenterSessions: "Sesiones",
    viewSession: "Ver sesión",
    hostedBy: "Presentado por",
    viewDetails: "Ver detalles",
    hideDetails: "Ocultar detalles",
    strategy: "Estrategia",
    audience: "Audiencia",
    noDetails: "Todavía no hay descripciones de sesiones que coincidan con esa búsqueda.",
    add: "Agregar a mi horario",
    added: "Agregado a mi horario",
    remove: "Quitar de mi horario",
    presenter: "Presentador",
    time: "Hora",
    room: "Salón",
    noResults: "Todavía no hay sesiones que coincidan con esa búsqueda.",
    backToTimes: "← Todos los horarios",
    chooseTime: "Elija una hora",
    noPresenters: "Todavía no hay presentadores que coincidan con esa búsqueda.",
    emptySchedule: "Su horario está vacío. Agregue sesiones desde el directorio y aparecerán aquí.",
    oneResult: "1 sesión encontrada",
    manyResults: "{count} sesiones encontradas",
    allDay: "Todo el día",
    description: "Sesión presentada por {presenter}.",
  },
  fr: {
    appTitle: "Centre de Mission",
    backButton: "← Retour",
    translateLabel: "Traduire",
    openSchedule: "Ouvrir mon programme",
    mySchedule: "Mon programme",
    directoryTitle: "Rampe de lancement des séances",
    directoryHelp: "Recherchez par titre, intervenant, salle, volet ou mot-clé.",
    searchLabel: "Rechercher",
    searchPlaceholder: "Essayez littératie, salle 204, équité...",
    trackFilters: "Filtres de volet",
    scheduleHelp: "Vos séances enregistrées, regroupées par heure.",
    mainNavigation: "Navigation principale",
    directoryTab: "Heures",
    detailsTab: "Séances",
    detailsTitle: "Détails des séances",
    detailsHelp: "Touchez une séance pour lire la description complète.",
    detailsSearchPlaceholder: "Rechercher des descriptions, des intervenants ou des mots-clés...",
    operationTab: "Programme",
    operationTitle: "Programme d'opération",
    operationHelp: "Votre chronologie de mission pour la journée.",
    operationCount: "{count} options de séance",
    operationBack: "Retour au programme d'opération",
    operationAction: "Voir les options de séance",
    refreshSchedule: "Actualiser le programme",
    syncFallback: "Programme intégré utilisé.",
    syncLoading: "Vérification du programme en direct...",
    syncUpdated: "Programme en direct mis à jour à {time}.",
    syncError: "La feuille en direct est indisponible. Le programme intégré s'affiche.",
    mapTab: "Plan",
    foodTab: "Repas",
    innovationTab: "Innovation",
    presentersTab: "Intervenants",
    mapTitle: "Plan de l'école",
    mapHelp: "Chargez un plan de l'école que les participants pourront consulter pendant la conférence.",
    mapUploadLabel: "Charger le plan de l'école",
    mapEmpty: "Aucun plan n'est encore chargé. Chargez une image du plan de l'école et elle apparaîtra ici.",
    foodTitle: "Food trucks",
    foodHelp: "Options de repas et notes pour les participants.",
    innovationTitle: "Zone Innovation",
    innovationHelp: "Découvrez des outils pratiques et des expériences vedettes.",
    presentersTitle: "Intervenants",
    presentersHelp: "Touchez un intervenant pour voir ses détails et ses séances.",
    presenterSearchPlaceholder: "Rechercher des intervenants...",
    presenterInfo: "{presenter} présente {count} séance(s) à Teach for Tomorrow.",
    presenterSessionCount: "{count} séance(s)",
    presenterSessions: "Séances",
    viewSession: "Voir la séance",
    hostedBy: "Animé par",
    viewDetails: "Voir les détails",
    hideDetails: "Masquer les détails",
    strategy: "Stratégie",
    audience: "Public",
    noDetails: "Aucune description de séance ne correspond encore à cette recherche.",
    add: "Ajouter à mon programme",
    added: "Ajouté à mon programme",
    remove: "Retirer de mon programme",
    presenter: "Intervenant",
    time: "Heure",
    room: "Salle",
    noResults: "Aucune séance ne correspond encore à cette recherche.",
    backToTimes: "← Toutes les heures",
    chooseTime: "Choisissez une heure",
    noPresenters: "Aucun intervenant ne correspond encore à cette recherche.",
    emptySchedule: "Votre programme est vide. Ajoutez des séances depuis le répertoire et elles apparaîtront ici.",
    oneResult: "1 séance trouvée",
    manyResults: "{count} séances trouvées",
    allDay: "Toute la journée",
    description: "Séance présentée par {presenter}.",
  },
  hi: {
    appTitle: "मिशन कंट्रोल",
    backButton: "← वापस",
    translateLabel: "अनुवाद",
    openSchedule: "मेरा कार्यक्रम खोलें",
    mySchedule: "मेरा कार्यक्रम",
    directoryTitle: "सत्र लॉन्चपैड",
    directoryHelp: "शीर्षक, प्रस्तुतकर्ता, कमरा, ट्रैक या कीवर्ड से खोजें।",
    searchLabel: "खोजें",
    searchPlaceholder: "जैसे साक्षरता, Room 204, समानता...",
    trackFilters: "ट्रैक फ़िल्टर",
    scheduleHelp: "आपके चुने हुए सत्र, समय के अनुसार समूहबद्ध।",
    mainNavigation: "मुख्य नेविगेशन",
    directoryTab: "समय",
    detailsTab: "सत्र",
    detailsTitle: "सत्र विवरण",
    detailsHelp: "पूरा विवरण पढ़ने के लिए किसी सत्र पर टैप करें।",
    detailsSearchPlaceholder: "विवरण, प्रस्तुतकर्ता या कीवर्ड खोजें...",
    operationTab: "कार्यक्रम",
    operationTitle: "ऑपरेशन कार्यक्रम",
    operationHelp: "दिन भर की मिशन समयरेखा।",
    operationCount: "{count} सत्र विकल्प",
    operationBack: "ऑपरेशन कार्यक्रम पर वापस जाएँ",
    operationAction: "सत्र विकल्प देखें",
    refreshSchedule: "कार्यक्रम रीफ्रेश करें",
    syncFallback: "बिल्ट-इन कार्यक्रम उपयोग हो रहा है।",
    syncLoading: "लाइव कार्यक्रम जाँचा जा रहा है...",
    syncUpdated: "लाइव कार्यक्रम {time} पर अपडेट हुआ।",
    syncError: "लाइव शीट उपलब्ध नहीं है। बिल्ट-इन कार्यक्रम दिखाया जा रहा है।",
    mapTab: "मानचित्र",
    foodTab: "भोजन",
    innovationTab: "इनोवेशन",
    presentersTab: "प्रस्तुतकर्ता",
    mapTitle: "स्कूल मानचित्र",
    mapHelp: "सम्मेलन के दौरान देखने के लिए स्कूल का मानचित्र लोड करें।",
    mapUploadLabel: "स्कूल मानचित्र अपलोड करें",
    mapEmpty: "अभी कोई मानचित्र लोड नहीं है। स्कूल मानचित्र की छवि अपलोड करें और वह यहाँ दिखाई देगी।",
    foodTitle: "फूड ट्रक",
    foodHelp: "उपस्थित लोगों के लिए भोजन विकल्प और नोट्स।",
    innovationTitle: "इनोवेशन ज़ोन",
    innovationHelp: "हाथों-हाथ टूल और विशेष अनुभव देखें।",
    presentersTitle: "प्रस्तुतकर्ता",
    presentersHelp: "विवरण और सत्र देखने के लिए प्रस्तुतकर्ता पर टैप करें।",
    presenterSearchPlaceholder: "प्रस्तुतकर्ता खोजें...",
    presenterInfo: "{presenter} Teach for Tomorrow में {count} सत्र प्रस्तुत कर रहे हैं।",
    presenterSessionCount: "{count} सत्र",
    presenterSessions: "सत्र",
    viewSession: "सत्र देखें",
    hostedBy: "मेज़बान",
    viewDetails: "विवरण देखें",
    hideDetails: "विवरण छिपाएँ",
    strategy: "रणनीति",
    audience: "दर्शक",
    noDetails: "इस खोज से मेल खाते सत्र विवरण अभी नहीं मिले।",
    add: "मेरे कार्यक्रम में जोड़ें",
    added: "मेरे कार्यक्रम में जोड़ा गया",
    remove: "मेरे कार्यक्रम से हटाएँ",
    presenter: "प्रस्तुतकर्ता",
    time: "समय",
    room: "कमरा",
    noResults: "इस खोज से मेल खाने वाले सत्र अभी नहीं मिले।",
    backToTimes: "← सभी समय",
    chooseTime: "समय चुनें",
    noPresenters: "इस खोज से मेल खाने वाले प्रस्तुतकर्ता अभी नहीं मिले।",
    emptySchedule: "आपका कार्यक्रम खाली है। निर्देशिका से सत्र जोड़ें और वे यहाँ दिखाई देंगे।",
    oneResult: "1 सत्र मिला",
    manyResults: "{count} सत्र मिले",
    allDay: "पूरा दिन",
    description: "{presenter} द्वारा प्रस्तुत सत्र।",
  },
};

const trackTranslations = {
  en: {
    All: "All",
    Administration: "Administration",
    "Book Creator": "Book Creator",
    Canva: "Canva",
    Canvas: "Canvas",
    Community: "Community",
    Differentiation: "Differentiation",
    General: "General",
    Keynote: "Keynote",
    Literacy: "Literacy",
    NearPod: "NearPod",
    STEM: "STEM",
    Technology: "Technology",
  },
  es: {
    All: "Todo",
    Administration: "Administración",
    "Book Creator": "Book Creator",
    Canva: "Canva",
    Canvas: "Canvas",
    Community: "Comunidad",
    Differentiation: "Diferenciación",
    General: "General",
    Keynote: "Conferencia principal",
    Literacy: "Alfabetización",
    NearPod: "NearPod",
    STEM: "STEM",
    Technology: "Tecnología",
  },
  fr: {
    All: "Tout",
    Administration: "Administration",
    "Book Creator": "Book Creator",
    Canva: "Canva",
    Canvas: "Canvas",
    Community: "Communauté",
    Differentiation: "Différenciation",
    General: "Général",
    Keynote: "Conférence principale",
    Literacy: "Littératie",
    NearPod: "NearPod",
    STEM: "STEM",
    Technology: "Technologie",
  },
  hi: {
    All: "सभी",
    Administration: "प्रशासन",
    "Book Creator": "Book Creator",
    Canva: "Canva",
    Canvas: "Canvas",
    Community: "समुदाय",
    Differentiation: "भिन्नीकरण",
    General: "सामान्य",
    Keynote: "मुख्य भाषण",
    Literacy: "साक्षरता",
    NearPod: "NearPod",
    STEM: "STEM",
    Technology: "तकनीक",
  },
};

function t(key, values = {}) {
  let text = translations[currentLanguage]?.[key] || translations.en[key] || key;
  Object.entries(values).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value);
  });
  return text;
}

function translateTrack(track) {
  return trackTranslations[currentLanguage]?.[track] || track;
}

function translateTime(time) {
  return time === "All Day" ? t("allDay") : time;
}

function translateDescription(session) {
  if (session.description) return session.description;
  return t("description", { presenter: session.presenter });
}

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];
    const next = csv[index + 1];

    if (quoted && character === '"' && next === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (!quoted && character === ",") {
      row.push(value);
      value = "";
    } else if (!quoted && (character === "\n" || character === "\r")) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function normalizeTime(value) {
  return value.replace(/:00\s+(AM|PM)$/i, " $1").trim();
}

function rowsFromCsv(csv) {
  const [headerRow, ...rows] = parseCsv(csv);
  const headers = headerRow.map((heading) => heading.trim().toLowerCase());
  const roomIndex = headers.findIndex((heading) => heading.includes("room"));
  const presenterIndex = headers.findIndex((heading) => heading.includes("speaker") || heading.includes("presenter"));
  const titleIndex = headers.findIndex((heading) => heading.includes("title"));
  const timeIndex = headers.findIndex((heading) => heading.includes("time"));
  const descriptionIndex = headers.findIndex((heading) => heading.includes("description"));
  const audienceIndex = headers.findIndex((heading) => heading.includes("audience"));
  const strategyIndex = headers.findIndex((heading) => heading.includes("strategy"));

  return rows
    .map((row) => [
      row[roomIndex] || "",
      row[presenterIndex] || "",
      row[titleIndex] || "",
      normalizeTime(row[timeIndex] || "All Day"),
      row[descriptionIndex] || "",
      row[audienceIndex] || "",
      row[strategyIndex] || "",
    ])
    .filter(([room, presenter, title, time]) => room && title && time);
}

function getCellValue(row, index) {
  if (index < 0) return "";
  const cell = row.c[index];
  return cell ? String(cell.f || cell.v || "").trim() : "";
}

function rowsFromSheetResponse(response) {
  const tableRows = response.table?.rows || [];
  const headers = (response.table?.cols || []).map((column) => (column.label || "").trim().toLowerCase());
  const roomIndex = headers.findIndex((heading) => heading.includes("room"));
  const presenterIndex = headers.findIndex((heading) => heading.includes("speaker") || heading.includes("presenter"));
  const titleIndex = headers.findIndex((heading) => heading.includes("title"));
  const timeIndex = headers.findIndex((heading) => heading.includes("time"));
  const descriptionIndex = headers.findIndex((heading) => heading.includes("description"));
  const audienceIndex = headers.findIndex((heading) => heading.includes("audience"));
  const strategyIndex = headers.findIndex((heading) => heading.includes("strategy"));

  return tableRows
    .map((row) => [
      getCellValue(row, roomIndex),
      getCellValue(row, presenterIndex),
      getCellValue(row, titleIndex),
      normalizeTime(getCellValue(row, timeIndex) || "All Day"),
      getCellValue(row, descriptionIndex),
      getCellValue(row, audienceIndex),
      getCellValue(row, strategyIndex),
    ])
    .filter(([room, presenter, title, time]) => room && title && time && room !== "Room Number");
}

function rowsFromDetailsResponse(response) {
  const tableRows = response.table?.rows || [];
  const headers = (response.table?.cols || []).map((column) => (column.label || "").trim().toLowerCase());
  const titleIndex = headers.findIndex(
    (heading) => heading.includes("session name") || heading.includes("focus") || heading.includes("title"),
  );
  const strategyIndex = headers.findIndex((heading) => heading.includes("strategy"));
  const descriptionIndex = headers.findIndex((heading) => heading.includes("description"));
  const audienceIndex = headers.findIndex((heading) => heading.includes("audience"));
  const presenterIndex = headers.findIndex((heading) => heading.includes("presenter") || heading.includes("speaker"));

  return tableRows
    .map((row) => ({
      title: getCellValue(row, titleIndex),
      strategy: getCellValue(row, strategyIndex),
      description: getCellValue(row, descriptionIndex),
      audience: getCellValue(row, audienceIndex),
      presenter: getCellValue(row, presenterIndex),
    }))
    .filter((detail) => detail.title && detail.description);
}

function setSessionDetails(details) {
  detailsByTitle = new Map();
  detailsByTitlePresenter = new Map();

  details.forEach((detail) => {
    detailsByTitle.set(normalizeLookup(detail.title), detail);
    if (detail.presenter) {
      detailsByTitlePresenter.set(detailKey(detail.title, detail.presenter), detail);
    }
  });
}

function fetchSheetResponse(url, label) {
  return new Promise((resolve, reject) => {
    const callbackName = `handle${label}_${Date.now()}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };

    window[callbackName] = (response) => {
      cleanup();
      resolve(response);
    };

    script.addEventListener("error", () => {
      cleanup();
      reject(new Error("Live sheet script could not load."));
    });

    script.src = `${url}&tqx=responseHandler:${callbackName}&cacheBust=${Date.now()}`;
    document.body.append(script);
  });
}

async function fetchSheetRows() {
  return rowsFromSheetResponse(await fetchSheetResponse(liveSheetUrl, "Schedule"));
}

async function fetchSessionDetails() {
  return rowsFromDetailsResponse(await fetchSheetResponse(liveDetailsUrl, "Details"));
}

function setSyncStatus(key, values = {}) {
  syncStatus.textContent = t(key, values);
  syncStatus.dataset.syncKey = key;
  syncStatus.dataset.syncValues = JSON.stringify(values);
}

async function loadLiveSchedule() {
  setSyncStatus("syncLoading");
  refreshScheduleButton.disabled = true;

  try {
    const [rows, details] = await Promise.all([fetchSheetRows(), fetchSessionDetails().catch(() => [])]);
    if (!rows.length) throw new Error("Live sheet did not include schedule rows.");

    setSessionDetails(details);
    sessions = buildSessions(rows);
    selectedDirectoryTime = "";
    setSyncStatus("syncUpdated", {
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    });
    refresh();
  } catch (error) {
    console.warn(error);
    setSessionDetails([]);
    sessions = buildSessions(sessionRows);
    selectedDirectoryTime = "";
    setSyncStatus("syncError");
    refresh();
  } finally {
    refreshScheduleButton.disabled = false;
  }
}

function getPresenterNames(presenter) {
  return presenter
    .replace(/\s+-\s+Facilitator/gi, "-Facilitator")
    .split(/\s*(?:,|&|\/|\band\b)\s*/i)
    .map((name) => name.trim())
    .filter(Boolean);
}

function getPresenterSessions(presenterName) {
  return sessions.filter((session) => getPresenterNames(session.presenter).includes(presenterName));
}

function getPresenterSortName(name) {
  const cleanName = name
    .replace(/\b(?:Dr|Mr|Mrs|Ms|Miss)\.?\s+/gi, "")
    .replace(/\([^)]*\)/g, "")
    .trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  const lastName = parts.at(-1) || cleanName;
  return `${lastName} ${cleanName}`.toLowerCase();
}

function saveSchedule() {
  localStorage.setItem(storageKey, JSON.stringify([...savedSessionIds]));
  scheduleCount.textContent = savedSessionIds.size;
}

function pruneSavedSessions() {
  const currentIds = new Set(sessions.map((session) => session.id));
  savedSessionIds = new Set([...savedSessionIds].filter((id) => currentIds.has(id)));
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title =
    currentLanguage === "en"
      ? "Teach for Tomorrow Conference"
      : `Teach for Tomorrow - ${t("appTitle")}`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  if (syncStatus.dataset.syncKey) {
    const values = JSON.parse(syncStatus.dataset.syncValues || "{}");
    syncStatus.textContent = t(syncStatus.dataset.syncKey, values);
  }
}

function sessionMatchesSearch(session, query) {
  const haystack = [
    session.title,
    session.presenter,
    session.time,
    session.room,
    session.track,
    translateTrack(session.track),
    session.description,
    session.strategy,
    session.audience,
    translateDescription(session),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function getVisibleSessions() {
  const query = searchInput.value.trim();
  return sessions.filter((session) => {
    const matchesTrack = activeTrack === "All" || session.track === activeTrack;
    return matchesTrack && sessionMatchesSearch(session, query);
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character];
  });
}

function createSessionCard(session, context = "directory") {
  const isSaved = savedSessionIds.has(session.id);
  const description = translateDescription(session);
  const hasFullDetails = Boolean(session.hasDetailDescription || session.strategy || session.audience);
  const summary = description.length > 160 ? `${description.slice(0, 157).trim()}...` : description;
  const card = document.createElement("article");
  card.className = "session-card";
  card.id = `session-${session.id}`;
  const titleMarkup = hasFullDetails
    ? `<button class="session-title-button" type="button" data-toggle-details="${escapeHtml(session.id)}" aria-expanded="false" aria-controls="session-details-${escapeHtml(session.id)}">${escapeHtml(session.title)}</button>`
    : escapeHtml(session.title);
  card.innerHTML = `
    <div class="session-track">${escapeHtml(translateTrack(session.track))}</div>
    <h3 class="session-title">${titleMarkup}</h3>
    <div class="session-meta">
      <div class="meta-line"><strong>${escapeHtml(t("presenter"))}</strong><span>${escapeHtml(session.presenter)}</span></div>
      <div class="meta-line"><strong>${escapeHtml(t("time"))}</strong><span>${escapeHtml(translateTime(session.time))}</span></div>
      <div class="meta-line"><strong>${escapeHtml(t("room"))}</strong><span>${escapeHtml(session.room)}</span></div>
    </div>
    ${hasFullDetails ? "" : `<p class="session-description">${escapeHtml(summary)}</p>`}
    ${
      hasFullDetails
        ? `<div class="session-details" id="session-details-${escapeHtml(session.id)}" hidden>
            <p>${escapeHtml(description)}</p>
            ${session.strategy ? `<p><strong>${escapeHtml(t("strategy"))}:</strong> ${escapeHtml(session.strategy)}</p>` : ""}
            ${session.audience ? `<p><strong>${escapeHtml(t("audience"))}:</strong> ${escapeHtml(session.audience)}</p>` : ""}
          </div>`
        : ""
    }
  `;

  if (hasFullDetails) {
    const detailButton = document.createElement("button");
    detailButton.type = "button";
    detailButton.className = "detail-action";
    detailButton.dataset.toggleDetails = session.id;
    detailButton.setAttribute("aria-expanded", "false");
    detailButton.setAttribute("aria-controls", `session-details-${session.id}`);
    detailButton.textContent = t("viewDetails");
    card.append(detailButton);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.dataset.sessionId = session.id;

  if (context === "schedule") {
    button.className = "remove-action";
    button.textContent = t("remove");
  } else {
    button.className = `session-action${isSaved ? " saved" : ""}`;
    button.textContent = isSaved ? t("added") : t("add");
  }

  card.append(button);
  return card;
}

function jumpToSession(sessionId) {
  const session = sessions.find((item) => item.id === sessionId);
  if (!session) return;

  activeTrack = "All";
  selectedDirectoryTime = session.time;
  selectedDirectoryTimes = [];
  selectedDirectoryRange = null;
  selectedOperationTitle = "";
  searchInput.value = session.title;
  showPage("directoryPage");
  renderTrackFilters();
  renderDirectory();

  requestAnimationFrame(() => {
    const card = document.getElementById(`session-${sessionId}`);
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("session-highlight");
    window.setTimeout(() => card.classList.remove("session-highlight"), 1600);
  });
}

function getCurrentPageId() {
  return document.querySelector(".page.active")?.id || "operationPage";
}

function getCurrentViewState() {
  return {
    pageId: getCurrentPageId(),
    activeTrack,
    selectedDirectoryTime,
    selectedDirectoryTimes: [...selectedDirectoryTimes],
    selectedDirectoryRange: selectedDirectoryRange ? [...selectedDirectoryRange] : null,
    selectedOperationTitle,
    selectedPresenter,
    sessionSearch: searchInput.value,
    presenterSearch: presenterSearch.value,
    detailsSearch: detailsSearch.value,
  };
}

function sameViewState(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}

function updateBackButton() {
  appBackButton.hidden = viewHistory.length === 0;
}

function rememberView() {
  const state = getCurrentViewState();
  const lastState = viewHistory.at(-1);
  if (!lastState || !sameViewState(lastState, state)) {
    viewHistory.push(state);
  }
  updateBackButton();
}

function restoreViewState(state) {
  activeTrack = state.activeTrack || "All";
  selectedDirectoryTime = state.selectedDirectoryTime || "";
  selectedDirectoryTimes = state.selectedDirectoryTimes || [];
  selectedDirectoryRange = state.selectedDirectoryRange || null;
  selectedOperationTitle = state.selectedOperationTitle || "";
  selectedPresenter = state.selectedPresenter || "";
  searchInput.value = state.sessionSearch || "";
  presenterSearch.value = state.presenterSearch || "";
  detailsSearch.value = state.detailsSearch || "";

  showPage(state.pageId || "operationPage");
  renderTrackFilters();
  renderDirectory();
  renderPresenters();
  renderSessionDetails();
}

function goBackOneScreen() {
  const previousState = viewHistory.pop();
  if (!previousState) return;

  restoreViewState(previousState);
  updateBackButton();
}

function renderDirectory() {
  const visibleSessions = getVisibleSessions();
  const hasSearch = Boolean(searchInput.value.trim());
  sessionList.replaceChildren();

  if (!visibleSessions.length) {
    resultCount.textContent = t("manyResults", { count: 0 });
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noResults");
    sessionList.append(empty);
    return;
  }

  const groups = visibleSessions.reduce((grouped, session) => {
    grouped[session.time] ||= [];
    grouped[session.time].push(session);
    return grouped;
  }, {});

  if (hasSearch) {
    selectedDirectoryTime = "";
    selectedDirectoryTimes = [];
    selectedDirectoryRange = null;
    selectedOperationTitle = "";
    resultCount.textContent =
      visibleSessions.length === 1 ? t("oneResult") : t("manyResults", { count: visibleSessions.length });

    const grid = document.createElement("div");
    grid.className = "card-grid";
    visibleSessions.forEach((session) => grid.append(createSessionCard(session)));
    sessionList.append(grid);
    return;
  }

  if (selectedDirectoryRange || selectedDirectoryTimes.length) {
    const selectedSessions = visibleSessions.filter(
      (session) => selectedDirectoryTimes.includes(session.time) || isInTimeRange(session.time, selectedDirectoryRange),
    );
    resultCount.textContent =
      selectedSessions.length === 1 ? t("oneResult") : t("manyResults", { count: selectedSessions.length });

    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "back-button compact";
    backButton.dataset.operationBack = "true";
    backButton.textContent = t("operationBack");

    const group = document.createElement("section");
    group.className = "session-time-group";
    const heading = document.createElement("div");
    heading.className = "time-heading";
    heading.innerHTML = `<h3>${escapeHtml(selectedOperationTitle || t("directoryTitle"))}</h3>`;
    heading.prepend(backButton);

    const grid = document.createElement("div");
    grid.className = "card-grid";
    if (selectedSessions.length) {
      selectedSessions.forEach((session) => grid.append(createSessionCard(session)));
    } else {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = t("noResults");
      grid.append(empty);
    }

    group.append(heading);
    group.append(grid);
    sessionList.append(group);
    return;
  }

  if (!selectedDirectoryTime || !groups[selectedDirectoryTime]) {
    selectedDirectoryTime = "";
    const groupCount = Object.keys(groups).length;
    resultCount.textContent = `${escapeHtml(t("chooseTime"))}: ${groupCount}`;

    const timeGrid = document.createElement("div");
    timeGrid.className = "time-card-grid";

    Object.entries(groups).forEach(([time, timeSessions]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "time-card";
      button.dataset.time = time;
      button.innerHTML = `
        <strong>${escapeHtml(translateTime(time))}</strong>
        <span>${escapeHtml(t("manyResults", { count: timeSessions.length }))}</span>
      `;
      timeGrid.append(button);
    });

    sessionList.append(timeGrid);
    return;
  }

  const timeSessions = groups[selectedDirectoryTime];
  resultCount.textContent =
    timeSessions.length === 1 ? t("oneResult") : t("manyResults", { count: timeSessions.length });

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "back-button compact";
  backButton.dataset.backToTimes = "true";
  backButton.textContent = t("backToTimes");

  const group = document.createElement("section");
  group.className = "session-time-group";
  const heading = document.createElement("div");
  heading.className = "time-heading";
  heading.innerHTML = `<h3>${escapeHtml(translateTime(selectedDirectoryTime))}</h3>`;
  heading.prepend(backButton);

  const grid = document.createElement("div");
  grid.className = "card-grid";
  timeSessions.forEach((session) => grid.append(createSessionCard(session)));

  group.append(heading);
  group.append(grid);
  sessionList.append(group);
}

function renderTrackFilters() {
  const tracks = ["All", ...new Set(sessions.map((session) => session.track))];
  trackFilters.replaceChildren();

  tracks.forEach((track) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${track === activeTrack ? " active" : ""}`;
    button.textContent = translateTrack(track);
    button.addEventListener("click", () => {
      activeTrack = track;
      renderTrackFilters();
      renderDirectory();
    });
    trackFilters.append(button);
  });
}

function renderOperationSchedule() {
  operationScheduleList.replaceChildren();

  operationSchedule.forEach((entry, index) => {
    const item = document.createElement(entry.sessionRange ? "button" : "article");
    item.className = `operation-item${entry.sessionRange ? " clickable" : ""}`;
    if (entry.sessionRange) {
      item.type = "button";
      item.dataset.operationIndex = index;
    }
    item.innerHTML = `
      <div class="operation-time">${escapeHtml(entry.time)}</div>
      <div>
        <h3>${escapeHtml(entry.title)}</h3>
        <p>${escapeHtml(entry.details)}</p>
        <span>${escapeHtml(entry.location)}</span>
        ${entry.sessionRange ? `<em>${escapeHtml(t("operationAction"))}</em>` : ""}
      </div>
    `;
    operationScheduleList.append(item);
  });
}

function openOperationEntry(entry) {
  selectedDirectoryTime = "";
  selectedDirectoryTimes = entry.sessionTimes || [];
  selectedDirectoryRange = entry.sessionRange || null;
  selectedOperationTitle = entry.title;
  activeTrack = "All";
  searchInput.value = "";
  showPage("directoryPage");
  renderTrackFilters();
  renderDirectory();
  sessionList.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSchedule() {
  const savedSessions = sessions.filter((session) => savedSessionIds.has(session.id));
  scheduleList.replaceChildren();

  if (!savedSessions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("emptySchedule");
    scheduleList.append(empty);
    return;
  }

  const groups = savedSessions.reduce((grouped, session) => {
    grouped[session.time] ||= [];
    grouped[session.time].push(session);
    return grouped;
  }, {});

  Object.entries(groups).forEach(([time, timeSessions]) => {
    const group = document.createElement("section");
    group.className = "schedule-group";
    group.innerHTML = `<div class="schedule-time">${escapeHtml(translateTime(time))}</div>`;
    timeSessions.forEach((session) => group.append(createSessionCard(session, "schedule")));
    scheduleList.append(group);
  });
}

function renderMap() {
  const savedMap = localStorage.getItem(mapStorageKey);
  mapPreview.replaceChildren();

  if (!savedMap) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("mapEmpty");
    mapPreview.append(empty);
    return;
  }

  const image = document.createElement("img");
  image.src = savedMap;
  image.alt = t("mapTitle");
  mapPreview.append(image);
}

function renderFoodTrucks() {
  foodTruckList.replaceChildren();

  foodTrucks.forEach((truck) => {
    const card = document.createElement("article");
    card.className = "info-card";
    card.innerHTML = `
      <h3>${escapeHtml(truck.name)}</h3>
      <p>${escapeHtml(truck.description)}</p>
      <span>${escapeHtml(truck.note)}</span>
    `;
    foodTruckList.append(card);
  });
}

function renderInnovationZone() {
  innovationList.replaceChildren();

  innovationZoneItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "info-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <span>${escapeHtml(t("hostedBy"))}: ${escapeHtml(item.host)}</span>
    `;
    innovationList.append(card);
  });
}

function getPresenterList() {
  const query = presenterSearch.value.trim().toLowerCase();
  const presenterNames = [...new Set(sessions.flatMap((session) => getPresenterNames(session.presenter)))].sort((a, b) =>
    getPresenterSortName(a).localeCompare(getPresenterSortName(b)),
  );

  return presenterNames.filter((name) => name.toLowerCase().includes(query));
}

function createPresenterDetail(presenter) {
  const presenterSessions = getPresenterSessions(presenter);
  const detail = document.createElement("section");
  detail.className = "presenter-detail";
  detail.innerHTML = `
    <div>
      <h3>${escapeHtml(presenter)}</h3>
      <p>${escapeHtml(t("presenterInfo", { presenter, count: presenterSessions.length }))}</p>
    </div>
    <h4>${escapeHtml(t("presenterSessions"))}</h4>
  `;

  const sessionLinks = document.createElement("div");
  sessionLinks.className = "session-link-list";
  presenterSessions.forEach((session) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "session-link";
    button.dataset.jumpSession = session.id;
    button.innerHTML = `
      <strong>${escapeHtml(session.title)}</strong>
      <span>${escapeHtml(translateTime(session.time))} · ${escapeHtml(session.room)} · ${escapeHtml(translateTrack(session.track))}</span>
    `;
    sessionLinks.append(button);
  });

  detail.append(sessionLinks);
  return detail;
}

function renderPresenters() {
  const presenters = getPresenterList();
  presenterDetail.replaceChildren();
  presenterList.replaceChildren();

  if (!presenters.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noPresenters");
    presenterList.append(empty);
    return;
  }

  presenters.forEach((presenter) => {
    const presenterSessions = getPresenterSessions(presenter);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `presenter-card${presenter === selectedPresenter ? " active" : ""}`;
    button.dataset.presenter = presenter;
    button.id = `presenter-${slugify(presenter)}`;
    button.innerHTML = `
      <strong>${escapeHtml(presenter)}</strong>
      <span>${escapeHtml(t("presenterSessionCount", { count: presenterSessions.length }))}</span>
    `;
    presenterList.append(button);

    if (presenter === selectedPresenter) {
      presenterList.append(createPresenterDetail(presenter));
    }
  });
}

function getSessionDetailItems() {
  const grouped = new Map();

  sessions.forEach((session) => {
    const key = normalizeLookup(session.title);
    if (!grouped.has(key)) {
      grouped.set(key, {
        title: session.title,
        presenter: session.presenter,
        track: session.track,
        description: translateDescription(session),
        strategy: session.strategy || "",
        audience: session.audience || "",
        sessions: [],
      });
    }

    const detail = grouped.get(key);
    detail.sessions.push(session);
    if (!detail.description && session.description) detail.description = session.description;
    if (!detail.strategy && session.strategy) detail.strategy = session.strategy;
    if (!detail.audience && session.audience) detail.audience = session.audience;
  });

  return [...grouped.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function renderSessionDetails() {
  const query = detailsSearch.value.trim().toLowerCase();
  const detailItems = getSessionDetailItems().filter((item) => {
    const haystack = [
      item.title,
      item.presenter,
      item.track,
      translateTrack(item.track),
      item.description,
      item.strategy,
      item.audience,
      item.sessions.map((session) => `${session.time} ${session.room}`).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  sessionDetailList.replaceChildren();

  if (!detailItems.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noDetails");
    sessionDetailList.append(empty);
    return;
  }

  detailItems.forEach((item, index) => {
    const panelId = `detail-panel-${index}`;
    const card = document.createElement("article");
    card.className = "session-detail-card";
    card.innerHTML = `
      <button class="detail-summary" type="button" data-toggle-panel="${escapeHtml(panelId)}" aria-expanded="false" aria-controls="${escapeHtml(panelId)}">
        <span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.presenter)} · ${escapeHtml(translateTrack(item.track))}</small>
        </span>
        <span aria-hidden="true">+</span>
      </button>
      <div class="detail-panel" id="${escapeHtml(panelId)}" hidden>
        <p>${escapeHtml(item.description)}</p>
        ${item.strategy ? `<p><strong>${escapeHtml(t("strategy"))}:</strong> ${escapeHtml(item.strategy)}</p>` : ""}
        ${item.audience ? `<p><strong>${escapeHtml(t("audience"))}:</strong> ${escapeHtml(item.audience)}</p>` : ""}
        <div class="session-link-list"></div>
      </div>
    `;

    const links = card.querySelector(".session-link-list");
    item.sessions.forEach((session) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "session-link";
      button.dataset.jumpSession = session.id;
      button.innerHTML = `
        <strong>${escapeHtml(translateTime(session.time))}</strong>
        <span>${escapeHtml(session.room)} · ${escapeHtml(t("viewSession"))}</span>
      `;
      links.append(button);
    });

    sessionDetailList.append(card);
  });
}

function refresh() {
  applyStaticTranslations();
  pruneSavedSessions();
  saveSchedule();
  renderTrackFilters();
  renderDirectory();
  renderOperationSchedule();
  renderSchedule();
  renderMap();
  renderFoodTrucks();
  renderInnovationZone();
  renderPresenters();
  renderSessionDetails();
  updateBackButton();
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === pageId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest(".session-action");
  const removeButton = event.target.closest(".remove-action");
  const tabButton = event.target.closest(".tab");
  const presenterButton = event.target.closest(".presenter-card");
  const sessionJumpButton = event.target.closest("[data-jump-session]");
  const timeButton = event.target.closest(".time-card");
  const backToTimesButton = event.target.closest("[data-back-to-times]");
  const operationButton = event.target.closest(".operation-item.clickable");
  const operationBackButton = event.target.closest("[data-operation-back]");
  const detailButton = event.target.closest("[data-toggle-details]");
  const detailPanelButton = event.target.closest("[data-toggle-panel]");

  if (detailButton) {
    const panel = document.getElementById(`session-details-${detailButton.dataset.toggleDetails}`);
    if (!panel) return;

    const isOpening = panel.hidden;
    panel.hidden = !isOpening;
    document.querySelectorAll(`[data-toggle-details="${CSS.escape(detailButton.dataset.toggleDetails)}"]`).forEach((button) => {
      button.setAttribute("aria-expanded", String(isOpening));
      if (button.classList.contains("detail-action")) {
        button.textContent = isOpening ? t("hideDetails") : t("viewDetails");
      }
    });
  }

  if (detailPanelButton) {
    const panel = document.getElementById(detailPanelButton.dataset.togglePanel);
    if (!panel) return;

    const isOpening = panel.hidden;
    panel.hidden = !isOpening;
    detailPanelButton.setAttribute("aria-expanded", String(isOpening));
    detailPanelButton.querySelector("span[aria-hidden='true']").textContent = isOpening ? "−" : "+";
  }

  if (addButton) {
    savedSessionIds.add(addButton.dataset.sessionId);
    refresh();
  }

  if (removeButton) {
    savedSessionIds.delete(removeButton.dataset.sessionId);
    refresh();
  }

  if (tabButton) {
    rememberView();
    if (tabButton.dataset.page === "directoryPage") {
      selectedDirectoryTime = "";
      selectedDirectoryTimes = [];
      selectedDirectoryRange = null;
      selectedOperationTitle = "";
      searchInput.value = "";
    }
    showPage(tabButton.dataset.page);
    renderDirectory();
  }

  if (timeButton) {
    rememberView();
    selectedDirectoryTime = timeButton.dataset.time;
    selectedDirectoryTimes = [];
    selectedDirectoryRange = null;
    selectedOperationTitle = "";
    renderDirectory();
    sessionList.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (backToTimesButton) {
    rememberView();
    selectedDirectoryTime = "";
    selectedDirectoryTimes = [];
    selectedDirectoryRange = null;
    selectedOperationTitle = "";
    renderDirectory();
  }

  if (operationButton) {
    const operationEntry = operationSchedule[Number(operationButton.dataset.operationIndex)];
    if (!operationEntry) return;

    rememberView();
    openOperationEntry(operationEntry);
  }

  if (operationBackButton) {
    rememberView();
    selectedDirectoryTime = "";
    selectedDirectoryTimes = [];
    selectedDirectoryRange = null;
    selectedOperationTitle = "";
    showPage("operationPage");
  }

  if (presenterButton) {
    rememberView();
    selectedPresenter = presenterButton.dataset.presenter;
    renderPresenters();
    document
      .getElementById(`presenter-${slugify(selectedPresenter)}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (sessionJumpButton) {
    rememberView();
    jumpToSession(sessionJumpButton.dataset.jumpSession);
  }
});

appBackButton.addEventListener("click", goBackOneScreen);
schedulePill.addEventListener("click", () => {
  rememberView();
  showPage("schedulePage");
});
searchInput.addEventListener("input", renderDirectory);
refreshScheduleButton.addEventListener("click", loadLiveSchedule);
presenterSearch.addEventListener("input", renderPresenters);
detailsSearch.addEventListener("input", renderSessionDetails);
mapUpload.addEventListener("change", () => {
  const [file] = mapUpload.files;
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem(mapStorageKey, reader.result);
    renderMap();
  });
  reader.readAsDataURL(file);
});
languageSelect.value = currentLanguage;
languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem(languageStorageKey, currentLanguage);
  refresh();
});

setSyncStatus("syncFallback");
refresh();
loadLiveSchedule();
