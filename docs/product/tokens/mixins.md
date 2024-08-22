---
outline: deep
---

<style>
    @import './../../dist/css/main.css';
</style>

# Mixins

## Layout

## Typography

```SCSS
@mixin ivf-base-font {
  font-family: $ivf-font-family;
}

@mixin ivf-base-text {
  @include ivf-base-font;
  font-size: $ivf-font-size-base;
  color: $ivf-text-primary;
}
```

## Transitions

```SCSS
@mixin transition($properties...) {
  @each $property in $properties {
    transition: $property 0.3s ease;
  }
}
```
