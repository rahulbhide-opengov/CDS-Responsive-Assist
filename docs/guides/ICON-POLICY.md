# CDS Icon Style Policy

Official policy for icon usage in the CDS Component Design System.

---

## Icon Style Restriction

### ✅ Permitted Styles (ONLY 2)

**1. Outlined Icons (Primary)**
- Use as the **default and first choice** for all icons
- Clean, modern, lightweight appearance
- Consistent with CDS design language
- Source: https://mui.com/material-ui/material-icons/?theme=Outlined

**2. Filled Icons (Secondary)**
- Use **only when** Outlined style is not suitable for the specific use case
- Solid filled appearance for emphasis
- Use sparingly and with purpose
- Source: https://mui.com/material-ui/material-icons/

### ❌ Prohibited Styles (NOT ALLOWED)

The following icon styles are **explicitly prohibited** in CDS:

1. **❌ Rounded Icons** - Not aligned with CDS design language
2. **❌ TwoTone Icons** - Inconsistent with single-color CDS pattern
3. **❌ Sharp Icons** - Not aligned with CDS design language

**Reason**: These styles create visual inconsistency and do not align with the CDS design system principles. Using only Outlined and Filled ensures:
- Visual consistency across the application
- Predictable user experience
- Easier maintenance and updates
- Clear design guidelines for developers

---

## Import Patterns

### ✅ Correct Imports

```typescript
// Outlined icons (Primary - preferred)
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// Filled icons (Secondary - when outlined not suitable)
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
```

### ❌ Incorrect Imports (DO NOT USE)

```typescript
// ❌ PROHIBITED - Do not import these
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
```

---

## When to Use Each Style

### Use Outlined Icons (Primary) When:

- ✅ Default choice for all standard UI elements
- ✅ Navigation menus and toolbars
- ✅ Form fields and inputs
- ✅ List items and data tables
- ✅ Action buttons and controls
- ✅ Status indicators
- ✅ General purpose icons

### Use Filled Icons (Secondary) When:

- ✅ Current/active state needs emphasis (e.g., selected nav item)
- ✅ Primary call-to-action requires visual weight
- ✅ Status requires strong visual presence (e.g., critical alerts)
- ✅ Icon needs to stand out prominently from surrounding UI

### Examples of Appropriate Filled Icon Usage:

```typescript
// Active navigation item
<IconButton>
  {isActive ? <HomeIcon /> : <HomeOutlinedIcon />}
</IconButton>

// Critical error state
<Alert severity="error" icon={<ErrorIcon />}>
  Critical error occurred
</Alert>

// Primary action button with emphasis
<Button variant="contained" startIcon={<StarIcon />}>
  Featured Action
</Button>
```

---

## Color Requirements

**All icons must use CDS color tokens from `theme.palette`**

### ✅ Correct Color Usage

```typescript
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

// Using CDS color tokens
<HomeOutlinedIcon sx={{ color: theme.palette.primary.main }} />
<ErrorIcon sx={{ color: theme.palette.error.main }} />
<CheckCircleIcon sx={{ color: theme.palette.success.main }} />
```

### ❌ Incorrect Color Usage

```typescript
// ❌ Hardcoded colors - DO NOT USE
<HomeOutlinedIcon sx={{ color: '#1976d2' }} />
<ErrorIcon sx={{ color: 'red' }} />
<CheckCircleIcon sx={{ color: 'rgb(46, 125, 50)' }} />
```

---

## Consistency Rules

### Within a Component

**DO NOT mix Outlined and Filled inconsistently in the same component**

```typescript
// ❌ BAD - Mixing styles without purpose
<Stack direction="row">
  <HomeOutlinedIcon />
  <SearchIcon />  {/* Filled - inconsistent */}
  <SettingsOutlinedIcon />
</Stack>

// ✅ GOOD - Consistent style
<Stack direction="row">
  <HomeOutlinedIcon />
  <SearchOutlinedIcon />
  <SettingsOutlinedIcon />
</Stack>

// ✅ GOOD - Purposeful use of Filled for active state
<Stack direction="row">
  <HomeIcon />  {/* Active/selected - purposeful */}
  <SearchOutlinedIcon />
  <SettingsOutlinedIcon />
</Stack>
```

### Across the Application

- Use Outlined as the **default throughout the application**
- Use Filled **only for specific, purposeful emphasis**
- Maintain consistent patterns across similar components
- Document any deviations from Outlined default

---

## Enforcement

This policy is enforced through:

1. **Code Review** - All icon usage reviewed for compliance
2. **Documentation** - Clear guidelines in ICON-USAGE-GUIDE.md
3. **Examples** - Reference implementations in examples/IconExamples.tsx
4. **Linting** (Optional) - Consider adding ESLint rules to catch prohibited imports

---

## Policy Violations

### Common Violations

1. ❌ Importing Rounded, TwoTone, or Sharp icon variants
2. ❌ Using hardcoded colors instead of theme.palette
3. ❌ Mixing Outlined and Filled inconsistently
4. ❌ Using Filled as default instead of Outlined

### How to Fix

```typescript
// ❌ VIOLATION
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
<HomeRoundedIcon sx={{ color: '#1976d2' }} />

// ✅ FIXED
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTheme } from '@mui/material/styles';
const theme = useTheme();
<HomeOutlinedIcon sx={{ color: theme.palette.primary.main }} />
```

---

## Quick Reference

| Style | Status | Usage |
|-------|--------|-------|
| **Outlined** | ✅ Permitted | Primary - use first |
| **Filled** | ✅ Permitted | Secondary - use for emphasis |
| **Rounded** | ❌ Prohibited | Never use |
| **TwoTone** | ❌ Prohibited | Never use |
| **Sharp** | ❌ Prohibited | Never use |

---

## Related Documentation

- **ICON-USAGE-GUIDE.md** - Complete usage guide with examples
- **ICON-QUICK-REFERENCE.md** - Quick lookup reference
- **examples/IconExamples.tsx** - Working code examples

---

## Resources

- **Outlined Icons**: https://mui.com/material-ui/material-icons/?theme=Outlined
- **Filled Icons**: https://mui.com/material-ui/material-icons/
- **Package**: `@mui/icons-material` v6.1.0

---

## Summary

1. ✅ Use **Outlined icons** as the primary choice
2. ✅ Use **Filled icons** only for purposeful emphasis
3. ❌ **Never use** Rounded, TwoTone, or Sharp variants
4. ✅ Always use **CDS color tokens** from `theme.palette`
5. ✅ Maintain **visual consistency** across the application

---

**Version**: 2.4.0
**Policy Status**: Active
**Last Updated**: 2026-02-27
**Authority**: CDS Design System Team
