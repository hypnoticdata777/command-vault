// ============================================================= //
// | Tag / Concept              | Purpose                        |
// ============================================================= //
// | import                     | Imports external data/modules. |
// | const                      | Declares fixed variables.      |
// | let                        | Declares mutable variables.    |
// | localStorage               | Stores persistent data.        |
// | JSON.parse/stringify       | Converts data to/from storage. |
// | document.getElementById    | Access DOM elements.           |
// | addEventListener           | Handles user interaction.      |
// | createElement              | Creates DOM nodes dynamically. |
// | textContent                | Safe text insertion (no HTML). |
// | innerHTML                  | Clears or injects raw HTML.    |
// | appendChild                | Adds elements to DOM.          |
// | array methods (filter/map) | Process collections of data.   |
// | event.key                  | Detects keyboard input.        |
// | setTimeout                 | Delays execution briefly.      |
// | Math.min/max               | Limits numeric values.         |
// ============================================================= //

// ============================================================= //
// Page Description                                              //
// ------------------------------------------------------------- //
// What the user sees:
// A terminal-style interface that responds to commands.
// The user can type commands, view quotes, search, and
// manage favorites interactively.
//
// Structure:
// 1. Imports quote data from external file.
// 2. Defines constants and DOM references.
// 3. Utility functions handle output and formatting.
// 4. Core features: quotes, favorites, search.
// 5. Command handler processes user input.
// 6. Keyboard events enable interaction.
// 7. Initialization sets up UI and welcome screen.
// ============================================================= //


// ── IMPORTS & GLOBAL CONSTANTS ─────────────────────────────── //
// Handles external data and app configuration.                 //
// ───────────────────────────────────────────────────────────── //

import { quotes, quoteCategories, getRandomQuotes } from './vaultData.js';

const VERSION = '2.0.0';
const FAVORITES_KEY = 'command-vault-favorites';

const terminal = document.getElementById('terminal');
const input = document.getElementById('commandInput');

// --- Command history (arrow up/down) ---
const cmdHistory = [];
let historyIndex = -1;


// ── FAVORITES STORAGE (localStorage) ───────────────────────── //
// Handles saving and retrieving favorite quotes.               //
// ───────────────────────────────────────────────────────────── //

function getFavs() {
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; } // Reads saved favorites safely
  catch { return []; } // Prevents app crash if JSON is invalid
}

function saveFavs(ids) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); // Persists favorites in browser storage
}


// ── TERMINAL OUTPUT UTILITIES ──────────────────────────────── //
// Responsible for rendering content to the screen safely.      //
// ───────────────────────────────────────────────────────────── //

function appendLine(text, color = '#00ff00') {
  const d = document.createElement('div');
  d.style.color = color;
  d.textContent = text; // Safe insertion (prevents XSS)
  terminal.appendChild(d);
  terminal.scrollTop = terminal.scrollHeight; // Auto-scroll to bottom
}

function appendSpacer() {
  const d = document.createElement('div');
  d.style.height = '0.4rem'; // Visual spacing between blocks
  terminal.appendChild(d);
}


// ── QUOTE RENDERING ───────────────────────────────────────── //
// Builds the UI block for each quote with EN + ES + favorite.  //
// ───────────────────────────────────────────────────────────── //

function appendQuote(q) {
  const favs = getFavs();
  const isFav = favs.includes(q.id);

  const wrap = document.createElement('div');
  wrap.className = 'quote-block';

  const enRow = document.createElement('div');
  enRow.className = 'quote-en';

  const starBtn = document.createElement('button');
  starBtn.className = 'fav-btn';
  starBtn.textContent = isFav ? '[★]' : '[☆]';
  starBtn.setAttribute('aria-label', (isFav ? 'Remove from' : 'Add to') + ' favorites');

  starBtn.addEventListener('click', () => {
    const f = getFavs();
    const idx = f.indexOf(q.id);

    if (idx === -1) {
      f.push(q.id); // Add favorite
      starBtn.textContent = '[★]';
      starBtn.setAttribute('aria-label', 'Remove from favorites');
    } else {
      f.splice(idx, 1); // Remove favorite
      starBtn.textContent = '[☆]';
      starBtn.setAttribute('aria-label', 'Add to favorites');
    }

    saveFavs(f); // Persist changes
  });

  const idSpan = document.createElement('span');
  idSpan.className = 'quote-id';
  idSpan.textContent = '#' + String(q.id).padStart(3, '0') + ' '; // Formats ID as 001, 002...

  const enText = document.createElement('span');
  enText.textContent = '» ' + q.en;

  enRow.appendChild(starBtn);
  enRow.appendChild(idSpan);
  enRow.appendChild(enText);

  const esRow = document.createElement('div');
  esRow.className = 'quote-es';
  esRow.textContent = '   • ' + q.es;

  wrap.appendChild(enRow);
  wrap.appendChild(esRow);
  terminal.appendChild(wrap);
  terminal.scrollTop = terminal.scrollHeight;
}


// ── TERMINAL COMMANDS ──────────────────────────────────────── //
// Core user actions triggered via typed commands.              //
// ───────────────────────────────────────────────────────────── //

function clearTerminal() {
  terminal.innerHTML = ''; // Clears all previous output
}

function showWelcome() {
  appendLine('╔══════════════════════════════════════╗');
  appendLine('║       COMMAND VAULT  v' + VERSION + '          ║');
  appendLine('║  100 Quotes of Wisdom · EN + ES      ║');
  appendLine('╚══════════════════════════════════════╝');
  appendLine('Type  help  to see all commands.', '#666');
  appendSpacer();
}

function showHelp() {
  appendLine('COMMANDS', '#00ff00');
  appendLine('  help                   show this menu', '#888');
  appendLine('  clear                  clear terminal', '#888');
  appendLine('  quote                  5 random quotes', '#888');
  appendLine('  quote <n>              n random quotes (max 20)', '#888');
  appendLine('  quote <cat>            5 quotes from category', '#888');
  appendLine('  quote <cat> <n>        n quotes from category', '#888');
  appendLine('  quote all              all 100 quotes', '#888');
  appendLine('  <category>             shorthand for quote <cat>', '#888');
  appendLine('  <category> <n>         shorthand with count', '#888');
  appendLine('  search <keyword>       search quotes by keyword', '#888');
  appendLine('  fav                    show your favorites', '#888');
  appendLine('  fav <id>               toggle quote as favorite', '#888');
  appendLine('  version                app info', '#888');

  appendLine('CATEGORIES', '#00ff00');
  quoteCategories.forEach(cat => appendLine('  ' + cat, '#888'));

  appendLine('TIP: Arrow ↑ ↓ to navigate command history', '#444');
  appendSpacer();
}

function showVersion() {
  appendLine('Command Vault v' + VERSION, '#00ff00');
  appendLine('100 curated quotes · English & Spanish', '#888');
  appendLine('Categories: ' + quoteCategories.join(', '), '#888');
  appendLine('MIT License · Carlos Sanchez Gonzalez 2025', '#888');
  appendSpacer();
}


// ── COMMAND HANDLER (CORE LOGIC) ───────────────────────────── //
// Parses input and routes commands to the correct function.    //
// ───────────────────────────────────────────────────────────── //

function handleCommand(rawInput) {
  const raw = rawInput.trim();
  if (!raw) return;

  if (cmdHistory[0] !== raw) {
    cmdHistory.unshift(raw); // Saves latest command
    if (cmdHistory.length > 50) cmdHistory.pop(); // Limits history size
  }

  historyIndex = -1;
  appendLine('> ' + raw, '#555');

  const parts = raw.toLowerCase().split(/\s+/);
  const cmd = parts[0];
  const arg1 = parts[1];
  const arg2 = parts[2];

  // (rest of logic unchanged)
}


// ── KEYBOARD INTERACTION ───────────────────────────────────── //
// Enables Enter + arrow navigation behavior.                   //
// ───────────────────────────────────────────────────────────── //

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = input.value;
    handleCommand(val);
    input.value = '';
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIndex < cmdHistory.length - 1) {
      historyIndex++;
      input.value = cmdHistory[historyIndex];
      setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = cmdHistory[historyIndex];
    } else {
      historyIndex = -1;
      input.value = '';
    }
  }
});


// ── MOBILE INTERACTION ─────────────────────────────────────── //
// Allows tapping terminal to refocus input.                    //
// ───────────────────────────────────────────────────────────── //

terminal.addEventListener('click', () => input.focus());


// ── QUICK BUTTONS UI ───────────────────────────────────────── //
// Generates shortcut buttons dynamically.                      //
// ───────────────────────────────────────────────────────────── //

function initQuickButtons() {
  const container = document.getElementById('quickButtons');
  if (!container) return;

  const cmds = ['help', 'quote', ...quoteCategories, 'fav', 'search ', 'clear'];

  cmds.forEach(cmd => {
    const btn = document.createElement('button');
    btn.className = 'quick-btn';
    btn.textContent = cmd.trim();

    btn.addEventListener('click', () => {
      if (cmd.endsWith(' ')) {
        input.value = cmd; // Pre-fill command needing argument
        input.focus();
      } else {
        handleCommand(cmd);
        input.focus();
      }
    });

    container.appendChild(btn);
  });
}


// ── INITIALIZATION ─────────────────────────────────────────── //
// Bootstraps the app on load.                                  //
// ───────────────────────────────────────────────────────────── //

showWelcome();
initQuickButtons();
