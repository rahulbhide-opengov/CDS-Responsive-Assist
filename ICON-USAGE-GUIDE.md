# CDS Icon Usage Guide

Complete guide for using Material UI icons with the CDS Component Design System.

---

## Icon Sources

### Primary: MUI Material Icons (Outlined Theme)
**URL**: https://mui.com/material-ui/material-icons/?theme=Outlined

Use **Outlined** icons as the **first preference** for all CDS components. Outlined icons provide a clean, modern appearance that aligns with the CDS design language.

### Secondary: MUI Material Icons (Standard Theme)
**URL**: https://mui.com/material-ui/material-icons/

Use standard filled icons only when outlined versions are not available or when the design specifically requires filled icons.

---

## Installation

Install the Material UI icons package:

```bash
npm install @mui/icons-material
```

Or with yarn:

```bash
yarn add @mui/icons-material
```

---

## Icon Theme Variants

Material UI icons come in 5 themes. CDS prioritizes them in this order:

1. **Outlined** (Primary) - Clean, outlined style
2. **Filled** (Secondary) - Solid filled style
3. **Rounded** - Rounded edges (use sparingly)
4. **Two Tone** - Two-color style (use sparingly)
5. **Sharp** - Sharp edges (use sparingly)

### Import Examples

```typescript
// ✅ PREFERRED: Outlined icons (default export)
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// ✅ ACCEPTABLE: Filled icons (when outlined not suitable)
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

// ⚠️ USE SPARINGLY: Other variants
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
```

---

## CDS Color Requirements

**IMPORTANT**: All MUI icons must use CDS color tokens from `theme.palette`. Never use default icon colors or hardcoded color values.

### CDS Color Tokens for Icons

```typescript
// Primary colors
theme.palette.primary.main      // Primary brand color
theme.palette.primary.light     // Lighter primary
theme.palette.primary.dark      // Darker primary

// Secondary colors
theme.palette.secondary.main    // Secondary brand color
theme.palette.secondary.light
theme.palette.secondary.dark

// Semantic colors
theme.palette.success.main      // Green for success states
theme.palette.error.main        // Red for error states
theme.palette.warning.main      // Orange for warning states
theme.palette.info.main         // Blue for informational states

// Text colors
theme.palette.text.primary      // Primary text (87% opacity)
theme.palette.text.secondary    // Secondary text (60% opacity)
theme.palette.text.disabled     // Disabled text (38% opacity)

// Action colors
theme.palette.action.active     // Active state
theme.palette.action.hover      // Hover state
theme.palette.action.disabled   // Disabled state

// Background colors
theme.palette.background.default
theme.palette.background.paper

// Common colors
theme.palette.common.white
theme.palette.common.black
```

---

## Usage Patterns

### 1. Basic Icon with CDS Color

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

### 2. Icon with Responsive Sizing

```tsx
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <SettingsOutlinedIcon
      sx={{
        color: theme.palette.text.secondary,
        fontSize: {
          xs: 20,  // 20px on mobile
          sm: 24,  // 24px on tablet+
        }
      }}
    />
  );
}
```

### 3. Icon in Button (CDS Pattern)

```tsx
import { CDSButton } from './cds';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

<CDSButton
  variant="contained"
  startIcon={<SaveOutlinedIcon />}
>
  Save
</CDSButton>

// Icon automatically inherits button's color
// No need to set icon color explicitly
```

### 4. Icon in AppBar

```tsx
import { CDSAppBar } from './cds';
import { Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from '@mui/material/styles';

function MyAppBar() {
  const theme = useTheme();

  return (
    <CDSAppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          sx={{
            mr: 2,
            color: theme.palette.primary.contrastText  // CDS color
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </CDSAppBar>
  );
}
```

### 5. Icon in List Item

```tsx
import { CDSListItem, CDSListItemIcon, CDSListItemText } from './cds';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { useTheme } from '@mui/material/styles';

function MyList() {
  const theme = useTheme();

  return (
    <CDSListItem>
      <CDSListItemIcon>
        <InboxOutlinedIcon
          sx={{ color: theme.palette.action.active }}  // CDS color
        />
      </CDSListItemIcon>
      <CDSListItemText primary="Inbox" />
    </CDSListItem>
  );
}
```

### 6. Semantic Status Icons

```tsx
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTheme } from '@mui/material/styles';

function StatusIcons() {
  const theme = useTheme();

  return (
    <>
      {/* Success */}
      <CheckCircleOutlineIcon
        sx={{ color: theme.palette.success.main }}
      />

      {/* Error */}
      <ErrorOutlineIcon
        sx={{ color: theme.palette.error.main }}
      />

      {/* Warning */}
      <WarningAmberIcon
        sx={{ color: theme.palette.warning.main }}
      />

      {/* Info */}
      <InfoOutlinedIcon
        sx={{ color: theme.palette.info.main }}
      />
    </>
  );
}
```

### 7. Icon in Avatar

```tsx
import { CDSAvatar } from './cds';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useTheme } from '@mui/material/styles';

function UserAvatar() {
  const theme = useTheme();

  return (
    <CDSAvatar sx={{ bgcolor: theme.palette.primary.main }}>
      <PersonOutlineIcon sx={{ color: theme.palette.primary.contrastText }} />
    </CDSAvatar>
  );
}
```

### 8. Icon Button with CDS Colors

```tsx
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTheme } from '@mui/material/styles';

function DeleteButton() {
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        color: theme.palette.error.main,
        '&:hover': {
          backgroundColor: theme.palette.error.light + '14', // 8% opacity
        },
      }}
    >
      <DeleteOutlineIcon />
    </IconButton>
  );
}
```

---

## CDS Icon Size Guidelines

Use responsive icon sizing that adapts to breakpoints:

```typescript
// Small icons (navigation, inline)
sx={{
  fontSize: {
    xs: 18,  // 18px mobile
    sm: 20,  // 20px tablet+
  }
}}

// Medium icons (buttons, list items)
sx={{
  fontSize: {
    xs: 22,  // 22px mobile
    sm: 24,  // 24px tablet+
  }
}}

// Large icons (headers, emphasis)
sx={{
  fontSize: {
    xs: 28,  // 28px mobile
    sm: 32,  // 32px tablet+
  }
}}

// Extra large icons (feature displays)
sx={{
  fontSize: {
    xs: 40,  // 40px mobile
    sm: 48,  // 48px tablet+
  }
}}
```

---

## Common Icon Use Cases

### Navigation Icons

```tsx
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
```

### Form Icons

```tsx
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
```

### Action Icons

```tsx
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
```

### Status Icons

```tsx
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
```

### Content Icons

```tsx
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
```

---

## Best Practices

### ✅ DO

- Always use Outlined icons as first preference
- Use CDS color tokens from `theme.palette`
- Apply responsive sizing using breakpoints
- Use semantic colors for status icons (success, error, warning, info)
- Use `useTheme()` hook to access theme colors
- Ensure icon colors have sufficient contrast (WCAG AA)
- Use consistent icon sizes within the same context

### ❌ DON'T

- Don't use hardcoded color values like `#000000` or `red`
- Don't mix icon themes inconsistently (outlined vs filled)
- Don't use fixed pixel sizes without responsive breakpoints
- Don't use colors outside the CDS palette
- Don't use decorative icons without proper accessibility
- Don't use multiple icon variants in the same component

---

## Accessibility

### Icon-Only Buttons

Always provide accessible labels for icon-only buttons:

```tsx
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

<IconButton
  aria-label="delete"
  sx={{ color: theme.palette.error.main }}
>
  <DeleteOutlineIcon />
</IconButton>
```

### Decorative vs Functional Icons

```tsx
// Decorative icon (hidden from screen readers)
<HomeOutlinedIcon aria-hidden="true" sx={{ color: theme.palette.primary.main }} />

// Functional icon (needs label)
<IconButton aria-label="home">
  <HomeOutlinedIcon sx={{ color: theme.palette.primary.main }} />
</IconButton>
```

---

## Complete Component Example

```tsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  CDSCard,
  CDSCardContent,
  CDSCardActions,
  CDSButton,
} from './cds';
import {
  SaveOutlinedIcon,
  EditOutlinedIcon,
  DeleteOutlineIcon,
} from '@mui/icons-material';

function ActionCard() {
  const theme = useTheme();

  return (
    <CDSCard>
      <CDSCardContent>
        {/* Icon with CDS color */}
        <EditOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: 28, sm: 32 },
            mb: 2,
          }}
        />
        <Typography variant="h6">Edit Document</Typography>
        <Typography variant="body2" color="text.secondary">
          Make changes to your document
        </Typography>
      </CDSCardContent>

      <CDSCardActions>
        {/* Icons automatically inherit button colors */}
        <CDSButton
          variant="contained"
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </CDSButton>

        <CDSButton
          variant="outlined"
          color="error"
          startIcon={<DeleteOutlineIcon />}
        >
          Delete
        </CDSButton>
      </CDSCardActions>
    </CDSCard>
  );
}
```

---

## Icon Reference Links

- **Outlined Icons (Primary)**: https://mui.com/material-ui/material-icons/?theme=Outlined
- **All Icon Themes**: https://mui.com/material-ui/material-icons/
- **Icon API Documentation**: https://mui.com/material-ui/api/svg-icon/
- **Icon Component Guide**: https://mui.com/material-ui/icons/

---

## Icon Package Information

- **Package**: `@mui/icons-material`
- **Version**: Compatible with MUI v6.1.0+
- **Total Icons**: 2,000+ icons across 5 themes
- **Tree-shakeable**: Only imports used icons
- **TypeScript**: Full type definitions included

---

## Summary

1. **Always use Outlined icons first** (https://mui.com/material-ui/material-icons/?theme=Outlined)
2. **All icons must use CDS colors** from `theme.palette`
3. **Apply responsive sizing** using breakpoints
4. **Follow accessibility guidelines** with proper labels
5. **Maintain consistency** in icon theme usage across the application

---

**Version**: 2.4.0
**Last Updated**: 2026-02-27
**CDS Design System**: Complete Icon Usage Guide
