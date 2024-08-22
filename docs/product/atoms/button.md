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
  @include transition(all);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: $ivf-spacing-xs $ivf-spacing-md;
  cursor: pointer;
  gap: $ivf-spacing-xs;
  line-break: strict;
  border-radius: $ivf-rounded-base;
  border: 0;
}
```

## Colors

<div style="display: flex; gap: 1rem;">
<button class="ivf-btn ivf-btn--primary"><span class="ivf-btn__text">Primary Button</span></button>
<button class="ivf-btn ivf-btn--secondary"><span class="ivf-btn__text">Secondary Button</span></button>
<button class="ivf-btn ivf-btn--tertiary"><span class="ivf-btn__text">Tertiary Button</span></button>
</div>

```HTML

<button class="ivf-btn ivf-btn--primary"><span class="ivf-btn__text">Primary Button</span></button>
<button class="ivf-btn ivf-btn--secondary"><span class="ivf-btn__text">Secondary Button</span></button>
<button class="ivf-btn ivf-btn--tertiary"><span class="ivf-btn__text">Tertiary Button</span></button>
```

```SCSS
/* LIGHT THEME */
.ivf-btn {
  /* Modules */
  &--primary {
    color: $ivf-white;
    background-color: $ivf-primary;

    &:hover {
      background-color: $ivf-primary-600;
    }
  }

  &--secondary {
    color: $ivf-text-primary;
    background-color: $ivf-white;
    border: 1px solid $ivf-tertiary-200;

    &:hover {
      background-color: $ivf-tertiary-50;
      color: $ivf-primary;
    }
  }

  &--tertiary {
    color: $ivf-primary;
    background-color: transparent;

    &:hover {
      color: $ivf-primary-600;
    }
  }

  &--small {
    padding: $ivf-spacing-xxs $ivf-spacing-sm;
  }

  &--large {
    padding: $ivf-spacing-sm $ivf-spacing-lg;
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

<div style="display: flex; gap: 1rem;">
<div>
<button class="ivf-btn ivf-btn--primary ivf-btn--small">Small</button>
</div>
<div>
<button class="ivf-btn ivf-btn--primary">Base</button>
</div>
<div>
<button class="ivf-btn ivf-btn--primary ivf-btn--large">Large</button>
</div>
</div>

```HTML

<button class="ivf-btn ivf-btn--primary ivf-btn--small"><span class="ivf-btn__text">Small</span></button>
<button class="ivf-btn ivf-btn--primary"><span class="ivf-btn__text">Base</span></button>
<button class="ivf-btn ivf-tn--primary ivf-btn--large"><span class="ivf-btn__text">Large</span></button>
```

```SCSS
.ivf-btn {
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
<br>
<button class="ivf-btn ivf-btn--primary">
    <svg class="ivf-btn__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
    </svg>
    <span class="ivf-btn__text">Icon Button</span>
</button>

```HTML
<button class="ivf-btn ivf-btn--primary">
    <svg class="ivf-btn__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
    </svg>
    <span class="ivf-btn__text">Icon Button</span>
</button>
```

```SCSS
/* Elements */
  &__text {
    font-family: $ivf-font-family;
    font-size: $ivf-font-size-btn;
  }

  &__icon {
    width: auto;
    height: $ivf-spacing-lg;
  }
```

### Icon Only
<br>
<button class="ivf-btn ivf-btn--primary">
    <svg class="ivf-btn__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
    </svg>
</button>

```HTML
<button class="ivf-btn ivf-btn--primary">
    <svg class="ivf-btn__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
    </svg>
</button>
```