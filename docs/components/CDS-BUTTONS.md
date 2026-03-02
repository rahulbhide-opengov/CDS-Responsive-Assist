# CDS Buttons Documentation

Complete documentation for all CDS button components with design tokens, accessibility, and integration patterns.

## Table of Contents

1. [Button](#button)
2. [IconButton](#iconbutton)
3. [FAB (Floating Action Button)](#fab-floating-action-button)
4. [ButtonGroup](#buttongroup)
5. [ToggleButton](#togglebutton)
6. [LoadingButton](#loadingbutton)

---

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


---


# FAB (Floating Action Button) Component Documentation

## Overview
The FAB (Floating Action Button) represents the primary action on a screen. It appears in front of all screen content, typically as a circular shape with an icon at its center. Extended FABs include a text label alongside the icon for added context.

**Component Type:** Action Control
**Based on:** Material-UI (MUI) v6.1.0 Fab
**Documentation:** [MUI Fab API](https://mui.com/api/fab)

---

## Design Tokens

### Size Tokens - Round Variant
```typescript
// Large
'--component/fab/round/size-large/dimensions': '50px',
'--component/fab/round/size-large/icon-size': '24px',
'--component/fab/round/size-large/elevation': '6',

// Medium (Default)
'--component/fab/round/size-medium/dimensions': '40px',
'--component/fab/round/size-medium/icon-size': '24px',
'--component/fab/round/size-medium/elevation': '6',

// Small
'--component/fab/round/size-small/dimensions': '32px',
'--component/fab/round/size-small/icon-size': '20px',
'--component/fab/round/size-small/elevation': '6',
```

### Size Tokens - Extended Variant
```typescript
// Large
'--component/fab/extended/size-large/height': '50px',
'--component/fab/extended/size-large/min-width': '92px',
'--component/fab/extended/size-large/padding': '0 20px',
'--component/fab/extended/size-large/icon-size': '24px',
'--component/fab/extended/size-large/font-size': '15px',
'--component/fab/extended/size-large/gap': '8px',

// Medium (Default)
'--component/fab/extended/size-medium/height': '40px',
'--component/fab/extended/size-medium/min-width': '84px',
'--component/fab/extended/size-medium/padding': '0 16px',
'--component/fab/extended/size-medium/icon-size': '24px',
'--component/fab/extended/size-medium/font-size': '14px',
'--component/fab/extended/size-medium/gap': '8px',

// Small
'--component/fab/extended/size-small/height': '32px',
'--component/fab/extended/size-small/min-width': '77px',
'--component/fab/extended/size-small/padding': '0 12px',
'--component/fab/extended/size-small/icon-size': '20px',
'--component/fab/extended/size-small/font-size': '13px',
'--component/fab/extended/size-small/gap': '6px',
```

### Color Tokens
```typescript
// Primary
'--component/fab/primary/bg-color': '#4b3fff',
'--component/fab/primary/bg-hover': '#3d32cc',
'--component/fab/primary/text-color': '#ffffff',
'--component/fab/primary/icon-color': '#ffffff',

// Default
'--component/fab/default/bg-color': '#e0e0e0',
'--component/fab/default/bg-hover': '#d5d5d5',
'--component/fab/default/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/fab/default/icon-color': 'rgba(0, 0, 0, 0.54)',

// Secondary
'--component/fab/secondary/bg-color': '#dc004e',
'--component/fab/secondary/bg-hover': '#b00040',
'--component/fab/secondary/text-color': '#ffffff',
'--component/fab/secondary/icon-color': '#ffffff',

// Inherit
'--component/fab/inherit/bg-color': 'transparent',
'--component/fab/inherit/text-color': 'inherit',
'--component/fab/inherit/icon-color': 'inherit',

// Inherit (white)
'--component/fab/inherit-white/bg-color': 'transparent',
'--component/fab/inherit-white/text-color': '#ffffff',
'--component/fab/inherit-white/icon-color': '#ffffff',

// Disabled
'--component/fab/disabled/bg-color': 'rgba(0, 0, 0, 0.12)',
'--component/fab/disabled/text-color': 'rgba(0, 0, 0, 0.26)',
'--component/fab/disabled/icon-color': 'rgba(0, 0, 0, 0.26)',
```

### State Tokens
```typescript
'--component/fab/border-radius': '50%', // Round variant
'--component/fab/extended/border-radius': '24px', // Extended variant
'--component/fab/focus-ring-color': '#4b3fff',
'--component/fab/focus-ring-width': '2px',
'--component/fab/elevation-default': '6',
'--component/fab/elevation-hover': '8',
'--component/fab/elevation-pressed': '12',
'--component/fab/transition-duration': '250ms',
'--component/fab/ripple-duration': '550ms',
```

---

## Variant Types

### Round Variant (Icon Only)
- **Shape:** Circular
- **Content:** Icon only, no text
- **Border Radius:** 50% (fully round)
- **Use Case:** Primary screen action, compact representation
- **Sizes:** Large (50px), Medium (40px), Small (32px)

### Extended Variant (Icon + Text)
- **Shape:** Rounded rectangle
- **Content:** Icon + text label
- **Border Radius:** 24px
- **Use Case:** Primary action requiring text context
- **Sizes:** Large (50px height), Medium (40px height), Small (32px height)
- **Min Width:** Adjusts based on text length

---

## Size Variants

### Large
**Round:**
- **Dimensions:** 50×50px
- **Icon Size:** 24px
- **Touch Target:** 50px
- **Elevation:** 6dp
- **Use Case:** Hero actions, primary screen CTAs

**Extended:**
- **Height:** 50px
- **Min Width:** 92px
- **Padding:** 0 20px
- **Icon Size:** 24px
- **Font Size:** 15px
- **Gap:** 8px between icon and text
- **Use Case:** Primary labeled actions

### Medium (Default)
**Round:**
- **Dimensions:** 40×40px
- **Icon Size:** 24px
- **Touch Target:** 40px
- **Elevation:** 6dp
- **Use Case:** Standard FAB actions

**Extended:**
- **Height:** 40px
- **Min Width:** 84px
- **Padding:** 0 16px
- **Icon Size:** 24px
- **Font Size:** 14px
- **Gap:** 8px between icon and text
- **Use Case:** Standard labeled actions

### Small
**Round:**
- **Dimensions:** 32×32px
- **Icon Size:** 20px
- **Touch Target:** 32px (desktop only)
- **Elevation:** 6dp
- **Use Case:** Compact interfaces, secondary FABs

**Extended:**
- **Height:** 32px
- **Min Width:** 77px
- **Padding:** 0 12px
- **Icon Size:** 20px
- **Font Size:** 13px
- **Gap:** 6px between icon and text
- **Use Case:** Compact labeled actions

---

## Color Variants

### Primary
- **Background:** `#4b3fff`
- **Hover BG:** `#3d32cc`
- **Text/Icon:** `#ffffff`
- **Elevation:** 6dp → 8dp on hover
- **Use Case:** Primary screen action, most important button

### Default
- **Background:** `#e0e0e0`
- **Hover BG:** `#d5d5d5`
- **Text:** `rgba(0, 0, 0, 0.87)`
- **Icon:** `rgba(0, 0, 0, 0.54)`
- **Use Case:** Secondary FAB, less emphasis

### Secondary
- **Background:** `#dc004e`
- **Hover BG:** `#b00040`
- **Text/Icon:** `#ffffff`
- **Elevation:** 6dp → 8dp on hover
- **Use Case:** Secondary accent action

### Inherit
- **Background:** Transparent
- **Text/Icon:** Inherits from parent
- **Use Case:** Adapts to context, overlays

### Inherit (White)
- **Background:** Transparent
- **Text/Icon:** `#ffffff`
- **Use Case:** Dark backgrounds, image overlays, videos

---

## States

### 1. Enabled (Default)
- **Elevation:** 6dp shadow
- **Background:** Color-specific
- **Icon/Text:** Color-specific
- **Cursor:** pointer
- **Visual:** Floating appearance above content

### 2. Hovered
- **Elevation:** 8dp shadow (increased)
- **Background:** Darker shade of base color
- **Icon/Text:** Same as default
- **Transition:** 250ms ease-in-out
- **Visual:** Lifts higher, appears closer to user

### 3. Focused
- **Elevation:** 6dp shadow
- **Focus Ring:** 2px solid `#4b3fff`
- **Background:** Same as default
- **Icon/Text:** Same as default
- **Keyboard:** Accessible via Tab
- **Outline:** Visible focus indicator

### 4. Pressed
- **Elevation:** 12dp shadow (maximum)
- **Background:** Darkest shade of base color
- **Icon/Text:** Same as default
- **Ripple:** Ripple animation from touch/click point
- **Duration:** 550ms
- **Visual:** Maximum elevation, immediate feedback

### 5. Disabled
- **Elevation:** 0dp (no shadow)
- **Background:** `rgba(0, 0, 0, 0.12)`
- **Icon/Text:** `rgba(0, 0, 0, 0.26)`
- **Cursor:** not-allowed
- **Interaction:** None
- **Visual:** Flat appearance, low opacity

---

## Usage Guidelines

### When to Use
- Primary action on a screen
- Add/create new content (e.g., compose, add item)
- Initiate most common user action
- Persistent primary action across screen
- Navigation to key destinations
- Quick actions in context

### When NOT to Use
- More than one FAB per screen (use regular Button)
- Destructive actions (use Button with confirmation)
- Minor or secondary actions
- Navigation between sibling pages (use Tabs)
- Actions already in app bar
- When regular Button is more appropriate

### Best Practices

#### Do
- Use FAB for the single most important action
- Position FAB consistently (bottom-right corner)
- Use clear, recognizable icons
- Provide aria-label for accessibility
- Animate FAB appearance with scale/fade
- Use Extended FAB when label adds clarity
- Keep FAB visible when scrolling (persistent)
- Use appropriate size for context

#### Don't
- Use multiple FABs on one screen
- Block important content with FAB
- Use FAB for destructive actions
- Change FAB position unpredictably
- Use unclear or ambiguous icons
- Make FAB too small for touch (min 40px)
- Use FAB for secondary actions
- Animate FAB excessively

---

## Positioning

### Standard Placement
- **Bottom-Right:** Most common (16-24px margin)
- **Bottom-Center:** Mobile, single primary action
- **Top-Right:** Contextual to content above
- **Floating:** Above all content, z-index elevation

### Responsive Positioning
- **Mobile:** Bottom-center or bottom-right, 16px margin
- **Tablet:** Bottom-right, 24px margin
- **Desktop:** Bottom-right, 24px margin, can be larger

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus FAB
- **Enter/Space:** Activate FAB
- **Shift+Tab:** Navigate backward

#### Screen Readers
```html
<Fab aria-label="Add new item">
  <AddIcon />
</Fab>

<Fab variant="extended" aria-label="Compose new message">
  <NavigationIcon />
  Compose
</Fab>
```

#### ARIA Attributes
```typescript
{
  role: "button",
  "aria-label": string,         // Required: describes action
  "aria-labelledby": string,    // Alternative to aria-label
  "aria-describedby": string,   // Additional context
  "aria-disabled": boolean,     // Disabled state
  "aria-haspopup": string,      // If opens menu/dialog
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast minimum
- Circular focus outline for round FAB
- Rounded rectangle outline for extended FAB
- Focus visible on keyboard navigation only
- Focus ring uses primary color by default

#### Color Contrast
- **Text (Enabled):** 4.5:1 minimum
- **Icon (Enabled):** 3:1 minimum
- **Background vs Content:** 3:1 minimum
- **Focus Ring:** 3:1 minimum
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Large:** 50×50px (recommended for mobile)
- **Medium:** 40×40px (minimum for touch)
- **Small:** 32×32px (desktop only, too small for touch)
- **Best Practice:** Use 48×48px minimum on mobile

---

## Code Examples

### Basic Round FAB
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function BasicFab() {
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );
}
```

### Extended FAB
```tsx
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function ExtendedFab() {
  return (
    <Fab variant="extended" color="primary" aria-label="navigate">
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  );
}
```

### Size Variants
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function FabSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="large" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Stack>
  );
}
```

### Color Variants
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function ColorFabs() {
  return (
    <Stack direction="row" spacing={2}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <AddIcon />
      </Fab>
      <Fab color="default" aria-label="default">
        <AddIcon />
      </Fab>
      <Fab color="inherit" aria-label="inherit">
        <AddIcon />
      </Fab>
    </Stack>
  );
}
```

### Disabled FAB
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function DisabledFab() {
  return (
    <Fab disabled aria-label="add">
      <AddIcon />
    </Fab>
  );
}
```

### FAB with Fixed Position
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

export default function FixedFab() {
  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      {/* Page content */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
```

### Extended FAB Sizes
```tsx
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Stack from '@mui/material/Stack';

export default function ExtendedFabSizes() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" size="large" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Stack>
  );
}
```

### FAB with Action
```tsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export default function ActionFab() {
  const [count, setCount] = React.useState(0);

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => setCount(count + 1)}
    >
      <AddIcon />
    </Fab>
  );
}
```

---

## Animation

### Entrance Animation
```typescript
// Scale + Fade In
{
  transform: 'scale(0)',
  opacity: 0,
  transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms'
}
// To
{
  transform: 'scale(1)',
  opacity: 1
}
```

### Exit Animation
```typescript
// Scale + Fade Out
{
  transform: 'scale(1)',
  opacity: 1,
  transition: 'transform 195ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms'
}
// To
{
  transform: 'scale(0)',
  opacity: 0
}
```

### Scroll Behavior
- **Show on scroll up:** FAB appears
- **Hide on scroll down:** FAB disappears
- **Always visible:** FAB stays fixed

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large size (40-50px)
- Position bottom-center or bottom-right
- 16px margin from edges
- Extended FAB text may truncate
- Touch target minimum 48×48px

### Tablet (600px - 960px)
- Use medium or large size
- Position bottom-right
- 24px margin from edges
- Extended FAB full text visible
- Standard touch targets

### Desktop (> 960px)
- Any size appropriate
- Position bottom-right
- 24px margin from edges
- Hover states fully functional
- Mouse interactions expected
- Small size acceptable for secondary FABs

---

## Total Variant Combinations

**Base Combinations:**
- 2 variants (Round, Extended)
- 3 sizes (Small, Medium, Large)
- 5 colors (Primary, Default, Secondary, Inherit, Inherit-white)
- 5 states (Enabled, Hovered, Focused, Pressed, Disabled)

**Total:** 2 × 3 × 5 × 5 = **150 combinations**

---

## Related Components
- **Button:** Text-based action button
- **IconButton:** Icon-only button without elevation
- **SpeedDial:** FAB with multiple actions
- **ButtonGroup:** Grouped button container

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11012:145849
- **Component:** `<Fab>`
- **Documentation:** [MUI Fab API](https://mui.com/api/fab)

---

## Migration Notes

### From Previous Design System
- Round FAB sizes standardized (32px, 40px, 50px)
- Extended FAB sizes standardized with consistent height/padding
- Border radius updated: 50% for round, 24px for extended
- Focus ring now uses primary color (#4b3fff)
- Elevation levels standardized (6dp default, 8dp hover, 12dp pressed)
- Disabled state elevation reduced to 0dp
- Icon sizes aligned with button system (20px, 24px)
- Text-icon gap standardized (6px small, 8px medium/large)
- Transition duration unified to 250ms

### Design Tokens Required
- All color tokens (background, text, icon)
- Elevation tokens (6dp, 8dp, 12dp)
- Border radius tokens (24px, 50%)
- Spacing tokens (6px, 8px, 12px, 16px, 20px)
- Focus ring tokens (2px width, primary color)
- Transition timing (250ms, 550ms)
- Icon size tokens (20px, 24px)

---

## Performance Considerations

- FABs are lightweight (simple DOM structure)
- Elevation uses box-shadow (GPU-accelerated)
- Ripple effects use CSS animations (performant)
- Scale animations are GPU-accelerated
- Use React.memo for FABs in complex layouts
- Avoid unnecessary re-renders by memoizing onClick handlers

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 150 variant combinations documented
- Full accessibility compliance


---


# Button Group Component Documentation

## Overview
The Button Group component groups related buttons together with shared borders and consistent styling. It provides visual cohesion for multiple actions and saves space compared to individual buttons.

**Component Type:** Action Control
**Based on:** Material-UI (MUI) v6.1.0 ButtonGroup
**Documentation:** [MUI ButtonGroup API](https://mui.com/api/button-group)

---

## Design Tokens

### Spacing Tokens
```typescript
'--component/button-group/gap': '0px',
'--component/button-group/divider-width': '1px',
```

### Border Tokens
```typescript
'--component/button-group/border-radius': '4px',
'--component/button-group/border-width': '1px',
'--component/button-group/border-style': 'solid',
```

### Button Tokens (Inherit from Button component)
```typescript
'--component/button-group/height': '32px',
'--component/button-group/padding-x': '16px',
'--component/button-group/font-size': '14px',
'--component/button-group/font-weight': '500',
'--component/button-group/line-height': '24px',
```

---

## Variant Options

### Contained (Default)
- **Appearance:** Solid background fill
- **Elevation:** Subtle shadow (elevation 2)
- **Hover:** Darker background
- **Use Case:** Primary grouped actions, toolbars

### Outlined
- **Appearance:** Transparent background with border
- **Border:** 1px solid color
- **Hover:** Light background fill
- **Use Case:** Secondary actions, less emphasis

### Text
- **Appearance:** No background, no border
- **Text Color:** Colored text only
- **Hover:** Subtle background fill
- **Use Case:** Tertiary actions, minimal UI

---

## Color Variants

### Primary
- **Contained BG:** `#4b3fff`
- **Outlined Border:** `rgba(75, 63, 255, 0.5)`
- **Text Color:** `#4b3fff`

### Secondary
- **Contained BG:** `#dc004e`
- **Outlined Border:** `rgba(220, 0, 78, 0.5)`
- **Text Color:** `#dc004e`

### Error
- **Contained BG:** `#d32f2f`
- **Outlined Border:** `rgba(211, 47, 47, 0.5)`
- **Text Color:** `#d32f2f`

### Warning
- **Contained BG:** `#ed6c02`
- **Outlined Border:** `rgba(237, 108, 2, 0.5)`
- **Text Color:** `#ed6c02`

### Info
- **Contained BG:** `#0288d1`
- **Outlined Border:** `rgba(2, 136, 209, 0.5)`
- **Text Color:** `#0288d1`

### Success
- **Contained BG:** `#2e7d32`
- **Outlined Border:** `rgba(46, 125, 50, 0.5)`
- **Text Color:** `#2e7d32`

### Inherit
- **Color:** Inherits from parent
- **Use Case:** Adapts to context

---

## Orientation Options

### Horizontal (Default)
- **Layout:** Buttons arranged in a row
- **Dividers:** Vertical lines between buttons
- **Border Radius:** Left button (left corners), right button (right corners)
- **Use Case:** Toolbars, action bars, standard UI

### Vertical
- **Layout:** Buttons arranged in a column
- **Dividers:** Horizontal lines between buttons
- **Border Radius:** Top button (top corners), bottom button (bottom corners)
- **Use Case:** Sidebars, vertical menus, mobile layouts

---

## States

### 1. Default
- All buttons in normal state
- Consistent styling across group
- Visual unity with shared borders

### 2. Hover (Individual Button)
- Single button responds to hover
- Other buttons maintain default state
- Ripple effect on hover

### 3. Active/Pressed
- Individual button shows pressed state
- Darker appearance
- Immediate feedback

### 4. Disabled (Entire Group)
- All buttons disabled together
- Reduced opacity
- No interactions
- `disabled` prop on ButtonGroup

### 5. Disabled (Individual Button)
- Single button disabled
- Other buttons remain interactive
- Mixed state indication

---

## Usage Guidelines

### When to Use
- Grouping related actions (Copy, Cut, Paste)
- View mode toggles (List, Grid, Table)
- Text formatting tools (Bold, Italic, Underline)
- Zoom controls (+, Reset, -)
- Pagination controls (Previous, Page, Next)
- Split button alternatives
- Action toolbars

### When NOT to Use
- Unrelated actions (use separate buttons)
- Single button (use Button component)
- Toggle selections (use ToggleButtonGroup)
- Navigation between views (use Tabs)
- Radio button alternatives (use RadioGroup)
- More than 5-6 buttons (consider dropdown)

### Best Practices

#### Do
- Group 2-5 related actions
- Use consistent variant for all buttons
- Match button sizes within group
- Provide icons for better recognition
- Use horizontal orientation by default
- Maintain visual hierarchy
- Keep button widths similar
- Use for logically connected actions

#### Don't
- Mix different button variants in one group
- Use for unrelated actions
- Create groups with single button
- Mix different sizes within group
- Use for primary page actions
- Overcrowd with too many buttons (>6)
- Use when individual buttons are clearer

---

## Sizing

### Small
- **Height:** 28px
- **Padding:** 12px horizontal
- **Font Size:** 13px
- **Use Case:** Compact UIs, dense toolbars

### Medium (Default)
- **Height:** 32px
- **Padding:** 16px horizontal
- **Font Size:** 14px
- **Use Case:** Standard interfaces

### Large
- **Height:** 40px
- **Padding:** 20px horizontal
- **Font Size:** 15px
- **Use Case:** Touch interfaces, accessibility

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Navigate between buttons
- **Enter/Space:** Activate focused button
- **Arrow Keys:** Navigate within group (optional)

#### Screen Readers
```html
<ButtonGroup aria-label="Text formatting">
  <Button aria-label="Bold">B</Button>
  <Button aria-label="Italic">I</Button>
  <Button aria-label="Underline">U</Button>
</ButtonGroup>
```

#### ARIA Attributes
```typescript
{
  role: "group",
  "aria-label": string,        // Group description
  "aria-disabled": boolean,    // Entire group disabled
}
```

#### Individual Button ARIA
```typescript
{
  "aria-label": string,        // Button description
  "aria-pressed": boolean,     // For toggle behavior
  "aria-disabled": boolean,    // Individual button disabled
}
```

#### Color Contrast
- **Contained Text:** 4.5:1 minimum against background
- **Outlined Text:** 4.5:1 minimum
- **Text Variant:** 4.5:1 minimum
- **Borders:** 3:1 minimum
- **Focus Indicators:** 3:1 minimum

#### Touch Targets
- **Small:** 28px (desktop only)
- **Medium:** 32px minimum
- **Large:** 40px (recommended for touch)
- **Spacing:** Built-in through shared borders

---

## Code Examples

### Basic Button Group
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
```

### Outlined Button Group
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function OutlinedButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="Outlined button group">
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}
```

### Color Variants
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ColorButtonGroups() {
  return (
    <Stack spacing={2}>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="error">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </Stack>
  );
}
```

### Vertical Button Group
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function VerticalButtonGroup() {
  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      aria-label="Vertical button group"
    >
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  );
}
```

### With Icons
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function IconButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="Text formatting">
      <Button aria-label="Bold">
        <FormatBoldIcon />
      </Button>
      <Button aria-label="Italic">
        <FormatItalicIcon />
      </Button>
      <Button aria-label="Underlined">
        <FormatUnderlinedIcon />
      </Button>
    </ButtonGroup>
  );
}
```

### Disabled Button Group
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisabledButtonGroup() {
  return (
    <ButtonGroup variant="contained" disabled>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
```

### Size Variants
```tsx
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SizeButtonGroups() {
  return (
    <Stack spacing={2} alignItems="center">
      <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>

      <ButtonGroup size="medium">
        <Button>Medium</Button>
        <Button>Medium</Button>
      </ButtonGroup>

      <ButtonGroup size="large">
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>
    </Stack>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Prefer horizontal orientation
- Use medium or large size
- Limit to 2-3 buttons
- Consider stacking to separate buttons if space limited
- Ensure 44px minimum touch targets

### Tablet (600px - 960px)
- Horizontal or vertical orientation
- Medium size default
- Can accommodate 3-4 buttons
- Standard touch targets (40px+)

### Desktop (> 960px)
- Any orientation
- Small or medium size
- Can accommodate 4-6 buttons
- Hover states fully functional
- Mouse interactions

---

## Total Variant Combinations

**Base Combinations:**
- 2 orientations (horizontal, vertical)
- 3 variants (contained, outlined, text)
- 7 colors (primary, secondary, error, warning, info, success, inherit)
- 3 sizes (small, medium, large)

**Total:** 2 × 3 × 7 × 3 = **126 combinations**

---

## Related Components
- **Button:** Individual action buttons
- **ToggleButtonGroup:** Toggle selection group
- **Tabs:** Navigation between views
- **SegmentedControl:** iOS-style segmented picker
- **Toolbar:** Container for grouped actions

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 15636:9800
- **Component:** `<ButtonGroup>`
- **Documentation:** [MUI ButtonGroup API](https://mui.com/api/button-group)

---

## Migration Notes

### From Previous Design System
- Border radius standardized to 4px
- Divider width consistent at 1px
- Button heights aligned with standard sizes
- Color opacity values standardized
- Elevation levels aligned with design system
- Focus indicators improved

### Design Tokens Required
- All button color tokens
- Typography tokens (button styles)
- Spacing tokens (4px, 8px, 12px, 16px, 20px)
- Border radius (4px)
- Elevation tokens (elevation 2)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 126 variant combinations documented
- Full accessibility compliance


---


# Toggle Button Component Documentation

## Overview
The Toggle Button component allows users to select one or more options from a set of related choices with visual button-style controls. Unlike standard buttons, toggle buttons maintain their selected state and provide clear visual feedback.

**Component Type:** Selection Control
**Based on:** Material-UI (MUI) v6.1.0 ToggleButton & ToggleButtonGroup
**Documentation:** [MUI ToggleButton API](https://mui.com/api/toggle-button)

---

## Component Anatomy

### Base Structure
```
┌─────────────────────────────────┐
│    <ToggleButtonGroup>          │
│  ┌────┬────┬────┬────┐          │
│  │ TB │ TB │ TB │ TB │          │  (Horizontal)
│  └────┴────┴────┴────┘          │
│                                 │
│  ┌────┐                         │
│  │ TB │                         │
│  ├────┤                         │
│  │ TB │                         │  (Vertical)
│  ├────┤                         │
│  │ TB │                         │
│  └────┘                         │
└─────────────────────────────────┘

TB = Toggle Button
```

### Elements
1. **Button Container** - The clickable area with border and padding
2. **Icon** - Optional icon element (20px/24px/16px)
3. **Text Label** - Optional text content
4. **Selection Indicator** - Background color change when selected
5. **Focus Ripple** - Visual feedback for keyboard focus
6. **Border** - 1px divider between buttons in group

---

## Design Tokens

### Size Tokens - Large
```typescript
'--component/toggle-button/size-large/height': '56px',
'--component/toggle-button/size-large/padding': '16px',
'--component/toggle-button/size-large/icon-size': '24px',
'--component/toggle-button/size-large/font-size': '16px',
'--component/toggle-button/size-large/line-height': '26px',
'--component/toggle-button/size-large/gap': '8px',
```

### Size Tokens - Medium (Default)
```typescript
'--component/toggle-button/size-medium/height': '48px',
'--component/toggle-button/size-medium/padding': '12px',
'--component/toggle-button/size-medium/icon-size': '20px',
'--component/toggle-button/size-medium/font-size': '14px',
'--component/toggle-button/size-medium/line-height': '24px',
'--component/toggle-button/size-medium/gap': '8px',
```

### Size Tokens - Small
```typescript
'--component/toggle-button/size-small/height': '40px',
'--component/toggle-button/size-small/padding-x': '8px',
'--component/toggle-button/size-small/padding-y': '6px',
'--component/toggle-button/size-small/icon-size': '16px',
'--component/toggle-button/size-small/font-size': '12px',
'--component/toggle-button/size-small/line-height': '22px',
'--component/toggle-button/size-small/gap': '8px',
```

### Color Tokens - Unselected
```typescript
'--component/toggle-button/bg-color': 'transparent',
'--component/toggle-button/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/toggle-button/icon-color': 'rgba(0, 0, 0, 0.87)',
'--component/toggle-button/border-color': 'rgba(0, 0, 0, 0.12)',
```

### Color Tokens - Selected
```typescript
'--component/toggle-button/bg-color-selected': 'rgba(75, 63, 255, 0.08)',
'--component/toggle-button/text-color-selected': '#19009b',
'--component/toggle-button/icon-color-selected': '#19009b',
'--component/toggle-button/border-color-selected': 'rgba(75, 63, 255, 0.5)',
```

### Color Tokens - Hover
```typescript
'--component/toggle-button/bg-color-hover': 'rgba(0, 0, 0, 0.04)',
'--component/toggle-button/bg-color-hover-selected': 'rgba(75, 63, 255, 0.08)',
```

### Color Tokens - Focus
```typescript
'--component/toggle-button/focus-ring-color': 'rgba(0, 0, 0, 0.12)',
'--component/toggle-button/focus-ring-inset': '3.57%',
'--component/toggle-button/focus-ring-radius': '100px',
```

### Color Tokens - Disabled
```typescript
'--component/toggle-button/text-color-disabled': 'rgba(0, 0, 0, 0.38)',
'--component/toggle-button/icon-color-disabled': 'rgba(0, 0, 0, 0.38)',
'--component/toggle-button/bg-color-disabled-selected': 'rgba(75, 63, 255, 0.08)',
```

### Border Tokens
```typescript
'--component/toggle-button/border-width': '1px',
'--component/toggle-button/border-style': 'solid',
'--component/toggle-button/border-radius': '4px',
'--component/toggle-button/divider-color': 'rgba(0, 0, 0, 0.12)',
```

### Typography Tokens
```typescript
'--component/toggle-button/font-family': 'DM Sans',
'--component/toggle-button/font-weight': '500',
'--component/toggle-button/text-transform': 'none',
```

---

## Size Variants

### Large
- **Height:** 56px
- **Padding:** 16px
- **Icon Size:** 24px
- **Font Size:** 16px / Line Height: 26px
- **Min Width:** 56px (icon only)
- **Use Case:** Desktop applications, prominent toolbar controls
- **Touch Target:** 56px × 56px

### Medium (Default)
- **Height:** 48px
- **Padding:** 12px
- **Icon Size:** 20px
- **Font Size:** 14px / Line Height: 24px
- **Min Width:** 48px (icon only)
- **Use Case:** Standard UI controls, general forms
- **Touch Target:** 48px × 48px

### Small
- **Height:** 40px
- **Padding:** 8px × 6px (horizontal × vertical)
- **Icon Size:** 16px
- **Font Size:** 12px / Line Height: 22px
- **Min Width:** 32px (icon only)
- **Use Case:** Compact toolbars, dense layouts
- **Touch Target:** 40px × 40px

---

## Content Variants

### Icon Only
- Displays only an icon (most common)
- Square aspect ratio maintained
- Icon centered in button
- ARIA label required for accessibility

### Text Only
- Displays only text label
- Width adjusts to content
- Minimum 48px touch target maintained

### Icon + Text
- Icon on left, text on right
- 8px gap between icon and text
- Width adjusts to content

---

## States

### 1. Enabled (Default)
- **Background:** Transparent
- **Text/Icon:** `rgba(0, 0, 0, 0.87)`
- **Border:** `rgba(0, 0, 0, 0.12)` divider on right
- **Cursor:** pointer
- **Interaction:** Fully interactive

### 2. Hovered
- **Background:** `rgba(0, 0, 0, 0.04)` (unselected)
- **Background:** `rgba(75, 63, 255, 0.08)` (selected)
- **Text/Icon:** Same as enabled
- **Ripple:** Subtle background overlay
- **Cursor:** pointer
- **Transition:** 150ms ease

### 3. Focused
- **Focus Ring:** Visible oval shape
- **Ring Color:** `rgba(0, 0, 0, 0.12)`
- **Ring Position:** Inset 3.57% with rounded corners
- **Background:** Same as enabled
- **Keyboard:** Space or Enter key activates

### 4. Pressed
- **Focus Ring:** Expands to full button area
- **Ring Color:** `rgba(0, 0, 0, 0.12)`
- **Background:** Same as hover
- **Transition:** Immediate
- **Visual:** Button appears "pushed"

### 5. Disabled
- **Background:** Transparent (or selected bg if previously selected)
- **Text/Icon:** `rgba(0, 0, 0, 0.38)`
- **Border:** Same as enabled
- **Cursor:** not-allowed
- **Interaction:** No hover, focus, or click events
- **Opacity:** Reduced appearance

---

## Selection States

### Unselected (False)
- **Background:** Transparent (or hover color)
- **Text/Icon:** Primary text color `rgba(0, 0, 0, 0.87)`
- **Border:** Standard divider color
- **Visual:** Minimal emphasis

### Selected (True)
- **Background:** `rgba(75, 63, 255, 0.08)`
- **Text/Icon:** Primary dark color `#19009b`
- **Border:** Primary color `rgba(75, 63, 255, 0.5)` on group
- **Visual:** Clear selected state with color emphasis

---

## ToggleButtonGroup

### Purpose
Groups related toggle buttons together to:
- Enforce exclusive selection (radio button behavior)
- Allow multiple selections (checkbox behavior)
- Provide visual grouping with shared borders
- Maintain consistent spacing and alignment

### Anatomy
```
┌────────────────────────────────┐
│  ToggleButtonGroup             │
│  ┌───┬───┬───┬───┐             │
│  │ 1 │ 2 │ 3 │ 4 │  Horizontal │
│  └───┴───┴───┴───┘             │
│                                │
│  ┌───┐                         │
│  │ 1 │                         │
│  ├───┤                         │
│  │ 2 │    Vertical             │
│  ├───┤                         │
│  │ 3 │                         │
│  └───┘                         │
└────────────────────────────────┘
```

### Orientation Options

#### Horizontal (Default)
- Buttons arranged in a row
- Border-right dividers between buttons
- Full height maintained
- Auto width based on content
- Use Case: Toolbars, inline controls

#### Vertical
- Buttons arranged in a column
- Border-bottom dividers between buttons
- Full width maintained
- Auto height based on content
- Use Case: Sidebars, vertical navigation

### Selection Modes

#### Exclusive (Single Selection)
- Only one button can be selected at a time
- Radio button behavior
- Previous selection is cleared when new button selected
- `exclusive={true}` prop
- Use Case: View modes, alignment options, filter selection

#### Multiple Selection
- Multiple buttons can be selected simultaneously
- Checkbox group behavior
- Each button toggles independently
- `exclusive={false}` prop (default)
- Use Case: Text formatting, feature toggles

### ToggleButtonGroup Tokens
```typescript
'--component/toggle-button-group/border-width': '1px',
'--component/toggle-button-group/border-radius': '4px',
'--component/toggle-button-group/border-color': 'rgba(0, 0, 0, 0.12)',
'--component/toggle-button-group/border-color-selected': 'rgba(75, 63, 255, 0.5)',
'--component/toggle-button-group/divider-color': 'rgba(0, 0, 0, 0.12)',
```

---

## Total Variant Combinations

**Single Toggle Button:** 3 sizes × 5 states × 2 selected states × 3 content types = **90 variants**

**Toggle Button Group:** 3 sizes × 2 orientations × 2 selection modes × (2-4 buttons) = **48+ group configurations**

---

## Usage Guidelines

### When to Use
- Mutually exclusive view modes (list, grid, table)
- Text formatting options (bold, italic, underline)
- Alignment controls (left, center, right, justify)
- Filter toggles with visual button feedback
- Toolbar actions that maintain state
- Settings with multiple toggle options

### When NOT to Use
- Primary actions requiring confirmation (use Button)
- Single binary choices without visual grouping (use Switch)
- Long lists of options (use Select or Checkbox list)
- Navigation between pages (use Tabs)
- Actions that don't maintain state (use IconButton)

### Best Practices

#### Do
- Group related options together
- Use icons for quick recognition
- Provide tooltips for icon-only buttons
- Maintain consistent button sizes in a group
- Use exclusive selection for mutually exclusive options
- Ensure 48px minimum touch targets
- Provide clear selected state
- Use horizontal orientation for toolbars
- Limit groups to 3-5 buttons for clarity

#### Don't
- Mix different sizes in one group
- Use for primary page actions
- Create groups with single button
- Use unclear or ambiguous icons
- Stack multiple groups without spacing
- Use for critical destructive actions
- Mix toggle buttons with regular buttons in same group
- Use without labels if icons aren't universal

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus on button group
- **Arrow Keys:** Navigate between buttons in group (horizontal: left/right, vertical: up/down)
- **Space/Enter:** Toggle button selection
- **Shift+Tab:** Focus previous element

#### Screen Readers
```html
<ToggleButton
  value="left"
  aria-label="Align left"
  aria-pressed="true"
>
  <FormatAlignLeftIcon />
</ToggleButton>

<ToggleButtonGroup
  aria-label="Text alignment"
  exclusive
>
  {/* buttons */}
</ToggleButtonGroup>
```

#### Focus Management
- Clear focus indicator (focus ring)
- Focus ring minimum 3:1 contrast ratio
- Focus visible on keyboard navigation
- Focus ring inset with rounded corners

#### Color Contrast
- **Unselected Text/Icon:** 4.5:1 minimum (87% opacity)
- **Selected Text/Icon:** 4.5:1 minimum (dark primary)
- **Border/Dividers:** 3:1 minimum (12% opacity)
- **Selected Background:** Sufficient contrast with text
- **Disabled State:** Exempt from contrast requirements

#### Touch Targets
- **Large:** 56×56px
- **Medium:** 48×48px (minimum for mobile)
- **Small:** 40×40px (desktop only)
- **Spacing:** Minimum 8px between adjacent groups

#### ARIA Attributes
```typescript
{
  role: "group",                    // For ToggleButtonGroup
  "aria-label": string,             // Group description
  "aria-pressed": boolean,          // Toggle button pressed state
  "aria-disabled": boolean,         // Disabled state
  "aria-orientation": "horizontal" | "vertical",
}
```

#### Icon-Only Buttons
```html
<ToggleButton
  value="bold"
  aria-label="Bold text"
  aria-pressed={isBold}
>
  <FormatBoldIcon />
</ToggleButton>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use **Medium** or **Small** size
- Horizontal groups for most cases
- Consider vertical stacking for 4+ options
- Ensure 48×48px touch targets minimum
- Adequate spacing between button groups (16px+)
- Full-width groups for important controls

### Tablet (600px - 960px)
- Use **Medium** size (default)
- Horizontal orientation preferred
- Can accommodate 4-5 buttons per group
- 48×48px touch targets maintained
- 8px spacing between groups

### Desktop (> 960px)
- Use **Medium** or **Large** size
- Horizontal orientation most common
- Mouse interactions with hover states
- Keyboard navigation essential
- Can display multiple groups side-by-side
- Tooltip support on hover

### Breakpoint Tokens
```typescript
'--component/toggle-button/mobile-size': 'medium',
'--component/toggle-button/tablet-size': 'medium',
'--component/toggle-button/desktop-size': 'large',
'--component/toggle-button/mobile-orientation': 'horizontal',
'--component/toggle-button/group-spacing': '8px',
```

---

## Code Examples

### Basic Toggle Button
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

export default function BasicToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="left"
      selected={selected}
      onChange={() => setSelected(!selected)}
      aria-label="Align left"
    >
      <FormatAlignLeftIcon />
    </ToggleButton>
  );
}
```

### Toggle Button Group - Exclusive
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default function ExclusiveSelection() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="Text alignment"
    >
      <ToggleButton value="left" aria-label="Align left">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="Align center">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="Align right">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="Justify">
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

### Toggle Button Group - Multiple Selection
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function MultipleSelection() {
  const [formats, setFormats] = React.useState(() => ['bold']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="Text formatting"
    >
      <ToggleButton value="bold" aria-label="Bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="Italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="Underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

### Vertical Orientation
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="View mode"
    >
      <ToggleButton value="list" aria-label="List view">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="Module view">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="Quilt view">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

### Size Variants
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import Stack from '@mui/material/Stack';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  return (
    <Stack spacing={2}>
      <ToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={(e, value) => setAlignment(value)}
      >
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        size="medium"
        value={alignment}
        exclusive
        onChange={(e, value) => setAlignment(value)}
      >
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        size="large"
        value={alignment}
        exclusive
        onChange={(e, value) => setAlignment(value)}
      >
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
```

### Toggle Button with Text
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsWithText() {
  const [formats, setFormats] = React.useState(() => ['bold']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="Text formatting"
    >
      <ToggleButton value="bold" aria-label="Bold">
        Bold
      </ToggleButton>
      <ToggleButton value="italic" aria-label="Italic">
        Italic
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="Underlined">
        Underlined
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

### Disabled Toggle Buttons
```tsx
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

export default function DisabledToggleButton() {
  return (
    <ToggleButtonGroup aria-label="Text alignment">
      <ToggleButton value="left" disabled>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center">
        <FormatAlignLeftIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

---

## Related Components
- **Button:** Single action without state persistence
- **IconButton:** Icon-only action buttons without toggle state
- **Switch:** Binary on/off toggle for settings
- **Checkbox:** Multiple selections from a list
- **Radio:** Mutually exclusive selections
- **Tabs:** Navigation between views

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11022:146894
- **Component:** `<ToggleButton>` & `<ToggleButtonGroup>`
- **Documentation:** [MUI ToggleButton API](https://mui.com/api/toggle-button)

---

## Migration Notes

### From Previous Design System
- Height increased for better touch targets (40px → 48px for medium)
- Padding standardized across sizes
- Selected background opacity reduced from 12% to 8%
- Focus ring now uses rounded corners instead of sharp edges
- Border dividers now use consistent 12% opacity
- Disabled state no longer dims selected background
- Icon sizes aligned with other components (16px, 20px, 24px)

### Design Tokens Required
- All color tokens from the color palette (primary, text, action)
- Typography tokens (body1, body2, caption for different sizes)
- Spacing tokens (4px, 6px, 8px, 12px, 16px)
- Border radius token (4px)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 90 base variant combinations documented
- Full accessibility compliance


---


# Loading Button Component Documentation

## Overview
The Loading Button component extends the standard Button with integrated loading states and progress indicators. It displays a circular progress indicator and optionally disables user interaction during asynchronous operations, providing clear visual feedback for form submissions, data fetching, and async actions.

**Component Type:** Input / Action Component
**Based on:** Material-UI (MUI) Lab v5.0+ LoadingButton
**Package:** `@mui/lab/LoadingButton`
**Documentation:** [MUI LoadingButton API](https://mui.com/api/loading-button)

---

## Design Tokens

### Inherits All Button Tokens
LoadingButton inherits all design tokens from the standard Button component:
- Color variants (primary, secondary, error, success, warning, info)
- Size variants (small, medium, large)
- Style variants (contained, outlined, text)
- State tokens (default, hover, focus, active, disabled)

### Loading-Specific Tokens
```typescript
// Progress Indicator
'--component/loading-button/indicator-size-small': '18px',
'--component/loading-button/indicator-size-medium': '22px',
'--component/loading-button/indicator-size-large': '26px',

// Loading State
'--component/loading-button/loading-opacity': '0.6',
'--component/loading-button/disabled-opacity': '0.38',

// Position
'--component/loading-button/indicator-margin': 'var(--spacing/1, 4px)',
```

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/loading-button/transition-duration': 'var(--transition/duration/shortest, 150ms)',
'--component/loading-button/transition-easing': 'var(--transition/easing/ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
```

---

## Component Anatomy

### Loading Button Container
- **Base:** Extends Button component
- **States:** Normal, Loading, Disabled
- **Progress:** CircularProgress integrated
- **Content:** Label + Icon + Loader

### Loading Indicator
- **Component:** CircularProgress (small variant)
- **Size:** Matches button size (18px, 22px, 26px)
- **Color:** Inherits from button color
- **Position:** Start, end, or center (replaces content)

### Content States
- **Normal:** Full opacity, interactive
- **Loading:** Reduced opacity (60%), non-interactive
- **Disabled:** Low opacity (38%), non-interactive

---

## Loading Positions

### Start
- **Position:** Left side of button label
- **Use Case:** Loading before action execution
- **Label:** Remains visible
- **Common:** Form submissions, saves

### End
- **Position:** Right side of button label
- **Use Case:** Loading after action initiated
- **Label:** Remains visible
- **Common:** Load more, fetch data

### Center (Default)
- **Position:** Replaces button content
- **Label:** Hidden during loading
- **Use Case:** Simple actions, icon buttons
- **Common:** Submit, send actions

---

## Size Variants

### Small
- **Height:** 32px
- **Padding:** 4px 10px
- **Font Size:** 13px (0.8125rem)
- **Indicator Size:** 18px
- **Use Case:** Compact UIs, tables, toolbars

### Medium (Default)
- **Height:** 40px
- **Padding:** 6px 16px
- **Font Size:** 14px (0.875rem)
- **Indicator Size:** 22px
- **Use Case:** Standard forms, dialogs

### Large
- **Height:** 48px
- **Padding:** 8px 22px
- **Font Size:** 15px (0.9375rem)
- **Indicator Size:** 26px
- **Use Case:** Prominent actions, hero sections

---

## Color Variants

LoadingButton supports all standard Button colors:
- **Primary:** Main actions
- **Secondary:** Secondary actions
- **Error:** Destructive actions
- **Success:** Positive confirmations
- **Warning:** Cautionary actions
- **Info:** Informational actions
- **Inherit:** Inherits color from parent

---

## Variant Styles

### Contained
- **Background:** Solid color fill
- **Loading:** Lighter spinner color
- **Use Case:** Primary actions
- **Visibility:** High contrast

### Outlined
- **Background:** Transparent
- **Border:** Colored border
- **Loading:** Colored spinner
- **Use Case:** Secondary actions

### Text
- **Background:** Transparent
- **Border:** None
- **Loading:** Colored spinner
- **Use Case:** Tertiary actions

---

## Usage Guidelines

### When to Use
- Form submission buttons
- Save/Update actions
- Async data fetching
- File upload buttons
- API request actions
- Search submissions
- Login/Register buttons
- Payment processing
- Delete confirmations (async)
- Load more pagination

### When NOT to Use
- Instant synchronous actions
- Navigation links
- Toggle switches
- Read-only displays
- Already disabled buttons
- Multiple simultaneous operations (show one loader)
- Very quick operations (< 300ms - flash effect)

### Best Practices

#### Do
- Show loading state for async operations
- Disable button during loading
- Use appropriate indicator position
- Provide loading feedback for operations > 300ms
- Use with form validation
- Match indicator size to button size
- Keep button label visible (use start/end position)
- Test loading state visibility
- Handle error states appropriately
- Reset loading state on completion

#### Don't
- Use for instant actions
- Forget to reset loading state
- Use multiple loaders on same button
- Make loading state permanent
- Use without disabling interaction
- Use for operations < 300ms (too brief)
- Forget error handling
- Use inconsistent sizes
- Hide critical information during loading
- Forget accessibility attributes

---

## Component Integration (CDS Base Components)

### Extends CDS Button
```typescript
// LoadingButton has all Button props plus:
import LoadingButton from '@mui/lab/LoadingButton';

<LoadingButton
  loading={loading}
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="contained"
>
  Save
</LoadingButton>
```

### With CDS Form
```typescript
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

<Box component="form" onSubmit={handleSubmit}>
  <TextField fullWidth label="Email" margin="normal" />
  <TextField fullWidth label="Password" type="password" margin="normal" />
  <LoadingButton
    type="submit"
    fullWidth
    variant="contained"
    loading={loading}
  >
    Sign In
  </LoadingButton>
</Box>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### ARIA Attributes
```typescript
{
  // When loading
  "aria-busy": true,
  "aria-disabled": true,
  "aria-live": "polite",  // Announces state changes

  // Button label
  "aria-label": "Save form",
}
```

#### Keyboard Navigation
- **Tab:** Focus on button (when not loading)
- **Enter/Space:** Activate button (when not loading)
- **Loading State:** Button not focusable/activatable

#### Screen Reader Support
- Loading state announced via aria-busy
- Button state change announced
- Progress indicator described
- Label remains accessible

#### Color Contrast
- **Indicator:** Sufficient contrast (4.5:1 minimum)
- **Label:** Maintains contrast during loading
- **Background:** Meets color contrast requirements

---

## Code Examples

### Basic Loading Button
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

export default function BasicLoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      onClick={handleClick}
    >
      Submit
    </LoadingButton>
  );
}
```

### With Start Icon
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingButtonWithIcon() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="contained"
      onClick={handleSave}
    >
      Save
    </LoadingButton>
  );
}
```

### Form Submission
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function LoadingForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitForm(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        disabled={loading}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        disabled={loading}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        loading={loading}
        sx={{ mt: 2 }}
      >
        Sign In
      </LoadingButton>
    </Box>
  );
}
```

### All Variants
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonVariants() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2}>
      <LoadingButton loading={loading} variant="contained">
        Contained
      </LoadingButton>
      <LoadingButton loading={loading} variant="outlined">
        Outlined
      </LoadingButton>
      <LoadingButton loading={loading} variant="text">
        Text
      </LoadingButton>
    </Stack>
  );
}
```

### All Sizes
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <LoadingButton loading size="small" variant="contained">
        Small
      </LoadingButton>
      <LoadingButton loading size="medium" variant="contained">
        Medium
      </LoadingButton>
      <LoadingButton loading size="large" variant="contained">
        Large
      </LoadingButton>
    </Stack>
  );
}
```

### Loading Positions
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

export default function LoadingPositions() {
  const [loading, setLoading] = useState(true);

  return (
    <Stack spacing={2}>
      <LoadingButton
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Start Position
      </LoadingButton>
      <LoadingButton
        loading={loading}
        loadingPosition="end"
        endIcon={<SendIcon />}
        variant="contained"
      >
        End Position
      </LoadingButton>
      <LoadingButton
        loading={loading}
        variant="contained"
      >
        Center Position
      </LoadingButton>
    </Stack>
  );
}
```

### All Colors
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonColors() {
  return (
    <Stack spacing={2}>
      <LoadingButton loading variant="contained" color="primary">
        Primary
      </LoadingButton>
      <LoadingButton loading variant="contained" color="secondary">
        Secondary
      </LoadingButton>
      <LoadingButton loading variant="contained" color="success">
        Success
      </LoadingButton>
      <LoadingButton loading variant="contained" color="error">
        Error
      </LoadingButton>
      <LoadingButton loading variant="contained" color="warning">
        Warning
      </LoadingButton>
      <LoadingButton loading variant="contained" color="info">
        Info
      </LoadingButton>
    </Stack>
  );
}
```

### With Error Handling
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function LoadingButtonWithError() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      await performAction();
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={handleClick}
      >
        Perform Action
      </LoadingButton>
    </Box>
  );
}
```

### Async/Await Pattern
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

export default function AsyncLoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Action completed');
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      onClick={handleAsyncAction}
    >
      Async Action
    </LoadingButton>
  );
}
```

### Custom Loading Indicator
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomIndicatorButton() {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingButton
      loading={loading}
      loadingIndicator={
        <CircularProgress color="inherit" size={16} />
      }
      variant="outlined"
      onClick={() => setLoading(true)}
    >
      Custom Indicator
    </LoadingButton>
  );
}
```

---

## Common Patterns

### Save Button
```tsx
<LoadingButton
  loading={saving}
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="contained"
  onClick={handleSave}
>
  Save
</LoadingButton>
```

### Submit Form
```tsx
<LoadingButton
  type="submit"
  fullWidth
  variant="contained"
  loading={submitting}
>
  Submit
</LoadingButton>
```

### Delete Confirmation
```tsx
<LoadingButton
  loading={deleting}
  variant="contained"
  color="error"
  onClick={handleDelete}
>
  Delete
</LoadingButton>
```

### Load More
```tsx
<LoadingButton
  loading={loadingMore}
  loadingPosition="end"
  endIcon={<ArrowDownwardIcon />}
  variant="outlined"
  onClick={handleLoadMore}
>
  Load More
</LoadingButton>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use full-width for primary actions
- Ensure minimum 48px touch target
- Consider size="medium" or "large"
- Loading indicator clearly visible

### Tablet (600px - 900px)
- Standard sizes work well
- Grouped buttons in rows
- Loading state clear

### Desktop (> 900px)
- All sizes appropriate
- Hover states work
- Loading animations smooth

---

## CDS Token Integration

### Inherits All Button Tokens
```typescript
// Colors
color: var(--color-palatte/primary/main);
background: var(--color-palatte/primary/main);

// Spacing
padding: var(--spacing/1.5, 6px) var(--spacing/4, 16px);

// Typography
font-size: var(--typography/base-styles/button/font-size);
```

### Loading-Specific
```typescript
// Indicator sizes
indicator-size-small: 18px;
indicator-size-medium: 22px;
indicator-size-large: 26px;

// Transitions
transition-duration: var(--transition/duration/shortest, 150ms);
```

---

## Total Variant Combinations

**Variants:** 3 (contained, outlined, text)
**Sizes:** 3 (small, medium, large)
**Colors:** 7 (primary, secondary, success, error, warning, info, inherit)
**Loading Positions:** 3 (start, end, center)
**States:** 2 (loading, not loading)

**Total Combinations:** 3 × 3 × 7 × 3 × 2 = **378 configurations**

---

## Related Components
- **Button:** Base component (CDS component)
- **IconButton:** Icon-only buttons (CDS component)
- **CircularProgress:** Loading indicator (CDS component)
- **Skeleton:** Loading placeholders
- **LinearProgress:** Alternative loading indicator

---

## Figma Design Reference
- **Component:** LoadingButton extends Button
- **Package:** @mui/lab (experimental)
- **Indicator:** CircularProgress integrated
- **Based on CDS:** Uses all CDS Button tokens plus loading states
- **Documentation:** [MUI LoadingButton API](https://mui.com/api/loading-button)

---

## Migration Notes

### Integration with CDS
- **Base:** Extends CDS Button component completely
- **Colors:** Uses all CDS button color tokens
- **Sizes:** Uses CDS button sizing tokens
- **Spacing:** Uses CDS spacing tokens
- **Typography:** Uses CDS button typography
- **Transitions:** Uses CDS transition tokens (150ms shortest)
- **Integration:** Works seamlessly with CDS forms, dialogs, cards

### Design Tokens Required
- **All Button tokens** (colors, spacing, typography, sizing, states)
- **Indicator sizes:** 18px, 22px, 26px
- **Transition tokens:** 150ms shortest duration
- **Opacity:** 0.6 loading, 0.38 disabled

### Installation
```bash
npm install @mui/lab
```

---

## Performance Considerations

- LoadingButton extends Button (minimal overhead)
- CircularProgress adds small performance cost
- Avoid rapid state changes (debounce if needed)
- Use React.memo for static configurations
- Disable button during loading (prevents double-submit)
- Consider operation duration (avoid for < 300ms)
- Clean up async operations on unmount

---

## Best Practices Summary

### Loading State Management
- Always reset loading state in finally block
- Handle both success and error cases
- Disable button during loading
- Show loading for operations > 300ms

### User Experience
- Provide clear visual feedback
- Keep button label visible (use start/end position)
- Handle error states appropriately
- Don't flash loading state for quick operations

### Accessibility
- Include aria-busy when loading
- Ensure loading state announced
- Maintain keyboard navigation
- Sufficient color contrast

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI Lab v5.0+ specifications
- Integrated with all CDS Button design tokens
- Extends CDS Button component completely
- 378 configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Loading state button component for async operations
- Package: @mui/lab/LoadingButton
