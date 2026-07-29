// ============================================================
// PROJECTS DATA — Edit this array to add/remove/reorder projects
// Each entry renders as a card in the #projects section.
// To add a project: copy an entry, fill in your data.
// To remove one: delete or comment out the entry.
// 
// Required fields per project:
//   id: unique string
//   title: { es, en }
//   description: { es, en }
//   year: string
//   role: { es, en }
//   image: path or "images/myPics/logo-2.png" as placeholder
//   links: { github, itchio, steam, external } — set null if not available
//   tags: array of strings
// ============================================================

const projectsData = [
  {
    id: "poblarte",
    title: {
      es: "PoblARte — Realidad Aumentada",
      en: "PoblARte — Augmented Reality"
    },
    description: {
      es: "App de Realidad Aumentada (Android/iOS) para poner en valor el patrimonio cultural. Liderada por INVELON, financiada por MITECO con la Universidad de Oviedo.",
      en: "Augmented Reality app (Android/iOS) showcasing cultural heritage. Led by INVELON, funded by MITECO with Universidad de Oviedo."
    },
    year: "2025",
    role: {
      es: "Product & Technical Lead, Unity Developer",
      en: "Product & Technical Lead, Unity Developer"
    },
    image: "images/myPics/poblarte-screenshot.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://play.google.com/store/apps/details?id=com.invelon.TTPoblarte&hl=es"
    },
    tags: ["AR", "Unity", "Android", "iOS", "Cultural Heritage"]
  },
  {
    id: "vrfp-alta-tension",
    title: {
      es: "Simulador VR — Trabajos en Media y Alta Tensión",
      en: "VR Simulator — Medium & High Voltage Work"
    },
    description: {
      es: "Simulador en Realidad Virtual para el entrenamiento en trabajos de mantenimiento en instalaciones de media y alta tensión. Desarrollado para el programa Aulas Ateca (Meta Quest 2).",
      en: "VR simulator for training in high/medium voltage maintenance work. Developed for the Aulas Ateca program (Meta Quest 2)."
    },
    year: "2022",
    role: {
      es: "Unity VR Developer",
      en: "Unity VR Developer"
    },
    image: "images/myPics/vrfp-alta-tension.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://vrfp.es/simuladores/trabajos-en-media-y-alta-tension/"
    },
    tags: ["VR", "Unity", "Meta Quest 2", "Formación Profesional"]
  },
  {
    id: "vrfp-jardineria",
    title: {
      es: "Simulador VR — Jardinería y Forestal",
      en: "VR Simulator — Gardening & Forestry"
    },
    description: {
      es: "Simulador VR para practicar con herramientas de jardinería y forestales, manejo de plataforma elevadora y EPIs. Desarrollado para Aulas Ateca (Meta Quest 2).",
      en: "VR simulator for practicing with gardening and forestry tools, aerial platform operation and PPE. Developed for Aulas Ateca (Meta Quest 2)."
    },
    year: "2022",
    role: {
      es: "Unity VR Developer",
      en: "Unity VR Developer"
    },
    image: "images/myPics/vrfp-jardineria.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://vrfp.es/simuladores/jardineria-y-forestal/"
    },
    tags: ["VR", "Unity", "Meta Quest 2", "Formación Profesional"]
  },
  {
    id: "funper",
    title: {
      es: "FUNPER — Rehabilitación con IA y VR",
      en: "FUNPER — AI & VR Rehabilitation"
    },
    description: {
      es: "Sistema gamificado de rehabilitación para pacientes con parálisis cerebral en extremidades superiores. IA + visión artificial + VR. Proyecto galardonado con Premio IA de AEMETIC 2024.",
      en: "Gamified rehab system for cerebral-palsy patients' upper limbs. AI + computer vision + VR. Awarded AEMETIC AI Prize 2024."
    },
    year: "2024",
    role: {
      es: "XR Developer (ITCL)",
      en: "XR Developer (ITCL)"
    },
    image: "images/myPics/funper-screenshot.webp",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://fundacionpersonas.es/proyectos/funper/"
    },
    tags: ["VR", "AI", "Computer Vision", "Rehab", "Serious Game", "Premio"]
  },
  {
    id: "genius",
    title: {
      es: "GENIUS — IA Emocional para Vehículos",
      en: "GENIUS — Emotional AI for Vehicles"
    },
    description: {
      es: "Sistema basado en IA que reconoce estados emocionales y cognitivos de usuarios del vehículo y adapta iluminación, sonido y aromas. Liderado por Antolín con ITCL. Proyecto CDTI + FEDER (1.95M€).",
      en: "AI system that recognizes emotional and cognitive states of vehicle occupants and adapts lighting, sound and scents. Led by Antolín with ITCL. CDTI + FEDER project (€1.95M)."
    },
    year: "2024",
    role: {
      es: "XR Developer (ITCL)",
      en: "XR Developer (ITCL)"
    },
    image: "images/myPics/genius-screenshot.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://www.antolin.com/es/antolin-lanza-el-proyecto-genius-para-desarrollar-sistemas-basados-en-inteligencia-artificial-que"
    },
    tags: ["AI", "Automotive", "ITCL", "Biometrics", "R&D"]
  },
  {
    id: "worldlabs",
    title: {
      es: "Unity WorldLabs.ai API Client Tool",
      en: "Unity WorldLabs.ai API Client Tool"
    },
    description: {
      es: "Middleware para Unity 6 que permite generar e importar entornos 3D Gaussian Splat desde un prompt de texto, con jerarquía de escena automática, colliders y coordenadas reales.",
      en: "Unity 6 editor middleware for the World Labs API — generate and import Gaussian Splat 3D environments from a text prompt, with automatic scene hierarchy, collider mesh, and real-world coordinates."
    },
    year: "2025",
    role: {
      es: "Desarrollador Unity",
      en: "Unity Developer"
    },
    image: "images/myPics/worldlabs-screenshot.jpg",
    links: {
      github: "https://github.com/DakkuaDev/unity-worldlabs.ai-API-client-tool",
      itchio: null,
      steam: null,
      external: null
    },
    tags: ["Unity", "C#", "AI", "Gaussian Splat", "Editor Tool"]
  },
  {
    id: "harriet",
    title: {
      es: "Harriet: From Slave To Hero",
      en: "Harriet: From Slave To Hero"
    },
    description: {
      es: "Serious game de estrategia por turnos basado en la vida de Harriet Tubman. Producido y programado para KKO Team.",
      en: "Turn-based strategy serious game based on Harriet Tubman's life. Produced and programmed for KKO Team."
    },
    year: "2021",
    role: {
      es: "Productor & Programador",
      en: "Producer & Programmer"
    },
    image: "images/myPics/harriet-workv2.jpg",
    links: {
      github: null,
      itchio: "https://kko-team.itch.io/harriet-from-slave-to-hero-beta",
      steam: null,
      external: null
    },
    tags: ["Unity", "C#", "Serious Game", "Estrategia"]
  },
  {
    id: "hatintime",
    title: {
      es: "A Hat In Time — Stand Virtual RA",
      en: "A Hat In Time — AR Virtual Stand"
    },
    description: {
      es: "Escena modelada, texturizada y animada como demo de Realidad Aumentada para marketing y publicidad.",
      en: "3D scene modeled, textured and animated as an AR demonstration for marketing and advertising."
    },
    year: "2020",
    role: {
      es: "Artista 3D",
      en: "3D Artist"
    },
    image: "images/myPics/ar_hatintime_work.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://sketchfab.com/3d-models/ra-scene-virtual-stand-a-hat-in-time-b60c6d69fa144c36ad03ca74a0afd083"
    },
    tags: ["3D Art", "AR", "Sketchfab", "Marketing"]
  },
  {
    id: "connected",
    title: {
      es: "Connected — Global Game Jam",
      en: "Connected — Global Game Jam"
    },
    description: {
      es: "Videojuego desarrollado durante la Global Game Jam 2019 bajo la temática 'Hogar'.",
      en: "Game developed during Global Game Jam 2019 under the theme 'Home'."
    },
    year: "2019",
    role: {
      es: "Desarrollador",
      en: "Developer"
    },
    image: "images/myPics/Connected-work.jpg",
    links: {
      github: null,
      itchio: "https://dakkua.itch.io/connected",
      steam: null,
      external: null
    },
    tags: ["Game Jam", "Unity", "WebGL"]
  },
  {
    id: "super-frogger",
    title: {
      es: "Super Fr#gger",
      en: "Super Fr#gger"
    },
    description: {
      es: "Recreación del clásico Frogger de Atari con gráficos actualizados, desarrollado en .NET sin motor gráfico.",
      en: "Recreation of the classic Atari Frogger with updated graphics, built in .NET without a game engine."
    },
    year: "2019",
    role: {
      es: "Desarrollador",
      en: "Developer"
    },
    image: "images/myPics/super-frogger-work.jpg",
    links: {
      github: null,
      itchio: null,
      steam: null,
      external: "https://www.youtube.com/watch?v=rParZHkI3eY"
    },
    tags: [".NET", "C#", "2D", "Retro"]
  },
  {
    id: "tempus-runit",
    title: {
      es: "Tempus Runit",
      en: "Tempus Runit"
    },
    description: {
      es: "Endless Run y Trivial para móviles. Productor, diseñador y programador.",
      en: "Endless runner & trivia mobile game. Producer, designer and programmer."
    },
    year: "2020",
    role: {
      es: "Productor, Diseñador & Programador",
      en: "Producer, Designer & Programmer"
    },
    image: "images/myPics/tempus-runit-work.jpg",
    links: {
      github: null,
      itchio: "https://dakkua.itch.io/tempus-runit",
      steam: null,
      external: null
    },
    tags: ["Unity", "Mobile", "Android", "Endless Runner"]
  },
  {
    id: "brid-mizmace",
    title: {
      es: "Brid Mizmace",
      en: "Brid Mizmace"
    },
    description: {
      es: "Videojuego pixel-art sobre un insecto que busca a su familia. Diseñador y programador.",
      en: "Pixel-art game about a lost insect searching for its family. Designer and programmer."
    },
    year: "2018",
    role: {
      es: "Diseñador & Programador",
      en: "Designer & Programmer"
    },
    image: "images/myPics/brid-mizmace-work.jpg",
    links: {
      github: null,
      itchio: "https://dakkua.itch.io/brief-mizmace",
      steam: null,
      external: null
    },
    tags: ["Unity", "Pixel Art", "2D", "Plataformas"]
  },
  {
    id: "haunted-mansion",
    title: {
      es: "The Haunted Mansion",
      en: "The Haunted Mansion"
    },
    description: {
      es: "Videojuego desarrollado en la Indie Dev Jam con Godot Engine 4.0. Desarrollador y coordinador de arte.",
      en: "Game developed at Indie Dev Jam using Godot Engine 4.0. Developer and art coordinator."
    },
    year: "2023",
    role: {
      es: "Desarrollador & Coordinador de Arte",
      en: "Developer & Art Coordinator"
    },
    image: "images/myPics/the-haunted-mansion-work.jpg",
    links: {
      github: null,
      itchio: "https://dakkuadev.itch.io/the-haunted-mansion",
      steam: null,
      external: null
    },
    tags: ["Godot", "Game Jam", "2D", "Pixel Art"]
  }
];

// ============================================================
// PROJECT RENDERER — renders projects into the DOM
// Called on page load and on language switch.
// ============================================================

function renderProjects(lang) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projectsData.map(project => {
    const title = project.title[lang] || project.title.en;
    const desc = project.description[lang] || project.description.en;
    const role = project.role[lang] || project.role.en;

    // Build link buttons for available platforms
    let linksHtml = "";
    if (project.links.github) {
      linksHtml += `<a href="${project.links.github}" target="_blank" class="project-link github" title="GitHub"><i class="fa fa-github"></i></a>`;
    }
    if (project.links.itchio) {
      linksHtml += `<a href="${project.links.itchio}" target="_blank" class="project-link itchio" title="itch.io"><i class="fa fa-gamepad"></i></a>`;
    }
    if (project.links.steam) {
      linksHtml += `<a href="${project.links.steam}" target="_blank" class="project-link steam" title="Steam"><i class="fa fa-steam"></i></a>`;
    }
    if (project.links.external) {
      linksHtml += `<a href="${project.links.external}" target="_blank" class="project-link external" title="${lang === 'es' ? 'Ver proyecto' : 'View project'}"><i class="fa fa-external-link"></i></a>`;
    }

    // Tags
    const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

    return `
      <article class="project-card has-animation animate-in" data-delay="0">
        <div class="project-image">
          <img src="${project.image}" alt="${title}" onerror="this.src='images/myPics/logo-2.png'">
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span class="project-year">${project.year}</span>
            <span class="project-role">${role}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${desc}</p>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-links">${linksHtml}</div>
        </div>
      </article>
    `;
  }).join("");
}
