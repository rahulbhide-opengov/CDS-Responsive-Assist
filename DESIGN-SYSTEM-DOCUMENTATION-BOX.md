# Box Component Documentation

## Overview
The Box component is the most fundamental layout primitive in Material-UI. It's a generic wrapper component that provides direct access to the `sx` prop for styling with CDS design tokens. Box serves as a building block for all other components and offers maximum flexibility for custom layouts without creating custom styled components.

**Component Type:** Layout Utility Component
**Based on:** Material-UI (MUI) v6.1.0 Box
**Documentation:** [MUI Box API](https://mui.com/api/box)

---

## Design Tokens

### All CDS Tokens Available via sx Prop
Box doesn't have fixed design tokens but provides access to all CDS tokens through the `sx` prop:

#### Color Tokens
```typescript
// Available via sx prop
sx={{ color: 'primary.main' }}              // --color-palatte/primary/main
sx={{ bgcolor: 'background.paper' }}        // --color-palatte/background/paper
sx={{ borderColor: 'divider' }}             // --color-palatte/divider
```

#### Spacing Tokens
```typescript
sx={{ p: 2 }}       // padding: 8px (CDS spacing/2)
sx={{ m: 4 }}       // margin: 16px (CDS spacing/4)
sx={{ px: 3 }}      // padding-left/right: 12px (CDS spacing/3)
sx={{ mb: 6 }}      // margin-bottom: 24px (CDS spacing/6)
```

#### Typography Tokens
```typescript
sx={{ typography: 'h6' }}           // --typography/base-styles/h6
sx={{ fontSize: 'body1.fontSize' }} // --typography/base-styles/body1
sx={{ fontWeight: 'medium' }}       // 500 weight
```

#### Border Radius Tokens
```typescript
sx={{ borderRadius: 1 }}  // 4px (CDS border-radius/small)
sx={{ borderRadius: 2 }}  // 8px (CDS border-radius/medium)
sx={{ borderRadius: 3 }}  // 12px (CDS border-radius/large)
```

#### Shadow/Elevation Tokens
```typescript
sx={{ boxShadow: 1 }}  // --elevation/level-1
sx={{ boxShadow: 4 }}  // --elevation/level-4
sx={{ boxShadow: 8 }}  // --elevation/level-8
```

---

## Component Anatomy

### Box Container
- **Display:** Block (default), can be changed
- **Element:** `<div>` (default), customizable via `component` prop
- **Styling:** All CSS properties via `sx` prop
- **Responsive:** Breakpoint-based values supported
- **Theme-Aware:** Direct access to theme tokens

### sx Prop System
- **Shorthand Props:** m, p, mt, mb, ml, mr, mx, my, pt, pb, pl, pr, px, py
- **Responsive:** `sx={{ p: { xs: 2, md: 4 } }}`
- **Theme Access:** Access all theme values
- **CSS Properties:** All standard CSS properties
- **Pseudo-Classes:** `:hover`, `:focus`, `:active`, etc.

---

## Component Prop

### Default (div)
- **Element:** `<div>`
- **Use Case:** Generic container (default)
- **Semantic:** Non-semantic container

### section
- **Element:** `<section>`
- **Use Case:** Thematic grouping of content
- **Semantic:** Semantic HTML5 section

### article
- **Element:** `<article>`
- **Use Case:** Self-contained content
- **Semantic:** Independent, reusable content

### header
- **Element:** `<header>`
- **Use Case:** Introductory content or navigation
- **Semantic:** Page or section header

### footer
- **Element:** `<footer>`
- **Use Case:** Footer content
- **Semantic:** Page or section footer

### main
- **Element:** `<main>`
- **Use Case:** Main content area
- **Semantic:** Dominant content of document

### aside
- **Element:** `<aside>`
- **Use Case:** Tangential content
- **Semantic:** Sidebar, related content

### nav
- **Element:** `<nav>`
- **Use Case:** Navigation links
- **Semantic:** Navigation section

### span
- **Element:** `<span>`
- **Use Case:** Inline container
- **Semantic:** Inline wrapper

---

## Common Use Cases

### Generic Container
```typescript
<Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
  Content here
</Box>
```

### Flex Container
```typescript
<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
  <Item1 />
  <Item2 />
</Box>
```

### Grid Container
```typescript
<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
  <Item />
  <Item />
  <Item />
</Box>
```

### Absolute Positioning
```typescript
<Box sx={{ position: 'absolute', top: 0, right: 0, p: 1 }}>
  Badge
</Box>
```

### Responsive Layout
```typescript
<Box sx={{
  width: { xs: '100%', md: '50%' },
  p: { xs: 2, md: 4 },
  bgcolor: 'background.paper'
}}>
  Responsive content
</Box>
```

---

## Usage Guidelines

### When to Use
- Custom layout needs
- Quick styling without creating styled components
- Wrapper for semantic HTML
- Responsive container needs
- Flexbox/Grid layouts
- Positioning elements
- Theming-aware containers
- Rapid prototyping
- One-off styled elements
- Component composition

### When NOT to Use
- When a specific component exists (use Button, not Box)
- Repeated patterns (create styled component instead)
- Complex component logic (create custom component)
- Many instances of same styling (use styled component)
- Performance-critical repeated elements (styled components cache better)

### Best Practices

#### Do
- Use for one-off custom layouts
- Use semantic HTML via `component` prop
- Use CDS design tokens via `sx` prop
- Use responsive values for breakpoints
- Combine with CDS components
- Use shorthand props (p, m, px, py, etc.)
- Keep `sx` prop organized and readable
- Use for quick prototyping
- Access theme values directly
- Use pseudo-classes for interactions

#### Don't
- Use instead of semantic components
- Create hundreds of identical Boxes (use styled component)
- Inline complex calculations in `sx`
- Use non-CDS values (use theme tokens)
- Forget semantic HTML when appropriate
- Over-nest Boxes (keep structure flat)
- Use Box when Stack/Grid is clearer
- Forget accessibility attributes
- Use for every single element
- Ignore performance on repeated instances

---

## Component Integration (CDS Base Components)

### With CDS Typography
```typescript
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

<Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
  <Typography variant="h6">Title</Typography>
  <Typography variant="body2">Content</Typography>
</Box>
```

### With CDS Button
```typescript
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

<Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
  <Button variant="outlined">Cancel</Button>
  <Button variant="contained">Save</Button>
</Box>
```

### With CDS IconButton
```typescript
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

<Box sx={{ display: 'flex', gap: 1 }}>
  <IconButton><EditIcon /></IconButton>
  <IconButton><DeleteIcon /></IconButton>
</Box>
```

### With CDS Card
```typescript
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Box>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```tsx
// Good - Semantic HTML
<Box component="section">
  <Box component="header">
    <Typography variant="h6">Section Title</Typography>
  </Box>
  <Box component="main">
    Content here
  </Box>
</Box>

// Bad - Non-semantic divs everywhere
<Box>
  <Box>
    <Typography variant="h6">Section Title</Typography>
  </Box>
  <Box>
    Content here
  </Box>
</Box>
```

#### ARIA Attributes
```typescript
<Box
  role="button"
  tabIndex={0}
  aria-label="Custom action"
  onClick={handleClick}
>
  Interactive Box
</Box>
```

#### Color Contrast
- Use CDS color tokens for proper contrast
- Test custom color combinations
- Ensure 4.5:1 for text, 3:1 for UI elements

#### Keyboard Navigation
- Add `tabIndex` for focusable elements
- Provide keyboard handlers when interactive
- Use semantic elements when possible

---

## Code Examples

### Basic Box
```tsx
import Box from '@mui/material/Box';

export default function BasicBox() {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      This is a basic Box with padding, background, and border radius.
    </Box>
  );
}
```

### Flex Layout
```tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function FlexBox() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h6">Title</Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
}
```

### Grid Layout
```tsx
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function GridBox() {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
      gap: 3,
    }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardContent>Card {item}</CardContent>
        </Card>
      ))}
    </Box>
  );
}
```

### Responsive Box
```tsx
import Box from '@mui/material/Box';

export default function ResponsiveBox() {
  return (
    <Box sx={{
      width: { xs: '100%', sm: '80%', md: '60%' },
      mx: 'auto',
      p: { xs: 2, md: 4 },
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: { xs: 1, md: 3 },
    }}>
      Responsive content that adapts to screen size
    </Box>
  );
}
```

### Semantic Box
```tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SemanticBox() {
  return (
    <Box component="article" sx={{ p: 3 }}>
      <Box component="header" sx={{ mb: 2 }}>
        <Typography variant="h5" component="h1">Article Title</Typography>
      </Box>
      <Box component="section">
        <Typography variant="body1">Article content goes here...</Typography>
      </Box>
      <Box component="footer" sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="caption">Published on Jan 1, 2024</Typography>
      </Box>
    </Box>
  );
}
```

### Centered Content
```tsx
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function CenteredBox() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      bgcolor: 'grey.100',
    }}>
      <Card sx={{ p: 4, maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>Sign In</Button>
      </Card>
    </Box>
  );
}
```

### Hover Effects
```tsx
import Box from '@mui/material/Box';

export default function HoverBox() {
  return (
    <Box sx={{
      p: 2,
      bgcolor: 'background.paper',
      borderRadius: 1,
      transition: 'all 0.3s',
      '&:hover': {
        bgcolor: 'action.hover',
        boxShadow: 3,
        transform: 'translateY(-2px)',
      },
      cursor: 'pointer',
    }}>
      Hover over me!
    </Box>
  );
}
```

### Absolute Positioning
```tsx
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

export default function PositionedBox() {
  return (
    <Box sx={{ position: 'relative', width: 200, height: 200, bgcolor: 'grey.200' }}>
      <Box sx={{
        position: 'absolute',
        top: 8,
        right: 8,
      }}>
        <Badge badgeContent={4} color="error" />
      </Box>
      <Box sx={{ p: 2 }}>
        Relative container with absolutely positioned badge
      </Box>
    </Box>
  );
}
```

### Pseudo-Classes
```tsx
import Box from '@mui/material/Box';

export default function PseudoBox() {
  return (
    <Box sx={{
      p: 2,
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
      '&:active': {
        bgcolor: 'primary.light',
      },
      '&:focus': {
        outline: '2px solid',
        outlineColor: 'primary.main',
        outlineOffset: 2,
      },
    }}>
      Interactive Box with pseudo-classes
    </Box>
  );
}
```

### Complex Layout
```tsx
import Box from '@mui/material/Box';

export default function ComplexBox() {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateAreas: {
        xs: `"header"
             "main"
             "sidebar"
             "footer"`,
        md: `"header header"
             "sidebar main"
             "footer footer"`,
      },
      gridTemplateColumns: { xs: '1fr', md: '250px 1fr' },
      gridTemplateRows: 'auto 1fr auto',
      gap: 2,
      minHeight: '100vh',
    }}>
      <Box sx={{ gridArea: 'header', bgcolor: 'primary.main', p: 2 }}>Header</Box>
      <Box sx={{ gridArea: 'sidebar', bgcolor: 'grey.200', p: 2 }}>Sidebar</Box>
      <Box sx={{ gridArea: 'main', bgcolor: 'background.paper', p: 2 }}>Main</Box>
      <Box sx={{ gridArea: 'footer', bgcolor: 'grey.300', p: 2 }}>Footer</Box>
    </Box>
  );
}
```

---

## Common Patterns

### Card Wrapper
```tsx
<Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
  <Typography variant="h6" gutterBottom>Card Title</Typography>
  <Typography variant="body2">Card content</Typography>
</Box>
```

### Action Bar
```tsx
<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 2, borderTop: 1, borderColor: 'divider' }}>
  <Button variant="outlined">Cancel</Button>
  <Button variant="contained">Save</Button>
</Box>
```

### Section Container
```tsx
<Box component="section" sx={{ py: 8, bgcolor: 'grey.50' }}>
  <Container>
    <Typography variant="h4" gutterBottom>Section Title</Typography>
    <Typography variant="body1">Section content</Typography>
  </Container>
</Box>
```

### Sidebar Layout
```tsx
<Box sx={{ display: 'flex', gap: 3 }}>
  <Box sx={{ width: 240, flexShrink: 0 }}>Sidebar</Box>
  <Box sx={{ flex: 1 }}>Main Content</Box>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Width:** Often 100%
- **Padding:** Smaller (8-16px)
- **Flex Direction:** Column
- **Grid:** Single column

### Tablet (600px - 900px)
- **Width:** Mix of full/constrained
- **Padding:** Standard (16-24px)
- **Flex Direction:** Mixed
- **Grid:** 2-column common

### Desktop (> 900px)
- **Width:** Constrained or grid-based
- **Padding:** Larger (24-32px)
- **Flex Direction:** Row common
- **Grid:** 3-4 columns

---

## CDS Token Integration

### Uses All CDS Tokens via sx Prop

#### Color System
```typescript
sx={{ color: 'primary.main' }}          // Primary color
sx={{ bgcolor: 'background.paper' }}    // Background color
sx={{ borderColor: 'divider' }}         // Divider color
```

#### Spacing System
```typescript
sx={{ p: 2 }}    // 8px padding (CDS spacing/2)
sx={{ m: 4 }}    // 16px margin (CDS spacing/4)
sx={{ gap: 3 }}  // 12px gap (CDS spacing/3)
```

#### Typography System
```typescript
sx={{ typography: 'body1' }}      // Body1 typography
sx={{ fontSize: 'h6.fontSize' }}  // H6 font size
sx={{ fontWeight: 'medium' }}     // 500 weight
```

#### Border Radius
```typescript
sx={{ borderRadius: 1 }}  // 4px (small)
sx={{ borderRadius: 2 }}  // 8px (medium)
sx={{ borderRadius: 3 }}  // 12px (large)
```

#### Elevation/Shadows
```typescript
sx={{ boxShadow: 1 }}  // Level 1 shadow
sx={{ boxShadow: 4 }}  // Level 4 shadow
sx={{ boxShadow: 8 }}  // Level 8 shadow
```

#### Responsive Values
```typescript
sx={{
  p: { xs: 2, sm: 3, md: 4 },           // Responsive padding
  width: { xs: '100%', md: '50%' },     // Responsive width
  display: { xs: 'block', md: 'flex' }, // Responsive display
}}
```

---

## Total Variant Combinations

**Infinite** - Box is a primitive that can be styled in unlimited ways via the `sx` prop. Common patterns include:
- Display modes: block, flex, grid, inline-flex, etc.
- Layouts: flex, grid, absolute, relative, fixed
- Semantic elements: div, section, article, header, footer, main, aside, nav
- Responsive configurations: breakpoint-based values
- States: hover, focus, active, disabled

---

## Related Components
- **Container:** Max-width content wrapper (CDS component)
- **Stack:** One-dimensional layouts with spacing (CDS component)
- **Grid:** Two-dimensional grid system (CDS component)
- **Paper:** Elevated surface (alternative to styled Box)
- All MUI components are built on Box

---

## Figma Design Reference
- **Component:** Box (Generic Container/Utility)
- **Styling:** All CDS design tokens via sx prop
- **Flexibility:** Maximum customization
- **Based on CDS:** Direct access to all CDS tokens
- **Documentation:** [MUI Box API](https://mui.com/api/box)

---

## Migration Notes

### Integration with CDS
- **All Tokens Available:** Direct access to every CDS design token via `sx` prop
- **Spacing:** Use numeric values (0-12) for CDS spacing scale
- **Colors:** Use theme palette paths (e.g., `primary.main`, `background.paper`)
- **Typography:** Access typography variants (e.g., `typography: 'h6'`)
- **Breakpoints:** Use breakpoint objects for responsive values
- **Component Prop:** Use semantic HTML elements when appropriate
- **Integration:** Works as foundation for all CDS components

### Design Tokens Required
- **All CDS tokens accessible:**
  - Color palette (primary, secondary, error, warning, success, info, grey, text, background, action)
  - Spacing scale (0-12 = 0px to 48px in 4px increments)
  - Typography variants (h1-h6, body1-2, caption, button, etc.)
  - Border radius (0-4 = 0px, 4px, 8px, 12px, 16px)
  - Shadows/elevation (0-24 levels)
  - Breakpoints (xs, sm, md, lg, xl)
  - Z-index scale

---

## Performance Considerations

- Box is extremely lightweight
- `sx` prop processes at runtime (slight overhead vs styled components)
- For repeated identical styles, consider styled components
- Use React.memo for static Box instances
- Avoid complex inline calculations in `sx`
- `sx` prop is theme-aware and cached per theme
- Minimal re-renders with stable `sx` objects
- CSS-in-JS with theme integration
- Better than inline styles (uses CSS classes)

---

## sx Prop vs Inline Styles

### sx Prop (Recommended)
```tsx
<Box sx={{ p: 2, bgcolor: 'primary.main' }}>
  Theme-aware, uses CDS tokens, responsive support
</Box>
```

### Inline Styles (Avoid)
```tsx
<Box style={{ padding: '8px', backgroundColor: '#4b3fff' }}>
  Not theme-aware, hardcoded values, no responsive support
</Box>
```

**Always use `sx` prop for:**
- Theme token access
- Responsive values
- Pseudo-classes
- CDS token integration
- Type safety
- Better performance

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with all CDS design tokens
- Provides direct access to CDS color, spacing, typography, elevation, border-radius, and breakpoint systems
- Infinite configuration possibilities via sx prop
- Full accessibility compliance (WCAG 2.1 Level AA)
- Most flexible layout primitive in CDS
- Foundation for all other components
