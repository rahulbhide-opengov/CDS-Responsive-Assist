# Loading Button Component Documentation

## Overview
The Loading Button component extends the standard Button with integrated loading states and progress indicators. It displays a circular progress indicator and optionally disables user interaction during asynchronous operations, providing clear visual feedback for form submissions, data fetching, and async actions.

**Component Type:** Input / Action Component
**Based on:** Material-UI (MUI) Lab v5.0+ LoadingButton
**Package:** `@mui/lab/LoadingButton`
**Documentation:** [MUI LoadingButton API](https://mui.com/api/loading-button)

---

## Design Tokens

### Inherits All Button Tokens
LoadingButton inherits all design tokens from the standard Button component:
- Color variants (primary, secondary, error, success, warning, info)
- Size variants (small, medium, large)
- Style variants (contained, outlined, text)
- State tokens (default, hover, focus, active, disabled)

### Loading-Specific Tokens
```typescript
// Progress Indicator
'--component/loading-button/indicator-size-small': '18px',
'--component/loading-button/indicator-size-medium': '22px',
'--component/loading-button/indicator-size-large': '26px',

// Loading State
'--component/loading-button/loading-opacity': '0.6',
'--component/loading-button/disabled-opacity': '0.38',

// Position
'--component/loading-button/indicator-margin': 'var(--spacing/1, 4px)',
```

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/loading-button/transition-duration': 'var(--transition/duration/shortest, 150ms)',
'--component/loading-button/transition-easing': 'var(--transition/easing/ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
```

---

## Component Anatomy

### Loading Button Container
- **Base:** Extends Button component
- **States:** Normal, Loading, Disabled
- **Progress:** CircularProgress integrated
- **Content:** Label + Icon + Loader

### Loading Indicator
- **Component:** CircularProgress (small variant)
- **Size:** Matches button size (18px, 22px, 26px)
- **Color:** Inherits from button color
- **Position:** Start, end, or center (replaces content)

### Content States
- **Normal:** Full opacity, interactive
- **Loading:** Reduced opacity (60%), non-interactive
- **Disabled:** Low opacity (38%), non-interactive

---

## Loading Positions

### Start
- **Position:** Left side of button label
- **Use Case:** Loading before action execution
- **Label:** Remains visible
- **Common:** Form submissions, saves

### End
- **Position:** Right side of button label
- **Use Case:** Loading after action initiated
- **Label:** Remains visible
- **Common:** Load more, fetch data

### Center (Default)
- **Position:** Replaces button content
- **Label:** Hidden during loading
- **Use Case:** Simple actions, icon buttons
- **Common:** Submit, send actions

---

## Size Variants

### Small
- **Height:** 32px
- **Padding:** 4px 10px
- **Font Size:** 13px (0.8125rem)
- **Indicator Size:** 18px
- **Use Case:** Compact UIs, tables, toolbars

### Medium (Default)
- **Height:** 40px
- **Padding:** 6px 16px
- **Font Size:** 14px (0.875rem)
- **Indicator Size:** 22px
- **Use Case:** Standard forms, dialogs

### Large
- **Height:** 48px
- **Padding:** 8px 22px
- **Font Size:** 15px (0.9375rem)
- **Indicator Size:** 26px
- **Use Case:** Prominent actions, hero sections

---

## Color Variants

LoadingButton supports all standard Button colors:
- **Primary:** Main actions
- **Secondary:** Secondary actions
- **Error:** Destructive actions
- **Success:** Positive confirmations
- **Warning:** Cautionary actions
- **Info:** Informational actions
- **Inherit:** Inherits color from parent

---

## Variant Styles

### Contained
- **Background:** Solid color fill
- **Loading:** Lighter spinner color
- **Use Case:** Primary actions
- **Visibility:** High contrast

### Outlined
- **Background:** Transparent
- **Border:** Colored border
- **Loading:** Colored spinner
- **Use Case:** Secondary actions

### Text
- **Background:** Transparent
- **Border:** None
- **Loading:** Colored spinner
- **Use Case:** Tertiary actions

---

## Usage Guidelines

### When to Use
- Form submission buttons
- Save/Update actions
- Async data fetching
- File upload buttons
- API request actions
- Search submissions
- Login/Register buttons
- Payment processing
- Delete confirmations (async)
- Load more pagination

### When NOT to Use
- Instant synchronous actions
- Navigation links
- Toggle switches
- Read-only displays
- Already disabled buttons
- Multiple simultaneous operations (show one loader)
- Very quick operations (< 300ms - flash effect)

### Best Practices

#### Do
- Show loading state for async operations
- Disable button during loading
- Use appropriate indicator position
- Provide loading feedback for operations > 300ms
- Use with form validation
- Match indicator size to button size
- Keep button label visible (use start/end position)
- Test loading state visibility
- Handle error states appropriately
- Reset loading state on completion

#### Don't
- Use for instant actions
- Forget to reset loading state
- Use multiple loaders on same button
- Make loading state permanent
- Use without disabling interaction
- Use for operations < 300ms (too brief)
- Forget error handling
- Use inconsistent sizes
- Hide critical information during loading
- Forget accessibility attributes

---

## Component Integration (CDS Base Components)

### Extends CDS Button
```typescript
// LoadingButton has all Button props plus:
import LoadingButton from '@mui/lab/LoadingButton';

<LoadingButton
  loading={loading}
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="contained"
>
  Save
</LoadingButton>
```

### With CDS Form
```typescript
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

<Box component="form" onSubmit={handleSubmit}>
  <TextField fullWidth label="Email" margin="normal" />
  <TextField fullWidth label="Password" type="password" margin="normal" />
  <LoadingButton
    type="submit"
    fullWidth
    variant="contained"
    loading={loading}
  >
    Sign In
  </LoadingButton>
</Box>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### ARIA Attributes
```typescript
{
  // When loading
  "aria-busy": true,
  "aria-disabled": true,
  "aria-live": "polite",  // Announces state changes

  // Button label
  "aria-label": "Save form",
}
```

#### Keyboard Navigation
- **Tab:** Focus on button (when not loading)
- **Enter/Space:** Activate button (when not loading)
- **Loading State:** Button not focusable/activatable

#### Screen Reader Support
- Loading state announced via aria-busy
- Button state change announced
- Progress indicator described
- Label remains accessible

#### Color Contrast
- **Indicator:** Sufficient contrast (4.5:1 minimum)
- **Label:** Maintains contrast during loading
- **Background:** Meets color contrast requirements

---

## Code Examples

### Basic Loading Button
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

export default function BasicLoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      onClick={handleClick}
    >
      Submit
    </LoadingButton>
  );
}
```

### With Start Icon
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingButtonWithIcon() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="contained"
      onClick={handleSave}
    >
      Save
    </LoadingButton>
  );
}
```

### Form Submission
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function LoadingForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitForm(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        disabled={loading}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        disabled={loading}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        loading={loading}
        sx={{ mt: 2 }}
      >
        Sign In
      </LoadingButton>
    </Box>
  );
}
```

### All Variants
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonVariants() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2}>
      <LoadingButton loading={loading} variant="contained">
        Contained
      </LoadingButton>
      <LoadingButton loading={loading} variant="outlined">
        Outlined
      </LoadingButton>
      <LoadingButton loading={loading} variant="text">
        Text
      </LoadingButton>
    </Stack>
  );
}
```

### All Sizes
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <LoadingButton loading size="small" variant="contained">
        Small
      </LoadingButton>
      <LoadingButton loading size="medium" variant="contained">
        Medium
      </LoadingButton>
      <LoadingButton loading size="large" variant="contained">
        Large
      </LoadingButton>
    </Stack>
  );
}
```

### Loading Positions
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

export default function LoadingPositions() {
  const [loading, setLoading] = useState(true);

  return (
    <Stack spacing={2}>
      <LoadingButton
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Start Position
      </LoadingButton>
      <LoadingButton
        loading={loading}
        loadingPosition="end"
        endIcon={<SendIcon />}
        variant="contained"
      >
        End Position
      </LoadingButton>
      <LoadingButton
        loading={loading}
        variant="contained"
      >
        Center Position
      </LoadingButton>
    </Stack>
  );
}
```

### All Colors
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

export default function LoadingButtonColors() {
  return (
    <Stack spacing={2}>
      <LoadingButton loading variant="contained" color="primary">
        Primary
      </LoadingButton>
      <LoadingButton loading variant="contained" color="secondary">
        Secondary
      </LoadingButton>
      <LoadingButton loading variant="contained" color="success">
        Success
      </LoadingButton>
      <LoadingButton loading variant="contained" color="error">
        Error
      </LoadingButton>
      <LoadingButton loading variant="contained" color="warning">
        Warning
      </LoadingButton>
      <LoadingButton loading variant="contained" color="info">
        Info
      </LoadingButton>
    </Stack>
  );
}
```

### With Error Handling
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function LoadingButtonWithError() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      await performAction();
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={handleClick}
      >
        Perform Action
      </LoadingButton>
    </Box>
  );
}
```

### Async/Await Pattern
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

export default function AsyncLoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Action completed');
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      onClick={handleAsyncAction}
    >
      Async Action
    </LoadingButton>
  );
}
```

### Custom Loading Indicator
```tsx
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomIndicatorButton() {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingButton
      loading={loading}
      loadingIndicator={
        <CircularProgress color="inherit" size={16} />
      }
      variant="outlined"
      onClick={() => setLoading(true)}
    >
      Custom Indicator
    </LoadingButton>
  );
}
```

---

## Common Patterns

### Save Button
```tsx
<LoadingButton
  loading={saving}
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="contained"
  onClick={handleSave}
>
  Save
</LoadingButton>
```

### Submit Form
```tsx
<LoadingButton
  type="submit"
  fullWidth
  variant="contained"
  loading={submitting}
>
  Submit
</LoadingButton>
```

### Delete Confirmation
```tsx
<LoadingButton
  loading={deleting}
  variant="contained"
  color="error"
  onClick={handleDelete}
>
  Delete
</LoadingButton>
```

### Load More
```tsx
<LoadingButton
  loading={loadingMore}
  loadingPosition="end"
  endIcon={<ArrowDownwardIcon />}
  variant="outlined"
  onClick={handleLoadMore}
>
  Load More
</LoadingButton>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use full-width for primary actions
- Ensure minimum 48px touch target
- Consider size="medium" or "large"
- Loading indicator clearly visible

### Tablet (600px - 900px)
- Standard sizes work well
- Grouped buttons in rows
- Loading state clear

### Desktop (> 900px)
- All sizes appropriate
- Hover states work
- Loading animations smooth

---

## CDS Token Integration

### Inherits All Button Tokens
```typescript
// Colors
color: var(--color-palatte/primary/main);
background: var(--color-palatte/primary/main);

// Spacing
padding: var(--spacing/1.5, 6px) var(--spacing/4, 16px);

// Typography
font-size: var(--typography/base-styles/button/font-size);
```

### Loading-Specific
```typescript
// Indicator sizes
indicator-size-small: 18px;
indicator-size-medium: 22px;
indicator-size-large: 26px;

// Transitions
transition-duration: var(--transition/duration/shortest, 150ms);
```

---

## Total Variant Combinations

**Variants:** 3 (contained, outlined, text)
**Sizes:** 3 (small, medium, large)
**Colors:** 7 (primary, secondary, success, error, warning, info, inherit)
**Loading Positions:** 3 (start, end, center)
**States:** 2 (loading, not loading)

**Total Combinations:** 3 × 3 × 7 × 3 × 2 = **378 configurations**

---

## Related Components
- **Button:** Base component (CDS component)
- **IconButton:** Icon-only buttons (CDS component)
- **CircularProgress:** Loading indicator (CDS component)
- **Skeleton:** Loading placeholders
- **LinearProgress:** Alternative loading indicator

---

## Figma Design Reference
- **Component:** LoadingButton extends Button
- **Package:** @mui/lab (experimental)
- **Indicator:** CircularProgress integrated
- **Based on CDS:** Uses all CDS Button tokens plus loading states
- **Documentation:** [MUI LoadingButton API](https://mui.com/api/loading-button)

---

## Migration Notes

### Integration with CDS
- **Base:** Extends CDS Button component completely
- **Colors:** Uses all CDS button color tokens
- **Sizes:** Uses CDS button sizing tokens
- **Spacing:** Uses CDS spacing tokens
- **Typography:** Uses CDS button typography
- **Transitions:** Uses CDS transition tokens (150ms shortest)
- **Integration:** Works seamlessly with CDS forms, dialogs, cards

### Design Tokens Required
- **All Button tokens** (colors, spacing, typography, sizing, states)
- **Indicator sizes:** 18px, 22px, 26px
- **Transition tokens:** 150ms shortest duration
- **Opacity:** 0.6 loading, 0.38 disabled

### Installation
```bash
npm install @mui/lab
```

---

## Performance Considerations

- LoadingButton extends Button (minimal overhead)
- CircularProgress adds small performance cost
- Avoid rapid state changes (debounce if needed)
- Use React.memo for static configurations
- Disable button during loading (prevents double-submit)
- Consider operation duration (avoid for < 300ms)
- Clean up async operations on unmount

---

## Best Practices Summary

### Loading State Management
- Always reset loading state in finally block
- Handle both success and error cases
- Disable button during loading
- Show loading for operations > 300ms

### User Experience
- Provide clear visual feedback
- Keep button label visible (use start/end position)
- Handle error states appropriately
- Don't flash loading state for quick operations

### Accessibility
- Include aria-busy when loading
- Ensure loading state announced
- Maintain keyboard navigation
- Sufficient color contrast

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI Lab v5.0+ specifications
- Integrated with all CDS Button design tokens
- Extends CDS Button component completely
- 378 configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Loading state button component for async operations
- Package: @mui/lab/LoadingButton
