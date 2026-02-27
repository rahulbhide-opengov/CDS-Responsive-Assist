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
