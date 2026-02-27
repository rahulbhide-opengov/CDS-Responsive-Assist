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
