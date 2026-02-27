import { quotes, quoteCategories, getRandomQuotes } from './vaultData.js';

const VERSION = '2.0.0';
const FAVORITES_KEY = 'command-vault-favorites';

const terminal = document.getElementById('terminal');
const input = document.getElementById('commandInput');

// --- Command history (arrow up/down) ---
const cmdHistory = [];
let historyIndex = -1;

// --- Favorites (localStorage) ---
function getFavs() {
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; }
  catch { return []; }
}
function saveFavs(ids) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

// --- Safe DOM output (no innerHTML for content) ---
function appendLine(text, color = '#00ff00') {
  const d = document.createElement('div');
  d.style.color = color;
  d.textContent = text;
  terminal.appendChild(d);
  terminal.scrollTop = terminal.scrollHeight;
}

function appendSpacer() {
  const d = document.createElement('div');
  d.style.height = '0.4rem';
  terminal.appendChild(d);
}

function appendQuote(q) {
  const favs = getFavs();
  const isFav = favs.includes(q.id);

  const wrap = document.createElement('div');
  wrap.className = 'quote-block';

  // English row: [☆] #id » quote text
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
      f.push(q.id);
      starBtn.textContent = '[★]';
      starBtn.setAttribute('aria-label', 'Remove from favorites');
    } else {
      f.splice(idx, 1);
      starBtn.textContent = '[☆]';
      starBtn.setAttribute('aria-label', 'Add to favorites');
    }
    saveFavs(f);
  });

  const idSpan = document.createElement('span');
  idSpan.className = 'quote-id';
  idSpan.textContent = '#' + String(q.id).padStart(3, '0') + ' ';

  const enText = document.createElement('span');
  enText.textContent = '» ' + q.en;

  enRow.appendChild(starBtn);
  enRow.appendChild(idSpan);
  enRow.appendChild(enText);

  // Spanish row
  const esRow = document.createElement('div');
  esRow.className = 'quote-es';
  esRow.textContent = '   • ' + q.es;

  wrap.appendChild(enRow);
  wrap.appendChild(esRow);
  terminal.appendChild(wrap);
  terminal.scrollTop = terminal.scrollHeight;
}

// --- Commands ---
function clearTerminal() {
  terminal.innerHTML = '';
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

function displayQuotes(selected, label) {
  if (selected.length === 0) {
    appendLine('No quotes found.', '#ff4444');
    appendSpacer();
    return;
  }
  if (label) appendLine(label, '#00ff00');
  selected.forEach(q => appendQuote(q));
  appendSpacer();
}

function showFavorites() {
  const ids = getFavs();
  if (ids.length === 0) {
    appendLine('No favorites yet. Click [☆] next to a quote or type: fav <id>', '#888');
    appendSpacer();
    return;
  }
  const favQuotes = quotes.filter(q => ids.includes(q.id));
  displayQuotes(favQuotes, 'FAVORITES (' + favQuotes.length + ')');
}

function searchQuotes(keyword) {
  const kw = keyword.toLowerCase();
  const results = quotes.filter(q =>
    q.en.toLowerCase().includes(kw) || q.es.toLowerCase().includes(kw)
  );
  if (results.length === 0) {
    appendLine('No results for "' + keyword + '"', '#888');
    appendSpacer();
  } else {
    displayQuotes(results, 'Found ' + results.length + ' result(s) for "' + keyword + '":');
  }
}

function toggleFav(id) {
  const q = quotes.find(q => q.id === id);
  if (!q) {
    appendLine('Quote #' + id + ' not found. IDs range from 1–100.', '#ff4444');
    appendSpacer();
    return;
  }
  const favs = getFavs();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    saveFavs(favs);
    appendLine('Added #' + id + ' to favorites. (' + favs.length + ' total)', '#00ff00');
  } else {
    favs.splice(idx, 1);
    saveFavs(favs);
    appendLine('Removed #' + id + ' from favorites. (' + favs.length + ' remaining)', '#888');
  }
  appendSpacer();
}

function handleCommand(rawInput) {
  const raw = rawInput.trim();
  if (!raw) return;

  // Update command history
  if (cmdHistory[0] !== raw) {
    cmdHistory.unshift(raw);
    if (cmdHistory.length > 50) cmdHistory.pop();
  }
  historyIndex = -1;

  // Echo command to terminal
  appendLine('> ' + raw, '#555');

  const parts = raw.toLowerCase().split(/\s+/);
  const cmd = parts[0];
  const arg1 = parts[1];
  const arg2 = parts[2];

  if (cmd === 'help') {
    showHelp();

  } else if (cmd === 'clear') {
    clearTerminal();

  } else if (cmd === 'version' || cmd === 'about') {
    showVersion();

  } else if (cmd === 'favorites' || cmd === 'favs' || (cmd === 'fav' && !arg1)) {
    showFavorites();

  } else if (cmd === 'fav') {
    const id = parseInt(arg1, 10);
    if (isNaN(id)) { appendLine('Usage: fav <id>  (e.g. fav 42)', '#ff4444'); appendSpacer(); return; }
    toggleFav(id);

  } else if (cmd === 'search') {
    const keyword = raw.slice(6).trim();
    if (!keyword) { appendLine('Usage: search <keyword>  (e.g. search marcus)', '#ff4444'); appendSpacer(); return; }
    searchQuotes(keyword);

  } else if (cmd === 'quote') {
    if (!arg1) {
      displayQuotes(getRandomQuotes(5));
    } else if (arg1 === 'all') {
      displayQuotes(quotes, 'ALL QUOTES (' + quotes.length + ')');
    } else {
      const n = parseInt(arg1, 10);
      if (!isNaN(n)) {
        const count = Math.min(Math.max(1, n), 20);
        const cat = (arg2 && quoteCategories.includes(arg2)) ? arg2 : null;
        displayQuotes(getRandomQuotes(count, cat));
      } else if (quoteCategories.includes(arg1)) {
        const count = arg2 ? Math.min(Math.max(1, parseInt(arg2, 10) || 5), 20) : 5;
        displayQuotes(getRandomQuotes(count, arg1));
      } else {
        appendLine('Unknown category "' + arg1 + '". Type help for categories.', '#ff4444');
        appendSpacer();
      }
    }

  } else if (quoteCategories.includes(cmd)) {
    const count = arg1 ? Math.min(Math.max(1, parseInt(arg1, 10) || 5), 20) : 5;
    displayQuotes(getRandomQuotes(count, cmd));

  } else {
    appendLine('Unknown command: "' + cmd + '". Type help for commands.', '#ff4444');
    appendSpacer();
  }
}

// --- Keyboard: Enter + Arrow history ---
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
      // Move cursor to end of input
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

// Mobile: tap anywhere on terminal output to focus input
terminal.addEventListener('click', () => input.focus());

// --- Quick-command buttons (mobile + convenience) ---
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
        // Commands needing an argument: put in input and let user complete
        input.value = cmd;
        input.focus();
      } else {
        handleCommand(cmd);
        input.focus();
      }
    });
    container.appendChild(btn);
  });
}

// --- Init ---
showWelcome();
initQuickButtons();
