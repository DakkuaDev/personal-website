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
    image: "images/myPics/logo-2.png", // TODO: add screenshot
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
      <article class="project-card has-animation" data-delay="0">
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
