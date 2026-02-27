# Badge Component Documentation

## Overview
The Badge component displays a small indicator or counter on top of another element, such as icons or avatars. It's commonly used to show notification counts, status indicators, or availability states. Badges can contain numbers, text, or be displayed as simple dots.

**Component Type:** Data Display / Feedback Component
**Based on:** Material-UI (MUI) v6.1.0 Badge
**Documentation:** [MUI Badge API](https://mui.com/api/badge)

---

## Design Tokens

### Size Tokens
```typescript
// Uses CDS sizing system
'--component/badge/size-standard': '20px',
'--component/badge/size-small': '16px',
'--component/badge/size-dot': '8px',
'--component/badge/min-width': '20px',
'--component/badge/height': '20px',
'--component/badge/padding': '0 6px',
```

### Position Tokens
```typescript
'--component/badge/offset-x': '0px',
'--component/badge/offset-y': '0px',
'--component/badge/top': '0',
'--component/badge/right': '0',
```

### Typography Tokens
```typescript
// Uses CDS caption typography
'--component/badge/font-family': 'var(--typography/base-styles/caption/font-family, "DM_Sans:Regular", sans-serif)',
'--component/badge/font-size': 'var(--typography/base-styles/caption/font-size, 12px)',
'--component/badge/font-weight': 'var(--typography/base-styles/caption/font-weight, 500)',
'--component/badge/line-height': '1',
'--component/badge/letter-spacing': '0.14px',
```

### Color Tokens
```typescript
// Primary/Default Badge
'--component/badge/default/bg-color': 'var(--color-palatte/grey/400, #bdbdbd)',
'--component/badge/default/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',

// Primary Badge
'--component/badge/primary/bg-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/badge/primary/text-color': 'var(--color-palatte/primary/contrast-text, #ffffff)',

// Secondary Badge
'--component/badge/secondary/bg-color': 'var(--color-palatte/secondary/main, #dc004e)',
'--component/badge/secondary/text-color': 'var(--color-palatte/secondary/contrast-text, #ffffff)',

// Error Badge
'--component/badge/error/bg-color': 'var(--color-palatte/error/main, #f44336)',
'--component/badge/error/text-color': 'var(--color-palatte/error/contrast-text, #ffffff)',

// Warning Badge
'--component/badge/warning/bg-color': 'var(--color-palatte/warning/main, #ff9800)',
'--component/badge/warning/text-color': 'var(--color-palatte/warning/contrast-text, rgba(0, 0, 0, 0.87))',

// Success Badge
'--component/badge/success/bg-color': 'var(--color-palatte/success/main, #4caf50)',
'--component/badge/success/text-color': 'var(--color-palatte/success/contrast-text, #ffffff)',

// Info Badge
'--component/badge/info/bg-color': 'var(--color-palatte/info/main, #2196f3)',
'--component/badge/info/text-color': 'var(--color-palatte/info/contrast-text, #ffffff)',
```

### Border Tokens
```typescript
'--component/badge/border-radius': '10px',    // Pill shape
'--component/badge/border-width': '2px',      // Outline on paper
'--component/badge/border-color': 'var(--color-palatte/background/paper, #ffffff)',
```

---

## Component Anatomy

### Badge Container
- **Position:** Absolute, positioned relative to parent
- **Anchor:** Top-right by default (configurable)
- **Z-Index:** 1 (above content)
- **Transform:** translate(50%, -50%) for top-right

### Badge Content
- **Shape:** Rounded rectangle (pill)
- **Size:** 20×20px (standard), 16×16px (small), 8×8px (dot)
- **Background:** Color based on variant
- **Text:** White or dark (contrast-based)
- **Padding:** 0 6px (horizontal)
- **Border:** 2px white border (on colored backgrounds)

### Wrapped Element
- **Position:** Relative (anchor for badge)
- **Display:** Inline-block or block
- **Common:** Icons, avatars, buttons
- **Size:** Any (badge adjusts to parent)

---

## Size Variants

### Standard
- **Size:** 20×20px (height)
- **Min Width:** 20px
- **Font Size:** 12px (CDS caption)
- **Padding:** 0 6px
- **Use Case:** Default notifications, counts
- **Max Content:** 2-3 characters recommended

### Small
- **Size:** 16×16px (height)
- **Min Width:** 16px
- **Font Size:** 10px
- **Padding:** 0 4px
- **Use Case:** Compact UIs, small icons
- **Max Content:** 1-2 characters

### Dot
- **Size:** 8×8px (circle)
- **No Content:** Visual indicator only
- **Use Case:** Online status, simple presence
- **Variants:** Colored dot (primary, error, success, etc.)

---

## Color Variants

### Default
- **Background:** Grey 400 (`#bdbdbd`)
- **Text:** Primary text (87% opacity)
- **Use Case:** Neutral information
- **Example:** Generic count, neutral badge

### Primary
- **Background:** Primary blue (`#4b3fff`)
- **Text:** White
- **Use Case:** Brand actions, primary notifications
- **Example:** New messages, updates

### Secondary
- **Background:** Secondary pink (`#dc004e`)
- **Text:** White
- **Use Case:** Secondary information
- **Example:** Alternative notifications

### Error
- **Background:** Error red (`#f44336`)
- **Text:** White
- **Use Case:** Errors, alerts, critical items
- **Example:** Failed operations, urgent notifications

### Warning
- **Background:** Warning orange (`#ff9800`)
- **Text:** Dark text (87% opacity)
- **Use Case:** Warnings, attention needed
- **Example:** Pending approvals, cautionary items

### Success
- **Background:** Success green (`#4caf50`)
- **Text:** White
- **Use Case:** Success states, completion
- **Example:** Completed tasks, successful actions

### Info
- **Background:** Info blue (`#2196f3`)
- **Text:** White
- **Use Case:** Informational items
- **Example:** Info updates, tips

---

## Anchor Positions

### Top-Right (Default)
- **Position:** Top-right corner
- **Transform:** translate(50%, -50%)
- **Use Case:** Most common, notifications on icons
- **Example:** Notification bell, message icon

### Top-Left
- **Position:** Top-left corner
- **Transform:** translate(-50%, -50%)
- **Use Case:** Alternative position
- **Example:** Status indicators on avatars

### Bottom-Right
- **Position:** Bottom-right corner
- **Transform:** translate(50%, 50%)
- **Use Case:** Status dots, online presence
- **Example:** Online/offline indicator on avatar

### Bottom-Left
- **Position:** Bottom-left corner
- **Transform:** translate(-50%, 50%)
- **Use Case:** Rare, alternative positioning
- **Example:** Custom indicators

---

## Badge Content Types

### Numeric Badge
- **Content:** Number (1-99+)
- **Max Display:** "99+" for numbers > 99
- **Format:** Plain number, no thousands separator
- **Use Case:** Counts, quantities
- **Example:** 5 unread messages

### Text Badge
- **Content:** Short text (1-3 characters)
- **Max Length:** 3 characters recommended
- **Format:** Uppercase preferred
- **Use Case:** Status codes, labels
- **Example:** "NEW", "VIP", "PRO"

### Dot Badge
- **Content:** None (visual indicator only)
- **Size:** 8×8px circle
- **Use Case:** Presence, status indicator
- **Example:** Online/offline, notification dot

### Icon Badge (Rare)
- **Content:** Small icon (12-16px)
- **Use Case:** Status with meaning
- **Example:** Check mark, warning icon

---

## Usage Guidelines

### When to Use
- Notification counts on icons
- Unread message indicators
- Cart item quantities
- Status indicators (online/offline)
- New content badges ("NEW")
- Task completion counters
- Alert indicators
- User status on avatars
- Premium feature badges

### When NOT to Use
- Long text labels (use Chip instead)
- Permanent labels (use label text)
- Decorative purposes only
- Critical information (needs more visibility)
- More than one badge per element
- Very large numbers (> 999, show differently)

### Best Practices

#### Do
- Keep content short (1-3 characters)
- Use "99+" for counts > 99
- Choose appropriate color (error for urgent)
- Use dot variant for simple presence
- Ensure high contrast (4.5:1 minimum)
- Place consistently (top-right standard)
- Use CDS color tokens
- Provide accessible labels for screen readers
- Update badge count in real-time
- Clear badge when count reaches 0

#### Don't
- Use long text (> 3 characters)
- Show exact count for very large numbers (999+)
- Use low-contrast colors
- Place multiple badges on same element
- Use badge for critical actions
- Forget aria-label for icon + badge
- Use tiny badges (< 16px)
- Mix badge styles inconsistently
- Clutter interface with too many badges
- Use badge color as only indicator

---

## Component Integration (CDS Base Components)

### With CDS IconButton
```typescript
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

<IconButton color="inherit">
  <Badge badgeContent={4} color="error">
    <NotificationsIcon />
  </Badge>
</IconButton>
```

### With CDS Avatar
```typescript
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
  color="success"
>
  <Avatar alt="User" src="/avatar.jpg" />
</Badge>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<button aria-label="4 notifications">
  <span class="badge" aria-hidden="true">4</span>
  <NotificationsIcon />
</button>
```

#### ARIA Attributes
```typescript
{
  // Badge itself
  "aria-hidden": "true",       // Badge is decorative

  // Parent element
  "aria-label": "4 notifications",  // Full context
  "aria-live": "polite",            // For dynamic updates
  "aria-atomic": "true",            // Read entire label
}
```

#### Screen Reader Support
- Badge content included in parent aria-label
- Dynamic updates announced ("5 notifications")
- Badge itself marked aria-hidden="true"
- Full context provided in accessible label

#### Color Contrast
- **Text on Color:** 4.5:1 minimum
- **Primary:** White on blue (> 4.5:1)
- **Error:** White on red (> 4.5:1)
- **Warning:** Dark text on orange (> 4.5:1)
- **Success:** White on green (> 4.5:1)

#### Visual Requirements
- Don't rely on color alone
- Badge shape indicates presence
- Number/text provides context
- Position indicates relationship

---

## Code Examples

### Basic Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BasicBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon />
    </Badge>
  );
}
```

### Color Variants
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function ColorBadges() {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon />
      </Badge>
    </Stack>
  );
}
```

### Dot Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function DotBadge() {
  return (
    <Badge variant="dot" color="error">
      <MailIcon />
    </Badge>
  );
}
```

### Max Count Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function MaxBadge() {
  return (
    <Badge badgeContent={100} max={99} color="error">
      <MailIcon />
    </Badge>
  );
}
```
// Displays "99+"

### Badge with Avatar
```tsx
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

export default function AvatarBadge() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      color="success"
    >
      <Avatar alt="User Name" src="/avatar.jpg" />
    </Badge>
  );
}
```

### Invisible Badge (Conditional)
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

export default function InvisibleBadge() {
  const [invisible, setInvisible] = useState(false);

  return (
    <Badge badgeContent={4} color="error" invisible={invisible}>
      <MailIcon />
    </Badge>
  );
}
```

### Custom Positioned Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function CustomPositionBadge() {
  return (
    <Badge
      badgeContent={4}
      color="primary"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MailIcon />
    </Badge>
  );
}
```

### Text Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function TextBadge() {
  return (
    <Badge badgeContent="NEW" color="secondary">
      <MailIcon />
    </Badge>
  );
}
```

### Animated Badge
```tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export default function AnimatedBadge() {
  return (
    <Badge
      badgeContent={4}
      color="error"
      sx={{
        '& .MuiBadge-badge': {
          animation: `${pulse} 1.5s ease-in-out infinite`,
        },
      }}
    >
      <MailIcon />
    </Badge>
  );
}
```

---

## Common Patterns

### Notification Icon with Badge
```tsx
<IconButton color="inherit">
  <Badge badgeContent={notifications.length} color="error">
    <NotificationsIcon />
  </Badge>
</IconButton>
```

### Shopping Cart with Count
```tsx
<IconButton>
  <Badge badgeContent={cartItems.length} color="primary">
    <ShoppingCartIcon />
  </Badge>
</IconButton>
```

### Online Status on Avatar
```tsx
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
  color={user.online ? 'success' : 'default'}
>
  <Avatar src={user.avatar} />
</Badge>
```

### Unread Messages
```tsx
<ListItemButton>
  <ListItemIcon>
    <Badge badgeContent={unreadCount} color="primary">
      <MailIcon />
    </Badge>
  </ListItemIcon>
  <ListItemText primary="Messages" />
</ListItemButton>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Standard or small size appropriate
- Ensure adequate visibility
- Dot badges work well (space-saving)
- Touch-friendly spacing around badged elements

### Tablet (600px - 960px)
- Standard size recommended
- All badge variants work well

### Desktop (> 960px)
- Standard size recommended
- Small size acceptable for compact UIs
- All positions and variants available

---

## CDS Token Integration

### Uses CDS Typography
```typescript
font-family: var(--typography/base-styles/caption/font-family);
font-size: var(--typography/base-styles/caption/font-size, 12px);
font-weight: var(--typography/base-styles/caption/font-weight, 500);
```

### Uses CDS Colors
```typescript
background: var(--color-palatte/primary/main, #4b3fff);
color: var(--color-palatte/primary/contrast-text, #ffffff);
background: var(--color-palatte/error/main, #f44336);
background: var(--color-palatte/success/main, #4caf50);
border-color: var(--color-palatte/background/paper, #ffffff);
```

### Uses CDS Spacing
```typescript
padding: 0 var(--spacing/1.5, 6px);
border-width: var(--spacing/0.5, 2px);
```

---

## Total Variant Combinations

**Sizes:** 3 (Standard 20px, Small 16px, Dot 8px)
**Colors:** 7 (Default, Primary, Secondary, Error, Warning, Success, Info)
**Positions:** 4 (Top-right, Top-left, Bottom-right, Bottom-left)
**Content Types:** 3 (Numeric, Text, Dot)

**Total Combinations:** 3 × 7 × 4 = **84+ configurations**

---

## Related Components
- **IconButton:** Common parent for badges (CDS component)
- **Avatar:** Often used with status badges (CDS component)
- **Chip:** Alternative for longer labels
- **Tooltip:** Can provide additional context
- **Icon:** Badge anchor element

---

## Figma Design Reference
- **Component:** Badge
- **Sizes:** 20px (standard), 16px (small), 8px (dot)
- **Based on CDS:** Uses all CDS color and typography tokens
- **Documentation:** [MUI Badge API](https://mui.com/api/badge)

---

## Migration Notes

### Integration with CDS
- **Sizes:** 20px standard, 16px small, 8px dot
- **Typography:** Uses CDS caption (12px, 500 weight)
- **Colors:** Uses all CDS semantic color tokens
- **Border:** 2px white border on colored backgrounds
- **Integration:** Works with CDS IconButton and Avatar

### Design Tokens Required
- **Color tokens:** All semantic colors (primary, error, success, etc.)
- **Typography tokens:** Caption (12px, 500 weight)
- **Spacing tokens:** 6px padding, 2px border
- **Sizing tokens:** 20px, 16px, 8px

---

## Performance Considerations

- Badge is lightweight (minimal DOM)
- No JavaScript required for static badges
- CSS transforms for positioning (GPU-accelerated)
- Avoid animating frequently (battery drain)
- Use visibility toggle instead of mount/unmount
- Cache badge count calculations

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS color system and typography
- 84+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
