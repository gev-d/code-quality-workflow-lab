# Quick Start

## Automatic Setup

You can install and configure ESLint using this command:

```bash
pnpm create @eslint/config@latest
```

When you run `npm init @eslint/config`, you’ll be asked a series of questions to determine how you’re using ESLint and what options should be included. After answering these questions, you’ll have an `eslint.config.js` (or `eslint.config.mjs`) file created in your directory.

---

## Manual Set Up

You can also manually set up ESLint in your project.

1. Install the ESLint packages in your project:

   ```bash
   pnpm add --save-dev eslint@latest @eslint/js@latest
   ```

2. Add an `eslint.config.js` file:

   ```bash
   #touch eslint.config.js
   ```

3. Add configuration to the `eslint.config.js` file. Refer to the Configure ESLint documentation to learn how to add rules, custom configurations, plugins, and more.

   ```js
   import { defineConfig } from "eslint/config";
   import js from "@eslint/js";

   export default defineConfig([
   	{
   		files: ["**/*.js"],
   		plugins: {
   			js,
   		},
   		extends: ["js/recommended"],
   		rules: {
   			"no-unused-vars": "warn",
   			"no-undef": "warn",
   		},
   	},
   ]);
   ```

4. Lint code using the ESLint CLI:

   ```bash
   pnpm dlx eslint project-dir/ file.js
   ```

---

## Auto-fixing with `--fix`

By default, ESLint only **reports** problems — it prints the warnings and errors it finds, but changes nothing:

```bash
eslint .
```

```
src/index.js
  2:7  error  Strings must use single quotes  quotes
  3:1  error  Unexpected var, use let/const   no-var
```

Adding the `--fix` flag tells ESLint to **automatically repair the problems it safely can**, then report only what's left:

```bash
eslint . --fix
```

```
"hello"   →   'hello'      (quotes)
var x     →   let x        (no-var)
a===b     →   a === b      (spacing)
```

### What `--fix` can and can't do

- **Fixes** only rules that have a known, safe auto-fix (quotes, `var` → `let`, spacing, etc.).
- **Leaves alone** anything that needs a human decision, and still reports it. For example, `no-unused-vars` is *not* auto-fixed — ESLint won't delete code because removing it could change how your program behaves:

  ```js
  const unused = 42 // ← reported, but not removed by --fix
  ```

### `eslint --fix` vs `prettier --write`

They overlap slightly but have different jobs:

| | `eslint --fix` | `prettier --write` |
| --- | --- | --- |
| Focus | **Code quality / correctness** rules | **Formatting / style** only |
| Examples | `no-var`, `prefer-const`, unused imports | quotes, indentation, semicolons, line width |
| Leaves problems unfixed? | Yes (reports the rest) | No — reformats everything it can |

A common setup runs both, ESLint first, then Prettier:

```bash
eslint . --fix && prettier --write .
```

**Bottom line:** `--fix` means "don't just tell me what's wrong — fix the ones you safely can, and only bother me about the rest."
