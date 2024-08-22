---
outline: deep
---

<style>
    @import './../../dist/css/main.css';
</style>

# Typography

## General Variables

### Font Family

Lexend, sans-serif

```SCSS
$ivf-font-family: "Lexend", sans-serif;
```

### Font Sizes

#### Variables

```SCSS
$ivf-font-size-xxs: 0.5rem;         // 8px
$ivf-font-size-xs: 0.625rem;        // 10px
$ivf-font-size-sm: 0.75rem;         // 12px
$ivf-font-size-base: 0.875rem;      // 14px
$ivf-font-size-md: 1rem;            // 16px
$ivf-font-size-lg: 1.125rem;        // 18px
$ivf-font-size-xl: 1.25rem;         // 20px
$ivf-font-size-2xl: 1.5rem;         // 24px
$ivf-font-size-3xl: 1.875rem;       // 30px
$ivf-font-size-4xl: 2.25rem;        // 36px
```

#### Examples

<span style="font-size: 0.5rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-xxs
```

<span style="font-size: 0.625rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-xs
```

<span style="font-size: 0.75rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-sm
```

<span style="font-size: 0.875rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-xxs
```

<span style="font-size: 1rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-md
```

<span style="font-size: 1.125rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-lg
```

<span style="font-size: 1.25rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-xl
```

<span style="font-size: 1.5rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-2xl
```

<span style="font-size: 1.875rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-3xl
```

<span style="font-size: 2.25rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-size-4xl
```

### Font Weights

#### Variables

```SCSS
$ivf-font-weight-light: 300;
$ivf-font-weight-base: 400;
$ivf-font-weight-bold: 600;
```

#### Examples

<span style="font-weight: 300;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-weight-light;
```

<span style="font-weight: 400;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-weight-base;
```

<span style="font-weight: 600;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$ivf-font-weight-bold;
```

### Line Heights

#### Variables

```SCSS
$line-height-small: 1rem;
$line-height-base: 1.25rem;
$line-height-large: 1.5rem;
```

#### Examples

<br>

<div style="line-height: 1rem;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```SCSS
$line-height-small
```

<br>

<div style="line-height: 1.25rem;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```SCSS
$line-height-base
```

<br>

<div style="line-height: 1.5rem;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```SCSS
$line-height-large
```

## Usage

```SCSS
body {
    font-family: $ivf-font-family;
    font-size: $ivf-font-size-base;
    font-weight: $ivf-font-weight-base;
    line-height: $line-height-base;
    color: $ivf-text-primary;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: $ivf-font-weight-bold;
    line-height: $line-height-large;
}
    
h1 {
    font-size: $ivf-font-size-xl;
}

h2 {
    font-size: $ivf-font-size-lg;
}

h3 {
    font-size: $ivf-font-size-md;
}

h4, h5, h6 {
    font-size: $ivf-font-size-base;
}

p {
    font-size: $ivf-font-size-base;
    line-height: $line-height-base;
}
```