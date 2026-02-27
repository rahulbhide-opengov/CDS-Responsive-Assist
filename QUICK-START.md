# CDS Quick Start Guide

**Get started with CDS components in 5 minutes**

---

## 🚀 Installation

### 1. Copy Files to Your Project

```bash
# Copy the entire src folder
cp -r CDS-Responsive-Assist/src ./src/cds

# Or copy examples too
cp -r CDS-Responsive-Assist/examples ./examples
```

### 2. Install Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 3. Wrap Your App with Theme

```tsx
// App.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { cdsTheme } from './cds';

function App() {
  return (
    <ThemeProvider theme={cdsTheme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## 📋 Import Cheat Sheet

### Quick Imports (Copy & Paste)

```tsx
// Theme
import { cdsTheme } from './cds';

// Buttons
import { CDSButton, CDSIconButton, CDSFAB } from './cds';

// Forms
import {
  CDSTextField,
  CDSCheckbox,
  CDSRadio,
  CDSSwitch,
  CDSSelect,
  CDSFormLabel
} from './cds';

// Layout
import {
  CDSContainer,
  CDSBox,
  CDSStack,
  CDSGrid,
  CDSPaper,
  CDSCard
} from './cds';

// Navigation
import {
  CDSAppBar,
  CDSDrawer,
  CDSBottomNavigation,
  CDSTabs,
  CDSTab
} from './cds';

// MUI Components (re-exported for convenience)
import {
  Typography,
  Avatar,
  Badge,
  Divider,
  List,
  ListItem,
  Menu,
  MenuItem,
  Alert,
  Snackbar,
  Dialog
} from './cds';
```

---

## 💡 Copy-Paste Examples

### Basic Button
```tsx
import { CDSButton } from './cds';

<CDSButton variant="contained" color="primary">
  Click Me
</CDSButton>
```

### Form
```tsx
import { CDSTextField, CDSButton, CDSStack } from './cds';

<CDSStack spacing={3}>
  <CDSTextField label="Email" type="email" required fullWidth />
  <CDSTextField label="Password" type="password" required fullWidth />
  <CDSButton variant="contained" fullWidth>Sign In</CDSButton>
</CDSStack>
```

### Card
```tsx
import { CDSCard, CDSCardContent, Typography } from './cds';

<CDSCard>
  <CDSCardContent>
    <Typography variant="h6">Card Title</Typography>
    <Typography variant="body2">Card content goes here</Typography>
  </CDSCardContent>
</CDSCard>
```

### Grid Layout
```tsx
import { CDSGrid, CDSCard } from './cds';

<CDSGrid container spacing={3}>
  <CDSGrid item xs={12} sm={6} md={4}>
    <CDSCard>Item 1</CDSCard>
  </CDSGrid>
  <CDSGrid item xs={12} sm={6} md={4}>
    <CDSCard>Item 2</CDSCard>
  </CDSGrid>
</CDSGrid>
```

### AppBar + Drawer
```tsx
import { CDSAppBar, CDSDrawer, Toolbar, Typography } from './cds';

<>
  <CDSAppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">App Name</Typography>
    </Toolbar>
  </CDSAppBar>

  <CDSDrawer variant="permanent">
    {/* Navigation */}
  </CDSDrawer>
</>
```

---

## 🎨 Using Tokens Directly

```tsx
import { Box } from '@mui/material';

<Box sx={{
  p: 3,                    // spacing(3) = 12px
  bgcolor: 'primary.main', // #1976d2
  borderRadius: 1,         // 4px
  color: 'white',
}}>
  Content
</Box>
```

---

## 🔑 Token Quick Reference

### Colors
- `primary.main` - #1976d2
- `secondary.main` - #9c27b0
- `error.main` - #d32f2f
- `success.main` - #2e7d32
- `warning.main` - #ed6c02
- `info.main` - #0288d1

### Spacing
- `spacing(1)` - 4px
- `spacing(2)` - 8px
- `spacing(3)` - 12px
- `spacing(4)` - 16px
- `spacing(6)` - 24px

### Elevation
- `elevation={1}` - Subtle (cards)
- `elevation={4}` - AppBar
- `elevation={8}` - Floating elements
- `elevation={16}` - Drawer

### Breakpoints
- `xs` - 0px (Mobile)
- `sm` - 600px (Tablet)
- `md` - 900px (Desktop)
- `lg` - 1200px (Large)
- `xl` - 1536px (XL)

---

## 📁 File Structure After Setup

```
your-project/
├── src/
│   ├── cds/               # CDS components (copied)
│   │   ├── theme/
│   │   │   ├── index.ts   # Main theme export
│   │   │   └── tokens.ts  # Token definitions
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── Form.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navigation.tsx
│   │   └── index.ts       # Main export
│   ├── App.tsx            # Your app (wrap with ThemeProvider)
│   └── ...
└── package.json
```

---

## ✅ Quick Checklist

After setup, verify:
- [ ] ThemeProvider wraps your app
- [ ] CssBaseline is included
- [ ] You can import `cdsTheme`
- [ ] You can import `CDSButton`
- [ ] Components render with CDS styling

---

## 🆘 Troubleshooting

### Import errors?
Make sure path is correct: `import { cdsTheme } from './cds'` or `'./src/cds'`

### Components look unstyled?
Ensure ThemeProvider wraps your app and cdsTheme is imported

### TypeScript errors?
Check tsconfig.json includes `"jsx": "react-jsx"` and proper paths

---

## 📚 Next Steps

1. ✅ Read **README-IMPLEMENTATION.md** for detailed guide
2. ✅ Check **examples/** folder for complete examples
3. ✅ Browse **CDS-*.md** files for component documentation
4. ✅ Use **COMPONENT-INDEX.md** to find specific components

---

## 🎉 That's It!

You now have:
- ✅ Complete CDS theme with all tokens
- ✅ Pre-built accessible components
- ✅ Production-ready code
- ✅ TypeScript support

**Start building!**

---

**Need help?** Check README-IMPLEMENTATION.md for detailed examples
