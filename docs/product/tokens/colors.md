---
outline: deep
---

<style>
    .color-wrapper {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .color-card {
        text-align: center;
        width: 100%;
        padding: 8px 0;
    }
</style>

# Colors

## Main Colors

### Primary

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #DAE3FF; font-size: 0.75rem;color: black;">primary-50</div>
<div class="color-card" style="background-color: #A9B9EB; font-size: 0.75rem;color: black;">primary-100</div>
<div class="color-card" style="background-color: #7991D9; font-size: 0.75rem;color: black;">primary-200</div>
<div class="color-card" style="background-color: #3C5EC7; font-size: 0.75rem; color: white;">primary-300</div>
<div class="color-card" style="background-color: #002AA7; font-size: 0.75rem;color: white;">primary-400</div>
<div class="color-card" style="background-color: #001D74; font-size: 0.75rem;color: white;">primary-600</div>
<div class="color-card" style="background-color: #001042; font-size: 0.75rem;color: white;">primary-900</div>
</div>

```SCSS
$ivf-primary-50: #DAE3FF;
$ivf-primary-100: #A9B9EB;
$ivf-primary-200: #7991D9;
$ivf-primary-300: #3C5EC7;
$ivf-primary-400: #002AA7;
$ivf-primary-600: #001D74;
$ivf-primary-900: #001042;

$ivf-primary: $ivf-primary-400;
```

### Secondary

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FFF0E3; font-size: 0.75rem;color: black;">secondary-100</div>
<div class="color-card" style="background-color: #F7D8BC; font-size: 0.75rem;color: black;">secondary-200</div>
<div class="color-card" style="background-color: #E5B58A; font-size: 0.75rem; color: black;">secondary-300</div>
<div class="color-card" style="background-color: #CA9466; font-size: 0.75rem;color: black;">secondary-400</div>
<div class="color-card" style="background-color: #8D6747; font-size: 0.75rem;color: white;">secondary-600</div>
</div>

```SCSS
$ivf-secondary-100: #FFF0E3;
$ivf-secondary-200: #F7D8BC;
$ivf-secondary-300: #E5B58A;
$ivf-secondary-400: #CA9466;
$ivf-secondary-600: #8D6747;

$ivf-secondary: $ivf-secondary-400;
```

### Tertiary

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FAFAFA; font-size: 0.75rem;color: black;">tertiary-50</div>
<div class="color-card" style="background-color: #ECECEC; font-size: 0.75rem;color: black;">tertiary-100</div>
<div class="color-card" style="background-color: #D0D0D0; font-size: 0.75rem;color: black;">tertiary-200</div>
<div class="color-card" style="background-color: #AEAEAE; font-size: 0.75rem; color: black;">tertiary-300</div>
<div class="color-card" style="background-color: #737373; font-size: 0.75rem;color: white;">tertiary-400</div>
<div class="color-card" style="background-color: #454545; font-size: 0.75rem;color: white;">tertiary-600</div>
<div class="color-card" style="background-color: #171717; font-size: 0.75rem;color: white;">tertiary-900</div>
</div>

```SCSS
$ivf-white: #fff;
$ivf-tertiary-50: #FAFAFA;
$ivf-tertiary-100: #ECECEC;
$ivf-tertiary-200: #D0D0D0;
$ivf-tertiary-300: #AEAEAE;
$ivf-tertiary-400: #737373;
$ivf-tertiary-600: #454545;
$ivf-tertiary-900: #171717;
```

## Highlight Colors

### Red

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FDE8E8; font-size: 0.75rem;color: black;">highlight-red-50</div>
<div class="color-card" style="background-color: #F8B4B4; font-size: 0.75rem;color: black;">highlight-red-200</div>
<div class="color-card" style="background-color: #F05252; font-size: 0.75rem;color: white;">highlight-red-400</div>
<div class="color-card" style="background-color: #C81E1E; font-size: 0.75rem;color: white;">highlight-red-600</div>
</div>

```SCSS
$ivf-highlight-red-50: #FDE8E8;
$ivf-highlight-red-200: #F8B4B4;
$ivf-highlight-red-400: #F05252;
$ivf-highlight-red-600: #C81E1E;
```

### Green

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #DEF7EC; font-size: 0.75rem;color: black;">highlight-green-50</div>
<div class="color-card" style="background-color: #84E1BC; font-size: 0.75rem;color: black;">highlight-green-200</div>
<div class="color-card" style="background-color: #0E9F6E; font-size: 0.75rem;color: white;">highlight-green-400</div>
<div class="color-card" style="background-color: #046C4E; font-size: 0.75rem;color: white;">highlight-green-600</div>
</div>

```SCSS
$ivf-highlight-green-50: #DEF7EC;
$ivf-highlight-green-200: #84E1BC;
$ivf-highlight-green-400: #0E9F6E;
$ivf-highlight-green-600: #046C4E;
```

### Yellow

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FDF6B2; font-size: 0.75rem;color: black;">highlight-yellow-50</div>
<div class="color-card" style="background-color: #FCE96A; font-size: 0.75rem;color: black;">highlight-yellow-200</div>
<div class="color-card" style="background-color: #FACA15; font-size: 0.75rem;color: black;">highlight-yellow-400</div>
<div class="color-card" style="background-color: #C27803; font-size: 0.75rem;color: white;">highlight-yellow-600</div>
</div>

```SCSS
$ivf-highlight-yellow-50: #FDF6B2;
$ivf-highlight-yellow-200: #FCE96A;
$ivf-highlight-yellow-400: #FACA15;
$ivf-highlight-yellow-600: #C27803;
```

### Pink

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FCE8F3; font-size: 0.75rem;color: black;">highlight-pink-50</div>
<div class="color-card" style="background-color: #E74694; font-size: 0.75rem;color: white;">highlight-pink-400</div>
</div>

```SCSS
$ivf-highlight-pink-50: #FCE8F3;
$ivf-highlight-pink-400: #E74694;
```

### Purple

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #EDEBFE; font-size: 0.75rem;color: black;">highlight-purple-50</div>
<div class="color-card" style="background-color: #9061F9; font-size: 0.75rem;color: white;">highlight-purple-400</div>
</div>

```SCSS
$ivf-highlight-purple-50: #EDEBFE;
$ivf-highlight-purple-400: #9061F9;
```

### Indigo

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #E5EDFF; font-size: 0.75rem;color: black;">highlight-indigo-50</div>
<div class="color-card" style="background-color: #5850EC; font-size: 0.75rem;color: white;">highlight-indigo-400</div>
</div>

```SCSS
$ivf-highlight-indigo-50: #E5EDFF;
$ivf-highlight-indigo-400: #5850EC;
```

### Teal

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #D5F5F6; font-size: 0.75rem;color: black;">highlight-teal-50</div>
<div class="color-card" style="background-color: #16BDCA; font-size: 0.75rem;color: white;">highlight-teal-400</div>
</div>

```SCSS
$ivf-highlight-teal-50: #D5F5F6;
$ivf-highlight-teal-400: #16BDCA;
```

### Orange

<br>
<div class="color-wrapper">
<div class="color-card" style="background-color: #FEECDC; font-size: 0.75rem;color: black;">highlight-orange-50</div>
<div class="color-card" style="background-color: #FF8A4C; font-size: 0.75rem;color: white;">highlight-orange-400</div>
</div>

```SCSS
$ivf-highlight-orange-50: #FEECDC;
$ivf-highlight-orange-400: #FF8A4C;
```

## Theming

### Typography

```SCSS
$ivf-text-primary: $ivf-tertiary-900;
$ivf-text-danger: $ivf-highlight-red-600;
$ivf-text-warning: $ivf-highlight-yellow-600;
$ivf-text-success: $ivf-highlight-green-600;
$ivf-text-info: $ivf-primary-600;
```

### Background Colors

```SCSS
$ivf-background-primary: $ivf-white;
$ivf-background-secondary: $ivf-tertiary-50;
$ivf-background-danger: $ivf-highlight-red-50;
$ivf-background-warning: $ivf-highlight-yellow-50;
$ivf-background-success: $ivf-highlight-green-50;
$ivf-background-info: $ivf-primary-50;
```