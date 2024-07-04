---
outline: deep
---

# Naming Conventions

Naming conventions in CSS are crucial for maintaining consistency, clarity, and scalability in your codebase. SMACSS (Scalable and Modular Architecture for CSS) provides guidelines that help structure class names effectively across different modules and components.

## Guidelines for Naming Conventions

### 1. BEM (Block Element Modifier)

BEM is a popular naming convention within SMACSS that promotes modular and reusable CSS components:

- **Block**: Represents a standalone entity that is meaningful on its own (e.g., `.button`).
- **Element**: Represents a part of a block that has no standalone meaning and is semantically tied to its block (e.g., `.button__icon`).
- **Modifier**: Represents a different state or variation of a block or element (e.g., `.button--disabled`).

### 2. Semantic and Modular Naming

- **Semantic Names**: Choose class names that describe the purpose or function of the element rather than its visual style. For example, use `.card` instead of `.blue-border-box`.
- **Modular Names**: Ensure names are modular and can be reused across different components without affecting their styling specificity.

### 3. Prefixes and Namespace

- **Prefixes**: Use consistent prefixes to distinguish between different types of modules or components (e.g., `.btn-primary` for primary buttons).
- **Namespace**: Add namespaces to group related classes together, especially useful when working with large codebases (e.g., `.module-header`).

### 4. Avoiding Overly Specific Names

- **Specificity**: Avoid overly specific names that are too tied to the current design or layout. Instead, focus on names that are flexible and can adapt to changes in design or functionality.

### 5. Organization and Documentation

- **Documentation**: Document your naming conventions to ensure consistency across the team and facilitate easier maintenance and updates.
- **Organization**: Organize your stylesheets using directories or categories that align with your naming conventions (e.g., `base/`, `layout/`, `modules/`, `state/`, `themes/`).

## Example

Here’s an example of applying BEM naming conventions to a button component:

```html
<!-- HTML -->
<button class="button button--primary">
    <span class="button__text">Click me!</span>
</button>
```

```SCSS
/* CSS (using SCSS) */
.button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &--primary {
    background-color: #007bff;
    color: #fff;
    
    &:hover {
      background-color: #0056b3;
    }
  }
  
  &__text {
    font-size: 16px;
  }
}
```
In this example:

- `.button` represents the block.
- `.button--primary` modifies the block to its primary state.
- `.button__text` is an element inside the button block.

By following these naming conventions, you can create a structured and maintainable CSS architecture that supports scalability and enhances collaboration among team members using SMACSS principles.
