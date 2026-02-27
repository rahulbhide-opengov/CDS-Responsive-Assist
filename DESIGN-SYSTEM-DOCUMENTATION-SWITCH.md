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
