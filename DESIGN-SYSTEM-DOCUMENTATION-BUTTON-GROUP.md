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
