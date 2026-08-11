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
    description: "",
    items: [
      {
        title: "WIN",
        year: "2026",
        desc: "Experimental video art.",
      },
      {
        title: "Venus Sucks",
        year: "2025",
        desc: "Yana is determined to leave her innocent days behind. Together with her sharp and shady friend Sheli, she sets out for an afternoon of mischief at the mall: in search of a blue movie, fast food, and male attention. What begins as a light hearted adventure slowly derails into a series of borderline encounters with strangers, and an unexpected lesson in the praises of the arts of seduction.",
        screenings: [
          "2025 COLIFFE, COLiseum International Film Festival",
          "2025 Haifa Film Festival",
          "2025 TLVFEST",
          "2025 Jerusalem's Women's Film Festival",
        ],
        specs: [
          ["Length", "12:13"],
          ["Format", "DCP"],
          ["Resolution", "4K DCI Scope, Color"],
          ["Subtitles", "Hebrew, English"],
        ],
      },
      {
        title: "Sun's Too Hot",
        desc: "Soli, a young activist, meets Ameline in an anarchist eco rebel camp in Jerusalem. Soli's search for tenderness and intimacy leads her to guide Ameline through her existential struggle, living in a toxic world.",
      },
    ],
  },
  {
    id: "editing",
    index: "02",
    title: "Editing",
    description: "Graduate of the full track at Sam Spiegel Film & Television School (2024).",
    groups: [
      {
        title: "Short Narrative Films",
        items: [
          {
            title: "Field Trip",
            desc: "By Yehuda Bogomolny. Won first prize at the Israeli Film Festival in Paris 2025, and second place in the short film competition at \"Epos\".",
            links: [{ label: "Watch", url: "https://vimeo.com/730740409?share=copy", password: "GR@31" }],
          },
          {
            title: "Orange Juice",
            desc: "A short film by Yahali Maoz.",
            links: [{ label: "Watch", url: "https://vimeo.com/444188059?share=copy", password: "MaOz#E" }],
          },
        ],
      },
      {
        title: "Short Documentary",
        items: [
          {
            title: "Today I Am",
            desc: "By Rotem Amitai. Documented and edited Rotem's workshop with elderly women centered on poetry. The short film combines readings of the works produced in the workshop with documentary footage of the group's unique dynamic.",
            links: [{ label: "Watch", url: "https://drive.google.com/file/d/1oBrubMnNph92jBJvaMCwtPjvPm-Kt6IS/view?usp=sharing" }],
          },
        ],
      },
      {
        title: "Live Sessions",
        items: [
          {
            title: "Modus Sessions 2026 — Young Artists",
            desc: "Six live sessions with young artists for the Modus Sessions 2026 project.",
            links: [{ label: "Watch Playlist", url: "https://youtube.com/playlist?list=PLqkKsxATvseqrMdN86tTiMM0QS-0z8q6p&si=rDb5QuRJsdXBukN_" }],
          },
          {
            title: "Daniela Spector — Live Session",
            desc: "Gig at Ba'ozen Hashlishit.",
            links: [{ label: "Watch", url: "https://youtu.be/iBNx4tyA220?si=aVh2pf7uhHQRzvxe" }],
          },
          {
            title: "Yoni Bloch — Live Session",
            desc: "Gig at Ha'ozen Hashlishit.",
            links: [
              { label: "Watch", url: "https://youtu.be/-kOJDlvIh2s" },
              { label: "Live Session Teaser", url: "https://youtu.be/PIhOwgrXQZI?si=7ml4pPbf_Un0m8D8" },
            ],
          },
        ],
      },
      {
        title: "Performance Documentation",
        items: [
          {
            title: "Biofeedback",
            desc: "By Daniel Galia Kind. Documented and edited a 48 minute biofeedback based dance performance.",
            links: [{ label: "Watch", url: "https://drive.google.com/file/d/17X6u7yRCCKSXH_zpFKGnppk6QQEyKS2d/view?usp=sharing" }],
          },
        ],
      },
      {
        title: "Curation & Artistic Direction",
        items: [
          {
            title: "Snail Cinema Streaming",
            desc: "Curated and edited the content for an indie project aimed at creating a streaming platform for watching Israeli short films.",
            links: [{ label: "Site", url: "https://shablulimfilm.com/" }],
          },
          {
            title: "Content Editing — Outline Festival 2025",
            desc: "Content editing for the illustration exhibitions and digital platforms of the 'Outline, Illustration and Words in Jerusalem' festival. The role combined guiding and drafting curatorial texts for the 13 participating exhibitions, as well as editing and uploading content to the website.",
            links: [{ label: "Site", url: "https://outlinejerusalem.com/" }],
          },
        ],
      },
      {
        title: "Selected Social Media Content",
        items: [
          {
            title: "Teasers for \"Focus\" Youth Live Sessions Project",
            links: [
              { label: "Project Trailer", url: "https://www.instagram.com/p/DZSzOPTONfs/" },
              { label: "Young Creators' Festival", url: "https://www.instagram.com/p/DYz3oJHunfs/" },
            ],
          },
          {
            title: "Documentary for Jerusalem Youth",
            links: [
              { label: "Tiferet in Mea Shearim", url: "https://www.instagram.com/p/DXKBoehIiHg/" },
              { label: "Interview with Gilad Lesser", url: "https://www.instagram.com/p/DVEFZt1CB8D/" },
            ],
          },
          {
            title: "Studio Visit at Wild Kids Jerusalem",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DUYtmy0AkK9/" }],
          },
          {
            title: "Open Call for Focus",
            links: [
              { label: "Open Call", url: "https://www.instagram.com/p/DRe_VzHAtGy/" },
              { label: "Vibe Video", url: "https://www.instagram.com/p/DRZkbntCBqO/" },
            ],
          },
          {
            title: "New Year's Eve Teaser — Snail Cinema",
            desc: "Comedic teaser for a New Year's Eve event with Snail Cinema.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DELOx8yt2qX/" }],
          },
          {
            title: "Longing — Short Film Screening Teaser",
            desc: "Teaser for a short film screening event on the theme of longing.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DO1K0NmCPat/" }],
          },
          {
            title: "Liel Magen — Peace Delegations to Northern Ireland",
            desc: "Liel Magen talks about peace delegations to Northern Ireland.",
            links: [{ label: "Watch", url: "https://www.instagram.com/reel/DEKjEz2tZDC/" }],
          },
          {
            title: "Cabaret in the Square",
            desc: "\"Behind the scenes\" of a cabaret in the square.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DHGHUtToMyN/" }],
          },
        ],
      },
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
  { title: "Venus Sucks", category: "Directing / Film", year: "2025" },
  { title: "Untitled Campaign", category: "Social Media & Strategy", year: "2024" },
  { title: "Untitled Exhibition", category: "Curation", year: "2023" },
];

// ---------------------------------------------------------------
// Build a single work-item card from an item data object.
// Supports optional year, desc, screenings, specs, and links —
// only the fields present in the data are rendered.
// ---------------------------------------------------------------
function buildWorkItem(item) {
  const el = document.createElement("article");
  el.className = "work-item";

  const thumb = document.createElement("div");
  thumb.className = "work-thumb";
  const thumbLabel = document.createElement("span");
  thumbLabel.className = "work-thumb-label";
  thumbLabel.textContent = "Image / Video Placeholder";
  thumb.appendChild(thumbLabel);
  el.appendChild(thumb);

  const meta = document.createElement("div");
  meta.className = "work-item-meta";
  const title = document.createElement("h3");
  title.className = "work-item-title";
  title.textContent = item.title;
  meta.appendChild(title);
  if (item.year) {
    const year = document.createElement("span");
    year.className = "work-item-year";
    year.textContent = item.year;
    meta.appendChild(year);
  }
  el.appendChild(meta);

  if (item.desc) {
    const desc = document.createElement("p");
    desc.className = "work-item-desc";
    desc.textContent = item.desc;
    el.appendChild(desc);
  }

  if (item.screenings && item.screenings.length) {
    const subhead = document.createElement("p");
    subhead.className = "work-item-subhead";
    subhead.textContent = "Screenings";
    el.appendChild(subhead);

    const list = document.createElement("ul");
    list.className = "work-item-screenings";
    item.screenings.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      list.appendChild(li);
    });
    el.appendChild(list);
  }

  if (item.specs && item.specs.length) {
    const dl = document.createElement("dl");
    dl.className = "work-item-specs";
    item.specs.forEach(([k, v]) => {
      const dt = document.createElement("dt");
      dt.textContent = k;
      const dd = document.createElement("dd");
      dd.textContent = v;
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    el.appendChild(dl);
  }

  if (item.links && item.links.length) {
    const linksWrap = document.createElement("div");
    linksWrap.className = "work-item-links";
    item.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "work-item-link";
      a.textContent = link.password ? `${link.label} (password: ${link.password})` : link.label;
      linksWrap.appendChild(a);
    });
    el.appendChild(linksWrap);
  }

  return el;
}

// ---------------------------------------------------------------
// Render categories (accordion) + highlights from data above.
// A category holds either a flat `items` array or a `groups`
// array (each with its own title + items), so editorial content
// with natural subsections (e.g. Editing) can render grouped.
// ---------------------------------------------------------------
function renderCategories() {
  const list = document.getElementById("categoryList");

  CATEGORIES.forEach((cat) => {
    const block = document.createElement("article");
    block.className = "category-block";
    block.id = cat.id;

    const panelId = `${cat.id}-panel`;
    const totalWorks = cat.groups
      ? cat.groups.reduce((sum, g) => sum + g.items.length, 0)
      : cat.items.length;

    block.innerHTML = `
      <button class="category-header" aria-expanded="false" aria-controls="${panelId}">
        <span class="category-header-left">
          <span class="category-index">${cat.index}</span>
          <h3 class="category-title">${cat.title}</h3>
        </span>
        <span class="category-header-right" style="display:flex;align-items:center;gap:20px;">
          <span class="category-count">${totalWorks} works</span>
          <span class="category-toggle" aria-hidden="true"></span>
        </span>
      </button>
      <div class="category-panel" id="${panelId}">
        <div class="category-panel-inner">
          ${cat.description ? `<p class="category-desc"></p>` : ""}
        </div>
      </div>
    `;

    if (cat.description) {
      block.querySelector(".category-desc").textContent = cat.description;
    }

    const inner = block.querySelector(".category-panel-inner");

    if (cat.groups) {
      cat.groups.forEach((group) => {
        const groupEl = document.createElement("div");
        groupEl.className = "work-group";

        const groupTitle = document.createElement("h4");
        groupTitle.className = "work-group-title";
        groupTitle.textContent = group.title;
        groupEl.appendChild(groupTitle);

        const grid = document.createElement("div");
        grid.className = "work-grid";
        group.items.forEach((item) => grid.appendChild(buildWorkItem(item)));
        groupEl.appendChild(grid);

        inner.appendChild(groupEl);
      });
    } else {
      const grid = document.createElement("div");
      grid.className = "work-grid";
      cat.items.forEach((item) => grid.appendChild(buildWorkItem(item)));
      inner.appendChild(grid);
    }

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
