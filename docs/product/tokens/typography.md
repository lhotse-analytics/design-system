---
outline: deep
---

<style>
    @import './../../dist/css/main.css'
</style>

# Typography

## General Variables

### Font Family

Lexend, sans-serif

```SCSS
$font-family: "Lexend", sans-serif;
```

### Font Sizes

#### Variables

```SCSS
$font-size-xxs: 0.5rem;         // 8px
$font-size-xs: 0.625rem;        // 10px
$font-size-sm: 0.75rem;         // 12px
$font-size-base: 0.875rem;      // 14px
$font-size-md: 1rem;            // 16px
$font-size-lg: 1.125rem;        // 18px
$font-size-xl: 1.25rem;         // 20px
$font-size-2xl: 1.5rem;         // 24px
$font-size-3xl: 1.875rem;       // 30px
$font-size-4xl: 2.25rem;        // 36px
```

#### Examples

<span style="font-size: 0.5rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-xxs
```

<span style="font-size: 0.625rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-xs
```

<span style="font-size: 0.75rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-sm
```

<span style="font-size: 0.875rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-xxs
```

<span style="font-size: 1rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-md
```

<span style="font-size: 1.125rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-lg
```

<span style="font-size: 1.25rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-xl
```

<span style="font-size: 1.5rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-2xl
```

<span style="font-size: 1.875rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-3xl
```

<span style="font-size: 2.25rem;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-size-4xl
```

### Font Weights

#### Variables

```SCSS
$font-weight-light: 300;
$font-weight-base: 400;
$font-weight-bold: 600;
```

#### Examples

<span style="font-weight: 300;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-weight-light;
```

<span style="font-weight: 400;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-weight-base;
```

<span style="font-weight: 600;">Lorem Ipsum Dolor sit Amet</span>

```SCSS
$font-weight-bold;
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

```CSS
body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-base);
    color: var(--text-primary);
}

h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-large);
}
    
h1 {
    font-size: var(--font-size-xl);
}

h2 {
    font-size: var(--font-size-lg);
}

h3 {
    font-size: var(--font-size-md)
}

h4, h5, h6 {
    font-size: var(--font-size-base);
}

p {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
}
```