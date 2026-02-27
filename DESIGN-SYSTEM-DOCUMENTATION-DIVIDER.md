# Divider Component Documentation

## Overview
The Divider component creates a thin, visual separator between content sections, list items, or groups of elements. It supports horizontal and vertical orientations, with optional middle content including text labels or interactive buttons.

**Component Type:** Layout / Visual Separator Component
**Based on:** Material-UI (MUI) v6.1.0 Divider
**Documentation:** [MUI Divider API](https://mui.com/api/divider)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/divider/thickness': '1px',
'--component/divider/width': '100%',
'--component/divider/min-width': '695px',
```

### Color Tokens
```typescript
'--component/divider/color': 'rgba(0, 0, 0, 0.12)',
'--component/divider/light-color': 'rgba(255, 255, 255, 0.12)',
'--component/divider/text-color': 'rgba(0, 0, 0, 0.6)',
```

### Middle Content Tokens
```typescript
'--component/divider/middle/gap': '16px',
'--component/divider/middle/padding': '0 16px',
'--component/divider/middle/text-align': 'center',
```

### Text Variant Tokens
```typescript
'--component/divider/text/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Regular", sans-serif)',
'--component/divider/text/font-size': '14px',
'--component/divider/text/font-weight': '400',
'--component/divider/text/line-height': '18px',
'--component/divider/text/letter-spacing': '0.17px',
```

### Button Variant Tokens
```typescript
'--component/divider/button/height': '32px',
'--component/divider/button/padding': '6px 16px',
'--component/divider/button/border-radius': '4px',
'--component/divider/button/font-size': '14px',
'--component/divider/button/font-weight': '500',
'--component/divider/button/gap': '8px',
```

---

## Component Types

### Basic Divider
- **Appearance:** Simple horizontal or vertical line
- **Thickness:** 1px
- **Color:** Light gray (12% opacity black)
- **Use Case:** Content separation, list items, sections

### Divider with Text
- **Appearance:** Line with centered text label
- **Text:** Body2 typography (14px)
- **Padding:** 16px horizontal gap from lines
- **Use Case:** Section labels, category separators, "OR" dividers

### Divider with Button
- **Appearance:** Line with single centered button
- **Button:** Medium size (32px height)
- **Gap:** 16px from divider lines
- **Use Case:** Action between sections, expandable content trigger

### Divider with Two Buttons
- **Appearance:** Line with two centered buttons
- **Buttons:** Side by side with 8px gap
- **Total Gap:** 16px from divider lines
- **Use Case:** Choice actions, approval/rejection, expand/collapse

---

## Orientation Variants

### Horizontal (Default)
- **Direction:** Left to right
- **Width:** 100% of container
- **Thickness:** 1px height
- **Use Case:** Separate vertical content, list items, sections
- **Layout:** Block-level element

### Vertical
- **Direction:** Top to bottom
- **Height:** 100% of container (or specified height)
- **Thickness:** 1px width
- **Use Case:** Separate horizontal content, toolbar items, inline elements
- **Layout:** Inline element with height

---

## Middle Content Variants

### Default (No Middle Content)
- **Appearance:** Plain line across entire width
- **Use Case:** Simple separation, minimal visual weight
- **Implementation:** Standard divider without children

### Text Middle ("AND")
- **Content:** Text label (commonly "AND", "OR", or custom text)
- **Font:** Body2 (14px, regular)
- **Color:** Secondary text (60% opacity)
- **Padding:** 16px horizontal gap from lines
- **Alignment:** Centered
- **Use Case:** Form sections, logical operators, category labels

### Single Button Middle
- **Content:** One button (icon + label or icon-only)
- **Button Size:** Medium (32px height)
- **Button Style:** Outlined or text variant
- **Gap:** 16px from divider lines
- **Use Case:** Expand/collapse, show more, add item
- **Example:** "Add more" button, expand icon

### Two Buttons Middle
- **Content:** Two buttons side by side
- **Button Size:** Medium (32px height each)
- **Button Gap:** 8px between buttons
- **Total Gap:** 16px from divider lines to button group
- **Alignment:** Centered horizontally
- **Use Case:** Binary choices, approve/reject, expand/collapse both directions
- **Example:** Left/right arrows, yes/no actions

---

## Usage Guidelines

### When to Use
- Separate sections of content
- List item boundaries
- Between form groups
- Toolbar item separators
- Content with logical divisions
- Before/after call-to-action sections
- Group related items
- Create visual hierarchy

### When NOT to Use
- Between every list item (too cluttered)
- When whitespace is sufficient
- In dense, compact layouts (may add noise)
- Between tightly coupled content
- As decorative elements without purpose
- Within paragraph text

### Best Practices

#### Do
- Use sparingly for meaningful separation
- Align with content grid/layout
- Use full width for horizontal dividers
- Match divider color to theme
- Use text middle for logical operators ("OR", "AND")
- Use button middle for interactive sections
- Provide adequate margin around dividers
- Use vertical dividers for inline content
- Maintain consistent divider styling
- Use light variant on dark backgrounds

#### Don't
- Overuse dividers (creates visual clutter)
- Use overly thick dividers (> 2px)
- Mix different divider styles inconsistently
- Use dividers where spacing suffices
- Place dividers without surrounding margin
- Use color dividers for decoration
- Nest dividers within dividers
- Use vertical dividers at block level

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<!-- Horizontal divider -->
<hr role="separator" />

<!-- Divider with text -->
<div role="separator" aria-label="Section separator">
  <hr aria-hidden="true" />
  <span>OR</span>
  <hr aria-hidden="true" />
</div>

<!-- Vertical divider -->
<div role="separator" aria-orientation="vertical"></div>
```

#### ARIA Attributes
```typescript
{
  role: "separator",
  "aria-orientation": "horizontal" | "vertical",
  "aria-label": string,           // For dividers with semantic meaning
  "aria-hidden": "true",          // For purely decorative dividers
}
```

#### Screen Reader Support
- Decorative dividers: Use `aria-hidden="true"` (not announced)
- Semantic dividers: Use `role="separator"` with descriptive label
- Text middle dividers: Text content is readable
- Button middle dividers: Buttons are focusable and actionable

#### Color Contrast
- **Divider Line:** Minimum 3:1 against background (non-text contrast)
- **Text Middle:** 4.5:1 minimum for text content
- **Button Middle:** Standard button contrast requirements
- **Light Variant:** Designed for dark backgrounds

#### Keyboard Navigation
- Dividers themselves are not focusable
- Button middle: Buttons are keyboard accessible (Tab, Enter/Space)
- Interactive elements: Full keyboard support
- Focus order: Buttons in natural reading order

---

## Code Examples

### Basic Horizontal Divider
```tsx
import Divider from '@mui/material/Divider';

export default function BasicDivider() {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
}
```

### Vertical Divider
```tsx
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function VerticalDivider() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <span>Item 1</span>
      <Divider orientation="vertical" flexItem />
      <span>Item 2</span>
      <Divider orientation="vertical" flexItem />
      <span>Item 3</span>
    </Box>
  );
}
```

### Divider with Text
```tsx
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function TextDivider() {
  return (
    <Box>
      <p>Section 1</p>
      <Divider>OR</Divider>
      <p>Section 2</p>
    </Box>
  );
}
```

### Divider with Custom Text
```tsx
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function CustomTextDivider() {
  return (
    <Divider>
      <Chip label="AND" size="small" />
    </Divider>
  );
}
```

### Divider with Single Button
```tsx
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ButtonDivider() {
  return (
    <Divider>
      <Button
        size="small"
        startIcon={<ExpandMoreIcon />}
        onClick={() => console.log('Expand clicked')}
      >
        Show More
      </Button>
    </Divider>
  );
}
```

### Divider with Two Buttons
```tsx
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function TwoButtonsDivider() {
  return (
    <Divider>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          size="small"
          startIcon={<ArrowBackIcon />}
          onClick={() => console.log('Previous')}
        >
          Previous
        </Button>
        <Button
          size="small"
          endIcon={<ArrowForwardIcon />}
          onClick={() => console.log('Next')}
        >
          Next
        </Button>
      </Box>
    </Divider>
  );
}
```

### Inset Divider
```tsx
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function InsetDivider() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  );
}
```

### Middle Divider
```tsx
import Divider from '@mui/material/Divider';

export default function MiddleDivider() {
  return (
    <Divider textAlign="left">LEFT</Divider>
    <Divider>CENTER</Divider>
    <Divider textAlign="right">RIGHT</Divider>
  );
}
```

### Light Variant
```tsx
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function LightDivider() {
  return (
    <Box sx={{ bgcolor: 'grey.900', p: 2 }}>
      <p style={{ color: 'white' }}>Dark background content</p>
      <Divider light />
      <p style={{ color: 'white' }}>More content</p>
    </Box>
  );
}
```

### Full Width Divider
```tsx
import Divider from '@mui/material/Divider';

export default function FullWidthDivider() {
  return (
    <Divider variant="fullWidth" />
  );
}
```

### Divider in Card
```tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function CardDivider() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Title</Typography>
        <Typography variant="body2">Description text</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body2">Additional content</Typography>
      </CardContent>
    </Card>
  );
}
```

---

## Common Patterns

### Form Section Separator
```tsx
<Box>
  <TextField label="Name" fullWidth />
  <TextField label="Email" fullWidth />

  <Divider sx={{ my: 3 }}>OR</Divider>

  <Button variant="outlined" fullWidth>
    Sign in with Google
  </Button>
</Box>
```

### List Items
```tsx
<List>
  <ListItem>Item 1</ListItem>
  <Divider component="li" />
  <ListItem>Item 2</ListItem>
  <Divider component="li" />
  <ListItem>Item 3</ListItem>
</List>
```

### Toolbar Separator
```tsx
<Toolbar>
  <IconButton>Menu</IconButton>
  <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
  <IconButton>Search</IconButton>
  <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
  <IconButton>Settings</IconButton>
</Toolbar>
```

### Expandable Section
```tsx
<Box>
  <Typography>Visible content</Typography>

  <Divider sx={{ my: 2 }}>
    <IconButton size="small" onClick={handleExpand}>
      <ExpandMoreIcon />
    </IconButton>
  </Divider>

  {expanded && <Typography>Hidden content</Typography>}
</Box>
```

### Navigation Choices
```tsx
<Divider sx={{ my: 3 }}>
  <Box sx={{ display: 'flex', gap: 1 }}>
    <Button variant="outlined" onClick={goBack}>
      Back
    </Button>
    <Button variant="contained" onClick={goNext}>
      Continue
    </Button>
  </Box>
</Divider>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Full width horizontal dividers
- Avoid vertical dividers (limited width)
- Use adequate margin (16px+)
- Button middle: Stack buttons if needed
- Text middle: Keep concise (3-4 chars)
- Inset dividers: Consider full width instead

### Tablet (600px - 960px)
- Standard divider usage
- Vertical dividers acceptable in toolbars
- Button middle: Side by side works well
- Standard margins

### Desktop (> 960px)
- Any divider variant appropriate
- Vertical dividers in navigation
- Full flexibility with middle content
- Adequate spacing for clarity

---

## Total Variant Combinations

**Orientations:** 2 (Horizontal, Vertical)
**Middle Content:** 4 (None, Text, Single Button, Two Buttons)
**Variants:** 3 (Default, Inset, Full Width)
**Text Alignment:** 3 (Left, Center, Right) - for text middle only
**Color:** 2 (Default, Light)

**Total Combinations:** 2 × 4 × 3 × 2 = **48 base combinations**
(Text alignment adds additional 9 combinations)

**Total:** ~**57 combinations**

---

## Related Components
- **Box:** Container for divider layout
- **Chip:** Alternative for text middle variant
- **Button:** Used in button middle variants
- **List:** Often contains dividers between items
- **Card:** Uses dividers to separate sections

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:74782
- **Component:** `<Divider>`
- **Variants:** 4 middle variants (Default, And, Button, 2 Buttons)
- **Width:** 695px standard
- **Documentation:** [MUI Divider API](https://mui.com/api/divider)

---

## Migration Notes

### From Previous Design System
- Thickness standardized to 1px
- Color opacity set to 12% (rgba(0, 0, 0, 0.12))
- Text middle padding unified to 16px
- Button middle gap standardized to 16px from lines
- Button height set to 32px (medium)
- Typography aligned to Body2 (14px)
- Light variant for dark backgrounds
- Middle content alignment options added

### Design Tokens Required
- Border color tokens (12% opacity)
- Typography tokens (Body2, 14px)
- Spacing tokens (8px, 16px)
- Button tokens (32px height)
- Text color tokens (60% opacity for middle text)

---

## Performance Considerations

- Dividers are lightweight (simple HR or DIV elements)
- No JavaScript required for basic dividers
- Minimal DOM impact
- CSS-only rendering
- Button middle: Standard button performance
- Avoid excessive dividers (visual and DOM overhead)
- Use semantic HR element when possible

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- ~57 variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- 4 middle content variants included
- Horizontal and vertical orientations documented
