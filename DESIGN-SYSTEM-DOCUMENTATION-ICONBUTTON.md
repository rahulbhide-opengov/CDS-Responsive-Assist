# IconButton Component Documentation

## Overview
The IconButton component renders a clickable button represented by an icon only. It provides a compact way to trigger actions without text labels, ideal for toolbars, app bars, and space-constrained interfaces.

**Component Type:** Action Control
**Based on:** Material-UI (MUI) v6.1.0 IconButton
**Documentation:** [MUI IconButton API](https://mui.com/api/icon-button)

---

## Design Tokens

### Size Tokens
```typescript
// Small
'--component/icon-button/size-small/dimensions': '28px',
'--component/icon-button/size-small/icon-size': '20px',
'--component/icon-button/size-small/padding': '4px',

// Medium (Default)
'--component/icon-button/size-medium/dimensions': '32px',
'--component/icon-button/size-medium/icon-size': '24px',
'--component/icon-button/size-medium/padding': '4px',

// Large
'--component/icon-button/size-large/dimensions': '40px',
'--component/icon-button/size-large/icon-size': '32px',
'--component/icon-button/size-large/padding': '4px',
```

### Color Tokens
```typescript
// Default
'--component/icon-button/default/color': 'rgba(0, 0, 0, 0.54)',
'--component/icon-button/default/bg-hover': 'rgba(0, 0, 0, 0.04)',

// Primary
'--component/icon-button/primary/color': '#4b3fff',
'--component/icon-button/primary/bg-hover': 'rgba(75, 63, 255, 0.04)',

// Secondary
'--component/icon-button/secondary/color': '#dc004e',
'--component/icon-button/secondary/bg-hover': 'rgba(220, 0, 78, 0.04)',

// Error
'--component/icon-button/error/color': '#d32f2f',
'--component/icon-button/error/bg-hover': 'rgba(211, 47, 47, 0.04)',

// Warning
'--component/icon-button/warning/color': '#ed6c02',
'--component/icon-button/warning/bg-hover': 'rgba(237, 108, 2, 0.04)',

// Info
'--component/icon-button/info/color': '#0288d1',
'--component/icon-button/info/bg-hover': 'rgba(2, 136, 209, 0.04)',

// Success
'--component/icon-button/success/color': '#2e7d32',
'--component/icon-button/success/bg-hover': 'rgba(46, 125, 50, 0.04)',

// Inherit
'--component/icon-button/inherit/color': 'inherit',
'--component/icon-button/inherit-white/color': '#ffffff',

// Disabled
'--component/icon-button/disabled/color': 'rgba(0, 0, 0, 0.26)',
'--component/icon-button/disabled/bg': 'transparent',
```

### State Tokens
```typescript
'--component/icon-button/border-radius': '50%',
'--component/icon-button/focus-ring-color': '#4b3fff',
'--component/icon-button/focus-ring-width': '2px',
'--component/icon-button/ripple-duration': '550ms',
'--component/icon-button/transition-duration': '150ms',
```

---

## Size Variants

### Small
- **Dimensions:** 28×28px
- **Icon Size:** 20px
- **Padding:** 4px
- **Touch Target:** 28px (desktop only)
- **Use Case:** Compact toolbars, dense data tables, space-limited UIs

### Medium (Default)
- **Dimensions:** 32×32px
- **Icon Size:** 24px
- **Padding:** 4px
- **Touch Target:** 32px minimum
- **Use Case:** Standard interfaces, app bars, general UI

### Large
- **Dimensions:** 40×40px
- **Icon Size:** 32px
- **Padding:** 4px
- **Touch Target:** 40px (recommended for touch)
- **Use Case:** Accessibility-focused interfaces, mobile/tablet, touch devices

---

## Color Variants

### Default
- **Icon Color:** `rgba(0, 0, 0, 0.54)`
- **Hover BG:** `rgba(0, 0, 0, 0.04)`
- **Use Case:** Standard actions, neutral buttons

### Primary
- **Icon Color:** `#4b3fff`
- **Hover BG:** `rgba(75, 63, 255, 0.04)`
- **Use Case:** Primary actions, main navigation

### Secondary
- **Icon Color:** `#dc004e`
- **Hover BG:** `rgba(220, 0, 78, 0.04)`
- **Use Case:** Secondary actions, alternative emphasis

### Error
- **Icon Color:** `#d32f2f`
- **Hover BG:** `rgba(211, 47, 47, 0.04)`
- **Use Case:** Delete, remove, destructive actions

### Warning
- **Icon Color:** `#ed6c02`
- **Hover BG:** `rgba(237, 108, 2, 0.04)`
- **Use Case:** Caution actions, alerts

### Info
- **Icon Color:** `#0288d1`
- **Hover BG:** `rgba(2, 136, 209, 0.04)`
- **Use Case:** Information display, help actions

### Success
- **Icon Color:** `#2e7d32`
- **Hover BG:** `rgba(46, 125, 50, 0.04)`
- **Use Case:** Confirmation, success actions

### Inherit
- **Icon Color:** Inherits from parent
- **Use Case:** Adapts to context, flexible theming

### Inherit-White
- **Icon Color:** `#ffffff`
- **Use Case:** Dark backgrounds, overlays, images

---

## States

### 1. Enabled (Default)
- **Icon Color:** Based on color variant
- **Background:** Transparent
- **Border Radius:** 50% (circular)
- **Cursor:** pointer

### 2. Hovered
- **Background:** Color-specific hover background (4% opacity)
- **Icon Color:** Same as default
- **Border Radius:** 50%
- **Transition:** 150ms ease-in-out
- **Effect:** Circular highlight appears

### 3. Focused
- **Background:** Transparent
- **Focus Ring:** 2px solid `#4b3fff`
- **Icon Color:** Same as default
- **Keyboard:** Accessible via Tab
- **Outline:** Circular, 50% border radius

### 4. Pressed
- **Background:** Color-specific hover background (8% opacity)
- **Icon Color:** Same as default
- **Effect:** Ripple animation from touch/click point
- **Duration:** 550ms
- **Visual:** Darker background than hover

### 5. Disabled
- **Icon Color:** `rgba(0, 0, 0, 0.26)`
- **Background:** Transparent
- **Cursor:** not-allowed
- **Interaction:** None
- **Visual:** Significantly reduced opacity

---

## Icon Component

### Icon Sizes
- **Small:** 20×20px
- **Medium:** 24×24px (default)
- **Large:** 32×32px
- **Inherit:** 16×16px (inherits from context)

### Icon Types

#### SVG Icon
- **Format:** Inline SVG
- **Advantages:** Scalable, customizable, color-adaptive
- **Use Case:** Custom icons, branded icons
- **Example:** Material Icons, custom SVG assets

#### Font Icon
- **Format:** Icon font (ligatures or codepoints)
- **Advantages:** Simple integration, broad compatibility
- **Use Case:** Material Icons font, third-party icon fonts
- **Example:** Google Material Icons font

---

## Usage Guidelines

### When to Use
- Toolbar actions (edit, delete, share)
- App bar navigation (menu, search, account)
- Floating Action Button alternatives
- Card actions (favorite, bookmark)
- List item actions (expand, more options)
- Media controls (play, pause, volume)
- Compact action areas
- Icon-only navigation

### When NOT to Use
- Primary call-to-action (use Button with text)
- Ambiguous actions needing labels
- First-time user interfaces without context
- Complex multi-step actions
- When text is necessary for clarity
- Accessibility-critical actions without aria-label

### Best Practices

#### Do
- Always provide `aria-label` for screen readers
- Use recognizable, universal icons
- Provide tooltips for unclear actions
- Match icon size to button size
- Use consistent icon style throughout
- Ensure 48×48px minimum touch target on mobile
- Group related icon buttons logically
- Use color variants to indicate importance

#### Don't
- Use obscure or ambiguous icons without labels
- Mix different icon styles (outlined/filled)
- Use icon buttons for critical actions without confirmation
- Forget keyboard accessibility
- Use tiny icons (< 20px)
- Overcrowd with too many icon buttons
- Use icon buttons when text buttons are clearer
- Skip aria-label attributes

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus icon button
- **Enter/Space:** Activate button
- **Shift+Tab:** Navigate backward

#### Screen Readers
```html
<IconButton aria-label="Delete">
  <DeleteIcon />
</IconButton>

<IconButton aria-label="Add to favorites">
  <FavoriteIcon />
</IconButton>

<IconButton aria-label="Share" aria-describedby="share-tooltip">
  <ShareIcon />
</IconButton>
```

#### ARIA Attributes
```typescript
{
  "aria-label": string,         // Required: describes button action
  "aria-labelledby": string,    // Alternative to aria-label
  "aria-describedby": string,   // Additional context (tooltip ID)
  "aria-pressed": boolean,      // For toggle buttons
  "aria-expanded": boolean,     // For buttons opening menus
  "aria-haspopup": string,      // For buttons with popups
  "aria-disabled": boolean,     // Disabled state
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast minimum
- Circular focus outline matching button shape
- Focus visible on keyboard navigation only
- Focus ring uses primary color by default

#### Color Contrast
- **Icon (Enabled):** 3:1 minimum against background
- **Icon (Hover/Pressed):** Maintained 3:1 minimum
- **Focus Ring:** 3:1 minimum against background
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Small:** 28px (desktop only, too small for touch)
- **Medium:** 32px (minimum for touch, but 40px+ recommended)
- **Large:** 40px (recommended minimum for mobile/tablet)
- **Best Practice:** Use 48×48px on touch devices

---

## Code Examples

### Basic IconButton
```tsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicIconButton() {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
}
```

### Color Variants
```tsx
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';

export default function ColorIconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="default">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="primary">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="secondary">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="error" aria-label="error">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="warning" aria-label="warning">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="info" aria-label="info">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="success" aria-label="success">
        <FavoriteIcon />
      </IconButton>
    </Stack>
  );
}
```

### Size Variants
```tsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export default function SizeIconButtons() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton size="small" aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton size="medium" aria-label="delete">
        <DeleteIcon fontSize="medium" />
      </IconButton>
      <IconButton size="large" aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </Stack>
  );
}
```

### Disabled IconButton
```tsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DisabledIconButton() {
  return (
    <IconButton disabled aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
}
```

### With Tooltip
```tsx
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TooltipIconButton() {
  return (
    <Tooltip title="Delete">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
```

### Toggle IconButton
```tsx
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

export default function ToggleIconButton() {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <IconButton
      color={favorite ? 'error' : 'default'}
      aria-label="add to favorites"
      aria-pressed={favorite}
      onClick={() => setFavorite(!favorite)}
    >
      {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
```

### IconButton in App Bar
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function AppBarIconButtons() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="account">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
```

### Custom Icon Sizes
```tsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomSizeIconButton() {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use large size (40px minimum)
- Ensure 48×48px touch targets
- Provide visual feedback on tap
- Consider adding labels for clarity
- Space icon buttons adequately (8px+ gap)
- Avoid small size variant

### Tablet (600px - 960px)
- Use medium or large sizes
- Maintain 40×40px minimum touch targets
- Standard spacing between buttons
- Tooltips helpful but not required

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for dense UIs
- Hover states fully functional
- Tooltips recommended for clarity
- Mouse interactions expected

---

## Total Variant Combinations

**Base Combinations:**
- 3 sizes (small, medium, large)
- 9 color variants (default, primary, secondary, error, warning, info, success, inherit, inherit-white)
- 5 states (enabled, hovered, focused, pressed, disabled)

**Total:** 3 × 9 × 5 = **135 combinations**

---

## Related Components
- **Button:** Text-based action button
- **Fab:** Floating Action Button
- **ToggleButton:** Toggle selection button
- **ButtonGroup:** Grouped button container
- **Tooltip:** Contextual help overlay

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 18679:451813
- **Component:** `<IconButton>` and `<Icon>`
- **Documentation:** [MUI IconButton API](https://mui.com/api/icon-button)

---

## Migration Notes

### From Previous Design System
- Button dimensions standardized (28px, 32px, 40px)
- Icon sizes aligned with button sizes (20px, 24px, 32px)
- Border radius standardized to 50% (circular)
- Focus ring now uses primary color (#4b3fff)
- Hover backgrounds standardized to 4% opacity
- Pressed backgrounds standardized to 8% opacity
- Disabled color updated to 26% opacity
- Ripple animation duration standardized to 550ms
- Touch targets aligned with accessibility guidelines

### Design Tokens Required
- All color tokens (icon colors, hover backgrounds)
- Spacing tokens (4px padding)
- Border radius (50% for circular shape)
- Focus ring tokens (2px width, primary color)
- Transition timing (150ms, 550ms)
- Icon size tokens (20px, 24px, 32px)

---

## Performance Considerations

- IconButtons are lightweight (minimal DOM structure)
- Ripple effects use CSS animations (GPU-accelerated)
- SVG icons scale without quality loss
- Font icons load once and cache effectively
- Hover/focus states use CSS only (no JavaScript)
- Use React.memo for icon buttons in lists to prevent unnecessary re-renders

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 135 variant combinations documented
- Full accessibility compliance
