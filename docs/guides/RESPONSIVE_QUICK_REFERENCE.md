# Responsive Theme - Quick Reference

## Breakpoints

| Device  | Range        | Tokens Used |
|---------|--------------|-------------|
| Mobile  | < 600px      | `.mobile`   |
| Tablet  | 600-899px    | `.tablet`   |
| Desktop | >= 900px     | `.desktop`  |

## Helper Functions

### Typography
```typescript
import { createResponsiveTypography, typographyTokens } from './theme';

const styles = createResponsiveTypography(typographyTokens.body1);
// Result: fontSize, lineHeight, fontWeight, letterSpacing with media queries
```

### Sizing
```typescript
import { createResponsiveSizeObject, sizingTokens } from './theme';

const styles = createResponsiveSizeObject(sizingTokens.button.medium);
// Result: minHeight with media queries
```

### Spacing
```typescript
import { createResponsiveSpacing, spacingTokens } from './theme';

const spacing = createResponsiveSpacing(spacingTokens.responsive[40]);
// Result: { mobile: 36, tablet: 40, desktop: 40 }
```

## Component Sizes (Desktop/Tablet/Mobile)

### Buttons
- **Small**: 28px / 32px / 32px
- **Medium**: 32px / 36px / 36px
- **Large**: 40px / 44px / 44px

### Inputs
- **Small**: 28px / 32px / 32px
- **Medium**: 32px / 36px / 40px
- **Large**: 40px / 44px / 48px

### Chips
- **Small**: 28px / 32px / 32px
- **Medium**: 32px / 36px / 36px
- **Large**: 40px / 44px / 44px

### Tables
- **Header**: 50px / 56px / 64px
- **Cell**: 50px / 56px / 64px

### Navigation
- **AppBar**: 64px (desktop) / 56px (mobile)
- **Drawer**: 240px (fixed)

## Typography Sizes (Desktop/Tablet/Mobile)

### Body Text
- **body1**: 14px / 16px / 16px
- **body2**: 12px / 14px / 16px

### Headings
- **h1**: 48px / 48px / 48px
- **h2**: 32px / 32px / 32px
- **h3**: 24px / 24px / 24px
- **h4**: 20px / 20px / 20px
- **h5**: 16px / 18px / 18px
- **h6**: 14px / 16px / 14px

### Buttons
- **Large**: 16px / 16px / 16px
- **Medium**: 14px / 14px / 14px
- **Small**: 12px / 14px / 14px

## Common Patterns

### Responsive Custom Component
```typescript
import { styled } from '@mui/material/styles';
import {
  createResponsiveTypography,
  createResponsiveSizeObject,
  typographyTokens,
  sizingTokens,
  colorTokens
} from './theme';

const CustomCard = styled('div')({
  ...createResponsiveTypography(typographyTokens.body1),
  ...createResponsiveSizeObject(sizingTokens.button.medium),
  backgroundColor: colorTokens.background.paper,
  padding: '16px',
  borderRadius: '4px',
});
```

### Using Theme Breakpoints
```typescript
import { styled } from '@mui/material/styles';

const ResponsiveBox = styled('div')(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.up('sm')]: {
    padding: 24,
  },
  [theme.breakpoints.up('md')]: {
    padding: 32,
  },
}));
```

### Responsive Spacing
```typescript
import { spacingTokens } from './theme/tokens';

const MyComponent = styled('div')(({ theme }) => ({
  // Fixed spacing (always 16px)
  marginTop: spacingTokens.values[4],

  // Responsive spacing
  marginBottom: spacingTokens.responsive[40].mobile,
  [theme.breakpoints.up('sm')]: {
    marginBottom: spacingTokens.responsive[40].tablet,
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: spacingTokens.responsive[40].desktop,
  },
}));
```

## Token Access

### Direct Token Access
```typescript
import {
  colorTokens,
  typographyTokens,
  sizingTokens,
  spacingTokens,
  borderRadiusTokens,
} from './theme/tokens';

// Colors
const primaryColor = colorTokens.primary[700]; // #4B3FFF

// Typography (responsive object)
const body1Desktop = typographyTokens.body1.desktop.fontSize; // 14

// Sizing (responsive object)
const buttonHeight = sizingTokens.button.medium.desktop; // 32

// Spacing (fixed)
const baseSpacing = spacingTokens.base; // 4
const spacing16 = spacingTokens.values[4]; // 16

// Border Radius
const defaultRadius = borderRadiusTokens.small; // 4
```

## MUI Component Props

### Standard Components (Auto-Responsive)
```tsx
// These automatically use responsive theme values
<Button size="medium">Click Me</Button>
<TextField size="small" />
<Chip size="medium" label="Tag" />
<Typography variant="body1">Text</Typography>
```

### Custom Styling
```tsx
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  // Add your custom responsive styles here
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width on mobile
  },
}));
```

## Color Reference (Unchanged)

### Primary (Blurple)
- **Main**: #4B3FFF (700)
- **Light**: #EEF1FC (100)
- **Dark**: #19009B (900)

### Secondary (Slate)
- **Main**: #546574 (700)
- **Light**: #E9ECEF (100)
- **Dark**: #2D3748 (900)

### State Colors
All state colors remain exactly as before:
- Primary states (hover, selected, focus)
- Secondary states
- Error, success, warning, info

## Touch Targets

### Minimum Size: 48px × 48px
All interactive elements meet WCAG 2.1 Level AA requirements:
- Buttons (with padding)
- IconButtons
- Checkboxes
- Radio buttons
- Switches

## Best Practices

1. **Use theme breakpoints** instead of hard-coded media queries
2. **Use helper functions** for consistent responsive behavior
3. **Test at all breakpoints** (< 600px, 600-899px, >= 900px)
4. **Maintain touch targets** (min 48px) on mobile
5. **Keep color tokens unchanged** - use existing state colors

## Common Mistakes to Avoid

❌ **Don't hard-code sizes:**
```typescript
minHeight: 32, // Wrong - not responsive
```

✅ **Use responsive tokens:**
```typescript
...createResponsiveSizeObject(sizingTokens.button.medium),
```

❌ **Don't access nested values directly:**
```typescript
fontSize: typographyTokens.body1.desktop.fontSize, // Wrong - misses other breakpoints
```

✅ **Use helper functions:**
```typescript
...createResponsiveTypography(typographyTokens.body1),
```

❌ **Don't create custom breakpoints:**
```typescript
'@media (max-width: 768px)': { ... } // Wrong - doesn't match theme
```

✅ **Use theme breakpoints:**
```typescript
[theme.breakpoints.down('md')]: { ... }
```

## Debugging Tips

### Check Current Breakpoint
```typescript
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  console.log({ isMobile, isTablet, isDesktop });
}
```

### Inspect Responsive Values
```typescript
import { typographyTokens } from './theme/tokens';

console.log('Body1 sizes:', {
  mobile: typographyTokens.body1.mobile.fontSize,
  tablet: typographyTokens.body1.tablet.fontSize,
  desktop: typographyTokens.body1.desktop.fontSize,
});
```

## Quick Links

- **Full Documentation**: RESPONSIVE_THEME_UPDATE.md
- **Theme File**: src/theme/index.ts
- **Tokens File**: src/theme/tokens.ts
- **MUI Documentation**: https://mui.com/material-ui/customization/theming/

---

**Remember**: All changes are backward compatible. Existing code continues to work without modifications!
