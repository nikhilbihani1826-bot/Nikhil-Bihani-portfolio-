/* ==========================================================
   Nikhil Bihani portfolio — behavior
   1. Asset mapping (certificates + projects)  <- edit here to add items
   2. Rendering
   3. Certificate preview modal
   4. Navigation, resume preview, misc
   ========================================================== */

/* ---------- 1. ASSET MAPPING ----------
   Every View / Preview / Download button reads from these entries.
   file       : the ORIGINAL certificate (unchanged) used by View + Download + preview
   thumb      : small WebP picture of the first page, used only as the card thumbnail
   downloadAs : filename the visitor's device receives
*/
const CERTIFICATES = [
  { id: "cpp-essentials-1", title: "C++ Essentials 1", issuer: "Cisco Networking Academy", date: "28 January 2026",
    file: "assets/certificates/Nikhil_Bihani_Cpp_Essentials_1.png", type: "image",
    thumb: "assets/thumbnails/cpp_essentials_1.webp", downloadAs: "Nikhil_Bihani_Cpp_Essentials_1.png" },
  { id: "python-essentials-1", title: "Python Essentials 1", issuer: "Cisco Networking Academy", date: "28 January 2026",
    file: "assets/certificates/Nikhil_Bihani_Python_Essentials_1.pdf", type: "pdf",
    thumb: "assets/thumbnails/python_essentials_1.webp", downloadAs: "Nikhil_Bihani_Python_Essentials_1.pdf" },

  { id: "prdv213-group-communication", title: "PRDV213: Group Communication", issuer: "Saylor Academy", date: "8 November 2024",
    file: "assets/certificates/Nikhil_Bihani_Group_Communication.pdf", type: "pdf",
    thumb: "assets/thumbnails/group_communication.webp", downloadAs: "Nikhil_Bihani_Group_Communication.pdf" },
  { id: "prdv103-interviewing-skills", title: "PRDV103: Interviewing Skills", issuer: "Saylor Academy", date: "8 November 2024",
    file: "assets/certificates/Nikhil_Bihani_Interviewing_Skills.pdf", type: "pdf",
    thumb: "assets/thumbnails/interviewing_skills.webp", downloadAs: "Nikhil_Bihani_Interviewing_Skills.pdf" },
  { id: "prdv008-presentations", title: "PRDV008: Preparing and Delivering Presentations", issuer: "Saylor Academy", date: "9 May 2025",
    file: "assets/certificates/Nikhil_Bihani_Preparing_and_Delivering_Presentations.pdf", type: "pdf",
    thumb: "assets/thumbnails/preparing_delivering_presentations.webp", downloadAs: "Nikhil_Bihani_Preparing_and_Delivering_Presentations.pdf" },

  { id: "azure-fundamentals-cloud-concepts", title: "Microsoft Azure Fundamentals: Describe cloud concepts", issuer: "Microsoft Learn", date: "3 November 2024",
    file: "assets/certificates/Nikhil_Bihani_Azure_Fundamentals_Describe_Cloud_Concepts.pdf", type: "pdf",
    thumb: "assets/thumbnails/azure_fundamentals.webp", downloadAs: "Nikhil_Bihani_Azure_Fundamentals_Describe_Cloud_Concepts.pdf" },
  { id: "ethical-ai", title: "Ethical AI", issuer: "Microsoft Learn", date: "3 November 2024",
    file: "assets/certificates/Nikhil_Bihani_Ethical_AI.pdf", type: "pdf",
    thumb: "assets/thumbnails/ethical_ai.webp", downloadAs: "Nikhil_Bihani_Ethical_AI.pdf" },
  { id: "deploy-azure-ai-containers", title: "Deploy Azure AI services in containers", issuer: "Microsoft Learn", date: "1 June 2025",
    file: "assets/certificates/Nikhil_Bihani_Deploy_Azure_AI_Services_in_Containers.pdf", type: "pdf",
    thumb: "assets/thumbnails/deploy_azure_ai.webp", downloadAs: "Nikhil_Bihani_Deploy_Azure_AI_Services_in_Containers.pdf" },

  { id: "intro-cloud-computing-mdl-301", title: "Introduction to Cloud Computing (MDL-301)", issuer: "IBM SkillsBuild", date: "29 June 2025",
    file: "assets/certificates/Nikhil_Bihani_Introduction_to_Cloud_Computing.pdf", type: "pdf",
    thumb: "assets/thumbnails/intro_cloud_computing.webp", downloadAs: "Nikhil_Bihani_Introduction_to_Cloud_Computing.pdf" }
];

/* Add more projects here. Set `github` to a repository URL once it exists;
   the GitHub button only renders when `github` has a value. */
const PROJECTS = [
  {
    title: "ATM Simulator",
    tech: ["C++", "OOP", "Console application"],
    description: "Developed a console-based ATM Simulation System using C++ and Object-Oriented Programming concepts. The system provides features such as balance inquiry, cash withdrawal, cash deposit, and PIN-based authentication. It utilizes classes, objects, functions, loops, and conditional statements to simulate real-world ATM operations. A menu-driven interface provides a simple and interactive banking experience.",
    features: ["Balance inquiry", "Cash withdrawal", "Cash deposit", "PIN-based authentication", "Menu-driven interface"],
    github: null,
    note: "GitHub repository link not published yet."
  }
];

/* ---------- Helpers ---------- */
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value === true ? "" : value);
  }
  (Array.isArray(children) ? children : [children]).forEach(c => c && node.append(c));
  return node;
}
function icon(id, cls = "ico") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", cls);
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#" + id);
  svg.append(use);
  return svg;
}

/* ---------- 2. RENDERING ---------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  PROJECTS.forEach(p => {
    const foot = el("div", { class: "project-foot" });
    if (p.github) {
      foot.append(el("a", { class: "btn btn-ghost btn-sm", href: p.github, target: "_blank", rel: "noopener noreferrer" },
        [icon("i-github"), document.createTextNode("View on GitHub")]));
    } else if (p.note) {
      foot.append(el("span", { class: "note", text: p.note }));
    }
    grid.append(el("article", { class: "card project-card" }, [
      el("div", { class: "project-top" }, [
        el("h3", { text: p.title }),
        el("span", { class: "pill", text: p.tech[0] })
      ]),
      el("ul", { class: "chips", "aria-label": "Technologies" }, p.tech.map(t => el("li", { text: t }))),
      el("p", { class: "project-desc", text: p.description }),
      el("ul", { class: "project-feats" }, p.features.map(f => el("li", { text: f }))),
      foot
    ]));
  });
  grid.append(el("article", { class: "card project-empty" }, [
    el("h3", { text: "More projects coming" }),
    el("p", { text: "I'm building practical projects as I learn. New work will be added here." })
  ]));
}

function renderCertificates() {
  const grid = document.getElementById("certGrid");
  CERTIFICATES.forEach(c => {
    const preview = el("button", { class: "cert-preview", type: "button", "data-cert": c.id, "aria-label": `Preview certificate: ${c.title}` }, [
      el("img", { src: c.thumb, alt: `Thumbnail of the ${c.title} certificate`, loading: "lazy", decoding: "async" }),
      el("span", { class: "zoom" }, [icon("i-eye"), document.createTextNode("Preview")])
    ]);
    const view = el("a", { class: "btn btn-ghost btn-sm", href: c.file, target: "_blank", rel: "noopener",
      "aria-label": `View certificate: ${c.title} (opens in a new tab)` }, [icon("i-eye"), document.createTextNode("View Certificate")]);
    const download = el("a", { class: "btn btn-primary btn-sm", href: c.file, download: c.downloadAs,
      "aria-label": `Download certificate: ${c.title}` }, [icon("i-download"), document.createTextNode("Download Certificate")]);

    grid.append(el("article", { class: "card cert-card" }, [
      preview,
      el("div", { class: "cert-body" }, [
        el("p", { class: "cert-issuer", text: c.issuer }),
        el("h3", { class: "cert-title", text: c.title }),
        el("p", { class: "cert-date", text: `Completed ${c.date}` }),
        el("div", { class: "cert-actions" }, [view, download])
      ])
    ]));
  });
}

/* ---------- 3. CERTIFICATE PREVIEW MODAL ---------- */
const modal = document.getElementById("certModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const modalView = document.getElementById("modalView");
const modalDownload = document.getElementById("modalDownload");
let lastFocus = null;

function canEmbedPdf() {
  // Desktop browsers with a built-in PDF viewer can show the real PDF inline.
  // Most phone browsers cannot, so they get the image preview + "Open in new tab".
  return typeof navigator.pdfViewerEnabled === "boolean" ? navigator.pdfViewerEnabled : false;
}

function openModal(cert) {
  lastFocus = document.activeElement;
  modalTitle.textContent = cert.title;
  modalMeta.textContent = `${cert.issuer}. Completed ${cert.date}.`;
  modalBody.replaceChildren();

  if (cert.type === "image") {
    modalBody.append(el("img", { src: cert.file, alt: `${cert.title} certificate` }));
  } else if (canEmbedPdf()) {
    modalBody.append(el("iframe", { src: cert.file, title: `${cert.title} certificate (PDF)` }));
  } else {
    modalBody.append(el("img", { src: cert.thumb, alt: `${cert.title} certificate preview` }));
  }

  modalView.href = cert.file;
  modalDownload.href = cert.file;
  modalDownload.setAttribute("download", cert.downloadAs);

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  modalBody.replaceChildren();
  document.body.classList.remove("modal-open");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") { closeModal(); return; }
  if (e.key === "Tab") {
    const focusable = [...modal.querySelectorAll("a[href], button:not([disabled])")].filter(n => n.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

document.getElementById("certGrid").addEventListener("click", e => {
  const btn = e.target.closest("[data-cert]");
  if (!btn) return;
  const cert = CERTIFICATES.find(c => c.id === btn.dataset.cert);
  if (cert) openModal(cert);
});

/* ---------- 4. NAVIGATION, RESUME PREVIEW, MISC ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
navToggle.addEventListener("click", () => setMenu(navToggle.getAttribute("aria-expanded") !== "true"));
navLinks.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && navLinks.classList.contains("open")) { setMenu(false); navToggle.focus(); } });

// Highlight the nav link of the section currently in view
const sectionIds = ["home", "about", "education", "skills", "projects", "certifications", "resume", "coding-profiles", "contact"];
const linkFor = id => navLinks.querySelector(`a[href="#${id}"]`);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach(a => a.classList.remove("active"));
      const link = linkFor(entry.target.id);
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sectionIds.forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });
}

// Optional embedded resume preview (only offered where the browser can render PDFs inline)
const embedToggle = document.getElementById("resumeEmbedToggle");
const embedBox = document.getElementById("resumeEmbed");
if (canEmbedPdf()) {
  embedToggle.hidden = false;
  embedToggle.addEventListener("click", () => {
    const show = embedBox.hidden;
    if (show && !embedBox.firstChild) {
      embedBox.append(el("iframe", { src: "assets/resume/Nikhil_Bihani_Resume.pdf", title: "Nikhil Bihani resume (PDF)", loading: "lazy" }));
    }
    embedBox.hidden = !show;
    embedToggle.setAttribute("aria-expanded", String(show));
    embedToggle.textContent = show ? "Hide embedded preview" : "Show embedded preview";
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderCertificates();
