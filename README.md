# Command Vault

A minimalist, terminal-style web app that delivers **100 quotes of wisdom** in both **English and Spanish**, categorized by theme. Built to keep you sharp, inspired, and grounded — anytime, anywhere.

Live: [https://hypnoticdata777.github.io/command-vault/](https://hypnoticdata777.github.io/command-vault/)

---

## Features

- 100 curated quotes from thinkers like **Seneca**, **Sun Tzu**, **Marcus Aurelius**, and **Martin Luther King Jr.**
- 🇺🇸 + 🇲🇽 Dual-language: every quote shown in **English and Spanish**
- Category-based commands with optional count
- **Command history** — press `↑` / `↓` to cycle previous commands
- **Search** quotes by keyword (bilingual, case-insensitive)
- **Favorites** — bookmark quotes with `[☆]` or `fav <id>`, saved in localStorage
- **Quick-command buttons** for mobile users
- Accessible: `role="log"`, `aria-live`, visible focus states, screen-reader labels
- Auto-deployed to GitHub Pages via GitHub Actions
- Built with **HTML + CSS + JavaScript (ES modules)**

---

## Commands

| Command | Description |
|---|---|
| `help` | Show all available commands |
| `clear` | Clear the terminal |
| `quote` | 5 random quotes from any category |
| `quote <n>` | n random quotes (max 20) |
| `quote <category>` | 5 quotes from a specific category |
| `quote <category> <n>` | n quotes from a category |
| `quote all` | Show all 100 quotes |
| `<category>` | Shorthand for `quote <category>` |
| `<category> <n>` | Shorthand with count (e.g. `stoic 3`) |
| `search <keyword>` | Search quotes by keyword |
| `fav` | Show your saved favorites |
| `fav <id>` | Toggle a quote as favorite (e.g. `fav 42`) |
| `version` | Show app info |

### Categories

| Category | Description |
|---|---|
| `stoic` | Stoic philosophy — Marcus Aurelius, Seneca, Epictetus |
| `power` | Leadership, influence, strength |
| `negotiation` | Persuasion, empathy, conflict resolution |
| `discipline` | Focus, habits, self-mastery |
| `solarism` | Solar-inspired philosophy of consistency and purpose |

---

## Example Session

```
> quote stoic 3
#001 » You have power over your mind - not outside events. – Marcus Aurelius
      • Tienes poder sobre tu mente, no sobre los eventos externos. – Marcus Aurelius

> search silence
Found 3 result(s) for "silence":
...

> fav 53
Added #53 to favorites. (1 total)

> fav
FAVORITES (1)
...
```

---

## Tech

- Vanilla JS (ES modules) — no dependencies, no build step
- `vaultData.js` — data module with Fisher-Yates shuffle
- `script.js` — all app logic (commands, history, favorites, DOM)
- `style.css` — dark terminal theme, mobile-responsive, accessible focus states
- GitHub Actions — auto-deploys `main` to GitHub Pages on every push

---

MIT License · Carlos Sanchez Gonzalez 2025
