// ============================================================
// i18n — Bilingual dictionary (ES/EN) + switching logic
// 
// HOW TO USE:
//   <span data-i18n="hero.title"></span>
//   <input data-i18n-placeholder="search.placeholder">
//   <img data-i18n-alt="hero.avatar_alt">
//   <a data-i18n-href="cv.es">...</a>
//
// Toggle button: <button onclick="switchLang('en')">EN</button>
// Preference saved to localStorage.
// ============================================================

const i18n = {
  es: {
    /* Nav */
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.speaking": "Ponencias",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    /* Hero */
    "hero.greeting": "¡Hola!",
    "hero.name": "Soy Daniel Guerra",
    "hero.role_1": "XR Developer",
    "hero.role_2": "Product Owner",
    "hero.role_3": "Unity3D · C# .NET",
    "hero.cv_title": "Mi Currículum Vitae (CV)",
    "hero.cv_es": "ES",
    "hero.cv_en": "EN",
    "hero.cv_po_es": "ES (PO)",
    "hero.cv_po_en": "EN (PO)",
    "hero.avatar_alt": "Daniel Guerra avatar",

    /* About — rewritten with personal voice */
    "about.title": "Sobre Mí",
    "about.intro": "XR Developer & Product Owner — productos inmersivos (VR/AR/XR) de principio a fin. MBA + Google PM cert. Community builder.",
    "about.p1": "Siempre he creído que los videojuegos y la tecnología inmersiva pueden cambiar la forma en que aprendemos, trabajamos y nos conectamos. Por eso empecé: primero como jugador curioso, luego como estudiante de desarrollo de videojuegos, y hoy como XR Developer & Product Owner. Mi camino me llevó a especializarme en Realidad Virtual y Aumentada porque vi que era donde la tecnología podía tener un impacto real — en formación industrial, rehabilitación, educación y cultura.",
    "about.p2": "Hoy lidero productos XR end-to-end en INVELON: desde entender qué necesita el cliente hasta ver el producto en la store. Me apasiona tanto el código (Unity, C#, .NET) como la estrategia de producto (backlog, estimaciones, stakeholders). He trabajado con Innovae Group, ITCL y otras empresas punteras en I+D+i, siempre en la intersección entre tecnología y personas.",
    "about.p3": "Pero lo que más me motiva es la comunidad. Soy co-organizador de GameDevs Asturias, donde conectamos a creadores, estudiantes y profesionales del videojuego y la XR en Asturias. También he sido profesor en la Universidad de Burgos, ponente en eventos como FIMP, UBU Party y el Festival Creando, y mentor en game jams. Creo en compartir lo que aprendes — y en rodearte de gente que te empuja a ser mejor.",
    "about.sign": "\"Knowledge is power, but enthusiasm pulls the switch\"",

    /* Experience */
    "exp.title": "Experiencia Profesional",
    "exp.invelon_role": "XR Developer & Product Owner",
    "exp.invelon_date": "Nov 2024 – Presente",
    "exp.invelon_1": "Lead de requisitos y priorización de user-stories para soluciones XR en Industria 4.0, Cultura y Educación.",
    "exp.invelon_2": "Product & technical lead de PoblARte (AR, Android/iOS) — proyecto financiado por MITECO.",
    "exp.invelon_3": "Desarrollador principal de FINVALIA – VR Training (Meta Quest 3/3S) — simulador de fábrica virtual para FINSA.",
    "exp.invelon_4": "Estimaciones, COGs y comunicación directa con cliente; ciclo completo planificación → despliegue.",
    "exp.itcl_role": "Software Developer (XR Specialist)",
    "exp.itcl_date": "Jun 2023 – May 2024",
    "exp.itcl_1": "Arquitecturas C# modulares que redujeron el tiempo de mantenimiento técnico en un 20%.",
    "exp.itcl_2": "FUNPER — sistema gamificado de rehabilitación para pacientes con parálisis cerebral (PC, AI + computer vision).",
    "exp.itcl_3": "Sincronización equipos Arte, Diseño, IA y Datos; desviación de entregas por debajo del 5%.",
    "exp.innovae_role": "Unity VR Developer",
    "exp.innovae_date": "Abr 2023 – Jul 2023 | Sep 2021 – Ago 2022",
    "exp.innovae_1": "Simuladores VRFP (Meta Quest 2) para el programa Aulas Ateca — modernización de FP en España.",
    "exp.innovae_2": "Mejora de velocidad de integración en un 15% mediante flujos Git/PlasticSCM.",
    "exp.innovae_3": "Supervisión de equipo de 5 desarrolladores; coordinación con Arte, Diseño, Marketing.",
    "exp.kko_role": "Game Developer & Producer",
    "exp.kko_date": "Sep 2020 – Mar 2022",
    "exp.kko_1": "Productor y desarrollador de Harriet: From Slave To Hero (serious game sobre historia real).",
    "exp.carac_role": "Associate Project Manager",
    "exp.carac_date": "Sep 2022 – Dic 2022",
    "exp.carac_1": "Coordinación y gestión del lanzamiento de curso especializado VR/Game-Dev en centro de FP.",
    "exp.iler Role": "Instructional Designer",
    "exp.iler_date": "Sep 2025 – Nov 2025",
    "exp.iler_1": "Asesor técnico y diseñador instruccional para curso 'Videojuegos y Realidad Virtual'.",
    "exp.education_title": "Formación",
    "exp.edu_1": "MBA — Transformación Digital, IT Leadership, Project & Team Management (UNIR)",
    "exp.edu_2": "BSc — Diseño y Desarrollo de Videojuegos (UCJC)",
    "exp.edu_3": "HND — Creative Media Production – Game Development (UDIT)",

    /* Events organized */
    "events.title": "Eventos Organizados",
    "events.gamedevs25": "Encuentro GameDevs Asturias 2025",
    "events.ggj26": "Global Game Jam Asturias 2026",
    "events.gamedevs26": "Encuentro GameDevs Asturias 2026",
    "events.cometcon26": "Convocatoria Indie — CometCon 2026",
    "events.gamedevs_url": "https://www.instagram.com/gamedevs.asturias/",

    /* Projects */
    "projects.title": "Proyectos",
    "projects.category_professional": "Proyectos Profesionales",
    "projects.category_academic": "Proyectos Académicos",
    "projects.category_personal": "Proyectos Personales",
    "projects.github": "GitHub",
    "projects.itchio": "itch.io",
    "projects.view": "Ver proyecto",

    /* Speaking */
    "speaking.title": "Ponencias Públicas",
    "speaking.uniovi": "La Literatura Narrativa a través del Videojuego: Harriet: From Slave To Hero",
    "speaking.uniovi_where": "Universidad de Oviedo",
    "speaking.fimp": "Democratización de las Tecnologías: el caso de la Realidad Virtual",
    "speaking.fimp_where": "FIMP",
    "speaking.lapipa": "Web3, VR, NFTs",
    "speaking.lapipa_where": "LA PIPA",
    "speaking.ubuparty": "Más allá del Videojuego: Aplicaciones transformadoras",
    "speaking.ubuparty_where": "UBU Party",
    "speaking.ubu_masterclass": "Másterclass Gestión de Proyectos",
    "speaking.ubu_masterclass_where": "Universidad de Burgos",
    "speaking.funper": "FUNPER: rehabilitación y serious games",
    "speaking.funper_where": "FIMP, Festival Creando",
    "speaking.mama": "¡Mamá, Papá, Quiero Diseñar Juegos!",
    "speaking.mama_where": "Festival Creando XV",

    /* Blog */
    "blog.title": "Blog",
    "blog.subtitle": "Reflexiones, aprendizajes y proyectos.",
    "blog.read_more": "Leer más →",

    /* Contact / Footer */
    "contact.cv": "Currículum Vitae",
    "contact.download_cv": "Descargar CV",
    "contact.email": "daniel.guerra.gallardo99@gmail.com",
    "footer.copyright": "Daniel Guerra Gallardo. Todos los Derechos Reservados.",
    "footer.back_top": "VOLVER ARRIBA",

    /* Language toggle */
    "lang.es": "ES",
    "lang.en": "EN"
  },

  en: {
    /* Nav */
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.speaking": "Speaking",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    /* Hero */
    "hero.greeting": "Hi!",
    "hero.name": "I'm Daniel Guerra",
    "hero.role_1": "XR Developer",
    "hero.role_2": "Product Owner",
    "hero.role_3": "Unity3D · C# .NET",
    "hero.cv_title": "My CV",
    "hero.cv_es": "ES",
    "hero.cv_en": "EN",
    "hero.cv_po_es": "ES (PO)",
    "hero.cv_po_en": "EN (PO)",
    "hero.avatar_alt": "Daniel Guerra avatar",

    /* About — rewritten with personal voice */
    "about.title": "About Me",
    "about.intro": "XR Developer & Product Owner — immersive products (VR/AR/XR) end-to-end. MBA + Google PM cert. Community builder.",
    "about.p1": "I've always believed that games and immersive technology can change how we learn, work and connect. That's why I started: first as a curious player, then as a game development student, and today as an XR Developer & Product Owner. I specialized in Virtual and Augmented Reality because I saw where tech could make a real impact — in industrial training, rehabilitation, education and culture.",
    "about.p2": "Today I lead XR products end-to-end at INVELON: from understanding what the client needs to seeing the product on the store. I'm equally passionate about code (Unity, C#, .NET) and product strategy (backlog, estimations, stakeholders). I've worked with Innovae Group, ITCL and other leading R&D+i companies, always at the intersection of technology and people.",
    "about.p3": "But what drives me most is community. I co-organize GameDevs Asturias, where we connect creators, students and professionals in games and XR across Asturias. I've also been a lecturer at Universidad de Burgos, a speaker at events like FIMP, UBU Party and Festival Creando, and a mentor at game jams. I believe in sharing what you learn — and surrounding yourself with people who push you to be better.",
    "about.sign": "\"Knowledge is power, but enthusiasm pulls the switch\"",

    /* Experience */
    "exp.title": "Professional Experience",
    "exp.invelon_role": "XR Developer & Product Owner",
    "exp.invelon_date": "Nov 2024 – Present",
    "exp.invelon_1": "Lead requirements definition and user-story prioritization for XR solutions in Industry 4.0, Culture and Education.",
    "exp.invelon_2": "Product & technical lead for PoblARte (AR, Android/iOS) — project funded by MITECO.",
    "exp.invelon_3": "Principal developer of FINVALIA – VR Training (Meta Quest 3/3S) — virtual factory simulator for FINSA.",
    "exp.invelon_4": "Own estimations, COGs and direct client communication; full dev-cycle planning → deployment.",
    "exp.itcl_role": "Software Developer (XR Specialist)",
    "exp.itcl_date": "Jun 2023 – May 2024",
    "exp.itcl_1": "Modular C# architectures that cut technical maintenance time by 20%.",
    "exp.itcl_2": "FUNPER — gamified rehab system for cerebral-palsy patients (PC, AI + computer vision).",
    "exp.itcl_3": "Synchronized Art, Design, AI & Data teams; delivery-schedule deviation under 5%.",
    "exp.innovae_role": "Unity VR Developer",
    "exp.innovae_date": "Apr 2023 – Jul 2023 | Sep 2021 – Aug 2022",
    "exp.innovae_1": "VRFP simulators (Meta Quest 2) for the Aulas Ateca program — modernizing Spanish VET.",
    "exp.innovae_2": "Improved integration speed by 15% via Git/PlasticSCM workflows.",
    "exp.innovae_3": "Supervised a 5-developer team; coordinated with Art, Design, Marketing.",
    "exp.kko_role": "Game Developer & Producer",
    "exp.kko_date": "Sep 2020 – Mar 2022",
    "exp.kko_1": "Producer & developer of Harriet: From Slave To Hero (serious game on real history).",
    "exp.carac_role": "Associate Project Manager",
    "exp.carac_date": "Sep 2022 – Dec 2022",
    "exp.carac_1": "Stood up and managed a VR/Game-Dev specialization course at a VET center.",
    "exp.iler Role": "Instructional Designer",
    "exp.iler_date": "Sep 2025 – Nov 2025",
    "exp.iler_1": "Technical advisor & instructional designer for 'Videojuegos y Realidad Virtual' course.",
    "exp.education_title": "Education",
    "exp.edu_1": "MBA — Digital Transformation, IT Leadership, Project & Team Management (UNIR)",
    "exp.edu_2": "BSc — Video Game Design & Development (UCJC)",
    "exp.edu_3": "HND — Creative Media Production – Game Development (UDIT)",

    /* Events organized */
    "events.title": "Events Organized",
    "events.gamedevs25": "GameDevs Asturias Meetup 2025",
    "events.ggj26": "Global Game Jam Asturias 2026",
    "events.gamedevs26": "GameDevs Asturias Meetup 2026",
    "events.cometcon26": "Indie Call — CometCon 2026",
    "events.gamedevs_url": "https://www.instagram.com/gamedevs.asturias/",

    /* Projects */
    "projects.title": "Projects",
    "projects.category_professional": "Professional Projects",
    "projects.category_academic": "Academic Projects",
    "projects.category_personal": "Personal Projects",
    "projects.github": "GitHub",
    "projects.itchio": "itch.io",
    "projects.view": "View project",

    /* Speaking */
    "speaking.title": "Public Speaking",
    "speaking.uniovi": "Narrative Literature through Video Games: Harriet: From Slave To Hero",
    "speaking.uniovi_where": "Universidad de Oviedo",
    "speaking.fimp": "Democratization of Technologies: the case of Virtual Reality",
    "speaking.fimp_where": "FIMP",
    "speaking.lapipa": "Web3, VR, NFTs",
    "speaking.lapipa_where": "LA PIPA",
    "speaking.ubuparty": "Beyond Video Games: Transformative Applications",
    "speaking.ubuparty_where": "UBU Party",
    "speaking.ubu_masterclass": "Project Management Masterclass",
    "speaking.ubu_masterclass_where": "Universidad de Burgos",
    "speaking.funper": "FUNPER: rehabilitation and serious games",
    "speaking.funper_where": "FIMP, Festival Creando",
    "speaking.mama": "Mom, Dad, I Want to Design Games!",
    "speaking.mama_where": "Festival Creando XV",

    /* Blog */
    "blog.title": "Blog",
    "blog.subtitle": "Thoughts, learnings, and projects.",
    "blog.read_more": "Read more →",

    /* Contact / Footer */
    "contact.cv": "Curriculum Vitae",
    "contact.download_cv": "Download CV",
    "contact.email": "daniel.guerra.gallardo99@gmail.com",
    "footer.copyright": "Daniel Guerra Gallardo. All Rights Reserved.",
    "footer.back_top": "BACK TO TOP",

    /* Language toggle */
    "lang.es": "ES",
    "lang.en": "EN"
  }
};

// ============================================================
// Switching logic
// ============================================================

let currentLang = localStorage.getItem("hermes-lang") || "es";

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem("hermes-lang", lang);

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Update alt texts
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (i18n[lang][key]) {
      el.alt = i18n[lang][key];
    }
  });

  // Update href links
  document.querySelectorAll("[data-i18n-href]").forEach(el => {
    const key = el.dataset.i18nHref;
    if (i18n[lang][key]) {
      el.href = i18n[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update active lang toggle button
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Re-render projects (data-driven)
  if (typeof renderProjects === "function") {
    renderProjects(lang);
  }

  // Update meta tags
  updateMetaTags(lang);

  // Update typewriter rotating text
  const tw = document.querySelector(".txt-rotate");
  if (tw) {
    const esRoles = ['"XR Developer"', '"Product Owner"', '"Unity3D · C# .NET"'];
    const enRoles = ['"XR Developer"', '"Product Owner"', '"Unity3D · C# .NET"'];
    tw.setAttribute("data-rotate", `[${lang === "es" ? esRoles.join(",") : enRoles.join(",")}]`);
    // Re-initialize if TxtRotate exists
    if (typeof TxtRotate === "function" && tw.dataset.period) {
      new TxtRotate(tw, JSON.parse(tw.getAttribute("data-rotate")), parseInt(tw.dataset.period));
    }
  }
}

function updateMetaTags(lang) {
  const metaTitle = document.querySelector('meta[property="og:title"]');
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaOgDesc = document.querySelector('meta[property="og:description"]');
  
  if (metaTitle) {
    metaTitle.content = lang === "es" 
      ? "Daniel Guerra Gallardo — XR Developer & Product Owner"
      : "Daniel Guerra Gallardo — XR Developer & Product Owner";
  }
  if (metaDesc) {
    metaDesc.content = lang === "es"
      ? "Portfolio de Daniel Guerra, XR Developer y Product Owner especializado en Unity3D, VR/AR/XR, con experiencia en gestión de proyectos (Project Manager)."
      : "Daniel Guerra's portfolio — XR Developer & Product Owner specialized in Unity3D, VR/AR/XR, with project management experience (Project Manager).";
  }
  if (metaOgDesc) {
    metaOgDesc.content = lang === "es"
      ? "Portfolio de Daniel Guerra, XR Developer y Product Owner especializado en Unity3D, VR/AR/XR, con experiencia en gestión de proyectos (Project Manager)."
      : "Daniel Guerra's portfolio — XR Developer & Product Owner specialized in Unity3D, VR/AR/XR, with project management experience (Project Manager).";
  }
  document.title = lang === "es"
    ? "Daniel Guerra Gallardo — XR Developer & Product Owner"
    : "Daniel Guerra Gallardo — XR Developer & Product Owner";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  switchLang(currentLang);
});
