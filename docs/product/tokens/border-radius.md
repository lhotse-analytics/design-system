---
outline: deep
---

<style>
    .box-shadow-container {
        width: 100%;
        max-width: 12rem;
        max-height: 12rem;
        aspect-ratio: 1 / 1;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
</style>

# Box Shadows

## Overview 

<div style="display: flex; justify-content: space-between; gap: 16px;">
<div class="box-shadow-container" style="border-radius: 4px;"></div>
<div class="box-shadow-container" style="border-radius: 8px;"></div>
<div class="box-shadow-container" style="border-radius: 16px;"></div>
<div class="box-shadow-container" style="border-radius: 9999px;"></div>
</div>

```SCSS
$ivf-rounded-sm: 4px;
$ivf-rounded-base: 8px;
$ivf-rounded-lg: 16px;
$ivf-rounded-full: 9999px;
```