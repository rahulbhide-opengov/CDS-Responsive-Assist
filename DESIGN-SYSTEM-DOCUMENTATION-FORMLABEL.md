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
