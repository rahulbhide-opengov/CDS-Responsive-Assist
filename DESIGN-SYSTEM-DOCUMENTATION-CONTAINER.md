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
