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
