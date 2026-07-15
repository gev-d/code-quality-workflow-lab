# What happens when I press ⌘S

Short version: the editor runs Prettier, and Prettier reads my project config.

## Common behavior (Zed and VS Code)

The rules always come from the **project**, not the editor:

1. I press ⌘S → the editor saves the file.
2. The editor's "format on save" is on → it formats the file.
3. It runs **Prettier**.
4. Prettier searches **upward** from the file for a config → finds `.prettierrc`.
5. Prettier formats using the options in `.prettierrc`.

```
⌘S → format on save → run Prettier → find .prettierrc → format
```

- Empty `.prettierrc` (`{}`) = use Prettier's defaults.
- `.prettierrc` with options = my options override the defaults.
- `.prettierignore` = files Prettier skips (e.g. `pnpm-lock.yaml`).
- Same as running `pnpm exec prettier . --write` in the terminal (same Prettier, same config).

## Where does Prettier live?

"Run Prettier" means the editor finds a Prettier **program** on disk and runs it. It can come from 3 places:

1. **Project** — `node_modules/.bin/prettier` (from `pnpm add prettier`). The preferred one; version is pinned in `package.json` so everyone formats the same.
2. **Editor's bundled copy** — inside the app itself. Zed has Prettier built in; VS Code's Prettier extension carries its own copy. Used only as a fallback.
3. **Global** — installed system-wide (`npm i -g prettier`). Rarely used.

The rule editors follow:

```
Does the project have node_modules/prettier?
   ├── Yes → run THAT one   (project version, pinned)
   └── No  → run the editor's own bundled Prettier
```

The config (`.prettierrc`) is always my project's — only the *program* differs by location. This is why Prettier recommends always installing it locally: so the editor runs my pinned version, not whatever it ships with.

## Zed

- Set in `~/.config/zed/settings.json`:
  ```jsonc
  "format_on_save": "on",
  "formatter": "prettier"
  ```
- Why it wasn't working before: Zed's default `"formatter": "auto"` used the **JS language server** instead of Prettier. Setting `"formatter": "prettier"` fixed it.
- Zed uses **one Prettier for all languages** (JS, CSS, HTML, JSON…).
- If a config change doesn't apply, reload Zed (it caches the config).

## VS Code

**Why VS Code needs an extension:** VS Code does **not** ship Prettier. Out of the box it only has basic built-in formatters, so ⌘S can't run Prettier — it isn't there. The extension `esbenp.prettier-vscode` is the bridge: it (1) brings Prettier in, (2) registers it as a selectable formatter, and (3) runs it on save (reading my `.prettierrc`). Without it, there's no "Prettier" option to connect ⌘S to.

Zed is different because Prettier is **built into the app** — nothing to install, I only point to it.

- Needs the **Prettier extension**: `esbenp.prettier-vscode`.
- Set in settings (`settings.json`):
  ```jsonc
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  ```
- VS Code picks the formatter **per language**. My current setup only points JS/TS at Prettier:
  ```jsonc
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[html]":       { "editor.defaultFormatter": "vscode.html-language-features" }, // NOT Prettier
  ```
  So `.js` uses Prettier, but `.html` / `.css` use VS Code's **built-in** formatters unless I add `[html]` / `[css]` blocks pointing to Prettier too.

## Key difference

| | Zed | VS Code |
|---|---|---|
| Prettier source | built in / project | needs the Prettier extension |
| Which languages use Prettier | all, once `formatter: prettier` | only the languages I map to it |
| Setting name | `format_on_save`, `formatter` | `editor.formatOnSave`, `editor.defaultFormatter` |
