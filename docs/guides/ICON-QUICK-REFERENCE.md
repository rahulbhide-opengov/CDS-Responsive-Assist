# CDS Icon Quick Reference

Quick reference for using Material UI icons with CDS.

---

## ⚠️ ICON STYLE RESTRICTION

**ONLY 2 styles allowed:**
- ✅ Outlined (Primary)
- ✅ Filled (Secondary)

**❌ NOT ALLOWED: Rounded, TwoTone, Sharp**

---

## Icon Styles (ONLY 2 Allowed)

### 1. Outlined Icons (PRIMARY)
**URL**: https://mui.com/material-ui/material-icons/?theme=Outlined

Use outlined icons as **first preference**.

### 2. Filled Icons (SECONDARY)
**URL**: https://mui.com/material-ui/material-icons/

Use only when outlined versions are not suitable.

### ❌ NOT ALLOWED
**Rounded, TwoTone, and Sharp variants are NOT permitted in CDS.**

---

## Installation

```bash
npm install @mui/icons-material
```

---

## Basic Usage with CDS Colors

```tsx
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <HomeOutlinedIcon
      sx={{ color: theme.palette.primary.main }}
    />
  );
}
```

---

## CDS Color Tokens for Icons

```typescript
// Primary/Secondary
theme.palette.primary.main
theme.palette.secondary.main

// Semantic colors
theme.palette.success.main    // Green
theme.palette.error.main      // Red
theme.palette.warning.main    // Orange
theme.palette.info.main       // Blue

// Text colors
theme.palette.text.primary    // Dark (87%)
theme.palette.text.secondary  // Medium (60%)
theme.palette.text.disabled   // Light (38%)
```

---

## Common Patterns

### Icon in Button
```tsx
<Button
  variant="contained"
  startIcon={<SaveOutlinedIcon />}
>
  Save
</Button>
```

### Icon Button
```tsx
<IconButton
  aria-label="delete"
  sx={{ color: theme.palette.error.main }}
>
  <DeleteOutlineIcon />
</IconButton>
```

### Responsive Icon Sizing
```tsx
<HomeOutlinedIcon
  sx={{
    color: theme.palette.primary.main,
    fontSize: {
      xs: 20,  // Mobile
      sm: 24,  // Tablet+
    }
  }}
/>
```

---

## Most Common Outlined Icons

```tsx
// Navigation
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// Actions
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// Status
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Content
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
```

---

## Rules

✅ **DO:**
- Use ONLY Outlined or Filled styles
- Use Outlined icons first (primary)
- Use Filled only when Outlined not suitable
- Use CDS color tokens
- Add `aria-label` for icon-only buttons
- Apply responsive sizing

❌ **DON'T:**
- Don't use Rounded, TwoTone, or Sharp variants
- Don't use hardcoded colors
- Don't mix Outlined and Filled inconsistently
- Don't use fixed sizes without responsive breakpoints

---

## Full Documentation

See **ICON-USAGE-GUIDE.md** for complete documentation with all examples.

## Code Examples

See **examples/IconExamples.tsx** for working code examples.

---

**Version**: 2.4.0
