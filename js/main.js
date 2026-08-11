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
        title: "WIN",
        year: "2026",
        desc: "Experimental video art.",
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
            title: "Shablulim Films Streaming Platform",
            desc: "Curated and edited the content for an indie project aimed at creating a streaming platform for watching Israeli short films.",
            links: [{ label: "Visit The Site", url: "https://shablulimfilm.com/" }],
          },
          {
            title: "Content Editing — Outline Festival 2025",
            desc: "Content editing for the illustration exhibitions and digital platforms of the 'Outline, Illustration and Words in Jerusalem' festival. The role combined guiding and drafting curatorial texts for the 13 participating exhibitions, as well as editing and uploading content to the website.",
            links: [{ label: "Visit The Site", url: "https://outlinejerusalem.com/" }],
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
    id: "photography",
    index: "03",
    title: "Photography",
    type: "gallery",
    description: "",
    // Photography uses its own swipe/zoom gallery viewer (see
    // renderGallery in this file) instead of the standard work-grid —
    // `series` replaces `items`/`groups` for this category. Each
    // series' `photoCount` placeholder slides stand in for real
    // photos, which will be supplied separately; `year`/`note` left
    // as "" render as visible TBD placeholders rather than being
    // hidden, so they're easy to fill in later.
    series: [
      {
        title: "Strangers",
        year: "",
        note: "",
        photoCount: 3,
      },
      {
        title: "ThE StAr",
        model: "Eden Degany",
        year: "",
        note: "",
        photoCount: 3,
      },
      {
        title: "Magic Realism",
        year: "",
        note: "",
        photoCount: 3,
      },
      {
        title: "When in Heaven",
        year: "",
        note: "Magical fairies of \"heaven\", a special secret spot by the Jordan River.",
        photoCount: 3,
      },
      {
        title: "All This Crazy Gift Of Time",
        year: "",
        note: "Early adulthood memoir.",
        photoCount: 3,
      },
    ],
  },
  {
    id: "curation",
    index: "04",
    title: "Curation",
    description: "Placeholder category description — a short line of context on Sivan's curatorial work goes here.",
    items: [
      { title: "Untitled Screening Series", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Exhibition", year: "2022", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "performance",
    index: "05",
    title: "Performance Artist",
    description: "Placeholder category description — a short line of context on Sivan's performance work goes here.",
    items: [
      { title: "Untitled Performance", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Performance", year: "2022", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "production",
    index: "06",
    title: "Production",
    description: "Placeholder category description — a short line of context on Sivan's production work goes here.",
    items: [
      { title: "Untitled Production", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Production", year: "2023", desc: "Placeholder description of the project, format, and context." },
    ],
  },
];

const HIGHLIGHTS = [
  { title: "Venus Sucks", category: "Directing / Film", year: "2025" },
  { title: "Untitled Campaign", category: "Social Media & Strategy", year: "2024" },
  { title: "Untitled Exhibition", category: "Curation", year: "2023" },
];

// ---------------------------------------------------------------
// Build a single work-item card from an item data object. Used for
// items inside a grouped category's tab panel (e.g. Editing's
// subsections) — flat-item categories use buildProjectPanel instead,
// which has room for the fuller synopsis/technical/awards/gallery
// layout since only one project is ever on screen at a time.
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
// A single labeled text block ("Synopsis", "Technical Details", …)
// that renders a light placeholder ("Synopsis — TBD") when the
// field is missing, rather than being omitted — every project panel
// keeps the same shape whether or not its content has been filled in.
// ---------------------------------------------------------------
function buildProjectSection(label, text) {
  const section = document.createElement("div");
  section.className = "project-section";

  const labelEl = document.createElement("h4");
  labelEl.className = "project-section-label";
  labelEl.textContent = label;
  section.appendChild(labelEl);

  const body = document.createElement("p");
  body.className = "project-section-body" + (text ? "" : " is-placeholder");
  body.textContent = text || `${label} — TBD`;
  section.appendChild(body);

  return section;
}

// ---------------------------------------------------------------
// Small image gallery for a single project: a main placeholder frame
// plus a row of thumbnails; clicking a thumbnail swaps the main
// frame's label. Placeholder-only until real photos are supplied.
// ---------------------------------------------------------------
function buildProjectGallery(count, title) {
  const wrap = document.createElement("div");
  wrap.className = "project-gallery";

  const main = document.createElement("div");
  main.className = "project-gallery-main";
  const mainLabel = document.createElement("span");
  mainLabel.textContent = `Image Placeholder — ${title} (1/${count})`;
  main.appendChild(mainLabel);
  wrap.appendChild(main);

  if (count > 1) {
    const thumbs = document.createElement("div");
    thumbs.className = "project-gallery-thumbs";
    for (let i = 0; i < count; i++) {
      const t = document.createElement("button");
      t.type = "button";
      t.className = "project-gallery-thumb" + (i === 0 ? " is-active" : "");
      t.setAttribute("aria-label", `View image ${i + 1} of ${count}`);
      t.addEventListener("click", () => {
        mainLabel.textContent = `Image Placeholder — ${title} (${i + 1}/${count})`;
        thumbs.querySelectorAll(".project-gallery-thumb").forEach((el) => el.classList.remove("is-active"));
        t.classList.add("is-active");
      });
      thumbs.appendChild(t);
    }
    wrap.appendChild(thumbs);
  }

  return wrap;
}

// ---------------------------------------------------------------
// The full detail view for a single project (Directing, Curation,
// Performance Artist, Production): a small image gallery plus
// Synopsis / Technical Details / Awards &amp; Screening History,
// always shown in full — no collapse toggle, since only one project
// is ever visible at a time in the tab-isolated overlay.
// ---------------------------------------------------------------
function buildProjectPanel(item) {
  const el = document.createElement("article");
  el.className = "project-panel";

  el.appendChild(buildProjectGallery(item.photoCount || 3, item.title));

  const info = document.createElement("div");
  info.className = "project-info";

  const header = document.createElement("div");
  header.className = "project-header";
  const titleEl = document.createElement("h3");
  titleEl.className = "project-title";
  titleEl.textContent = item.title;
  header.appendChild(titleEl);
  const yearEl = document.createElement("span");
  yearEl.className = "project-year" + (item.year ? "" : " is-placeholder");
  yearEl.textContent = item.year ? item.year : "Year — TBD";
  header.appendChild(yearEl);
  info.appendChild(header);

  info.appendChild(buildProjectSection("Synopsis", item.desc));

  if (item.specs && item.specs.length) {
    const section = document.createElement("div");
    section.className = "project-section";
    const label = document.createElement("h4");
    label.className = "project-section-label";
    label.textContent = "Technical Details";
    section.appendChild(label);
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
    section.appendChild(dl);
    info.appendChild(section);
  } else {
    info.appendChild(buildProjectSection("Technical Details", ""));
  }

  if (item.screenings && item.screenings.length) {
    const section = document.createElement("div");
    section.className = "project-section";
    const label = document.createElement("h4");
    label.className = "project-section-label";
    label.textContent = "Awards / Screening History";
    section.appendChild(label);
    const ul = document.createElement("ul");
    ul.className = "work-item-screenings";
    item.screenings.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      ul.appendChild(li);
    });
    section.appendChild(ul);
    info.appendChild(section);
  } else {
    info.appendChild(buildProjectSection("Awards / Screening History", ""));
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
    info.appendChild(linksWrap);
  }

  el.appendChild(info);
  return el;
}

// ---------------------------------------------------------------
// Item count for a category with `groups` or a flat `items` list
// (gallery categories count their `series` separately, inline).
// ---------------------------------------------------------------
function getCategoryCount(cat) {
  return cat.groups
    ? cat.groups.reduce((sum, g) => sum + g.items.length, 0)
    : cat.items.length;
}

// ---------------------------------------------------------------
// True tab isolation for non-gallery categories: builds one subnav
// pill + one content panel per group (Editing's subsections) or per
// project (Directing, Curation, Performance Artist, Production), and
// shows exactly one panel at a time. Switching tabs only ever
// toggles which panel is visible — it never scrolls anything.
// ---------------------------------------------------------------
function renderTabbedContent(cat, subnavEl, bodyEl) {
  const tabs = cat.groups
    ? cat.groups.map((group) => ({
        label: group.title,
        build: () => {
          const grid = document.createElement("div");
          grid.className = "work-grid";
          group.items.forEach((item) => grid.appendChild(buildWorkItem(item)));
          return grid;
        },
      }))
    : cat.items.map((item) => ({
        label: item.title,
        build: () => buildProjectPanel(item),
      }));

  const panels = tabs.map((t) => t.build());
  panels.forEach((panel) => bodyEl.appendChild(panel));

  const pills = tabs.map((t, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "overlay-subnav-pill";
    btn.textContent = t.label;
    btn.addEventListener("click", () => showTab(i));
    subnavEl.appendChild(btn);
    return btn;
  });

  function showTab(i) {
    panels.forEach((panel, j) => { panel.hidden = j !== i; });
    pills.forEach((btn, j) => btn.classList.toggle("is-active", j === i));
  }

  showTab(0);
}

// ---------------------------------------------------------------
// Full-screen category overlay — open/close + internal subnav.
// This is a plain fixed-position panel toggled via a CSS class; it
// never touches the URL hash or calls scrollIntoView on the page
// itself, so opening/closing it never scrolls the main page. The
// main page's scroll position is preserved automatically because we
// only freeze it (overflow: hidden) rather than moving it.
// ---------------------------------------------------------------
let overlayLastFocused = null;

function openCategoryOverlay(categoryId, triggerEl) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return;

  overlayLastFocused = triggerEl || document.activeElement;

  const overlay = document.getElementById("categoryOverlay");
  const indexEl = document.getElementById("overlayIndex");
  const titleEl = document.getElementById("overlayTitle");
  const descEl = document.getElementById("overlayDesc");
  const subnavEl = document.getElementById("overlaySubnav");
  const bodyEl = document.getElementById("overlayBody");
  const scrollEl = document.getElementById("overlayScroll");

  indexEl.textContent = cat.index;
  titleEl.textContent = cat.title;
  if (cat.description) {
    descEl.textContent = cat.description;
    descEl.hidden = false;
  } else {
    descEl.hidden = true;
  }

  subnavEl.innerHTML = "";
  bodyEl.innerHTML = "";
  bodyEl.classList.remove("overlay-body--gallery");
  activeGalleryStep = null;
  activeGalleryUnzoom = null;

  if (cat.type === "gallery") {
    // Photography: a dedicated swipe/zoom photo viewer, not the
    // standard work-grid. renderGallery builds both the subnav pills
    // (series switcher) and the body itself.
    renderGallery(cat, subnavEl, bodyEl);
  } else {
    // Every other category: true tab isolation. Clicking a subnav
    // pill (one per project, or per subsection for grouped
    // categories like Editing) shows only that panel and hides the
    // rest — no scrolling involved.
    renderTabbedContent(cat, subnavEl, bodyEl);
  }

  lockBodyScroll();

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  scrollEl.scrollTop = 0;

  document.getElementById("overlayClose").focus();
}

function closeCategoryOverlay() {
  const overlay = document.getElementById("categoryOverlay");
  if (!overlay.classList.contains("is-open")) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  unlockBodyScroll();
  activeGalleryStep = null;
  activeGalleryUnzoom = null;

  if (overlayLastFocused && typeof overlayLastFocused.focus === "function") {
    overlayLastFocused.focus();
  }
}

// Simply setting overflow:hidden to freeze scroll is not reliable across
// browsers — some forget the scroll offset once overflow is restored, so
// closing the overlay can leave the visitor at the top of the page instead
// of back where they were. Pinning the body at its current scroll offset
// via position:fixed and restoring it on close is the robust way to keep
// the "return to the exact scroll position" promise.
function lockBodyScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  document.body.dataset.scrollLockY = String(scrollY);
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockBodyScroll() {
  const scrollY = parseInt(document.body.dataset.scrollLockY || "0", 10);
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  delete document.body.dataset.scrollLockY;
  // behavior: "instant" bypasses the global `scroll-behavior: smooth` on
  // <html> — restoring position should be immediate, not an animation.
  window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
}

function initCategoryOverlay() {
  document.getElementById("overlayClose").addEventListener("click", closeCategoryOverlay);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // If a gallery photo is zoomed in, the first Escape backs out of
      // the zoom rather than closing the whole overlay.
      if (activeGalleryUnzoom && activeGalleryUnzoom()) return;
      closeCategoryOverlay();
      return;
    }
    if (!activeGalleryStep) return;
    if (e.key === "ArrowRight") activeGalleryStep(1);
    if (e.key === "ArrowLeft") activeGalleryStep(-1);
  });
}

// ---------------------------------------------------------------
// Photography's dedicated gallery viewer: one large photo at a time,
// with swipe/arrow navigation that moves through a series' photos
// and rolls over into the next/previous series at the ends, a
// click-to-zoom stage, and a persistent caption (title/year/note/
// model) that stays visible while browsing. Placeholder photos stand
// in for real images (per series `photoCount`) until real photos are
// supplied. `activeGalleryStep`/`activeGalleryUnzoom` are module-level
// so the single global keydown handler (see initCategoryOverlay) can
// reach whichever gallery instance is currently open.
// ---------------------------------------------------------------
let activeGalleryStep = null;
let activeGalleryUnzoom = null;

function renderGallery(cat, subnavEl, bodyEl) {
  bodyEl.classList.add("overlay-body--gallery");

  // mode: "grid" shows the active series as a gallery of thumbnails
  // (what a series *is*, at a glance); "browse" is the one-by-one
  // swipe/zoom viewer, entered by clicking any thumbnail.
  const state = { seriesIndex: 0, photoIndex: 0, mode: "grid" };

  const viewer = document.createElement("div");
  viewer.className = "gallery-viewer";

  const gridEl = document.createElement("div");
  gridEl.className = "gallery-grid";

  const browseEl = document.createElement("div");
  browseEl.className = "gallery-browse";

  const backBtn = document.createElement("button");
  backBtn.type = "button";
  backBtn.className = "gallery-back";
  backBtn.innerHTML = '<span aria-hidden="true">&#8249;</span> Back to Gallery';
  backBtn.addEventListener("click", () => setMode("grid"));
  browseEl.appendChild(backBtn);

  const stage = document.createElement("div");
  stage.className = "gallery-stage";

  const photoEl = document.createElement("div");
  photoEl.className = "gallery-photo";
  stage.appendChild(photoEl);

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "gallery-nav gallery-nav--prev";
  prevBtn.setAttribute("aria-label", "Previous photo");
  prevBtn.innerHTML = '<span aria-hidden="true">&#8249;</span>';
  stage.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "gallery-nav gallery-nav--next";
  nextBtn.setAttribute("aria-label", "Next photo");
  nextBtn.innerHTML = '<span aria-hidden="true">&#8250;</span>';
  stage.appendChild(nextBtn);
  browseEl.appendChild(stage);

  const dotsEl = document.createElement("div");
  dotsEl.className = "gallery-dots";
  browseEl.appendChild(dotsEl);

  const caption = document.createElement("div");
  caption.className = "gallery-caption";

  viewer.appendChild(gridEl);
  viewer.appendChild(browseEl);
  viewer.appendChild(caption);
  bodyEl.appendChild(viewer);

  const pills = cat.series.map((series, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "overlay-subnav-pill";
    btn.textContent = series.title;
    btn.addEventListener("click", () => setSeries(i));
    subnavEl.appendChild(btn);
    return btn;
  });

  function renderGrid() {
    const series = cat.series[state.seriesIndex];
    const photoCount = series.photoCount || 1;
    gridEl.innerHTML = "";
    for (let i = 0; i < photoCount; i++) {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "gallery-grid-thumb";
      const label = document.createElement("span");
      label.textContent = String(i + 1);
      thumb.appendChild(label);
      thumb.setAttribute("aria-label", `Open photo ${i + 1} of ${photoCount}`);
      thumb.addEventListener("click", () => {
        state.photoIndex = i;
        setMode("browse");
      });
      gridEl.appendChild(thumb);
    }
  }

  function renderStage() {
    const series = cat.series[state.seriesIndex];
    const photoCount = series.photoCount || 1;

    photoEl.classList.remove("is-zoomed");
    photoEl.innerHTML = "";
    const placeholder = document.createElement("div");
    placeholder.className = "gallery-photo-placeholder";
    const label = document.createElement("span");
    label.textContent = `Image Placeholder — ${series.title} (${state.photoIndex + 1}/${photoCount})`;
    placeholder.appendChild(label);
    photoEl.appendChild(placeholder);

    dotsEl.innerHTML = "";
    dotsEl.style.display = photoCount > 1 ? "flex" : "none";
    for (let i = 0; i < photoCount; i++) {
      const dot = document.createElement("span");
      dot.className = "gallery-dot" + (i === state.photoIndex ? " is-active" : "");
      dotsEl.appendChild(dot);
    }
  }

  function renderCaption() {
    const series = cat.series[state.seriesIndex];
    caption.innerHTML = "";
    const titleEl = document.createElement("h3");
    titleEl.className = "gallery-caption-title";
    titleEl.textContent = series.title;
    caption.appendChild(titleEl);

    const metaRow = document.createElement("div");
    metaRow.className = "gallery-caption-meta";

    const yearEl = document.createElement("span");
    yearEl.className = "gallery-caption-field" + (series.year ? "" : " is-placeholder");
    yearEl.textContent = series.year ? series.year : "Year — TBD";
    metaRow.appendChild(yearEl);

    if (series.model) {
      const modelEl = document.createElement("span");
      modelEl.className = "gallery-caption-field";
      modelEl.textContent = `Model — ${series.model}`;
      metaRow.appendChild(modelEl);
    }
    caption.appendChild(metaRow);

    const noteEl = document.createElement("p");
    noteEl.className = "gallery-caption-note" + (series.note ? "" : " is-placeholder");
    noteEl.textContent = series.note ? series.note : "Note — TBD";
    caption.appendChild(noteEl);
  }

  // Caption (title/year/note/model) stays visible in both modes;
  // only the grid-vs-single-photo view underneath it swaps.
  function setMode(mode) {
    state.mode = mode;
    gridEl.style.display = mode === "grid" ? "grid" : "none";
    browseEl.style.display = mode === "browse" ? "block" : "none";
    if (mode === "grid") renderGrid();
    else renderStage();
  }

  function setSeries(i) {
    const count = cat.series.length;
    state.seriesIndex = ((i % count) + count) % count;
    state.photoIndex = 0;
    renderCaption();
    setMode("grid");
    pills.forEach((btn, j) => btn.classList.toggle("is-active", j === state.seriesIndex));
  }

  // Stepping past the last/first photo of a series rolls over into
  // the next/previous series — one continuous swipe/arrow gesture
  // covers both "move within a series" and "move between series".
  // Only active in browse mode.
  function step(direction) {
    if (state.mode !== "browse") return;
    const series = cat.series[state.seriesIndex];
    const photoCount = series.photoCount || 1;
    const newPhoto = state.photoIndex + direction;

    if (newPhoto >= photoCount) {
      const count = cat.series.length;
      state.seriesIndex = (state.seriesIndex + 1) % count;
      state.photoIndex = 0;
      renderCaption();
      pills.forEach((btn, j) => btn.classList.toggle("is-active", j === state.seriesIndex));
      renderStage();
    } else if (newPhoto < 0) {
      const count = cat.series.length;
      state.seriesIndex = ((state.seriesIndex - 1) % count + count) % count;
      state.photoIndex = (cat.series[state.seriesIndex].photoCount || 1) - 1;
      renderCaption();
      pills.forEach((btn, j) => btn.classList.toggle("is-active", j === state.seriesIndex));
      renderStage();
    } else {
      state.photoIndex = newPhoto;
      renderStage();
    }
  }

  function unzoom() {
    if (!photoEl.classList.contains("is-zoomed")) return false;
    photoEl.classList.remove("is-zoomed");
    return true;
  }

  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  photoEl.addEventListener("click", () => {
    const nowZoomed = photoEl.classList.toggle("is-zoomed");
    if (nowZoomed) stage.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  let touchStartX = null;
  stage.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });

  activeGalleryStep = step;
  activeGalleryUnzoom = unzoom;

  renderCaption();
  setMode("grid");
  pills[0].classList.add("is-active");
}

// ---------------------------------------------------------------
// Render the Work section as simple list rows (title + count).
// Clicking a row opens the same full-screen overlay as the hero's
// circular nav — there is no in-page expansion here, and no work
// item content lives on the landing page itself.
// ---------------------------------------------------------------
function renderCategories() {
  const list = document.getElementById("categoryList");

  CATEGORIES.forEach((cat) => {
    const countLabel = cat.type === "gallery"
      ? `${cat.series.length} series`
      : `${getCategoryCount(cat)} works`;

    const row = document.createElement("button");
    row.type = "button";
    row.className = "category-row";
    row.innerHTML = `
      <span class="category-row-left">
        <h3 class="category-title">${cat.title}</h3>
      </span>
      <span class="category-row-right">
        <span class="category-count">${countLabel}</span>
        <span class="category-arrow" aria-hidden="true">→</span>
      </span>
    `;
    row.addEventListener("click", () => openCategoryOverlay(cat.id, row));
    list.appendChild(row);
  });
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
// Hero orbit nav — each item is a <button> (no href/anchor at all),
// so clicking it only ever opens the full-screen overlay via JS.
// ---------------------------------------------------------------
function wireHeroLinks() {
  document.querySelectorAll(".orbit-link").forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.closest(".orbit-item").dataset.target;
      openCategoryOverlay(targetId, link);
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

  // Delegated (not bound per-element) so it still works for buttons/links
  // created later, e.g. inside the category overlay's dynamic content.
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button")) ring.classList.add("is-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button") && !e.relatedTarget?.closest("a, button")) {
      ring.classList.remove("is-active");
    }
  });
}

// ---------------------------------------------------------------
// Magnetic pull for the hero orbit nav items (desktop only).
// Offsets are written to --mx/--my custom properties rather than
// the transform property directly, since .orbit-item already uses
// transform for its centering offset (see css/style.css).
// ---------------------------------------------------------------
function initMagneticHeadlines() {
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const items = Array.from(document.querySelectorAll(".orbit-item"));
  if (!isFinePointer || !items.length) return;

  const state = items.map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));
  const radius = 130;
  const strength = 0.4;

  window.addEventListener("mousemove", (e) => {
    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
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
    items.forEach((item, i) => {
      const s = state[i];
      s.x += (s.tx - s.x) * 0.12;
      s.y += (s.ty - s.y) * 0.12;
      item.style.setProperty("--mx", `${s.x}px`);
      item.style.setProperty("--my", `${s.y}px`);
    });
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// ---------------------------------------------------------------
// Scroll reveal (also drives mobile "float in" for hero orbit items)
// ---------------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .orbit-item");
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
  initCategoryOverlay();
  initCursor();
  initMagneticHeadlines();
  initReveal();
  initMobileNav();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
