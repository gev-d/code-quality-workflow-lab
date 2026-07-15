# What is ESLint?

ESLint is a configurable code-analysis tool, usually called a linter.

It reads your JavaScript or TypeScript code, searches for patterns that may represent bugs, unsafe practices, or violations of your team’s rules, and reports them. Some problems can also be fixed automatically.

For example:

```js
const username = "Gevorg";

console.log(userName);
```

JavaScript is case-sensitive:

```js
username !== userName
```

ESLint can warn that `userName` is undefined.

Another example:

```js
const age = 25;
```

If `age` is never used, the `no-unused-vars` rule can report it:

```text
'age' is assigned a value but never used
```

## What does “linting” mean?

Linting means:

```text
Analyzing source code
↓
Finding suspicious patterns
↓
Reporting warnings and errors
```

The name comes from the idea of removing small pieces of “lint” from code—small problems that may later create bigger problems.

---
