/* ============================================================
   Sivan Eyal — Portfolio
   All content below is placeholder. Swap the CATEGORIES and
   HIGHLIGHTS arrays with real copy/media once the content
   document is available — no markup restructuring needed.
   ============================================================ */

// ---------------------------------------------------------------
// Content data (placeholder — replace with real content)
// ---------------------------------------------------------------
const CATEGORIES = [
  {
    id: "directing",
    index: "01",
    title: "Directing / Film",
    description: "Placeholder category description — a short line of context on Sivan's directing work goes here.",
    items: [
      { title: "Untitled Short Film", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Documentary", year: "2023", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Commission", year: "2022", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "editing",
    index: "02",
    title: "Editing",
    description: "Placeholder category description — a short line of context on Sivan's editing work goes here.",
    items: [
      { title: "Untitled Feature Edit", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Music Video", year: "2023", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "curation",
    index: "03",
    title: "Curation",
    description: "Placeholder category description — a short line of context on Sivan's curatorial work goes here.",
    items: [
      { title: "Untitled Screening Series", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Exhibition", year: "2022", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "social",
    index: "04",
    title: "Social Media & Strategy",
    description: "Placeholder category description — a short line of context on Sivan's strategy work goes here.",
    items: [
      { title: "Untitled Brand Campaign", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Content Strategy", year: "2023", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "photography",
    index: "05",
    title: "Photography",
    description: "Placeholder category description — a short line of context on Sivan's photography goes here.",
    items: [
      { title: "Untitled Series", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Series", year: "2021", desc: "Placeholder description of the project, format, and context." },
    ],
  },
];

const HIGHLIGHTS = [
  { title: "Untitled Feature", category: "Directing / Film", year: "2024" },
  { title: "Untitled Campaign", category: "Social Media & Strategy", year: "2024" },
  { title: "Untitled Exhibition", category: "Curation", year: "2023" },
];

// ---------------------------------------------------------------
// Render categories (accordion) + highlights from data above
// ---------------------------------------------------------------
function renderCategories() {
  const list = document.getElementById("categoryList");
  const tpl = document.getElementById("workItemTemplate");

  CATEGORIES.forEach((cat) => {
    const block = document.createElement("article");
    block.className = "category-block";
    block.id = cat.id;

    const panelId = `${cat.id}-panel`;

    block.innerHTML = `
      <button class="category-header" aria-expanded="false" aria-controls="${panelId}">
        <span class="category-header-left">
          <span class="category-index">${cat.index}</span>
          <h3 class="category-title">${cat.title}</h3>
        </span>
        <span class="category-header-right" style="display:flex;align-items:center;gap:20px;">
          <span class="category-count">${cat.items.length} works</span>
          <span class="category-toggle" aria-hidden="true"></span>
        </span>
      </button>
      <div class="category-panel" id="${panelId}">
        <div class="category-panel-inner">
          <p class="category-desc">${cat.description}</p>
          <div class="work-grid"></div>
        </div>
      </div>
    `;

    const grid = block.querySelector(".work-grid");
    cat.items.forEach((item) => {
      const node = tpl.content.cloneNode(true);
      node.querySelector('[data-title]').textContent = item.title;
      node.querySelector('[data-year]').textContent = item.year;
      node.querySelector('[data-desc]').textContent = item.desc;
      grid.appendChild(node);
    });

    list.appendChild(block);

    const header = block.querySelector(".category-header");
    const panel = block.querySelector(".category-panel");
    header.addEventListener("click", () => toggleCategory(block, header, panel));
  });
}

function toggleCategory(block, header, panel) {
  const isOpen = block.classList.contains("is-open");

  if (isOpen) {
    panel.style.maxHeight = panel.scrollHeight + "px";
    requestAnimationFrame(() => {
      panel.style.maxHeight = "0px";
    });
    block.classList.remove("is-open");
    header.setAttribute("aria-expanded", "false");
  } else {
    block.classList.add("is-open");
    header.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = panel.scrollHeight + "px";
    block.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderHighlights() {
  const grid = document.getElementById("highlightGrid");
  HIGHLIGHTS.forEach((h) => {
    const card = document.createElement("div");
    card.className = "highlight-card";
    card.innerHTML = `
      <div class="highlight-thumb"><span>Image / Video Placeholder</span></div>
      <p class="highlight-cat">${h.category}</p>
      <h3 class="highlight-title">${h.title}</h3>
      <span class="highlight-year">${h.year}</span>
    `;
    grid.appendChild(card);
  });
}

// ---------------------------------------------------------------
// Deep-link from hero index into the matching category + open it
// ---------------------------------------------------------------
function wireHeroLinks() {
  document.querySelectorAll(".floating-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.closest(".floating-item").dataset.target;
      const block = document.getElementById(targetId);
      if (!block) return;
      e.preventDefault();
      const header = block.querySelector(".category-header");
      const panel = block.querySelector(".category-panel");
      if (!block.classList.contains("is-open")) {
        toggleCategory(block, header, panel);
      } else {
        block.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ---------------------------------------------------------------
// Custom cursor — instant dot, eased/lerped ring
// ---------------------------------------------------------------
function initCursor() {
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const glow = document.getElementById("glowField");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    glow.style.setProperty("--glow-x", `${mouseX}px`);
    glow.style.setProperty("--glow-y", `${mouseY}px`);
  }, { passive: true });

  function raf() {
    // lerp the ring toward the pointer for a soft trailing delay
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const interactive = document.querySelectorAll("a, button");
  interactive.forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });
}

// ---------------------------------------------------------------
// Magnetic pull for hero floating headlines (desktop only)
// ---------------------------------------------------------------
function initMagneticHeadlines() {
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const words = Array.from(document.querySelectorAll("[data-float]"));
  if (!isFinePointer || !words.length) return;

  const state = words.map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));
  const radius = 140;
  const strength = 0.35;

  window.addEventListener("mousemove", (e) => {
    words.forEach((word, i) => {
      const rect = word.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        const pull = (1 - dist / radius) * strength;
        state[i].tx = dx * pull;
        state[i].ty = dy * pull;
      } else {
        state[i].tx = 0;
        state[i].ty = 0;
      }
    });
  }, { passive: true });

  function raf() {
    words.forEach((word, i) => {
      const s = state[i];
      s.x += (s.tx - s.x) * 0.12;
      s.y += (s.ty - s.y) * 0.12;
      word.style.transform = `translate(${s.x}px, ${s.y}px)`;
    });
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// ---------------------------------------------------------------
// Scroll reveal (also drives mobile "float in" for hero headlines)
// ---------------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .floating-item");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => io.observe(t));
}

// ---------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------
function initMobileNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------------------------------------------------------------
// Init
// ---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderHighlights();
  wireHeroLinks();
  initCursor();
  initMagneticHeadlines();
  initReveal();
  initMobileNav();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
