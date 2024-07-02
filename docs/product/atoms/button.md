---
outline: deep
---

<style>
    @import './../../dist/css/main.css'
</style>

# Buttons

## Base

```SCSS
button {
    border-radius: $rounded-base;
    font-family: $font-family;
    font-size: $font-size-btn;
    border: 1px solid;
}
```

## Colors

<div>
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--tertiary">Tertiary Button</button>
</div>

```HTML
<button class="btn btn--primary">Click here</button>
<button class="btn btn--secondary">Click here</button>
<button class="btn btn--tertiary">Click here</button>
```

```SCSS
/* LIGHT THEME */
.btn {
    padding: $spacing-xxs $spacing-lg;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &--primary {
        color: $white;
        background-color: $primary;
    }

    &--secondary {
        color: $text-primary;
        background-color: $white;
        border-color: $tertiary-200;
    }

    &--tertiary {
        color: $primary;
        background-color: transparent;

        &:hover {
            color: $primary-300;
        }
    }
}

/* DARK THEME */
.dark {
    .btn {
        &--primary {
            color: $white;
            background-color: $primary-400;
    
            &:hover {
                background-color: $primary-300;
                color: $white;
            }
        }

        &--secondary {
            color: $tertiary-300;
            background-color: $tertiary-900;
            border: 1px solid $tertiary-400;
    
            &:hover {
                background-color: $tertiary-600;
                color: $tertiary-50;
            }
        }

        &--tertiary {
            color: $tertiary-300;
    
            &:hover {
                color: $tertiary-50;
            }
        }
    }
}
```

## Sizes

<div>
<button class="btn btn--primary btn--small">Small</button>
<button class="btn btn--primary">Base</button>
<button class="btn btn--primary btn--large">Large</button>
</div>

```HTML
<button class="btn btn--primary btn--small">Small</button>
<button class="btn btn--primary">Base</button>
<button class="btn btn--primary btn--large">Large</button>
```

```SCSS
.btn {
    &--small {
        padding: $spacing-xxs $spacing-sm;
    }

    &--large {
        padding: $spacing-sm $spacing-lg;
    }
}
```

## States

### Disabled

<button class="btn btn--primary is-disabled">Disabled</button>

```HTML
<button class="btn btn--primary is-disabled">Disabled</button>
```

```SCSS
.btn--primary.is-disabled {
    cursor: not-allowed;
    background-color: $primary-200;

    &:hover {
        background-color: $primary-200;
    }
}
```

### Active

