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
    studioTitle: "Studio Name / Ghassan Yahia",
    tagline: "Simple architecture portfolio",
    navHome: "Home",
    navIntro: "Introduction",
    navProjectsInterior: "Interior Design",
    navProjectsExterior: "Exterior Design",
    navProjectsBIM: "BIM Projects",
    navMassingProjects: "Massing Projects",
    navContact: "Contact",
    welcome: "Welcome",
    introText: "This is a simple architecture portfolio showcasing key works, design philosophies, and contact details. Feel free to browse through the site to learn more.",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View All Projects",
    introHeading: "Introduction",
    footerRights: "All rights reserved.",
    projectOneTitle: "Modern Villa",
    projectOneText: "Minimalist home design focused on open light and sustainable materials.",
    projectTwoTitle: "Urban Pavilion",
    projectTwoText: "Public structure merging nature and geometry in a vibrant city center.",
    contactHeading: "Communication",
    contactText: "If you'd like to get in touch about collaborations, feedback, or job opportunities, feel free to email me at"
  },
  fr: {
    pageTitle: "Accueil",
    studioTitle: "Nom du Studio / Nom de l’Architecte",
    tagline: "Portfolio d’architecture",
    navHome: "Accueil",
    navIntro: "Introduction",
    navProjectsInterior: "Design Intérieur",
    navProjectsExterior: "Design Extérieur",
    navProjectsBIM: "Projets BIM",
    navMassingProjects: "Projets de Masse",
    navContact: "Contact",
    welcome: "Bienvenue",
    introText: "Ceci est un portfolio d'architecture simple présentant des œuvres clés, des philosophies de conception et des coordonnées.",
    featuredProjects: "Projets en vedette",
    viewAllProjects: "Voir tous les projets",
    introHeading: "Introduction",
    footerRights: "Tous droits réservés.",
    projectOneTitle: "Villa Moderne",
    projectOneText: "Conception de maison minimaliste axée sur la lumière naturelle et les matériaux durables.",
    projectTwoTitle: "Pavillon Urbain",
    projectTwoText: "Structure publique fusionnant nature et géométrie dans un centre-ville vibrant.",
    contactHeading: "Communication",
    contactText: "Si vous souhaitez me contacter pour une collaboration, un retour ou des opportunités professionnelles, n'hésitez pas à m'écrire à"
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
    const description = card.querySelector(".project-info p")?.innerText || "";

    card.addEventListener("click", () => {
      if (items.length) openModal(items, description);
    });
  });
});
