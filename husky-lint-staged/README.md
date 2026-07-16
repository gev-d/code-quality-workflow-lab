What is Husky?

Husky is a tool that makes Git hooks easy to manage inside a JavaScript/Node.js project.

A Git hook is a script that Git automatically runs when a particular Git action happens.

Examples:

git commit
↓
pre-commit hook runs

commit message entered
↓
commit-msg hook runs

git push
↓
pre-push hook runs

Husky supports Git’s client-side hooks and stores hook scripts as project files, so they can be shared with everyone working on the repository.

What problem does Husky solve?

Imagine you want developers to run these commands before every commit:

npm run format
npm run lint
npm test

Without automation, someone may forget.

With Husky, the project can automatically run them when the developer executes:

git commit

The flow becomes:

Developer runs git commit
↓
Git activates pre-commit
↓
Husky runs the .husky/pre-commit script
↓
ESLint / Prettier / tests run
↓
If successful → commit is created
If unsuccessful → commit is stopped

Husky itself does not format or analyze your code. It runs the commands that invoke tools such as Prettier, ESLint, and test runners.
