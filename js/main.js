/* ============================================================
   Sivan Eyal — Portfolio

   Style rule: never use an em dash (—) in any visible copy — titles,
   descriptions, labels, alt text, button/link text, anything a
   visitor or a screen reader encounters. Use a period, comma, or a
   plain hyphen ("-") instead. This file's own comments are exempt
   (not user-facing), but CATEGORIES data and any string built for
   on-page display are not.

   A link object (inside `links`/`items[].links`) supports:
     label      — link text
     url        — Vimeo / YouTube / Google Drive URLs are detected
                  automatically (see parseEmbedUrl) and rendered as an
                  inline, playable embed instead of an outbound link.
                  Any other URL (e.g. a plain website) stays a normal link.
     password   — if set, a "Request Password" button (mailto) is shown
                  alongside the embed instead of displaying the password.
     thumbnail  — optional path to an image used as the poster/frame
                  shown before the embed is played. Pick whichever still
                  frame or image best represents the video and point this
                  at it (e.g. "assets/images/work/field-trip-poster.jpg").
                  Left unset, a plain placeholder is shown instead of an
                  arbitrary/first video frame.

   A group object (inside a category's `groups`) supports:
     layout: "reels" — renders as a compact clickable-thumbnail grid
                  that opens a playlist-style viewer, instead of the
                  standard full-size work-item cards. Used for Editing's
                  "Selected Social Media Content".
   ============================================================ */

// ---------------------------------------------------------------
// Content data (placeholder — replace with real content)
// ---------------------------------------------------------------
const CATEGORIES = [
  {
    id: "directing",
    index: "01",
    title: "Film Directing",
    description: "",
    // Verb phrase used to build specific image/video alt text (see
    // buildMediaAlt) — Sivan's actual role varies by category, so this
    // isn't hardcoded into the alt-text builder itself.
    mediaRole: "directing on the set of",
    items: [
      {
        title: "Venus Sucks",
        year: "2025",
        desc: "Yana is determined to leave her innocent days behind. Together with her sharp and shady friend Sheli, she sets out for an afternoon of mischief at the mall: in search of a blue movie, fast food, and male attention. What begins as a light hearted adventure slowly derails into a series of borderline encounters with strangers, and an unexpected lesson in the praises of the arts of seduction.",
        photos: ["PHOTOS/VENUS SUCKS/1.jpg", "PHOTOS/VENUS SUCKS/2.jpg", "PHOTOS/VENUS SUCKS/3.jpg"],
        screenings: [
          { year: "2025", name: "COLIFFE, COLiseum International Film Festival", url: "https://coliffe.it/en/international-short-films-2025-en" },
          { year: "2025", name: "Haifa Film Festival", url: "https://www.haifaff.co.il/סרטים/12096/חשיפה_ראשונה_-_קולנוע_קצר" },
          { year: "2025", name: "TLVFEST", url: "https://www.tlvfest.com/fest_movie/venus-sucks-israeli-short-films/" },
          { year: "2025", name: "Jerusalem's Women's Film Festival", url: "https://www.jwff.co.il/independent-film/venus-sucks" },
        ],
        specs: [
          ["Length", "12:13"],
          ["Format", "DCP"],
          ["Resolution", "4K DCI Scope, Color"],
          ["Subtitles", "Hebrew, English"],
        ],
        links: [{ label: "Letterboxd", url: "https://letterboxd.com/film/venus-sucks/" }],
        hasScreenerButton: true,
      },
      {
        title: "WIN",
        year: "2026",
        desc: "A bystander passes through Jerusalem, Israel, where barbarism and joy are one, winning their way through destruction. Experimental short documentary.",
        photos: [
          "PHOTOS/WIN/WIN 1.jpg",
          "PHOTOS/WIN/WIN 2.jpg",
          "PHOTOS/WIN/WIN 3.jpg",
          "PHOTOS/WIN/WIN 4.jpg",
          "PHOTOS/WIN/WIN 5.jpg",
          "PHOTOS/WIN/WIN 6.jpg",
          "PHOTOS/WIN/WIN 7.jpg",
        ],
        // Replaces the "Awards / Screening History" heading/section for
        // this project only - other projects keep that default label.
        screeningsLabel: "Commissioned for the exhibition:",
        screenings: [
          { text: "Vogue Zion, ", linkLabel: "Barbur Gallery", linkUrl: "https://barburgallery.org/", suffix: " (Jerusalem)" },
        ],
        // This project has no runtime/format/resolution info to show,
        // unlike Venus Sucks - omit the section rather than show a
        // "Technical Details - TBD" placeholder that will never fill in.
        hideTechnicalDetails: true,
        hasScreenerButton: true,
      },
      {
        title: "Sun's Too Hot",
        year: "2023",
        desc: "Soli, a young activist, meets Ameline in an anarchist eco rebel camp in Jerusalem. Soli's search for tenderness and intimacy leads her to guide Ameline through her existential struggle, living in a toxic world.",
        photos: [
          "PHOTOS/SUNSTOOHOT/banana 2shot happy.jpg",
          "PHOTOS/SUNSTOOHOT/night fire soli.jpg",
          "PHOTOS/SUNSTOOHOT/1.jpg",
          "PHOTOS/SUNSTOOHOT/kiss with hands.jpg",
          "PHOTOS/SUNSTOOHOT/soli pure joy cu.jpg",
          { video: "https://geo.dailymotion.com/player.html?video=x8qwsta" },
        ],
        screenings: [
          { linkLabel: "TLVFest 23", linkUrl: "https://www.tlvfest.com/fest_movie/arava-shrt-heb/" },
          "Winner, Best Long Short at the Milwaukee Illuminate Film Festival, December 16, 2023",
        ],
        specs: [
          ["Length", "16:46"],
          ["Format", "DCP"],
          ["Resolution", "4K DCI Scope, Color"],
          ["Subtitles", "Hebrew, English"],
        ],
        links: [{ label: "Letterboxd", url: "https://letterboxd.com/film/suns-too-hot/" }],
        hasScreenerButton: true,
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
        mediaRole: "editing",
        items: [
          {
            title: "Field Trip",
            desc: "Directed and edited by Yehuda Bogomolny. Co-edited with Sivan Eyal. Won first prize at the Israeli Film Festival in Paris 2025, and second place in the short film competition at 'Epos'.",
            // passwordOnly: the real Vimeo URL/password never ship to the
            // browser at all (see buildPasswordOnlyMedia) - previously
            // embedding the video with its password inline meant anyone
            // could read the password straight from page source. poster
            // is just a non-sensitive still frame, dimmed behind the lock.
            links: [{ label: "Request Screener", passwordOnly: true }],
            poster: "PHOTOS/EDITOR/SHORT NARRATIVE/Field Trip 1.jpg",
          },
          {
            title: "Orange Juice",
            desc: "A short film by Yahali Maoz.",
            links: [{ label: "Request Screener", passwordOnly: true }],
            poster: "PHOTOS/EDITOR/SHORT NARRATIVE/Orange Juice 1.jpg",
          },
        ],
      },
      {
        title: "Short Documentary",
        mediaRole: "editing",
        items: [
          {
            title: "Today I Am",
            desc: "By Rotem Amitai. Documented and edited Rotem's workshop with elderly women centered on poetry. The short film combines readings of the works produced in the workshop with documentary footage of the group's unique dynamic.",
            // passwordOnly: the real Drive URL never ships to the browser -
            // an "anyone with the link" Drive share is viewable by anyone
            // who reads it out of the page source, same issue as Biofeedback.
            links: [{ label: "Request Screener", passwordOnly: true }],
            poster: "PHOTOS/EDITOR/SHORT NARRATIVE/Today I Am 1.jpg",
          },
        ],
      },
      {
        title: "Live Sessions",
        mediaRole: "editing",
        items: [
          {
            title: "Modus Sessions 2026 - Young Artists",
            desc: "Six live sessions with young artists for the Modus Sessions 2026 project.",
            // A YouTube playlist URL has no predictable per-video thumbnail
            // path the way a single video ID does (see parseEmbedUrl), so
            // this is a hand-picked still instead of the generic placeholder.
            links: [{ label: "Watch Playlist", url: "https://youtube.com/playlist?list=PLqkKsxATvseqrMdN86tTiMM0QS-0z8q6p&si=rDb5QuRJsdXBukN_", thumbnail: "PHOTOS/LIVE SESSIONS/Modus Sessions 2026.jpg" }],
          },
          {
            title: "Daniela Spector - Live Session",
            desc: "Gig at Ha'ozen Hashlishit.",
            links: [{ label: "Watch", url: "https://youtu.be/iBNx4tyA220?si=aVh2pf7uhHQRzvxe" }],
          },
          {
            title: "Yoni Bloch - Live Session",
            desc: "Gig at Ha'ozen Hashlishit.",
            links: [{ label: "Watch", url: "https://youtu.be/-kOJDlvIh2s" }],
          },
          {
            title: "Focus JLM - Live Sessions",
            desc: "Live session videos for the Focus JLM youth culture platform.",
            links: [
              { url: "https://youtu.be/fNEhufcJS9A" },
              { url: "https://youtu.be/UyUGFBrGghc" },
              { url: "https://youtu.be/jlC5KxEyWIw" },
              { url: "https://youtu.be/QHTqVJeIF3w" },
              { url: "https://youtu.be/iZq0XjqSbdE" },
            ],
          },
        ],
      },
      {
        title: "Performance Documentation",
        mediaRole: "editing",
        items: [
          {
            title: "Biofeedback",
            desc: "By Daniel Galia Kind. Documented and edited a 48 minute biofeedback based dance performance.",
            // passwordOnly: no url at all, on purpose - this used to be a
            // directly-viewable "anyone with the link" Drive file, so
            // even embedding it behind a label would still show the full
            // performance to anyone. Requests now route through Sivan.
            links: [{ label: "Request Screener", passwordOnly: true }],
            poster: "PHOTOS/EDITOR/PERFORMANCE DOCUMENTATION/Biofeedback.jpg",
          },
        ],
      },
      {
        title: "Selected Social Media Content",
        layout: "reels",
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
            title: "New Year's Eve Teaser - Snail Cinema",
            desc: "Comedic teaser for a New Year's Eve event with Snail Cinema.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DELOx8yt2qX/" }],
          },
          {
            title: "Longing - Short Film Screening Teaser",
            desc: "Teaser for a short film screening event on the theme of longing.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DO1K0NmCPat/" }],
          },
          {
            title: "Liel Magen - Peace Delegations to Northern Ireland",
            desc: "Liel Magen talks about peace delegations to Northern Ireland.",
            links: [{ label: "Watch", url: "https://www.instagram.com/reel/DEKjEz2tZDC/" }],
          },
          {
            title: "Cabaret in the Square",
            desc: "\"Behind the scenes\" of a cabaret in the square.",
            links: [{ label: "Watch", url: "https://www.instagram.com/p/DHGHUtToMyN/" }],
          },
          {
            title: "Yoni Bloch - Live Session Teaser",
            links: [{ label: "Watch", url: "https://youtu.be/PIhOwgrXQZI?si=7ml4pPbf_Un0m8D8" }],
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
    description: "",
    mediaRole: "curating",
    items: [
      {
        title: "Shablulim Films Streaming Platform",
        synopsisLabel: "About the Project",
        desc: "Curated and edited the content for an indie project aimed at creating a streaming platform for watching Israeli short films.",
        // A real, hand-picked site screenshot as the gallery image (not
        // a production photoshoot) - the "Visit The Site" link below is
        // a plain textLink rather than a link.thumbnail preview card,
        // so the screenshot sits beside the text as this project's
        // gallery column instead of stacked above it inside project-info.
        photos: ["PHOTOS/CURATION/Shablulim Films.jpg"],
        hideScreenings: true,
        hideTechnicalDetails: true,
        links: [{ label: "Visit The Site", url: "https://shablulimfilm.com/" }],
      },
      {
        title: "Content Editing - Outline Illustration Festival",
        year: "2025",
        synopsisLabel: "About the Project",
        desc: "Content editing for the illustration exhibitions and digital platforms of the 'Outline, Illustration and Words in Jerusalem' festival. The role combined guiding and drafting curatorial texts for the 13 participating exhibitions, as well as editing and uploading content to the website.",
        photos: ["PHOTOS/CURATION/Outline Festival 2025.jpg"],
        hideScreenings: true,
        hideTechnicalDetails: true,
        links: [{ label: "Visit The Site", url: "https://outlinejerusalem.com/" }],
      },
    ],
  },
  {
    id: "performance",
    index: "05",
    title: "Performance Artist",
    description: "",
    mediaRole: "performing in",
    items: [
      { title: "Untitled Performance", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Performance", year: "2022", desc: "Placeholder description of the project, format, and context." },
    ],
  },
  {
    id: "production",
    index: "06",
    title: "Production",
    description: "",
    mediaRole: "producing",
    items: [
      {
        title: "Digital Diary",
        year: "2023",
        desc: "18-year-old Anton hangs out with thugs who steal cell phones and blackmail their owners. But when Anton gets a hold of Meitar's phone, he becomes obsessed with the world she has compulsively recorded.",
        photos: ["PHOTOS/NEWS/DIGITAL DIARY POSTER.jpg"],
        credits: [
          ["Director", "Yasmine Scheft"],
          ["Writers", "Pratt Keshet, Yasmine Scheft"],
          ["Stars", "Svetlana Demidov, Tomer Krkye, Shaked Mochiach"],
          ["Producer", "Sivan Eyal"],
        ],
        screenings: [
          "Jerusalem Film Festival, 2023 Nominee, Award for Israeli Cinema, Diamond Competition for Israeli Short Films",
          "Short Shorts Film Festival & Asia, 2024 Nominee, International Competition, Best Short Film",
          "Poitiers Film Festival, 2023 Nominee, Grand Prize, Best Short Film",
        ],
        specs: [
          ["Length", "18m"],
          ["Format", "DCP"],
          ["Subtitles", "Hebrew, English"],
        ],
        hasScreenerButton: true,
      },
      { title: "Untitled Production", year: "2024", desc: "Placeholder description of the project, format, and context." },
      { title: "Untitled Production", year: "2023", desc: "Placeholder description of the project, format, and context." },
    ],
  },
];

// Chronological, oldest first (see renderNews). Each item links out to
// its Instagram post, with a real static image (image) - not a live
// embed/screenshot, those rendered unreliably (a generic Instagram
// card, not the actual photo).
const NEWS = [
  {
    image: "PHOTOS/NEWS/DIGITAL DIARY POSTER.jpg",
    caption: "Digital Diary screening at Berkshire Film Festival, MA (30.5.24) and Short Shorts Film Festival, Tokyo (16.6.24).",
    url: "https://www.instagram.com/p/C7jG-pBtLfnjfGaKDi01v--2uoyXHLtk5kIckg0/",
  },
  {
    image: "PHOTOS/NEWS/BTS SUNS TOO HOT.jpg",
    caption: "Behind the scenes, Sun's Too Hot.",
    url: "https://www.instagram.com/p/CebaZxytswf/",
  },
  {
    image: "PHOTOS/NEWS/VENUS SUCKS BTS.jpg",
    caption: "Behind the scenes, Venus Sucks.",
    url: "https://www.instagram.com/p/DLzLDzhosUp/",
  },
  {
    image: "PHOTOS/NEWS/HAIFA ANNOUNCMENT.jpg",
    caption: "Venus Sucks selected for the Haifa Film Festival, 2025.",
    url: "https://www.instagram.com/p/DOY73CJCHY1/",
  },
  {
    image: "PHOTOS/NEWS/HEZYONOT.jpg",
    caption: "Chezyonot, a small local film festival I curated.",
    url: "https://www.instagram.com/p/DLmkKapIUv1/",
  },
  {
    image: "PHOTOS/NEWS/4 MOVIES ABOUT MISSING.jpg",
    caption: "An event I co-curated with intangible cinema project.",
    url: "https://www.instagram.com/p/DO1K0NmCPat/",
  },
];

// ---------------------------------------------------------------
// Detect whether a URL is a Vimeo / YouTube / Google Drive video and,
// if so, return the platform + a src URL suitable for an <iframe>.
// Anything else (a plain website, an Instagram post permalink used
// outside the reels viewer, etc.) returns null and stays a normal
// outbound link.
// ---------------------------------------------------------------
function parseEmbedUrl(url) {
  let u;
  try {
    u = new URL(url);
  } catch (e) {
    return null;
  }
  const host = u.hostname.replace(/^www\./, "");

  if (host === "vimeo.com") {
    const m = u.pathname.match(/^\/(\d+)/);
    if (m) return { platform: "vimeo", embedUrl: `https://player.vimeo.com/video/${m[1]}` };
  }

  if (host === "youtube.com" || host === "youtu.be" || host === "m.youtube.com") {
    const list = u.searchParams.get("list");
    if (u.pathname === "/playlist" && list) {
      return { platform: "youtube", embedUrl: `https://www.youtube.com/embed/videoseries?list=${list}` };
    }
    let id = u.searchParams.get("v");
    if (!id && host === "youtu.be") id = u.pathname.slice(1);
    if (!id && u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2];
    if (id) {
      return {
        platform: "youtube",
        embedUrl: `https://www.youtube.com/embed/${id}${list ? `?list=${list}` : ""}`,
        // No API call or fetch needed — YouTube's thumbnail path is a
        // predictable pattern built straight from the video ID. Not
        // available for a playlist URL (no single video ID to key off).
        thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    }
  }

  if (host === "dailymotion.com" || host === "geo.dailymotion.com") {
    let id = u.searchParams.get("video");
    if (!id) {
      const m = u.pathname.match(/\/video\/([^/_]+)/);
      if (m) id = m[1];
    }
    if (id) return { platform: "dailymotion", embedUrl: `https://www.dailymotion.com/embed/video/${id}` };
  }

  if (host === "drive.google.com") {
    const m = u.pathname.match(/\/file\/d\/([^/]+)/);
    if (m) return { platform: "drive", embedUrl: `https://drive.google.com/file/d/${m[1]}/preview` };
  }

  if (host === "instagram.com") {
    const m = u.pathname.match(/^\/(p|reel)\/([^/]+)/);
    if (m) {
      return {
        platform: "instagram",
        embedUrl: `https://www.instagram.com/${m[1]}/${m[2]}/embed`,
        // Instagram has no public thumbnail-by-ID pattern the way YouTube
        // does, so a real preview image has to come from somewhere else -
        // a live screenshot of the post itself, same free screenshot
        // service already used for the Curation website previews and the
        // News strip (see buildScreenshotThumbnailUrl below).
        thumbnailUrl: buildScreenshotThumbnailUrl(url),
      };
    }
  }

  return null;
}

// ---------------------------------------------------------------
// A live screenshot of a page, via a free (no API key) screenshot
// service - same approach used for the Curation website previews
// (see the "curation" category's link.thumbnail values), just
// computed on the fly here instead of hand-set per item, since every
// News item's thumbnail is derived the same way from its own URL.
// ---------------------------------------------------------------
function buildScreenshotThumbnailUrl(url, width = 400) {
  return `https://image.thum.io/get/width/${width}/${url}`;
}

// ---------------------------------------------------------------
// Builds specific, descriptive alt text for a work thumbnail instead
// of a generic label — e.g. "Sivan Eyal directing on the set of Venus
// Sucks, 2025" rather than "Video thumbnail". `role` is a verb phrase
// describing Sivan's actual role on that specific piece of work
// (varies by category/group — see each CATEGORIES entry's mediaRole),
// since she directs some projects and edits/curates/produces others.
// ---------------------------------------------------------------
function buildMediaAlt(role, title, year) {
  return `Sivan Eyal ${role} ${title}${year ? `, ${year}` : ""}`;
}

// ---------------------------------------------------------------
// A click-to-play embed: shows a poster (link.thumbnail if set, a
// plain placeholder otherwise) until clicked, then swaps in the real
// <iframe>. Returns null if the URL isn't a recognized video platform
// (see parseEmbedUrl) so the caller can fall back to a normal link.
// ---------------------------------------------------------------
function buildMediaEmbed(link, title, altText) {
  const embed = parseEmbedUrl(link.url);
  if (!embed) return null;

  const wrap = document.createElement("div");
  wrap.className = "media-embed";
  wrap.dataset.platform = embed.platform;

  const facade = document.createElement("button");
  facade.type = "button";
  facade.className = "media-embed-facade";
  facade.setAttribute("aria-label", `Play ${title}`);

  // link.thumbnail (an explicit, hand-picked frame) wins if set; otherwise
  // fall back to whatever the platform can supply automatically (e.g.
  // YouTube's predictable /vi/{id}/hqdefault.jpg path — see parseEmbedUrl).
  const thumbnailSrc = link.thumbnail || embed.thumbnailUrl;
  if (thumbnailSrc) {
    const img = document.createElement("img");
    img.className = "media-embed-thumb";
    img.src = thumbnailSrc;
    img.alt = altText || title;
    img.loading = "lazy";
    // If the image 404s (e.g. a stale/deleted video ID), fall back to the
    // plain placeholder instead of leaving a broken-image icon on screen.
    img.addEventListener("error", () => {
      img.remove();
      const ph = document.createElement("span");
      ph.className = "media-embed-thumb-placeholder";
      ph.textContent = "Video Placeholder - thumbnail not set";
      facade.insertBefore(ph, facade.firstChild);
    }, { once: true });
    facade.appendChild(img);
  } else {
    const ph = document.createElement("span");
    ph.className = "media-embed-thumb-placeholder";
    ph.textContent = "Video Placeholder - thumbnail not set";
    facade.appendChild(ph);
  }

  const play = document.createElement("span");
  play.className = "media-embed-play";
  play.setAttribute("aria-hidden", "true");
  facade.appendChild(play);

  facade.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    const sep = embed.embedUrl.includes("?") ? "&" : "?";
    // Autoplay is only meaningful for Vimeo/YouTube — Drive/Instagram
    // ignore it, so leave their URLs untouched.
    iframe.src = embed.platform === "vimeo" || embed.platform === "youtube"
      ? `${embed.embedUrl}${sep}autoplay=1`
      : embed.embedUrl;
    iframe.className = "media-embed-iframe";
    iframe.title = title;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    iframe.setAttribute("allowfullscreen", "");
    wrap.innerHTML = "";
    wrap.appendChild(iframe);
  });

  wrap.appendChild(facade);
  return wrap;
}

// ---------------------------------------------------------------
// A plain (non-embeddable) link with a real preview image - e.g. a
// curated external website, where link.thumbnail is a screenshot URL
// rather than a hand-picked video frame. Unlike buildMediaEmbed there
// is nothing to "play" in place, so the whole card is just a link
// straight out to the site.
// ---------------------------------------------------------------
function buildLinkPreview(link, altText) {
  const a = document.createElement("a");
  a.className = "link-preview";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const thumb = document.createElement("div");
  thumb.className = "link-preview-thumb";
  const img = document.createElement("img");
  img.src = link.thumbnail;
  img.alt = altText;
  img.loading = "lazy";
  // Screenshot services can fail/rate-limit - fall back to a plain
  // placeholder instead of a broken-image icon, same pattern as
  // buildMediaEmbed's thumbnail fallback.
  img.addEventListener("error", () => {
    img.remove();
    thumb.classList.add("is-empty");
    const ph = document.createElement("span");
    ph.className = "link-preview-thumb-placeholder";
    ph.textContent = "Website Preview - image unavailable";
    thumb.appendChild(ph);
  }, { once: true });
  thumb.appendChild(img);
  a.appendChild(thumb);

  const label = document.createElement("span");
  label.className = "link-preview-label";
  label.textContent = link.label;
  a.appendChild(label);

  return a;
}

// ---------------------------------------------------------------
// Instagram's official oEmbed widget (blockquote + embed.js), used in
// place of a custom iframe facade so the real post thumbnail, caption,
// and engagement UI render exactly as Instagram intends, pulled live
// from Instagram itself rather than guessed at. The script is only
// injected the first time a visitor actually opens a reel (not on
// every page load, since most visitors never open this tab), and is
// only ever added once regardless of how many reels get viewed.
// ---------------------------------------------------------------
let instagramScriptPromise = null;

function loadInstagramEmbedScript() {
  if (window.instgrm) return Promise.resolve();
  if (instagramScriptPromise) return instagramScriptPromise;
  instagramScriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.addEventListener("load", () => resolve());
    // Fail open — if Instagram's script can't load, the blockquote is
    // still there with a real permalink, so the page doesn't break.
    script.addEventListener("error", () => resolve());
    document.body.appendChild(script);
  });
  return instagramScriptPromise;
}

// embed.js only scans the page for .instagram-media blockquotes once,
// at its own load time — it doesn't watch the DOM for ones added
// later. Since every reel here is inserted well after that (a visitor
// has to open the overlay and click into a reel first), process()
// must be called explicitly after each blockquote is inserted, or it
// would just sit there unrendered.
function buildInstagramEmbed(url) {
  const wrap = document.createElement("div");
  wrap.className = "instagram-embed-wrap";

  const blockquote = document.createElement("blockquote");
  blockquote.className = "instagram-media";
  blockquote.setAttribute("data-instgrm-permalink", url);
  blockquote.setAttribute("data-instgrm-version", "14");

  // Fallback content Instagram's own script replaces once it
  // successfully processes this blockquote. Left in place (rather
  // than empty) for when it can't — e.g. an ad/privacy blocker
  // stopping embed.js outright, which is common enough in the real
  // world to be worth a real fallback, not just a blank gap.
  const fallback = document.createElement("a");
  fallback.className = "instagram-embed-fallback";
  fallback.href = url;
  fallback.target = "_blank";
  fallback.rel = "noopener noreferrer";
  fallback.textContent = "View this post on Instagram";
  blockquote.appendChild(fallback);

  wrap.appendChild(blockquote);

  loadInstagramEmbedScript().then(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  });

  return wrap;
}

// ---------------------------------------------------------------
// Shared builder for the mailto links/buttons below - each caller
// supplies the visible label, CSS class, and mail subject/body.
// sivaneyal23@gmail.com, not hello@sivaneyal.com - the custom domain
// address isn't set up yet, so every contact point on the site routes
// to the Gmail address until that changes.
// ---------------------------------------------------------------
function buildMailtoLink(className, text, subject, body) {
  const a = document.createElement("a");
  a.className = className;
  a.href = `mailto:sivaneyal23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  a.textContent = text;
  return a;
}

// Replaces displaying a project's password in plain text: a mailto
// link pre-filled with a request for that specific project, so Sivan
// can personally decide whether to send it.
function buildPasswordRequestButton(title) {
  return buildMailtoLink(
    "request-password-btn",
    "Request Password",
    `Password Request - ${title}`,
    `Hi Sivan,\n\nCould you send me the password to watch "${title}"?\n\nThanks!`
  );
}

// Same mailto content as buildScreenerLink, but styled as a button -
// for projects like Field Trip/Orange Juice that already show a
// password-style button next to their embed (see buildWorkItem).
function buildScreenerRequestButton(title) {
  return buildMailtoLink(
    "request-password-btn",
    "Request Screener",
    `Screener Request - ${title}`,
    `Hi Sivan,\n\nCould you send me a screener for "${title}"?\n\nThanks!`
  );
}

// A plain text link (not a button) alongside a project's other
// bottom-of-panel links like Letterboxd/Watch - opens a pre-filled
// mailto asking Sivan for a private screener.
function buildScreenerLink(title) {
  return buildMailtoLink(
    "work-item-link",
    "Ask for a Screener",
    `Screener Request - ${title}`,
    `Hi Sivan,\n\nCould you send me a screener for "${title}"?\n\nThanks!`
  );
}

// ---------------------------------------------------------------
// For content that isn't safe to embed at all — e.g. a Drive file
// shared as "anyone with the link can view", where embedding it would
// just show the content directly with no gate, unlike Vimeo's own
// password wall on an embedded player. Renders only a locked
// placeholder and the Request Screener button; the real URL is never
// put in a link.passwordOnly item's data, so it never ships to the
// browser and can't be found via view-source either.
// ---------------------------------------------------------------
function buildPasswordOnlyMedia(title, poster) {
  const wrap = document.createElement("div");
  wrap.className = "work-item-media";

  const block = document.createElement("div");
  block.className = "work-item-media-block";

  const thumb = document.createElement("div");
  thumb.className = "work-thumb" + (poster ? " has-poster" : "");

  // poster: a real production still behind the lock overlay, dimmed so
  // the "Screener Protected" label/icon stay legible over it - not the
  // real video, just a still frame that isn't sensitive on its own.
  if (poster) {
    const img = document.createElement("img");
    img.className = "work-thumb-poster";
    img.src = poster;
    img.alt = "";
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.remove();
      thumb.classList.remove("has-poster");
    }, { once: true });
    thumb.appendChild(img);
  }

  const lockWrap = document.createElement("div");
  lockWrap.className = "work-thumb-locked";
  const lock = document.createElement("span");
  lock.className = "work-thumb-lock";
  lock.setAttribute("aria-hidden", "true");
  lockWrap.appendChild(lock);
  const label = document.createElement("span");
  label.className = "work-thumb-label";
  label.textContent = "Screener Protected";
  lockWrap.appendChild(label);
  thumb.appendChild(lockWrap);
  block.appendChild(thumb);

  block.appendChild(buildScreenerRequestButton(title));
  wrap.appendChild(block);
  return wrap;
}

// ---------------------------------------------------------------
// Build a single work-item card from an item data object. Used for
// items inside a grouped category's tab panel (e.g. Editing's
// subsections) — flat-item categories use buildProjectPanel instead,
// which has room for the fuller synopsis/technical/awards/gallery
// layout since only one project is ever on screen at a time.
// ---------------------------------------------------------------
function buildWorkItem(item, mediaRole) {
  const el = document.createElement("article");
  el.className = "work-item";

  const links = item.links || [];
  const passwordOnlyLinks = links.filter((l) => l.passwordOnly);
  const mediaLinks = links.filter((l) => !l.passwordOnly && parseEmbedUrl(l.url));
  const plainLinks = links.filter((l) => !l.passwordOnly && !parseEmbedUrl(l.url));

  if (passwordOnlyLinks.length) {
    el.appendChild(buildPasswordOnlyMedia(item.title, item.poster));
  } else if (mediaLinks.length) {
    const mediaWrap = document.createElement("div");
    mediaWrap.className = "work-item-media";
    mediaLinks.forEach((link) => {
      const block = document.createElement("div");
      block.className = "work-item-media-block";
      if (mediaLinks.length > 1 && link.label) {
        const cap = document.createElement("span");
        cap.className = "work-item-media-label";
        cap.textContent = link.label;
        block.appendChild(cap);
      }
      const altText = buildMediaAlt(mediaRole || "in", item.title, item.year);
      block.appendChild(buildMediaEmbed(link, item.title, altText));
      // screenerButton: for embeds with no real password gate (e.g.
      // Today I Am's Drive link) that still want the same "Request
      // Screener" button shown for password-gated embeds like Field
      // Trip/Orange Juice.
      if (link.password || link.screenerButton) block.appendChild(buildScreenerRequestButton(item.title));
      mediaWrap.appendChild(block);
    });
    el.appendChild(mediaWrap);
  } else {
    const thumb = document.createElement("div");
    thumb.className = "work-thumb";
    const thumbLabel = document.createElement("span");
    thumbLabel.className = "work-thumb-label";
    thumbLabel.textContent = "Image / Video Placeholder";
    thumb.appendChild(thumbLabel);
    el.appendChild(thumb);
  }

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

  if (item.photos && item.photos.length) {
    el.appendChild(buildProjectGallery(item.photos, item.title));
  }

  if (plainLinks.length || item.hasScreenerButton) {
    const linksWrap = document.createElement("div");
    linksWrap.className = "work-item-links";
    plainLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "work-item-link";
      a.textContent = link.label;
      linksWrap.appendChild(a);
    });
    if (item.hasScreenerButton) linksWrap.appendChild(buildScreenerLink(item.title));
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
  body.textContent = text || `${label} - TBD`;
  section.appendChild(body);

  return section;
}

// ---------------------------------------------------------------
// Small image gallery for a single project: a main frame plus a row
// of thumbnails; clicking a thumbnail swaps the main frame. Pass a
// `photos` array of real image paths once they exist for a project
// (e.g. Directing's Venus Sucks); anything else (a bare count, or no
// photos yet) falls back to the placeholder-frame look this always
// had, with no other code changes needed when real photos do land.
// ---------------------------------------------------------------
function buildProjectGallery(photos, title) {
  const realPhotos = Array.isArray(photos) ? photos : null;
  const count = realPhotos ? realPhotos.length : photos;
  // A slide is a video (not a photo) when it's an object with a
  // .video url instead of a plain path string - see Sun's Too Hot's
  // teaser, mixed in alongside its production stills.
  const isVideoSlide = (i) => realPhotos && realPhotos[i] && typeof realPhotos[i] === "object";

  const wrap = document.createElement("div");
  wrap.className = "project-gallery";

  const main = document.createElement("div");
  main.className = "project-gallery-main";
  wrap.appendChild(main);

  function showPlaceholder(i) {
    main.classList.remove("has-photo");
    main.innerHTML = "";
    const label = document.createElement("span");
    label.textContent = `Image Placeholder - ${title} (${i + 1}/${count})`;
    main.appendChild(label);
  }

  function showPhoto(i) {
    main.classList.add("has-photo");
    main.innerHTML = "";
    const altText = `${title} - production still ${i + 1} of ${count}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "project-gallery-main-btn";
    btn.setAttribute("aria-label", `View full-size image ${i + 1} of ${count}`);
    const img = document.createElement("img");
    img.className = "project-gallery-main-img";
    img.src = realPhotos[i];
    img.alt = altText;
    img.loading = "lazy";
    // A missing/renamed file falls back to the placeholder frame
    // instead of a broken-image icon, same pattern used elsewhere.
    img.addEventListener("error", () => showPlaceholder(i), { once: true });
    btn.appendChild(img);
    btn.addEventListener("click", () => openImageLightbox(realPhotos[i], altText));
    main.appendChild(btn);
  }

  function showVideo(i) {
    main.classList.add("has-photo");
    main.innerHTML = "";
    const altText = `${title} - teaser`;
    const embed = buildMediaEmbed({ url: realPhotos[i].video }, title, altText);
    if (embed) main.appendChild(embed);
  }

  function showSlide(i) {
    if (!realPhotos) return showPlaceholder(i);
    if (isVideoSlide(i)) return showVideo(i);
    return showPhoto(i);
  }
  showSlide(0);

  if (count > 1) {
    const thumbs = document.createElement("div");
    thumbs.className = "project-gallery-thumbs";
    for (let i = 0; i < count; i++) {
      const t = document.createElement("button");
      t.type = "button";
      t.className = "project-gallery-thumb" + (i === 0 ? " is-active" : "");
      if (realPhotos && isVideoSlide(i)) {
        t.classList.add("is-video");
        t.setAttribute("aria-label", "Play teaser video");
        const play = document.createElement("span");
        play.className = "project-gallery-thumb-play";
        t.appendChild(play);
      } else {
        t.setAttribute("aria-label", `View image ${i + 1} of ${count}`);
        if (realPhotos) {
          const timg = document.createElement("img");
          timg.src = realPhotos[i];
          timg.alt = "";
          timg.loading = "lazy";
          timg.addEventListener("error", () => timg.remove(), { once: true });
          t.appendChild(timg);
        }
      }
      t.addEventListener("click", () => {
        showSlide(i);
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
function buildProjectPanel(item, mediaRole) {
  const el = document.createElement("article");
  el.className = "project-panel";

  // photoCount: 0 opts out of the generic placeholder photo gallery -
  // used for items with a real preview image of their own (e.g. a
  // curated website's screenshot via a link.thumbnail below) instead
  // of an actual film/photo shoot to gallery-ize.
  if (item.photoCount !== 0) {
    el.appendChild(buildProjectGallery(item.photos || item.photoCount || 3, item.title));
  }

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
  yearEl.textContent = item.year ? item.year : "Year - TBD";
  header.appendChild(yearEl);
  info.appendChild(header);

  const links = item.links || [];
  const mediaLinks = links.filter((l) => parseEmbedUrl(l.url));
  const plainLinks = links.filter((l) => !parseEmbedUrl(l.url));
  const previewLinks = plainLinks.filter((l) => l.thumbnail);
  const textLinks = plainLinks.filter((l) => !l.thumbnail);

  if (mediaLinks.length) {
    const mediaWrap = document.createElement("div");
    mediaWrap.className = "work-item-media";
    mediaLinks.forEach((link) => {
      const block = document.createElement("div");
      block.className = "work-item-media-block";
      if (mediaLinks.length > 1) {
        const cap = document.createElement("span");
        cap.className = "work-item-media-label";
        cap.textContent = link.label;
        block.appendChild(cap);
      }
      const altText = buildMediaAlt(mediaRole || "in", item.title, item.year);
      block.appendChild(buildMediaEmbed(link, item.title, altText));
      if (link.password) block.appendChild(buildPasswordRequestButton(item.title));
      mediaWrap.appendChild(block);
    });
    info.appendChild(mediaWrap);
  }

  if (previewLinks.length) {
    const previewWrap = document.createElement("div");
    previewWrap.className = "work-item-media";
    previewLinks.forEach((link) => {
      const block = document.createElement("div");
      block.className = "work-item-media-block";
      const altText = buildMediaAlt(mediaRole || "in", item.title, item.year);
      block.appendChild(buildLinkPreview(link, altText));
      previewWrap.appendChild(block);
    });
    info.appendChild(previewWrap);
  }

  info.appendChild(buildProjectSection(item.synopsisLabel || "Synopsis", item.desc));

  // Credits (Director/Writers/Stars/Producer, etc.) - opt-in only, not
  // a TBD-if-missing section like Synopsis/Technical Details, since it
  // only applies to a project that actually has a cast/crew to list
  // (see Digital Diary under Production).
  if (item.credits && item.credits.length) {
    const section = document.createElement("div");
    section.className = "project-section";
    const label = document.createElement("h4");
    label.className = "project-section-label";
    label.textContent = "Credits";
    section.appendChild(label);
    const dl = document.createElement("dl");
    dl.className = "work-item-specs";
    item.credits.forEach(([k, v]) => {
      const dt = document.createElement("dt");
      dt.textContent = k;
      const dd = document.createElement("dd");
      dd.textContent = v;
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    section.appendChild(dl);
    info.appendChild(section);
  }

  const screeningsLabel = item.screeningsLabel || "Awards / Screening History";
  // hideScreenings opts out of the section entirely (not even the TBD
  // placeholder) - for content types like Curation entries where an
  // awards/screening history doesn't apply at all.
  if (item.hideScreenings) {
    // no-op - section omitted entirely
  } else if (item.screenings && item.screenings.length) {
    const section = document.createElement("div");
    section.className = "project-section";
    const label = document.createElement("h4");
    label.className = "project-section-label";
    label.textContent = screeningsLabel;
    section.appendChild(label);
    const ul = document.createElement("ul");
    ul.className = "work-item-screenings";
    item.screenings.forEach((s) => {
      const li = document.createElement("li");
      if (typeof s === "string") {
        // Plain strings stay plain text.
        li.textContent = s;
      } else if (s.linkLabel) {
        // Prefix text + an inline link + suffix text, e.g. "Vogue Zion,
        // [Barbur Gallery] (Jerusalem)" - see the "directing" category's
        // WIN entry.
        if (s.text) li.appendChild(document.createTextNode(s.text));
        const a = document.createElement("a");
        a.href = s.linkUrl;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "work-item-link";
        a.textContent = s.linkLabel;
        li.appendChild(a);
        if (s.suffix) li.appendChild(document.createTextNode(s.suffix));
      } else {
        // An object with a url makes the festival name itself a link
        // (the year prefix, if any, stays plain text) - see Venus Sucks.
        if (s.year) li.appendChild(document.createTextNode(`${s.year} `));
        if (s.url) {
          const a = document.createElement("a");
          a.href = s.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.className = "work-item-link";
          a.textContent = s.name;
          li.appendChild(a);
        } else {
          li.appendChild(document.createTextNode(s.name));
        }
      }
      ul.appendChild(li);
    });
    section.appendChild(ul);
    info.appendChild(section);
  } else {
    info.appendChild(buildProjectSection(screeningsLabel, ""));
  }

  // hideTechnicalDetails opts out of the section entirely (not even the
  // TBD placeholder) - for projects with no runtime/format/resolution
  // info to ever show, unlike Venus Sucks.
  if (!item.hideTechnicalDetails) {
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
  }

  if (textLinks.length || item.hasScreenerButton) {
    const linksWrap = document.createElement("div");
    linksWrap.className = "work-item-links";
    textLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "work-item-link";
      a.textContent = link.label;
      linksWrap.appendChild(a);
    });
    if (item.hasScreenerButton) linksWrap.appendChild(buildScreenerLink(item.title));
    info.appendChild(linksWrap);
  }

  el.appendChild(info);
  return el;
}

// ---------------------------------------------------------------
// True tab isolation for non-gallery categories: builds one subnav
// pill + one content panel per group (Editing's subsections) or per
// project (Directing, Curation, Performance Artist, Production), and
// shows exactly one panel at a time. Switching tabs only ever
// toggles which panel is visible — it never scrolls anything.
// ---------------------------------------------------------------
function renderTabbedContent(cat, subnavEl, bodyEl, initialTabSlug, onTabChange) {
  // Each build() returns { el, step, unzoom } — step/unzoom are only
  // present for interactive panels (the reels playlist viewer) and are
  // rewired into the global keydown handler whenever that tab becomes
  // the active one, so a hidden panel's stepper never intercepts
  // arrow keys or Escape for whichever tab is actually on screen.
  const tabs = cat.groups
    ? cat.groups.map((group) => ({
        label: group.title,
        build: () => {
          if (group.layout === "reels") return buildSocialReelsPanel(group.items);
          const grid = document.createElement("div");
          grid.className = "work-grid";
          group.items.forEach((item) => grid.appendChild(buildWorkItem(item, group.mediaRole)));
          return { el: grid };
        },
      }))
    : cat.items.map((item) => ({
        label: item.title,
        build: () => ({ el: buildProjectPanel(item, cat.mediaRole) }),
      }));

  const built = tabs.map((t) => t.build());
  const panels = built.map((b) => b.el);
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

  let initializing = true;
  function showTab(i) {
    panels.forEach((panel, j) => { panel.hidden = j !== i; });
    pills.forEach((btn, j) => btn.classList.toggle("is-active", j === i));
    activeGalleryStep = built[i].step || null;
    activeGalleryUnzoom = built[i].unzoom || null;
    if (onTabChange) onTabChange(slugify(tabs[i].label), initializing);
  }

  const startIndex = initialTabSlug
    ? Math.max(0, tabs.findIndex((t) => slugify(t.label) === initialTabSlug))
    : 0;
  showTab(startIndex);
  initializing = false;
}

// ---------------------------------------------------------------
// Compact "reels" playlist viewer for social media content: each
// item's links are flattened into one grid of small clickable
// thumbnails. Clicking any of them opens a one-at-a-time playlist
// stage (reusing the same .gallery-nav / .gallery-back / .gallery-
// caption look as the Photography viewer) with prev/next controls
// that step through every reel in sequence, wrapping at the ends —
// rather than each reel linking out to Instagram individually.
// Returns { el, step, unzoom } for renderTabbedContent to wire into
// the shared arrow-key / Escape handling while this tab is active.
// ---------------------------------------------------------------
function buildSocialReelsPanel(items) {
  const reels = [];
  items.forEach((item) => {
    (item.links || []).forEach((link) => {
      const parsed = parseEmbedUrl(link.url);
      reels.push({
        title: item.title,
        label: link.label,
        desc: item.desc,
        url: link.url,
        // link.thumbnail (a hand-picked frame) wins if set; otherwise
        // fall back to whatever the platform can supply automatically
        // (e.g. Instagram's screenshot-based thumbnailUrl - see
        // parseEmbedUrl) so every grid tile gets a real preview image
        // instead of the plain text-label placeholder.
        thumbnail: link.thumbnail || (parsed && parsed.thumbnailUrl) || null,
      });
    });
  });

  const wrap = document.createElement("div");
  wrap.className = "reel-panel";

  const state = { mode: "grid", index: 0 };

  const gridEl = document.createElement("div");
  gridEl.className = "reel-grid";

  const browseEl = document.createElement("div");
  browseEl.className = "reel-browse";

  const backBtn = document.createElement("button");
  backBtn.type = "button";
  backBtn.className = "gallery-back";
  backBtn.innerHTML = '<span aria-hidden="true">&#8249;</span> Back to All Reels';
  backBtn.addEventListener("click", () => setMode("grid"));
  browseEl.appendChild(backBtn);

  const stage = document.createElement("div");
  stage.className = "reel-stage";

  const stageMedia = document.createElement("div");
  stageMedia.className = "reel-stage-media";
  stage.appendChild(stageMedia);

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "gallery-nav gallery-nav--prev";
  prevBtn.setAttribute("aria-label", "Previous reel");
  prevBtn.innerHTML = '<span aria-hidden="true">&#8249;</span>';
  stage.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "gallery-nav gallery-nav--next";
  nextBtn.setAttribute("aria-label", "Next reel");
  nextBtn.innerHTML = '<span aria-hidden="true">&#8250;</span>';
  stage.appendChild(nextBtn);
  browseEl.appendChild(stage);

  const caption = document.createElement("div");
  caption.className = "gallery-caption reel-caption";
  browseEl.appendChild(caption);

  wrap.appendChild(gridEl);
  wrap.appendChild(browseEl);

  function renderGrid() {
    gridEl.innerHTML = "";
    reels.forEach((reel, i) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "reel-tile";
      tile.setAttribute("aria-label", `Play ${reel.label}`);

      if (reel.thumbnail) {
        const img = document.createElement("img");
        img.className = "reel-tile-thumb";
        img.src = reel.thumbnail;
        img.alt = `Sivan Eyal social media content - ${reel.label}, ${reel.title}`;
        img.loading = "lazy";
        // Screenshot services can fail/rate-limit - fall back to the
        // plain text-label placeholder instead of a broken-image icon.
        img.addEventListener("error", () => {
          img.remove();
          const ph = document.createElement("span");
          ph.className = "reel-tile-thumb-placeholder";
          ph.textContent = reel.label;
          tile.insertBefore(ph, tile.firstChild);
        }, { once: true });
        tile.appendChild(img);
      } else {
        const ph = document.createElement("span");
        ph.className = "reel-tile-thumb-placeholder";
        ph.textContent = reel.label;
        tile.appendChild(ph);
      }

      const play = document.createElement("span");
      play.className = "reel-tile-play";
      play.setAttribute("aria-hidden", "true");
      tile.appendChild(play);

      tile.addEventListener("click", () => {
        state.index = i;
        setMode("browse");
      });
      gridEl.appendChild(tile);
    });
  }

  function renderStage() {
    const reel = reels[state.index];
    stageMedia.innerHTML = "";
    const parsed = parseEmbedUrl(reel.url);

    if (parsed && parsed.platform === "instagram") {
      // Instagram's own official widget, not the custom facade+iframe
      // used for every other platform — see buildInstagramEmbed.
      stage.classList.add("reel-stage--auto");
      stageMedia.appendChild(buildInstagramEmbed(reel.url));
      return;
    }

    stage.classList.remove("reel-stage--auto");
    const altText = `Sivan Eyal social media content - ${reel.label}, ${reel.title}`;
    const embedEl = buildMediaEmbed(reel, reel.title, altText);
    if (embedEl) {
      stageMedia.appendChild(embedEl);
    } else {
      const a = document.createElement("a");
      a.href = reel.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "work-item-link";
      a.textContent = `View "${reel.label}"`;
      stageMedia.appendChild(a);
    }
  }

  function renderCaption() {
    const reel = reels[state.index];
    caption.innerHTML = "";

    const titleEl = document.createElement("h3");
    titleEl.className = "gallery-caption-title";
    titleEl.textContent = reel.title;
    caption.appendChild(titleEl);

    const metaRow = document.createElement("div");
    metaRow.className = "gallery-caption-meta";
    const labelEl = document.createElement("span");
    labelEl.className = "gallery-caption-field";
    labelEl.textContent = reel.label;
    metaRow.appendChild(labelEl);
    const countEl = document.createElement("span");
    countEl.className = "gallery-caption-field";
    countEl.textContent = `${state.index + 1} / ${reels.length}`;
    metaRow.appendChild(countEl);
    caption.appendChild(metaRow);

    if (reel.desc) {
      const noteEl = document.createElement("p");
      noteEl.className = "gallery-caption-note";
      noteEl.textContent = reel.desc;
      caption.appendChild(noteEl);
    }
  }

  function setMode(mode) {
    state.mode = mode;
    gridEl.style.display = mode === "grid" ? "grid" : "none";
    browseEl.style.display = mode === "browse" ? "block" : "none";
    if (mode === "grid") renderGrid();
    else {
      renderStage();
      renderCaption();
    }
  }

  // Stepping past the last/first reel wraps around, same as
  // Photography's cross-series rollover — one continuous gesture
  // covers the whole playlist. Only active in browse mode.
  function step(direction) {
    if (state.mode !== "browse") return;
    state.index = ((state.index + direction) % reels.length + reels.length) % reels.length;
    renderStage();
    renderCaption();
  }

  // First Escape backs out to the grid rather than closing the whole
  // overlay, matching the Photography gallery's zoom-then-close order.
  function backToGrid() {
    if (state.mode !== "browse") return false;
    setMode("grid");
    return true;
  }

  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

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

  setMode("grid");

  return { el: wrap, step, unzoom: backToGrid };
}

// ---------------------------------------------------------------
// Full-screen category overlay — open/close + internal subnav.
// This is a plain fixed-position panel toggled via a CSS class; it
// never calls scrollIntoView on the page itself, so opening/closing
// it never scrolls the main page. The main page's scroll position is
// preserved automatically because we only freeze it rather than
// moving it. The open category and active sub-tab ARE reflected in
// the URL hash (see the routing helpers below openCategoryOverlay)
// so a refresh or a shared link lands back on the same view.
// ---------------------------------------------------------------
let overlayLastFocused = null;
let overlayOpenedViaPush = false;

function openCategoryOverlay(categoryId, triggerEl, options = {}) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  const overlay = document.getElementById("categoryOverlay");
  if (!cat || !overlay) return;

  const { tabSlug = null, viaHistory = false } = options;

  overlayLastFocused = triggerEl || document.activeElement;

  const wasOpen = overlay.classList.contains("is-open");
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

  // Tracks whichever sub-tab ends up active once rendering settles
  // (a requested tabSlug that doesn't match anything falls back to
  // the first tab), so the hash we push below reflects reality. The
  // initial call (isInitial) only records that slug — it must NOT
  // write history itself, since that would replaceState the entry
  // that was current *before* this open (corrupting whatever the
  // visitor was on) rather than the new entry pushed further down.
  let resolvedTabSlug = tabSlug;
  const onTabChange = (slug, isInitial) => {
    resolvedTabSlug = slug;
    if (isInitial) return;
    updateOverlayHash(categoryId, slug, { replace: true });
  };

  if (cat.type === "gallery") {
    // Photography: a dedicated swipe/zoom photo viewer, not the
    // standard work-grid. renderGallery builds both the subnav pills
    // (series switcher) and the body itself.
    renderGallery(cat, subnavEl, bodyEl, tabSlug, onTabChange);
  } else {
    // Every other category: true tab isolation. Clicking a subnav
    // pill (one per project, or per subsection for grouped
    // categories like Editing) shows only that panel and hides the
    // rest — no scrolling involved.
    renderTabbedContent(cat, subnavEl, bodyEl, tabSlug, onTabChange);
  }

  // Only freeze the page on a genuine closed-to-open transition —
  // calling this again while already open (e.g. jumping straight
  // from one category's hash to another) would capture scrollY as 0
  // and corrupt the position unlockBodyScroll later restores.
  if (!wasOpen) lockBodyScroll();

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  scrollEl.scrollTop = 0;

  document.getElementById("overlayClose").focus();

  // A real user-initiated open pushes one new history entry, so the
  // browser's back button closes the overlay like a modal should.
  // Everything else (adopting a loaded hash, or self-correcting a
  // category-only/invalid tab slug onto the entry we already landed
  // on) replaces in place rather than adding entries.
  const shouldPush = !viaHistory && !wasOpen;
  updateOverlayHash(categoryId, resolvedTabSlug, { replace: !shouldPush });
  overlayOpenedViaPush = shouldPush;
}

function closeCategoryOverlay(options = {}) {
  const { viaHistory = false } = options;
  const overlay = document.getElementById("categoryOverlay");
  if (!overlay || !overlay.classList.contains("is-open")) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  unlockBodyScroll();
  activeGalleryStep = null;
  activeGalleryUnzoom = null;

  if (overlayLastFocused && typeof overlayLastFocused.focus === "function") {
    overlayLastFocused.focus();
  }

  if (!viaHistory) {
    if (overlayOpenedViaPush) {
      // Undo the entry we pushed on open, so back/forward stays tidy
      // instead of accumulating a stray "closed" state.
      history.back();
    } else {
      // Opened straight from a hash (initial load/refresh) — there's
      // no entry of ours to undo, so just drop the hash in place.
      clearOverlayHash();
    }
  }
  overlayOpenedViaPush = false;
}

// ---------------------------------------------------------------
// URL hash routing for the category overlay — lets a refresh, a
// shared link, or the back button land back on the same category
// (and sub-tab) a visitor was viewing instead of resetting to the
// homepage. Format: "#categoryId" or "#categoryId/tab-slug".
// ---------------------------------------------------------------
let lastSyncedHash = null;

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildOverlayHash(categoryId, tabSlug) {
  return tabSlug ? `#${categoryId}/${tabSlug}` : `#${categoryId}`;
}

function updateOverlayHash(categoryId, tabSlug, { replace = false } = {}) {
  const hash = buildOverlayHash(categoryId, tabSlug);
  const url = location.pathname + location.search + hash;
  lastSyncedHash = hash;
  if (replace) history.replaceState(null, "", url);
  else history.pushState(null, "", url);
}

function clearOverlayHash() {
  const url = location.pathname + location.search;
  lastSyncedHash = "";
  history.replaceState(null, "", url);
}

function parseOverlayHash(rawHash) {
  const hash = (rawHash || "").replace(/^#/, "");
  if (!hash) return null;
  const [categoryId, tabSlug] = hash.split("/");
  if (!categoryId || !CATEGORIES.some((c) => c.id === categoryId)) return null;
  return { categoryId, tabSlug: tabSlug || null };
}

function syncOverlayFromHash() {
  const raw = location.hash;
  if (raw === lastSyncedHash) return;
  lastSyncedHash = raw;
  const parsed = parseOverlayHash(raw);
  if (parsed) {
    openCategoryOverlay(parsed.categoryId, null, { tabSlug: parsed.tabSlug, viaHistory: true });
  } else {
    closeCategoryOverlay({ viaHistory: true });
  }
}

function initOverlayRouting() {
  // The browser's own scroll-restoration would otherwise fight the
  // manual position:fixed lock/unlock above: it snapshots window.scrollY
  // right as pushState/back() run, which reads as ~0 while the body is
  // locked, so it "restores" the homepage entry to the top of the page
  // out from under our own restore. Scroll position is fully handled by
  // lockBodyScroll/unlockBodyScroll, so hand the browser's copy off.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("popstate", syncOverlayFromHash);
  window.addEventListener("hashchange", syncOverlayFromHash);
  syncOverlayFromHash();
}

// Simply setting overflow:hidden to freeze scroll is not reliable across
// browsers — some forget the scroll offset once overflow is restored, so
// closing the overlay can leave the visitor at the top of the page instead
// of back where they were. Pinning the body at its current scroll offset
// via position:fixed and restoring it on close is the robust way to keep
// the "return to the exact scroll position" promise.
// Reentrant: the image lightbox can now open on top of the category
// overlay (e.g. clicking a photo inside Venus Sucks' gallery), so two
// independent callers may both want the body locked at once. A count
// rather than a boolean means the lock is only actually released once
// every caller that asked for it has also asked to release it.
let bodyScrollLockCount = 0;

function lockBodyScroll() {
  bodyScrollLockCount++;
  if (bodyScrollLockCount > 1) return;
  const scrollY = window.scrollY || window.pageYOffset;
  document.body.dataset.scrollLockY = String(scrollY);
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockBodyScroll() {
  bodyScrollLockCount = Math.max(0, bodyScrollLockCount - 1);
  if (bodyScrollLockCount > 0) return;
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

// ---------------------------------------------------------------
// Full-size image lightbox — every real photo on the site (Venus
// Sucks' gallery, the News strip) is shown small and/or cropped;
// this is how a visitor sees the actual, uncropped photo. Built once
// on first use and reused after that. Works whether it's opened from
// the main page (News) or from on top of the already-open category
// overlay (Venus Sucks' gallery) - see the reentrant body-scroll lock
// above and the Escape-key handling in initCategoryOverlay below.
// ---------------------------------------------------------------
let lightbox = null;
let lightboxLastFocused = null;

function ensureLightbox() {
  if (lightbox) return lightbox;

  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  // Clicking the dimmed backdrop (anywhere but the photo/link) closes it.
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "image-lightbox-close";
  closeBtn.setAttribute("aria-label", "Close preview");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", closeLightbox);
  overlay.appendChild(closeBtn);

  const figure = document.createElement("div");
  figure.className = "image-lightbox-figure";
  const img = document.createElement("img");
  img.className = "image-lightbox-img";
  figure.appendChild(img);
  overlay.appendChild(figure);

  const link = document.createElement("a");
  link.className = "image-lightbox-link";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.hidden = true;
  overlay.appendChild(link);

  document.body.appendChild(overlay);
  lightbox = { overlay, img, link, closeBtn };
  return lightbox;
}

function isLightboxOpen() {
  return !!(lightbox && lightbox.overlay.classList.contains("is-open"));
}

function openImageLightbox(src, alt, linkInfo) {
  const lb = ensureLightbox();
  lightboxLastFocused = document.activeElement;
  lb.img.src = src;
  lb.img.alt = alt || "";
  if (linkInfo && linkInfo.url) {
    lb.link.href = linkInfo.url;
    lb.link.textContent = linkInfo.label || "View original";
    lb.link.hidden = false;
  } else {
    lb.link.hidden = true;
  }
  lockBodyScroll();
  lb.overlay.classList.add("is-open");
  lb.overlay.setAttribute("aria-hidden", "false");
  lb.closeBtn.focus();
}

function closeLightbox() {
  if (!isLightboxOpen()) return;
  lightbox.overlay.classList.remove("is-open");
  lightbox.overlay.setAttribute("aria-hidden", "true");
  unlockBodyScroll();
  if (lightboxLastFocused && typeof lightboxLastFocused.focus === "function") {
    lightboxLastFocused.focus();
  }
}

function initCategoryOverlay() {
  const closeBtn = document.getElementById("overlayClose");
  if (!closeBtn) return;
  closeBtn.addEventListener("click", closeCategoryOverlay);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // The lightbox, if open, is always the topmost layer - close it
      // first regardless of what else might be open underneath.
      if (isLightboxOpen()) {
        closeLightbox();
        return;
      }
      // If a gallery photo is zoomed in, the first Escape backs out of
      // the zoom rather than closing the whole overlay.
      if (activeGalleryUnzoom && activeGalleryUnzoom()) return;
      closeCategoryOverlay();
      return;
    }
    if (isLightboxOpen() || !activeGalleryStep) return;
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

function renderGallery(cat, subnavEl, bodyEl, initialTabSlug, onTabChange) {
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
    label.textContent = `Image Placeholder - ${series.title} (${state.photoIndex + 1}/${photoCount})`;
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
    yearEl.textContent = series.year ? series.year : "Year - TBD";
    metaRow.appendChild(yearEl);

    if (series.model) {
      const modelEl = document.createElement("span");
      modelEl.className = "gallery-caption-field";
      modelEl.textContent = `Model - ${series.model}`;
      metaRow.appendChild(modelEl);
    }
    caption.appendChild(metaRow);

    const noteEl = document.createElement("p");
    noteEl.className = "gallery-caption-note" + (series.note ? "" : " is-placeholder");
    noteEl.textContent = series.note ? series.note : "Note - TBD";
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

  let initializing = true;
  function setSeries(i) {
    const count = cat.series.length;
    state.seriesIndex = ((i % count) + count) % count;
    state.photoIndex = 0;
    renderCaption();
    setMode("grid");
    pills.forEach((btn, j) => btn.classList.toggle("is-active", j === state.seriesIndex));
    if (onTabChange) onTabChange(slugify(cat.series[state.seriesIndex].title), initializing);
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

  const startIndex = initialTabSlug
    ? Math.max(0, cat.series.findIndex((s) => slugify(s.title) === initialTabSlug))
    : 0;
  setSeries(startIndex);
  initializing = false;
}

// ---------------------------------------------------------------
// News strip — a fixed-height horizontal row (see .news-strip in
// css/style.css) browsed via the two arrow buttons, which just nudge
// the strip's native scroll position rather than swap panels. Each
// item opens the full-size photo in the image lightbox rather than
// navigating straight to Instagram - the lightbox itself carries a
// "View on Instagram" link out to the real post.
// ---------------------------------------------------------------
function renderNews() {
  const strip = document.getElementById("newsStrip");
  if (!strip) return;

  NEWS.forEach((item) => {
    const a = document.createElement("button");
    a.type = "button";
    a.className = "news-item";
    a.title = item.caption;

    const thumb = document.createElement("div");
    thumb.className = "news-item-thumb";
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.caption;
    img.loading = "lazy";
    // A missing/renamed image file falls back to a plain placeholder
    // instead of a broken-image icon, same pattern used elsewhere on
    // the site (see buildLinkPreview).
    img.addEventListener("error", () => {
      img.remove();
      thumb.classList.add("is-empty");
      const ph = document.createElement("span");
      ph.className = "news-item-thumb-placeholder";
      ph.textContent = "Image unavailable";
      thumb.appendChild(ph);
    }, { once: true });
    thumb.appendChild(img);
    a.appendChild(thumb);

    const caption = document.createElement("span");
    caption.className = "news-item-caption";
    caption.textContent = item.caption;
    a.appendChild(caption);

    a.addEventListener("click", () => {
      openImageLightbox(item.image, item.caption, { url: item.url, label: "View on Instagram" });
    });

    strip.appendChild(a);
  });
}

function initNewsNav() {
  const strip = document.getElementById("newsStrip");
  const prevBtn = document.getElementById("newsPrev");
  const nextBtn = document.getElementById("newsNext");
  if (!strip || !prevBtn || !nextBtn) return;

  function step(direction) {
    strip.scrollBy({ left: strip.clientWidth * 0.9 * direction, behavior: "smooth" });
  }

  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  function updateEdgeState() {
    const maxScroll = strip.scrollWidth - strip.clientWidth;
    prevBtn.classList.toggle("is-disabled", strip.scrollLeft <= 4);
    nextBtn.classList.toggle("is-disabled", strip.scrollLeft >= maxScroll - 4);
  }

  updateEdgeState();
  strip.addEventListener("scroll", updateEdgeState, { passive: true });
  window.addEventListener("resize", updateEdgeState);
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
  if (!dot || !ring || !glow) return;

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
  if (!nav || !toggle || !links) return;

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
// Nav goes fully opaque as soon as the page scrolls at all. At rest
// (scrollY 0) it's a soft gradient that fades to transparent by
// design, over the hero video — but that same transparency let the
// large hero name/bio scroll up and show straight through it,
// visually colliding with the nav's own wordmark/links. Swapping to
// a solid background the instant scrolling starts closes that gap
// at every scroll position, not just past the hero.
// ---------------------------------------------------------------
function initNavScrollState() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > 4);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

// ---------------------------------------------------------------
// About photo — falls back to the original centered-placeholder-text
// look (same pattern as buildLinkPreview/buildMediaEmbed's thumbnail
// fallbacks) if the real photo fails to load, instead of a broken-
// image icon.
// ---------------------------------------------------------------
function initAboutPhoto() {
  const wrap = document.querySelector(".about-photo");
  const img = wrap ? wrap.querySelector("img") : null;
  if (!wrap || !img) return;

  img.addEventListener("error", () => {
    img.remove();
    wrap.classList.add("is-empty");
    const span = document.createElement("span");
    span.textContent = "Photo of Sivan - Placeholder";
    wrap.appendChild(span);
  }, { once: true });
}

// ---------------------------------------------------------------
// Init
// ---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  initNewsNav();
  wireHeroLinks();
  initCategoryOverlay();
  initCursor();
  initMagneticHeadlines();
  initReveal();
  initMobileNav();
  initNavScrollState();
  initOverlayRouting();
  initAboutPhoto();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
