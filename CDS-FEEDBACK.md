# CDS Feedback Documentation

Complete documentation for all CDS feedback components with design tokens, accessibility, and user interaction patterns.

## Table of Contents

1. [Alert](#alert)
2. [Progress](#progress)
3. [Skeleton](#skeleton)
4. [Backdrop](#backdrop)
5. [LinearProgress](#linearprogress)
6. [CircularProgress](#circularprogress)

---

# Alert Component Documentation

## Overview
The Alert component displays important messages to users with contextual severity levels. It provides visual feedback for errors, warnings, informational messages, and success states with optional icons, titles, and actions.

**Component Type:** Feedback / Notification
**Based on:** Material-UI (MUI) v6.1.0 Alert
**Documentation:** [MUI Alert API](https://mui.com/api/alert)

---

## Design Tokens

### Severity Color Tokens - Filled Variant
```typescript
// Error
'--component/alert/error/filled/bg-color': '#d32f2f',
'--component/alert/error/filled/text-color': '#ffffff',
'--component/alert/error/filled/icon-color': '#ffffff',

// Warning
'--component/alert/warning/filled/bg-color': '#ed6c02',
'--component/alert/warning/filled/text-color': '#ffffff',
'--component/alert/warning/filled/icon-color': '#ffffff',

// Info
'--component/alert/info/filled/bg-color': '#0288d1',
'--component/alert/info/filled/text-color': '#ffffff',
'--component/alert/info/filled/icon-color': '#ffffff',

// Success
'--component/alert/success/filled/bg-color': '#2e7d32',
'--component/alert/success/filled/text-color': '#ffffff',
'--component/alert/success/filled/icon-color': '#ffffff',
```

### Severity Color Tokens - Outlined Variant
```typescript
// Error
'--component/alert/error/outlined/bg-color': 'transparent',
'--component/alert/error/outlined/border-color': '#d32f2f',
'--component/alert/error/outlined/text-color': '#5f2120',
'--component/alert/error/outlined/icon-color': '#d32f2f',

// Warning
'--component/alert/warning/outlined/bg-color': 'transparent',
'--component/alert/warning/outlined/border-color': '#ed6c02',
'--component/alert/warning/outlined/text-color': '#663c00',
'--component/alert/warning/outlined/icon-color': '#ed6c02',

// Info
'--component/alert/info/outlined/bg-color': 'transparent',
'--component/alert/info/outlined/border-color': '#0288d1',
'--component/alert/info/outlined/text-color': '#014361',
'--component/alert/info/outlined/icon-color': '#0288d1',

// Success
'--component/alert/success/outlined/bg-color': 'transparent',
'--component/alert/success/outlined/border-color': '#2e7d32',
'--component/alert/success/outlined/text-color': '#1e4620',
'--component/alert/success/outlined/icon-color': '#2e7d32',
```

### Severity Color Tokens - Standard Variant
```typescript
// Error
'--component/alert/error/standard/bg-color': 'rgba(211, 47, 47, 0.08)',
'--component/alert/error/standard/text-color': '#5f2120',
'--component/alert/error/standard/icon-color': '#d32f2f',

// Warning
'--component/alert/warning/standard/bg-color': 'rgba(237, 108, 2, 0.08)',
'--component/alert/warning/standard/text-color': '#663c00',
'--component/alert/warning/standard/icon-color': '#ed6c02',

// Info
'--component/alert/info/standard/bg-color': 'rgba(2, 136, 209, 0.08)',
'--component/alert/info/standard/text-color': '#014361',
'--component/alert/info/standard/icon-color': '#0288d1',

// Success
'--component/alert/success/standard/bg-color': 'rgba(46, 125, 50, 0.08)',
'--component/alert/success/standard/text-color': '#1e4620',
'--component/alert/success/standard/icon-color': '#2e7d32',
```

### Layout Tokens
```typescript
'--component/alert/padding': '12px 16px',
'--component/alert/border-radius': '4px',
'--component/alert/border-width': '1px',
'--component/alert/icon-size': '20px',
'--component/alert/icon-margin-right': '12px',
'--component/alert/action-margin-left': '16px',
'--component/alert/close-button-margin': '-4px -8px -4px 16px',
'--component/alert/min-height': '48px',
```

### Typography Tokens
```typescript
'--component/alert/title-font-size': '14px',
'--component/alert/title-font-weight': '500',
'--component/alert/title-line-height': '20px',
'--component/alert/message-font-size': '14px',
'--component/alert/message-font-weight': '400',
'--component/alert/message-line-height': '20px',
```

---

## Variant Types

### Filled
- **Appearance:** Solid background with severity color
- **Text:** White color
- **Icon:** White color
- **Use Case:** High-priority alerts, critical messages, requires attention

### Outlined
- **Appearance:** Transparent background with colored border
- **Border:** 1px solid severity color
- **Text:** Dark shade of severity color
- **Icon:** Severity color
- **Use Case:** Secondary alerts, less urgent messages

### Standard (Default)
- **Appearance:** Light background (8% opacity of severity color)
- **Text:** Dark shade of severity color
- **Icon:** Severity color
- **Use Case:** General feedback, informational messages

---

## Severity Levels

### Error
- **Color:** Red (`#d32f2f`)
- **Icon:** Error icon (circle with X)
- **Use Case:** Failed operations, validation errors, critical issues
- **Examples:** "Failed to save changes", "Invalid email format"

### Warning
- **Color:** Orange (`#ed6c02`)
- **Icon:** Warning icon (triangle with exclamation)
- **Use Case:** Cautions, potential issues, non-critical problems
- **Examples:** "Connection unstable", "Approaching storage limit"

### Info
- **Color:** Blue (`#0288d1`)
- **Icon:** Info icon (circle with i)
- **Use Case:** Helpful information, tips, neutral messages
- **Examples:** "New features available", "Your session expires in 10 minutes"

### Success
- **Color:** Green (`#2e7d32`)
- **Icon:** Success icon (circle with checkmark)
- **Use Case:** Successful operations, confirmations, completed actions
- **Examples:** "Changes saved successfully", "Profile updated"

---

## Content Options

### Message Only
- **Structure:** Icon + Message text
- **Min Height:** 48px
- **Use Case:** Simple, concise alerts

### Title + Message
- **Structure:** Icon + Title + Message text
- **Title:** Bold, 14px, 500 weight
- **Message:** Regular, 14px, 400 weight
- **Use Case:** Alerts requiring context or explanation

### With Action Button
- **Structure:** Icon + Message + Action button
- **Action:** Text button or link
- **Alignment:** Right-aligned
- **Use Case:** Actionable alerts (e.g., "Undo", "View Details")

### With Close Button
- **Structure:** Icon + Message + Close button
- **Close:** X icon button
- **Alignment:** Right-aligned
- **Use Case:** Dismissible alerts

### With Title, Message, and Actions
- **Structure:** Icon + Title + Message + Actions + Close
- **Full Featured:** All elements combined
- **Use Case:** Complex alerts requiring context and actions

---

## Icon Configuration

### Default Icons
- **Error:** ErrorOutlineIcon
- **Warning:** WarningAmberIcon
- **Info:** InfoOutlinedIcon
- **Success:** CheckCircleOutlineIcon

### Custom Icons
- Can be replaced with custom icons via `icon` prop
- Icon size: 20×20px
- Positioned 12px from left edge

### No Icon
- Set `icon={false}` to hide icon
- Message starts from left edge

---

## Usage Guidelines

### When to Use
- Form validation feedback
- System notifications
- Status updates
- Operation results (success/failure)
- Warnings before destructive actions
- Contextual help or tips
- Session timeouts or expiration notices

### When NOT to Use
- Toast notifications (use Snackbar)
- Inline field validation (use FormHelperText)
- Tooltips (use Tooltip)
- Complex dialogs (use Dialog)
- Progress indicators (use Progress components)

### Best Practices

#### Do
- Use appropriate severity level for context
- Keep messages concise and actionable
- Provide action buttons when users can resolve issues
- Use titles for complex messages requiring context
- Allow dismissal for non-critical alerts
- Stack multiple alerts vertically with spacing
- Use consistent placement (top of page/section)

#### Don't
- Use alerts for every minor message
- Make alerts too long (keep under 2-3 lines)
- Use multiple severities for same issue
- Forget to provide action buttons for actionable alerts
- Use filled variant excessively (reserve for critical)
- Mix alert variants inconsistently
- Place alerts in unexpected locations

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### ARIA Attributes
```html
<Alert severity="error" role="alert">
  Error message
</Alert>

<Alert severity="warning" role="alert" aria-live="polite">
  Warning message
</Alert>
```

#### Role Attributes
```typescript
{
  role: "alert",                // For immediate alerts
  "aria-live": "polite",        // For non-critical updates
  "aria-live": "assertive",     // For critical updates
  "aria-atomic": "true",        // Announces entire alert
}
```

#### Keyboard Navigation
- **Tab:** Focus action button or close button
- **Enter/Space:** Activate focused button
- **Escape:** Dismiss alert (if dismissible)

#### Color Contrast
- **Filled Variant:** 4.5:1 minimum (white text on colored background)
- **Outlined Variant:** 4.5:1 minimum (dark text on white)
- **Standard Variant:** 4.5:1 minimum (dark text on light background)
- **Icons:** 3:1 minimum against background

#### Screen Reader Support
- Role "alert" announces automatically
- Icons have aria-hidden (text conveys meaning)
- Action buttons have clear labels
- Close button has aria-label="Close"

---

## Code Examples

### Basic Alerts
```tsx
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert!</Alert>
      <Alert severity="warning">This is a warning alert!</Alert>
      <Alert severity="info">This is an info alert!</Alert>
      <Alert severity="success">This is a success alert!</Alert>
    </Stack>
  );
}
```

### Variant Examples
```tsx
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function VariantAlerts() {
  return (
    <Stack spacing={2}>
      <Alert variant="filled" severity="error">
        Filled Error
      </Alert>
      <Alert variant="outlined" severity="error">
        Outlined Error
      </Alert>
      <Alert variant="standard" severity="error">
        Standard Error
      </Alert>
    </Stack>
  );
}
```

### With Title
```tsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertWithTitle() {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert with a title.
    </Alert>
  );
}
```

### With Action
```tsx
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function ActionAlert() {
  return (
    <Alert
      severity="info"
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      This is an info alert with an action.
    </Alert>
  );
}
```

### With Close Button
```tsx
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function CloseAlert() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {open && (
        <Alert
          severity="warning"
          onClose={() => setOpen(false)}
        >
          This alert can be closed.
        </Alert>
      )}
    </>
  );
}
```

### Complex Alert
```tsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';

export default function ComplexAlert() {
  return (
    <Alert
      severity="error"
      variant="filled"
      onClose={() => {}}
      action={
        <Button color="inherit" size="small">
          RETRY
        </Button>
      }
    >
      <AlertTitle>Connection Error</AlertTitle>
      Failed to connect to the server. Please check your internet connection and try again.
    </Alert>
  );
}
```

### Without Icon
```tsx
import Alert from '@mui/material/Alert';

export default function NoIconAlert() {
  return (
    <Alert severity="success" icon={false}>
      This is a success alert without an icon.
    </Alert>
  );
}
```

### Custom Icon
```tsx
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomIconAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      This is a success alert with a custom icon.
    </Alert>
  );
}
```

---

## Common Patterns

### Form Validation
```tsx
{error && (
  <Alert severity="error" sx={{ mb: 2 }}>
    Please correct the errors before submitting.
  </Alert>
)}
```

### Success Confirmation
```tsx
{saved && (
  <Alert severity="success" onClose={() => setSaved(false)}>
    Your changes have been saved successfully.
  </Alert>
)}
```

### Warning Before Action
```tsx
<Alert severity="warning" action={
  <Button onClick={handleProceed} size="small">
    Proceed
  </Button>
}>
  This action cannot be undone. Are you sure?
</Alert>
```

### Dismissible Info
```tsx
<Alert
  severity="info"
  onClose={() => setShowTip(false)}
>
  <AlertTitle>Pro Tip</AlertTitle>
  You can use keyboard shortcuts to navigate faster.
</Alert>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Full width alerts
- Stack action buttons vertically if needed
- Adequate padding for touch (16px)
- Clear close button (min 48px tap target)

### Tablet (600px - 960px)
- Standard layout
- Actions inline with message
- Close button right-aligned

### Desktop (> 960px)
- Standard layout
- All elements inline
- Hover states on actions and close button

---

## Total Variant Combinations

**Base Combinations:**
- 3 variants (Filled, Outlined, Standard)
- 4 severities (Error, Warning, Info, Success)
- 3 content types (Message only, Title + Message, With actions)
- 2 icon states (With icon, Without icon)

**Total:** 3 × 4 × 3 × 2 = **72 base combinations**

---

## Related Components
- **Snackbar:** Temporary notifications
- **Dialog:** Modal dialogs
- **Banner:** Page-level announcements
- **Toast:** Brief messages

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 10990:229266
- **Component:** `<Alert>`
- **Documentation:** [MUI Alert API](https://mui.com/api/alert)

---

## Migration Notes

### From Previous Design System
- Severity colors standardized
- Padding unified to 12px 16px
- Border radius standardized to 4px
- Icon size fixed at 20px
- Typography aligned with design system
- Outlined variant border reduced to 1px
- Standard variant background set to 8% opacity

### Design Tokens Required
- All severity color tokens (filled, outlined, standard)
- Typography tokens (14px, 400/500 weight)
- Spacing tokens (12px, 16px padding)
- Border radius (4px)
- Icon size (20px)

---

## Performance Considerations

- Alerts are lightweight (simple DOM structure)
- Use conditional rendering to show/hide
- Avoid rendering many alerts simultaneously
- Use React.memo for static alerts
- Debounce alert state changes

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 72 variant combinations documented
- Full accessibility compliance


---


# Progress Component Documentation

## Overview
The Progress component provides visual feedback about the duration and state of operations. It includes Linear and Circular variants to indicate determinate (known duration) and indeterminate (unknown duration) loading states.

**Component Type:** Feedback / Loading Indicator
**Based on:** Material-UI (MUI) v6.1.0 LinearProgress & CircularProgress
**Documentation:** [MUI LinearProgress](https://mui.com/api/linear-progress) | [MUI CircularProgress](https://mui.com/api/circular-progress)

---

## Design Tokens

### Linear Progress Tokens
```typescript
'--component/linear-progress/height': '4px',
'--component/linear-progress/border-radius': '2px',
'--component/linear-progress/buffer-dot-size': '10px',
```

### Circular Progress Tokens
```typescript
'--component/circular-progress/size-small': '16px',
'--component/circular-progress/size-medium': '32px',
'--component/circular-progress/size-large': '40px',
'--component/circular-progress/thickness': '3.6',
```

### Color Tokens - Primary
```typescript
'--component/progress/primary/color': '#4b3fff',
'--component/progress/primary/bg-color': 'rgba(75, 63, 255, 0.3)',
```

### Color Tokens - Secondary
```typescript
'--component/progress/secondary/color': '#dc004e',
'--component/progress/secondary/bg-color': 'rgba(220, 0, 78, 0.3)',
```

### Color Tokens - Inherit
```typescript
'--component/progress/inherit/color': 'currentColor',
'--component/progress/inherit/bg-color': 'rgba(0, 0, 0, 0.3)',
```

### Animation Tokens
```typescript
'--component/progress/animation-duration': '2.1s',
'--component/progress/animation-timing': 'linear',
```

---

## Component Types

### Linear Progress
- **Shape:** Horizontal bar
- **Height:** 4px
- **Use Case:** File uploads, page loads, step progress
- **Variants:** Determinate, Indeterminate, Buffer

### Circular Progress
- **Shape:** Circular spinner
- **Sizes:** 16px (small), 32px (medium), 40px (large)
- **Use Case:** Loading buttons, inline loading, page spinners
- **Variants:** Determinate, Indeterminate

---

## Linear Progress Variants

### Determinate
- **Progress:** Shows specific percentage (0-100%)
- **Visual:** Filled bar from left to right
- **Use Case:** Known duration operations (file uploads, downloads)
- **Behavior:** Static or incrementally updates

### Indeterminate
- **Progress:** Unknown completion time
- **Visual:** Animated bar moving left to right continuously
- **Animation:** Infinite loop
- **Use Case:** Unknown duration operations (API calls, processing)

### Buffer
- **Progress:** Two-phase loading (download + processing)
- **Primary Bar:** Current progress
- **Buffer Bar:** Buffered/preloaded content
- **Visual:** Two overlapping bars with dots
- **Use Case:** Video buffering, chunked downloads
- **Behavior:** Both bars animate independently

---

## Circular Progress Variants

### Determinate
- **Progress:** Shows specific percentage (0-100%)
- **Visual:** Arc fills clockwise from top
- **Use Case:** Timed operations, countdown timers
- **Behavior:** Static or incrementally updates

### Indeterminate
- **Progress:** Unknown completion time
- **Visual:** Rotating spinner animation
- **Animation:** Infinite rotation
- **Use Case:** General loading, button states
- **Behavior:** Continuous spin

---

## Size Variants (Circular Only)

### Small (16px)
- **Diameter:** 16px
- **Stroke Width:** ~3px
- **Use Case:** Inline loading, compact UI, button loading
- **Context:** Text-level indicators

### Medium (32px - Default)
- **Diameter:** 32px
- **Stroke Width:** ~3.6px
- **Use Case:** Standard loading, cards, panels
- **Context:** Component-level indicators

### Large (40px)
- **Diameter:** 40px
- **Stroke Width:** ~4px
- **Use Case:** Page-level loading, prominent indicators
- **Context:** Full-screen or section loaders

---

## Color Variants

### Primary
- **Color:** `#4b3fff` (Blue)
- **Background:** `rgba(75, 63, 255, 0.3)` (30% opacity)
- **Use Case:** Primary actions, main loading indicators

### Secondary
- **Color:** `#dc004e` (Pink/Red)
- **Background:** `rgba(220, 0, 78, 0.3)` (30% opacity)
- **Use Case:** Secondary actions, alternative emphasis

### Inherit
- **Color:** `currentColor` (inherits from parent)
- **Background:** `rgba(0, 0, 0, 0.3)` (30% opacity)
- **Use Case:** Adapts to context, flexible theming

---

## Usage Guidelines

### When to Use
- File uploads/downloads
- Form submissions
- Data fetching
- Page transitions
- Long-running operations (> 1 second)
- Buffering content
- Button loading states
- Step progress indicators

### When NOT to Use
- Instant operations (< 300ms) - show nothing
- Very quick operations (< 1 second) - consider Skeleton
- Multiple concurrent operations - use single indicator
- Static progress - use visual meter instead

### Best Practices

#### Do
- Use determinate for known duration operations
- Use indeterminate for unknown duration
- Show progress for operations > 1 second
- Provide context text with progress
- Use buffer variant for streaming/chunked content
- Size circular progress appropriately for context
- Place near the affected content area
- Remove progress indicator when complete

#### Don't
- Show progress for instant operations
- Use determinate without accurate progress data
- Mix multiple progress indicators on screen
- Forget to handle completion state
- Use progress for decorative purposes
- Block all UI during loading
- Use tiny progress indicators (< 16px)

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### ARIA Attributes
```html
<!-- Determinate progress -->
<CircularProgress
  variant="determinate"
  value={75}
  aria-label="Loading progress"
  role="progressbar"
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
/>

<!-- Indeterminate progress -->
<CircularProgress
  aria-label="Loading"
  role="progressbar"
/>
```

#### Role Attributes
```typescript
{
  role: "progressbar",
  "aria-valuenow": number,      // Current value (determinate only)
  "aria-valuemin": 0,           // Minimum value (determinate)
  "aria-valuemax": 100,         // Maximum value (determinate)
  "aria-label": string,         // Description
  "aria-labelledby": string,    // References label element
  "aria-busy": "true",          // Indicates loading state
}
```

#### Screen Reader Support
- Announce progress updates for determinate
- Announce loading state for indeterminate
- Provide descriptive labels
- Consider live region for updates

#### Visual Considerations
- Progress must be perceivable (adequate size and contrast)
- Don't rely on color alone (provide text label)
- Animation respects `prefers-reduced-motion`
- Minimum size 16px for visibility

---

## Code Examples

### Linear Determinate
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress variant="determinate" value={progress} />
  );
}
```

### Linear Indeterminate
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <LinearProgress />
  );
}
```

### Linear Buffer
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBuffer((oldBuffer) => {
        if (oldBuffer === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldBuffer + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress
      variant="buffer"
      value={progress}
      valueBuffer={buffer}
    />
  );
}
```

### Circular Determinate
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
```

### Circular Indeterminate
```tsx
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <CircularProgress />
  );
}
```

### Size Variants
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function CircularSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={16} />
      <CircularProgress size={32} />
      <CircularProgress size={40} />
    </Stack>
  );
}
```

### Color Variants
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function ColorProgress() {
  return (
    <Stack spacing={2}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
```

### Loading Button
```tsx
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingButton() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
    >
      {loading ? 'Loading...' : 'Submit'}
    </Button>
  );
}
```

### With Label
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressWithLabel() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CircularProgress />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Loading data...
      </Typography>
    </Box>
  );
}
```

---

## Common Patterns

### File Upload
```tsx
<Box>
  <Typography variant="body2">Uploading...</Typography>
  <LinearProgress variant="determinate" value={uploadProgress} />
  <Typography variant="caption">{uploadProgress}%</Typography>
</Box>
```

### Page Loading
```tsx
<Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
  <CircularProgress size={40} />
</Box>
```

### Inline Loading
```tsx
<Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
  <CircularProgress size={16} />
  <Typography variant="body2">Processing...</Typography>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large circular progress
- Full-width linear progress
- Adequate visual size for touch screens
- Clear labels for context

### Tablet (600px - 960px)
- Standard sizes appropriate
- Context-aware sizing

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for inline indicators
- Use context to determine sizing

---

## Total Variant Combinations

**Linear Progress:**
- 3 types (Determinate, Indeterminate, Buffer)
- 3 colors (Primary, Secondary, Inherit)
**Total Linear:** 3 × 3 = **9 combinations**

**Circular Progress:**
- 2 types (Determinate, Indeterminate)
- 3 sizes (Small 16px, Medium 32px, Large 40px)
- 3 colors (Primary, Secondary, Inherit)
**Total Circular:** 2 × 3 × 3 = **18 combinations**

**Grand Total:** 9 + 18 = **27 combinations**

---

## Related Components
- **Skeleton:** Placeholder for content loading
- **Backdrop:** Full-screen loading overlay
- **Button:** Loading button states
- **Snackbar:** Loading notifications

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11045:146855
- **Component:** `<Progress>` (Linear & Circular)
- **Documentation:** [MUI LinearProgress](https://mui.com/api/linear-progress) | [MUI CircularProgress](https://mui.com/api/circular-progress)

---

## Migration Notes

### From Previous Design System
- Linear progress height standardized to 4px
- Border radius updated to 2px
- Circular progress sizes standardized (16px, 32px, 40px)
- Stroke thickness unified to 3.6
- Animation duration set to 2.1s
- Color opacity standardized to 30%
- Buffer variant dots standardized

### Design Tokens Required
- All color tokens (primary, secondary, inherit)
- Size tokens (4px height, 16/32/40px diameter)
- Border radius (2px)
- Animation timing (2.1s)
- Opacity values (30% background)

---

## Performance Considerations

- Progress animations use CSS (GPU-accelerated)
- Indeterminate animations are infinite loops
- Update determinate progress efficiently (debounce updates)
- Avoid creating/destroying frequently
- Use React.memo for static progress values
- Respect `prefers-reduced-motion` for accessibility

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 27 variant combinations documented
- Full accessibility compliance
- Linear and Circular variants included


---


# Skeleton Component Documentation

## Overview
The Skeleton component displays placeholder previews of content before data loads, reducing perceived load time and improving user experience during async operations.

**Component Type:** Loading Indicator
**Based on:** Material-UI (MUI) v6.1.0 Skeleton
**Documentation:** [MUI Skeleton API](https://mui.com/api/skeleton)

---

## Design Tokens

### Color Tokens
```typescript
'--component/skeleton/bg-color': 'rgba(0, 0, 0, 0.04)',
'--component/skeleton/animation-duration': '1.5s',
'--component/skeleton/animation-timing': 'ease-in-out',
```

### Shape Tokens
```typescript
// Text
'--component/skeleton/text/width': '120px',
'--component/skeleton/text/height': '12px',
'--component/skeleton/text/border-radius': '4px',

// Circle
'--component/skeleton/circle/size': '40px',
'--component/skeleton/circle/border-radius': '100px',

// Rectangle
'--component/skeleton/rectangle/width': '120px',
'--component/skeleton/rectangle/height': '120px',
'--component/skeleton/rectangle/border-radius': '4px',
```

---

## Shape Variants

### Text
- **Dimensions:** 120px × 12px (default)
- **Border Radius:** 4px
- **Use Case:** Single line text placeholder, titles, labels, list items
- **Customizable:** Width and height can be adjusted

### Circle
- **Dimensions:** 40px diameter (default)
- **Border Radius:** 100px (fully rounded)
- **Use Case:** Avatar placeholders, icon placeholders, profile images
- **Customizable:** Size can be adjusted

### Rectangle
- **Dimensions:** 120px × 120px (default)
- **Border Radius:** 4px
- **Use Case:** Image placeholders, card thumbnails, media content
- **Customizable:** Width and height independent

---

## Animation

### Pulse Animation (Default)
- **Type:** Opacity fade in/out
- **Duration:** 1.5s
- **Timing:** ease-in-out
- **Loop:** Infinite
- **Effect:** Subtle pulsing to indicate loading

### Wave Animation (Optional)
- **Type:** Linear gradient sweep
- **Duration:** 1.5s
- **Direction:** Left to right
- **Effect:** Shimmer/wave across skeleton

---

## Usage Guidelines

### When to Use
- Initial page load with async data
- Infinite scroll loading indicators
- Lazy-loaded images
- Fetching list items or cards
- Progressive content loading
- Any async operation > 500ms

### When NOT to Use
- Quick operations < 300ms (use nothing or spinner)
- Final/static content
- Error states (use error message)
- Empty states (use empty state illustration)
- Critical actions requiring full attention (use modal spinner)

### Best Practices

#### Do
- Match skeleton shape to actual content
- Use appropriate dimensions
- Show skeleton for entire layout
- Animate to indicate loading
- Replace skeleton with real content smoothly
- Use multiple skeletons for lists
- Maintain spacing and alignment with final content

#### Don't
- Show skeleton for < 300ms
- Use different shapes than final content
- Leave skeleton visible after content loads
- Use for static content
- Mix skeletons with real content inconsistently
- Overuse animations (keep subtle)

---

## Common Patterns

### List Skeleton
```
┌────────────────────────────┐
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
└────────────────────────────┘
```

### Card Skeleton
```
┌────────────────────────────┐
│ ▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭     │
│                            │
│ ━━━━━━━━━━━               │
│ ━━━━━━━                   │
└────────────────────────────┘
```

### Profile Skeleton
```
┌────────────────────────────┐
│    ○                       │
│  ━━━━━                    │
│  ━━━━━━━━                 │
└────────────────────────────┘
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Screen Reader Announcement
```html
<Skeleton aria-label="Loading content" />
<!-- or -->
<div aria-busy="true" aria-live="polite">
  <Skeleton />
</div>
```

#### ARIA Attributes
```typescript
{
  "aria-busy": true,          // Indicates loading state
  "aria-live": "polite",      // Announces when content loads
  "aria-label": "Loading...", // Describes loading state
}
```

#### Animation Considerations
- Respect `prefers-reduced-motion` setting
- Disable animations for users with motion sensitivity
- Provide static skeleton alternative

#### Focus Management
- Skeletons should not receive focus
- No keyboard interaction needed
- Focus moves to loaded content when ready

---

## Code Examples

### Basic Skeleton Variants
```tsx
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonVariants() {
  return (
    <Stack spacing={2}>
      {/* Text skeleton */}
      <Skeleton variant="text" width={210} />

      {/* Circle skeleton */}
      <Skeleton variant="circular" width={40} height={40} />

      {/* Rectangle skeleton */}
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
```

### List Skeleton
```tsx
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function ListSkeleton() {
  return (
    <Stack spacing={1}>
      {[...Array(5)].map((_, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={200} />
        </Box>
      ))}
    </Stack>
  );
}
```

### Card Skeleton
```tsx
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardSkeleton() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" width="60%" />
      </CardContent>
    </Card>
  );
}
```

### With Animation Control
```tsx
import Skeleton from '@mui/material/Skeleton';

export default function AnimationSkeleton() {
  return (
    <>
      {/* Pulse animation (default) */}
      <Skeleton animation="pulse" width={210} height={40} />

      {/* Wave animation */}
      <Skeleton animation="wave" width={210} height={40} />

      {/* No animation */}
      <Skeleton animation={false} width={210} height={40} />
    </>
  );
}
```

### Custom Dimensions
```tsx
import Skeleton from '@mui/material/Skeleton';

export default function CustomSkeleton() {
  return (
    <>
      {/* Small text */}
      <Skeleton variant="text" width={80} height={12} />

      {/* Large avatar */}
      <Skeleton variant="circular" width={80} height={80} />

      {/* Wide rectangle */}
      <Skeleton variant="rectangular" width={400} height={200} />
    </>
  );
}
```

### Loading State Pattern
```tsx
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function LoadingContent() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setData({ title: 'Loaded Content' });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton variant="text" width={200} />
      ) : (
        <Typography variant="h4">{data.title}</Typography>
      )}
    </>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Reduce skeleton sizes proportionally
- Maintain minimum 12px height for text
- Stack skeletons vertically
- Full width for rectangles

### Tablet (600px - 960px)
- Standard skeleton sizes
- Grid layouts with 2-3 columns
- Adjust widths to fit containers

### Desktop (> 960px)
- Standard or larger skeleton sizes
- Multi-column grid layouts
- Wider rectangles for cards/images

---

## Total Variant Combinations

**Base Variants:** 3 shapes (Text, Circle, Rectangle)
**Animation Types:** 3 (Pulse, Wave, None)
**Total:** 3 shapes × 3 animations = **9 base combinations**
**Custom:** Unlimited with width/height customization

---

## Related Components
- **CircularProgress:** Determinate/indeterminate spinner
- **LinearProgress:** Progress bar indicator
- **Backdrop:** Full-screen loading overlay
- **Placeholder:** Static placeholder images

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11045:147079
- **Component:** `<Skeleton>`
- **Documentation:** [MUI Skeleton API](https://mui.com/api/skeleton)

---

## Migration Notes

### From Previous Design System
- Background color standardized to `rgba(0, 0, 0, 0.04)`
- Border radius aligned with design system (4px)
- Animation duration standardized to 1.5s
- Default dimensions established for consistency
- Wave animation now available as variant

### Design Tokens Required
- Action color tokens (hover state opacity)
- Border radius tokens (4px)
- Animation timing tokens
- `prefers-reduced-motion` media query support

---

## Performance Considerations

- Skeletons are lightweight (single div)
- CSS animations are GPU-accelerated
- No JavaScript required for animation
- Minimal re-renders when switching to content
- Use React.memo for list skeletons

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 3 shape variants documented
- Full accessibility compliance


---


# Backdrop Component Documentation

## Overview
The Backdrop component creates a semi-transparent overlay that appears behind modal components like Dialogs, Drawers, and Menus. It darkens the background content, focuses user attention on the foreground element, and can be clicked to close the overlay.

**Component Type:** Utility / Overlay Component
**Based on:** Material-UI (MUI) v6.1.0 Backdrop
**Documentation:** [MUI Backdrop API](https://mui.com/api/backdrop)

---

## Design Tokens

### Color Tokens
```typescript
// Uses CDS color system
'--component/backdrop/bg-color': 'rgba(0, 0, 0, 0.5)',        // 50% black (default)
'--component/backdrop/bg-color-light': 'rgba(0, 0, 0, 0.3)',  // 30% black (light)
'--component/backdrop/bg-color-dark': 'rgba(0, 0, 0, 0.7)',   // 70% black (dark)
'--component/backdrop/invisible': 'transparent',               // Invisible variant
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/backdrop/z-index-modal': '1300',       // Behind modal (1400)
'--component/backdrop/z-index-drawer': '1199',      // Behind drawer (1200)
'--component/backdrop/z-index-custom': '1050',      // Custom overlays
```

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/backdrop/transition-duration': 'var(--transition/duration/standard, 300ms)',
'--component/backdrop/transition-easing': 'var(--transition/easing/ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
```

---

## Component Anatomy

### Backdrop Overlay
- **Position:** Fixed (covers entire viewport)
- **Top:** 0
- **Left:** 0
- **Width:** 100vw
- **Height:** 100vh
- **Background:** Black with opacity
- **Z-Index:** Below modal content
- **Cursor:** Default or pointer (if clickable)

### Click Handler
- **Action:** Close overlay
- **Target:** Entire backdrop area
- **Behavior:** Optional (can be disabled)
- **Use Case:** Click outside to dismiss

---

## Opacity Variants

### Standard (50%)
- **Opacity:** `rgba(0, 0, 0, 0.5)`
- **Use Case:** Default modals, standard overlays
- **Visual:** Moderate darkening
- **Readability:** Background still somewhat visible

### Light (30%)
- **Opacity:** `rgba(0, 0, 0, 0.3)`
- **Use Case:** Less intrusive overlays, drawers
- **Visual:** Subtle darkening
- **Readability:** Background more visible

### Dark (70%)
- **Opacity:** `rgba(0, 0, 0, 0.7)`
- **Use Case:** High-focus modals, critical dialogs
- **Visual:** Strong darkening
- **Readability:** Background barely visible

### Invisible
- **Opacity:** `transparent`
- **Use Case:** Click detection without visual overlay
- **Visual:** No darkening
- **Readability:** Background fully visible

---

## Z-Index Levels

### Modal Backdrop (1300)
- **Purpose:** Behind Dialog, Modal
- **Value:** 1300
- **Content Z-Index:** 1400
- **Use Case:** Dialog overlays

### Drawer Backdrop (1199)
- **Purpose:** Behind Drawer
- **Value:** 1199
- **Content Z-Index:** 1200
- **Use Case:** Navigation drawer overlays

### Custom Backdrop (1050)
- **Purpose:** Custom overlays
- **Value:** 1050
- **Content Z-Index:** 1100+
- **Use Case:** Popover, custom components

---

## Usage Guidelines

### When to Use
- Behind modal dialogs
- Behind temporary drawers
- Behind full-screen overlays
- Loading screens (with spinner)
- Image galleries/lightboxes
- Video players (full-screen)
- Focus mode overlays
- Click-outside detection

### When NOT to Use
- Permanent UI elements
- Non-modal content
- Inline overlays
- Tooltips or popovers (usually)
- App bars or navigation
- Decorative purposes only

### Best Practices

#### Do
- Use appropriate opacity (50% standard)
- Set correct z-index (below content)
- Allow click to close (when appropriate)
- Animate fade in/out smoothly
- Use with modal components
- Block scroll on background content
- Provide escape key to close
- Use dark backdrop for critical modals

#### Don't
- Make backdrop too dark (> 80%)
- Use without modal content
- Forget transition animation
- Block all interactions permanently
- Use for decorative overlays
- Forget to clean up on unmount
- Make backdrop click-only (provide close button too)
- Use multiple backdrops simultaneously

---

## Component Integration (CDS Base Components)

### With CDS Dialog
```typescript
import Dialog from '@mui/material/Dialog';
import Backdrop from '@mui/material/Backdrop';

<Dialog
  open={open}
  onClose={handleClose}
  BackdropComponent={Backdrop}
  BackdropProps={{
    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  }}
>
  {/* Dialog content */}
</Dialog>
```

### With CDS Drawer
```typescript
import Drawer from '@mui/material/Drawer';

<Drawer
  open={open}
  onClose={handleClose}
  ModalProps={{
    BackdropProps: {
      sx: { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
    }
  }}
>
  {/* Drawer content */}
</Drawer>
```

### With CDS CircularProgress
```typescript
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

<Backdrop open={loading} sx={{ zIndex: 1400 }}>
  <CircularProgress color="inherit" />
</Backdrop>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<!-- Backdrop is typically decorative -->
<div
  class="backdrop"
  aria-hidden="true"
  onclick="handleClose()"
></div>
```

#### ARIA Attributes
```typescript
{
  // Backdrop itself
  "aria-hidden": "true",       // Not announced by screen readers

  // Modal content behind backdrop
  "aria-modal": "true",        // On modal content
  role: "dialog",              // On modal content
}
```

#### Keyboard Navigation
- **Escape:** Should close backdrop and modal
- **Tab:** Focus stays within modal (focus trap)
- **Click:** Optional close on backdrop click

#### Focus Management
- Focus moves to modal when backdrop opens
- Focus trapped within modal
- Focus returns to trigger when backdrop closes
- Backdrop itself not focusable

#### Screen Reader Support
- Backdrop marked aria-hidden="true"
- Modal content announced, not backdrop
- Close action announced when triggered
- Background content inert (not accessible)

---

## Code Examples

### Basic Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

export default function BasicBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Typography>Click anywhere to close</Typography>
      </Backdrop>
    </>
  );
}
```

### Backdrop with Loading Spinner
```tsx
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingBackdrop() {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <>
      <Button onClick={handleLoad}>Load Data</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
```

### Custom Opacity Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';

export default function CustomOpacityBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Light Backdrop</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      />
    </>
  );
}
```

### Backdrop with Content
```tsx
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ContentBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Content</Button>
      <Backdrop
        open={open}
        sx={{ zIndex: 1400 }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <Typography paragraph>
            This content won't close when clicked.
          </Typography>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Box>
      </Backdrop>
    </>
  );
}
```

### Invisible Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';

export default function InvisibleBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Invisible</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        invisible
      />
    </>
  );
}
```

### Non-Dismissible Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function NonDismissibleBackdrop() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button onClick={() => setLoading(true)}>Start Loading</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: 1400 }}
        open={loading}
        // No onClick handler - can't dismiss by clicking
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress color="inherit" />
          <Typography sx={{ mt: 2 }}>Loading... Please wait</Typography>
        </Box>
      </Backdrop>
    </>
  );
}
```

---

## Common Patterns

### Loading Overlay
```tsx
<Backdrop open={loading} sx={{ zIndex: 1400 }}>
  <CircularProgress color="primary" />
</Backdrop>
```

### Dialog Backdrop
```tsx
<Dialog
  open={open}
  onClose={handleClose}
  BackdropProps={{
    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  }}
>
  {/* Dialog content */}
</Dialog>
```

### Image Lightbox
```tsx
<Backdrop open={showImage} onClick={handleClose} sx={{ zIndex: 1400 }}>
  <img src={imageSrc} alt="Full size" style={{ maxWidth: '90%', maxHeight: '90%' }} />
</Backdrop>
```

### Drawer Backdrop
```tsx
<Drawer
  open={open}
  onClose={handleClose}
  ModalProps={{
    BackdropProps: {
      sx: { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
    }
  }}
>
  {/* Drawer content */}
</Drawer>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Same behavior across all devices
- Full viewport coverage
- Touch-enabled close on backdrop
- May use lighter opacity (30%)

### Tablet (600px - 960px)
- Same behavior
- Full viewport coverage
- Standard opacity (50%)

### Desktop (> 960px)
- Same behavior
- Full viewport coverage
- Standard opacity (50%)
- Mouse click to close

---

## CDS Token Integration

### Uses CDS Colors
```typescript
background: rgba(0, 0, 0, 0.5);    // Standard backdrop
background: rgba(0, 0, 0, 0.3);    // Light variant
background: rgba(0, 0, 0, 0.7);    // Dark variant
background: transparent;            // Invisible
```

### Uses CDS Z-Index
```typescript
z-index: 1300;  // Modal backdrop (CDS modal level - 100)
z-index: 1199;  // Drawer backdrop (CDS drawer level - 1)
z-index: 1050;  // Custom overlays
```

### Uses CDS Transitions
```typescript
transition-duration: var(--transition/duration/standard, 300ms);
transition-timing-function: var(--transition/easing/ease-in-out);
```

---

## Total Variant Combinations

**Opacity Levels:** 4 (Standard 50%, Light 30%, Dark 70%, Invisible)
**Z-Index Levels:** 3 (Modal 1300, Drawer 1199, Custom 1050)
**Interaction:** 2 (Clickable, Non-clickable)

**Total Combinations:** 4 × 3 × 2 = **24 configurations**

---

## Related Components
- **Dialog:** Uses backdrop for modal overlay (CDS component)
- **Drawer:** Uses backdrop for temporary drawer (CDS component)
- **Modal:** Base component using backdrop
- **CircularProgress:** Often used with backdrop for loading (CDS component)
- **Menu:** May use subtle backdrop

---

## Figma Design Reference
- **Component:** Backdrop / Overlay
- **Opacity:** 50% (standard), 30% (light), 70% (dark)
- **Z-Index:** 1300 (modal), 1199 (drawer)
- **Based on CDS:** Uses CDS z-index and transition tokens
- **Documentation:** [MUI Backdrop API](https://mui.com/api/backdrop)

---

## Migration Notes

### Integration with CDS
- **Opacity:** 50% standard (0.5 alpha)
- **Z-Index:** Uses CDS z-index levels (1199, 1300)
- **Transitions:** Uses CDS transition timing (300ms)
- **Colors:** Black with varying opacity
- **Integration:** Works with CDS Dialog, Drawer, CircularProgress

### Design Tokens Required
- **Z-index tokens:** 1199 (drawer level - 1), 1300 (modal level - 100)
- **Transition tokens:** 300ms duration, ease-in-out timing
- **Color tokens:** Black (0, 0, 0) with opacity variants

---

## Performance Considerations

- Backdrop is lightweight (single div)
- Uses CSS opacity and z-index (no JavaScript)
- Transition animations GPU-accelerated
- Fixed positioning efficient
- Avoid rendering heavy content on backdrop
- Clean up on unmount (remove from DOM)
- Use `invisible` prop instead of `opacity: 0` when possible

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS z-index and transition systems
- 24 configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Utility component for modal overlays


---


# Linear Progress Component Documentation

## Overview
The Linear Progress component displays progress along a horizontal line. It shows determinate progress (known completion percentage) or indeterminate progress (unknown duration) for loading states, file uploads, and task completion.

**Component Type:** Feedback / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 LinearProgress
**Documentation:** [MUI LinearProgress API](https://mui.com/api/linear-progress)

---

## Design Tokens

### Layout Tokens
\`\`\`typescript
'--component/linear-progress/height': '4px',
'--component/linear-progress/border-radius': '2px',
\`\`\`

### Color Tokens
\`\`\`typescript
'--component/linear-progress/bg': 'var(--color-palatte/action/hover, rgba(0, 0, 0, 0.11))',
'--component/linear-progress/bar-primary': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/linear-progress/bar-secondary': 'var(--color-palatte/secondary/main)',
\`\`\`

---

## Variant Types

### Determinate
- **Progress:** Known percentage (0-100%)
- **Bar:** Fills proportionally
- **Use Case:** File uploads, downloads, known tasks

### Indeterminate
- **Progress:** Unknown duration
- **Animation:** Continuous back-forth movement
- **Use Case:** Loading, fetching, unknown duration

### Buffer
- **Progress:** Shows both loaded and buffered
- **Use Case:** Video/audio streaming
- **Bars:** Two bars (loaded + buffered)

### Query
- **Progress:** Preparing to load
- **Animation:** Reverse direction
- **Use Case:** Pre-loading state

---

## Color Variants

- **Primary:** Default blue (#4b3fff)
- **Secondary:** Alternative color
- **Success:** Green for completion
- **Error:** Red for errors
- **Warning:** Yellow for warnings
- **Info:** Blue for information

---

## Usage Guidelines

### When to Use
- File upload/download progress
- Page loading
- Data fetching
- Task completion
- Form submission
- Multi-step processes
- System operations

### When NOT to Use
- Instant operations (< 300ms)
- Circular progress more appropriate
- Static indicators
- Non-progress feedback

---

## CDS Token Integration

Uses CDS primary/secondary colors, action colors, and border-radius tokens.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications


---


# Circular Progress Component Documentation

## Overview
The Circular Progress component displays progress in a circular format. It shows determinate progress (known completion percentage) or indeterminate progress (spinning animation) for loading states and async operations.

**Component Type:** Feedback / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 CircularProgress
**Documentation:** [MUI CircularProgress API](https://mui.com/api/circular-progress)

---

## Design Tokens

### Size Tokens
\`\`\`typescript
'--component/circular-progress/size-small': '20px',
'--component/circular-progress/size-medium': '40px',
'--component/circular-progress/size-large': '60px',
'--component/circular-progress/thickness': '3.6',  // Stroke width
\`\`\`

### Color Tokens
\`\`\`typescript
'--component/circular-progress/color-primary': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/circular-progress/color-secondary': 'var(--color-palatte/secondary/main)',
'--component/circular-progress/color-inherit': 'currentColor',
\`\`\`

---

## Size Variants

### Small (20px)
- **Use Case:** Inline with text, buttons, small spaces
- **Example:** Loading button, inline spinner

### Medium (40px)
- **Use Case:** Standard loading indicator
- **Example:** Card loading, section loading
- **Default:** Most common size

### Large (60px)
- **Use Case:** Full-page loading, prominent indicators
- **Example:** Initial page load, large modals

### Custom
- **Size:** Any custom pixel value
- **Thickness:** Adjustable stroke width

---

## Variant Types

### Indeterminate (Default)
- **Animation:** Continuous spinning
- **Use Case:** Unknown duration loading
- **Most Common:** Standard loading spinner

### Determinate
- **Progress:** Known percentage (0-100%)
- **Arc:** Fills proportionally
- **Use Case:** File uploads, known progress

---

## Color Variants

- **Primary:** Default blue (#4b3fff)
- **Secondary:** Alternative color
- **Success:** Green for completion
- **Error:** Red for errors
- **Warning:** Yellow for warnings
- **Info:** Blue for information
- **Inherit:** Uses parent color

---

## Usage Guidelines

### When to Use
- Page loading
- Button loading states
- Async operations
- Data fetching
- Background processes
- Modal/dialog loading
- Inline loading indicators

### When NOT to Use
- Known linear progress (use LinearProgress)
- Very fast operations (< 300ms)
- Static indicators
- Progress bars better suited

---

## Integration with CDS Components

### With LoadingButton
\`\`\`typescript
<LoadingButton loading loadingIndicator={<CircularProgress size={20} />}>
  Submit
</LoadingButton>
\`\`\`

### With Backdrop
\`\`\`typescript
<Backdrop open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>
\`\`\`

### With Box (Centered)
\`\`\`typescript
<Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
  <CircularProgress />
</Box>
\`\`\`

---

## CDS Token Integration

Uses CDS primary/secondary colors, sizing tokens, and integrates with LoadingButton, Backdrop, and other CDS components.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
