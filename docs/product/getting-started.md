---
outline: deep
---

# Getting Started

Welcome to the "Getting Started" section of our guide on structuring CSS with conventions. This section will walk you
through the essential steps to start organizing and improving your CSS codebase using standardized conventions.

## Prerequisites

Before you begin, ensure you have the following:

- **Basic Understanding of CSS**: Familiarity with CSS syntax and selectors.
- **SCSS Understanding**: Basic knowledge of SCSS syntax, including variables, nesting, mixins, and partials.
- **Text Editor**: A preferred text editor or integrated development environment (IDE).
- **Project Setup**: An existing project or a new project where you intend to apply structured CSS conventions.

## Installation

There is no specific installation required for implementing CSS conventions as they are more about guidelines and best
practices rather than software tools. However, you should ensure your development environment is set up with the
necessary tools and dependencies.

However, if you want to update this project, you will need the following installed on your computer.

Setup:

* [Git](https://git-scm.com/)
* [Node.js v18+](https://nodejs.org/) (with npm)
* Text Editor
* Terminal
* Browser

Installation:

- `git clone <repository-url>` this repository
- `cd <project-directory>`
- `npm install`
- `npm run docs:dev`

## Guidelines Overview

To get started with structured CSS using SCSS, here are some key guidelines and conventions we recommend:

### 1. File Organization

- Organize your SCSS files into meaningful directories based on functionality or modules (e.g., `components`, `base`).
- Use a consistent naming convention for your SCSS files, starting with an underscore (_), e.g., _example.scss. The
  underscore indicates that these files are partials and are intended to be imported into main SCSS files.

### 2. Naming Conventions

- Adopt a naming convention for classes that reflects their purpose and avoids overly generic names.
- All class names should follow kebab-case (class-example.scss) to ensure consistency and readability in your CSS
  codebase.

### 3. Writing Classes

- Avoid complicated styles: Don't make your styles overly specific or deeply nested. Keep them simple and
  straightforward so they're easier to manage and change later on. This keeps your CSS code clean and maintainable.

### 4. Using SMACSS

- Implement SMACSS principles to organize your CSS into base, component, template, state, and theme categories.
- Use consistent naming patterns for each category to ensure clarity and scalability.
- To match Ember conventions we will use **component** instead of **module**, and **template** instead of **layout**

## Example Implementation

Let’s apply these conventions to a simple example:

### Directory Structure

```
styles/
├── base/
├── component/
├── state/
├── template/
├── external/
├── theme/
└── apps.css
```

### HTML Example

```HTML
  <div class="card">
    <h2 class="card__title">Card Title</h2>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="card__link">Read More</a>
  </div>
```

### SCSS Example

```SCSS
// styles/component/_card.scss
.card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
  }

  &__link {
    color: #007bff;
    text-decoration: none;
    display: block;
    margin-top: 10px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
```

## Next Steps

Now that you have a basic understanding and setup for structured SCSS conventions, you can:

- Explore more advanced topics such as responsive design strategies or CSS preprocessors.
- Apply these principles consistently across your entire project.
- Refer to the specific sections in this documentation for detailed guidelines on each convention.
