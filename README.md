# Banana Box — team website (Astro)

A custom site for FTC Team 16169. You write **content** (text, data, photos);
the design is handled for you. You should never need to touch HTML or CSS.

---

## What you edit (and nothing else)

| To change…                | Edit this file                     |
| ------------------------- | ---------------------------------- |
| Team name, tagline, email, social links | `src/data/site.yaml`     |
| Home page number strip    | `src/data/stats.yaml`              |
| Team roster               | `src/data/team.yaml`               |
| Season timeline           | `src/data/milestones.yaml`         |
| Awards list               | `src/data/awards.yaml`             |
| Sponsors                  | `src/data/sponsors.yaml`           |
| Home page intro paragraph | `src/copy/home-intro.md`           |
| Robot page writeup        | `src/copy/robot.md`                |
| Outreach page writeup     | `src/copy/outreach.md`             |
| Support page writeup      | `src/copy/support.md`              |
| Photos                    | drop files into `public/images/`   |

The `.yaml` files use a simple `label: value` format with comments (lines
starting with `#`) that explain each part. The `.md` files are plain Markdown —
the same thing you wrote in MkDocs.

### Adding a photo

1. Put the image file in `public/images/` (e.g. `public/images/robot.jpg`).
2. Reference it:
   - In Markdown: `![Our 2026 robot](/images/robot.jpg)`
   - In a data file (team/sponsor): `photo: "robot.jpg"`
3. For the big home-page robot photo, open `src/pages/index.astro` and follow
   the one-line instruction in the comment near `hero__media`.

---

## Running it on your Mac

You need Node.js once. If you don't have it:

```bash
brew install node
```

Then, from inside this project folder:

```bash
npm install      # one time only — downloads what Astro needs
npm run dev      # starts a live preview
```

Open the address it prints (usually `http://localhost:4321`). Leave it running;
the page updates as you save files.

To stop it, press `Ctrl + C` in the terminal.

---

## Putting it online (GitHub Pages)

This deploys the same way your old site did — push to `main` and it publishes.

One-time setup on GitHub:

1. Replace the **whole** contents of your repo with this project's files.
   (Delete the old MkDocs files: `src/doc/`, `build.gradle.kts`, `gradlew`,
   `gradle/`, etc. Keep `.git`, `LICENSE`, and `README.md`.)
2. On GitHub: **Settings → Pages → Build and deployment → Source** →
   choose **GitHub Actions** (it was probably "Deploy from a branch" before).
3. Confirm `public/CNAME` says your real domain. It currently says
   `www.ftcbananabox.com` — change it if your domain settings use the bare
   `ftcbananabox.com` instead.
4. Commit and push to `main`. The workflow in `.github/workflows/deploy.yml`
   builds the site and publishes it. Check progress under the repo's **Actions** tab.

After that, every push to `main` re-publishes automatically.

---

## Adding a new page later

Ask for help, or copy an existing file in `src/pages/` (e.g. `awards.astro`),
rename it, and add it to the menu list inside `src/components/Nav.astro`.
