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
