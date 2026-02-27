# CDS-First Architecture

**Design System Principle**: CDS components should expose CDS APIs, not MUI APIs. MUI is an implementation detail.

---

## The Problem with Current Approach

### Current (MUI-Centric):
```tsx
import { CDSButton } from './cds';

// Developer uses MUI concepts
<CDSButton variant="contained" color="primary">Click Me</CDSButton>
<CDSButton variant="outlined" color="secondary">Cancel</CDSButton>
<CDSButton variant="text" color="error">Delete</CDSButton>
```

**Issues:**
- ❌ Developer thinks in MUI terms (contained, outlined, text)
- ❌ Tightly coupled to MUI variant system
- ❌ Hard to switch underlying library later
- ❌ Not following CDS design language
- ❌ Developer sees "MUI concepts" not "CDS concepts"

---

## CDS-First Approach

### Proper CDS API:
```tsx
import { CDSButton } from './cds';

// Developer uses CDS concepts
<CDSButton variant="primary">Click Me</CDSButton>
<CDSButton variant="secondary">Cancel</CDSButton>
<CDSButton variant="danger">Delete</CDSButton>
<CDSButton variant="ghost">Close</CDSButton>
<CDSButton variant="link">Learn More</CDSButton>
```

**Benefits:**
- ✅ Developer thinks in CDS terms
- ✅ MUI is hidden implementation detail
- ✅ Can switch to different library without API changes
- ✅ Follows CDS design language
- ✅ Clear, semantic variant names

---

## CDS Variant System

### Button Variants (CDS Design Language):

| CDS Variant | Visual Style | Use Case |
|------------|--------------|----------|
| **primary** | Solid background, high emphasis | Main call-to-action |
| **secondary** | Outlined, medium emphasis | Secondary actions |
| **tertiary** | Text only, low emphasis | Tertiary actions |
| **danger** | Red/error color, destructive | Delete, remove actions |
| **success** | Green color, positive | Confirm, approve actions |
| **ghost** | Minimal styling, subtle | Dismiss, close actions |
| **link** | Link appearance | Navigation, external links |

### Internal MUI Mapping (Hidden):
```typescript
// This mapping is INTERNAL - developers never see it
const variantMap = {
  primary: { variant: 'contained', color: 'primary' },
  secondary: { variant: 'outlined', color: 'primary' },
  tertiary: { variant: 'text', color: 'primary' },
  danger: { variant: 'contained', color: 'error' },
  success: { variant: 'contained', color: 'success' },
  ghost: { variant: 'text', color: 'inherit' },
  link: { variant: 'text', color: 'primary' },
};
```

---

## Implementation Pattern

### Step 1: Define CDS Props (Not MUI Props)

```typescript
// CDS-specific prop interface
export interface CDSButtonProps {
  // CDS variants
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'ghost' | 'link';

  // CDS sizes
  size?: 'small' | 'medium' | 'large';

  // CDS-specific props
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;

  // Icon support (CDS way)
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Standard props
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';

  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;

  // Style overrides (escape hatch)
  className?: string;
  sx?: any;
}
```

### Step 2: Map CDS Props to MUI Internally

```typescript
export const CDSButton = React.forwardRef<HTMLButtonElement, CDSButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      leftIcon,
      rightIcon,
      ariaLabel,
      ariaDescribedBy,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    // Map CDS variant to MUI variant (INTERNAL)
    const getMuiProps = () => {
      switch (variant) {
        case 'primary':
          return { variant: 'contained' as const, color: 'primary' as const };
        case 'secondary':
          return { variant: 'outlined' as const, color: 'primary' as const };
        case 'tertiary':
          return { variant: 'text' as const, color: 'primary' as const };
        case 'danger':
          return { variant: 'contained' as const, color: 'error' as const };
        case 'success':
          return { variant: 'contained' as const, color: 'success' as const };
        case 'ghost':
          return { variant: 'text' as const, color: 'inherit' as const };
        case 'link':
          return { variant: 'text' as const, color: 'primary' as const };
        default:
          return { variant: 'contained' as const, color: 'primary' as const };
      }
    };

    const muiProps = getMuiProps();

    return (
      <StyledMuiButton
        ref={ref}
        variant={muiProps.variant}
        color={muiProps.color}
        size={size}
        startIcon={leftIcon}
        endIcon={rightIcon}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {loading ? <CircularProgress size={20} /> : children}
      </StyledMuiButton>
    );
  }
);
```

### Step 3: Apply CDS Styling

```typescript
const StyledMuiButton = styled(MuiButton)(({ theme }) => ({
  // CDS tokens and responsive design
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,

  // Responsive sizing
  padding: theme.spacing(1.5, 3),
  minHeight: 38,
  fontSize: '0.8125rem',

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 4),
    minHeight: 40,
    fontSize: '0.875rem',
  },

  // CDS-specific variant overrides
  // ... rest of styling
}));
```

---

## Developer Experience Comparison

### Before (MUI-Centric):
```tsx
// Developer needs to know MUI concepts
<CDSButton variant="contained" color="primary">Primary</CDSButton>
<CDSButton variant="contained" color="error">Delete</CDSButton>
<CDSButton variant="outlined" color="primary">Secondary</CDSButton>
<CDSButton variant="text" color="primary">Tertiary</CDSButton>

// Confusing: which combination for what purpose?
```

### After (CDS-First):
```tsx
// Developer thinks in CDS design language
<CDSButton variant="primary">Primary</CDSButton>
<CDSButton variant="danger">Delete</CDSButton>
<CDSButton variant="secondary">Secondary</CDSButton>
<CDSButton variant="tertiary">Tertiary</CDSButton>

// Clear, semantic, self-documenting
```

---

## Icon Props (CDS Way)

### Before (MUI):
```tsx
<CDSButton startIcon={<SaveIcon />}>Save</CDSButton>
<CDSButton endIcon={<ArrowIcon />}>Next</CDSButton>
```

### After (CDS):
```tsx
<CDSButton leftIcon={<SaveOutlinedIcon />}>Save</CDSButton>
<CDSButton rightIcon={<ArrowOutlinedIcon />}>Next</CDSButton>

// More intuitive naming
```

---

## Prop Naming (CDS vs MUI)

| MUI Prop | CDS Prop | Reason |
|----------|----------|--------|
| `startIcon` | `leftIcon` | More intuitive (left/right vs start/end) |
| `endIcon` | `rightIcon` | More intuitive |
| `aria-label` | `ariaLabel` | Consistent camelCase |
| `aria-describedby` | `ariaDescribedBy` | Consistent camelCase |
| `variant="contained"` | `variant="primary"` | Semantic, not visual |
| `color="error"` | `variant="danger"` | One variant prop |

---

## Escape Hatch (When Needed)

If a developer needs MUI-specific features:

```tsx
// Still possible, but marked as advanced
<CDSButton
  variant="primary"
  muiProps={{
    variant: 'outlined', // Override if needed
    disableRipple: true,
  }}
>
  Advanced
</CDSButton>
```

Or create a separate advanced component:

```tsx
// Advanced use case - explicitly marked
import { CDSButtonAdvanced } from './cds/advanced';

<CDSButtonAdvanced
  variant="contained"
  color="primary"
  disableRipple
>
  Custom
</CDSButtonAdvanced>
```

---

## All CDS Components Should Follow This Pattern

### Forms:
```tsx
// CDS-first
<CDSTextField variant="outlined" /> // CDS variant
<CDSSelect variant="filled" /> // CDS variant

// NOT: MUI variants
```

### Cards:
```tsx
// CDS-first
<CDSCard elevation="low" /> // CDS elevation
<CDSCard elevation="high" />

// NOT: elevation={2} (MUI shadow number)
```

### Alerts:
```tsx
// CDS-first
<CDSAlert severity="error" /> // OK - semantic
<CDSAlert severity="success" />

// This is fine because it's semantic
```

---

## Migration Strategy

### Phase 1: Add CDS Props (Alongside MUI)
```tsx
// Support both during transition
<CDSButton variant="primary" /> // CDS way (preferred)
<CDSButton variant="contained" color="primary" /> // MUI way (deprecated)
```

### Phase 2: Document CDS Way
- Update all examples to use CDS props
- Mark MUI props as deprecated
- Show migration guide

### Phase 3: Remove MUI Props (Breaking Change)
```tsx
// Only CDS way supported
<CDSButton variant="primary" />

// MUI way throws TypeScript error
<CDSButton variant="contained" color="primary" /> // ❌ Error
```

---

## Benefits Summary

### For Developers:
- ✅ Learn CDS design language, not MUI
- ✅ Clear, semantic prop names
- ✅ Self-documenting code
- ✅ Easier onboarding (CDS docs only)
- ✅ Consistent API across all components

### For Design System:
- ✅ True design system abstraction
- ✅ Can switch underlying library without API changes
- ✅ Enforce design system decisions
- ✅ Better branding (CDS everywhere)
- ✅ Control over variant semantics

### For Maintenance:
- ✅ Single source of truth (CDS)
- ✅ Easier to update all components
- ✅ Less coupling to MUI
- ✅ Migration path if MUI changes
- ✅ Custom variants easy to add

---

## Architecture Principle

**"MUI is an implementation detail, not the API"**

```
┌─────────────────────────────────────┐
│          Developer Code             │
│   <CDSButton variant="primary" />   │ ← CDS API only
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│         CDS Component Layer         │
│   • Maps CDS → MUI props            │
│   • Applies CDS styling             │ ← Abstraction layer
│   • Handles responsive design       │
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│        MUI Component (Internal)     │
│   <MuiButton variant="contained" /> │ ← Hidden implementation
└─────────────────────────────────────┘
```

---

**Version**: 3.0.0
**Status**: Architecture Recommendation
**Priority**: High - Should be implemented for true design system
