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
