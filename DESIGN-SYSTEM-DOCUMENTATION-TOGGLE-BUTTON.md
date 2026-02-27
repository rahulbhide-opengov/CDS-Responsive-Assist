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
