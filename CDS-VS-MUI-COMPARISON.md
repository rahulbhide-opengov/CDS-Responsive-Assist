# CDS-First vs MUI-Centric: Side-by-Side Comparison

Visual comparison showing why CDS-first approach is superior for design systems.

---

## Button Component Comparison

### ❌ OLD: MUI-Centric Approach

```tsx
// Current implementation (Button.tsx)
import { Button } from './cds';

// Developer uses MUI concepts
<Button variant="contained" color="primary">
  Save Changes
</Button>

<Button variant="contained" color="error">
  Delete
</Button>

<Button variant="outlined" color="primary">
  Cancel
</Button>

<Button variant="text" color="primary">
  Learn More
</Button>

<Button startIcon={<SaveIcon />} variant="contained" color="primary">
  Save
</Button>
```

**Problems:**
- Developer needs to know MUI's `variant` + `color` combination logic
- Not semantic (what does "outlined primary" mean in CDS?)
- Tightly coupled to MUI
- Uses MUI prop names (`startIcon`, `endIcon`)
- Developer thinks "I'm using MUI through CDS"

### ✅ NEW: CDS-First Approach

```tsx
// New implementation (ButtonCDSFirst.tsx)
import { Button } from './cds';

// Developer uses CDS design language
<Button variant="primary">
  Save Changes
</Button>

<Button variant="danger">
  Delete
</Button>

<Button variant="secondary">
  Cancel
</Button>

<Button variant="tertiary">
  Learn More
</Button>

<Button variant="primary" leftIcon={<SaveOutlinedIcon />}>
  Save
</Button>
```

**Benefits:**
- Semantic, self-documenting code
- Developer only needs to know CDS
- MUI is hidden implementation detail
- CDS prop names (`leftIcon`, `rightIcon`)
- Developer thinks "I'm using CDS"

---

## Variant Mapping

### MUI-Centric (Current):

| Developer Code | Meaning |
|---------------|---------|
| `variant="contained" color="primary"` | Main action? |
| `variant="contained" color="error"` | Delete action? |
| `variant="outlined" color="primary"` | Secondary? |
| `variant="text" color="primary"` | Tertiary? |

**Developer needs to memorize combinations**

### CDS-First (New):

| Developer Code | Meaning |
|---------------|---------|
| `variant="primary"` | Main call-to-action ✅ |
| `variant="danger"` | Destructive action ✅ |
| `variant="secondary"` | Secondary action ✅ |
| `variant="tertiary"` | Low emphasis ✅ |
| `variant="success"` | Positive action ✅ |
| `variant="ghost"` | Minimal styling ✅ |
| `variant="link"` | Link appearance ✅ |

**Semantic, clear, no memorization needed**

---

## Type Definitions Comparison

### MUI-Centric:

```typescript
// Exposes MUI types directly
export type ButtonProps = MuiButtonProps;

// Developer sees all MUI props:
// - variant: "text" | "outlined" | "contained"
// - color: "inherit" | "primary" | "secondary" | ...
// - disableRipple, disableElevation, disableFocusRipple...
```

### CDS-First:

```typescript
// CDS-specific interface
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'ghost' | 'link';
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  // ... only CDS props
}

// Developer sees ONLY CDS API
// MUI props hidden
```

---

## Icon Props Comparison

### MUI-Centric:

```tsx
<Button startIcon={<Icon />}>Text</Button>
<Button endIcon={<Icon />}>Text</Button>

// MUI naming (start/end for RTL support)
```

### CDS-First:

```tsx
<Button leftIcon={<Icon />}>Text</Button>
<Button rightIcon={<Icon />}>Text</Button>

// More intuitive (left/right)
// CDS handles RTL internally if needed
```

---

## Loading State Comparison

### MUI-Centric:

```tsx
// Need to use separate LoadingButton component
import { LoadingButton } from './cds';

<LoadingButton loading={isLoading} loadingPosition="start">
  Save
</LoadingButton>

// Different component, MUI concepts
```

### CDS-First:

```tsx
// Built into Button
<Button variant="primary" loading={isLoading}>
  Save
</Button>

// Single component, simple prop
```

---

## Real-World Usage Example

### Form with Save/Cancel/Delete (MUI-Centric)

```tsx
function EditForm() {
  return (
    <form>
      {/* Developer needs to know MUI combinations */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        type="submit"
      >
        Save Changes
      </Button>

      <Button
        variant="outlined"
        color="primary"
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </form>
  );
}
```

### Form with Save/Cancel/Delete (CDS-First)

```tsx
function EditForm() {
  return (
    <form>
      {/* Clear, semantic, self-documenting */}
      <Button
        variant="primary"
        leftIcon={<SaveOutlinedIcon />}
        type="submit"
      >
        Save Changes
      </Button>

      <Button variant="secondary">
        Cancel
      </Button>

      <Button
        variant="danger"
        leftIcon={<DeleteOutlineIcon />}
      >
        Delete
      </Button>
    </form>
  );
}
```

---

## Accessibility Comparison

### MUI-Centric:

```tsx
<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>

// Kebab-case (HTML attribute style)
```

### CDS-First:

```tsx
<IconButton ariaLabel="delete">
  <DeleteOutlineIcon />
</IconButton>

// CamelCase (React prop style)
// More consistent with React conventions
```

---

## Documentation Impact

### MUI-Centric Documentation:

```markdown
## Button Props

Extends all MuiButton props. See:
https://mui.com/material-ui/api/button/

Common combinations:
- Primary action: variant="contained" color="primary"
- Secondary action: variant="outlined" color="primary"
- Tertiary action: variant="text" color="primary"
- Delete action: variant="contained" color="error"
```

**Developer needs to:**
1. Read CDS docs
2. Read MUI docs
3. Understand both systems
4. Memorize combinations

### CDS-First Documentation:

```markdown
## Button Props

### variant
- 'primary' - Main call-to-action
- 'secondary' - Secondary actions
- 'tertiary' - Low emphasis
- 'danger' - Destructive actions
- 'success' - Positive actions
- 'ghost' - Minimal styling
- 'link' - Link appearance

That's it! No MUI knowledge needed.
```

**Developer needs to:**
1. Read CDS docs only
2. Use semantic variants
3. Done!

---

## Migration from Underlying Library

### MUI-Centric (Current):

```
If MUI changes API or we want to switch to another library:

❌ All developer code breaks
❌ Need to update every usage
❌ variant="contained" might not exist in new library
❌ Major breaking change for all consumers
```

### CDS-First (New):

```
If MUI changes API or we want to switch to another library:

✅ CDS API stays the same
✅ Only update internal mapping
✅ variant="primary" still works
✅ Zero breaking changes for consumers

Example:
// Internal change only
const getMuiProps = (variant) => {
  // Change this mapping, API unchanged
}
```

---

## Bundle Size Impact

### MUI-Centric:

```typescript
// Exports all MUI props and types
export type ButtonProps = MuiButtonProps;

// Developer might accidentally use:
disableRipple, disableElevation, disableFocusRipple, etc.

// TypeScript autocomplete shows 50+ props
```

### CDS-First:

```typescript
// Only exports CDS props
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // ... 10 focused props
}

// TypeScript autocomplete shows only CDS props
// Cleaner API, better DX
```

---

## Developer Onboarding

### MUI-Centric:

```
New developer needs to learn:
1. React ✓
2. TypeScript ✓
3. MUI system ✗ (not necessary for CDS)
4. MUI variants ✗
5. MUI prop combinations ✗
6. Which MUI props are styled by CDS ✗
7. CDS design language ✓

Total: 7 concepts (4 unnecessary)
```

### CDS-First:

```
New developer needs to learn:
1. React ✓
2. TypeScript ✓
3. CDS design language ✓

Total: 3 concepts (focused)
MUI is implementation detail (hidden)
```

---

## Summary Table

| Aspect | MUI-Centric | CDS-First |
|--------|-------------|-----------|
| **API Clarity** | MUI concepts | CDS concepts |
| **Semantic** | No (visual) | Yes (purpose) |
| **Learning Curve** | React + MUI + CDS | React + CDS |
| **Props Count** | 50+ (MUI props) | 10-15 (CDS props) |
| **Coupling** | Tight (MUI exposed) | Loose (MUI hidden) |
| **Migration** | Hard (breaks API) | Easy (internal only) |
| **Documentation** | CDS + MUI docs | CDS docs only |
| **Branding** | MUI through CDS | Pure CDS |
| **Type Safety** | All MUI types | CDS types only |
| **Autocomplete** | 50+ props | 10-15 props |

---

## Recommendation

**Use CDS-First Architecture for:**
- ✅ All new components
- ✅ Button component refactor (highest priority)
- ✅ Form components
- ✅ Navigation components
- ✅ Any component with variants

**Keep MUI-Centric for:**
- ⚠️ Layout components (Container, Grid, Box) - already simple
- ⚠️ Components where MUI props are semantic (Alert severity)

---

## Implementation Priority

### Phase 1 (High Priority):
1. **Button** - Most used, clear benefit
2. **TextField** - Second most used
3. **Select, Checkbox, Radio** - Form components

### Phase 2 (Medium Priority):
4. **Card** - elevation → CDS elevation names
5. **Tab** - Better variant system
6. **Dialog** - CDS size variants

### Phase 3 (Low Priority):
7. Other components as needed
8. Document migration guide
9. Deprecate old MUI-centric props

---

**Version**: 3.0.0
**Status**: Architecture Recommendation
**Impact**: Breaking change (requires migration)
**Effort**: High (refactor 80 components)
**Value**: Very High (true design system)
