# CDS Forms Documentation

Complete documentation for all CDS form input components with design tokens, validation, and accessibility.

## Table of Contents

1. [Checkbox](#checkbox)
2. [Radio](#radio)
3. [Switch](#switch)
4. [Select & Autocomplete](#select--autocomplete)
5. [Slider](#slider)
6. [Rating](#rating)
7. [FormLabel](#formlabel)
8. [TransferList](#transferlist)

---

# Checkbox Component Documentation

## Overview
The Checkbox component allows users to select one or multiple options from a set. It provides a clear visual indication of checked, unchecked, and indeterminate states with support for various sizes, colors, and states.

**Component Type:** Form Input Control / Selection
**Based on:** Material-UI (MUI) v6.1.0 Checkbox
**Documentation:** [MUI Checkbox API](https://mui.com/api/checkbox)

---

## Design Tokens

### Size Tokens
```typescript
// Small
'--component/checkbox/size-small/dimensions': '32px', // Including padding
'--component/checkbox/size-small/icon-size': '16px',
'--component/checkbox/size-small/padding': '8px',
'--component/checkbox/size-small/focus-ring-size': '38px',

// Medium (Default)
'--component/checkbox/size-medium/dimensions': '40px', // Including padding
'--component/checkbox/size-medium/icon-size': '20px',
'--component/checkbox/size-medium/padding': '10px',
'--component/checkbox/size-medium/focus-ring-size': '46px',

// Large
'--component/checkbox/size-large/dimensions': '48px', // Including padding
'--component/checkbox/size-large/icon-size': '24px',
'--component/checkbox/size-large/padding': '12px',
'--component/checkbox/size-large/focus-ring-size': '54px',
```

### Color Tokens
```typescript
// Default (Unchecked)
'--component/checkbox/default/color': 'rgba(0, 0, 0, 0.54)',
'--component/checkbox/default/bg-hover': 'rgba(0, 0, 0, 0.04)',

// Primary
'--component/checkbox/primary/color': '#4b3fff',
'--component/checkbox/primary/color-hover': '#3d32cc',
'--component/checkbox/primary/bg-hover': 'rgba(75, 63, 255, 0.04)',

// Secondary
'--component/checkbox/secondary/color': '#dc004e',
'--component/checkbox/secondary/color-hover': '#b00040',
'--component/checkbox/secondary/bg-hover': 'rgba(220, 0, 78, 0.04)',

// Error
'--component/checkbox/error/color': '#d32f2f',
'--component/checkbox/error/color-hover': '#b71c1c',
'--component/checkbox/error/bg-hover': 'rgba(211, 47, 47, 0.04)',

// Warning
'--component/checkbox/warning/color': '#ed6c02',
'--component/checkbox/warning/color-hover': '#e65100',
'--component/checkbox/warning/bg-hover': 'rgba(237, 108, 2, 0.04)',

// Info
'--component/checkbox/info/color': '#0288d1',
'--component/checkbox/info/color-hover': '#01579b',
'--component/checkbox/info/bg-hover': 'rgba(2, 136, 209, 0.04)',

// Success
'--component/checkbox/success/color': '#2e7d32',
'--component/checkbox/success/color-hover': '#1b5e20',
'--component/checkbox/success/bg-hover': 'rgba(46, 125, 50, 0.04)',

// Disabled
'--component/checkbox/disabled/color': 'rgba(0, 0, 0, 0.26)',
'--component/checkbox/disabled/bg': 'transparent',
```

### State Tokens
```typescript
'--component/checkbox/focus-ring-color': '#4b3fff',
'--component/checkbox/focus-ring-width': '2px',
'--component/checkbox/ripple-duration': '550ms',
'--component/checkbox/transition-duration': '150ms',
'--component/checkbox/border-radius': '2px',
```

---

## Size Variants

### Small
- **Total Dimensions:** 32×32px (with padding)
- **Icon Size:** 16×16px
- **Padding:** 8px
- **Focus Ring:** 38×38px
- **Touch Target:** 32px (desktop only)
- **Use Case:** Compact forms, dense data tables, space-limited UIs

### Medium (Default)
- **Total Dimensions:** 40×40px (with padding)
- **Icon Size:** 20×20px
- **Padding:** 10px
- **Focus Ring:** 46×46px
- **Touch Target:** 40px minimum
- **Use Case:** Standard forms, general UI, most common size

### Large
- **Total Dimensions:** 48×48px (with padding)
- **Icon Size:** 24×24px
- **Padding:** 12px
- **Focus Ring:** 54×54px
- **Touch Target:** 48px (recommended for touch)
- **Use Case:** Accessibility-focused interfaces, mobile/tablet, touch devices

---

## Color Variants

### Default
- **Unchecked:** `rgba(0, 0, 0, 0.54)` (gray)
- **Checked:** Primary color by default
- **Use Case:** Standard checkboxes without specific semantic meaning

### Primary
- **Checked Color:** `#4b3fff`
- **Hover Color:** `#3d32cc`
- **Hover BG:** `rgba(75, 63, 255, 0.04)`
- **Use Case:** Primary selections, main checkbox actions

### Secondary
- **Checked Color:** `#dc004e`
- **Hover Color:** `#b00040`
- **Hover BG:** `rgba(220, 0, 78, 0.04)`
- **Use Case:** Secondary selections, alternative emphasis

### Error
- **Checked Color:** `#d32f2f`
- **Hover Color:** `#b71c1c`
- **Hover BG:** `rgba(211, 47, 47, 0.04)`
- **Use Case:** Error states, validation failures, critical selections

### Warning
- **Checked Color:** `#ed6c02`
- **Hover Color:** `#e65100`
- **Hover BG:** `rgba(237, 108, 2, 0.04)`
- **Use Case:** Warning states, caution selections

### Info
- **Checked Color:** `#0288d1`
- **Hover Color:** `#01579b`
- **Hover BG:** `rgba(2, 136, 209, 0.04)`
- **Use Case:** Informational selections, help-related options

### Success
- **Checked Color:** `#2e7d32`
- **Hover Color:** `#1b5e20`
- **Hover BG:** `rgba(46, 125, 50, 0.04)`
- **Use Case:** Success states, confirmation selections

---

## States

### 1. Unchecked (Default)
- **Icon:** Empty box with border
- **Border Color:** `rgba(0, 0, 0, 0.54)`
- **Background:** Transparent
- **Cursor:** pointer

### 2. Checked
- **Icon:** Box with checkmark
- **Background:** Color-specific fill
- **Checkmark:** White icon
- **Border:** Same as background
- **Transition:** 150ms ease-in-out

### 3. Indeterminate
- **Icon:** Box with horizontal line (dash)
- **Background:** Color-specific fill
- **Line:** White horizontal line
- **Use Case:** Parent checkbox when some children are checked
- **Visual:** Indicates partial selection

### 4. Hover (Unchecked)
- **Background:** Color-specific hover background (4% opacity)
- **Border:** Same as default
- **Transition:** 150ms
- **Cursor:** pointer

### 5. Hover (Checked)
- **Background:** Slightly darker shade of checked color
- **Checkmark:** White
- **Transition:** 150ms
- **Cursor:** pointer

### 6. Focused
- **Background:** Transparent
- **Focus Ring:** 2px solid `#4b3fff`
- **Border Radius:** Circular ring
- **Keyboard:** Accessible via Tab
- **Size:** Extends beyond checkbox bounds

### 7. Pressed
- **Background:** Darker color-specific background (8% opacity)
- **Ripple:** Ripple animation from click point
- **Duration:** 550ms
- **Visual:** Immediate feedback

### 8. Disabled (Unchecked)
- **Border Color:** `rgba(0, 0, 0, 0.26)`
- **Background:** Transparent
- **Cursor:** not-allowed
- **Interaction:** None

### 9. Disabled (Checked)
- **Background:** `rgba(0, 0, 0, 0.26)`
- **Checkmark:** White with reduced opacity
- **Cursor:** not-allowed
- **Interaction:** None

---

## Usage Guidelines

### When to Use
- Multiple independent selections
- Settings and preferences
- Terms and conditions acceptance
- Feature toggles
- Bulk selection in lists/tables
- Indeterminate state for nested selections
- Filter options

### When NOT to Use
- Single exclusive selection (use Radio)
- Binary on/off toggle (use Switch)
- Fewer than 2 options (use Button or Switch)
- Complex multi-step selections (use Stepper)
- Navigation (use Menu or Tabs)

### Best Practices

#### Do
- Provide clear labels for each checkbox
- Use indeterminate state for parent checkboxes
- Group related checkboxes logically
- Ensure 48×48px minimum touch target on mobile
- Provide keyboard navigation (Tab, Space)
- Use appropriate color for semantic meaning
- Show validation feedback clearly
- Allow clicking label to toggle checkbox

#### Don't
- Use checkboxes for mutually exclusive options
- Make checkbox labels too long
- Use tiny checkboxes (< 16px icon)
- Forget disabled state styling
- Use color alone to indicate state
- Mix checkbox styles inconsistently
- Forget to indicate required fields
- Use checkboxes without labels

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus checkbox
- **Space:** Toggle checkbox
- **Shift+Tab:** Navigate backward

#### Screen Readers
```html
<Checkbox
  aria-label="Accept terms"
  aria-checked="false"
/>

<FormControlLabel
  control={<Checkbox />}
  label="Accept terms and conditions"
/>
```

#### ARIA Attributes
```typescript
{
  role: "checkbox",
  "aria-checked": boolean | "mixed",  // "mixed" for indeterminate
  "aria-label": string,               // If no visible label
  "aria-labelledby": string,          // References label element
  "aria-describedby": string,         // Additional context
  "aria-disabled": boolean,           // Disabled state
  "aria-required": boolean,           // Required field
  "aria-invalid": boolean,            // Validation error
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast minimum
- Circular focus outline
- Focus visible on keyboard navigation only
- Focus ring uses primary color by default

#### Color Contrast
- **Unchecked Border:** 3:1 minimum against background
- **Checked Background:** 3:1 minimum against background
- **Checkmark:** 4.5:1 minimum against checkbox background
- **Focus Ring:** 3:1 minimum against background
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Small:** 32×32px (desktop only)
- **Medium:** 40×40px (minimum for touch, but 48px recommended)
- **Large:** 48×48px (recommended minimum for mobile/tablet)
- **Best Practice:** Use 48×48px on touch devices

---

## Code Examples

### Basic Checkbox
```tsx
import Checkbox from '@mui/material/Checkbox';

export default function BasicCheckbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{ 'aria-label': 'Basic checkbox' }}
    />
  );
}
```

### With Label
```tsx
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckboxLabel() {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label="Accept terms and conditions"
    />
  );
}
```

### Color Variants
```tsx
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

export default function ColorCheckboxes() {
  return (
    <Stack direction="row" spacing={1}>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="error" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="info" />
      <Checkbox defaultChecked color="success" />
    </Stack>
  );
}
```

### Size Variants
```tsx
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

export default function SizeCheckboxes() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox size="large" defaultChecked />
    </Stack>
  );
}
```

### Indeterminate State
```tsx
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleChangeParent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const allChecked = checked[0] && checked[1];
  const indeterminate = checked[0] !== checked[1];

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={handleChangeParent}
          />
        }
      />
      <FormGroup sx={{ ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
        />
        <FormControlLabel
          label="Child 2"
          control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
        />
      </FormGroup>
    </div>
  );
}
```

### Disabled Checkboxes
```tsx
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

export default function DisabledCheckboxes() {
  return (
    <Stack direction="row" spacing={1}>
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </Stack>
  );
}
```

### Checkbox Group
```tsx
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CheckboxGroup() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Features</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Notifications"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Newsletter"
        />
        <FormControlLabel
          control={<Checkbox disabled />}
          label="Premium (Coming Soon)"
        />
      </FormGroup>
    </FormControl>
  );
}
```

### Controlled Checkbox
```tsx
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={handleChange} name="controlled" />
      }
      label="Controlled"
    />
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large size (40-48px)
- Ensure 48×48px touch targets
- Provide visual feedback on tap
- Stack checkboxes vertically
- Adequate spacing between items (8px+ gap)
- Avoid small size variant

### Tablet (600px - 960px)
- Use medium or large sizes
- Maintain 40×40px minimum touch targets
- Standard spacing between checkboxes
- Can use two-column layouts for groups

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for dense UIs
- Hover states fully functional
- Keyboard navigation essential
- Mouse interactions expected

---

## Total Variant Combinations

**Base Combinations:**
- 3 sizes (small, medium, large)
- 7 color variants (default, primary, secondary, error, warning, info, success)
- 9 states (unchecked, checked, indeterminate, hover unchecked, hover checked, focused, pressed, disabled unchecked, disabled checked)

**Total:** 3 × 7 × 9 = **189 combinations**

---

## Related Components
- **FormControlLabel:** Label wrapper for checkbox
- **FormGroup:** Container for multiple checkboxes
- **FormControl:** Form control container
- **Radio:** Single selection alternative
- **Switch:** Binary toggle alternative

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11012:143645
- **Component:** `<Checkbox>`
- **Documentation:** [MUI Checkbox API](https://mui.com/api/checkbox)

---

## Migration Notes

### From Previous Design System
- Checkbox sizes standardized (32px, 40px, 48px with padding)
- Icon sizes aligned (16px, 20px, 24px)
- Hover backgrounds updated to 4% opacity
- Focus ring now uses primary color (#4b3fff)
- Disabled color reduced to 26% opacity
- Indeterminate state icon standardized
- Ripple animation duration unified to 550ms
- Touch targets aligned with accessibility guidelines

### Design Tokens Required
- All color tokens (checkbox colors, hover backgrounds)
- Spacing tokens (8px, 10px, 12px padding)
- Border radius (2px for checkbox, circular for focus ring)
- Focus ring tokens (2px width, primary color)
- Transition timing (150ms, 550ms)
- Icon size tokens (16px, 20px, 24px)

---

## Performance Considerations

- Checkboxes are lightweight (minimal DOM structure)
- Ripple effects use CSS animations (GPU-accelerated)
- Use React.memo for checkboxes in lists to prevent unnecessary re-renders
- Controlled checkboxes should use useCallback for change handlers
- Avoid creating inline functions in render for onChange

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 189 variant combinations documented
- Full accessibility compliance


---


# Radio Button Component - Complete Documentation

**Component Type:** Form Control / Selection Input
**Last Updated:** 2026-02-26
**Status:** ✅ Production Ready

---

## Table of Contents

1. [Overview](#overview)
2. [Component Anatomy](#component-anatomy)
3. [Design Tokens](#design-tokens)
4. [Variants](#variants)
5. [States](#states)
6. [Usage Criteria](#usage-criteria)
7. [FormControlLabel](#formcontrollabel)
8. [RadioGroup](#radiogroup)
9. [Responsive Behavior](#responsive-behavior)
10. [Accessibility](#accessibility)
11. [Best Practices](#best-practices)
12. [Examples](#examples)

---

## Overview

Radio buttons allow users to select exactly one option from a set of mutually exclusive choices. They are typically used in forms and settings where users must make a single selection from multiple options.

### Key Features

- **3 Sizes:** Small (20px), Medium (24px), Large (28px)
- **7 Color Variants:** Default, Primary, Secondary, Error, Warning, Info, Success
- **5 States:** Enabled, Hovered, Focused, Pressed, Disabled
- **2 Checked States:** Unchecked, Checked
- **Label Support:** FormControlLabel wrapper with 4 label placements
- **Group Support:** RadioGroup for managing multiple radios
- **Fully Accessible:** ARIA roles, keyboard navigation, screen reader support

### When to Use

✅ **Use Radio buttons when:**
- User must select exactly one option from 2-7 choices
- All available options should be visible
- Options are mutually exclusive
- Selection is required (not optional)
- Choices need clear visual comparison

❌ **Don't use Radio buttons when:**
- Multiple selections are allowed (use Checkboxes instead)
- Only one option exists (use Checkbox for on/off)
- More than 7 options (use Select/Dropdown instead)
- Selection is optional with no default (use Select/Dropdown)
- Options are long text or need explanation (use Cards or List with Radio)

---

## Component Anatomy

### Visual Structure - Radio Button

```
    ┌─────────────┐
    │   ●         │   Checked (filled circle)
    └─────────────┘

    ┌─────────────┐
    │   ○         │   Unchecked (empty circle)
    └─────────────┘
```

### Component Parts

1. **Outer Circle** (Required)
   - Circular border
   - Size varies: 20px, 24px, 28px
   - Border width: 2px
   - Color: Based on variant and state

2. **Inner Circle / Dot** (When Checked)
   - Centered circle that appears when selected
   - Size: ~50% of outer circle
   - Color: Matches outer circle color
   - Animated transition on check/uncheck

3. **Padding Container**
   - Touch-friendly hit area
   - Minimum 48×48px for accessibility
   - Rounded corners (100px border radius)
   - Invisible but clickable

### Visual Structure - With Label

```
┌──────────────────────────────┐
│  ○  Label Text               │  End placement (default)
└──────────────────────────────┘

┌──────────────────────────────┐
│  Label Text  ○               │  Start placement
└──────────────────────────────┘

┌──────────────────────────────┐
│       Label Text             │
│           ○                  │  Bottom placement
└──────────────────────────────┘

┌──────────────────────────────┐
│           ○                  │
│       Label Text             │  Top placement
└──────────────────────────────┘
```

---

## Design Tokens

### Radio-Specific Tokens

```typescript
// Sizes
'--component/radio/size-small': '20px',
'--component/radio/size-medium': '24px',
'--component/radio/size-large': '28px',

// Inner Dot Size (when checked)
'--component/radio/dot-size-small': '10px',        // 50% of outer
'--component/radio/dot-size-medium': '12px',       // 50% of outer
'--component/radio/dot-size-large': '14px',        // 50% of outer

// Border
'--component/radio/border-width': '2px',
'--component/radio/border-radius': '100px',        // Full circle

// Padding (Touch Target)
'--component/radio/padding': '12px',               // Makes 48×48px minimum
'--component/radio/padding-small': '14px',         // 20px + 28px = 48px
'--component/radio/padding-medium': '12px',        // 24px + 24px = 48px
'--component/radio/padding-large': '10px',         // 28px + 20px = 48px

// Spacing with Label
'--component/radio/label-gap': '8px',              // Gap between radio and label
'--component/radio/label-padding-vertical': '8px', // Vertical padding

// Transition
'--component/radio/transition-duration': '150ms',
'--component/radio/transition-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
```

### Color Tokens by Variant

#### Default Color
```typescript
// Unchecked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Border color

// Checked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Both border and dot

// Disabled
'--colors/action/disabled': 'rgba(0, 0, 0, 0.26)', // Border and dot
```

#### Primary Color
```typescript
// Unchecked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Border color

// Checked
'--colors/primary/main': '#4b3fff',                 // Border and dot

// Disabled (when checked)
'--colors/action/disabled': 'rgba(0, 0, 0, 0.26)', // Border and dot
```

#### Secondary Color
```typescript
// Checked
'--colors/secondary/main': '#546574',               // Border and dot
```

#### Error Color
```typescript
// Checked
'--colors/error/main': '#d33423',                   // Border and dot
```

#### Warning Color
```typescript
// Checked
'--colors/warning/main': '#ed6c02',                 // Border and dot
```

#### Info Color
```typescript
// Checked
'--colors/info/main': '#0288d1',                    // Border and dot
```

#### Success Color
```typescript
// Checked
'--colors/success/main': '#2e7d32',                 // Border and dot
```

### State Color Overlays

```typescript
// Hover State (overlay on background)
'--colors/action/hover': 'rgba(0, 0, 0, 0.04)',

// Focus State
'--colors/primary/main': '#4b3fff',                 // Focus ring color
'--component/radio/focus-ring-width': '2px',
'--component/radio/focus-ring-offset': '2px',

// Pressed State (overlay)
'--colors/action/selected': 'rgba(0, 0, 0, 0.12)',
```

### Typography Tokens (for Labels)

```typescript
// Label Text (from FormControlLabel)
'--typography/inputs/label-lg/font-family': 'DM Sans',
'--typography/inputs/label-lg/font-size': '16px',
'--typography/inputs/label-lg/font-weight': '400',
'--typography/inputs/label-lg/line-height': '20px',
'--typography/inputs/label-lg/letter-spacing': '0.15px',

// Label Color
'--colors/text/primary': 'rgba(0, 0, 0, 0.87)',

// Disabled Label Color
'--colors/text/disabled': 'rgba(0, 0, 0, 0.38)',
```

---

## Variants

### Size Variants

#### 1. Small (20px)

**Use when:**
- Space is limited
- Dense UI required (tables, compact forms)
- Mobile interfaces with many options
- Secondary or less important selections

**Specifications:**
- Circle diameter: 20px
- Inner dot: 10px
- Border: 2px
- Padding: 14px (total 48×48px touch target)
- Label font: 14px (Body2)

**Visual:**
```
┌────┐
│ ○  │  20×20px
└────┘
```

#### 2. Medium (24px) - Default ⭐

**Use when:**
- Standard forms and settings
- Most common use case
- Default choice for desktop
- Balanced size and readability

**Specifications:**
- Circle diameter: 24px
- Inner dot: 12px
- Border: 2px
- Padding: 12px (total 48×48px touch target)
- Label font: 16px (Label Large)

**Visual:**
```
┌──────┐
│  ○   │  24×24px
└──────┘
```

#### 3. Large (28px)

**Use when:**
- Touch-first interfaces
- Accessibility needs (easier to click)
- Prominent selections
- Older users or motor impairments
- Large screen displays

**Specifications:**
- Circle diameter: 28px
- Inner dot: 14px
- Border: 2px
- Padding: 10px (total 48×48px touch target)
- Label font: 16px (Label Large)

**Visual:**
```
┌────────┐
│   ○    │  28×28px
└────────┘
```

---

### Color Variants

#### 1. Default (Gray)

**Use when:**
- Neutral selections
- Non-critical choices
- System-level settings
- Secondary options

**Colors:**
- Unchecked border: rgba(0, 0, 0, 0.54)
- Checked: rgba(0, 0, 0, 0.54)
- Contrast: Moderate against white

#### 2. Primary (Blue) - Most Common ⭐

**Use when:**
- Main form selections
- Important choices
- Primary user actions
- Brand-aligned selections

**Colors:**
- Unchecked border: rgba(0, 0, 0, 0.54)
- Checked: #4b3fff (primary blue)
- Contrast: High visibility

**Example:**
```
○  Unchecked (gray border)
◉  Checked (blue border & dot)
```

#### 3. Secondary (Gray-Blue)

**Use when:**
- Alternative options
- Complementary to primary
- Less emphasis than primary
- Subtle selections

**Colors:**
- Checked: #546574 (gray-blue)

#### 4. Error (Red)

**Use when:**
- Destructive actions
- Risk acknowledgment
- Error states in forms
- Critical warnings

**Colors:**
- Checked: #d33423 (red)

**Example:**
```
◉  Delete all data permanently
```

#### 5. Warning (Orange)

**Use when:**
- Caution required
- Moderately risky actions
- Important notices
- Advisory selections

**Colors:**
- Checked: #ed6c02 (orange)

**Example:**
```
◉  Proceed with caution
```

#### 6. Info (Light Blue)

**Use when:**
- Informational selections
- Help or tips
- Optional features
- Guidance-related choices

**Colors:**
- Checked: #0288d1 (light blue)

#### 7. Success (Green)

**Use when:**
- Positive confirmations
- Success states
- Opt-in features
- Beneficial selections

**Colors:**
- Checked: #2e7d32 (green)

**Example:**
```
◉  Enable automatic backups
```

---

## States

### 1. Enabled (Default)

**Appearance:**
- Full color saturation
- Clear border (2px)
- Cursor: pointer
- Interactive

**Unchecked:**
- Border: rgba(0, 0, 0, 0.54)
- Background: transparent
- No inner dot

**Checked:**
- Border: Color variant
- Inner dot: Color variant
- Background: transparent

### 2. Hovered

**Appearance:**
- Light overlay appears behind radio
- Background: rgba(0, 0, 0, 0.04)
- Circular hover area (48×48px)
- Cursor: pointer

**When:**
- Mouse cursor over radio or label
- Desktop/pointer devices only
- Indicates interactivity

**Transition:**
- Duration: 150ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### 3. Focused

**Appearance:**
- Visible focus ring
- Ring color: Primary color or variant color
- Ring width: 2px
- Ring offset: 2px from radio edge
- Circular ring shape

**When:**
- Keyboard navigation (Tab key)
- Screen reader focus
- Required for accessibility

**Important:**
- Must be clearly visible
- Cannot be removed
- Meets WCAG 2.4.7 (Focus Visible)

**CSS Example:**
```css
.radio:focus {
  outline: 2px solid var(--colors/primary/main);
  outline-offset: 2px;
  border-radius: 100px;
}
```

### 4. Pressed

**Appearance:**
- Darker overlay behind radio
- Background: rgba(0, 0, 0, 0.12)
- Circular pressed area (48×48px)
- Visual feedback during click

**When:**
- Mouse button down
- Touch press active
- Momentary state during interaction

### 5. Disabled

**Appearance:**
- Reduced opacity
- Border: rgba(0, 0, 0, 0.26)
- Inner dot (if checked): rgba(0, 0, 0, 0.26)
- Label: rgba(0, 0, 0, 0.38)
- Cursor: not-allowed
- Not interactive

**When:**
- Option is unavailable
- Dependent condition not met
- User lacks permission
- Read-only mode

**Behavior:**
- Not clickable
- Not keyboard accessible
- Not announced as interactive
- Can still be visible for context

---

### Checked vs Unchecked States

#### Unchecked State

**Visual:**
```
○  Empty circle with border only
```

**Properties:**
- Border: 2px solid color (gray or variant)
- Background: transparent
- No inner dot
- Ready to be selected

#### Checked State

**Visual:**
```
◉  Circle with border + inner dot
```

**Properties:**
- Border: 2px solid variant color
- Inner dot: Solid circle, variant color
- Center-aligned dot
- Animated transition (150ms)

**Animation:**
```css
@keyframes radio-check {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.radio-dot {
  animation: radio-check 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Usage Criteria

### ✅ When to Use Radio Buttons

1. **Mutually Exclusive Choices**
   - Only one option can be selected
   - Selection changes when clicking another radio
   - Example: Payment method, Shipping speed

2. **2-7 Visible Options**
   - All options fit on screen
   - Easy to scan and compare
   - Example: T-shirt size (XS, S, M, L, XL)

3. **Required Selection**
   - User must choose one option
   - No "none selected" state after initial selection
   - Example: Gender, Account type

4. **Clear Option Names**
   - Short, descriptive labels
   - Easy to understand differences
   - Example: Monthly, Yearly, Lifetime

5. **Visual Comparison Needed**
   - Users benefit from seeing all options
   - Easy to change mind
   - Example: Subscription tiers

### ❌ When NOT to Use Radio Buttons

1. **Multiple Selections**
   - User can pick more than one
   - Use Checkboxes instead
   - Example: Newsletter preferences

2. **Single On/Off Choice**
   - Only one option (e.g., "Agree to terms")
   - Use Checkbox instead
   - Example: Enable notifications

3. **Many Options (>7)**
   - Takes too much vertical space
   - Hard to scan
   - Use Select/Dropdown instead
   - Example: Country selection

4. **Optional Selection**
   - User might not want to select any
   - Need a "None" or default option
   - Consider Select/Dropdown
   - Example: Optional delivery instructions

5. **Long Option Text**
   - Options need explanation
   - Use Cards with embedded Radio
   - Example: Subscription plans with features

6. **Grouped Selections**
   - Multiple sets of radio groups
   - Can be confusing
   - Consider different layout or Tabs

---

## FormControlLabel

The `FormControlLabel` component wraps a Radio button with a text label, providing a clickable area that includes both the radio and its label.

### Label Placement Variants

#### 1. End (Default) ⭐

**Layout:** `[Radio] Label Text`

**Use when:**
- Standard form layouts
- Most common pattern
- Left-to-right reading
- Follows form conventions

**Spacing:**
- Gap: 8px between radio and label
- Padding: 8px vertical

**Example:**
```html
<label>
  <input type="radio" name="option" />
  <span>Option 1</span>
</label>
```

#### 2. Start

**Layout:** `Label Text [Radio]`

**Use when:**
- Right-aligned layouts
- Alternative visual hierarchy
- Emphasizing label over radio
- Specific design requirements

**Spacing:**
- Gap: 8px between label and radio
- Padding: 8px vertical

#### 3. Top

**Layout:**
```
  [Radio]
Label Text
```

**Use when:**
- Vertical card layouts
- Icon-like presentation
- Space-constrained horizontal layouts
- Visual hierarchy emphasis

**Spacing:**
- Gap: 8px between radio and label
- Centered alignment

#### 4. Bottom

**Layout:**
```
Label Text
  [Radio]
```

**Use when:**
- Uncommon but available
- Specific design needs
- Label as heading above selection

**Spacing:**
- Gap: 8px between label and radio
- Centered alignment

### FormControlLabel Props

```typescript
interface FormControlLabelProps {
  control: ReactNode;        // The Radio component
  label: string | ReactNode; // Label text or component
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  disabled?: boolean;         // Disables both radio and label
  value?: any;               // Value for form submission
  onChange?: (event) => void;
}
```

### Disabled State

When `disabled={true}`:
- Radio button: Grayed out (rgba(0, 0, 0, 0.26))
- Label text: Grayed out (rgba(0, 0, 0, 0.38))
- Cursor: not-allowed
- Not clickable
- Not keyboard accessible

---

## RadioGroup

The `RadioGroup` component manages multiple related radio buttons, ensuring only one can be selected at a time.

### Orientation Variants

#### 1. Vertical (Column) - Default ⭐

**Layout:**
```
○ Option 1
○ Option 2
○ Option 3
```

**Use when:**
- Standard form layouts
- 3+ options
- Clear vertical scanning
- Most common pattern

**Spacing:**
- Gap: 0px between items (label padding provides space)
- Each FormControlLabel has 8px vertical padding

#### 2. Horizontal (Row)

**Layout:**
```
○ Option 1    ○ Option 2    ○ Option 3
```

**Use when:**
- 2-4 short options
- Horizontal space available
- Quick selection needed
- Compact layouts

**Spacing:**
- Gap: 16px between items
- Wraps to next line if needed

### RadioGroup Features

#### Controlled vs Uncontrolled

**Controlled (Recommended):**
```jsx
const [value, setValue] = useState('option1');

<RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
```

**Uncontrolled:**
```jsx
<RadioGroup defaultValue="option1">
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
```

#### Name Attribute

All radios in a group must share the same `name` attribute:
```html
<input type="radio" name="payment-method" value="card" />
<input type="radio" name="payment-method" value="paypal" />
<input type="radio" name="payment-method" value="bank" />
```

### RadioGroup Props

```typescript
interface RadioGroupProps {
  value?: any;                 // Currently selected value
  defaultValue?: any;          // Initial value (uncontrolled)
  onChange?: (event, value) => void;
  name?: string;               // Form name for all radios
  row?: boolean;               // Horizontal layout
  children: ReactNode;         // FormControlLabel components
}
```

---

## Responsive Behavior

### Desktop (1200px+)

**Layout:**
- Medium size (24px) default
- Comfortable spacing
- Hover states active
- Vertical or horizontal groups work well

**Interaction:**
- Click to select
- Keyboard navigation (Tab, Arrow keys, Space)
- Hover feedback visible

### Tablet (768-1199px)

**Layout:**
- Medium size (24px) recommended
- Vertical groups preferred
- Touch-friendly spacing (48×48px maintained)

**Interaction:**
- Touch to select
- No hover states (touch device)
- Focus states for accessibility

**Adjustments:**
- Increase spacing between radio groups
- Prefer vertical orientation
- Ensure 48×48px touch targets

### Mobile (<768px)

**Layout:**
- Large size (28px) recommended for better touch
- Vertical groups only
- Full-width label text
- Increased spacing

**Interaction:**
- Touch to select
- No hover effects
- Large touch targets critical

**Adjustments:**
```css
@media (max-width: 767px) {
  .radio-group {
    flex-direction: column; /* Force vertical */
  }

  .radio {
    width: var(--component/radio/size-large); /* 28px */
    height: var(--component/radio/size-large);
  }

  .radio-label {
    padding: 12px 0; /* More vertical space */
  }
}
```

---

## Accessibility

### ARIA Attributes

#### Single Radio Button
```html
<input
  type="radio"
  role="radio"
  aria-checked="false"
  aria-disabled="false"
  id="option1"
  name="options"
  value="option1"
/>
<label for="option1">Option 1</label>
```

#### Radio Group
```html
<div role="radiogroup" aria-labelledby="group-label">
  <span id="group-label">Choose an option:</span>

  <label>
    <input type="radio" name="options" value="option1" aria-checked="true" />
    Option 1
  </label>

  <label>
    <input type="radio" name="options" value="option2" aria-checked="false" />
    Option 2
  </label>
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| **Tab** | Move focus to radio group (focuses first or selected radio) |
| **Space** | Select focused radio (if not already selected) |
| **↑ / ←** | Move to previous radio in group & select it |
| **↓ / →** | Move to next radio in group & select it |
| **Home** | Move to first radio in group (optional) |
| **End** | Move to last radio in group (optional) |

**Important:**
- Arrow keys automatically select the radio (unlike checkboxes)
- Only one radio in group is in tab order at a time
- Once in group, arrow keys navigate, not Tab

### Screen Reader Announcements

**When focused:**
```
"Option 1, radio button, 1 of 3, not selected"
```

**After selecting:**
```
"Option 2, radio button, 2 of 3, selected"
```

**Disabled radio:**
```
"Option 3, radio button, 3 of 3, disabled, not selected"
```

**Group announcement:**
```
"Choose your plan, radio group, 3 items"
```

### Focus Management

1. **Initial Focus**
   - Tab focuses the radio group
   - Focus goes to selected radio (if any)
   - Otherwise, focuses first enabled radio

2. **Within Group**
   - Arrow keys move between radios
   - Automatically selects focused radio
   - Loops back to start/end

3. **Leaving Group**
   - Tab moves to next focusable element
   - Shift+Tab moves to previous

### Color Contrast

**WCAG 2.1 Level AA Requirements:**

- **Unchecked border:** 3:1 contrast ratio (for UI components) ✅
  - rgba(0, 0, 0, 0.54) on white: ~4.1:1 ✅

- **Checked state:** 3:1 contrast ratio ✅
  - Primary #4b3fff on white: ~7.3:1 ✅
  - Error #d33423 on white: ~5.8:1 ✅

- **Label text:** 4.5:1 contrast ratio ✅
  - rgba(0, 0, 0, 0.87) on white: ~14.8:1 ✅

- **Disabled state:** 3:1 not required (disabled components exempt)

### Touch Targets

**WCAG 2.5.5 (Level AAA) & 2.5.8 (Level AA - future):**
- Minimum touch target: 44×44px ✅
- Small radio (20px + 28px padding): 48×48px ✅
- Medium radio (24px + 24px padding): 48×48px ✅
- Large radio (28px + 20px padding): 48×48px ✅

All sizes meet accessibility requirements.

---

## Best Practices

### Do's ✅

1. **Provide Clear Labels**
   - Use concise, descriptive text
   - Front-load important words
   - Keep labels short (1-5 words)
   - Make labels clickable

2. **Use Appropriate Grouping**
   - Keep related radios together
   - Use RadioGroup for mutual exclusivity
   - Provide group label/heading

3. **Set Default Selection**
   - Pre-select the most common option
   - Or the safest option
   - Don't force selection if truly optional

4. **Maintain Consistent Size**
   - Use same size throughout a form
   - Match other form controls
   - Consider touch targets on mobile

5. **Provide Visual Feedback**
   - Clear hover states (desktop)
   - Visible focus indicators
   - Smooth checked/unchecked transitions

6. **Use Semantic HTML**
   - Use `<input type="radio">`
   - Associate labels with `for` attribute
   - Group with `<fieldset>` and `<legend>`

### Don'ts ❌

1. **Don't Use for Multiple Selections**
   - Use Checkboxes instead
   - Radio = one choice only
   - Confusing for users

2. **Don't Hide Options**
   - All options should be visible
   - Don't collapse options
   - Don't paginate options

3. **Don't Use Too Many Options**
   - Max 7 options recommended
   - Use Select/Dropdown for 8+
   - Consider hierarchical options

4. **Don't Nest Radio Groups**
   - Avoid radio groups within radio groups
   - Can be confusing
   - Use different pattern

5. **Don't Disable Without Explanation**
   - Explain why option is disabled
   - Consider hiding instead
   - Provide tooltip if needed

6. **Don't Remove Focus Styles**
   - Required for accessibility
   - Keyboard users need it
   - Fails WCAG compliance

7. **Don't Use for Navigation**
   - Use Tabs or Navigation instead
   - Radio = form selection
   - Wrong pattern for switching views

---

## Examples

### Example 1: Basic Radio Group (Vertical)

```html
<fieldset>
  <legend>Choose your subscription plan</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="free"
        checked
        class="radio"
      />
      <span>Free Plan</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="pro"
        class="radio"
      />
      <span>Pro Plan - $9.99/month</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="enterprise"
        class="radio"
      />
      <span>Enterprise Plan - $49.99/month</span>
    </label>
  </div>
</fieldset>

<style>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: var(--component/radio/label-gap);
  padding: var(--component/radio/label-padding-vertical) 0;
  cursor: pointer;
  font-family: var(--typography/inputs/label-lg/font-family);
  font-size: var(--typography/inputs/label-lg/font-size);
  color: var(--colors/text/primary);
}

.radio {
  appearance: none;
  width: var(--component/radio/size-medium);
  height: var(--component/radio/size-medium);
  border: 2px solid var(--colors/action/active);
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.radio:checked {
  border-color: var(--colors/primary/main);
}

.radio:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 100px;
  background: var(--colors/primary/main);
  animation: radio-check 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.radio:focus {
  outline: 2px solid var(--colors/primary/main);
  outline-offset: 2px;
}

.radio:disabled {
  border-color: var(--colors/action/disabled);
  cursor: not-allowed;
}

.radio:disabled:checked::before {
  background: var(--colors/action/disabled);
}

@keyframes radio-check {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
```

### Example 2: Horizontal Radio Group

```html
<fieldset>
  <legend>Select your size</legend>

  <div class="radio-group-horizontal" role="radiogroup">
    <label class="radio-label">
      <input type="radio" name="size" value="xs" class="radio" />
      <span>XS</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="s" class="radio" checked />
      <span>S</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="m" class="radio" />
      <span>M</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="l" class="radio" />
      <span>L</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="xl" class="radio" />
      <span>XL</span>
    </label>
  </div>
</fieldset>

<style>
.radio-group-horizontal {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
}

/* Responsive: Stack on mobile */
@media (max-width: 767px) {
  .radio-group-horizontal {
    flex-direction: column;
    gap: 0;
  }
}
</style>
```

### Example 3: Radio with Error State

```html
<fieldset class="radio-group-error">
  <legend>Terms and Conditions *</legend>

  <div class="radio-group" role="radiogroup" aria-invalid="true" aria-describedby="terms-error">
    <label class="radio-label">
      <input
        type="radio"
        name="terms"
        value="accept"
        class="radio radio-error"
        required
      />
      <span>I accept the terms and conditions</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="terms"
        value="decline"
        class="radio radio-error"
      />
      <span>I decline</span>
    </label>
  </div>

  <span id="terms-error" class="error-message" role="alert">
    You must accept the terms to continue
  </span>
</fieldset>

<style>
.radio-error:checked {
  border-color: var(--colors/error/main);
}

.radio-error:checked::before {
  background: var(--colors/error/main);
}

.error-message {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: var(--colors/error/main);
}
</style>
```

### Example 4: Disabled Radio Options

```html
<fieldset>
  <legend>Select payment method</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-label">
      <input
        type="radio"
        name="payment"
        value="card"
        class="radio"
        checked
      />
      <span>Credit/Debit Card</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="payment"
        value="paypal"
        class="radio"
      />
      <span>PayPal</span>
    </label>

    <label class="radio-label radio-label-disabled">
      <input
        type="radio"
        name="payment"
        value="crypto"
        class="radio"
        disabled
      />
      <span>Cryptocurrency (Coming Soon)</span>
    </label>
  </div>
</fieldset>

<style>
.radio-label-disabled {
  color: var(--colors/text/disabled);
  cursor: not-allowed;
}
</style>
```

### Example 5: Radio with Description Text

```html
<fieldset>
  <legend>Choose your backup frequency</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-card">
      <input type="radio" name="backup" value="daily" class="radio" checked />
      <div class="radio-content">
        <div class="radio-title">Daily Backup</div>
        <div class="radio-description">
          Automatic backups every 24 hours
        </div>
      </div>
    </label>

    <label class="radio-card">
      <input type="radio" name="backup" value="weekly" class="radio" />
      <div class="radio-content">
        <div class="radio-title">Weekly Backup</div>
        <div class="radio-description">
          Automatic backups every Sunday at midnight
        </div>
      </div>
    </label>

    <label class="radio-card">
      <input type="radio" name="backup" value="manual" class="radio" />
      <div class="radio-content">
        <div class="radio-title">Manual Backup</div>
        <div class="radio-description">
          Only when you choose to back up
        </div>
      </div>
    </label>
  </div>
</fieldset>

<style>
.radio-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--colors/border/default);
  border-radius: var(--border-radius/medium);
  cursor: pointer;
  transition: all 150ms;
}

.radio-card:hover {
  background: var(--colors/action/hover);
}

.radio-card:has(.radio:checked) {
  border-color: var(--colors/primary/main);
  background: var(--colors/primary/light);
}

.radio-content {
  flex: 1;
}

.radio-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--colors/text/primary);
  margin-bottom: 4px;
}

.radio-description {
  font-size: 14px;
  color: var(--colors/text/secondary);
}
</style>
```

---

## Component Variations Summary

| Variant | Size | Colors | States | Use Case |
|---------|------|--------|--------|----------|
| Small | 20px | 7 | 5 | Dense UIs, tables |
| Medium ⭐ | 24px | 7 | 5 | Standard forms |
| Large | 28px | 7 | 5 | Touch-first, accessibility |

**Total Combinations:** 3 sizes × 7 colors × 5 states × 2 checked states = 210 variants

---

## Related Components

- **Checkbox:** For multiple selections or on/off toggles
- **Switch/Toggle:** For binary on/off states with immediate effect
- **Select/Dropdown:** For single selection from many options (8+)
- **Button Group:** For mutually exclusive button selections
- **Segmented Control:** For 2-5 mutually exclusive options with equal emphasis
- **Tabs:** For switching between different views/content

---

## Changelog

**v1.0.0** (2026-02-26)
- Initial documentation
- 3 size variants (Small 20px, Medium 24px, Large 28px)
- 7 color variants (Default, Primary, Secondary, Error, Warning, Info, Success)
- 5 states (Enabled, Hovered, Focused, Pressed, Disabled)
- 2 checked states (Unchecked, Checked)
- FormControlLabel with 4 label placements
- RadioGroup with vertical/horizontal orientation
- Full accessibility support (ARIA, keyboard)
- Responsive specifications
- Complete token specifications
- Usage guidelines and examples

---

**Questions or feedback?** Refer to the design system team or contribute improvements to this documentation.

**File Location:** `DESIGN-SYSTEM-DOCUMENTATION-RADIO.md`
**Component Status:** ✅ Production Ready


---


# Switch Component Documentation

## Overview
The Switch component is a toggle control that allows users to switch between two states (on/off, checked/unchecked). It follows Material Design principles and provides immediate visual feedback for state changes.

**Component Type:** Form Input Control
**Based on:** Material-UI (MUI) v6.1.0 Switch
**Documentation:** [MUI Switch API](https://mui.com/api/switch)

---

## Component Anatomy

### Base Structure
```
┌─────────────────────────────────┐
│         <Switch />              │
│  ┌────────────────────┐         │
│  │  Track             │         │
│  │    ┌────┐          │         │
│  │    │Knob│──────────┤         │
│  │    └────┘          │         │
│  └────────────────────┘         │
└─────────────────────────────────┘
```

### Elements
1. **Track** - The horizontal bar background that indicates the toggle path
2. **Knob** - The circular thumb element that slides along the track
3. **Ripple** - The interaction feedback overlay (on hover/press)
4. **Focus Ring** - The keyboard focus indicator

---

## Design Tokens

### Size Tokens
```typescript
// Small Size
'--component/switch/size-small/track-width': '36px',
'--component/switch/size-small/track-height': '20px',
'--component/switch/size-small/knob-size': '16px',
'--component/switch/size-small/padding': '7px',

// Medium Size (Default)
'--component/switch/size-medium/track-width': '44px',
'--component/switch/size-medium/track-height': '24px',
'--component/switch/size-medium/knob-size': '20px',
'--component/switch/size-medium/padding': '9px',
```

### Color Tokens - Unchecked State
```typescript
'--component/switch/track-bg-unchecked': 'rgba(0, 0, 0, 0.38)',
'--component/switch/knob-bg-unchecked': '#fafafa',
'--component/switch/track-bg-unchecked-hover': 'rgba(0, 0, 0, 0.54)',
'--component/switch/track-bg-unchecked-disabled': 'rgba(0, 0, 0, 0.12)',
'--component/switch/knob-bg-unchecked-disabled': '#bdbdbd',
```

### Color Tokens - Checked State (Primary)
```typescript
'--component/switch/track-bg-primary': 'rgba(75, 63, 255, 0.5)',
'--component/switch/knob-bg-primary': '#4b3fff',
'--component/switch/track-bg-primary-hover': 'rgba(75, 63, 255, 0.7)',
'--component/switch/track-bg-primary-disabled': 'rgba(75, 63, 255, 0.12)',
'--component/switch/knob-bg-primary-disabled': 'rgba(75, 63, 255, 0.38)',
```

### Color Tokens - Checked State (Secondary)
```typescript
'--component/switch/track-bg-secondary': 'rgba(220, 0, 78, 0.5)',
'--component/switch/knob-bg-secondary': '#dc004e',
'--component/switch/track-bg-secondary-hover': 'rgba(220, 0, 78, 0.7)',
```

### Color Tokens - Checked State (Error)
```typescript
'--component/switch/track-bg-error': 'rgba(211, 47, 47, 0.5)',
'--component/switch/knob-bg-error': '#d32f2f',
'--component/switch/track-bg-error-hover': 'rgba(211, 47, 47, 0.7)',
```

### Color Tokens - Checked State (Warning)
```typescript
'--component/switch/track-bg-warning': 'rgba(237, 108, 2, 0.5)',
'--component/switch/knob-bg-warning': '#ed6c02',
'--component/switch/track-bg-warning-hover': 'rgba(237, 108, 2, 0.7)',
```

### Color Tokens - Checked State (Info)
```typescript
'--component/switch/track-bg-info': 'rgba(2, 136, 209, 0.5)',
'--component/switch/knob-bg-info': '#0288d1',
'--component/switch/track-bg-info-hover': 'rgba(2, 136, 209, 0.7)',
```

### Color Tokens - Checked State (Success)
```typescript
'--component/switch/track-bg-success': 'rgba(46, 125, 50, 0.5)',
'--component/switch/knob-bg-success': '#2e7d32',
'--component/switch/track-bg-success-hover': 'rgba(46, 125, 50, 0.7)',
```

### Interaction Tokens
```typescript
'--component/switch/ripple-color': 'rgba(75, 63, 255, 0.12)',
'--component/switch/focus-ring-color': 'rgba(75, 63, 255, 0.2)',
'--component/switch/focus-ring-width': '12px',
'--component/switch/transition-duration': '150ms',
'--component/switch/transition-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
```

### Elevation Tokens
```typescript
'--component/switch/knob-elevation': 'var(--elevation/1)',
// elevation/1: 0px 2px 1px -1px rgba(0,0,0,0.2),
//             0px 1px 1px 0px rgba(0,0,0,0.14),
//             0px 1px 3px 0px rgba(0,0,0,0.12)
```

---

## Size Variants

### Small
- **Track:** 36px × 20px
- **Knob:** 16px diameter
- **Knob Position (Unchecked):** 2px from left
- **Knob Position (Checked):** 18px from left
- **Use Case:** Compact forms, dense layouts, mobile interfaces
- **Touch Target:** 40px × 40px minimum (includes padding)

### Medium (Default)
- **Track:** 44px × 24px
- **Knob:** 20px diameter
- **Knob Position (Unchecked):** 2px from left
- **Knob Position (Checked):** 22px from left
- **Use Case:** Standard forms, general UI controls
- **Touch Target:** 48px × 48px (includes padding)

---

## Color Variants

### Default
- **Unchecked Track:** `rgba(0, 0, 0, 0.38)`
- **Unchecked Knob:** `#fafafa`
- **Checked Track:** `rgba(0, 0, 0, 0.5)`
- **Checked Knob:** `#424242`
- **Use Case:** Neutral toggles, settings without semantic meaning

### Primary
- **Checked Track:** `rgba(75, 63, 255, 0.5)`
- **Checked Knob:** `#4b3fff`
- **Use Case:** Primary actions, main feature toggles

### Secondary
- **Checked Track:** `rgba(220, 0, 78, 0.5)`
- **Checked Knob:** `#dc004e`
- **Use Case:** Secondary feature toggles, alternative options

### Error
- **Checked Track:** `rgba(211, 47, 47, 0.5)`
- **Checked Knob:** `#d32f2f`
- **Use Case:** Danger zone toggles, destructive actions

### Warning
- **Checked Track:** `rgba(237, 108, 2, 0.5)`
- **Checked Knob:** `#ed6c02`
- **Use Case:** Caution toggles, warnings that need confirmation

### Info
- **Checked Track:** `rgba(2, 136, 209, 0.5)`
- **Checked Knob:** `#0288d1`
- **Use Case:** Informational toggles, notification settings

### Success
- **Checked Track:** `rgba(46, 125, 50, 0.5)`
- **Checked Knob:** `#2e7d32`
- **Use Case:** Success state toggles, completed actions

---

## States

### 1. Enabled (Default)
- **Track Opacity:** 50% (checked), 38% (unchecked)
- **Knob:** Full opacity
- **Cursor:** pointer
- **Interaction:** Fully interactive

### 2. Hovered
- **Track Opacity:** Increased by ~20%
- **Ripple:** Visible background overlay
- **Ripple Size:** 40px (small), 48px (medium)
- **Ripple Color:** Color-based with 12% opacity
- **Cursor:** pointer
- **Transition:** 150ms ease

### 3. Focused
- **Focus Ring:** Visible around entire component
- **Ring Size:** 48px (small), 56px (medium)
- **Ring Color:** Color-based with 20% opacity
- **Track/Knob:** No change from default
- **Keyboard:** Space key toggles

### 4. Pressed
- **Knob:** Slightly compressed (visual feedback)
- **Ripple:** Expanded to full size
- **Track:** Same as hovered state
- **Transition:** Immediate

### 5. Disabled
- **Track Opacity:** 12% (all colors)
- **Knob Color:** Muted gray (#bdbdbd unchecked, rgba with 38% opacity checked)
- **Cursor:** not-allowed
- **Interaction:** No hover, focus, or click events
- **Opacity:** Overall reduced appearance

---

## Checked States

### Unchecked (False)
- **Knob Position:** Left side of track
- **Track Color:** Gray/muted (all color variants)
- **Knob Color:** Light gray (#fafafa)
- **Visual:** Minimal emphasis

### Checked (True)
- **Knob Position:** Right side of track
- **Track Color:** 50% opacity of color variant
- **Knob Color:** Full color of variant
- **Visual:** Strong color emphasis

---

## FormControlLabel Integration

### Anatomy with Label
```
┌─────────────────────────────────────────┐
│  [Switch] Label Text                    │  (End placement)
│  Label Text [Switch]                    │  (Start placement)
│      Label Text                         │  (Top placement)
│       [Switch]                          │
│       [Switch]                          │  (Bottom placement)
│      Label Text                         │
└─────────────────────────────────────────┘
```

### Label Placements

#### End (Default)
- **Layout:** Switch on left, label on right
- **Gap:** 8px
- **Alignment:** Center-aligned vertically
- **Use Case:** Standard forms (most common)

#### Start
- **Layout:** Label on left, switch on right
- **Gap:** 8px
- **Alignment:** Center-aligned vertically
- **Use Case:** Right-aligned layouts, data tables

#### Top
- **Layout:** Label on top, switch on bottom
- **Gap:** 4px
- **Alignment:** Center-aligned horizontally
- **Use Case:** Vertical lists, card layouts

#### Bottom
- **Layout:** Switch on top, label on bottom
- **Gap:** 4px
- **Alignment:** Center-aligned horizontally
- **Use Case:** Icon grids, feature cards

### FormControlLabel Tokens
```typescript
'--component/form-control-label/gap-horizontal': '8px',
'--component/form-control-label/gap-vertical': '4px',
'--component/form-control-label/label-color': 'rgba(0, 0, 0, 0.87)',
'--component/form-control-label/label-color-disabled': 'rgba(0, 0, 0, 0.38)',
'--component/form-control-label/label-font-size': '16px',
'--component/form-control-label/label-line-height': '24px',
```

---

## FormGroup Integration

### Purpose
Groups multiple Switch components together with optional:
- Shared label/legend
- Vertical or horizontal layout
- Row configuration (switches per row)
- Error state
- Helper text

### Layout Options

#### Vertical (Default)
```
┌─────────────────────────┐
│ Feature Group           │
│ ───────────────────────│
│ [Switch] Option 1       │
│ [Switch] Option 2       │
│ [Switch] Option 3       │
│ Helper text here        │
└─────────────────────────┘
```

#### Horizontal
```
┌──────────────────────────────────────────┐
│ Feature Group                            │
│ ────────────────────────────────────────│
│ [Switch] One  [Switch] Two  [Switch] Three│
│ Helper text here                         │
└──────────────────────────────────────────┘
```

### States

#### Normal
- **Border:** None
- **Background:** Transparent
- **Spacing:** 8px between switches

#### Error
- **Label Color:** Error color (#d32f2f)
- **Helper Text:** Error color
- **Border:** Optional 1px error color

#### Disabled
- **All switches:** Disabled state
- **Label:** 38% opacity
- **Helper text:** 38% opacity

### FormGroup Tokens
```typescript
'--component/form-group/gap': '8px',
'--component/form-group/label-font-size': '16px',
'--component/form-group/label-font-weight': '500',
'--component/form-group/label-color': 'rgba(0, 0, 0, 0.87)',
'--component/form-group/label-color-error': '#d32f2f',
'--component/form-group/helper-text-font-size': '12px',
'--component/form-group/helper-text-color': 'rgba(0, 0, 0, 0.6)',
'--component/form-group/helper-text-color-error': '#d32f2f',
```

---

## Total Variant Combinations

**Base Switch:** 2 sizes × 7 colors × 5 states × 2 checked states = **140 variants**

**With FormControlLabel:** 140 × 4 label placements × 2 disabled states = **1,120 variants**

**With FormGroup:** 3-5 switches × 2 orientations × 3 states (normal/error/disabled) × multiple rows = **Highly variable**

---

## Usage Guidelines

### When to Use
- Binary on/off settings
- Enable/disable features
- Show/hide content controls
- Notification preferences
- Privacy settings
- Feature flags in admin panels

### When NOT to Use
- Mutually exclusive options (use Radio buttons)
- Multiple selections from a list (use Checkboxes)
- Actions that require confirmation (use Button)
- Navigation between views (use Tabs)

### Best Practices

#### Do
- Provide immediate visual feedback on toggle
- Use labels to clearly describe what the switch controls
- Make the effect of the switch obvious
- Use color meaningfully (error for dangerous actions)
- Group related switches with FormGroup
- Ensure 48×48px touch targets on mobile
- Use Primary color for main features
- Provide helper text for complex settings

#### Don't
- Use switches for actions requiring immediate submission
- Hide critical information behind switches
- Use unclear or ambiguous labels
- Stack too many switches without grouping
- Use switches for navigation
- Require multiple switches to accomplish one task
- Use only icons without text labels

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus on switch
- **Space:** Toggle switch state
- **Shift+Tab:** Focus previous element

#### Screen Readers
```html
<Switch
  role="switch"
  aria-checked="true"
  aria-label="Enable notifications"
  aria-describedby="switch-helper-text"
/>
```

#### Focus Management
- Clear focus indicator (focus ring)
- Focus ring size: 48px (small), 56px (medium)
- Focus ring color: Color variant with 20% opacity
- Minimum contrast ratio: 3:1 against background

#### Color Contrast
- **Checked Knob:** Minimum 3:1 against track
- **Unchecked Knob:** Minimum 3:1 against track
- **Label Text:** Minimum 4.5:1 against background
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Small:** Minimum 40×40px (includes padding)
- **Medium:** Minimum 48×48px (includes padding)
- **Spacing:** Minimum 8px between adjacent switches

#### ARIA Attributes
```typescript
{
  role: "switch",
  "aria-checked": boolean,
  "aria-label": string,         // If no visible label
  "aria-labelledby": string,    // Reference to label element
  "aria-describedby": string,   // Reference to helper text
  "aria-disabled": boolean,
  "aria-required": boolean,     // For required fields
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use **Small** size for compact layouts
- Minimum touch target: 48×48px
- Stack switches vertically in FormGroup
- Increase spacing between switches to 12px
- Consider FormControlLabel with End placement

### Tablet (600px - 960px)
- Use **Medium** size (default)
- FormGroup can be horizontal or vertical
- Maintain 48×48px touch targets
- 2-3 switches per row maximum

### Desktop (> 960px)
- Use **Medium** size (default)
- FormGroup can have multiple columns
- Mouse interactions with hover states
- Can display 4+ switches per row
- Keyboard navigation essential

### Breakpoint Tokens
```typescript
'--component/switch/mobile-size': 'small',
'--component/switch/tablet-size': 'medium',
'--component/switch/desktop-size': 'medium',
'--component/switch/mobile-spacing': '12px',
'--component/switch/tablet-spacing': '8px',
'--component/switch/desktop-spacing': '8px',
```

---

## Code Examples

### Basic Switch
```tsx
import Switch from '@mui/material/Switch';

export default function BasicSwitch() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      color="primary"
      size="medium"
    />
  );
}
```

### Switch with Label
```tsx
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function SwitchWithLabel() {
  return (
    <FormControlLabel
      control={
        <Switch
          defaultChecked
          color="primary"
          size="small"
        />
      }
      label="Enable notifications"
      labelPlacement="end"
    />
  );
}
```

### Switch Group
```tsx
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function SwitchGroup() {
  const [state, setState] = React.useState({
    notifications: true,
    emails: false,
    sms: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <FormLabel component="legend">Communication Preferences</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.notifications}
              onChange={handleChange}
              name="notifications"
              color="primary"
            />
          }
          label="Push Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.emails}
              onChange={handleChange}
              name="emails"
              color="primary"
            />
          }
          label="Email Updates"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.sms}
              onChange={handleChange}
              name="sms"
              color="primary"
            />
          }
          label="SMS Alerts"
        />
      </FormGroup>
      <FormHelperText>
        Choose your preferred communication channels
      </FormHelperText>
    </div>
  );
}
```

### Colored Switches
```tsx
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

export default function ColoredSwitches() {
  return (
    <Stack direction="row" spacing={2}>
      <Switch defaultChecked color="primary" />
      <Switch defaultChecked color="secondary" />
      <Switch defaultChecked color="error" />
      <Switch defaultChecked color="warning" />
      <Switch defaultChecked color="info" />
      <Switch defaultChecked color="success" />
      <Switch defaultChecked color="default" />
    </Stack>
  );
}
```

### Disabled Switch
```tsx
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function DisabledSwitch() {
  return (
    <FormControlLabel
      control={<Switch defaultChecked disabled />}
      label="Cannot be changed"
      disabled
    />
  );
}
```

### Controlled Switch with Validation
```tsx
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

export default function ValidatedSwitch() {
  const [accepted, setAccepted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(event.target.checked);
    setError(false);
  };

  const handleSubmit = () => {
    if (!accepted) {
      setError(true);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={accepted}
            onChange={handleChange}
            color={error ? "error" : "primary"}
          />
        }
        label="I accept the terms and conditions"
      />
      {error && (
        <FormHelperText error>
          You must accept the terms to continue
        </FormHelperText>
      )}
    </FormGroup>
  );
}
```

---

## Related Components
- **Checkbox:** Multiple selections from a list
- **Radio:** Mutually exclusive options
- **Toggle Button:** Visual toggle with button styling
- **Slider:** Range selection
- **Select:** Dropdown selection

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11022:144509
- **Component:** `<Switch>`
- **Documentation:** [MUI Switch API](https://mui.com/api/switch)

---

## Migration Notes

### From Previous Design System
- Track width increased from 34px to 36px (small) and 42px to 44px (medium)
- Knob size standardized to 16px (small) and 20px (medium)
- Added color variants: Error, Warning, Info, Success
- Ripple effect now matches color variant
- Focus ring size increased for better visibility
- Disabled state opacity reduced to 12% (was 20%)

### Design Tokens Required
- All color tokens from the color palette
- Elevation tokens (elevation/1)
- Typography tokens (body1 for labels)
- Spacing tokens (4px, 8px, 12px)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 140 base variant combinations documented
- Full accessibility compliance


---


# Select & Autocomplete Component Documentation

## Overview
Select and Autocomplete are dropdown components that allow users to choose one or multiple options from a list. Select displays predefined options, while Autocomplete adds search/filter functionality.

**Component Type:** Form Input Control
**Based on:** Material-UI (MUI) v6.1.0 Select & Autocomplete
**Documentation:** [MUI Select](https://mui.com/api/select) | [MUI Autocomplete](https://mui.com/api/autocomplete)

---

## Design Tokens

### Size Tokens
```typescript
// Small
'--component/select/size-small/height-min': '28px',
'--component/select/size-small/padding-x': '8px',
'--component/select/size-small/padding-y': '2px',
'--component/select/size-small/font-size': '12px',
'--component/select/size-small/line-height': '18px',
'--component/select/size-small/label-font-size': '12px',
'--component/select/size-small/chip-height': '28px',

// Medium (Default)
'--component/select/size-medium/height-min': '32px',
'--component/select/size-medium/padding': '4px',
'--component/select/size-medium/padding-right': '8px',
'--component/select/size-medium/font-size': '14px',
'--component/select/size-medium/line-height': '20px',
'--component/select/size-medium/label-font-size': '14px',
'--component/select/size-medium/chip-height': '28px',

// Large
'--component/select/size-large/height-min': '40px',
'--component/select/size-large/padding': '4px',
'--component/select/size-large/padding-right': '8px',
'--component/select/size-large/font-size': '16px',
'--component/select/size-large/line-height': '24px',
'--component/select/size-large/label-font-size': '16px',
'--component/select/size-large/chip-height': '40px',
```

### Color Tokens
```typescript
'--component/select/bg-color': 'white',
'--component/select/bg-color-disabled': '#f2f2f2',
'--component/select/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/select/text-color-secondary': 'rgba(0, 0, 0, 0.6)',
'--component/select/label-color': 'rgba(0, 0, 0, 0.87)',
'--component/select/border-color-idle': 'rgba(0, 0, 0, 0.5)',
'--component/select/border-color-hover': 'rgba(0, 0, 0, 0.87)',
'--component/select/border-color-disabled': 'rgba(0, 0, 0, 0.12)',
'--component/select/border-width': '1px',
'--component/select/border-radius': '3px',
'--component/select/focus-ring-color': '#4b3fff',
'--component/select/focus-ring-width': '2px',
'--component/select/focus-ring-offset': '-5px',
```

### Chip Tokens (Multi-select)
```typescript
'--component/select/chip-bg-color': '#f2f2f2',
'--component/select/chip-border-color': '#adafb1',
'--component/select/chip-text-color': 'rgba(0, 0, 0, 0.87)',
'--component/select/chip-gap': '4px',
'--component/select/chip-padding': '4px',
'--component/select/chip-border-radius': '4px',
```

---

## Size Variants

### Small
- **Min Height:** 28px
- **Padding:** 8px (X), 2px (Y)
- **Font:** 12px / 18px line-height
- **Label:** 12px
- **Chip Height:** 28px
- **Use Case:** Compact forms, dense tables, mobile interfaces

### Medium (Default)
- **Min Height:** 32px
- **Padding:** 4px, 8px right
- **Font:** 14px / 20px line-height
- **Label:** 14px
- **Chip Height:** 28px
- **Use Case:** Standard forms, general UI

### Large
- **Min Height:** 40px
- **Padding:** 4px, 8px right
- **Font:** 16px / 24px line-height
- **Label:** 16px
- **Chip Height:** 40px
- **Use Case:** Accessibility-focused interfaces, touch devices

---

## States

### 1. Idle
- **Border:** 1px solid `rgba(0, 0, 0, 0.5)`
- **Background:** White
- **Text:** Primary `rgba(0, 0, 0, 0.87)`
- **Icon:** Down arrow (menu-down)

### 2. Hover
- **Border:** 1px solid `rgba(0, 0, 0, 0.87)`
- **Background:** White
- **Icon:** Close (X) appears before dropdown arrow
- **Cursor:** pointer

### 3. Focused
- **Border:** 1px solid border color
- **Focus Ring:** 2px solid `#4b3fff`, -5px inset
- **Border Radius:** 8px on focus ring
- **Keyboard:** Accessible via Tab

### 4. Disabled
- **Border:** 1px solid `rgba(0, 0, 0, 0.12)`
- **Background:** `#f2f2f2`
- **Text:** Secondary `rgba(0, 0, 0, 0.6)`
- **Cursor:** not-allowed
- **Interaction:** None

---

## Selection Types

### Single Selection
- Displays single selected value as text
- Replaces with new selection on click
- Close icon (X) appears on hover to clear
- Example: "Typography", "Example text"

### Multiple Selection
- Displays selected values as Chips
- Shows up to 3 chips + "+N more" indicator
- Each chip shows a label (e.g., "Chip")
- Chips wrap to multiple lines if needed
- Close icon (X) on hover clears all selections

---

## Select vs Autocomplete

### Select
- **Purpose:** Choose from predefined list
- **Interaction:** Click to open dropdown
- **Search:** No built-in search
- **Options:** All options shown
- **Use Case:** Limited options (< 20), known choices

### Autocomplete
- **Purpose:** Search and select from large lists
- **Interaction:** Type to filter options
- **Search:** Real-time filtering
- **Options:** Filtered based on input
- **Use Case:** Large option lists (20+), unknown values, flexible input

---

## Usage Guidelines

### When to Use
- Selecting from predefined options
- Form inputs with 5+ choices
- Filtering large datasets
- Category selection
- Multi-select with visual feedback
- Search with suggestions

### When NOT to Use
- Less than 5 options (use Radio buttons)
- Binary choice (use Switch or Checkbox)
- Free-form text input (use TextField)
- Date selection (use DatePicker)
- Navigation (use Menu)

### Best Practices

#### Do
- Provide clear labels
- Use appropriate size for context
- Show placeholder text when empty
- Limit multi-select chip display (max 3 + counter)
- Enable keyboard navigation
- Provide clear selection feedback
- Use autocomplete for 20+ options

#### Don't
- Use for fewer than 5 options
- Disable without explanation
- Hide selected values in multi-select
- Use unclear placeholder text
- Mix single and multi-select patterns
- Make dropdown too narrow for content

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus select/autocomplete
- **Space/Enter:** Open dropdown
- **Arrow Up/Down:** Navigate options
- **Escape:** Close dropdown
- **Backspace:** Remove chip (multi-select)

#### Screen Readers
```html
<Autocomplete
  options={options}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Select option"
      aria-label="Select option"
      aria-required="true"
    />
  )}
/>
```

#### ARIA Attributes
```typescript
{
  role: "combobox",
  "aria-expanded": boolean,
  "aria-haspopup": "listbox",
  "aria-controls": "listbox-id",
  "aria-activedescendant": "option-id",
  "aria-label": string,
  "aria-required": boolean,
  "aria-disabled": boolean,
  "aria-invalid": boolean,
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast
- Focus visible on Tab key
- Focus ring offset -5px with 8px border radius

#### Color Contrast
- **Label/Text:** 4.5:1 minimum
- **Border (Idle):** 3:1 minimum
- **Border (Hover):** 4.5:1
- **Chips:** 3:1 border contrast
- **Disabled:** Exempt from requirements

---

## Code Examples

### Basic Select
```tsx
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function BasicSelect() {
  const [value, setValue] = React.useState('');

  return (
    <FormControl fullWidth>
      <InputLabel>Typography</InputLabel>
      <Select
        value={value}
        label="Typography"
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}
```

### Autocomplete - Single
```tsx
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function SingleAutocomplete() {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Typography" />
      )}
    />
  );
}
```

### Autocomplete - Multiple with Chips
```tsx
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

const options = ['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5'];

export default function MultipleAutocomplete() {
  return (
    <Autocomplete
      multiple
      limitTags={3}
      options={options}
      defaultValue={['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4']}
      renderInput={(params) => (
        <TextField {...params} label="Typography" />
      )}
      renderTags={(value, getTagProps) =>
        value.slice(0, 3).map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            size="small"
          />
        )).concat(
          value.length > 3 ? [
            <Chip key="more" label={`+${value.length - 3} more`} size="small" />
          ] : []
        )
      }
    />
  );
}
```

### Size Variants
```tsx
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';

export default function SelectSizes() {
  return (
    <Stack spacing={2}>
      <FormControl size="small">
        <Select defaultValue="option1">
          <MenuItem value="option1">Small</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="medium">
        <Select defaultValue="option1">
          <MenuItem value="option1">Medium</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="large">
        <Select defaultValue="option1">
          <MenuItem value="option1">Large</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
```

---

## Total Variant Combinations

**Select/Autocomplete:** 3 sizes × 3 states × 2 selection types = **18 base variants**
**With Label:** 18 × 2 (with/without label) = **36 variants**
**With Chips:** Multi-select can display 1-6+ chips with counter = **Variable combinations**

---

## Related Components
- **TextField:** Free-form text input
- **Checkbox:** Multiple independent selections
- **Radio:** Single selection from list
- **Menu:** Contextual action list
- **Chip:** Visual tags/labels

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:133087
- **Component:** Select & Autocomplete
- **Documentation:** [MUI Select](https://mui.com/api/select) | [MUI Autocomplete](https://mui.com/api/autocomplete)

---

## Migration Notes

### From Previous Design System
- Border radius standardized to 3px
- Focus ring now uses primary color (#4b3fff)
- Chip styling updated with gray borders
- Multiple selection limited to 3 visible chips
- Hover state now shows clear (X) icon
- Min height adjusted for better touch targets
- Disabled background changed to #f2f2f2

### Design Tokens Required
- All color tokens (text, border, background)
- Typography tokens for inputs
- Chip component tokens
- Spacing tokens (2px, 4px, 8px)
- Border radius (3px, 4px, 8px)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 36+ variant combinations
- Full accessibility compliance


---


# Slider Component Documentation

## Overview
The Slider component allows users to select a value or range of values by moving a thumb along a track. It's used for adjusting settings, selecting ranges, filtering data, or any input that benefits from visual feedback across a continuous or discrete range.

**Component Type:** Input / Form Component
**Based on:** Material-UI (MUI) v6.1.0 Slider
**Documentation:** [MUI Slider API](https://mui.com/api/slider)

---

## Design Tokens

### Track Tokens
```typescript
// Uses CDS sizing system
'--component/slider/track-height': '4px',
'--component/slider/track-border-radius': '2px',
'--component/slider/rail-opacity': '0.38',
```

### Thumb Tokens
```typescript
// Uses CDS sizing system
'--component/slider/thumb-size': '20px',
'--component/slider/thumb-size-small': '16px',
'--component/slider/thumb-border-width': '2px',
'--component/slider/thumb-hover-size': '24px',
'--component/slider/thumb-focus-size': '28px',
```

### Color Tokens
```typescript
// Primary Slider (Default)
'--component/slider/primary/track-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/slider/primary/thumb-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/slider/primary/rail-color': 'var(--color-palatte/primary/main, #4b3fff)',

// Secondary Slider
'--component/slider/secondary/track-color': 'var(--color-palatte/secondary/main, #dc004e)',
'--component/slider/secondary/thumb-color': 'var(--color-palatte/secondary/main, #dc004e)',
'--component/slider/secondary/rail-color': 'var(--color-palatte/secondary/main, #dc004e)',

// Rail (Inactive Track)
'--component/slider/rail/bg-color': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26))',

// Disabled
'--component/slider/disabled/track-color': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26))',
'--component/slider/disabled/thumb-color': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26))',
```

### Value Label Tokens
```typescript
'--component/slider/value-label/bg-color': 'var(--color-palatte/grey/700, #616161)',
'--component/slider/value-label/text-color': '#ffffff',
'--component/slider/value-label/font-size': 'var(--typography/base-styles/caption/font-size, 12px)',
'--component/slider/value-label/font-weight': '500',
'--component/slider/value-label/padding': 'var(--spacing/1, 4px) var(--spacing/2, 8px)',
'--component/slider/value-label/border-radius': 'var(--border-radius/small, 4px)',
```

### Mark Tokens
```typescript
'--component/slider/mark-size': '2px',
'--component/slider/mark-color': 'var(--color-palatte/background/paper, #ffffff)',
'--component/slider/mark-active-color': 'currentColor',
```

---

## Component Anatomy

### Rail (Inactive Track)
- **Width:** 100% of slider width
- **Height:** 4px
- **Color:** Light grey (26% opacity)
- **Border Radius:** 2px
- **Purpose:** Shows full range available

### Track (Active)
- **Width:** From start to thumb position (or between thumbs)
- **Height:** 4px
- **Color:** Primary color
- **Border Radius:** 2px
- **Purpose:** Shows selected range

### Thumb
- **Size:** 20×20px (standard), 16×16px (small)
- **Shape:** Circle
- **Color:** Primary color
- **Border:** 2px white (on colored backgrounds)
- **Hover:** Increases to 24px
- **Focus:** Ring at 28px
- **Draggable:** Yes

### Value Label (Optional)
- **Position:** Above thumb
- **Content:** Current value
- **Background:** Dark grey
- **Text:** White
- **Font:** 12px (CDS caption)
- **Padding:** 4px 8px (CDS spacing/1, spacing/2)
- **Border Radius:** 4px (CDS small)
- **Show:** On hover, focus, or always

### Marks (Optional)
- **Size:** 2×2px dots
- **Position:** Along track
- **Color:** White (on rail), current color (on track)
- **Spacing:** Even distribution or custom
- **Labels:** Optional text below marks

---

## Slider Types

### Continuous Slider
- **Values:** Any value in range
- **Step:** Continuous (no discrete steps)
- **Use Case:** Volume, brightness, opacity
- **Visual:** Smooth sliding
- **Min/Max:** Defined range

### Discrete Slider
- **Values:** Specific step values only
- **Step:** Defined increment (e.g., 5, 10)
- **Use Case:** Age ranges, ratings, quantities
- **Visual:** Snaps to marks
- **Marks:** Optional visible dots

### Range Slider
- **Thumbs:** Two (start and end)
- **Values:** Array [min, max]
- **Use Case:** Price ranges, date ranges, filters
- **Visual:** Track between two thumbs
- **Independent:** Each thumb moves independently

---

## Size Variants

### Standard
- **Track Height:** 4px
- **Thumb Size:** 20px
- **Use Case:** Default, most common
- **Spacing:** Standard margins
- **Touch Target:** 48px height (including padding)

### Small
- **Track Height:** 4px (same)
- **Thumb Size:** 16px
- **Use Case:** Compact UIs, dense layouts
- **Spacing:** Reduced margins
- **Touch Target:** 40px height minimum

---

## Color Variants

### Primary (Default)
- **Color:** Primary blue (`#4b3fff`)
- **Use Case:** Standard sliders
- **Context:** Most common
- **Theme:** Uses CDS primary tokens

### Secondary
- **Color:** Secondary pink (`#dc004e`)
- **Use Case:** Alternative emphasis
- **Context:** Secondary controls
- **Theme:** Uses CDS secondary tokens

---

## Orientation Variants

### Horizontal (Default)
- **Direction:** Left to right
- **Layout:** Width 100%, height auto
- **Use Case:** Most common, natural
- **Labels:** Below slider
- **Thumb Movement:** Horizontal

### Vertical
- **Direction:** Bottom to top
- **Layout:** Height 100%, width auto
- **Use Case:** Volume controls, specific UIs
- **Labels:** Right of slider
- **Thumb Movement:** Vertical
- **Container:** Fixed height required

---

## Usage Guidelines

### When to Use
- Volume controls
- Brightness/contrast adjustments
- Price range filters
- Date range selection
- Age range inputs
- Rating scales
- Temperature settings
- Progress indicators (seek bars)
- Zoom levels
- Opacity adjustments

### When NOT to Use
- Precise numeric input (use TextField)
- Binary choices (use Switch or Checkbox)
- Multiple discrete options (use Radio or Select)
- Large ranges (> 1000 steps)
- Critical values requiring exactness
- Small screens with fine adjustments

### Best Practices

#### Do
- Provide visible min/max labels
- Show current value (value label)
- Use appropriate step size
- Provide adequate touch target (48px)
- Use marks for discrete values
- Label slider purpose clearly
- Use range slider for min/max filters
- Test with keyboard navigation
- Provide immediate visual feedback
- Use CDS color tokens

#### Don't
- Use tiny thumbs (< 16px)
- Forget touch target size
- Use too many steps (confusing)
- Hide min/max values
- Make track too thin (< 2px)
- Use for text input
- Forget disabled state styling
- Remove focus indicators
- Use color as only feedback
- Make steps too granular

---

## Component Integration (CDS Base Components)

### With CDS Form Label
```typescript
import Slider from '@mui/material/Slider';
import FormLabel from '@mui/material/FormLabel';

<FormLabel>Volume</FormLabel>
<Slider defaultValue={30} />
```

### With CDS Typography
```typescript
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

<Box>
  <Typography id="slider-label" gutterBottom>
    Brightness
  </Typography>
  <Slider aria-labelledby="slider-label" defaultValue={50} />
</Box>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<label id="volume-label">Volume</label>
<input
  type="range"
  min="0"
  max="100"
  value="50"
  aria-labelledby="volume-label"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
/>
```

#### ARIA Attributes
```typescript
{
  role: "slider",
  "aria-valuenow": number,        // Current value
  "aria-valuemin": number,        // Minimum value
  "aria-valuemax": number,        // Maximum value
  "aria-label": string,           // Or aria-labelledby
  "aria-orientation": "horizontal" | "vertical",
  "aria-valuetext": string,       // Optional readable value
}
```

#### Keyboard Navigation
- **Arrow Left/Down:** Decrease value (small step)
- **Arrow Right/Up:** Increase value (small step)
- **Home:** Minimum value
- **End:** Maximum value
- **Page Up:** Increase by large step (10%)
- **Page Down:** Decrease by large step (10%)
- **Tab:** Focus slider
- **Shift+Tab:** Focus previous element

#### Touch Targets
- **Minimum:** 48×48px (including padding)
- **Thumb:** 20px visible, 48px touchable
- **Track:** Full width/height clickable
- **Spacing:** Adequate margins (16px)

#### Color Contrast
- **Track:** 3:1 minimum (non-text contrast)
- **Thumb:** 3:1 minimum against background
- **Value Label:** 4.5:1 text contrast
- **Marks:** 3:1 minimum

#### Screen Reader Support
- Role announced ("slider")
- Current value announced
- Min/max values announced
- Orientation announced
- Value changes announced during drag

---

## Code Examples

### Basic Slider
```tsx
import Slider from '@mui/material/Slider';

export default function BasicSlider() {
  return (
    <Slider defaultValue={50} aria-label="Basic slider" />
  );
}
```

### Controlled Slider
```tsx
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function ControlledSlider() {
  const [value, setValue] = useState(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      aria-label="Controlled slider"
    />
  );
}
```

### Discrete Slider with Marks
```tsx
import Slider from '@mui/material/Slider';

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

export default function DiscreteSlider() {
  return (
    <Slider
      defaultValue={20}
      step={10}
      marks={marks}
      min={0}
      max={100}
      valueLabelDisplay="auto"
      aria-label="Temperature"
    />
  );
}
```

### Range Slider
```tsx
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={0}
      max={100}
      aria-label="Temperature range"
    />
  );
}
```

### Small Size Slider
```tsx
import Slider from '@mui/material/Slider';

export default function SmallSlider() {
  return (
    <Slider defaultValue={30} size="small" aria-label="Small slider" />
  );
}
```

### Vertical Slider
```tsx
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export default function VerticalSlider() {
  return (
    <Box sx={{ height: 300 }}>
      <Slider
        orientation="vertical"
        defaultValue={30}
        aria-label="Volume"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
```

### Slider with Value Label
```tsx
import Slider from '@mui/material/Slider';

export default function ValueLabelSlider() {
  return (
    <Slider
      defaultValue={50}
      valueLabelDisplay="on"
      aria-label="Always visible"
    />
  );
}
```

### Custom Marks
```tsx
import Slider from '@mui/material/Slider';

export default function CustomMarksSlider() {
  const marks = [
    { value: 0 },
    { value: 25 },
    { value: 50 },
    { value: 75 },
    { value: 100 },
  ];

  return (
    <Slider
      defaultValue={50}
      step={null}
      marks={marks}
      aria-label="Custom marks"
    />
  );
}
```

### Disabled Slider
```tsx
import Slider from '@mui/material/Slider';

export default function DisabledSlider() {
  return (
    <Slider defaultValue={30} disabled aria-label="Disabled slider" />
  );
}
```

### Slider with Input Field
```tsx
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function SliderWithInput() {
  const [value, setValue] = useState(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs>
        <Slider
          value={value}
          onChange={handleSliderChange}
          aria-label="Volume"
        />
      </Grid>
      <Grid item>
        <TextField
          value={value}
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
          }}
          sx={{ width: 80 }}
        />
      </Grid>
    </Grid>
  );
}
```

---

## Common Patterns

### Volume Control
```tsx
<Box sx={{ width: 300 }}>
  <Typography gutterBottom>Volume</Typography>
  <Slider
    defaultValue={50}
    min={0}
    max={100}
    valueLabelDisplay="auto"
    aria-label="Volume"
  />
</Box>
```

### Price Range Filter
```tsx
<Box sx={{ width: 300 }}>
  <Typography gutterBottom>Price Range</Typography>
  <Slider
    value={priceRange}
    onChange={handlePriceChange}
    valueLabelDisplay="auto"
    min={0}
    max={1000}
    valueLabelFormat={(value) => `$${value}`}
  />
</Box>
```

### Temperature Selector
```tsx
<Slider
  defaultValue={20}
  step={1}
  marks
  min={0}
  max={40}
  valueLabelDisplay="auto"
  valueLabelFormat={(value) => `${value}°C`}
/>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use standard size (20px thumb)
- Ensure 48px touch target height
- Provide adequate margins (16px)
- Consider larger thumb on touch devices
- Vertical sliders less common

### Tablet (600px - 960px)
- Standard size works well
- Both orientations appropriate
- Adequate touch targets

### Desktop (> 960px)
- Standard or small size
- Precise mouse control
- Hover states functional
- Keyboard navigation optimal
- Vertical sliders for specific contexts

---

## CDS Token Integration

### Uses CDS Colors
```typescript
color: var(--color-palatte/primary/main, #4b3fff);
color: var(--color-palatte/secondary/main, #dc004e);
background: var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26));
background: var(--color-palatte/background/paper, #ffffff);
```

### Uses CDS Spacing
```typescript
padding: var(--spacing/1, 4px) var(--spacing/2, 8px);
margin: var(--spacing/4, 16px);
border-width: var(--spacing/0.5, 2px);
```

### Uses CDS Typography
```typescript
font-size: var(--typography/base-styles/caption/font-size, 12px);
font-weight: 500;
```

### Uses CDS Border Radius
```typescript
border-radius: var(--border-radius/small, 4px);
border-radius: var(--border-radius/extra-small, 2px);
```

---

## Total Variant Combinations

**Types:** 3 (Continuous, Discrete, Range)
**Sizes:** 2 (Standard 20px, Small 16px)
**Colors:** 2 (Primary, Secondary)
**Orientations:** 2 (Horizontal, Vertical)
**States:** 4 (Default, Hover, Focus, Disabled)

**Total Combinations:** 3 × 2 × 2 × 2 = **24 base configurations**

---

## Related Components
- **TextField:** Alternative for precise numeric input (CDS component)
- **Switch:** Alternative for binary on/off
- **Radio:** Alternative for discrete selections
- **Progress:** Similar visual for read-only progress

---

## Figma Design Reference
- **Component:** Slider
- **Thumb Sizes:** 20px (standard), 16px (small)
- **Track Height:** 4px
- **Based on CDS:** Uses all CDS color, spacing, and typography tokens
- **Documentation:** [MUI Slider API](https://mui.com/api/slider)

---

## Migration Notes

### Integration with CDS
- **Sizes:** 20px thumb (standard), 16px (small)
- **Track:** 4px height with 2px border radius
- **Colors:** Uses CDS primary, secondary, disabled tokens
- **Spacing:** Uses CDS 4px grid system
- **Typography:** Uses CDS caption (12px) for value labels
- **Border Radius:** Uses CDS small (4px) for value label

### Design Tokens Required
- **Color tokens:** Primary, secondary, disabled, action colors
- **Typography tokens:** Caption (12px, 500 weight)
- **Spacing tokens:** 4px, 8px, 16px
- **Border radius tokens:** 2px, 4px
- **Sizing tokens:** 16px, 20px (thumbs), 4px (track)

---

## Performance Considerations

- Debounce onChange handler for performance
- Use controlled state sparingly
- Avoid expensive calculations in onChange
- Throttle value updates for real-time displays
- Use React.memo for static configurations
- Optimize re-renders with useCallback
- Consider requestAnimationFrame for smooth updates

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS color, spacing, and typography systems
- 24+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Range slider support included


---


# Rating Component Documentation

## Overview
The Rating component allows users to provide feedback or view ratings using a visual star-based system. It supports half-star increments, different sizes, read-only mode, and customizable icon sets.

**Component Type:** Input Control / Display Component
**Based on:** Material-UI (MUI) v6.1.0 Rating
**Documentation:** [MUI Rating API](https://mui.com/api/rating)

---

## Design Tokens

### Size Tokens
```typescript
// Small
'--component/rating/size-small/icon-size': '18px',
'--component/rating/size-small/gap': '2px',
'--component/rating/size-small/container-height': '18px',

// Medium (Default)
'--component/rating/size-medium/icon-size': '24px',
'--component/rating/size-medium/gap': '4px',
'--component/rating/size-medium/container-height': '24px',

// Large
'--component/rating/size-large/icon-size': '30px',
'--component/rating/size-large/gap': '4px',
'--component/rating/size-large/container-height': '30px',
```

### Color Tokens
```typescript
// Active (Filled)
'--component/rating/active/color': '#faaf00',
'--component/rating/active/color-hover': '#f5a300',

// Inactive (Empty)
'--component/rating/inactive/color': 'rgba(0, 0, 0, 0.26)',
'--component/rating/inactive/color-hover': 'rgba(0, 0, 0, 0.38)',

// Disabled
'--component/rating/disabled/color': 'rgba(0, 0, 0, 0.26)',

// Focus
'--component/rating/focus-ring-color': '#4b3fff',
'--component/rating/focus-ring-width': '2px',
```

### State Tokens
```typescript
'--component/rating/transition-duration': '150ms',
'--component/rating/icon-spacing': '4px',
'--component/rating/max-rating': '5', // Default maximum
```

---

## Size Variants

### Small
- **Icon Size:** 18×18px
- **Gap Between Icons:** 2px
- **Container Height:** 18px
- **Total Width (5 stars):** ~98px
- **Use Case:** Compact UIs, dense layouts, mobile cards

### Medium (Default)
- **Icon Size:** 24×24px
- **Gap Between Icons:** 4px
- **Container Height:** 24px
- **Total Width (5 stars):** ~136px
- **Use Case:** Standard interfaces, product cards, reviews

### Large
- **Icon Size:** 30×30px
- **Gap Between Icons:** 4px
- **Container Height:** 30px
- **Total Width (5 stars):** ~166px
- **Use Case:** Hero sections, featured reviews, emphasis

---

## States

### 1. Empty (No Rating)
- **Icon:** Outlined star
- **Color:** `rgba(0, 0, 0, 0.26)` (light gray)
- **Visual:** Empty star outlines
- **Use Case:** No rating provided yet

### 2. Filled (Full Stars)
- **Icon:** Filled star
- **Color:** `#faaf00` (gold/yellow)
- **Visual:** Solid colored stars
- **Use Case:** Whole number ratings (1, 2, 3, 4, 5)

### 3. Half Filled
- **Icon:** Half-filled star
- **Left Half:** Filled with `#faaf00`
- **Right Half:** Outlined with `rgba(0, 0, 0, 0.26)`
- **Use Case:** Decimal ratings (1.5, 2.5, 3.5, 4.5)
- **Precision:** 0.5 increments

### 4. Hover (Interactive)
- **Filled Icon:** Slightly darker `#f5a300`
- **Empty Icon:** Slightly darker `rgba(0, 0, 0, 0.38)`
- **Transition:** 150ms ease-in-out
- **Visual Feedback:** Stars highlight on hover
- **Use Case:** Interactive rating input

### 5. Focused
- **Focus Ring:** 2px solid `#4b3fff`
- **Border Radius:** Rounded rectangle around all stars
- **Keyboard:** Accessible via Tab
- **Navigation:** Arrow keys change rating

### 6. Disabled
- **Color:** `rgba(0, 0, 0, 0.26)` for both filled and empty
- **Interaction:** None
- **Cursor:** default (not pointer)
- **Visual:** Reduced opacity, no hover effects

### 7. Read-Only
- **Color:** Normal active/inactive colors
- **Interaction:** None (display only)
- **Cursor:** default (not pointer)
- **Use Case:** Displaying existing ratings without editing

---

## Interaction Modes

### Interactive (Input)
- **Click:** Set rating to clicked star value
- **Hover:** Preview rating at hover position
- **Keyboard:** Arrow keys to change value
- **Precision:** Whole numbers (1-5) or half steps (0.5, 1.0, 1.5, etc.)
- **Clear:** Can be cleared to 0 if configured

### Read-Only (Display)
- **No Interaction:** Pure display mode
- **No Hover:** No hover effects
- **No Click:** Cannot change value
- **Use Case:** Show existing ratings, product displays

---

## Precision Options

### Whole Numbers (1.0)
- **Values:** 1, 2, 3, 4, 5
- **Icons:** Only full stars
- **Interaction:** Click anywhere on star to fill
- **Use Case:** Simple rating systems

### Half Steps (0.5)
- **Values:** 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0
- **Icons:** Full and half-filled stars
- **Interaction:** Click left half or right half of star
- **Use Case:** More granular ratings, review systems

### Decimal (0.1)
- **Values:** Any decimal from 0.0 to max (e.g., 3.7, 4.2)
- **Icons:** Partial fill based on decimal value
- **Interaction:** Fine-grained position within star
- **Use Case:** Average ratings display, calculated scores

---

## Usage Guidelines

### When to Use
- Product ratings and reviews
- User feedback collection
- Content quality indicators
- Service ratings
- Skill level indicators
- Satisfaction surveys
- Average rating displays

### When NOT to Use
- Binary choices (use Switch or Checkbox)
- Multiple independent selections (use Checkbox)
- Scales beyond 5-10 points (use Slider)
- Complex feedback (use form with TextField)
- Non-linear scales (use custom component)

### Best Practices

#### Do
- Provide clear labels (e.g., "Rate this product")
- Show current average rating alongside input
- Use read-only mode for displaying ratings
- Include rating count (e.g., "4.5 (128 reviews)")
- Use appropriate size for context
- Enable keyboard navigation
- Provide visual feedback on hover
- Allow half-star precision for more accuracy

#### Don't
- Use without context or labels
- Make stars too small (min 18px)
- Use non-standard icon colors without reason
- Forget to indicate read-only vs interactive
- Use for non-rating contexts
- Disable without visual indication
- Mix different sizes in same context

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus rating component
- **Arrow Right:** Increase rating
- **Arrow Left:** Decrease rating
- **Arrow Up:** Increase rating
- **Arrow Down:** Decrease rating
- **Home:** Set to minimum (0 or 1)
- **End:** Set to maximum (5 or configured max)

#### Screen Readers
```html
<Rating
  value={4.5}
  readOnly
  aria-label="Rating: 4.5 out of 5 stars"
/>

<Rating
  value={rating}
  onChange={(event, newValue) => setRating(newValue)}
  aria-label="Rate this product"
/>
```

#### ARIA Attributes
```typescript
{
  role: "radiogroup",           // For interactive rating
  "aria-label": string,         // Description of rating
  "aria-valuenow": number,      // Current value
  "aria-valuemin": number,      // Minimum value (usually 0 or 1)
  "aria-valuemax": number,      // Maximum value (usually 5)
  "aria-valuetext": string,     // Text representation (e.g., "4.5 out of 5")
  "aria-readonly": boolean,     // Read-only state
  "aria-disabled": boolean,     // Disabled state
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast minimum
- Rounded rectangle focus outline around all stars
- Focus visible on keyboard navigation only
- Focus ring uses primary color by default

#### Color Contrast
- **Filled Stars:** 3:1 minimum against background
- **Empty Stars:** 3:1 minimum against background
- **Focus Ring:** 3:1 minimum against background
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Small:** 18px (desktop only, too small for touch)
- **Medium:** 24px (increase padding for 40px+ touch target)
- **Large:** 30px (increase padding for 48px+ touch target)
- **Best Practice:** Ensure 40×40px minimum touch target with padding

---

## Code Examples

### Basic Rating
```tsx
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Rating
      name="simple-rating"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
```

### Read-Only Rating
```tsx
import Rating from '@mui/material/Rating';

export default function ReadOnlyRating() {
  return (
    <Rating
      name="read-only"
      value={4.5}
      readOnly
      precision={0.5}
    />
  );
}
```

### Size Variants
```tsx
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function SizeRating() {
  return (
    <Stack spacing={2}>
      <Rating name="size-small" defaultValue={3} size="small" />
      <Rating name="size-medium" defaultValue={3} size="medium" />
      <Rating name="size-large" defaultValue={3} size="large" />
    </Stack>
  );
}
```

### Half Star Precision
```tsx
import Rating from '@mui/material/Rating';

export default function HalfRating() {
  return (
    <Rating
      name="half-rating"
      defaultValue={2.5}
      precision={0.5}
    />
  );
}
```

### Disabled Rating
```tsx
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function DisabledRating() {
  return (
    <Stack spacing={2}>
      <Rating name="disabled-rating" value={3} disabled />
      <Rating name="disabled-empty" value={0} disabled />
    </Stack>
  );
}
```

### With Label
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RatingWithLabel() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Box>
      <Typography component="legend">Rate this product</Typography>
      <Rating
        name="product-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
```

### Display Rating with Count
```tsx
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RatingDisplay() {
  const rating = 4.5;
  const reviewCount = 128;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Rating value={rating} precision={0.5} readOnly />
      <Typography variant="body2" color="text.secondary">
        {rating} ({reviewCount} reviews)
      </Typography>
    </Box>
  );
}
```

### Custom Icon Count
```tsx
import Rating from '@mui/material/Rating';

export default function CustomMaxRating() {
  return (
    <Rating
      name="ten-star-rating"
      defaultValue={7}
      max={10}
    />
  );
}
```

### No Rating
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NoRating() {
  const [value, setValue] = React.useState<number | null>(null);

  return (
    <Box>
      <Typography component="legend">Optional rating</Typography>
      <Rating
        name="no-value"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
```

### Hover Feedback
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const labels: { [index: string]: string } = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(3);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box>
      <Rating
        name="hover-feedback"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
```

---

## Common Patterns

### Product Rating Display
```tsx
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <Rating value={4.5} precision={0.5} readOnly size="small" />
  <Typography variant="body2">4.5 (234)</Typography>
</Box>
```

### Interactive Review Form
```tsx
<Box>
  <Typography component="legend">How would you rate this?</Typography>
  <Rating
    name="review-rating"
    value={rating}
    onChange={(e, newValue) => setRating(newValue)}
    size="large"
  />
</Box>
```

### Average Rating Summary
```tsx
<Box sx={{ textAlign: 'center' }}>
  <Typography variant="h3">4.5</Typography>
  <Rating value={4.5} precision={0.5} readOnly />
  <Typography variant="body2" color="text.secondary">
    Based on 1,234 reviews
  </Typography>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large size
- Ensure adequate touch targets (40px+ with padding)
- Stack rating with label vertically
- Provide clear visual feedback on tap
- Consider larger gaps between stars

### Tablet (600px - 960px)
- Use medium size as default
- Standard touch targets
- Can display inline with labels
- Hover states if pointer available

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for compact displays
- Hover states fully functional
- Keyboard navigation essential
- Inline layouts common

---

## Total Variant Combinations

**Base Combinations:**
- 3 sizes (Small, Medium, Large)
- 3 active states (Empty, Full, Half)
- 2 hover states (false, true)
- 2 disabled states (false, true)
- 2 interaction modes (Interactive, Read-only)

**Total:** 3 × 3 × 2 × 2 × 2 = **72 base combinations**
**With Precision:** 72 × 3 precision options = **216 total combinations**

---

## Related Components
- **Slider:** Alternative for numeric input
- **IconButton:** For single action buttons
- **ToggleButtonGroup:** For mutually exclusive selections
- **Checkbox:** For multiple selections

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11017:144103
- **Component:** `<Rating>`
- **Documentation:** [MUI Rating API](https://mui.com/api/rating)

---

## Migration Notes

### From Previous Design System
- Icon sizes standardized (18px, 24px, 30px)
- Active color unified to `#faaf00` (gold)
- Inactive color updated to 26% opacity
- Gap spacing aligned with 4px grid (2px small, 4px medium/large)
- Focus ring now uses primary color (#4b3fff)
- Hover colors slightly darker for better feedback
- Disabled state matches other form components
- Half-star precision standardized

### Design Tokens Required
- Color tokens (active, inactive, disabled, hover)
- Spacing tokens (2px, 4px gaps)
- Icon size tokens (18px, 24px, 30px)
- Focus ring tokens (2px width, primary color)
- Transition timing (150ms)

---

## Performance Considerations

- Ratings are lightweight (SVG icons)
- No complex animations
- Use React.memo for read-only ratings in lists
- Avoid creating inline change handlers
- SVG icons are efficient and scalable

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 216 variant combinations documented
- Full accessibility compliance


---


# FormLabel Component Documentation

## Overview
The FormLabel component provides labels for form controls with built-in state styling for focus, error, disabled states, and color variants. It's designed to work seamlessly with form controls like TextField, Checkbox, Radio, and Switch.

**Component Type:** Form Label / Typography
**Based on:** Material-UI (MUI) v6.1.0 FormLabel
**Documentation:** [MUI FormLabel API](https://mui.com/api/form-label)

---

## Design Tokens

### Size Tokens
```typescript
// Medium (Default)
'--component/form-label/size-medium/font-size': '14px',
'--component/form-label/size-medium/line-height': '20px',
'--component/form-label/size-medium/font-weight': '400',
'--component/form-label/size-medium/min-height': '20px',

// Small
'--component/form-label/size-small/font-size': '12px',
'--component/form-label/size-small/line-height': '16px',
'--component/form-label/size-small/font-weight': '400',
'--component/form-label/size-small/min-height': '16px',
```

### Color Tokens
```typescript
// Default (Enabled)
'--component/form-label/default/color': 'rgba(0, 0, 0, 0.87)',

// Primary
'--component/form-label/primary/color': '#4b3fff',
'--component/form-label/primary/color-focused': '#3d32cc',

// Secondary
'--component/form-label/secondary/color': '#dc004e',
'--component/form-label/secondary/color-focused': '#b00040',

// Error
'--component/form-label/error/color': '#d32f2f',

// Warning
'--component/form-label/warning/color': '#ed6c02',

// Info
'--component/form-label/info/color': '#0288d1',

// Success
'--component/form-label/success/color': '#2e7d32',

// Disabled
'--component/form-label/disabled/color': 'rgba(0, 0, 0, 0.38)',
```

### State Tokens
```typescript
'--component/form-label/transition-duration': '200ms',
'--component/form-label/transition-timing': 'cubic-bezier(0.0, 0, 0.2, 1)',
'--component/form-label/required-asterisk-color': '#d32f2f',
```

---

## Size Variants

### Medium (Default)
- **Font Size:** 14px
- **Line Height:** 20px
- **Font Weight:** 400 (Regular)
- **Min Height:** 20px
- **Use Case:** Standard forms, general form controls

### Small
- **Font Size:** 12px
- **Line Height:** 16px
- **Font Weight:** 400 (Regular)
- **Min Height:** 16px
- **Use Case:** Compact forms, dense layouts, space-limited UIs

---

## Color Variants

### Default (Neutral)
- **Color:** `rgba(0, 0, 0, 0.87)`
- **Use Case:** Standard form labels without specific semantic meaning

### Primary
- **Color:** `#4b3fff`
- **Focused:** `#3d32cc` (darker shade)
- **Use Case:** Labels for primary inputs, highlighted form sections

### Secondary
- **Color:** `#dc004e`
- **Focused:** `#b00040` (darker shade)
- **Use Case:** Labels for secondary inputs, alternative emphasis

### Error
- **Color:** `#d32f2f`
- **Use Case:** Labels indicating validation errors, required fields with errors

### Warning
- **Color:** `#ed6c02`
- **Use Case:** Labels for caution fields, warnings about input

### Info
- **Color:** `#0288d1`
- **Use Case:** Labels providing informational context

### Success
- **Color:** `#2e7d32`
- **Use Case:** Labels indicating successful validation, confirmed inputs

---

## States

### 1. Enabled (Default)
- **Color:** Based on color variant
- **Font Weight:** 400 (Regular)
- **Opacity:** 1.0
- **Cursor:** Default

### 2. Focused
- **Color:** Slightly darker shade of base color (for Primary/Secondary)
- **Font Weight:** 400 (Regular)
- **Transition:** 200ms cubic-bezier
- **Visual:** Subtle color shift to indicate active state

### 3. Error
- **Color:** `#d32f2f` (Error red)
- **Font Weight:** 400 (Regular)
- **Use Case:** Associated with form controls that have validation errors

### 4. Disabled
- **Color:** `rgba(0, 0, 0, 0.38)`
- **Font Weight:** 400 (Regular)
- **Cursor:** not-allowed (on associated control)
- **Visual:** Reduced opacity indicating inactive state

---

## Required Field Indicator

### Asterisk (*)
- **Color:** `#d32f2f` (Error red)
- **Position:** After label text
- **Font Size:** Same as label
- **Use Case:** Indicates mandatory form fields

### Example
```
Name *
Email *
```

---

## Usage Guidelines

### When to Use
- Labels for text inputs
- Labels for checkboxes and radio buttons
- Labels for switches and toggles
- Form section headings
- Labels for select/dropdown fields
- Required field indicators

### When NOT to Use
- Placeholder text (use TextField placeholder)
- Helper text (use FormHelperText)
- Error messages (use FormHelperText with error prop)
- Standalone headings (use Typography)
- Button labels (use Button component)

### Best Practices

#### Do
- Always provide clear, concise label text
- Use sentence case for labels ("First name" not "First Name")
- Mark required fields with asterisk (*)
- Use color variants to indicate semantic meaning
- Pair with appropriate form controls
- Maintain consistent label sizing across form
- Use disabled state for disabled controls

#### Don't
- Use labels without associated form controls
- Make labels too long (keep under 5-6 words)
- Use all caps for labels
- Forget to indicate required fields
- Use color alone to convey information
- Mix label sizes inconsistently
- Use decorative or ambiguous label text

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Label-Control Association
```html
<FormLabel htmlFor="email-input">
  Email
</FormLabel>
<TextField id="email-input" />
```

#### ARIA Attributes
```typescript
{
  htmlFor: string,              // ID of associated form control
  "aria-label": string,         // Alternative label
  "aria-labelledby": string,    // References other label elements
  "aria-required": boolean,     // Indicates required field
  "aria-invalid": boolean,      // Indicates validation error
}
```

#### Color Contrast
- **Default Text:** 4.5:1 minimum against background
- **Primary/Secondary:** 4.5:1 minimum
- **Error/Warning/Info/Success:** 4.5:1 minimum
- **Disabled:** Exempt from contrast requirements
- **Required Asterisk:** 4.5:1 minimum (error color)

#### Required Field Indication
- Don't rely on color alone (asterisk provides visual indicator)
- Use `aria-required="true"` on form control
- Provide clear indication in form instructions

---

## Code Examples

### Basic FormLabel
```tsx
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function BasicFormLabel() {
  return (
    <>
      <FormLabel htmlFor="name">Name</FormLabel>
      <TextField id="name" fullWidth />
    </>
  );
}
```

### Required Field
```tsx
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function RequiredFormLabel() {
  return (
    <>
      <FormLabel htmlFor="email" required>
        Email
      </FormLabel>
      <TextField id="email" required fullWidth />
    </>
  );
}
```

### Color Variants
```tsx
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';

export default function ColorFormLabels() {
  return (
    <Stack spacing={2}>
      <FormLabel color="primary">Primary Label</FormLabel>
      <FormLabel color="secondary">Secondary Label</FormLabel>
      <FormLabel error>Error Label</FormLabel>
      <FormLabel color="warning">Warning Label</FormLabel>
      <FormLabel color="info">Info Label</FormLabel>
      <FormLabel color="success">Success Label</FormLabel>
    </Stack>
  );
}
```

### Size Variants
```tsx
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';

export default function SizeFormLabels() {
  return (
    <Stack spacing={2}>
      <FormLabel size="small">Small Label</FormLabel>
      <FormLabel size="medium">Medium Label</FormLabel>
    </Stack>
  );
}
```

### Disabled State
```tsx
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function DisabledFormLabel() {
  return (
    <>
      <FormLabel disabled>Disabled Label</FormLabel>
      <TextField disabled fullWidth />
    </>
  );
}
```

### With FormControl
```tsx
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function FormLabelWithControl() {
  return (
    <FormControl>
      <FormLabel id="gender-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="gender-label">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
```

### Focused State
```tsx
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function FocusedFormLabel() {
  return (
    <FormControl focused>
      <FormLabel>Focused Label</FormLabel>
      <TextField autoFocus />
    </FormControl>
  );
}
```

---

## Integration with Form Controls

### With TextField
```tsx
<FormControl>
  <FormLabel htmlFor="username">Username</FormLabel>
  <TextField id="username" />
</FormControl>
```

### With Checkbox
```tsx
<FormControl>
  <FormLabel component="legend">Preferences</FormLabel>
  <FormGroup>
    <FormControlLabel control={<Checkbox />} label="Newsletter" />
    <FormControlLabel control={<Checkbox />} label="Updates" />
  </FormGroup>
</FormControl>
```

### With Radio Group
```tsx
<FormControl>
  <FormLabel>Select option</FormLabel>
  <RadioGroup>
    <FormControlLabel value="a" control={<Radio />} label="Option A" />
    <FormControlLabel value="b" control={<Radio />} label="Option B" />
  </RadioGroup>
</FormControl>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or small size based on form density
- Ensure labels are visible and readable
- Maintain 4.5:1 contrast ratio
- Stack labels above inputs vertically

### Tablet (600px - 960px)
- Use medium size as default
- Labels can be inline or stacked
- Maintain standard spacing
- Ensure touch-friendly spacing

### Desktop (> 960px)
- Any size appropriate
- Labels can be inline (left-aligned) or stacked
- Hover states on associated controls
- Clear visual hierarchy

---

## Total Variant Combinations

**Base Combinations:**
- 2 sizes (Small, Medium)
- 7 colors (Default, Primary, Secondary, Error, Warning, Info, Success)
- 4 states (Enabled, Focused, Error, Disabled)
- 2 required states (With/without asterisk)

**Total:** 2 × 7 × 4 × 2 = **112 combinations**

---

## Related Components
- **FormControl:** Container for form controls with label
- **FormHelperText:** Helper/error text for form controls
- **FormControlLabel:** Label wrapper for checkboxes/radios
- **InputLabel:** Floating label for TextField
- **Typography:** General text display

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 16391:57910
- **Component:** `<FormLabel>`
- **Documentation:** [MUI FormLabel API](https://mui.com/api/form-label)

---

## Migration Notes

### From Previous Design System
- Font sizes standardized (12px small, 14px medium)
- Line heights aligned with typography system
- Color palette updated with semantic variants
- Disabled opacity reduced to 38%
- Required asterisk always uses error color
- Transition timing unified to 200ms
- Focus states now have subtle color shifts

### Design Tokens Required
- All color tokens (text colors for all variants)
- Typography tokens (font sizes, line heights, weights)
- Spacing tokens (margins, padding)
- Transition timing (200ms)
- Error color for required asterisk (#d32f2f)

---

## Performance Considerations

- FormLabels are lightweight (simple text elements)
- No animations or complex styling
- Minimal re-renders when used correctly
- Use React.memo for labels in complex forms
- Color transitions are CSS-only (no JavaScript)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 112 variant combinations documented
- Full accessibility compliance


---


# Transfer List Component Documentation

## Overview
The Transfer List component (also known as dual list box or shuttle) allows users to move items between two lists. It's used for selecting multiple items from an available set and organizing them into a chosen set, commonly found in permission management, feature selection, and data organization interfaces.

**Component Type:** Input / Selection Component
**Based on:** Material-UI (MUI) v6.1.0 (Custom Pattern)
**Documentation:** [MUI Transfer List Pattern](https://mui.com/material-ui/react-transfer-list/)

---

## Design Tokens

### Container Tokens
\`\`\`typescript
'--component/transfer-list/width': '200px',        // Per list
'--component/transfer-list/height': '230px',       // List height
'--component/transfer-list/gap': 'var(--spacing/4, 16px)',  // Between lists
\`\`\`

### List Tokens
\`\`\`typescript
'--component/transfer-list/bg': 'var(--color-palatte/background/paper, #ffffff)',
'--component/transfer-list/border': '1px solid var(--color-palatte/divider)',
'--component/transfer-list/border-radius': 'var(--border-radius/small, 4px)',
\`\`\`

---

## Component Anatomy

### Transfer List Container
- **Lists:** Two side-by-side lists
- **Controls:** Buttons between lists
- **Items:** Checkable list items
- **Actions:** Move selected items

### Control Buttons
- **Move Right (>):** Transfer selected from left to right
- **Move Left (<):** Transfer selected from right to left  
- **Move All Right (>>):** Transfer all items right
- **Move All Left (<<):** Transfer all items left

---

## Usage Guidelines

### When to Use
- Permission assignment
- Feature selection
- Category management
- User/group assignment
- Filter selection
- Data organization

### When NOT to Use
- Single selection (use Select/Radio)
- Small item count (use Checkbox group)
- Simple yes/no (use Switch)
- Too many items (> 100 - use autocomplete)

---

## CDS Token Integration

Uses CDS List, Checkbox, IconButton, and Button components with full token integration.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
