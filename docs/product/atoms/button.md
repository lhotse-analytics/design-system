---
outline: deep
---

<style>
    @import './../../dist/css/main.css'
</style>

# Primary

<button class="btn btn--primary">Click here</button>

```HTML
<button class="btn btn--primary">Click here</button>
```

<button class="btn btn--secondary">Click here</button>

```HTML
<button class="btn btn--secondary">Click here</button>
```

<button class="btn btn--primary is-disabled">Click here</button>

```SCSS
/* Base */
button {
    border-radius: $rounded-base;
    font-family: $font-family;
    font-size: $font-size-btn;
    border: 1px solid;
}

/* Modules */
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