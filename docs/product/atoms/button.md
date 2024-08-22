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
    border-radius: $ivf-rounded-base;
    font-family: $ivf-font-family;
    font-size: $ivf-font-size-btn;
    border: 1px solid;
}
```

## Colors

<div>
<button class="ivf-btn ivf-btn--primary">Primary Button</button>
<button class="ivf-btn ivf-btn--secondary">Secondary Button</button>
<button class="ivf-btn ivf-btn--tertiary">Tertiary Button</button>
</div>

```HTML
<button class="ivf-btn ivf-btn--primary">Click here</button>
<button class="ivf-btn ivf-btn--secondary">Click here</button>
<button class="ivf-btn ivf-btn--tertiary">Click here</button>
```

```SCSS
/* LIGHT THEME */
.ivf-btn {
    padding: $ivf-spacing-xxs $ivf-spacing-lg;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &--primary {
        color: $ivf-white;
        background-color: $ivf-primary;
    }

    &--secondary {
        color: $ivf-text-primary;
        background-color: $ivf-white;
        border-color: $ivf-tertiary-200;
    }

    &--tertiary {
        color: $ivf-primary;
        background-color: transparent;

        &:hover {
            color: $ivf-primary-300;
        }
    }
}

/* DARK THEME */
.dark {
    .ivf-btn {
        &--primary {
            color: $ivf-white;
            background-color: $ivf-primary-400;
    
            &:hover {
                background-color: $ivf-primary-300;
                color: $ivf-white;
            }
        }

        &--secondary {
            color: $ivf-tertiary-300;
            background-color: $ivf-tertiary-900;
            border: 1px solid $ivf-tertiary-400;
    
            &:hover {
                background-color: $ivf-tertiary-600;
                color: $ivf-tertiary-50;
            }
        }

        &--tertiary {
            color: $ivf-tertiary-300;
    
            &:hover {
                color: $ivf-tertiary-50;
            }
        }
    }
}
```

## Sizes

<div>
<button class="ivf-btn ivf-btn--primary ivf-btn--small">Small</button>
<button class="ivf-btn ivf-btn--primary">Base</button>
<button class="ivf-btn ivf-btn--primary ivf-btn--large">Large</button>
</div>

```HTML
<button class="ivf-btn ivf-btn--primary ivf-btn--small">Small</button>
<button class="ivf-btn ivf-btn--primary">Base</button>
<button class="ivf-btn ivf-tn--primary ivf-btn--large">Large</button>
```

```SCSS
.btn {
    &--small {
        padding: $ivf-spacing-xxs $ivf-spacing-sm;
    }

    &--large {
        padding: $ivf-spacing-sm $ivf-spacing-lg;
    }
}
```

## States

### Disabled

<button class="ivf-btn ivf-btn--primary is-disabled">Disabled</button>

```HTML
<button class="ivf-btn ivf-btn--primary is-disabled">Disabled</button>
```

```SCSS
.ivf-btn--primary.is-disabled {
    cursor: not-allowed;
    background-color: $ivf-primary-200;

    &:hover {
        background-color: $ivf-primary-200;
    }
}
```

### Active

## Icon Buttons

### Icon & Text

<button class="ivf-btn ivf-btn--primary">
<svg width="auto" height="24px" style="padding: 5px 0;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg></button>

### Icon Only

