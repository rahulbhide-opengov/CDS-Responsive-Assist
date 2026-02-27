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
