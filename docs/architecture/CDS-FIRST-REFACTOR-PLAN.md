# CDS-First Refactor Plan

Complete refactoring of all 80 components to use CDS-first approach.

---

## Principles

1. **CDS API First** - Expose CDS props, not MUI props
2. **MUI is Implementation** - MUI used internally only
3. **CDS Styling Priority** - CDS tokens override MUI defaults
4. **Semantic Naming** - Use purpose-based names, not visual descriptions
5. **Same Component Names** - Keep Button, TextField, etc.
6. **MUI as Fallback** - Use MUI only when CDS doesn't define something

---

## Refactor Strategy

### Component Priority Groups

#### Group 1: Buttons (Highest Priority)
- **Button** - primary, secondary, tertiary, danger, success, ghost, link
- **IconButton** - CDS sizes and colors
- **FAB** - CDS sizes and positioning
- **LoadingButton** - Merge into Button with loading prop
- **ButtonGroup** - CDS styling
- **ToggleButton** - CDS variants

#### Group 2: Forms (High Priority)
- **TextField** - CDS variants (outlined, filled, standard)
- **Select** - CDS variants
- **Checkbox** - CDS sizes and colors
- **Radio** - CDS sizes and colors
- **Switch** - CDS sizes and colors
- **Slider** - CDS sizes and marks
- **Rating** - CDS sizes and precision
- **Autocomplete** - CDS variants

#### Group 3: Layout (Medium Priority)
- **Card** - CDS elevation (low, medium, high, none)
- **Container** - CDS max widths
- **Box** - Keep simple (no changes needed)
- **Stack** - Keep simple (no changes needed)
- **Grid** - Keep simple (no changes needed)
- **Section** - CDS spacing variants

#### Group 4: Navigation (Medium Priority)
- **AppBar** - CDS position and elevation
- **Drawer** - CDS variants (permanent, temporary, persistent)
- **Tabs** - CDS variants (standard, scrollable, fullwidth)
- **Tab** - CDS states
- **BottomNavigation** - CDS styling
- **Menu** - CDS variants

#### Group 5: Data Display (Medium Priority)
- **Avatar** - CDS sizes (xs, sm, md, lg, xl)
- **Badge** - CDS variants (standard, dot)
- **Chip** - CDS variants (filled, outlined)
- **Table** - CDS variants (simple, compact, comfortable)
- **List** - CDS variants
- **Tooltip** - CDS placement

#### Group 6: Feedback (Medium Priority)
- **Alert** - CDS severity (info, success, warning, error)
- **Dialog** - CDS sizes (sm, md, lg, xl, fullscreen)
- **Snackbar** - CDS positions
- **CDSProgress** - CDS variants

---

## CDS Variants by Component

### Buttons
```typescript
variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'ghost' | 'link'
```

### Text Fields
```typescript
variant: 'outlined' | 'filled' | 'standard' // Keep MUI names (semantic)
state: 'default' | 'error' | 'success' | 'warning'
```

### Cards
```typescript
elevation: 'none' | 'low' | 'medium' | 'high'
// Maps to: 0, 2, 4, 8 (CDS elevation tokens)
```

### Alerts
```typescript
severity: 'info' | 'success' | 'warning' | 'error' // Already semantic
variant: 'standard' | 'filled' | 'outlined'
```

### Dialogs
```typescript
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'
// CDS responsive sizes
```

### Avatars
```typescript
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
// Not: 20, 32, 40, 56 (pixel values)
```

### Tables
```typescript
density: 'comfortable' | 'standard' | 'compact'
// Not: padding values
```

---

## Prop Naming Changes

### Standardize to CDS Naming

| MUI Prop | CDS Prop | Reason |
|----------|----------|--------|
| `startIcon` | `leftIcon` | More intuitive |
| `endIcon` | `rightIcon` | More intuitive |
| `aria-label` | `ariaLabel` | Consistent camelCase |
| `aria-describedby` | `ariaDescribedBy` | Consistent camelCase |
| `maxWidth="lg"` | `maxWidth="large"` | Spelled out |

---

## Implementation Pattern for Each Component

```typescript
// 1. Define CDS Props Interface
export interface CDSComponentProps {
  // CDS-specific props only
  variant?: 'primary' | 'secondary' | ...;
  size?: 'small' | 'medium' | 'large';
  // ... CDS props
}

// 2. Internal Mapping Function
const mapCDSToMUI = (cdsProps) => {
  // Map CDS props to MUI props
  // This is HIDDEN from developers
};

// 3. Styled Component with CDS Tokens
const StyledMuiComponent = styled(MuiComponent)(({ theme }) => ({
  // CDS tokens FIRST
  // MUI defaults ONLY as fallback
}));

// 4. CDS Component
export const CDSComponent = forwardRef((cdsProps, ref) => {
  const muiProps = mapCDSToMUI(cdsProps);
  return <StyledMuiComponent {...muiProps} />;
});
```

---

## CDS Styling Priority Rules

### Rule 1: CDS Tokens First
```typescript
styled(MuiButton)(({ theme }) => ({
  // CDS token (takes priority)
  borderRadius: theme.shape.borderRadius,

  // MUI default only if CDS not defined
  // (implicit fallback)
}));
```

### Rule 2: Override MUI Classes
```typescript
styled(MuiButton)(({ theme }) => ({
  // Override specific MUI classes with CDS tokens
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main, // CDS color
  },
}));
```

### Rule 3: Disable MUI Features Not in CDS
```typescript
// If CDS doesn't support ripple disabling
// Don't expose disableRipple prop
// Keep all interactions consistent
```

---

## Migration Strategy

### Phase 1: Core Components (Week 1)
1. ✅ Button (Replace Button.tsx with CDS-first)
2. ✅ IconButton
3. ✅ FAB
4. TextField
5. Select
6. Checkbox
7. Radio

### Phase 2: Complex Forms (Week 2)
8. Switch
9. Slider
10. Autocomplete
11. DatePicker
12. FileUpload

### Phase 3: Layout & Navigation (Week 3)
13. Card
14. AppBar
15. Tabs
16. Drawer
17. Menu

### Phase 4: Data Display (Week 4)
18. Avatar
19. Badge
20. Chip
21. Table
22. List
23. Tooltip

### Phase 5: Feedback (Week 5)
24. Alert
25. Dialog
26. Snackbar
27. Progress

### Phase 6: Remaining Components (Week 6)
28-80. All other components

---

## Example Refactor: TextField

### Before (MUI-Centric):
```typescript
export const TextField = styled(MuiTextField)(({ theme }) => ({
  // Just styling, exposes all MUI props
}));

export type TextFieldProps = MuiTextFieldProps;
```

### After (CDS-First):
```typescript
export interface TextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  state?: 'default' | 'error' | 'success' | 'warning';
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (event) => void;
  // ... CDS props only
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { state = 'default', leftIcon, rightIcon, ...rest } = props;

    // Map CDS state to MUI error
    const error = state === 'error';
    const color = state === 'success' ? 'success' : state === 'warning' ? 'warning' : undefined;

    return (
      <StyledTextField
        ref={ref}
        error={error}
        color={color}
        InputProps={{
          startAdornment: leftIcon ? <InputAdornment position="start">{leftIcon}</InputAdornment> : undefined,
          endAdornment: rightIcon ? <InputAdornment position="end">{rightIcon}</InputAdornment> : undefined,
        }}
        {...rest}
      />
    );
  }
);
```

---

## Testing Strategy

### For Each Component:

1. **Type Check** - Ensure only CDS props exposed in TypeScript
2. **Visual Test** - Compare with Figma designs
3. **Responsive Test** - Test across all breakpoints
4. **Accessibility Test** - WCAG 2.1 Level AA
5. **Integration Test** - Use in real forms/pages

---

## Documentation Updates

### For Each Component:

1. Update prop documentation (CDS props only)
2. Add usage examples (CDS API)
3. Remove references to MUI props
4. Add variant descriptions
5. Add "Do/Don't" examples

---

## Breaking Changes

### What Breaks:
```typescript
// OLD: MUI props
<Button variant="contained" color="primary" />
<TextField error helperText="Error" />
<Card elevation={2} />

// NEW: CDS props
<Button variant="primary" />
<TextField state="error" helperText="Error" />
<Card elevation="low" />
```

### Migration Guide:
Create `MIGRATION-V3.md` with:
- Prop mapping table
- Code transformation examples
- Automated migration scripts (codemod)

---

## Success Criteria

✅ All components use CDS props only
✅ MUI is never mentioned in developer-facing docs
✅ TypeScript autocomplete shows CDS props only
✅ All CDS tokens applied correctly
✅ Responsive across all breakpoints
✅ WCAG 2.1 Level AA compliant
✅ All examples updated
✅ Migration guide complete

---

## Version

- **Current**: 2.4.0 (MUI-centric)
- **Next**: 3.0.0 (CDS-first) - Breaking change

---

**Status**: Ready to implement
**Effort**: 6 weeks (1 developer)
**Impact**: High - True design system abstraction
