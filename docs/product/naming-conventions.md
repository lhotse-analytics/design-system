---
outline: deep
---

# Naming Conventions

## SMACSS

### Definition

SMACSS (Scalable and Modular Architecture for CSS) is an approach to structuring and organising CSS that is intended to improve the maintainability and scalability of the code. SMACSS involves dividing the CSS code into five categories: Base, Layout, Module, State and Theme.

The naming conventions according to SMACSS often include a hierarchy and modularity to make the structure clear and understandable. Here is an example of the naming and structuring of a button according to the SMACSS convention:

### Example Button CSS to SMACSS

#### 1. Base

```SCSS
button {
    border-radius: $rounded-base;
    font-family: $font-family;
    font-size: $font-size-btn;
    border: 1px solid;
}
```

#### 2. Modules

```SCSS
.btn {
    padding: $spacing-xs $spacing-md;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &--primary {
        color: $white;
        background-color: $primary;

        &:hover {
            background-color: $primary-600;
        }
    }

    &--secondary {
        color: $text-primary;
        background-color: $white;
        border-color: $tertiary-200;

        &:hover {
            background-color: $tertiary-50;
            color: $primary;
        }
    }
}
```

#### 3. States

```SCSS
.btn--primary.is-disabled {
    cursor: not-allowed;
    background-color: $primary-200;
}
```

#### 4. Theme

```SCSS
.btn--primary.theme-dark {
  background-color: #2c3e50;
}

.btn--secondary.theme-dark {
  background-color: #27ae60;
}

.btn--danger.theme-dark {
  background-color: #c0392b;
}
```
