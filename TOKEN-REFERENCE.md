# CDS Token Reference Guide

Quick lookup for all CDS design tokens used across the component system.

## Token Categories

1. [Color Tokens](#color-tokens)
2. [Spacing Tokens](#spacing-tokens)
3. [Typography Tokens](#typography-tokens)
4. [Sizing Tokens](#sizing-tokens)
5. [Elevation Tokens](#elevation-tokens)
6. [Z-Index Tokens](#z-index-tokens)
7. [Border Radius Tokens](#border-radius-tokens)
8. [Transition Tokens](#transition-tokens)

---

## Color Tokens

### Primary Colors
```typescript
palette.primary.main      // #1976d2 - Primary brand color
palette.primary.light     // #42a5f5 - Hover states, light backgrounds
palette.primary.dark      // #1565c0 - Active states, dark backgrounds
palette.primary.contrastText  // #fff - Text on primary backgrounds
```

### Secondary Colors
```typescript
palette.secondary.main    // #9c27b0 - Secondary brand color
palette.secondary.light   // #ba68c8 - Hover states
palette.secondary.dark    // #7b1fa2 - Active states
palette.secondary.contrastText  // #fff - Text on secondary backgrounds
```

### Semantic Colors
```typescript
// Error
palette.error.main       // #d32f2f - Error messages, destructive actions
palette.error.light      // #ef5350 - Light error backgrounds
palette.error.dark       // #c62828 - Dark error states

// Success
palette.success.main     // #2e7d32 - Success messages, confirmations
palette.success.light    // #4caf50 - Light success backgrounds
palette.success.dark     // #1b5e20 - Dark success states

// Warning
palette.warning.main     // #ed6c02 - Warning messages, cautions
palette.warning.light    // #ff9800 - Light warning backgrounds
palette.warning.dark     // #e65100 - Dark warning states

// Info
palette.info.main        // #0288d1 - Informational messages
palette.info.light       // #03a9f4 - Light info backgrounds
palette.info.dark        // #01579b - Dark info states
```

### Text Colors
```typescript
palette.text.primary     // rgba(0,0,0,0.87) - Main text
palette.text.secondary   // rgba(0,0,0,0.6) - Secondary text, labels
palette.text.disabled    // rgba(0,0,0,0.38) - Disabled text
```

### Background Colors
```typescript
palette.background.default  // #fafafa - Page background
palette.background.paper    // #ffffff - Component backgrounds
```

### Action Colors
```typescript
palette.action.active    // rgba(0,0,0,0.54) - Active icon buttons
palette.action.hover     // rgba(0,0,0,0.04) - Hover overlay
palette.action.selected  // rgba(0,0,0,0.08) - Selected state
palette.action.disabled  // rgba(0,0,0,0.26) - Disabled icons/text
palette.action.disabledBackground  // rgba(0,0,0,0.12) - Disabled button bg
palette.action.focus     // rgba(0,0,0,0.12) - Focus ring
```

### Divider
```typescript
palette.divider          // rgba(0,0,0,0.12) - Separator lines
```

### Usage Examples
```tsx
// Using color tokens
<Button sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
  Primary Button
</Button>

<Alert severity="error" sx={{ bgcolor: 'error.light' }}>
  Error message
</Alert>

<Typography color="text.secondary">
  Secondary text
</Typography>
```

---

## Spacing Tokens

Based on 4px grid system. Use `theme.spacing()` function.

### Spacing Scale
```typescript
spacing(0)   = 0px      // No spacing
spacing(0.5) = 2px      // Extra tight (chips, badges)
spacing(1)   = 4px      // Tight (icon padding, compact)
spacing(1.5) = 6px      // Between tight and standard
spacing(2)   = 8px      // Standard compact (button padding, list items)
spacing(3)   = 12px     // Medium (card content, form gaps)
spacing(4)   = 16px     // Standard comfortable (default padding)
spacing(5)   = 20px     // Large (section spacing)
spacing(6)   = 24px     // Extra large (page margins)
spacing(8)   = 32px     // XXL (major sections)
spacing(10)  = 40px     // XXXL (page sections)
spacing(12)  = 48px     // Maximum (large gaps)
```

### Common Uses
```typescript
// Padding
padding: theme.spacing(2)           // 8px all sides
padding: theme.spacing(2, 3)        // 8px vertical, 12px horizontal
padding: theme.spacing(1, 2, 3, 4)  // 4px top, 8px right, 12px bottom, 16px left

// Margin
margin: theme.spacing(3)            // 12px all sides
marginTop: theme.spacing(4)         // 16px top
marginBottom: theme.spacing(6)      // 24px bottom

// Gap (Stack, Grid)
gap: theme.spacing(2)               // 8px gap
<Stack spacing={3}>                 // 12px spacing between items
<Grid container spacing={4}>        // 16px gap between grid items
```

### Usage Examples
```tsx
// Card with standard spacing
<Card sx={{ p: 3 }}>  {/* 12px padding */}
  <Typography gutterBottom>Title</Typography>
  <Typography variant="body2" sx={{ mt: 2 }}> {/* 8px margin-top */}
    Content
  </Typography>
</Card>

// Stack with spacing
<Stack spacing={2}>  {/* 8px gap between children */}
  <TextField />
  <TextField />
  <Button />
</Stack>

// Grid with spacing
<Grid container spacing={3}>  {/* 12px gap */}
  <Grid item xs={12} sm={6}>...</Grid>
  <Grid item xs={12} sm={6}>...</Grid>
</Grid>
```

---

## Typography Tokens

### Heading Variants
```typescript
// H1 - Page titles
typography.h1 = {
  fontSize: '96px',
  fontWeight: 300,
  lineHeight: 1.167,
  letterSpacing: '-1.5px'
}

// H2 - Section titles
typography.h2 = {
  fontSize: '60px',
  fontWeight: 300,
  lineHeight: 1.2,
  letterSpacing: '-0.5px'
}

// H3 - Subsection titles
typography.h3 = {
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: 1.167,
  letterSpacing: '0'
}

// H4 - Card/component titles
typography.h4 = {
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: 1.235,
  letterSpacing: '0.25px'
}

// H5 - Small titles
typography.h5 = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: 1.334,
  letterSpacing: '0'
}

// H6 - Smallest heading
typography.h6 = {
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '0.15px'
}
```

### Body Text
```typescript
// Body1 - Default body text
typography.body1 = {
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.15px'
}

// Body2 - Secondary body text
typography.body2 = {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: '0.15px'
}
```

### Specialized
```typescript
// Button - Button text
typography.button = {
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.75,
  letterSpacing: '0.4px',
  textTransform: 'uppercase'
}

// Caption - Small text, captions
typography.caption = {
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 1.66,
  letterSpacing: '0.4px'
}

// Overline - Labels, tags
typography.overline = {
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 2.66,
  letterSpacing: '1px',
  textTransform: 'uppercase'
}
```

### Usage Examples
```tsx
<Typography variant="h4" gutterBottom>
  Page Title
</Typography>

<Typography variant="body1" color="text.primary">
  Main content text
</Typography>

<Typography variant="caption" color="text.secondary">
  Helper text or caption
</Typography>
```

---

## Sizing Tokens

### Touch Targets
```typescript
minHeight: '48px'  // Minimum touch target (WCAG)
minWidth: '48px'   // Minimum touch target (WCAG)
```

### Icon Sizes
```typescript
icon.small:  20px   // Small icons
icon.medium: 24px   // Default icons
icon.large:  32px   // Large icons
```

### Button Heights
```typescript
button.small:  32px   // Compact buttons
button.medium: 40px   // Default buttons
button.large:  48px   // Large buttons
```

### App Bar Height
```typescript
appBar.height: 64px    // Desktop
appBar.height: 56px    // Mobile
```

### Avatar Sizes
```typescript
avatar.small:  24px
avatar.medium: 40px
avatar.large:  56px
```

### Usage Examples
```tsx
// Button sizes
<Button size="small">Small (32px)</Button>
<Button size="medium">Medium (40px)</Button>
<Button size="large">Large (48px)</Button>

// Icon sizes
<Icon fontSize="small" />   {/* 20px */}
<Icon fontSize="medium" />  {/* 24px */}
<Icon fontSize="large" />   {/* 32px */}

// Avatar sizes
<Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
<Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
<Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
```

---

## Elevation Tokens

24 levels of box-shadow for depth. Use `elevation` prop or `theme.shadows[]`.

### Common Elevations
```typescript
elevation={0}   // No shadow (flat)
elevation={1}   // Subtle (cards at rest, list items)
elevation={2}   // Raised (cards on hover, raised buttons)
elevation={4}   // App bar, tabs
elevation={8}   // Bottom navigation, floating buttons
elevation={16}  // Temporary drawer, modal
elevation={24}  // Maximum elevation (tooltips, pickers)
```

### Usage Examples
```tsx
// Paper with elevation
<Paper elevation={1}>Card at rest</Paper>
<Paper elevation={2} sx={{ '&:hover': { elevation: 4 } }}>
  Hover effect
</Paper>

// AppBar
<AppBar elevation={4}>Header</AppBar>

// Dialog/Modal
<Dialog elevation={24}>Content</Dialog>

// Custom shadow
<Box sx={{ boxShadow: 8 }}>  {/* elevation 8 */}
  Content
</Box>
```

---

## Z-Index Tokens

Layer ordering for overlapping elements.

### Z-Index Scale
```typescript
zIndex.mobileStepper = 1000   // Mobile stepper
zIndex.fab           = 1050   // Floating action button
zIndex.speedDial     = 1050   // Speed dial
zIndex.appBar        = 1100   // App bar
zIndex.drawer        = 1200   // Drawer
zIndex.modal         = 1300   // Modal, popover
zIndex.snackbar      = 1400   // Snackbar
zIndex.tooltip       = 1500   // Tooltip (highest)
```

### Usage Examples
```tsx
// AppBar with proper z-index
<AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  Header above drawer
</AppBar>

// Custom z-index
<Box sx={{ zIndex: 'modal' }}>  {/* 1300 */}
  Modal content
</Box>

// Stacking context
<Box sx={{ position: 'relative', zIndex: 1 }}>
  Base layer
</Box>
```

---

## Border Radius Tokens

### Radius Scale
```typescript
borderRadius: 0      // No radius (sharp corners)
borderRadius: 2      // Extra small (text skeletons, chips)
borderRadius: 4      // Small - DEFAULT (buttons, inputs, cards)
borderRadius: 8      // Medium (rounded containers)
borderRadius: 12     // Large (prominent cards, dialogs)
borderRadius: '50%'  // Circular (avatars, FABs)
```

### Usage Examples
```tsx
// Default (4px)
<Button>Default radius</Button>
<TextField />
<Card />

// Custom radius
<Paper sx={{ borderRadius: 2 }}>  {/* 8px */}
  Rounded content
</Paper>

// Circular
<Avatar>A</Avatar>
<Fab><AddIcon /></Fab>

// Individual corners
<Box sx={{
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}}>
  Rounded top only
</Box>
```

---

## Transition Tokens

### Duration
```typescript
transitions.duration.shortest  = 150ms  // Quick interactions
transitions.duration.shorter   = 200ms  // Simple animations
transitions.duration.short     = 250ms  // Standard animations
transitions.duration.standard  = 300ms  // DEFAULT - Most transitions
transitions.duration.complex   = 375ms  // Complex animations
transitions.duration.enteringScreen = 225ms  // Modal enter
transitions.duration.leavingScreen  = 195ms  // Modal exit
```

### Easing Functions
```typescript
transitions.easing.easeInOut = 'cubic-bezier(0.4, 0, 0.2, 1)'    // Smooth
transitions.easing.easeOut   = 'cubic-bezier(0.0, 0, 0.2, 1)'    // Decelerate
transitions.easing.easeIn    = 'cubic-bezier(0.4, 0, 1, 1)'      // Accelerate
transitions.easing.sharp     = 'cubic-bezier(0.4, 0, 0.6, 1)'    // Sharp
```

### Usage Examples
```tsx
// Standard transition
<Box sx={{
  transition: (theme) => theme.transitions.create(
    ['background-color', 'transform'],
    {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }
  ),
  '&:hover': {
    backgroundColor: 'primary.light',
    transform: 'scale(1.05)',
  },
}}>
  Hover me
</Box>

// Quick transition for buttons
<Button sx={{
  transition: (theme) => theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter,
  }),
}}>
  Quick transition
</Button>

// Complex animation
<Collapse
  in={open}
  timeout={{
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }}
>
  Content
</Collapse>
```

---

## Responsive Breakpoints

### Breakpoint Values
```typescript
theme.breakpoints.values = {
  xs: 0,       // Mobile portrait
  sm: 600,     // Mobile landscape / Tablet portrait
  md: 900,     // Tablet landscape
  lg: 1200,    // Desktop
  xl: 1536,    // Large desktop
}
```

### Breakpoint Helpers
```typescript
// Up (min-width)
theme.breakpoints.up('sm')    // >= 600px
theme.breakpoints.up('md')    // >= 900px
theme.breakpoints.up('lg')    // >= 1200px

// Down (max-width)
theme.breakpoints.down('sm')  // < 600px
theme.breakpoints.down('md')  // < 900px
theme.breakpoints.down('lg')  // < 1200px

// Between
theme.breakpoints.between('sm', 'lg')  // 600px - 1199px

// Only
theme.breakpoints.only('md')  // 900px - 1199px
```

### Usage Examples
```tsx
// Responsive styling
<Box sx={{
  padding: { xs: 2, sm: 3, md: 4 },  // 8px, 12px, 16px
  fontSize: { xs: '14px', sm: '16px', md: '18px' },
}}>
  Responsive content
</Box>

// Responsive grid
<Grid container>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    {/* Mobile: full, Tablet: half, Desktop: third, Large: quarter */}
  </Grid>
</Grid>

// Media query in sx
<Box sx={{
  [theme.breakpoints.down('sm')]: {
    display: 'none',  // Hide on mobile
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',  // Row on desktop
  },
}}>
  Content
</Box>
```

---

## Token Usage Best Practices

### Always Use Tokens
```tsx
// ✅ Good - Using tokens
<Button sx={{
  p: 2,                    // spacing token
  bgcolor: 'primary.main', // color token
  borderRadius: 1,         // radius token (4px)
}}>

// ❌ Bad - Hard-coded values
<Button sx={{
  padding: '8px',
  backgroundColor: '#1976d2',
  borderRadius: '4px',
}}>
```

### Responsive Tokens
```tsx
// ✅ Good - Responsive spacing
<Box sx={{ p: { xs: 2, md: 4 } }}>

// ✅ Good - Responsive typography
<Typography variant={{ xs: 'h6', md: 'h4' }}>
```

### Consistent Spacing
```tsx
// ✅ Good - Using spacing scale
<Stack spacing={2}>     // 8px
<Grid spacing={3}>      // 12px
<Box sx={{ mb: 4 }}>    // 16px margin-bottom

// ❌ Bad - Inconsistent values
<Box sx={{ marginBottom: '15px' }}>
```

### Semantic Colors
```tsx
// ✅ Good - Semantic colors
<Alert severity="error">    // Uses error.main
<Button color="primary">    // Uses primary.main

// ❌ Bad - Direct color values
<Box sx={{ color: '#d32f2f' }}>
```

---

## Quick Token Lookup

| Need | Token | Example |
|------|-------|---------|
| Primary color | `primary.main` | Buttons, links |
| Error color | `error.main` | Validation, alerts |
| Standard padding | `spacing(4)` | 16px padding |
| Card spacing | `spacing(3)` | 12px padding |
| Grid gap | `spacing={3}` | 12px gap |
| Small button | `size="small"` | 32px height |
| Default button | `size="medium"` | 40px height |
| Card elevation | `elevation={1}` | Subtle shadow |
| AppBar elevation | `elevation={4}` | Standard app bar |
| Border radius | `borderRadius: 1` | 4px (default) |
| Circular | `borderRadius: '50%'` | Avatar, FAB |
| Standard transition | `duration.standard` | 300ms |
| Modal z-index | `zIndex.modal` | 1300 |

---

**Last Updated:** 2026-02-27
**Version:** 1.4
**Total Tokens:** 100+ across 8 categories
