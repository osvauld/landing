# Osvauld Website

The official website for [Osvauld](https://osvauld.com) - a framework for building peer-to-peer applications that prioritize privacy, security, and user control. This site showcases both Osvauld and Livnote, our collaborative document editor built with the Osvauld framework.

## 🌐 Multi-language Support

This website supports multiple languages to make Osvauld and Livnote accessible to users worldwide. We currently support:

- 🇺🇸 **English** (en) - Default language
- 🇩🇪 **German** (de) - Deutsch  
- 🇷🇺 **Russian** (ru) - Русский
- 🇨🇳 **Chinese** (zh) - 中文
- 🇫🇷 **French** (fr) - Français
- 🇪🇸 **Spanish** (es) - Español
- 🇯🇵 **Japanese** (ja) - 日本語

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: React components for interactive elements
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Self-hosted fonts with subset optimization
- **Internationalization**: Custom i18n implementation

## 📁 Project Structure

```
├── public/                 # Static assets (fonts, images, icons)
│   ├── fonts/             # Subsetted font files
│   ├── assets/            # Images and logos
│   └── favicon.*          # Site favicons
├── src/
│   ├── assets/            # Source assets
│   │   ├── icons/         # SVG icons as React components
│   │   ├── images/        # Source images
│   │   └── logos/         # Logo components
│   ├── components/        # Reusable components
│   │   ├── additional/    # Utility components
│   │   ├── livnote/       # Livnote-specific components
│   │   ├── osvauld/       # Osvauld-specific components
│   │   ├── Footer.astro   # Site footer
│   │   ├── LanguageSelector.astro # Language switcher
│   │   └── Navbar.astro   # Site navigation
│   ├── i18n/             # Internationalization
│   │   ├── locales/      # Translation files
│   │   │   ├── en.json   # English translations
│   │   │   ├── de.json   # German translations
│   │   │   ├── ru.json   # Russian translations
│   │   │   ├── zh.json   # Chinese translations
│   │   │   ├── fr.json   # French translations
│   │   │   ├── es.json   # Spanish translations
│   │   │   └── ja.json   # Japanese translations
│   │   ├── ui.ts         # TypeScript interfaces
│   │   └── utils.ts      # i18n utility functions
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   │   ├── [locale]/     # Localized pages
│   │   ├── index.astro   # Homepage
│   │   ├── livnote.astro # Livnote page
│   │   ├── faq.astro     # FAQ page
│   │   ├── story.astro   # About page
│   │   ├── privacy.astro # Privacy policy
│   │   └── terms.astro   # Terms of service
│   └── styles/           # Global styles
│       ├── fonts.css     # Font declarations
│       └── Theme.css     # Theme variables
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/osvauld/landing.git
cd landing

# Install dependencies
npm install
# or
yarn install
```

### Development Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm run dev`          | Starts local dev server at `localhost:4321`       |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying     |

### Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321` with hot-reload enabled.

## 🌍 Contributing Translations

We welcome contributions to improve our translations! Help us make Osvauld and Livnote accessible to more people around the world.

### How to Contribute Translations

#### 1. Choose a Language

Check our current supported languages in `src/i18n/locales/`. If you want to:
- **Improve existing translations**: Edit the corresponding JSON file
- **Add a new language**: Create a new JSON file following the naming pattern

#### 2. Translation Files Location

All translation files are located in `src/i18n/locales/`:
- `en.json` - English (reference file)
- `de.json` - German
- `ru.json` - Russian  
- `zh.json` - Chinese
- `fr.json` - French
- `es.json` - Spanish
- `ja.json` - Japanese

#### 3. Translation Structure

Each translation file follows the same structure as `en.json`. Here's an example of the structure:

```json
{
  "nav": {
    "github": "GitHub",
    "documentation": "Documentation",
    "faq": "FAQ",
    "story": "Our story",
    "visitOsvauld": "Visit Osvauld",
    "tryLivnote": "Try Livnote"
  },
  "osvauldHero": {
    "title": "Personal Internet<br />Complete Control<br />Absolute Privacy",
    "subtitle": "Offline-first, end-to-end encrypted, peer-to-peer applications..."
  },
  "features": {
    "title": "Features",
    "peerToPeer": {
      "title": "Peer-to-Peer by Default",
      "description": "Apps connect directly - no middlemen, no servers in the way."
    }
  }
}
```

#### 4. Translation Guidelines

When translating, please:

- **Maintain the same JSON structure** as the English file
- **Preserve HTML tags** like `<br />`, `<span>`, `<strong>` etc.
- **Keep technical terms** in English when appropriate (e.g., "peer-to-peer", "end-to-end encryption")
- **Use natural, fluent language** that sounds native to speakers
- **Consider cultural context** - some concepts may need adaptation
- **Test your translations** by running the development server

#### 5. Adding a New Language

To add support for a new language:

1. **Create the translation file**:
   ```bash
   cp src/i18n/locales/en.json src/i18n/locales/[language-code].json
   ```

2. **Update the locale configuration** in `astro.config.mjs`:
   ```javascript
   i18n: {
     defaultLocale: "en",
     locales: ["en", "de", "ru", "zh", "fr", "es", "ja", "new-lang"], // Add your language
     routing: {
       prefixDefaultLocale: false,
     },
   }
   ```

3. **Update the sitemap configuration** in `astro.config.mjs`:
   ```javascript
   sitemap({
     i18n: {
       defaultLocale: "en",
       locales: {
         en: "en",
         de: "de",
         ru: "ru",
         zh: "zh",
         fr: "fr",
         es: "es",
         ja: "ja",
         "new-lang": "new-lang", // Add your language
       },
     },
   })
   ```

4. **Update the TypeScript types** in `src/i18n/ui.ts`:
   ```typescript
   export type Locale = 'en' | 'de' | 'ru' | 'zh' | 'fr' | 'es' | 'ja' | 'new-lang';
   ```

5. **Update utility functions** in `src/i18n/utils.ts`:
   ```typescript
   const supportedLocales: Locale[] = ['en', 'de', 'ru', 'zh', 'fr', 'es', 'ja', 'new-lang'];
   
   const displayNames: Record<Locale, string> = {
     // ... existing languages
     'new-lang': 'Native Name',
   };
   ```

#### 6. Testing Your Translations

After making changes:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to your language**:
   - Visit `http://localhost:4321/[language-code]/`
   - Use the language selector in the navigation
   - Check all pages: homepage, Livnote, FAQ, story, privacy, terms

3. **Verify everything works**:
   - All text displays correctly
   - No missing translations (fallback to English)
   - Navigation works properly
   - Language selector shows your language

#### 7. Submitting Your Contribution

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/improve-[language]-translations
   ```
3. **Make your changes** to the translation files
4. **Test thoroughly** using the development server
5. **Commit your changes**:
   ```bash
   git add src/i18n/locales/
   git commit -m "Improve [Language] translations"
   ```
6. **Push to your fork** and create a pull request

### Translation Priorities

We especially need help with:

- **Improving existing translations** for better fluency and accuracy
- **Adding new languages** for broader global reach
- **Technical terminology** consistency across languages
- **Cultural adaptation** of concepts and examples

### Getting Help

- **Questions about translations?** Open an issue with the `translation` label
- **Need help with a specific language?** Mention native speakers in your issue
- **Technical issues?** Check existing issues or create a new one

## 🎨 Adding Fonts

To add a new font or weight:

### 1. Get the Font File
- Download the `.woff2` file from Google Webfonts Helper or similar
- Place it in the `font-originals` directory

### 2. Subset the Font
    ```bash
    glyphhanger ./dist/**/*.html '--subset=./font-originals/*.woff2' --outputdir=./public/fonts --formats=woff2
    ```

### 3. Add CSS Declaration
Add the `@font-face` rule to `src/styles/fonts.css`:

```css
@font-face {
  font-family: 'Font Name';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/font-name-subset.woff2') format('woff2');
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get involved.

## 📞 Contact

- **Website**: [osvauld.com](https://osvauld.com)
- **Email**: abe@osvauld.com
- **GitHub**: [@osvauld](https://github.com/osvauld)

---

Built with ❤️ by the Osvauld team