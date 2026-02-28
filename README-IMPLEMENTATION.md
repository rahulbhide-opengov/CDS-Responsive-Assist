# CDS Implementation Guide

**Ready-to-use Component Design System with Material-UI v6.1.0**

This guide shows you how to use the CDS theme and pre-built components in your project.

---

## 📦 What's Included

### ✅ Complete Theme File
- **`src/theme/index.ts`** - Complete MUI theme with all 8 CDS token categories
- **`src/theme/tokens.ts`** - All token definitions (colors, spacing, typography, etc.)

### ✅ Pre-Built Components
- **`src/components/Button.tsx`** - Button, IconButton, FAB
- **`src/components/Form.tsx`** - TextField, Checkbox, Radio, Switch, Select, FormLabel
- **`src/components/Layout.tsx`** - Container, Box, Stack, Grid, Paper, Card
- **`src/components/Navigation.tsx`** - AppBar, Drawer, BottomNavigation, Tabs, Tab

### ✅ Usage Examples
- **`examples/basic-usage.tsx`** - Simple component usage
- **`examples/dashboard-example.tsx`** - Complete dashboard layout

---

## 🚀 Quick Start

### Option 1: Copy Files Directly (Recommended)

1. **Copy the `src` folder to your project**
   ```bash
   cp -r CDS-Responsive-Assist/src ./src/cds
   ```

2. **Install dependencies**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
   ```

3. **Import and use**
   ```tsx
   import { ThemeProvider } from '@mui/material/styles';
   import { cdsTheme, Button } from './cds';

   function App() {
     return (
       <ThemeProvider theme={cdsTheme}>
         <Button variant="contained">Click Me</Button>
       </ThemeProvider>
     );
   }
   ```

### Option 2: Use Just the Theme

If you want to use MUI components directly with CDS tokens:

1. **Copy only the theme folder**
   ```bash
   cp -r CDS-Responsive-Assist/src/theme ./src/theme
   ```

2. **Install dependencies**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

3. **Use with any MUI component**
   ```tsx
   import { ThemeProvider } from '@mui/material/styles';
   import { Button, TextField } from '@mui/material';
   import { cdsTheme } from './theme';

   function App() {
     return (
       <ThemeProvider theme={cdsTheme}>
         {/* All CDS tokens automatically applied */}
         <Button variant="contained">Click Me</Button>
         <TextField label="Email" />
       </ThemeProvider>
     );
   }
   ```

---

## 💡 Usage Examples

### Basic Button
```tsx
import { Button } from './cds';

<Button variant="contained" color="primary">
  Primary Action
</Button>
```

### Form with Validation
```tsx
import { TextField, Button, Stack } from './cds';

function ContactForm() {
  return (
    <Stack spacing={3}>
      <TextField
        label="Email"
        type="email"
        required
        fullWidth
        helperText="We'll never share your email"
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        required
        fullWidth
      />
      <Button variant="contained" fullWidth>
        Send Message
      </Button>
    </Stack>
  );
}
```

### Responsive Grid Layout
```tsx
import { Grid, Card, CardContent } from './cds';

function Gallery() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>Card 1</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>Card 2</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
```

### Navigation with AppBar and Drawer
```tsx
import { AppBar, Drawer, Typography, Toolbar } from './cds';

function Layout() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent">
        {/* Navigation items */}
      </Drawer>
    </>
  );
}
```

---

## 🎨 Using CDS Tokens Directly

### With sx Prop
```tsx
import { Box } from '@mui/material';

<Box sx={{
  p: 3,                      // spacing(3) = 12px
  bgcolor: 'primary.main',   // #1976d2
  borderRadius: 1,           // 4px
  color: 'primary.contrastText',
}}>
  Content
</Box>
```

### With styled()
```tsx
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4),        // 16px 32px
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
```

---

## 📊 All CDS Tokens Available

### Colors
```tsx
palette.primary.main      // #1976d2
palette.secondary.main    // #9c27b0
palette.error.main        // #d32f2f
palette.success.main      // #2e7d32
palette.warning.main      // #ed6c02
palette.info.main         // #0288d1
palette.text.primary      // rgba(0,0,0,0.87)
palette.text.secondary    // rgba(0,0,0,0.6)
palette.background.paper  // #ffffff
```

### Spacing (4px base unit)
```tsx
spacing(1)  // 4px
spacing(2)  // 8px
spacing(3)  // 12px
spacing(4)  // 16px
spacing(6)  // 24px
spacing(8)  // 32px
```

### Typography
```tsx
typography.h1, h2, h3, h4, h5, h6
typography.body1, body2
typography.button, caption, overline
```

### Elevation
```tsx
elevation={0}   // Flat
elevation={1}   // Subtle (cards)
elevation={4}   // AppBar
elevation={8}   // Floating buttons
elevation={16}  // Drawer
```

### Border Radius
```tsx
shape.borderRadius  // 4px (default)
borderRadius: 0     // Sharp
borderRadius: 1     // 4px
borderRadius: 2     // 8px
```

### Breakpoints
```tsx
xs: 0px      // Mobile portrait
sm: 600px    // Mobile landscape / Tablet portrait
md: 900px    // Tablet landscape
lg: 1200px   // Desktop
xl: 1536px   // Large desktop
```

---

## 🎯 Component List

### Buttons
- `Button` - Standard button with variants
- `IconButton` - Icon-only button
- `FAB` - Floating action button

### Forms
- `TextField` - Text input with validation
- `Checkbox` - Checkbox input
- `Radio` - Radio button
- `Switch` - Toggle switch
- `Select` - Dropdown select
- `FormLabel` - Form label

### Layout
- `Container` - Max-width wrapper
- `Box` - Generic container
- `Stack` - Vertical/horizontal layout
- `Grid` - 12-column grid
- `Paper` - Elevated surface
- `Card` - Content card
- `Section` - Page section
- `PageContainer` - Page wrapper

### Navigation
- `AppBar` - Top navigation bar
- `Drawer` - Side navigation
- `BottomNavigation` - Mobile bottom nav
- `Tabs` - Tabbed navigation
- `Tab` - Individual tab
- `NavLink` - Navigation link

---

## ♿ Accessibility Built-In

All components include:
- ✅ WCAG 2.1 Level AA compliance
- ✅ Proper ARIA attributes
- ✅ Keyboard navigation support
- ✅ 48px minimum touch targets
- ✅ Color contrast requirements (4.5:1 text, 3:1 non-text)
- ✅ Screen reader support
- ✅ Focus indicators

---

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
// Responsive spacing
<Box sx={{ p: { xs: 2, md: 4 } }}>
  {/* 8px on mobile, 16px on desktop */}
</Box>

// Responsive grid
<Grid item xs={12} sm={6} md={4}>
  {/* Full width mobile, half tablet, third desktop */}
</Grid>

// Responsive typography
<Typography variant={{ xs: 'h6', md: 'h4' }}>
  {/* Smaller on mobile, larger on desktop */}
</Typography>
```

---

## 🔧 Customization

### Extend the Theme
```tsx
import { cdsTheme } from './theme';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme(cdsTheme, {
  palette: {
    primary: {
      main: '#your-color', // Override primary color
    },
  },
});
```

### Create Custom Components
```tsx
import { styled } from '@mui/material/styles';
import { Button } from './cds';

const DangerButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));
```

---

## 📚 Examples

### Complete Login Page
See `examples/basic-usage.tsx` for a complete login form example.

### Dashboard Layout
See `examples/dashboard-example.tsx` for a full dashboard with:
- AppBar with user menu
- Responsive drawer navigation
- Grid layout with stat cards
- Responsive design (mobile/desktop)

---

## 🚀 Production Checklist

Before deploying:
- [ ] ThemeProvider wraps your entire app
- [ ] CssBaseline is included for consistent styles
- [ ] All forms have proper labels and ARIA attributes
- [ ] All interactive elements meet 48px touch target minimum
- [ ] Color contrast meets WCAG AA standards (built-in with CDS)
- [ ] Responsive breakpoints tested on mobile/tablet/desktop
- [ ] Keyboard navigation works on all interactive elements

---

## 💻 IDE Setup

### VSCode IntelliSense
TypeScript types are included for all components. You'll get:
- Autocomplete for all props
- Type checking for theme tokens
- Error highlighting for invalid values

### Import Shortcuts
Add to your VSCode settings.json:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "javascript.preferences.importModuleSpecifier": "relative"
}
```

---

## 🎉 You're Ready!

Your CDS component library is ready to use. All components have:
- ✅ CDS tokens pre-applied
- ✅ Accessibility built-in
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Production-ready code

**Start building:** Copy the `src` folder and start importing components!

For questions or issues, refer to the component documentation in the repository.

---

**Version:** 2.0
**Last Updated:** 2026-02-27
**Status:** Production Ready
