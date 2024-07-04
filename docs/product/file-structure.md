---
outline: deep
---

# File Structure

In this section, we outline a recommended file structure that combines SMACSS principles with Ember.js conventions. This
approach aims to maintain a modular, scalable, and organized codebase for your Ember.js application while adhering to
best practices in CSS architecture.

Things to keep in mind when working with Ember projects:

- Many Ember projects use SCSS or SASS for better modularization and features like variables, nesting, and mixins.
- Place styles for individual components in their respective folders.
- Place global styles, such as variables and base styles, in a centralized location like app/styles.
- Use BEM Naming Convention
- Avoid using inline styles as they are harder to maintain and do not take advantage of CSS's cascading nature.
- Use PostCSS Plugins: Enhance your CSS with PostCSS plugins. Popular plugins include autoprefixer for vendor prefixes
  and cssnano for CSS minification.

## SCSS structure

```
styles/
├── base/
│   ├── _reset.scss
│   └── _typography.scss
│   ├── _variables.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _modal.scss
│   └── _header.scss
│   └── _footer.scss
│   └── _grid.scss
├── states/
│   ├── _loading.scss
│   └── _error.scss
│   └── _warning.scss
├── templates/
│   ├── apps/
│   │   ├── _admin.scss
│   │   ├── _dashboard.scss
│   │   ├── _parts.scss
│   │   └── _styles.scss
│   │   └── _supplier.scss
│   │   └── _supply-analytics.scss
├── external/
│   ├── ag-grid.scss/
│   ├── xboxtags.scss/
├── themes/
│   ├── _dark.scss
│   └── _light.scss
└── apps.scss

```

### Explanation

- **`styles/`**: Contains all CSS (or SCSS/SASS) files related to styling.

    - **`base/`**: Foundational styles that reset default browser styles and apply throughout the app.

    - **`components/`**: Stylesheets specific to individual UI components or modules, following SMACSS for modularity.

    - **`state/`**: Stylesheets that apply based on the current state of elements, such as loading or error states.

    - **`templates/`**: Stylesheets apply styles that are specific to certain pages/routes, thus each template must have
      an id.

    - **`external/`**: Stylesheets related to external components.

    - **`themes/`**: Stylesheets related to theming, allowing for easy customization of the visual appearance.

### Usage

- Organize your CSS (or SCSS/SASS) files into these directories based on their purpose and functionality.
- Use SMACSS principles to maintain modularity and scalability in your CSS architecture.
- Utilize Ember.js conventions for organizing templates to ensure a cohesive structure between markup and styling.

## Individual Component style

```
app/
├── components/
│   ├── my-component/
│   │   ├── component.js
│   │   ├── template.hbs
│   │   └── styles.scss

```

## Examples:

App.scss
app.scss: the main entry point that imports all other SCSS files.

```
/* Base Styles */
@import 'base/reset.scss';
@import 'base/typography.scss';

/* Templates */
@import 'tempalte/header.scss';
@import 'template/footer.scss';
@import 'template/grid.scss';

/* Components */
@import 'component/button.scss';
@import 'component/card.scss';
@import 'component/modal.scss';

/* Themes */
@import 'theme/dark.scss';
@import 'theme/light.scss';

```

Base styles define default styles and overrides.

```
// base/_reset.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// base/_typography.scss
body {
  font-family: 'Helvetica, sans-serif';
  color: #333;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

```

Component style example

```
.button {
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &--primary {
    background-color: var(--primary-color);
  }

  &--secondary {
    background-color: var(--secondary-color);
  }

  &--large {
    padding: 15px 30px;
    font-size: 18px;
  }

  &--small {
    padding: 5px 10px;
    font-size: 14px;
  }
}

```

Variables and Mixins examples

```
/* utils/_variables.scss */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

/* utils/_mixins.css */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

```