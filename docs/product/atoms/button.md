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

## Modules

<button class="btn btn--primary">Click here</button>
<button class="btn btn--secondary">Click here</button>

```HTML
<button class="btn btn--primary">Click here</button>
<button class="btn btn--secondary">Click here</button>
```

```SCSS
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
}
```

## States

### Disabled

<button class="btn btn--primary is-disabled">Click here</button>

```HTML
<button class="btn btn--primary is-disabled">Click here</button>
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

