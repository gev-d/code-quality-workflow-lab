# Prettier — Main Concepts

## Install

```bash
pnpm add --save-dev --save-exact prettier@3.9.5
```

## Format your code

```bash
pnpm exec prettier . --write
```

`prettier --write .` is great for formatting everything, but for a big project it might take a little while. You may run `prettier --write app/` to format a certain directory, or `prettier --write app/components/Button.js` to format a certain file. Or use a glob like `prettier --write "app/**/*.test.js"` to format all tests in a directory (see `fast-glob` for supported glob syntax).

> ℹ️ when config does'nt exitst it take default from package

## Check formatting

```bash
npx prettier . --check
```

`--check` is like `--write`, but only checks that files are already formatted, rather than overwriting them. `prettier --write` and `prettier --check` are the most common ways to run Prettier.

> 📌 **note**
>
> Don’t skip the regular local install! Editor plugins will pick up your local version of Prettier, making sure you use the correct version in every project. (You wouldn’t want your editor accidentally causing lots of changes because it’s using a newer version of Prettier than your project!)
>
> And being able to run Prettier from the command line is still a good fallback, and needed for CI setups.

## Recommended setup

- Install an exact version of Prettier locally in your project. This makes sure that everyone in the project gets the exact same version of Prettier. Even a patch release of Prettier can result in slightly different formatting, so you wouldn’t want different team members using different versions and formatting each other’s changes back and forth.
- Add a `.prettierrc` to let your editor know that you are using Prettier.
- Add a `.prettierignore` to let your editor know which files not to touch, as well as for being able to run `prettier --write .` to format the entire project (without mangling files you don’t want, or choking on generated files).
- Run `prettier --check .` in CI to make sure that your project stays formatted.
- Run Prettier from your editor for the best experience.
- Use `eslint-config-prettier` to make Prettier and ESLint play nice together.
- Set up a pre-commit hook to make sure that every commit is formatted.

## Ignoring files

It’s recommended to have a `.prettierignore` in your project! This way you can run `prettier --write .` to make sure that everything is formatted (without mangling files you don’t want, or choking on generated files). And – your editor will know which files not to format!

By default prettier ignores files in version control systems directories (".git", ".jj", ".sl", ".svn" and ".hg") and `node_modules` (unless the `--with-node-modules` CLI option is specified). Prettier will also follow rules specified in the ".gitignore" file if it exists in the same directory from which it is run.

So by default it will be

```gitignore
**/.git
**/.svn
**/.hg
**/node_modules
```

and

```gitignore
**/.git
**/.svn
**/.hg
```

## Plugins

Plugins are ways of adding new languages or formatting rules to Prettier. Prettier’s own implementations of all languages are expressed using the plugin API. The core prettier package contains JavaScript and other web-focused languages built in. For additional languages you’ll need to install a plugin.
