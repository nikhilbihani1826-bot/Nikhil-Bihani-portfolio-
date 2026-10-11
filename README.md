# Nikhil Bihani — Portfolio Website

A static portfolio (HTML, CSS, JavaScript). No build step, no backend, no paid services. It works on GitHub Pages as-is.

## Folder structure

```
portfolio/
├── index.html
├── style.css
├── script.js              <- asset mapping lives at the top (CERTIFICATES, PROJECTS)
├── .nojekyll
├── README.md
└── assets/
    ├── profile/           profile photo (original PNG + optimized WebP copies for the page)
    ├── resume/            Nikhil_Bihani_Resume.pdf (original, unchanged)
    ├── certificates/      original certificate files (PDF / PNG, unchanged)
    └── thumbnails/        small WebP pictures used only as card thumbnails
```

## Asset mapping

Every certificate button reads from the `CERTIFICATES` list at the top of `script.js`:

| Certificate | Issuer | Date | File |
|---|---|---|---|
| C++ Essentials 1 | Cisco Networking Academy | 28 Jan 2026 | `Nikhil_Bihani_Cpp_Essentials_1.png` |
| Python Essentials 1 | Cisco Networking Academy | 28 Jan 2026 | `Nikhil_Bihani_Python_Essentials_1.pdf` |
| PRDV213: Group Communication | Saylor Academy | 8 Nov 2024 | `Nikhil_Bihani_Group_Communication.pdf` |
| PRDV103: Interviewing Skills | Saylor Academy | 8 Nov 2024 | `Nikhil_Bihani_Interviewing_Skills.pdf` |
| PRDV008: Preparing and Delivering Presentations | Saylor Academy | 9 May 2025 | `Nikhil_Bihani_Preparing_and_Delivering_Presentations.pdf` |
| Microsoft Azure Fundamentals: Describe cloud concepts | Microsoft Learn | 3 Nov 2024 | `Nikhil_Bihani_Azure_Fundamentals_Describe_Cloud_Concepts.pdf` |
| Ethical AI | Microsoft Learn | 3 Nov 2024 | `Nikhil_Bihani_Ethical_AI.pdf` |
| Deploy Azure AI services in containers | Microsoft Learn | 1 Jun 2025 | `Nikhil_Bihani_Deploy_Azure_AI_Services_in_Containers.pdf` |
| Introduction to Cloud Computing (MDL-301) | IBM SkillsBuild | 29 Jun 2025 | `Nikhil_Bihani_Introduction_to_Cloud_Computing.pdf` |

The three Microsoft Learn files you uploaded (`Microsoft_Learn_Achievements*.pdf`) each contain one achievement printed on two identical pages, so they became three cards, not six. They were renamed to the filenames above; their contents are unchanged.

Resume: `assets/resume/Nikhil_Bihani_Resume.pdf` (used by both Download buttons, View Resume and the preview).

Not included: **C Programming — Simplilearn** is listed on the resume, but no certificate file was supplied, so there is no card for it. To add it later, copy the file into `assets/certificates/`, add a thumbnail to `assets/thumbnails/`, and add one entry to `CERTIFICATES`.

## Preview on your computer

Open `index.html` by double-clicking, or run a local server (recommended, closest to GitHub Pages):

```bash
cd portfolio
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish on GitHub Pages

1. Sign in to GitHub and click **New repository**.
2. Name it. Two options:
   - `nikhilbihani1826-bot.github.io` -> published at `https://nikhilbihani1826-bot.github.io/`
   - any other name, e.g. `portfolio` -> published at `https://nikhilbihani1826-bot.github.io/portfolio/`
3. Keep it **Public**, create it, then click **uploading an existing file**.
4. Drag in the **contents** of this folder (`index.html`, `style.css`, `script.js`, `.nojekyll`, `README.md` and the whole `assets` folder) so `index.html` sits at the top level of the repository. Commit the changes.
5. Open **Settings -> Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **main** and folder **/ (root)**, then **Save**.
6. Wait one to two minutes and refresh the Pages settings screen. It shows your live URL when the site is ready.

All paths in the site are relative, so it works at either URL format. The site has not been deployed by me; it goes live only after you complete the steps above.

## Adding things later

- **New project:** add an object to `PROJECTS` in `script.js`. Set `github` to the repository URL and a "View on GitHub" button appears; leave it `null` and no button is shown.
- **New certificate:** add the file and a thumbnail, then add an entry to `CERTIFICATES`.
- **Updated CGPA or semester:** edit the Education section in `index.html`.

## Notes

- The contact section uses `mailto:` and `tel:` links. There is no contact form because there is no backend to deliver messages.
- The `tel:` link uses the India country code (+91). The displayed number is 7772865279.
- Coding-profile statistics are not shown, so nothing on the page can go out of date.
