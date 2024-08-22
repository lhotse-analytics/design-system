---
outline: deep
---

<style>
    .box-shadow-container {
        width: 100%;
        max-width: 12rem;
        max-height: 12rem;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
    }

    .shadow-sm {
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        }

        .shadow-md {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        .shadow-lg {
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }

        .shadow-xl {
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
</style>

# Box Shadows

## Overview 

<br>
<div style="display: flex; flex-direction: row; gap: 1rem">
<div class="box-shadow-container shadow-sm">
</div>
<div class="box-shadow-container shadow-md"></div>
<div class="box-shadow-container shadow-lg"></div>
<div class="box-shadow-container shadow-xl"></div>
</div>

```SCSS
$ivf-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
$ivf-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
$ivf-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
$ivf-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

$ivf-shadow-card: $ivf-shadow-sm;
$ivf-shadow-dialog: $ivf-shadow-md;
```

## Usage

### Cards

<div class="box-shadow-container shadow-sm"></div>

```SCSS
$ivf-shadow-card: $ivf-shadow-sm;
```

### Dialogs

<div class="box-shadow-container shadow-md"></div>

```SCSS
$ivf-shadow-dialog: $ivf-shadow-md;
```