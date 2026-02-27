# CDS Layout Documentation

Complete documentation for all CDS layout components with design tokens, accessibility, and responsive patterns.

## Table of Contents

1. [Box](#box)
2. [Container](#container)
3. [Grid](#grid)
4. [Stack](#stack)
5. [Paper](#paper)
6. [Divider](#divider)
7. [Link](#link)

---

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


---


# Container Component Documentation

## Overview
The Container component centers content horizontally and constrains its maximum width based on predefined breakpoints. It provides consistent page layout and content spacing across different screen sizes, creating a focused reading experience and responsive layouts.

**Component Type:** Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Container
**Documentation:** [MUI Container API](https://mui.com/api/container)

---

## Design Tokens

### Max Width Tokens
```typescript
// Uses CDS breakpoint system
'--component/container/max-width-xs': '444px',     // Extra small
'--component/container/max-width-sm': '600px',     // Small
'--component/container/max-width-md': '900px',     // Medium
'--component/container/max-width-lg': '1200px',    // Large
'--component/container/max-width-xl': '1536px',    // Extra large
```

### Padding Tokens
```typescript
// Uses CDS spacing system
'--component/container/padding-mobile': 'var(--spacing/4, 16px)',      // Mobile (< 600px)
'--component/container/padding-tablet': 'var(--spacing/6, 24px)',      // Tablet (≥ 600px)
'--component/container/padding-desktop': 'var(--spacing/8, 32px)',     // Desktop (≥ 900px)
```

### Gutter Tokens (Horizontal Padding)
```typescript
'--component/container/gutter-mobile': 'var(--spacing/4, 16px)',       // 16px left/right
'--component/container/gutter-tablet': 'var(--spacing/6, 24px)',       // 24px left/right
'--component/container/gutter-desktop': 'var(--spacing/8, 32px)',      // 32px left/right
```

---

## Component Anatomy

### Container Wrapper
- **Display:** Block
- **Width:** 100% up to max-width
- **Margin:** 0 auto (centered)
- **Padding:** Responsive horizontal padding
- **Box Sizing:** Border-box

### Responsive Behavior
- **Centering:** Auto left/right margins
- **Max Width:** Based on breakpoint
- **Padding:** Increases with screen size
- **Fluid:** Can disable max-width constraint

---

## Max Width Variants

### Extra Small (xs) - 444px
- **Max Width:** 444px
- **Breakpoint:** All screens
- **Use Case:** Very narrow content, mobile-first
- **Example:** Single-column forms, narrow articles
- **Common:** Login pages, signup forms

### Small (sm) - 600px
- **Max Width:** 600px
- **Breakpoint:** ≥ 600px
- **Use Case:** Mobile-optimized content
- **Example:** Blog posts, simple layouts
- **Common:** Content-focused pages

### Medium (md) - 900px
- **Max Width:** 900px
- **Breakpoint:** ≥ 900px
- **Use Case:** Standard content width
- **Example:** Most pages, articles, dashboards
- **Common:** Default for many sites

### Large (lg) - 1200px
- **Max Width:** 1200px
- **Breakpoint:** ≥ 1200px
- **Use Case:** Wide content areas
- **Example:** Data tables, wide dashboards
- **Common:** Desktop-first applications

### Extra Large (xl) - 1536px
- **Max Width:** 1536px
- **Breakpoint:** ≥ 1536px
- **Use Case:** Very wide screens
- **Example:** Large displays, ultra-wide monitors
- **Common:** Enterprise dashboards

### Fluid (No Max Width)
- **Max Width:** None (100%)
- **Breakpoint:** All screens
- **Use Case:** Full-width layouts
- **Example:** Hero sections, full-bleed images
- **Common:** Landing pages, galleries

---

## Fixed Width Mode

### Fixed
- **Behavior:** Uses exact breakpoint widths (not max-width)
- **Responsive:** Jumps between sizes at breakpoints
- **Use Case:** Strict grid alignment
- **Example:** Design systems with fixed grids
- **vs. Fluid:** Steps instead of smooth scaling

### Max Width (Default)
- **Behavior:** Uses max-width (fluid within constraint)
- **Responsive:** Smooth scaling up to max-width
- **Use Case:** Most common, flexible
- **Example:** Standard websites
- **vs. Fixed:** Smooth scaling

---

## Disable Gutters

### With Gutters (Default)
- **Padding:** 16px (mobile), 24px (tablet), 32px (desktop)
- **Use Case:** Standard content spacing
- **Advantage:** Content doesn't touch edges
- **Visual:** Comfortable reading

### Without Gutters (disableGutters)
- **Padding:** 0
- **Use Case:** Full-width content, custom padding
- **Advantage:** Precise control
- **Visual:** Edge-to-edge content

---

## Usage Guidelines

### When to Use
- Main page content wrapper
- Content centering and max-width
- Consistent page layouts
- Responsive content areas
- Article/blog post containers
- Dashboard main content
- Form containers
- Card grids with max width

### When NOT to Use
- Full-width hero sections (use fluid or no container)
- Nested containers (causes double constraints)
- Navigation bars (use AppBar)
- Sidebars (use Drawer)
- Modals/Dialogs (have own constraints)
- Individual components (too granular)

### Best Practices

#### Do
- Use one container per page section
- Choose appropriate max-width for content
- Use responsive padding (gutters)
- Center important content
- Use CDS spacing tokens for padding
- Consider reading width for text-heavy pages
- Use `md` (900px) as default
- Allow content to breathe with gutters
- Use `disableGutters` when nesting custom padding

#### Don't
- Nest containers (double constraint)
- Use for every small component
- Set fixed heights (let content determine)
- Use for navigation elements
- Forget mobile padding
- Make text columns too wide (> 900px for readability)
- Use `xl` for text content (too wide)
- Remove gutters without adding custom padding

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div class="container">
  <main>
    <h1>Page Title</h1>
    <p>Content goes here...</p>
  </main>
</div>
```

#### Semantic Container
- Container itself is not semantic (div)
- Use semantic HTML within container
- `<main>`, `<article>`, `<section>` inside
- Proper heading hierarchy

#### Responsive Considerations
- Content readable at all sizes
- Touch targets adequate (48px minimum)
- No horizontal scrolling
- Text reflows properly
- Images responsive

#### Focus Management
- Container doesn't receive focus
- Content within is focusable
- Tab order natural (top to bottom)

---

## Code Examples

### Basic Container
```tsx
import Container from '@mui/material/Container';

export default function BasicContainer() {
  return (
    <Container>
      <h1>Page Title</h1>
      <p>This content is centered and has a maximum width.</p>
    </Container>
  );
}
```

### Max Width Variants
```tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function MaxWidthContainer() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'lightblue', p: 2 }}>
          Small Container (600px)
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'lightgreen', p: 2 }}>
          Medium Container (900px)
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'lightyellow', p: 2 }}>
          Large Container (1200px)
        </Box>
      </Container>
    </>
  );
}
```

### Fluid Container
```tsx
import Container from '@mui/material/Container';

export default function FluidContainer() {
  return (
    <Container maxWidth={false}>
      <Box sx={{ bgcolor: 'lightcoral', p: 2 }}>
        Full Width Container
      </Box>
    </Container>
  );
}
```

### Fixed Width Container
```tsx
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <Container maxWidth="md" fixed>
      <Box sx={{ bgcolor: 'lightblue', p: 2 }}>
        Fixed Width Container (exact breakpoint widths)
      </Box>
    </Container>
  );
}
```

### Without Gutters
```tsx
import Container from '@mui/material/Container';

export default function NoGuttersContainer() {
  return (
    <Container disableGutters>
      <Box sx={{ bgcolor: 'lavender', p: 2 }}>
        No Horizontal Padding
      </Box>
    </Container>
  );
}
```

### Nested Sections
```tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function NestedSections() {
  return (
    <>
      {/* Hero - Full Width */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <h1>Welcome to Our Site</h1>
          <p>Hero content with constrained width</p>
        </Container>
      </Box>

      {/* Main Content - Constrained */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <h2>Main Content</h2>
        <p>This section has standard max-width.</p>
      </Container>

      {/* Footer - Full Width Background */}
      <Box sx={{ bgcolor: 'grey.200', py: 4 }}>
        <Container maxWidth="lg">
          <p>Footer content</p>
        </Container>
      </Box>
    </>
  );
}
```

### With Custom Padding
```tsx
import Container from '@mui/material/Container';

export default function CustomPaddingContainer() {
  return (
    <Container
      maxWidth="md"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },  // Responsive padding
        py: 4,
      }}
    >
      <h1>Custom Padding</h1>
      <p>Content with responsive horizontal padding.</p>
    </Container>
  );
}
```

### Responsive Max Width
```tsx
import Container from '@mui/material/Container';

export default function ResponsiveMaxWidth() {
  return (
    <Container
      maxWidth="md"
      sx={{
        maxWidth: {
          xs: '100%',
          sm: '600px',
          md: '900px',
          lg: '1200px',
        },
      }}
    >
      <p>Container with custom responsive max-widths</p>
    </Container>
  );
}
```

---

## Common Patterns

### Standard Page Layout
```tsx
<Container maxWidth="lg">
  <Box component="main" sx={{ py: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom>
      Page Title
    </Typography>
    <Typography variant="body1">
      Main content goes here...
    </Typography>
  </Box>
</Container>
```

### Article/Blog Post
```tsx
<Container maxWidth="md">
  <article>
    <Typography variant="h3" component="h1" gutterBottom>
      Article Title
    </Typography>
    <Typography variant="body1" paragraph>
      Article content with optimal reading width (900px max).
    </Typography>
  </article>
</Container>
```

### Dashboard Layout
```tsx
<Container maxWidth="xl">
  <Box sx={{ py: 3 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card>Main Content</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>Sidebar</Card>
      </Grid>
    </Grid>
  </Box>
</Container>
```

### Hero Section with Content
```tsx
<Box sx={{ bgcolor: 'primary.main', color: 'white' }}>
  <Container maxWidth="lg">
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Hero Title
      </Typography>
      <Typography variant="h5">
        Subtitle or description
      </Typography>
    </Box>
  </Container>
</Box>
```

### Form Container
```tsx
<Container maxWidth="sm">
  <Box component="form" sx={{ py: 4 }}>
    <Typography variant="h5" gutterBottom>
      Sign Up
    </Typography>
    <TextField fullWidth label="Email" margin="normal" />
    <TextField fullWidth label="Password" type="password" margin="normal" />
    <Button variant="contained" fullWidth sx={{ mt: 2 }}>
      Submit
    </Button>
  </Box>
</Container>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Max Width:** 100% (with padding)
- **Padding:** 16px (CDS spacing/4)
- **Behavior:** Full width with gutters
- **Use:** All max-width variants respond

### Tablet (600px - 900px)
- **Max Width:** Constrained by variant
- **Padding:** 24px (CDS spacing/6)
- **Behavior:** Starts constraining width
- **Use:** `sm` and `md` common

### Desktop (900px - 1200px)
- **Max Width:** Variant-specific
- **Padding:** 32px (CDS spacing/8)
- **Behavior:** Full constraints apply
- **Use:** `md` and `lg` common

### Large Desktop (> 1200px)
- **Max Width:** `lg` or `xl` constraints
- **Padding:** 32px (CDS spacing/8)
- **Behavior:** Content centered with wide margins
- **Use:** `lg` for most content, `xl` for dashboards

---

## CDS Token Integration

### Uses CDS Breakpoints
```typescript
xs: 0px
sm: 600px
md: 900px
lg: 1200px
xl: 1536px
```

### Uses CDS Spacing
```typescript
padding-left: var(--spacing/4, 16px);    // Mobile
padding-right: var(--spacing/4, 16px);   // Mobile
padding-left: var(--spacing/6, 24px);    // Tablet
padding-right: var(--spacing/6, 24px);   // Tablet
padding-left: var(--spacing/8, 32px);    // Desktop
padding-right: var(--spacing/8, 32px);   // Desktop
```

### Max Width Values
```typescript
max-width: 444px;   // xs
max-width: 600px;   // sm
max-width: 900px;   // md
max-width: 1200px;  // lg
max-width: 1536px;  // xl
```

---

## Total Variant Combinations

**Max Widths:** 6 (xs, sm, md, lg, xl, fluid/false)
**Fixed Mode:** 2 (fixed, max-width)
**Gutters:** 2 (with gutters, without gutters)

**Total Combinations:** 6 × 2 × 2 = **24 configurations**

---

## Related Components
- **Box:** Generic container with styling (CDS component)
- **Grid:** Grid layout system
- **Stack:** Vertical/horizontal stacking
- **Paper:** Elevated surfaces
- **App Bar:** Top navigation (typically full-width)

---

## Figma Design Reference
- **Component:** Container / Content Wrapper
- **Max Widths:** 444px, 600px, 900px, 1200px, 1536px
- **Padding:** 16px (mobile), 24px (tablet), 32px (desktop)
- **Based on CDS:** Uses CDS breakpoints and spacing tokens
- **Documentation:** [MUI Container API](https://mui.com/api/container)

---

## Migration Notes

### Integration with CDS
- **Max Widths:** Standard MUI breakpoint widths
- **Padding:** Uses CDS spacing tokens (spacing/4, spacing/6, spacing/8)
- **Breakpoints:** Uses CDS breakpoint system (xs, sm, md, lg, xl)
- **Default:** `maxWidth="lg"` recommended for most content
- **Forms:** `maxWidth="sm"` for focused input
- **Articles:** `maxWidth="md"` for optimal reading

### Design Tokens Required
- **Breakpoint tokens:** xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)
- **Spacing tokens:** 16px, 24px, 32px for responsive padding
- **Max-width values:** 444px, 600px, 900px, 1200px, 1536px

---

## Performance Considerations

- Container is lightweight (single div)
- No JavaScript required
- CSS-only responsive behavior
- Minimal DOM impact
- Use React.memo if wrapping static content
- Avoid unnecessary nesting
- Consider server-side rendering
- Cache container calculations

---

## Best Practices Summary

### Recommended Max Widths by Use Case
- **Forms:** `sm` (600px)
- **Articles/Blogs:** `md` (900px)
- **Standard Pages:** `lg` (1200px)
- **Dashboards:** `xl` (1536px)
- **Hero Sections:** `false` (fluid) or `lg`

### Padding Recommendations
- **Default:** Use gutters (16/24/32px)
- **Custom:** Use CDS spacing tokens
- **Full-width Content:** `disableGutters={true}`

### Layout Structure
```tsx
// ✅ Good - Container per section
<Box> {/* Full-width background */}
  <Container maxWidth="lg">
    {/* Content */}
  </Container>
</Box>

// ❌ Bad - Nested containers
<Container maxWidth="lg">
  <Container maxWidth="md">
    {/* Double constraint */}
  </Container>
</Container>
```

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS breakpoint and spacing systems
- 24 configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Layout utility component


---


# Grid Component Documentation

## Overview
The Grid component uses a 12-column flexible layout system to create responsive, fluid grid layouts. It adapts to screen size and orientation, ensuring consistency across devices. The grid system uses CSS Flexbox for high flexibility and supports nested grids, spacing, and alignment.

**Component Type:** Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Grid
**Documentation:** [MUI Grid API](https://mui.com/api/grid)

---

## Design Tokens

### Grid System Tokens
```typescript
// 12-column grid system
'--component/grid/columns': '12',
'--component/grid/column-width': '8.333%',  // 100% / 12 columns
```

### Spacing Tokens
```typescript
// Uses CDS spacing system (multiplier based)
'--component/grid/spacing-0': '0px',
'--component/grid/spacing-1': 'var(--spacing/2, 8px)',    // 8px
'--component/grid/spacing-2': 'var(--spacing/4, 16px)',   // 16px
'--component/grid/spacing-3': 'var(--spacing/6, 24px)',   // 24px
'--component/grid/spacing-4': 'var(--spacing/8, 32px)',   // 32px
'--component/grid/spacing-5': 'var(--spacing/10, 40px)',  // 40px
'--component/grid/spacing-6': 'var(--spacing/12, 48px)',  // 48px
'--component/grid/spacing-8': 'var(--spacing/16, 64px)',  // 64px
'--component/grid/spacing-10': 'var(--spacing/20, 80px)', // 80px
```

### Breakpoint Tokens
```typescript
// Uses CDS breakpoint system
'--component/grid/breakpoint-xs': '0px',
'--component/grid/breakpoint-sm': '600px',
'--component/grid/breakpoint-md': '900px',
'--component/grid/breakpoint-lg': '1200px',
'--component/grid/breakpoint-xl': '1536px',
```

---

## Component Anatomy

### Grid Container
- **Display:** Flex
- **Flex Direction:** Row (horizontal) or Column (vertical)
- **Flex Wrap:** Wrap (responsive rows)
- **Negative Margin:** Compensates for item padding
- **Spacing:** Creates gaps between items

### Grid Item
- **Flex Basis:** Column width percentage
- **Padding:** Half of container spacing
- **Responsive:** Columns change at breakpoints
- **Nested:** Can contain another Grid container

---

## Grid System

### 12-Column Layout
- **Total Columns:** 12
- **Column Width:** 8.333% each (100% / 12)
- **Item Widths:**
  - `xs={12}` = 100% (12/12)
  - `xs={6}` = 50% (6/12)
  - `xs={4}` = 33.33% (4/12)
  - `xs={3}` = 25% (3/12)
  - `xs={2}` = 16.67% (2/12)
  - `xs={1}` = 8.333% (1/12)

### Auto Layout
- **Auto Width:** `xs="auto"` - Fits content
- **True:** `xs={true}` - Equal distribution
- **Use Case:** Flexible sizing without fixed columns

---

## Container Props

### Spacing (Gap)
- **Values:** 0-10 (8px increments)
- **Default:** 0
- **Behavior:** Creates gap between items
- **Implementation:** Negative margin + item padding
- **Responsive:** `spacing={{ xs: 2, md: 3 }}`

### Direction
- **Row:** Horizontal layout (default)
- **Column:** Vertical layout
- **Row-reverse:** Right to left
- **Column-reverse:** Bottom to top

### Justify Content
- **flex-start:** Left-aligned (default)
- **center:** Centered
- **flex-end:** Right-aligned
- **space-between:** Equal spacing between
- **space-around:** Equal spacing around
- **space-evenly:** Evenly distributed

### Align Items
- **flex-start:** Top-aligned
- **center:** Vertically centered
- **flex-end:** Bottom-aligned
- **stretch:** Fill height (default)
- **baseline:** Align baselines

---

## Item Props

### Column Sizes (xs, sm, md, lg, xl)
- **Number (1-12):** Fixed column width
- **Auto:** Fits content width
- **True:** Equal distribution
- **False/Undefined:** 100% width

### Responsive Columns
```typescript
<Grid item xs={12} sm={6} md={4} lg={3}>
  // 100% mobile, 50% tablet, 33% desktop, 25% large
</Grid>
```

### Offset (Not directly supported)
- Use empty Grid items or margin
- Or use sx prop: `sx={{ ml: 'auto' }}`

---

## Spacing Variants

### No Spacing (0)
- **Gap:** 0px
- **Use Case:** Flush layouts, no gaps
- **Visual:** Items touching

### Small (1) - 8px
- **Gap:** 8px (CDS spacing/2)
- **Use Case:** Compact layouts, dense UIs
- **Visual:** Tight spacing

### Medium (2) - 16px
- **Gap:** 16px (CDS spacing/4)
- **Use Case:** Standard layouts, default
- **Visual:** Comfortable spacing

### Large (3) - 24px
- **Gap:** 24px (CDS spacing/6)
- **Use Case:** Spacious layouts
- **Visual:** Generous spacing

### Extra Large (4) - 32px
- **Gap:** 32px (CDS spacing/8)
- **Use Case:** Very spacious, premium feel
- **Visual:** Wide gaps

---

## Common Layout Patterns

### Equal Columns
```typescript
// 3 equal columns
<Grid container spacing={2}>
  <Grid item xs={4}><Card /></Grid>
  <Grid item xs={4}><Card /></Grid>
  <Grid item xs={4}><Card /></Grid>
</Grid>
```

### Responsive Layout
```typescript
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}><Card /></Grid>
  <Grid item xs={12} sm={6} md={4}><Card /></Grid>
  <Grid item xs={12} sm={6} md={4}><Card /></Grid>
</Grid>
```

### Main + Sidebar
```typescript
// 2/3 main content, 1/3 sidebar
<Grid container spacing={3}>
  <Grid item xs={12} md={8}><Card>Main</Card></Grid>
  <Grid item xs={12} md={4}><Card>Sidebar</Card></Grid>
</Grid>
```

### Auto Width
```typescript
// Auto-sized items
<Grid container spacing={2}>
  <Grid item xs="auto"><Button>Auto</Button></Grid>
  <Grid item xs="auto"><Button>Width</Button></Grid>
  <Grid item xs="auto"><Button>Items</Button></Grid>
</Grid>
```

---

## Usage Guidelines

### When to Use
- Responsive page layouts
- Card grids (products, images)
- Form layouts with multiple fields
- Dashboard widgets
- Feature sections
- Multi-column content
- Gallery layouts
- Complex responsive designs

### When NOT to Use
- Single-column layouts (use Stack or Box)
- Simple horizontal layouts (use Stack)
- Navigation bars (use App Bar)
- Lists (use List component)
- Minimal spacing needs (use Stack)
- Non-responsive layouts (use Box with flex)

### Best Practices

#### Do
- Use 12-column system consistently
- Set responsive breakpoints (xs, sm, md, lg, xl)
- Use CDS spacing values (1-4 most common)
- Nest grids sparingly (performance)
- Use `spacing` prop for gaps
- Make mobile-first (xs first)
- Use semantic column counts (4, 6, 12)
- Test at all breakpoints
- Use Grid item for every child
- Consider using Grid2 (upcoming) for better performance

#### Don't
- Set fixed widths on items (breaks responsive)
- Nest too many levels (> 2-3)
- Use Grid for simple stacks
- Forget xs breakpoint
- Use non-standard spacing values
- Create unbalanced layouts (7-5 split awkward)
- Forget item wrapper for children
- Use Grid for one-dimensional layouts
- Mix Grid with other layout systems inconsistently

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div class="grid-container">
  <div class="grid-item">
    <article>Content</article>
  </div>
</div>
```

#### Grid Considerations
- Grid is layout only (no semantics)
- Use semantic HTML within items
- Visual order should match DOM order
- Tab order follows DOM order
- Responsive reflow maintains order

#### Reading Order
- Desktop: Left to right, top to bottom
- Mobile: Top to bottom (stacked)
- Ensure logical order when stacked
- Test keyboard navigation order

---

## Code Examples

### Basic Grid
```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function BasicGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
    </Grid>
  );
}
```

### Responsive Grid
```tsx
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ResponsiveGrid() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid key={item} item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>Item {item}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
```

### Spacing Variants
```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function SpacingGrid() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}><Paper>spacing=1 (8px)</Paper></Grid>
        <Grid item xs={6}><Paper>spacing=1 (8px)</Paper></Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={6}><Paper>spacing=3 (24px)</Paper></Grid>
        <Grid item xs={6}><Paper>spacing=3 (24px)</Paper></Grid>
      </Grid>
    </>
  );
}
```

### Nested Grid
```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function NestedGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper>
          <Grid container spacing={1}>
            <Grid item xs={6}><Paper>Nested 1</Paper></Grid>
            <Grid item xs={6}><Paper>Nested 2</Paper></Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>Sidebar</Paper>
      </Grid>
    </Grid>
  );
}
```

### Auto Width Grid
```tsx
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function AutoWidthGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <Button variant="contained">Button 1</Button>
      </Grid>
      <Grid item xs="auto">
        <Button variant="contained">Button 2</Button>
      </Grid>
      <Grid item xs="auto">
        <Button variant="contained">Button 3</Button>
      </Grid>
    </Grid>
  );
}
```

### Centered Grid
```tsx
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

export default function CenteredGrid() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Card>Centered Content</Card>
      </Grid>
    </Grid>
  );
}
```

### Direction Variants
```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function DirectionGrid() {
  return (
    <>
      {/* Row (default) */}
      <Grid container spacing={2} direction="row">
        <Grid item xs={4}><Paper>1</Paper></Grid>
        <Grid item xs={4}><Paper>2</Paper></Grid>
        <Grid item xs={4}><Paper>3</Paper></Grid>
      </Grid>

      {/* Column */}
      <Grid container spacing={2} direction="column" sx={{ mt: 2 }}>
        <Grid item><Paper>1</Paper></Grid>
        <Grid item><Paper>2</Paper></Grid>
        <Grid item><Paper>3</Paper></Grid>
      </Grid>
    </>
  );
}
```

### Justify Content
```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function JustifyGrid() {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item xs={3}><Paper>Left</Paper></Grid>
      <Grid item xs={3}><Paper>Right</Paper></Grid>
    </Grid>
  );
}
```

---

## Common Patterns

### Product Grid
```tsx
<Grid container spacing={3}>
  {products.map((product) => (
    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia image={product.image} />
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2">{product.price}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
```

### Dashboard Layout
```tsx
<Grid container spacing={3}>
  <Grid item xs={12} md={8}>
    <Card><CardContent>Main Chart</CardContent></Card>
  </Grid>
  <Grid item xs={12} md={4}>
    <Card><CardContent>Stats</CardContent></Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card><CardContent>Widget 1</CardContent></Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card><CardContent>Widget 2</CardContent></Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card><CardContent>Widget 3</CardContent></Card>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card><CardContent>Widget 4</CardContent></Card>
  </Grid>
</Grid>
```

### Form Layout
```tsx
<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <TextField fullWidth label="First Name" />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField fullWidth label="Last Name" />
  </Grid>
  <Grid item xs={12}>
    <TextField fullWidth label="Email" />
  </Grid>
  <Grid item xs={12}>
    <TextField fullWidth label="Address" multiline rows={3} />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField fullWidth label="City" />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField fullWidth label="ZIP Code" />
  </Grid>
</Grid>
```

### Image Gallery
```tsx
<Grid container spacing={2}>
  {images.map((image, index) => (
    <Grid key={index} item xs={6} sm={4} md={3}>
      <img
        src={image}
        alt={`Gallery ${index}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </Grid>
  ))}
</Grid>
```

---

## Responsive Behavior

### Mobile (< 600px) - xs
- **Default:** 12 columns (100% width)
- **Stacking:** Items stack vertically
- **Spacing:** Smaller gaps (spacing={2})
- **Pattern:** Single column layouts

### Tablet (600px - 900px) - sm
- **Columns:** 6-12 (50%-100%)
- **Layout:** 2-column common
- **Spacing:** Standard gaps (spacing={2-3})
- **Pattern:** Two-up layouts

### Desktop (900px - 1200px) - md
- **Columns:** 3-4-6-12
- **Layout:** Multi-column common
- **Spacing:** Generous gaps (spacing={3-4})
- **Pattern:** Three+ column layouts

### Large Desktop (> 1200px) - lg, xl
- **Columns:** All options
- **Layout:** Complex grids
- **Spacing:** Large gaps (spacing={3-4})
- **Pattern:** Four+ column layouts

---

## CDS Token Integration

### Uses CDS Spacing
```typescript
spacing={1}  // 8px  (CDS spacing/2)
spacing={2}  // 16px (CDS spacing/4)
spacing={3}  // 24px (CDS spacing/6)
spacing={4}  // 32px (CDS spacing/8)
```

### Uses CDS Breakpoints
```typescript
xs: 0px     // CDS breakpoint xs
sm: 600px   // CDS breakpoint sm
md: 900px   // CDS breakpoint md
lg: 1200px  // CDS breakpoint lg
xl: 1536px  // CDS breakpoint xl
```

---

## Total Variant Combinations

**Column Sizes:** 13 per breakpoint (1-12, auto, true)
**Breakpoints:** 5 (xs, sm, md, lg, xl)
**Spacing:** 11 (0-10)
**Direction:** 4 (row, column, row-reverse, column-reverse)

**Practical Combinations:** Thousands (highly configurable)

---

## Related Components
- **Container:** Max-width wrapper (CDS component)
- **Stack:** One-dimensional layout (simpler alternative)
- **Box:** Generic container (CDS component)
- **Paper:** Elevated surfaces in grid items

---

## Figma Design Reference
- **Component:** Grid Layout System
- **Columns:** 12-column system
- **Spacing:** 8px, 16px, 24px, 32px
- **Breakpoints:** 600px, 900px, 1200px, 1536px
- **Based on CDS:** Uses CDS spacing and breakpoint tokens
- **Documentation:** [MUI Grid API](https://mui.com/api/grid)

---

## Migration Notes

### Integration with CDS
- **Column System:** Standard 12-column grid
- **Spacing:** Uses CDS spacing tokens (spacing/2, spacing/4, spacing/6, spacing/8)
- **Breakpoints:** Uses CDS breakpoint system
- **Default Spacing:** `spacing={2}` (16px) recommended
- **Responsive:** Mobile-first (xs → sm → md → lg → xl)

### Design Tokens Required
- **Breakpoint tokens:** xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)
- **Spacing tokens:** 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px
- **Column system:** 12-column division (8.333% per column)

---

## Performance Considerations

- Grid uses CSS Flexbox (performant)
- Avoid deep nesting (> 3 levels)
- Use React.memo for grid items if static
- Consider virtualization for very long grids (> 100 items)
- Use Grid2 (upcoming) for better performance
- Minimize re-renders with proper keys
- Avoid inline styles in render
- Use sx prop for dynamic styles

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS breakpoint and spacing systems
- 12-column responsive grid layout
- Full accessibility compliance (WCAG 2.1 Level AA)
- Flexible layout component
- Note: Grid2 (unstable_Grid2) available for testing


---


# Stack Component Documentation

## Overview
The Stack component manages one-dimensional layouts (vertical or horizontal) with consistent spacing between child elements. It's a layout utility that simplifies spacing without manual margin management, making it ideal for simple linear layouts like form fields, button groups, or vertically stacked content.

**Component Type:** Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Stack
**Documentation:** [MUI Stack API](https://mui.com/api/stack)

---

## Design Tokens

### Spacing Tokens
```typescript
// Uses CDS spacing system (multiplier based)
'--component/stack/spacing-0': '0px',
'--component/stack/spacing-0.5': 'var(--spacing/0.5, 2px)',   // 2px
'--component/stack/spacing-1': 'var(--spacing/1, 4px)',       // 4px
'--component/stack/spacing-2': 'var(--spacing/2, 8px)',       // 8px
'--component/stack/spacing-3': 'var(--spacing/3, 12px)',      // 12px
'--component/stack/spacing-4': 'var(--spacing/4, 16px)',      // 16px
'--component/stack/spacing-5': 'var(--spacing/5, 20px)',      // 20px
'--component/stack/spacing-6': 'var(--spacing/6, 24px)',      // 24px
'--component/stack/spacing-8': 'var(--spacing/8, 32px)',      // 32px
'--component/stack/spacing-10': 'var(--spacing/10, 40px)',    // 40px
'--component/stack/spacing-12': 'var(--spacing/12, 48px)',    // 48px
```

### Direction Tokens
```typescript
'--component/stack/direction-row': 'row',                // Horizontal
'--component/stack/direction-row-reverse': 'row-reverse', // Horizontal RTL
'--component/stack/direction-column': 'column',          // Vertical (default)
'--component/stack/direction-column-reverse': 'column-reverse', // Vertical bottom-up
```

### Divider Tokens
```typescript
'--component/stack/divider-color': 'var(--color-palatte/divider, rgba(0, 0, 0, 0.12))',
'--component/stack/divider-thickness': '1px',
```

---

## Component Anatomy

### Stack Container
- **Display:** Flex
- **Flex Direction:** Column (default) or Row
- **Gap:** CSS gap property for spacing
- **Align Items:** Stretch (default)
- **Justify Content:** Flex-start (default)

### Spacing Implementation
- **Method:** CSS `gap` property (modern browsers)
- **Fallback:** Margin on children (older browsers)
- **Responsive:** Can change at breakpoints
- **Units:** Multiplier of 4px base unit

### Divider Support
- **Component:** MUI Divider
- **Placement:** Between children
- **Orientation:** Matches Stack direction
- **Styling:** Uses CDS divider tokens

---

## Direction Variants

### Column (Vertical)
- **Direction:** `column` (default)
- **Layout:** Top to bottom
- **Spacing:** Vertical gaps between items
- **Use Case:** Form fields, vertical lists, stacked cards
- **Default Behavior:** Items stretch horizontally
- **Common:** Most frequent Stack usage

### Row (Horizontal)
- **Direction:** `row`
- **Layout:** Left to right
- **Spacing:** Horizontal gaps between items
- **Use Case:** Button groups, horizontal lists, inline items
- **Default Behavior:** Items align to start
- **Common:** Action buttons, chips, tags

### Column-Reverse
- **Direction:** `column-reverse`
- **Layout:** Bottom to top
- **Spacing:** Vertical gaps (reversed order)
- **Use Case:** Chat messages, timeline (newest first)
- **Rare:** Specialized use cases

### Row-Reverse
- **Direction:** `row-reverse`
- **Layout:** Right to left
- **Spacing:** Horizontal gaps (reversed order)
- **Use Case:** RTL languages, reversed navigation
- **Rare:** Localization scenarios

---

## Spacing Variants

### No Spacing (0)
- **Gap:** 0px
- **Use Case:** Items touching, custom spacing needed
- **Visual:** Flush layout

### Extra Small (0.5) - 2px
- **Gap:** 2px (CDS spacing/0.5)
- **Use Case:** Very tight spacing, chips
- **Visual:** Minimal gap

### Small (1) - 4px
- **Gap:** 4px (CDS spacing/1)
- **Use Case:** Compact layouts, dense forms
- **Visual:** Tight spacing

### Small Medium (2) - 8px
- **Gap:** 8px (CDS spacing/2)
- **Use Case:** Standard compact spacing
- **Visual:** Comfortable compact

### Medium (3) - 12px
- **Gap:** 12px (CDS spacing/3)
- **Use Case:** Balanced spacing
- **Visual:** Moderate gaps

### Standard (4) - 16px
- **Gap:** 16px (CDS spacing/4)
- **Use Case:** Standard layouts, default spacing
- **Visual:** Comfortable spacing
- **Most Common:** Recommended default

### Large (6) - 24px
- **Gap:** 24px (CDS spacing/6)
- **Use Case:** Spacious layouts, sections
- **Visual:** Generous spacing

### Extra Large (8) - 32px
- **Gap:** 32px (CDS spacing/8)
- **Use Case:** Wide spacing, major sections
- **Visual:** Very spacious

---

## Alignment Props

### Align Items (Cross Axis)
- **flex-start:** Align to start (left/top)
- **center:** Centered alignment
- **flex-end:** Align to end (right/bottom)
- **stretch:** Fill cross axis (default)
- **baseline:** Align text baselines

### Justify Content (Main Axis)
- **flex-start:** Pack to start (default)
- **center:** Centered on main axis
- **flex-end:** Pack to end
- **space-between:** Equal spacing between
- **space-around:** Equal spacing around
- **space-evenly:** Evenly distributed

---

## Usage Guidelines

### When to Use
- Vertical form layouts
- Button groups (horizontal)
- Stacked content sections
- Simple linear layouts
- Card lists (vertical)
- Tag/chip collections (horizontal)
- Navigation breadcrumbs
- Action bars
- Consistent spacing needs
- One-dimensional layouts

### When NOT to Use
- Two-dimensional layouts (use Grid)
- Complex responsive layouts (use Grid)
- Wrapping content (use Grid with flex-wrap)
- Precise column control (use Grid)
- Nested complex layouts (use Grid)
- Full page layouts (use Container + Grid)
- Navigation menus (use List or Tabs)

### Best Practices

#### Do
- Use for simple one-dimensional layouts
- Use CDS spacing values (2, 4, 8, 12, 16, 24, 32px)
- Set responsive spacing with breakpoints
- Use `direction="row"` for horizontal layouts
- Combine with Container for page-width control
- Use dividers for visual separation
- Keep nesting shallow (1-2 levels max)
- Use semantic HTML inside Stack
- Test responsive behavior at all breakpoints
- Use `spacing={2}` (8px) as common default

#### Don't
- Use for two-dimensional layouts
- Forget to set direction for horizontal layouts
- Use non-CDS spacing values
- Nest too deeply (> 2-3 levels)
- Use when Grid is more appropriate
- Mix Stack with manual margins
- Use for complex page layouts
- Forget about responsive spacing
- Over-complicate with unnecessary wrapping
- Use for wrapping content

---

## Divider Integration

### Vertical Stack with Dividers
```typescript
<Stack spacing={2} divider={<Divider />}>
  <Item>Content 1</Item>
  <Item>Content 2</Item>
  <Item>Content 3</Item>
</Stack>
```

### Horizontal Stack with Dividers
```typescript
<Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
  <Item>Content 1</Item>
  <Item>Content 2</Item>
  <Item>Content 3</Item>
</Stack>
```

---

## Component Integration (CDS Base Components)

### With CDS Button
```typescript
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

<Stack direction="row" spacing={2}>
  <Button variant="contained">Save</Button>
  <Button variant="outlined">Cancel</Button>
</Stack>
```

### With CDS TextField
```typescript
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

<Stack spacing={3}>
  <TextField label="First Name" fullWidth />
  <TextField label="Last Name" fullWidth />
  <TextField label="Email" fullWidth />
</Stack>
```

### With CDS Card
```typescript
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

<Stack spacing={2}>
  <Card><CardContent>Card 1</CardContent></Card>
  <Card><CardContent>Card 2</CardContent></Card>
  <Card><CardContent>Card 3</CardContent></Card>
</Stack>
```

### With CDS Chip
```typescript
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

<Stack direction="row" spacing={1}>
  <Chip label="React" />
  <Chip label="TypeScript" />
  <Chip label="Material-UI" />
</Stack>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div class="stack">
  <section>Content 1</section>
  <section>Content 2</section>
</div>
```

#### Stack Considerations
- Stack is layout only (no semantics)
- Use semantic HTML within Stack
- Visual order matches DOM order
- Tab order follows DOM order
- Ensure proper heading hierarchy
- No ARIA needed for Stack itself

#### Spacing and Readability
- Adequate spacing improves readability
- Touch targets maintain 48px minimum
- Content separation clear for screen readers
- Logical reading order maintained

---

## Code Examples

### Basic Vertical Stack
```tsx
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function BasicStack() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Paper sx={{ p: 2 }}>Item 2</Paper>
      <Paper sx={{ p: 2 }}>Item 3</Paper>
    </Stack>
  );
}
```

### Horizontal Stack (Button Group)
```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function HorizontalStack() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Save</Button>
      <Button variant="outlined">Cancel</Button>
      <Button variant="text">Reset</Button>
    </Stack>
  );
}
```

### Responsive Direction
```tsx
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

export default function ResponsiveStack() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 2, sm: 3, md: 4 }}
    >
      <Card sx={{ flex: 1 }}><CardContent>Card 1</CardContent></Card>
      <Card sx={{ flex: 1 }}><CardContent>Card 2</CardContent></Card>
      <Card sx={{ flex: 1 }}><CardContent>Card 3</CardContent></Card>
    </Stack>
  );
}
```

### Stack with Dividers
```tsx
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function DividerStack() {
  return (
    <Stack spacing={2} divider={<Divider flexItem />}>
      <Typography variant="body1">Section 1</Typography>
      <Typography variant="body1">Section 2</Typography>
      <Typography variant="body1">Section 3</Typography>
    </Stack>
  );
}
```

### Form Layout
```tsx
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormStack() {
  return (
    <Stack component="form" spacing={3} sx={{ maxWidth: 400 }}>
      <TextField label="Name" fullWidth required />
      <TextField label="Email" type="email" fullWidth required />
      <TextField label="Password" type="password" fullWidth required />
      <TextField label="Bio" multiline rows={4} fullWidth />
      <Button variant="contained" fullWidth>
        Submit
      </Button>
    </Stack>
  );
}
```

### Centered Content
```tsx
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function CenteredStack() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Typography variant="h3">Welcome</Typography>
      <Typography variant="body1">Center-aligned content</Typography>
      <Button variant="contained">Get Started</Button>
    </Stack>
  );
}
```

### Nested Stacks
```tsx
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function NestedStack() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6">Section Title</Typography>
          <Typography variant="body2">Section content here</Typography>
          <Stack direction="row" spacing={1}>
            <Button size="small">Action 1</Button>
            <Button size="small">Action 2</Button>
          </Stack>
        </Stack>
      </Paper>
      <Paper sx={{ p: 2 }}>Another section</Paper>
    </Stack>
  );
}
```

### Chip Collection
```tsx
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ChipStack() {
  const technologies = ['React', 'TypeScript', 'Material-UI', 'Node.js'];

  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
      {technologies.map((tech) => (
        <Chip key={tech} label={tech} color="primary" />
      ))}
    </Stack>
  );
}
```

### Spacing Variants
```tsx
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function SpacingStack() {
  return (
    <>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Paper sx={{ p: 1 }}>Spacing 1 (4px)</Paper>
        <Paper sx={{ p: 1 }}>Spacing 1 (4px)</Paper>
      </Stack>

      <Stack spacing={4}>
        <Paper sx={{ p: 2 }}>Spacing 4 (16px)</Paper>
        <Paper sx={{ p: 2 }}>Spacing 4 (16px)</Paper>
      </Stack>
    </>
  );
}
```

### Action Bar
```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

export default function ActionBar() {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton><EditIcon /></IconButton>
        <IconButton><DeleteIcon /></IconButton>
        <IconButton><ShareIcon /></IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Stack>
  );
}
```

---

## Common Patterns

### Form Section
```tsx
<Stack spacing={3}>
  <Typography variant="h6">Personal Information</Typography>
  <TextField label="First Name" fullWidth />
  <TextField label="Last Name" fullWidth />
  <TextField label="Email" fullWidth />
</Stack>
```

### Button Group (Primary + Secondary)
```tsx
<Stack direction="row" spacing={2} justifyContent="flex-end">
  <Button variant="text">Cancel</Button>
  <Button variant="outlined">Save Draft</Button>
  <Button variant="contained">Publish</Button>
</Stack>
```

### Card List
```tsx
<Stack spacing={2}>
  {items.map((item) => (
    <Card key={item.id}>
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</Stack>
```

### Navigation Breadcrumbs
```tsx
<Stack direction="row" spacing={1} alignItems="center">
  <Link>Home</Link>
  <ChevronRightIcon fontSize="small" />
  <Link>Category</Link>
  <ChevronRightIcon fontSize="small" />
  <Typography>Current Page</Typography>
</Stack>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Direction:** Often column (stacked)
- **Spacing:** Smaller (8-16px)
- **Pattern:** Vertical layouts
- **Full Width:** Items stretch

### Tablet (600px - 900px)
- **Direction:** Mixed (some rows appear)
- **Spacing:** Standard (16-24px)
- **Pattern:** Hybrid layouts
- **Responsive:** Direction can change

### Desktop (> 900px)
- **Direction:** More horizontal layouts
- **Spacing:** Larger (24-32px)
- **Pattern:** Horizontal groups
- **Space Efficient:** Multi-column support

---

## CDS Token Integration

### Uses CDS Spacing
```typescript
spacing={0.5}  // 2px  (CDS spacing/0.5)
spacing={1}    // 4px  (CDS spacing/1)
spacing={2}    // 8px  (CDS spacing/2)
spacing={3}    // 12px (CDS spacing/3)
spacing={4}    // 16px (CDS spacing/4)
spacing={6}    // 24px (CDS spacing/6)
spacing={8}    // 32px (CDS spacing/8)
```

### Uses CDS Divider
```typescript
divider-color: var(--color-palatte/divider, rgba(0, 0, 0, 0.12));
```

### Responsive Spacing
```typescript
spacing={{ xs: 2, sm: 3, md: 4 }}
// Mobile: 8px, Tablet: 12px, Desktop: 16px
```

---

## Total Variant Combinations

**Directions:** 4 (column, row, column-reverse, row-reverse)
**Spacing Levels:** 11 (0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12)
**With/Without Dividers:** 2

**Practical Combinations:** 88+ configurations

---

## Related Components
- **Grid:** Two-dimensional layouts (CDS component)
- **Container:** Max-width wrapper (CDS component)
- **Box:** Generic container with styling (CDS component)
- **Divider:** Visual separation (CDS component)
- **Paper:** Elevated surfaces for Stack items

---

## Figma Design Reference
- **Component:** Stack Layout Utility
- **Spacing:** 4px grid system (0, 2, 4, 8, 12, 16, 24, 32, 40, 48px)
- **Direction:** Column (default), Row, Reverse variants
- **Based on CDS:** Uses CDS spacing and divider tokens
- **Documentation:** [MUI Stack API](https://mui.com/api/stack)

---

## Migration Notes

### Integration with CDS
- **Spacing:** Uses CDS spacing tokens (spacing/0.5 through spacing/12)
- **Default Spacing:** `spacing={2}` (8px) recommended for most cases
- **Responsive:** Supports breakpoint-based spacing changes
- **Dividers:** Uses CDS Divider component with CDS color tokens
- **Direction:** Responsive direction changes supported
- **Integration:** Works with all CDS components (Button, TextField, Card, Chip, etc.)

### Design Tokens Required
- **Spacing tokens:** 2px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- **Divider tokens:** rgba(0, 0, 0, 0.12) color, 1px thickness
- **Breakpoint tokens:** xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)

---

## Performance Considerations

- Stack is very lightweight (minimal CSS)
- Uses modern CSS `gap` property (efficient)
- No JavaScript required for layout
- Minimal DOM overhead
- Avoids margin collapse issues
- Better than manual margin management
- CSS-only responsive behavior
- Use React.memo for static content
- Avoid excessive nesting (> 3 levels)

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS spacing and divider systems
- 88+ configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Simple one-dimensional layout utility
- Mobile-first responsive design


---


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


---


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


---


# Link Component Documentation

## Overview
The Link component enables navigation between pages, sections, or external resources. It supports both standalone (button-like) and inline (text-embedded) variants with customizable icons and multiple size options.

**Component Type:** Navigation / Action Component
**Based on:** Material-UI (MUI) v6.1.0 Link
**Documentation:** [MUI Link API](https://mui.com/api/link)

---

## Design Tokens

### Typography Tokens
```typescript
// Large (16px)
'--component/link/size-large/font-family': 'var(--typography/base-styles/body1/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-large/font-size': '16px',
'--component/link/size-large/font-weight': '400',
'--component/link/size-large/line-height': '20px',
'--component/link/size-large/letter-spacing': '0.15px',

// Medium (14px - Default)
'--component/link/size-medium/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-medium/font-size': '14px',
'--component/link/size-medium/font-weight': '400',
'--component/link/size-medium/line-height': '18px',
'--component/link/size-medium/letter-spacing': '0.17px',

// Small (12px)
'--component/link/size-small/font-family': 'var(--typography/base-styles/caption/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-small/font-size': '12px',
'--component/link/size-small/font-weight': '400',
'--component/link/size-small/line-height': '16px',
'--component/link/size-small/letter-spacing': '0.17px',
```

### Color Tokens
```typescript
// Default State
'--component/link/default/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/default/icon-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',

// Hover State
'--component/link/hover/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/hover/icon-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/hover/opacity': '0.8',

// Disabled State
'--component/link/disabled/text-color': 'rgba(0, 0, 0, 0.38)',
'--component/link/disabled/icon-color': 'rgba(0, 0, 0, 0.38)',
'--component/link/disabled/cursor': 'not-allowed',

// Inline Variant
'--component/link/inline/text-decoration': 'underline',
'--component/link/inline/text-decoration-skip-ink': 'none',
```

### Layout Tokens
```typescript
'--component/link/icon-size': '16px',
'--component/link/icon-gap': '4px',
'--component/link/padding-top': '2px',
'--component/link/transition-duration': '150ms',
```

---

## Link Types

### Standalone Links
- **Appearance:** Button-like, no underline
- **Use Case:** Navigation actions, call-to-action links, standalone buttons
- **Icon Support:** Left and/or right icons
- **Layout:** Flex container with optional icons
- **Visual:** Plain text without underline

### Inline Links
- **Appearance:** Underlined text
- **Use Case:** Embedded within paragraphs, text-level navigation
- **Icon Support:** Not typically used (text-only)
- **Layout:** Inline with surrounding text
- **Visual:** Underline decoration, skip-ink disabled

---

## Size Variants

### Small (12px)
- **Font Size:** 12px
- **Line Height:** 16px
- **Icon Size:** 16px
- **Use Case:** Compact UIs, dense layouts, footnotes, captions
- **Context:** Small cards, table cells, footer links

### Medium (14px - Default)
- **Font Size:** 14px
- **Line Height:** 18px
- **Icon Size:** 16px
- **Use Case:** Standard body text, navigation, most common use case
- **Context:** Body content, lists, navigation menus

### Large (16px)
- **Font Size:** 16px
- **Line Height:** 20px
- **Icon Size:** 16px
- **Use Case:** Prominent links, hero sections, CTAs
- **Context:** Headers, large content areas, emphasis

---

## States

### Default
- **Text Color:** Primary text color (87% opacity black)
- **Icon Color:** Primary text color
- **Decoration:** Underline for inline, none for standalone
- **Cursor:** pointer
- **Visual:** Standard appearance

### Hover
- **Text Color:** Primary text color
- **Icon Color:** Primary text color
- **Decoration:** Maintained from default
- **Opacity:** Slightly reduced (0.8)
- **Cursor:** pointer
- **Transition:** 150ms smooth
- **Visual:** Slightly lighter appearance on hover

### Disabled
- **Text Color:** `rgba(0, 0, 0, 0.38)` (38% opacity)
- **Icon Color:** `rgba(0, 0, 0, 0.38)`
- **Decoration:** Maintained but grayed out
- **Cursor:** not-allowed
- **Interaction:** None (not clickable)
- **Visual:** Grayed out appearance

---

## Icon Configuration

### Icon Position
- **Left Icon:** Positioned before text (e.g., magnify/search icon)
- **Right Icon:** Positioned after text (e.g., arrow-right, external link icon)
- **Both Icons:** Can have both left and right icons simultaneously
- **No Icons:** Text-only links

### Common Icon Types
- **arrow-right:** Internal navigation, next action
- **arrow-top-right:** External link, opens in new window
- **open-in-new:** Popout to new tab
- **magnify:** Search links
- **arrow-right-thin:** Subtle navigation indicator

### Icon Specifications
- **Size:** 16×16px (consistent across all link sizes)
- **Gap:** 4px from text
- **Alignment:** Vertically centered with text
- **Color:** Inherits from link state

---

## Usage Guidelines

### When to Use
- Navigation between pages or sections
- External resource links
- Call-to-action links
- Inline citations or references
- Download links
- Social media links
- "Learn more" or "Read more" actions
- Email addresses (mailto links)
- Phone numbers (tel links)

### When NOT to Use
- Primary actions (use Button instead)
- Form submissions (use Button)
- Destructive actions (use Button with destructive variant)
- Non-navigation interactions (use Button)
- Disabled actions that should be hidden (hide element instead)

### Best Practices

#### Do
- Use descriptive link text (avoid "click here")
- Indicate external links with icons (arrow-top-right)
- Use inline variant within paragraphs
- Use standalone variant for navigation menus
- Provide clear affordance (underline for inline)
- Show disabled state only when necessary
- Use appropriate size for context
- Include keyboard focus indicators

#### Don't
- Use generic link text ("click here", "more")
- Mix standalone and inline styles inconsistently
- Use links for actions that don't navigate
- Forget to indicate external links
- Use disabled links extensively (hide instead)
- Make links too small (min 12px)
- Use color alone to indicate links
- Remove underlines from inline links without alternative indication

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<a href="/page" target="_self" rel="noopener">
  Link text
</a>

<!-- External link -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External link
  <span aria-label="opens in new window"></span>
</a>
```

#### ARIA Attributes
```typescript
{
  role: "link",                  // Default for <a> element
  "aria-label": string,          // Descriptive label if icon-only
  "aria-disabled": boolean,      // For disabled links
  "aria-current": "page",        // For current page link
  "aria-describedby": string,    // Additional context
  target: "_blank",              // For external links
  rel: "noopener noreferrer",   // Security for target="_blank"
}
```

#### Keyboard Navigation
- **Tab:** Focus link
- **Enter:** Activate link
- **Shift+Tab:** Focus previous element
- **Focus Visible:** Clear focus ring (2px outline)

#### Color Contrast
- **Default Text:** 4.5:1 minimum against background
- **Hover Text:** 4.5:1 minimum against background
- **Disabled Text:** Exempt from contrast requirements (38% opacity)
- **Underline:** Provides non-color affordance for inline links

#### Touch Targets
- **Small (12px):** Increase padding for 40×40px minimum touch target
- **Medium (14px):** Increase padding for 40×40px minimum touch target
- **Large (16px):** Increase padding for 40×40px minimum touch target
- **Standalone:** Ensure adequate padding for touch

#### Screen Reader Support
- Link purpose clear from text alone
- External links announced ("opens in new window")
- Icon-only links have aria-label
- Disabled state announced ("disabled" or "unavailable")

---

## Code Examples

### Basic Standalone Link
```tsx
import Link from '@mui/material/Link';

export default function StandaloneLink() {
  return (
    <Link href="/page" underline="none">
      Link Text
    </Link>
  );
}
```

### Inline Link
```tsx
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function InlineLink() {
  return (
    <Typography variant="body2">
      This is a paragraph with an{' '}
      <Link href="/page">inline link</Link>
      {' '}embedded in the text.
    </Typography>
  );
}
```

### Link with Right Icon
```tsx
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

export default function LinkWithIcon() {
  return (
    <Link href="/page" underline="none">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        Link Text
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Box>
    </Link>
  );
}
```

### External Link
```tsx
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';

export default function ExternalLink() {
  return (
    <Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        External Link
        <OpenInNewIcon sx={{ fontSize: 16 }} />
      </Box>
    </Link>
  );
}
```

### Size Variants
```tsx
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function LinkSizes() {
  return (
    <Stack spacing={2}>
      <Link href="/page" sx={{ fontSize: 12, lineHeight: '16px' }}>
        Small Link (12px)
      </Link>
      <Link href="/page" sx={{ fontSize: 14, lineHeight: '18px' }}>
        Medium Link (14px)
      </Link>
      <Link href="/page" sx={{ fontSize: 16, lineHeight: '20px' }}>
        Large Link (16px)
      </Link>
    </Stack>
  );
}
```

### Disabled Link
```tsx
import Link from '@mui/material/Link';

export default function DisabledLink() {
  return (
    <Link
      href="/page"
      underline="none"
      sx={{
        color: 'rgba(0, 0, 0, 0.38)',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }}
    >
      Disabled Link
    </Link>
  );
}
```

### Link with Left Icon
```tsx
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function LinkWithLeftIcon() {
  return (
    <Link href="/search" underline="none">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <SearchIcon sx={{ fontSize: 16 }} />
        Search
      </Box>
    </Link>
  );
}
```

### Hover State
```tsx
import Link from '@mui/material/Link';

export default function HoverLink() {
  return (
    <Link
      href="/page"
      underline="none"
      sx={{
        transition: 'opacity 150ms',
        '&:hover': {
          opacity: 0.8,
        },
      }}
    >
      Hover Link
    </Link>
  );
}
```

---

## Common Patterns

### Navigation Menu Link
```tsx
<Link href="/dashboard" underline="none" color="text.primary">
  Dashboard
</Link>
```

### Breadcrumb Link
```tsx
<Link href="/parent" underline="hover" color="inherit">
  Parent Page
</Link>
```

### Footer Link
```tsx
<Link href="/privacy" underline="none" color="text.secondary" sx={{ fontSize: 12 }}>
  Privacy Policy
</Link>
```

### Download Link
```tsx
<Link href="/file.pdf" download underline="none">
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    Download PDF
    <DownloadIcon sx={{ fontSize: 16 }} />
  </Box>
</Link>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large sizes
- Ensure adequate touch targets (40×40px minimum)
- Increase padding around standalone links
- Stack inline links clearly
- Avoid small size (12px) for primary navigation

### Tablet (600px - 960px)
- Standard sizes appropriate
- Medium size recommended for body content
- Large size for prominent links
- Adequate spacing between links

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for footnotes and captions
- Hover states fully functional
- Icon indicators for external links

---

## Total Variant Combinations

**Link Types:** 2 (Standalone, Inline)
**Sizes:** 3 (Small 12px, Medium 14px, Large 16px)
**States:** 3 (Default, Hover, Disabled)
**Icon Configurations:** 4 (None, Left, Right, Both)

**Total Combinations:** 2 × 3 × 3 × 4 = **72 combinations**

---

## Related Components
- **Button:** For primary actions and non-navigation interactions
- **Breadcrumbs:** For hierarchical navigation with links
- **Typography:** For text content containing inline links
- **IconButton:** For icon-only navigation actions

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:127209
- **Component:** `<Link>`
- **Documentation:** [MUI Link API](https://mui.com/api/link)

---

## Migration Notes

### From Previous Design System
- Typography standardized to DM Sans
- Font sizes aligned to 12px, 14px, 16px
- Line heights adjusted for better readability
- Icon size fixed at 16px across all link sizes
- Hover transition set to 150ms
- Disabled color standardized to 38% opacity
- Inline links always have underline
- Standalone links have no underline by default

### Design Tokens Required
- Typography tokens (12px, 14px, 16px with line heights)
- Color tokens (text primary, disabled)
- Icon size token (16px)
- Spacing tokens (4px gap, 2px padding)
- Transition timing (150ms)

---

## Performance Considerations

- Links are lightweight (simple DOM elements)
- Use native `<a>` elements for best performance
- Avoid wrapping entire cards in links (bad for accessibility)
- Icon SVGs are efficient
- Minimal JavaScript required
- Transition animations are GPU-accelerated

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 72 variant combinations documented
- Full accessibility compliance
- Standalone and Inline variants included
