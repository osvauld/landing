

## Tech stack:

Astro, React, Tailwind, Framer Motion


##  Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── logos
│   ├── components
│   ├── layouts
│   ├──  pages
│   └── styles
└── package.json
```

##  How to run

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |



# How to add a new font

To add a different font or a new weight, you just repeat the same self-hosting process you've already successfully completed. It's a straightforward, repeatable workflow.

Here is the step-by-step procedure to follow anytime you want to add a new font variant.

-----

## The 3-Step Procedure

### 1\. ⚙️ Get the New Font File

First, you need the source `.woff2` file for the new font or weight.

  * Go back to a source like **Google Webfonts Helper**.
  * Find the new font family you want, or select the new weight (e.g., "Black 900") for an existing family like `Plus Jakarta Sans`.
  * Download the `.zip` file, extract the **`.woff2`** file, and place it in your `font-originals` directory alongside your other original fonts.

-----

### 2\. 🎨 Re-run the Subsetting Command

You don't need to change the command at all. Just re-run it from your project root. `glyphhanger` will automatically find the new font file you just added.

  * Make sure you have a recent build of your site in the `dist` folder.
  * Run the command:
    ```bash
    glyphhanger ./dist/**/*.html '--subset=./font-originals/*.woff2' --outputdir=./public/fonts --formats=woff2
    ```

This will generate a new, smaller, subsetted font file in your `public/fonts` directory.

-----

### 3\. ✍️ Add the CSS `@font-face` Rule

Now, you need to tell the browser about the new font file.

  * Open your CSS file at `src/styles/fonts.css`.
  * Add a new `@font-face` block for the new font weight.
  * **Crucially, update the `font-weight` and the `src: url()` path** to match the new file.

For example, if you added a "Black 900" weight for Plus Jakarta Sans, your new rule would look like this:

```css
/* src/styles/fonts.css */

/* ... your existing font rules ... */

/* Plus Jakarta Sans - Black */
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 900;  /* <-- New weight */
  font-display: swap;
  src: url('/fonts/PlusJakartaSans-Black-subset.woff2') format('woff2'); /* <-- New file path */
}
```

