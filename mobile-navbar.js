/* menu responsivo */
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");

if (menuToggle && menuPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");
    menuPanel.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle && menuPanel) {
      menuToggle.classList.remove("active");
      menuPanel.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* carrossel */
function createImageFallbacks(src) {
  const extMatch = src.match(/\.[^./]+$/);
  if (!extMatch) return [src];

  const currentExt = extMatch[0];
  const base = src.slice(0, -currentExt.length);
  const extOptions = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"];
  const pathOptions = [base, base.replace("/imagem/", "/images/"), base.replace("/images/", "/imagem/")];
  const attempts = [];

  pathOptions.forEach((path) => {
    extOptions.forEach((ext) => {
      attempts.push(`${path}${ext}`);
    });
  });

  return [...new Set([src, ...attempts])];
}

function applyImageFallbacks(selector) {
  const images = document.querySelectorAll(selector);
  images.forEach((img) => {
    const attempts = createImageFallbacks(img.getAttribute("src") || "");
    let attemptIndex = 0;

    img.addEventListener("error", () => {
      attemptIndex += 1;
      if (attemptIndex < attempts.length) {
        img.src = attempts[attemptIndex];
      }
    });
  });
}

function initSlider({
  sectionSelector,
  slideSelector,
  dotsSelector,
  prevSelector,
  nextSelector,
  intervalMs
}) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const slides = section.querySelectorAll(slideSelector);
  const dotsContainer = section.querySelector(dotsSelector);
  const prevBtn = prevSelector ? section.querySelector(prevSelector) : null;
  const nextBtn = nextSelector ? section.querySelector(nextSelector) : null;
  let currentSlide = 0;

  if (slides.length === 0) return;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
      });
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Ir para a foto ${index + 1}`);
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (slides.length > 1) {
    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);
    setInterval(nextSlide, intervalMs);
  }

  updateSlider();
}

initSlider({
  sectionSelector: "#home",
  slideSelector: ".slide",
  dotsSelector: "#sliderDots",
  prevSelector: "#prevBtn",
  nextSelector: "#nextBtn",
  intervalMs: 10000
});

initSlider({
  sectionSelector: "#galeria",
  slideSelector: ".gallery-slide",
  dotsSelector: "#galleryDots",
  prevSelector: "#galleryPrevBtn",
  nextSelector: "#galleryNextBtn",
  intervalMs: 10000
});

applyImageFallbacks("#home img");
applyImageFallbacks("#galeria img");

/* voltar ao topo */
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateBackToTopVisibility() {
    backToTop.classList.toggle("is-visible", window.scrollY > 320);
  }

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
}