# Babel-Rollup-Boilerplate

Minimal boilerplate for Javascript Libraries, using:

* babel@7.4
* rollup@1.11
* eslint@5.16

Because (preferably) Webpack is for apps and Rollup is for libraries.

Bundled into umd modules, transpiled, bundled and uglified.

# Usage

```
npm run start
```

Start `index.html` with a server (use VSCode's live server plugin or python's simple HTTP server).
You will be able to access `lib` function using `window.lib()`.

# Environments

Test `process.env.NODE_ENV === 'production'` to enable different settings for different environments.

The `development` and `production` env triggered on `npm run dev` and `npm run build` generates an
uglified script.

The `local` env triggered on `npm run start` does not uglify the script and updates when
the source code changes.
