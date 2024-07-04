---
outline: deep
---

<style>
    @import './../../src/scss/_border-radius.scss';
    @import './../../src/scss/_box-shadows.scss';
    .box-shadow-container {
        width: 100%;
        max-width: 12rem;
        height: 12rem;
        border-radius: $ivf-rounded-base;
    }

    .shadow-sm {
            box-shadow: $ivf-shadow-sm;
        }

        .shadow-md {
            box-shadow: $ivf-shadow-md;
        }

        .shadow-lg {
            box-shadow: $ivf-shadow-lg;
        }

        .shadow-xl {
            box-shadow: $ivf-shadow-xl;
        }
</style>

# Box Shadows

## Overview 

<br>
<div style="display: flex; flex-direction: row; gap: var(--spacing-lg)">
<div class="box-shadow-container shadow-sm">
</div>
<div class="box-shadow-container shadow-md"></div>
<div class="box-shadow-container shadow-lg"></div>
<div class="box-shadow-container shadow-xl"></div>
</div>

```CSS
:root {
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); 
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); 
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); 

--shadow-card: var(--shadow-sm);
--shadow-dialog: var(--shadow-md);
}
```

## Usage

### Cards

<div class="box-shadow-container shadow-sm"></div>

```CSS
var(--shadow-card);
```

### Dialogs

<div class="box-shadow-container shadow-md"></div>

```CSS
var(--shadow-dialog);
```