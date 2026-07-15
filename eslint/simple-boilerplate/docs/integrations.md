# Integrations

One of the things that makes ESLint such a useful tool is the ecosystem of integrations that surrounds it. For example, many code editors have ESLint extensions that show you the ESLint results of your code in the file as you work so that you don’t need to use the ESLint CLI to see linting results.

## The ESLint VS Code plugin

The CLI and the VS Code plugin run the exact same ESLint, just at different moments. The CLI is a snapshot: you type `pnpm dlx eslint`, it reads your config once, checks all files, prints errors to the terminal, and stops until you run it again. The VS Code plugin is a wrapper that runs that same ESLint automatically and continuously as you type. Same config, same rules, same errors — only the delivery is different.

Instead of printing text to the terminal, the plugin shows problems as red and yellow squiggles directly under the code, live as you edit. You can hover a squiggle and choose Quick Fix, or enable auto-fix on save with the `editor.codeActionsOnSave` setting so many problems fix themselves every time you save. This turns a slow run-read-fix-run loop into instant, in-place feedback.

> ℹ️ **Note:** The key mental model is that the plugin is not a separate linter. It reuses your project's ESLint install and your config file. If your config errors in the CLI, the plugin shows the same errors; if the config is broken, the plugin shows nothing or reports an error in its Output panel. A common gotcha: for a flat config the file must be named `eslint.config.js` so both the CLI and the plugin can auto-detect it.
