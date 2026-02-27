# Paper Component Documentation

## Overview
The Paper component is a container that provides elevation and background styling following Material Design principles. It's commonly used to group related content and create visual hierarchy through shadows and depth.

**Component Type:** Container / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Paper
**Documentation:** [MUI Paper API](https://mui.com/api/paper)

---

## Design Tokens

### Elevation Tokens
```typescript
'--component/paper/elevation-0': 'none',
'--component/paper/elevation-1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
'--component/paper/elevation-2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
'--component/paper/elevation-3': '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
'--component/paper/elevation-4': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
'--component/paper/elevation-6': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
'--component/paper/elevation-8': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
'--component/paper/elevation-12': '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
'--component/paper/elevation-16': '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
'--component/paper/elevation-24': '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
```

### Color Tokens
```typescript
'--component/paper/bg-color-default': '#ffffff',
'--component/paper/bg-color-transparent': 'transparent',
'--component/paper/border-radius': '4px',
'--component/paper/padding': '16px', // Default padding (optional)
```

### Variant Tokens
```typescript
// Outlined
'--component/paper/outlined/border-color': 'rgba(0, 0, 0, 0.12)',
'--component/paper/outlined/border-width': '1px',
'--component/paper/outlined/border-style': 'solid',
```

---

## Elevation Levels

### Elevation 0
- **Shadow:** None
- **Visual:** Flat, no depth
- **Use Case:** Inline content, no elevation needed

### Elevation 1
- **Shadow:** Subtle, minimal depth
- **Z-Depth:** 2px offset
- **Use Case:** Cards at rest, app bar, bottom nav

### Elevation 2
- **Shadow:** Light depth
- **Z-Depth:** 3px offset
- **Use Case:** Raised buttons, switch thumb

### Elevation 3
- **Shadow:** Moderate depth
- **Z-Depth:** 3-4px offset
- **Use Case:** Refresh indicator, quick entry

### Elevation 4 (Default)
- **Shadow:** Standard depth
- **Z-Depth:** 4-5px offset
- **Use Case:** App bar on scroll, floating action button at rest

### Elevation 6
- **Shadow:** Pronounced depth
- **Z-Depth:** 6-10px offset
- **Use Case:** Snackbar, FAB pressed

### Elevation 8
- **Shadow:** Elevated depth
- **Z-Depth:** 8-10px offset
- **Use Case:** Menu, sub-menu, bottom sheet

### Elevation 12
- **Shadow:** High elevation
- **Z-Depth:** 12-17px offset
- **Use Case:** Dialog, picker

### Elevation 16
- **Shadow:** Very high elevation
- **Z-Depth:** 16-24px offset
- **Use Case:** Nav drawer, right drawer, modal bottom sheet

### Elevation 24
- **Shadow:** Maximum elevation
- **Z-Depth:** 24-38px offset
- **Use Case:** Dialog (maximum), picker (maximum)

---

## Variant Types

### Default (Elevation)
- **Appearance:** White background with shadow
- **Elevation:** 0-24 levels available
- **Use Case:** Most common, standard containers

### Outlined
- **Appearance:** White background with border
- **Border:** 1px solid `rgba(0, 0, 0, 0.12)`
- **Elevation:** None (flat)
- **Use Case:** Subtle containers, less prominent sections

---

## Usage Guidelines

### When to Use
- Card containers
- Form sections
- Content panels
- Sidebar panels
- Modals and dialogs
- App bar
- Navigation drawers
- Tooltips and popovers
- Creating visual hierarchy

### When NOT to Use
- Full-page backgrounds (use Box)
- Simple wrappers without elevation needs
- Inline text containers (use Box)
- When transparency is needed (use Box)

### Best Practices

#### Do
- Use consistent elevation levels across similar components
- Reserve higher elevations for modals and dialogs
- Use outlined variant for subtle separation
- Apply appropriate elevation for component hierarchy
- Use elevation 1-4 for most card-based layouts
- Combine with padding for content spacing
- Use square={false} for rounded corners

#### Don't
- Overuse high elevation levels (8+)
- Mix elevation and outlined variants inconsistently
- Use Paper when no elevation/background is needed
- Forget border-radius for non-square papers
- Apply elevation to full-page containers

---

## Common Patterns

### Label-Value Display
A common pattern for displaying labeled data with optional chip values.

#### Pattern 1: Inline Label-Value
```
Label: Value
```
- **Structure:** Label (14px, 400 weight) + Value (14px, 400 weight)
- **Layout:** Horizontal, inline
- **Use Case:** Simple key-value pairs

#### Pattern 2: Stacked Label-Value
```
Label
Value
```
- **Structure:** Label above value
- **Layout:** Vertical stack
- **Use Case:** Space-constrained layouts, mobile

#### Pattern 3: Value as Chip
```
Label: [Chip Value]
```
- **Structure:** Label + Chip component for value
- **Layout:** Inline with chip
- **Use Case:** Status indicators, tags, categories

#### Pattern 4: Stacked with Chip
```
Label
[Chip Value]
```
- **Structure:** Label above chip
- **Layout:** Vertical stack
- **Use Case:** Mobile layouts with chip values

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<Paper component="section" aria-label="User Profile">
  <h2>Profile Information</h2>
  <p>Content here</p>
</Paper>
```

#### ARIA Attributes
```typescript
{
  role: "region",              // For landmark regions
  "aria-label": string,        // Describes paper content
  "aria-labelledby": string,   // References heading
}
```

#### Color Contrast
- **Background:** White (#ffffff) provides high contrast
- **Elevation Shadows:** Decorative only, not relied upon for meaning
- **Content:** Must maintain 4.5:1 contrast against background

#### Keyboard Navigation
- Paper itself is not focusable
- Focus management handled by content within
- Ensure interactive elements inside are keyboard accessible

---

## Code Examples

### Basic Paper
```tsx
import Paper from '@mui/material/Paper';

export default function BasicPaper() {
  return (
    <Paper elevation={3}>
      <p>This is a basic paper component.</p>
    </Paper>
  );
}
```

### Elevation Variants
```tsx
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function ElevationPapers() {
  return (
    <Stack spacing={2}>
      <Paper elevation={0}>Elevation 0</Paper>
      <Paper elevation={1}>Elevation 1</Paper>
      <Paper elevation={2}>Elevation 2</Paper>
      <Paper elevation={3}>Elevation 3</Paper>
      <Paper elevation={4}>Elevation 4</Paper>
      <Paper elevation={6}>Elevation 6</Paper>
      <Paper elevation={8}>Elevation 8</Paper>
      <Paper elevation={12}>Elevation 12</Paper>
      <Paper elevation={16}>Elevation 16</Paper>
      <Paper elevation={24}>Elevation 24</Paper>
    </Stack>
  );
}
```

### Outlined Paper
```tsx
import Paper from '@mui/material/Paper';

export default function OutlinedPaper() {
  return (
    <Paper variant="outlined">
      This paper has a border instead of elevation.
    </Paper>
  );
}
```

### Paper with Padding
```tsx
import Paper from '@mui/material/Paper';

export default function PaddedPaper() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      This paper has padding around the content.
    </Paper>
  );
}
```

### Label-Value Pattern (Inline)
```tsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LabelValuePaper() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Status:
        </Typography>
        <Typography variant="body2">
          Active
        </Typography>
      </Box>
    </Paper>
  );
}
```

### Label-Value with Chip
```tsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function LabelChipPaper() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Role:
        </Typography>
        <Chip label="Administrator" size="small" color="primary" />
      </Box>
    </Paper>
  );
}
```

### Stacked Label-Value
```tsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function StackedLabelValuePaper() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Email
      </Typography>
      <Typography variant="body1">
        user@example.com
      </Typography>
    </Paper>
  );
}
```

### Card Pattern
```tsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CardPaper() {
  return (
    <Paper elevation={2} sx={{ p: 2, maxWidth: 300 }}>
      <Typography variant="h6" gutterBottom>
        Card Title
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Card content goes here with description.
      </Typography>
      <Button variant="contained" size="small">
        Action
      </Button>
    </Paper>
  );
}
```

### Custom Background
```tsx
import Paper from '@mui/material/Paper';

export default function CustomPaper() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        bgcolor: 'primary.main',
        color: 'primary.contrastText'
      }}
    >
      Paper with custom background color
    </Paper>
  );
}
```

### Square Paper
```tsx
import Paper from '@mui/material/Paper';

export default function SquarePaper() {
  return (
    <Paper square elevation={3} sx={{ p: 2 }}>
      This paper has square corners (no border radius).
    </Paper>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use lower elevation levels (1-3)
- Full-width papers common
- Adequate padding (16px minimum)
- Avoid high elevations (heavy shadows)

### Tablet (600px - 960px)
- Standard elevation levels
- Can use grid layouts with paper cards
- Balanced spacing

### Desktop (> 960px)
- Any elevation appropriate
- Multi-column card layouts
- Hover effects can increase elevation
- More generous padding and spacing

---

## Total Variant Combinations

**Base Combinations:**
- 2 variants (Default elevation, Outlined)
- 10 elevation levels (0, 1, 2, 3, 4, 6, 8, 12, 16, 24)
- 4 label-value patterns (Inline, Stacked, Chip inline, Chip stacked)

**Total:** 2 base variants + 10 elevations + 4 patterns = **16+ combinations**

---

## Related Components
- **Card:** Pre-styled Paper for content cards
- **Box:** Flexible container without elevation
- **Container:** Centered layout container
- **Stack:** Directional layout container

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:126786
- **Component:** `<Paper>`
- **Documentation:** [MUI Paper API](https://mui.com/api/paper)

---

## Migration Notes

### From Previous Design System
- Elevation levels standardized to Material Design
- Shadow values updated for consistency
- Border radius standardized to 4px
- Outlined variant border reduced to 1px
- Background color unified to white (#ffffff)
- Label-value patterns documented for consistency

### Design Tokens Required
- Elevation shadow tokens (10 levels)
- Background color token (white)
- Border radius token (4px)
- Outlined border tokens (1px, 12% opacity)
- Padding tokens (16px default)

---

## Performance Considerations

- Papers are lightweight (single div container)
- Box-shadow is GPU-accelerated
- Use elevation levels consistently to avoid recalculation
- Avoid deep nesting of elevated papers
- Consider using outlined variant for better performance

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 16+ variant combinations documented
- Full accessibility compliance
- Label-value patterns included
