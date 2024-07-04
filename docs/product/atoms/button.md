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
    .ivf-btn {
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
        padding: $spacing-xxs $spacing-sm;
    }

    &--large {
        padding: $spacing-sm $spacing-lg;
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
    background-color: $primary-200;

    &:hover {
        background-color: $primary-200;
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

