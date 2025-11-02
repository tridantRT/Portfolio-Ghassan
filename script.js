// === Sticky Navigation ===
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  if (!nav || !header) return;

  const navOffset = header.offsetHeight;
  nav.classList.toggle("sticky", window.scrollY >= navOffset);
});

// === Translations ===
const translations = {
  en: {
    pageTitle: "Home",
    galleryTip: "Click any project image to open a high-quality gallery with larger images and full project descriptions.",
    studioTitle: "TridantselctRT / Ghassan Yahia",
    tagline: "Architecture Portfolio",
    navHome: "Home",
    navProjects: "Projects",  // Moved up
    navIntro: "Introduction", // Moved down
    navContact: "Contact",
    welcome: "Welcome",
    aboutMe: "About Me",
    introText: "This is a simple architecture portfolio showcasing key works, design philosophies, and contact details. Feel free to browse through the site to learn more.",
    aboutDescription: "Hello! I’m Yahia Ghassan, an architect and designer passionate about creating spaces that blend functionality, emotion, and identity. My work explores how design can evoke feeling and foster connection through light, texture, and form. I believe architecture is more than just buildings; it’s about crafting experiences that resonate on a personal level. Through my projects, I strive to balance innovation with context, ensuring each design responds thoughtfully to its environment and users. Thank you for visiting my portfolio, and I hope my work inspires you as much as the process of creating it inspires me.",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View All Projects",
    introHeading: "Introduction",
    footerRights: "All rights reserved.",
    projectOneTitle: "Modern Villa",
    projectOneText: "Minimalist home design focused on open light and sustainable materials.",
    projectTwoTitle: "Urban Pavilion",
    projectTwoText: "Public structure merging nature and geometry in a vibrant city center.",
    contactHeading: "Communication",
    contactText: "If you'd like to get in touch about collaborations, feedback, or job opportunities, feel free to email me at",
    contact1: "Interested in discussing a project, collaboration, or architectural concept? I’d love to connect.",
    contact2: "Whether it’s residential design, urban planning, or conceptual visualization, I’m always open to new ideas and creative exchanges.",
    contact3: "Feel free to reach out by email or connect through my social platforms below.",
    
    // Interior Design Section
    interiorIntro: "In this section, you will find my interior designs, including floor plans, sectional drawings, and 3D renders.",
    interiorDesignRenderTitle: "Interior Design Render",
    interiorDesignRenderDesc: "It is about creating a small photographic book, accompanied by a virtual video tour of a house based on plans. You have to create spaces full of light integrated into a modern and Mediterranean environment.",
    industrialOfficeTitle: "Industrial Office Design in Warehouse",
    industrialOfficeDesc: "Transform a warehouse with a mezzanine into an industrial and rustic styled office space. The design needs to accommodate various functional areas, specifically open workspaces, private offices, and meeting rooms. The project is freelance based and located in Australia.",
    flowerStandTitle: "Flower Event Stand",
    flowerStandDesc: "Design of an exhibition table featuring various types of flowers for an international flower show. The project was created using Revit and visualized in Twinmotion.",
    interiorDesign5Title: "Residential Villa Interior Design Project",
    interiorDesign5Desc: "Comprehensive interior design for the villa, including detailed architectural visualization and realistic rendering of the various rooms to showcase their unique styles and functional layouts.",
    ModernVillaTitle: "Modern Villa",
    ModernVillaDesc: "Comprehensive interior design for the villa, including detailed architectural visualization and realistic rendering of the various rooms to showcase their unique styles and functional layouts.",
    // Exterior Design Section
    ExteriorDesign1Title: "Fast Industrial House Render",
    ExteriorDesign1Desc: "Fast industrial house modelling and rendering of a 3D model of a small, modernly designed house, set in a natural green environment. The scene focuses on the corner of the house, allowing a view of the architectural design details and the materials used.",
    exteriorIntro: "In this section, I showcase the projects where I supervised the facade design, as well as the design of gardens and outdoor spaces.",
    homeCareTitle: "Home Care Facade",
    homeCareDesc: "Facade design for a home care building for a client from Egypt. The design was inspired by the company's colors and logo, as requested by the client.",
    HouseGardenTitle: "Landscape Design For a House Garden",
    HomeGardenDesc: "Exterior landscape design for a house garden, featuring a covered parking area, a seating zone, and a playground for children.",
    landscapeTitle: "Landscape Design For a House Garden",
    landscapeDesc: "Exterior landscape design for a house garden, featuring a covered parking area, a seating zone, and a playground for children.",
    hotelTitle: "3D Design of a Hotel",
    hotelDesc: "One of my freelance projects for a client from India was 3D design of the hotel's facades and interior spaces.",
    
    // BIM Project Section
    bimIntro: "In this section, I showcase the projects I supervised in detail, where I implemented BIM in the design process.",
    sportsParkTitle: "Tadrar-Grarem Gouga Sports and Leisure Park",
    sportsParkDesc: "This work focuses on the design of a sustainable sports park in the city of Grarem Gouga, Mila. The project aims to address the challenge of promoting physical activity and user well-being while preserving the natural environment and integrating the principles of neuroarchitecture.",
    residentialVillaTitle: "Modern Villa",
    residentialVillaDesc: "A residential villa in Algeria. The project includes the design of all architectural plans, as well as execution and structural drawings, interior design, and quantity surveying for the various project elements. The design was carried out using Revit, SketchUp, and Enscape.",
    residentialVilla2Title: "Modern Villa – Series 2",
    residentialVilla2Desc: "A multi-sports hall project including all architectural plans, renderings, and complete quantity takeoff. Designed fully in Revit.",
    // Massing Projects Section
    massingIntro: "This section is dedicated to parametric design projects, where I create unconventional and innovative forms.",
    mosqueTitle: "An unconventional mosque design",
    mosqueDesc: "A unique mosque design inspired by the minarets of Islamic architecture, featuring a parametric facade. The project was designed using Rhino.Inside.Revit and visualized with Twinmotion.",
    sportsHallTitle: "Organic Multi-Sports Hall",
    sportsHallDesc: "Design of a multi-sports hall with an organic architectural form.",
    touristParkTitle: "Tourist Park",
    touristParkDesc: "Design of a tourist park built on a hillside."
  },
  fr: {
    pageTitle: "Accueil",
    galleryTip: "Cliquez sur n'importe quelle image de projet pour ouvrir une galerie de haute qualité avec des images plus grandes et des descriptions complètes du projet.",
    studioTitle: "TridantselctRT / Ghassan Yahia",
    tagline: "Architecture Portfolio",
    navHome: "Accueil",
    navProjects: "Projets",    // Moved up
    navIntro: "Introduction",  // Moved down
    navContact: "Contact",
    welcome: "Bienvenue",
    aboutMe: "À propos de moi",
    introText: "Ceci est un portfolio d'architecture simple présentant des œuvres clés, des philosophies de conception et des coordonnées.",
    aboutDescription: "Bonjour! Je m'appelle Yahia Ghassan, un architecte et designer passionné par la création d'espaces qui allient fonctionnalité, émotion et identité. Mon travail explore comment le design peut évoquer des sentiments et favoriser la connexion à travers la lumière, la texture et la forme. Je crois que l'architecture est plus que de simples bâtiments; il s'agit de créer des expériences qui résonnent au niveau personnel. À travers mes projets, je m'efforce d'équilibrer l'innovation avec le contexte, en veillant à ce que chaque conception réponde de manière réfléchie à son environnement et à ses utilisateurs. Merci de visiter mon portfolio, et j'espère que mon travail vous inspirera autant que le processus de création m'inspire.",
    featuredProjects: "Projets en vedette",
    viewAllProjects: "Voir tous les projets",
    introHeading: "Introduction",
    footerRights: "Tous droits réservés.",
    projectOneTitle: "Villa Moderne",
    projectOneText: "Conception de maison minimaliste axée sur la lumière naturelle et les matériaux durables.",
    projectTwoTitle: "Pavillon Urbain",
    projectTwoText: "Structure publique fusionnant nature et géométrie dans un centre-ville vibrant.",
    contactHeading: "Communication",
    contactText: "Si vous souhaitez me contacter pour une collaboration, un retour ou des opportunités professionnelles, n'hésitez pas à m'écrire à",
    contact1: "Intéressé à discuter d'un projet, d'une collaboration ou d'un concept architectural? J'aimerais me connecter.",
    contact2: "Que ce soit pour la conception résidentielle, la planification urbaine ou la visualisation conceptuelle, je suis toujours ouvert à de nouvelles idées et échanges créatifs.",
    contact3: "N'hésitez pas à me contacter par e-mail ou à vous connecter via mes plateformes sociales ci-dessous.",
    
    // Interior Design Section
    interiorIntro: "Dans cette section, vous trouverez mes designs intérieurs, y compris les plans d'étage, les dessins en coupe et les rendus 3D.",
    interiorDesignRenderTitle: "Rendu de Design D'Intérieur",
    interiorDesignRenderDesc: "Il s'agit de créer un petit livre photographique, accompagné d'une visite virtuelle d'une maison basée sur des plans. Vous devez créer des espaces pleins de lumière intégrés dans un environnement moderne et méditerranéen.",
    industrialOfficeTitle: "Design de Bureau Industriel en Entrepôt",
    industrialOfficeDesc: "Transformation d'un entrepôt avec mezzanine en espace de bureau de style industriel et rustique. Le design doit accueillir diverses zones fonctionnelles, notamment des espaces de travail ouverts, des bureaux privés et des salles de réunion. Le projet est en freelance et situé en Australie.",
    flowerStandTitle: "Stand Événementiel Floral",
    flowerStandDesc: "Conception d'une table d'exposition présentant différents types de fleurs pour un salon international. Le projet a été créé avec Revit et visualisé dans Twinmotion.",
    interiorDesign5Title : "Projet de Design d'Intérieur de Villa Résidentielle",
    interiorDesign5Desc : "Conception intérieure complète de la villa, comprenant une visualisation architecturale détaillée et un rendu réaliste des différentes pièces pour mettre en valeur leurs styles uniques et leurs agencements fonctionnels.",
    ModernVillaTitle: "Villa Moderne",
    ModernVillaDesc: "Conception intérieure complète de la villa, comprenant une visualisation architecturale détaillée et un rendu réaliste des différentes pièces pour mettre en valeur leurs styles uniques et leurs agencements fonctionnels.",
    // Exterior Design Section
    ExteriorDesign1Title: "Rendu Rapide de Maison Industrielle",
    ExteriorDesign1Desc: "Modélisation et rendu rapide d'une maison industrielle d'un petit modèle 3D de maison au design moderne, située dans un environnement naturel verdoyant. La scène se concentre sur le coin de la maison, permettant de voir les détails de conception architecturale et les matériaux utilisés.",
    exteriorIntro: "Dans cette section, je présente les projets où j'ai supervisé la conception des façades, ainsi que l'aménagement des jardins et des espaces extérieurs.",
    homeCareTitle: "Façade de Soins à Domicile",
    homeCareDesc: "Conception de façade pour un bâtiment de soins à domicile pour un client d'Égypte. Le design s'inspire des couleurs et du logo de l'entreprise, selon la demande du client.",
    HouseGardenTitle: "Design Paysager pour un Jardin de Maison",
    HomeGardenDesc: "Design paysager extérieur pour un jardin de maison, comprenant un parking couvert, une zone de détente et une aire de jeux pour enfants.",
    landscapeTitle: "Design Paysager pour Jardin de Maison",
    landscapeDesc: "Design paysager extérieur pour un jardin de maison, comprenant un parking couvert, une zone de détente et une aire de jeux pour enfants.",
    hotelTitle: "Design 3D d'un Hôtel",
    hotelDesc: "Un de mes projets freelance pour un client d'Inde était la conception 3D des façades et des espaces intérieurs de l'hôtel.",
    
    // BIM Project Section
    bimIntro: "Dans cette section, je présente les projets que j'ai supervisés en détail, où j'ai implémenté le BIM dans le processus de conception.",
    sportsParkTitle: "Parc des Sports et Loisirs Tadrar-Grarem Gouga",
    sportsParkDesc: "Ce travail se concentre sur la conception d'un parc sportif durable dans la ville de Grarem Gouga, Mila. Le projet vise à relever le défi de promouvoir l'activité physique et le bien-être des utilisateurs tout en préservant l'environnement naturel et en intégrant les principes de la neuroarchitecture.",
    residentialVillaTitle: "Villa Moderne",
    residentialVillaDesc: "Une villa résidentielle en Algérie. Le projet comprend la conception de tous les plans architecturaux, ainsi que les dessins d'exécution et structurels, le design intérieur et le métré pour les différents éléments du projet. La conception a été réalisée avec Revit, SketchUp et Enscape.",
    residentialVilla2Title: "Villa Moderne – Série 2",
    residentialVilla2Desc: "Un projet de salle multisports comprenant tous les plans architecturaux, les rendus et le métré complet. Entièrement conçu dans Revit.",
    // Massing Projects Section
    massingIntro: "Cette section est dédiée aux projets de conception paramétrique, où je crée des formes non conventionnelles et innovantes.",
    mosqueTitle: "Design non conventionnel d'une mosquée",
    mosqueDesc: "Un design unique de mosquée inspiré des minarets de l'architecture islamique, avec une façade paramétrique. Le projet a été conçu avec Rhino.Inside.Revit et visualisé avec Twinmotion.",
    sportsHallTitle: "Salle Multisports Organique",
    sportsHallDesc: "Conception d'une salle multisports avec une forme architecturale organique.",
    touristParkTitle: "Parc Touristique",
    touristParkDesc: "Conception d'un parc touristique construit à flanc de colline."
  }
};

// === Apply Translations ===
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang]?.[key];
    if (translation) el.textContent = translation;
  });
  localStorage.setItem("language", lang);
}

// === DOMContentLoaded Setup ===
document.addEventListener("DOMContentLoaded", () => {
  // Language setup
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = document.querySelector("nav").offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // Fix navigation active state
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade-in-section");
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  faders.forEach(fader => appearOnScroll.observe(fader));

  // === Image/Video Modal ===
  const modal = document.getElementById("imageModal");
  const modalDesc = document.getElementById("modalDescription");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const closeBtn = document.querySelector(".close");

  let currentItems = [];
  let currentIndex = 0;
  let currentDescription = "";

  function openModal(items, description, index = 0) {
    currentItems = items.map(i => i.trim());
    currentIndex = index;
    currentDescription = description;
    
    // Get current language
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Find the project card that was clicked
    const projectCard = document.querySelector(`[data-images="${items.join(',')}"]`);
    if (projectCard) {
      const descElement = projectCard.querySelector('.project-info p');
      if (descElement) {
        const translationKey = descElement.getAttribute('data-i18n');
        if (translationKey) {
          currentDescription = translations[currentLang][translationKey] || description;
        }
      }
    }
    
    modal.style.display = "block";
    showCurrent();
  }

  function closeModal() {
    modal.style.display = "none";
  }
  window.closeModal = closeModal;

  function showCurrent() {
    const src = currentItems[currentIndex];
    modalDesc.textContent = currentDescription;

    // Remove previous content
    const oldContent = document.getElementById("modalContent");
    if (oldContent) oldContent.remove();

    let newContent;
    if (src.endsWith(".mp4")) {
      newContent = document.createElement("video");
      newContent.src = src;
      newContent.controls = true;
      newContent.autoplay = true;
    } else {
      newContent = document.createElement("img");
      newContent.src = src;
    }
    newContent.id = "modalContent";
    newContent.className = "modal-content";
    modal.insertBefore(newContent, modalDesc);
  }

  function showNext() {
    if (!currentItems.length) return;
    currentIndex = (currentIndex + 1) % currentItems.length;
    showCurrent();
  }

  function showPrev() {
    if (!currentItems.length) return;
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    showCurrent();
  }

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    }
  });

  // Attach modal to project cards
  document.querySelectorAll(".project-card").forEach(card => {
    const items = card.getAttribute("data-images")?.split(",") || [];
    const descElement = card.querySelector(".project-info p");
    const description = descElement?.textContent || "";

    if (items.length > 0) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        openModal(items, description);
      });
    }
  });

  // === Scroll Indicator ===
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  document.body.appendChild(scrollIndicator);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  });
});
