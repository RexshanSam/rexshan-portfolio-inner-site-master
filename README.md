# 🖥️ Rexshan's Desktop Showcase — Windows 95 Style Interactive Portfolio

Welcome to my interactive, retro-themed portfolio website! Instead of a traditional flat web page, this project simulates a fully functional Windows 95/98 desktop environment directly in the browser. Visitors land on a nostalgic operating system interface—complete with custom desktop shortcuts, draggable and resizable windows, an active taskbar, a custom music player, and fully playable retro DOS games.

The actual portfolio content lives inside the **"My Showcase"** application, which boots automatically on load to guide visitors through my background, skills, and projects.

## 🔗 Live Demo
* **Live App:** *(Add your deployed Vercel/Netlify link here once live!)*
* **GitHub Repository:** [github.com/RexshanSam/rexshan-portfolio-inner-site-master](https://github.com/RexshanSam/rexshan-portfolio-inner-site-master)
* **Live Link:**(https://rexshan-portfolio-inner-site-master.vercel.app/).

---

## 🛠️ Tech Stack

| Layer | Technology Used |
| :--- | :--- |
| **Core Framework** | React 17 + TypeScript |
| **Routing** | React Router v6 |
| **Animations** | Framer Motion |
| **DOS Emulator** | `js-dos v7` & `emulators-ui` (Runs real DOS `.jsdos` bundles) |
| **Styling & Assets** | Custom CSS, Pixel-style Windows 95 Icons, Retro MP3 Audio Tracks |
| **Typography** | Windows 95 Era Fonts (`MS Sans Serif`, `Terminal`, `Millennium`) |
| **Hooks & Utilities**| `usehooks-ts` |

---

## 🚀 Key Features

* **Advanced Window Management (`Desktop.tsx`):** Coordinates window stacking orders dynamically using an active `z-index` layer state mechanism. Clicking a window instantly focus-elevates it over other components.
* **Draggable & Resizable OS Environment:** Individual application views are wrapped inside a flexible `<Window />` chassis containing custom drag-and-resize boundaries (`DragIndicator`, `ResizeIndicator`). Windows support responsive maximize, minimize, and close workflows.
* **Integrated DOS Emulation (`DosPlayer.tsx`):** Utilizes `js-dos` native WebAssembly runtimes to load and render real retro DOS games directly inside container windows.
* **Nostalgic Taskbar Engine (`Toolbar.tsx`):** Recreates the standard OS task bar to toggle window minimization states and launch the main Start Menu.
* **Interactive App Suite:**
  * **My Showcase:** Rexshan's modular portfolio core (Home, About Me, Technical Experience, Software Projects, and Contact Panel).
  * **Retro Gaming:** Fully operational instances of **DOOM**, **The Oregon Trail**, and **Scrabble**.
  * **Henordle:** A custom built Wordle-style text guessing game.
  * **Audio Center:** Desktop media player equipped with selectable background synth tracks.
* **Shutdown Sequence:** Selecting 'Shutdown' from the Start Menu triggers a classic retro screen fade animation followed by a full software environment reboot.

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── os/              → Core OS Shell (Desktop, Window, Toolbar, Shortcut, Shutdown)
│   ├── applications/    → Windowed Apps (Doom, OregonTrail, Scrabble, Henordle, Showcase)
│   ├── showcase/        → Portfolio Content (About, Experience, Projects, Contact, Home)
│   ├── general/         → Shared Desktop Utilities (MusicPlayer, Icon, Links)
│   └── dos/             → Native js-dos Wasm Wrapper Engine
├── assets/
│   ├── audio/           → High-fidelity ambient background audio loops
│   ├── fonts/           → Retro bitmap style typography assets
│   └── icons/           → High-fidelity 90s OS styled pixel art
public/
├── doom.jsdos           → Pre-compiled WebAssembly DOOM game bundle
├── trail.jsdos          → Pre-compiled WebAssembly Oregon Trail game bundle
└── scrabble.jsdos       → Pre-compiled WebAssembly Scrabble game bundle
