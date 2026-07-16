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

---

What is lint-staged?

lint-staged runs commands only on files currently staged for a Git commit.

It is not itself a formatter or linter. It selects the staged files and passes them to tools such as Prettier and ESLint.

lint-staged = staged-file selector and task runner
First, what does “staged” mean?

Suppose your project contains:

src/
├── user.js
├── product.js
└── payment.js

You modify all three files, but stage only two:

git add src/user.js src/product.js

Git now has:

Modified but not staged:
└── payment.js

Staged for the next commit:
├── user.js
└── product.js

When lint-staged runs, it processes only:

user.js
product.js

It does not process payment.js because that file is not currently staged.

Why is this useful?

Without lint-staged, your pre-commit hook might run ESLint and Prettier over the entire project:

eslint .
prettier . --check

In a large project, this may check hundreds or thousands of files even though you changed only two.

With lint-staged:

2,000 project files
↓
3 modified files
↓
2 staged files
↓
Prettier and ESLint run only on those 2 files

This usually makes pre-commit checks faster and keeps the checks focused on code entering the commit.
