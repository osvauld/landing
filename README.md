# Osvauld landing page

The website for [Osvauld](https://osvauld.com) and Xnet—the extended internet for private, sovereign shared software.

## Development

Requires Node.js and Yarn.

```bash
yarn install
yarn dev
```

The site is available at `http://localhost:4321`.

## Build

```bash
yarn build
yarn preview
```

The Astro build contains three routes:

- `/` — Xnet landing page
- `/terms` — terms of use
- `/privacy` — privacy policy

## Stack

- Astro
- Plain Astro components, HTML, and CSS
- Self-hosted Host Grotesk and JetBrains Mono fonts

No client framework or external asset library is used.
