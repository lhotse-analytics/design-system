---
outline: deep
---

# Typography

## General Variables

### Font Family

Lexend, sans-serif

```CSS
:root {
    --font-family: "Lexend", sans-serif;
    }
```

### Font Sizes

#### Variables

```SCSS
$font-size-xxs: 0.5rem;
$font-size-xs: 0.625rem;
$font-size-sm: 0.75rem;
$font-size-base: 0.875rem;
$font-size-md: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;
$font-size-2xl: 1.5rem;
$font-size-3xl: 1.875rem;
$font-size-4xl: 2.25rem;
```

#### Examples

<span class="span" style="font-size: var(--font-size-xxs);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-xxs)
```

<span class="span" style="font-size: var(--font-size-xs);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-xs)
```

<span class="span" style="font-size: var(--font-size-sm);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-sm)
```

<span class="span" style="font-size: var(--font-size-base);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-base)
```

<span class="span" style="font-size: var(--font-size-md);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-md)
```

<span class="span" style="font-size: var(--font-size-lg);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-lg)
```

<span class="span" style="font-size: var(--font-size-xl);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-xl)
```

<span class="span" style="font-size: var(--font-size-2xl);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-2xl)
```

<span class="span" style="font-size: var(--font-size-3xl);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-3xl)
```

<span class="span" style="font-size: var(--font-size-4xl);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-size-4xl)
```

### Font Weights

#### Variables

```CSS
:root {
    --font-weight-light: 300;
    --font-weight-base: 400;
    --font-weight-bold: 600;
    }
```

#### Examples

<span class="span" style="font-weight: var(--font-weight-light);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-weight-light);
```

<span class="span" style="font-weight: var(--font-weight-base);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-weight-base);
```

<span class="span" style="font-weight: var(--font-weight-bold);">Lorem Ipsum Dolor sit Amet</span>

```CSS
var(--font-weight-bold);
```

### Line Heights

#### Variables

```CSS
:root {
    --line-height-small: 1rem;
    --line-height-base: 1.25rem;
    --line-height-large: 1.5rem;
    }
```

#### Examples

<br>

<div class="span" style="line-height: var(--line-height-small)!important;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```CSS
var(--line-height-small);
```

<br>

<div class="span" style="line-height: var(--line-height-base)!important;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```CSS
var(--line-height-base);
```

<br>

<div class="span" style="line-height: var(--line-height-large)!important;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

```CSS
var(--line-height-large);
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