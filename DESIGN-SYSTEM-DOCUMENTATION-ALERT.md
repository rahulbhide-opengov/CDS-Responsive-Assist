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
