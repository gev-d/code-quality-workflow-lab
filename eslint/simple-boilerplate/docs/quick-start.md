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
