# CDS Implementation Guide

**Ready-to-use Component Design System with Material-UI v6.1.0**

This guide shows you how to use the CDS theme and pre-built components in your project.

---

## 📦 What's Included

### ✅ Complete Theme File
- **`src/theme/index.ts`** - Complete MUI theme with all 8 CDS token categories
- **`src/theme/tokens.ts`** - All token definitions (colors, spacing, typography, etc.)

### ✅ Pre-Built Components
- **`src/components/Button.tsx`** - CDSButton, CDSIconButton, CDSFAB
- **`src/components/Form.tsx`** - CDSTextField, CDSCheckbox, CDSRadio, CDSSwitch, CDSSelect, CDSFormLabel
- **`src/components/Layout.tsx`** - CDSContainer, CDSBox, CDSStack, CDSGrid, CDSPaper, CDSCard
- **`src/components/Navigation.tsx`** - CDSAppBar, CDSDrawer, CDSBottomNavigation, CDSTabs, CDSTab

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
   import { cdsTheme, CDSButton } from './cds';

   function App() {
     return (
       <ThemeProvider theme={cdsTheme}>
         <CDSButton variant="contained">Click Me</CDSButton>
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
import { CDSButton } from './cds';

<CDSButton variant="contained" color="primary">
  Primary Action
</CDSButton>
```

### Form with Validation
```tsx
import { CDSTextField, CDSButton, CDSStack } from './cds';

function ContactForm() {
  return (
    <CDSStack spacing={3}>
      <CDSTextField
        label="Email"
        type="email"
        required
        fullWidth
        helperText="We'll never share your email"
      />
      <CDSTextField
        label="Message"
        multiline
        rows={4}
        required
        fullWidth
      />
      <CDSButton variant="contained" fullWidth>
        Send Message
      </CDSButton>
    </CDSStack>
  );
}
```

### Responsive Grid Layout
```tsx
import { CDSGrid, CDSCard, CDSCardContent } from './cds';

function Gallery() {
  return (
    <CDSGrid container spacing={3}>
      <CDSGrid item xs={12} sm={6} md={4}>
        <CDSCard>
          <CDSCardContent>Card 1</CDSCardContent>
        </CDSCard>
      </CDSGrid>
      <CDSGrid item xs={12} sm={6} md={4}>
        <CDSCard>
          <CDSCardContent>Card 2</CDSCardContent>
        </CDSCard>
      </CDSGrid>
    </CDSGrid>
  );
}
```

### Navigation with AppBar and Drawer
```tsx
import { CDSAppBar, CDSDrawer, Typography, Toolbar } from './cds';

function Layout() {
  return (
    <>
      <CDSAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </CDSAppBar>

      <CDSDrawer variant="permanent">
        {/* Navigation items */}
      </CDSDrawer>
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
- `CDSButton` - Standard button with variants
- `CDSIconButton` - Icon-only button
- `CDSFAB` - Floating action button

### Forms
- `CDSTextField` - Text input with validation
- `CDSCheckbox` - Checkbox input
- `CDSRadio` - Radio button
- `CDSSwitch` - Toggle switch
- `CDSSelect` - Dropdown select
- `CDSFormLabel` - Form label

### Layout
- `CDSContainer` - Max-width wrapper
- `CDSBox` - Generic container
- `CDSStack` - Vertical/horizontal layout
- `CDSGrid` - 12-column grid
- `CDSPaper` - Elevated surface
- `CDSCard` - Content card
- `CDSSection` - Page section
- `CDSPageContainer` - Page wrapper

### Navigation
- `CDSAppBar` - Top navigation bar
- `CDSDrawer` - Side navigation
- `CDSBottomNavigation` - Mobile bottom nav
- `CDSTabs` - Tabbed navigation
- `CDSTab` - Individual tab
- `CDSNavLink` - Navigation link

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
import { CDSButton } from './cds';

const DangerButton = styled(CDSButton)(({ theme }) => ({
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
