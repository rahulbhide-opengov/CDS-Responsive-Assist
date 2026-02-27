# CDS Data Display Documentation

Complete documentation for all CDS data display components with design tokens, accessibility, and responsive patterns.

## Table of Contents

1. [Avatar](#avatar)
2. [Badge](#badge)
3. [List](#list)
4. [Table](#table)
5. [ImageList](#imagelist)
6. [Accordion](#accordion)

---

# Avatar Component Documentation

## Overview
The Avatar component displays user profile images, initials, or icons in a circular or rounded square container. It supports various sizes, colors, and content types, and is commonly used in user interfaces to represent people, accounts, or entities.

**Component Type:** Data Display Component
**Based on:** Material-UI (MUI) v6.1.0 Avatar, AvatarGroup
**Documentation:** [MUI Avatar API](https://mui.com/api/avatar) | [MUI AvatarGroup API](https://mui.com/api/avatar-group)

---

## Design Tokens

### Size Tokens
```typescript
// Uses CDS sizing system
'--component/avatar/size-small': '24px',
'--component/avatar/size-medium': '40px',     // Default
'--component/avatar/size-large': '56px',
'--component/avatar/size-xlarge': '96px',
```

### Typography Tokens (for Initials)
```typescript
// Small Avatar
'--component/avatar/small/font-family': 'var(--typography/base-styles/caption/font-family, "DM_Sans:Medium", sans-serif)',
'--component/avatar/small/font-size': '12px',
'--component/avatar/small/font-weight': '500',

// Medium Avatar (Default)
'--component/avatar/medium/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Medium", sans-serif)',
'--component/avatar/medium/font-size': '16px',
'--component/avatar/medium/font-weight': '500',

// Large Avatar
'--component/avatar/large/font-family': 'var(--typography/base-styles/h6/font-family, "DM_Sans:Medium", sans-serif)',
'--component/avatar/large/font-size': '24px',
'--component/avatar/large/font-weight': '500',

// XLarge Avatar
'--component/avatar/xlarge/font-family': 'var(--typography/base-styles/h4/font-family, "DM_Sans:Medium", sans-serif)',
'--component/avatar/xlarge/font-size': '40px',
'--component/avatar/xlarge/font-weight': '500',
```

### Color Tokens
```typescript
// Default Background Colors
'--component/avatar/default/bg-color': 'var(--color-palatte/grey/400, #bdbdbd)',
'--component/avatar/default/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',

// Primary
'--component/avatar/primary/bg-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/avatar/primary/text-color': 'var(--color-palatte/primary/contrast-text, #ffffff)',

// Secondary
'--component/avatar/secondary/bg-color': 'var(--color-palatte/secondary/main, #dc004e)',
'--component/avatar/secondary/text-color': 'var(--color-palatte/secondary/contrast-text, #ffffff)',

// Success
'--component/avatar/success/bg-color': 'var(--color-palatte/success/main, #4caf50)',
'--component/avatar/success/text-color': 'var(--color-palatte/success/contrast-text, #ffffff)',

// Error
'--component/avatar/error/bg-color': 'var(--color-palatte/error/main, #f44336)',
'--component/avatar/error/text-color': 'var(--color-palatte/error/contrast-text, #ffffff)',

// Warning
'--component/avatar/warning/bg-color': 'var(--color-palatte/warning/main, #ff9800)',
'--component/avatar/warning/text-color': 'var(--color-palatte/warning/contrast-text, rgba(0, 0, 0, 0.87))',

// Info
'--component/avatar/info/bg-color': 'var(--color-palatte/info/main, #2196f3)',
'--component/avatar/info/text-color': 'var(--color-palatte/info/contrast-text, #ffffff)',
```

### Shape Tokens
```typescript
'--component/avatar/border-radius-circular': '50%',
'--component/avatar/border-radius-rounded': 'var(--border-radius/medium, 8px)',
'--component/avatar/border-radius-square': '0px',
```

### Border Tokens (Optional)
```typescript
'--component/avatar/border-width': '2px',
'--component/avatar/border-color': 'var(--color-palatte/background/paper, #ffffff)',
```

### AvatarGroup Tokens
```typescript
'--component/avatar-group/spacing': '-8px',     // Overlap distance
'--component/avatar-group/max-display': '5',    // Max avatars before "+N"
```

---

## Component Anatomy

### Avatar Container
- **Shape:** Circular (default), rounded square, or square
- **Size:** 24px (small) to 96px (xlarge)
- **Background:** Colored or image
- **Border:** Optional 2px white border
- **Content:** Image, initials, or icon

### Content Types

#### Image Avatar
- **Content:** User photo or profile image
- **Format:** JPG, PNG, WebP
- **Fit:** Cover (fills container)
- **Fallback:** Initials or icon if image fails

#### Initials Avatar
- **Content:** 1-2 characters (user initials)
- **Format:** Uppercase letters
- **Font:** Medium weight (500)
- **Color:** White on colored background
- **Algorithm:** First letter of first and last name

#### Icon Avatar
- **Content:** Icon (person, group, etc.)
- **Size:** 60% of avatar size
- **Color:** Matches text color
- **Use Case:** Generic accounts, placeholders

---

## Size Variants

### Small (24px)
- **Diameter:** 24×24px
- **Font Size:** 12px (initials)
- **Icon Size:** 14px (60% of container)
- **Use Case:** Compact lists, dense UIs, inline mentions
- **Context:** Chat bubbles, small cards, tags
- **Touch Target:** Wrap in larger button if interactive

### Medium (40px - Default)
- **Diameter:** 40×40px
- **Font Size:** 16px (initials)
- **Icon Size:** 24px
- **Use Case:** Standard UI, lists, navigation
- **Context:** App bars, drawer headers, user menus
- **Touch Target:** Adequate for touch (near 48px with padding)

### Large (56px)
- **Diameter:** 56×56px
- **Font Size:** 24px (initials)
- **Icon Size:** 32px
- **Use Case:** Profile pages, prominent display
- **Context:** User profiles, account pages, cards
- **Touch Target:** Exceeds minimum

### XLarge (96px)
- **Diameter:** 96×96px
- **Font Size:** 40px (initials)
- **Icon Size:** 56px
- **Use Case:** Profile headers, about pages
- **Context:** Large profile displays, hero sections
- **Touch Target:** Well above minimum

---

## Shape Variants

### Circular (Default)
- **Border Radius:** 50%
- **Shape:** Perfect circle
- **Use Case:** User profiles, personal accounts
- **Common:** Most widely used
- **Visual:** Friendly, approachable

### Rounded
- **Border Radius:** 8px (CDS medium)
- **Shape:** Rounded square
- **Use Case:** Brand logos, company accounts, groups
- **Common:** Business contexts
- **Visual:** Professional, structured

### Square
- **Border Radius:** 0px
- **Shape:** Perfect square
- **Use Case:** Rare, specific design requirements
- **Common:** Uncommon
- **Visual:** Sharp, formal

---

## Color Variants

### Default (Grey)
- **Background:** Grey 400 (`#bdbdbd`)
- **Text:** Primary text (87% opacity)
- **Use Case:** Neutral, unknown users
- **Example:** Generic placeholders

### Primary
- **Background:** Primary blue (`#4b3fff`)
- **Text:** White
- **Use Case:** Current user, highlighted accounts
- **Example:** Signed-in user

### Secondary
- **Background:** Secondary pink (`#dc004e`)
- **Text:** White
- **Use Case:** Alternative emphasis
- **Example:** Admin accounts, special users

### Success
- **Background:** Success green (`#4caf50`)
- **Text:** White
- **Use Case:** Verified accounts, successful states
- **Example:** Verified users

### Error
- **Background:** Error red (`#f44336`)
- **Text:** White
- **Use Case:** Blocked users, errors
- **Example:** Suspended accounts

### Warning
- **Background:** Warning orange (`#ff9800`)
- **Text:** Dark text (87% opacity)
- **Use Case:** Warnings, pending states
- **Example:** Pending verification

### Info
- **Background:** Info blue (`#2196f3`)
- **Text:** White
- **Use Case:** Information accounts, bots
- **Example:** System notifications

---

## Avatar Group

### Stacked Avatars
- **Layout:** Overlapping circles
- **Overlap:** -8px (CDS spacing/-2)
- **Max Display:** 5 avatars (configurable)
- **Overflow:** "+N" indicator for remaining
- **Use Case:** Multiple users, collaborators
- **Z-Index:** First avatar on top, descending

### +N Indicator
- **Content:** "+{count}" text
- **Style:** Same as avatar (circular, colored)
- **Background:** Grey or primary
- **Font:** Same size as avatar text
- **Use Case:** Shows overflow count

---

## Usage Guidelines

### When to Use
- User profile representations
- Account indicators
- Author attribution
- User lists and directories
- Comment sections
- Chat interfaces
- Assignee indicators
- Collaborator lists (AvatarGroup)
- Navigation menus (user menu)

### When NOT to Use
- Product images (use image components)
- Large hero images (use img element)
- Decorative images
- Icons without user context (use Icon component)
- Content images in articles

### Best Practices

#### Do
- Use circular shape for people
- Show user initials if no image
- Use 2 characters max for initials
- Provide alt text for images
- Use consistent sizes within context
- Use AvatarGroup for multiple users
- Show online status with Badge
- Make interactive avatars clickable
- Use appropriate color for context
- Provide fallback content

#### Don't
- Use low-quality images (pixelated)
- Show more than 2 initials
- Use tiny avatars (< 24px)
- Forget alt text for accessibility
- Mix shapes inconsistently
- Show too many avatars (use "+N")
- Use color as only indicator
- Make avatar too large (> 96px standard UI)
- Use square for people (use circular)
- Forget hover states for interactive avatars

---

## Component Integration (CDS Base Components)

### With CDS Badge
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

### With CDS IconButton
```typescript
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

<IconButton>
  <Avatar alt="User" src="/avatar.jpg" />
</IconButton>
```

### In CDS List
```typescript
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

<List>
  <ListItem>
    <ListItemAvatar>
      <Avatar alt="User" src="/avatar.jpg" />
    </ListItemAvatar>
    <ListItemText primary="User Name" />
  </ListItem>
</List>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<img
  src="/avatar.jpg"
  alt="John Doe profile picture"
  class="avatar"
/>

<!-- Or with button wrapper -->
<button aria-label="User menu">
  <img src="/avatar.jpg" alt="John Doe" />
</button>
```

#### ARIA Attributes
```typescript
{
  // Image avatar
  alt: "User name profile picture",
  role: "img",

  // Interactive avatar
  "aria-label": "Open user menu",
  role: "button",

  // Decorative avatar (when redundant)
  alt: "",
  "aria-hidden": "true",
}
```

#### Screen Reader Support
- Provide descriptive alt text
- Include context ("profile picture")
- For interactive avatars, describe action
- For decorative use, use empty alt
- Avatar group reads count

#### Color Contrast
- **Initials:** 4.5:1 minimum (white on colored background)
- **Icons:** 3:1 minimum contrast
- **Borders:** 3:1 minimum if used for meaning

#### Touch Targets
- **Small (24px):** Wrap in button with 48px target
- **Medium (40px):** Near minimum, add padding if interactive
- **Large (56px):** Exceeds minimum
- **XLarge (96px):** Well above minimum

---

## Code Examples

### Basic Avatar
```tsx
import Avatar from '@mui/material/Avatar';

export default function BasicAvatar() {
  return (
    <Avatar alt="User Name" src="/avatar.jpg" />
  );
}
```

### Initials Avatar
```tsx
import Avatar from '@mui/material/Avatar';

export default function InitialsAvatar() {
  return (
    <Avatar>JD</Avatar>
  );
}
```

### Icon Avatar
```tsx
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default function IconAvatar() {
  return (
    <Avatar>
      <PersonIcon />
    </Avatar>
  );
}
```

### Size Variants
```tsx
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Small" src="/avatar.jpg" sx={{ width: 24, height: 24 }} />
      <Avatar alt="Medium" src="/avatar.jpg" sx={{ width: 40, height: 40 }} />
      <Avatar alt="Large" src="/avatar.jpg" sx={{ width: 56, height: 56 }} />
      <Avatar alt="XLarge" src="/avatar.jpg" sx={{ width: 96, height: 96 }} />
    </Stack>
  );
}
```

### Colored Avatars
```tsx
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ColoredAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>AB</Avatar>
      <Avatar sx={{ bgcolor: 'success.main' }}>CD</Avatar>
      <Avatar sx={{ bgcolor: 'error.main' }}>EF</Avatar>
    </Stack>
  );
}
```

### Shape Variants
```tsx
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ShapeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar variant="circular" alt="Circular" src="/avatar.jpg" />
      <Avatar variant="rounded" alt="Rounded" src="/logo.jpg" />
      <Avatar variant="square" alt="Square" src="/brand.jpg" />
    </Stack>
  );
}
```

### Avatar with Badge
```tsx
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

export default function AvatarWithBadge() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      color="success"
    >
      <Avatar alt="User" src="/avatar.jpg" />
    </Badge>
  );
}
```

### Avatar Group
```tsx
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="User 1" src="/avatar1.jpg" />
      <Avatar alt="User 2" src="/avatar2.jpg" />
      <Avatar alt="User 3" src="/avatar3.jpg" />
      <Avatar alt="User 4" src="/avatar4.jpg" />
      <Avatar alt="User 5" src="/avatar5.jpg" />
    </AvatarGroup>
  );
}
```

### Fallback Avatar
```tsx
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default function FallbackAvatar() {
  return (
    <Avatar
      alt="User Name"
      src="/broken-image.jpg"
    >
      <PersonIcon />
    </Avatar>
  );
}
```

### Clickable Avatar
```tsx
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export default function ClickableAvatar() {
  const handleClick = () => {
    console.log('Avatar clicked');
  };

  return (
    <IconButton onClick={handleClick}>
      <Avatar alt="User" src="/avatar.jpg" />
    </IconButton>
  );
}
```

### Total Avatar Group
```tsx
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function TotalAvatarGroup() {
  return (
    <AvatarGroup total={24} max={3}>
      <Avatar alt="User 1" src="/avatar1.jpg" />
      <Avatar alt="User 2" src="/avatar2.jpg" />
      <Avatar alt="User 3" src="/avatar3.jpg" />
    </AvatarGroup>
  );
}
// Displays: [Avatar1] [Avatar2] [Avatar3] [+21]
```

---

## Common Patterns

### User Profile Header
```tsx
<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
  <Avatar alt="User Name" src="/avatar.jpg" sx={{ width: 56, height: 56 }} />
  <Box>
    <Typography variant="h6">John Doe</Typography>
    <Typography variant="body2" color="text.secondary">
      john@example.com
    </Typography>
  </Box>
</Box>
```

### Comment Author
```tsx
<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
  <Avatar alt="Author" src="/avatar.jpg" />
  <Box>
    <Typography variant="subtitle2">Jane Smith</Typography>
    <Typography variant="body2">This is a comment...</Typography>
  </Box>
</Box>
```

### User List Item
```tsx
<ListItem>
  <ListItemAvatar>
    <Avatar alt="User" src="/avatar.jpg" />
  </ListItemAvatar>
  <ListItemText primary="User Name" secondary="user@example.com" />
</ListItem>
```

### Online Status Indicator
```tsx
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
  color={isOnline ? 'success' : 'default'}
>
  <Avatar alt="User" src="/avatar.jpg" />
</Badge>
```

### Collaborators List
```tsx
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <Typography variant="body2">Collaborators:</Typography>
  <AvatarGroup max={3}>
    {collaborators.map(user => (
      <Avatar key={user.id} alt={user.name} src={user.avatar} />
    ))}
  </AvatarGroup>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use small (24px) or medium (40px) sizes
- Avoid xlarge avatars (takes too much space)
- Ensure touch targets (48px minimum)
- AvatarGroup with max={3} recommended

### Tablet (600px - 960px)
- Medium (40px) or large (56px) appropriate
- Standard avatar group display
- All variants work well

### Desktop (> 960px)
- Any size appropriate
- Large (56px) for profiles
- XLarge (96px) for hero sections
- Avatar groups with more members visible

---

## CDS Token Integration

### Uses CDS Sizing
```typescript
width: var(--sizing/avatar/small, 24px);
width: var(--sizing/avatar/medium, 40px);
width: var(--sizing/avatar/large, 56px);
width: var(--sizing/avatar/xlarge, 96px);
```

### Uses CDS Colors
```typescript
background: var(--color-palatte/primary/main, #4b3fff);
color: var(--color-palatte/primary/contrast-text, #ffffff);
background: var(--color-palatte/grey/400, #bdbdbd);
border-color: var(--color-palatte/background/paper, #ffffff);
```

### Uses CDS Typography
```typescript
font-family: var(--typography/base-styles/body2/font-family);
font-size: var(--typography/base-styles/body2/font-size, 16px);
font-weight: var(--typography/base-styles/body2/font-weight, 500);
```

### Uses CDS Border Radius
```typescript
border-radius: var(--border-radius/medium, 8px);  // Rounded variant
border-radius: 50%;                                 // Circular
```

### Uses CDS Spacing
```typescript
margin: var(--spacing/-2, -8px);  // Avatar group overlap
border-width: var(--spacing/0.5, 2px);
```

---

## Total Variant Combinations

**Sizes:** 4 (Small 24px, Medium 40px, Large 56px, XLarge 96px)
**Shapes:** 3 (Circular, Rounded, Square)
**Colors:** 7 (Default, Primary, Secondary, Success, Error, Warning, Info)
**Content Types:** 3 (Image, Initials, Icon)

**Total Combinations:** 4 × 3 × 7 × 3 = **252+ configurations**

---

## Related Components
- **Badge:** Status indicators on avatars (CDS component)
- **IconButton:** Wrapper for interactive avatars (CDS component)
- **List:** Contains avatar lists (CDS component)
- **Chip:** Alternative for compact user display
- **Card:** Contains user profiles with avatars

---

## Figma Design Reference
- **Component:** Avatar, AvatarGroup
- **Sizes:** 24px, 40px, 56px, 96px
- **Based on CDS:** Uses all CDS color and typography tokens
- **Documentation:** [MUI Avatar API](https://mui.com/api/avatar)

---

## Migration Notes

### Integration with CDS
- **Sizes:** 24px, 40px, 56px, 96px (CDS standard sizes)
- **Colors:** Uses all CDS semantic color tokens
- **Typography:** Uses CDS caption, body2, h6, h4 for initials
- **Shapes:** Circular (50%), rounded (8px), square (0px)
- **Border:** 2px white border using CDS spacing
- **Integration:** Works with CDS Badge, IconButton, List

### Design Tokens Required
- **Color tokens:** All semantic colors, grey scale
- **Typography tokens:** Caption, Body2, H6, H4
- **Sizing tokens:** 24px, 40px, 56px, 96px
- **Border radius tokens:** 8px (medium)
- **Spacing tokens:** 8px overlap, 2px border

---

## Performance Considerations

- Optimize avatar images (WebP, proper sizing)
- Lazy load avatar images in long lists
- Use React.memo for static avatars
- Cache initials calculation
- Virtualize long avatar lists
- Use CDN for avatar images
- Implement image loading states
- Consider placeholder images

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS color, typography, and sizing systems
- 252+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- AvatarGroup component included


---


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


---


# List Component Documentation

## Overview
The List component displays a vertical set of items that can include text, icons, avatars, actions, and interactive elements. Lists are commonly used for navigation, menus, content organization, and displaying collections of related information.

**Component Type:** Container / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 List, ListItem, ListItemButton, ListItemText, ListItemIcon, ListItemAvatar
**Documentation:** [MUI List API](https://mui.com/api/list)

---

## Component Anatomy

### Structure
```
<List>
  <ListItem>
    <ListItemIcon>     // Optional leading icon
    <ListItemAvatar>   // Optional avatar
    <ListItemText>     // Primary & secondary text
    <ListItemSecondaryAction> // Optional trailing action
  </ListItem>
</List>
```

### Elements
1. **List Container** - Wraps all list items with consistent spacing
2. **ListItem** - Individual row in the list
3. **ListItemButton** - Interactive list item (clickable)
4. **ListItemIcon** - Leading icon (24×24px)
5. **ListItemAvatar** - Leading avatar (40px diameter)
6. **ListItemText** - Primary and secondary text content
7. **ListItemSecondaryAction** - Trailing action (icon button, switch, checkbox)
8. **Divider** - Visual separator between items

---

## Design Tokens

### Spacing Tokens
```typescript
'--component/list/padding-y': '8px',
'--component/list/item-padding': '16px',
'--component/list/item-padding-dense': '8px',
'--component/list/item-min-height': '48px',
'--component/list/item-min-height-dense': '40px',
'--component/list/icon-margin-right': '16px',
'--component/list/avatar-margin-right': '16px',
'--component/list/text-gap': '4px',
```

### Typography Tokens
```typescript
'--component/list/primary-font-size': '16px',
'--component/list/primary-line-height': '24px',
'--component/list/primary-font-weight': '400',
'--component/list/secondary-font-size': '14px',
'--component/list/secondary-line-height': '20px',
'--component/list/secondary-font-weight': '400',
```

### Color Tokens
```typescript
'--component/list/bg-color': 'transparent',
'--component/list/item-bg-hover': 'rgba(0, 0, 0, 0.04)',
'--component/list/item-bg-selected': 'rgba(75, 63, 255, 0.08)',
'--component/list/primary-text-color': 'rgba(0, 0, 0, 0.87)',
'--component/list/secondary-text-color': 'rgba(0, 0, 0, 0.6)',
'--component/list/icon-color': 'rgba(0, 0, 0, 0.54)',
'--component/list/disabled-text-color': 'rgba(0, 0, 0, 0.38)',
'--component/list/divider-color': 'rgba(0, 0, 0, 0.12)',
```

### Icon & Avatar Tokens
```typescript
'--component/list/icon-size': '24px',
'--component/list/avatar-size': '40px',
'--component/list/avatar-size-small': '32px',
'--component/list/avatar-size-large': '56px',
```

---

## ListItem Variants

### 1. Basic List Item
- **Structure:** Text only
- **Height:** 48px minimum
- **Use Case:** Simple lists, menus, settings

### 2. List Item with Icon
- **Structure:** Icon + Text
- **Icon Size:** 24×24px
- **Icon Position:** 16px from left
- **Use Case:** Navigation menus, feature lists

### 3. List Item with Avatar
- **Structure:** Avatar + Text
- **Avatar Size:** 40px diameter (default)
- **Avatar Position:** 16px from left
- **Use Case:** Contact lists, user lists, social feeds

### 4. Two-Line List Item
- **Structure:** Primary text + Secondary text
- **Height:** 64px minimum
- **Secondary Text:** 14px, 60% opacity
- **Use Case:** Detailed lists, message previews

### 5. Three-Line List Item
- **Structure:** Primary text + Multi-line secondary
- **Height:** 88px minimum
- **Secondary Text:** 2 lines max, ellipsis overflow
- **Use Case:** Extended descriptions, email previews

### 6. List Item with Actions
- **Structure:** Content + Trailing actions
- **Actions:** IconButton, Switch, Checkbox, Menu
- **Use Case:** Settings, selectable lists, contextual actions

---

## Density Variants

### Standard (Default)
- **Item Min Height:** 48px
- **Padding:** 16px
- **Icon/Avatar Margin:** 16px
- **Use Case:** Standard desktop interfaces

### Dense
- **Item Min Height:** 40px
- **Padding:** 8px
- **Icon/Avatar Margin:** 12px
- **Use Case:** Data-heavy interfaces, compact layouts

### Comfortable
- **Item Min Height:** 56px
- **Padding:** 20px
- **Icon/Avatar Margin:** 20px
- **Use Case:** Accessibility-focused, touch interfaces

---

## States

### 1. Default
- **Background:** Transparent
- **Text:** Primary color
- **Cursor:** Default (or pointer if interactive)

### 2. Hover
- **Background:** `rgba(0, 0, 0, 0.04)`
- **Text:** Primary color
- **Cursor:** pointer
- **Transition:** 150ms

### 3. Focused
- **Background:** Transparent
- **Outline:** 2px focus ring
- **Text:** Primary color
- **Keyboard:** Accessible

### 4. Selected
- **Background:** `rgba(75, 63, 255, 0.08)`
- **Text:** Primary dark `#19009b`
- **Icon:** Primary dark
- **Visual:** Clear selection indicator

### 5. Disabled
- **Background:** Transparent
- **Text:** `rgba(0, 0, 0, 0.38)`
- **Icon:** Disabled opacity
- **Cursor:** not-allowed

---

## Interactive Variants

### ListItem (Static)
- No hover or click interactions
- Used for display-only content
- No visual feedback

### ListItemButton (Interactive)
- Full-row clickable area
- Hover and focus states
- Ripple effect on click
- Used for navigation, selection

---

## Divider Options

### Full-Width Divider
- Spans entire list width
- 1px solid, 12% opacity
- Separates sections

### Inset Divider
- Indented to align with text
- Typically 72px from left (with icon/avatar)
- Separates related items

### No Divider
- Clean, minimal appearance
- Relies on spacing for separation

---

## List Subheader

### Purpose
Groups related list items with a label

### Styling
- **Font Size:** 14px
- **Font Weight:** 500
- **Color:** `rgba(0, 0, 0, 0.87)`
- **Padding:** 16px
- **Background:** Transparent or subtle background
- **Sticky:** Can be sticky on scroll

---

## Usage Guidelines

### When to Use
- Navigation menus
- Settings panels
- Contact/user lists
- Message/email lists
- File/folder listings
- Selection lists
- Action menus
- Search results

### When NOT to Use
- Tabular data (use DataGrid/Table)
- Large datasets requiring virtualization (use VirtualList)
- Horizontal layouts (use different component)
- Card-based layouts (use Grid + Card)
- Complex multi-column data (use Table)

### Best Practices

#### Do
- Keep list items consistent in height and structure
- Provide visual feedback for interactive items
- Use dividers to group related items
- Include icons/avatars for visual scanning
- Limit secondary text to 2-3 lines
- Use subheaders for long lists
- Ensure 48px minimum touch targets
- Provide keyboard navigation

#### Don't
- Mix different item structures inconsistently
- Use lists for complex data tables
- Exceed 3 lines per item
- Place too many actions per item
- Make entire lists clickable without indicators
- Use lists for fewer than 3 items
- Forget disabled states

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus on list items
- **Arrow Up/Down:** Navigate between items
- **Enter/Space:** Activate focused item
- **Home/End:** Jump to first/last item

#### Screen Readers
```html
<List aria-label="Main navigation">
  <ListItemButton
    role="button"
    aria-label="Dashboard"
  >
    <ListItemText primary="Dashboard" />
  </ListItemButton>
</List>
```

#### ARIA Attributes
```typescript
{
  role: "list",              // For List container
  role: "listitem",          // For ListItem
  role: "button",            // For ListItemButton
  "aria-label": string,      // List description
  "aria-selected": boolean,  // Selection state
  "aria-disabled": boolean,  // Disabled state
  "aria-current": "page",    // Current navigation item
}
```

#### Focus Management
- Clear focus indicators on all interactive items
- Focus visible on keyboard navigation
- Focus ring minimum 3:1 contrast
- Logical tab order

#### Color Contrast
- **Primary Text:** 4.5:1 minimum
- **Secondary Text:** 4.5:1 minimum
- **Icons:** 3:1 minimum
- **Selected State:** Sufficient contrast
- **Disabled Text:** Exempt from requirements

#### Touch Targets
- **Minimum:** 48×48px for all interactive items
- **Spacing:** Adequate spacing between items
- **Dense Mode:** Desktop only (40px minimum)

---

## Code Examples

### Basic List
```tsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  );
}
```

### Interactive List with Icons
```tsx
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function IconList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <List>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={() => setSelectedIndex(0)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={() => setSelectedIndex(1)}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
    </List>
  );
}
```

### List with Avatars
```tsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export default function AvatarList() {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>JD</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary="Software Engineer"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>JS</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Jane Smith"
          secondary="Product Manager"
        />
      </ListItem>
    </List>
  );
}
```

### Two-Line List
```tsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function TwoLineList() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Brunch this weekend?"
          secondary="Ali Connors — I'll be in your neighborhood..."
        />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText
          primary="Summer BBQ"
          secondary="to Scott, Alex, Jennifer — Wish I could come..."
        />
      </ListItem>
    </List>
  );
}
```

### List with Secondary Actions
```tsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActionList() {
  return (
    <List>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Item with action" />
      </ListItem>
    </List>
  );
}
```

### Dense List
```tsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function DenseList() {
  return (
    <List dense>
      <ListItem>
        <ListItemText primary="Dense item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dense item 2" />
      </ListItem>
    </List>
  );
}
```

### List with Subheader
```tsx
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function SubheaderList() {
  return (
    <List
      subheader={
        <ListSubheader component="div">
          Settings
        </ListSubheader>
      }
    >
      <ListItem>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Account" />
      </ListItem>
    </List>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Full-width list items
- Dense mode not recommended
- Larger touch targets (48px minimum)
- Single column layout
- Consider bottom sheet for long lists

### Tablet (600px - 960px)
- Standard or dense mode
- Can use two-column layout for short items
- 48px touch targets maintained

### Desktop (> 960px)
- Standard or dense mode based on content
- Multi-column layouts possible
- Hover states fully functional
- Keyboard navigation essential

---

## Total Variant Combinations

**Base Variants:** 6 item types (basic, icon, avatar, 2-line, 3-line, actions)
**Density:** 3 options (standard, dense, comfortable)
**States:** 5 (default, hover, focused, selected, disabled)
**Total:** 6 × 3 × 5 = **90+ base combinations**

---

## Related Components
- **Menu:** Temporary selection lists
- **Select:** Dropdown selection
- **DataGrid:** Tabular data display
- **Accordion:** Collapsible content sections
- **Card:** Individual content containers

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11033:145389
- **Component:** `<List>`, `<ListItem>`, `<ListItemButton>`, etc.
- **Documentation:** [MUI List API](https://mui.com/api/list)

---

## Migration Notes

### From Previous Design System
- Item heights standardized (48px/40px/56px)
- Hover state background updated to 4% opacity
- Selected state uses primary color background
- Icon sizes standardized to 24px
- Avatar sizes standardized (32px/40px/56px)
- Padding aligned with 4px/8px grid
- Focus rings now use primary color

### Design Tokens Required
- All color tokens (text, background, action)
- Typography tokens (body1, body2)
- Spacing tokens (4px, 8px, 12px, 16px, 20px)
- Icon and avatar size tokens

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 90+ variant combinations documented
- Full accessibility compliance


---


# Table Component Documentation

## Overview
The Table component displays data in rows and columns with support for sorting, selection, pagination, fixed headers, pinned columns, and hierarchical (indented) data. It's designed for structured data presentation with rich interactive features.

**Component Type:** Data Display / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination
**Documentation:** [MUI Table API](https://mui.com/api/table)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/table/border-color': 'rgba(224, 224, 224, 1)',
'--component/table/border-width': '1px',
'--component/table/cell-padding': '16px',
'--component/table/cell-height': '52px',
'--component/table/header-height': '56px',
'--component/table/dense-cell-height': '40px',
```

### Header Tokens
```typescript
'--component/table/header/bg-color': '#fafafa',
'--component/table/header/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/header/font-size': '14px',
'--component/table/header/font-weight': '500',
'--component/table/header/line-height': '24px',
```

### Cell Tokens
```typescript
'--component/table/cell/bg-color': '#ffffff',
'--component/table/cell/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/cell/font-size': '14px',
'--component/table/cell/font-weight': '400',
'--component/table/cell/line-height': '24px',
```

### Row State Tokens
```typescript
// Default
'--component/table/row/bg-color-default': '#ffffff',

// Hover
'--component/table/row/bg-color-hover': 'rgba(0, 0, 0, 0.04)',

// Selected
'--component/table/row/bg-color-selected': 'rgba(75, 63, 255, 0.08)',

// Striped (Alternate rows)
'--component/table/row/bg-color-striped': 'rgba(0, 0, 0, 0.02)',
```

### Indent Tokens (Hierarchical)
```typescript
'--component/table/indent-level-0': '0px',
'--component/table/indent-level-1': '24px',
'--component/table/indent-level-2': '48px',
'--component/table/indent-level-3': '72px',
```

### Pagination Tokens
```typescript
'--component/table/pagination/height': '52px',
'--component/table/pagination/bg-color': '#ffffff',
'--component/table/pagination/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/pagination/font-size': '14px',
```

---

## Table Types

### Basic Table
- **Structure:** Simple rows and columns
- **Features:** Header row, data rows, borders
- **Use Case:** Simple data display, read-only data
- **Interaction:** None (display only)

### Advanced Table
- **Structure:** Header + data rows with additional features
- **Features:** Sorting, selection (checkboxes), hover states
- **Use Case:** Interactive data, user selections, sortable data
- **Interaction:** Click to sort, select rows

### Pinned Columns Table
- **Structure:** Fixed left/right columns with scrollable middle
- **Features:** Horizontal scroll, sticky columns
- **Use Case:** Wide tables, important columns always visible
- **Interaction:** Horizontal scroll, column pinning

### Indented Table
- **Structure:** Hierarchical data with visual indentation
- **Features:** Parent-child relationships, expandable rows
- **Use Case:** Tree data, nested categories, file systems
- **Interaction:** Expand/collapse, navigate hierarchy
- **Indent Levels:** 0-3 (0px, 24px, 48px, 72px)

---

## Component Anatomy

### TableContainer
- **Purpose:** Wrapper for horizontal scroll
- **Elevation:** Optional Paper elevation
- **Max Height:** Can be set for vertical scroll

### TableHead
- **Purpose:** Contains header row
- **Background:** Light gray (`#fafafa`)
- **Sticky:** Can be fixed on scroll

### TableBody
- **Purpose:** Contains data rows
- **Background:** White
- **Scroll:** Vertical scroll if max height set

### TableRow
- **Purpose:** Single row of data
- **Height:** 52px (default), 40px (dense)
- **States:** Default, Hover, Selected

### TableCell
- **Purpose:** Individual cell content
- **Padding:** 16px
- **Alignment:** Left (default), Right, Center
- **Width:** Auto or fixed

### TablePagination
- **Purpose:** Page navigation controls
- **Height:** 52px
- **Position:** Bottom of table
- **Controls:** Rows per page, page navigation

---

## Cell Alignment

### Left Aligned (Default)
- **Text Alignment:** Left
- **Use Case:** Text content, names, descriptions
- **Padding:** 16px left/right

### Right Aligned
- **Text Alignment:** Right
- **Use Case:** Numbers, currency, quantities
- **Padding:** 16px left/right

### Center Aligned
- **Text Alignment:** Center
- **Use Case:** Status indicators, icons, badges
- **Padding:** 16px left/right

---

## Row States

### Default
- **Background:** White
- **Text:** Primary text color
- **Border:** Bottom border (1px, light gray)
- **Cursor:** Default

### Hover
- **Background:** `rgba(0, 0, 0, 0.04)` (light gray)
- **Text:** Primary text color
- **Border:** Bottom border maintained
- **Cursor:** pointer (if clickable)
- **Transition:** 150ms

### Selected
- **Background:** `rgba(75, 63, 255, 0.08)` (light primary)
- **Text:** Primary dark color
- **Border:** Bottom border maintained
- **Visual:** Clear selection indicator
- **Checkbox:** Checked state

---

## Indentation Levels

### Level 0 (No Indent)
- **Padding Left:** 16px (standard)
- **Use Case:** Top-level items, root nodes

### Level 1
- **Padding Left:** 40px (16px + 24px indent)
- **Use Case:** First-level children
- **Visual:** Slightly indented

### Level 2
- **Padding Left:** 64px (16px + 48px indent)
- **Use Case:** Second-level children
- **Visual:** Moderately indented

### Level 3
- **Padding Left:** 88px (16px + 72px indent)
- **Use Case:** Third-level children
- **Visual:** Deeply indented
- **Note:** Maximum recommended depth

---

## Usage Guidelines

### When to Use
- Displaying structured data in rows/columns
- Comparing data across multiple attributes
- Sortable datasets
- Selectable records
- Data requiring pagination
- Hierarchical data structures
- Financial data, reports
- Product catalogs

### When NOT to Use
- Small datasets (< 5 rows) - use List instead
- Unstructured content - use Card or List
- Mobile-first designs with narrow viewports
- Single-column data - use List
- Real-time streaming data - consider virtual scrolling

### Best Practices

#### Do
- Use header row for column labels
- Align numbers to the right
- Align text to the left
- Use pagination for large datasets (> 50 rows)
- Provide sorting when helpful
- Use checkboxes for multi-select
- Show hover state for clickable rows
- Use fixed headers for tall tables
- Pin important columns when scrolling horizontally
- Limit indent levels to 3 maximum

#### Don't
- Use tables for layout purposes
- Forget responsive behavior
- Make columns too narrow (< 100px)
- Overcrowd with too many columns (> 10)
- Use tables on small mobile screens
- Mix alignment styles inconsistently
- Forget pagination for large datasets
- Hide important columns off-screen

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic Table Structure
```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

#### ARIA Attributes
```typescript
{
  role: "table",               // For table
  role: "rowgroup",            // For thead/tbody
  role: "row",                 // For tr
  role: "columnheader",        // For th
  role: "cell",                // For td
  "aria-label": string,        // Table description
  "aria-sort": "ascending" | "descending" | "none",
  "aria-selected": boolean,    // Selected rows
  "aria-rowindex": number,     // Row index
  "aria-colindex": number,     // Column index
}
```

#### Keyboard Navigation
- **Tab:** Navigate through interactive elements
- **Arrow Keys:** Navigate cells (if implemented)
- **Space:** Select row (if selectable)
- **Enter:** Activate row action

#### Sortable Headers
```html
<th scope="col" aria-sort="ascending">
  <button>Name</button>
</th>
```

#### Color Contrast
- **Header Text:** 4.5:1 minimum against background
- **Cell Text:** 4.5:1 minimum against background
- **Selected Row:** Sufficient contrast maintained
- **Hover State:** 3:1 minimum change

#### Screen Reader Support
- Use proper table semantics (thead, tbody, th, td)
- Provide scope="col" or scope="row" on headers
- Announce sort direction changes
- Announce selection changes
- Provide table caption or aria-label

---

## Code Examples

### Basic Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const rows = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

### Table with Selection
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

export default function SelectableTable() {
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            selected={selected.includes(row.id)}
            onClick={() => handleSelect(row.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={selected.includes(row.id)} />
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Table with Pagination
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

export default function PaginatedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
      />
    </Paper>
  );
}
```

### Indented Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Row {
  id: number;
  name: string;
  level: number;
}

export default function IndentedTable() {
  const rows: Row[] = [
    { id: 1, name: 'Parent', level: 0 },
    { id: 2, name: 'Child 1', level: 1 },
    { id: 3, name: 'Child 2', level: 1 },
    { id: 4, name: 'Grandchild', level: 2 },
  ];

  return (
    <Table>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell sx={{ pl: 2 + row.level * 3 }}>
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Sticky Header Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StickyHeaderTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Consider alternative layouts (cards, lists)
- Horizontal scroll for wide tables
- Reduce column count
- Stack data vertically if possible
- Use accordion pattern for details
- Pagination essential

### Tablet (600px - 960px)
- Horizontal scroll acceptable
- 4-6 columns recommended
- Standard row heights
- Pagination recommended

### Desktop (> 960px)
- Full table display
- Any number of columns
- Hover states functional
- Sorting and filtering
- Advanced features available

---

## Total Variant Combinations

**Table Types:** 4 (Basic, Advanced, Pinned Columns, Indented)
**Row States:** 3 (Default, Hover, Selected)
**Alignments:** 3 (Left, Right, Center)
**Indent Levels:** 4 (0, 1, 2, 3)
**With Pagination:** Yes/No

**Total Base Combinations:** 100+ when considering all permutations

---

## Related Components
- **List:** Alternative for simple data
- **DataGrid:** Advanced table with virtualization
- **Card:** Alternative for mobile
- **Paper:** Container for table

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 18748:455621
- **Component:** `<Table>`, `<TableCell>`, `<TablePagination>`
- **Documentation:** [MUI Table API](https://mui.com/api/table)

---

## Migration Notes

### From Previous Design System
- Cell heights standardized (52px default, 40px dense)
- Header background updated to #fafafa
- Border color standardized to rgba(224, 224, 224, 1)
- Hover state uses 4% opacity
- Selected state uses primary color at 8% opacity
- Padding unified to 16px
- Indent levels standardized (24px increments)
- Font sizes aligned to 14px

### Design Tokens Required
- All color tokens (background, text, borders, states)
- Typography tokens (14px, 400/500 weight)
- Spacing tokens (16px padding, 24px indent)
- Height tokens (52px, 56px)
- Border tokens (1px, light gray)

---

## Performance Considerations

- Use pagination for large datasets (> 100 rows)
- Consider virtualization for very large tables (> 1000 rows)
- Minimize re-renders with React.memo
- Use key prop correctly on TableRow
- Avoid inline functions in render
- Consider server-side pagination for huge datasets
- Use debounce for search/filter inputs

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 100+ variant combinations documented
- Full accessibility compliance
- All 4 table types included


---


# Image List Component Documentation

## Overview
The Image List component displays a collection of images in an organized grid layout with support for multiple variants including masonry, quilted, and woven patterns. It's optimized for displaying galleries, photo collections, and product catalogs with consistent spacing and responsive behavior.

**Component Type:** Data Display / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 ImageList
**Documentation:** [MUI ImageList API](https://mui.com/api/image-list)

---

## Design Tokens

### Layout Tokens
```typescript
// Uses CDS spacing system
'--component/image-list/gap': 'var(--spacing/2, 8px)',        // Standard gap
'--component/image-list/row-height': '180px',                 // Default row height
'--component/image-list/cols': '3',                           // Default columns
```

### Spacing Tokens
```typescript
'--component/image-list/gap-small': 'var(--spacing/1, 4px)',     // 4px
'--component/image-list/gap-medium': 'var(--spacing/2, 8px)',    // 8px (default)
'--component/image-list/gap-large': 'var(--spacing/3, 12px)',    // 12px
'--component/image-list/gap-xlarge': 'var(--spacing/4, 16px)',   // 16px
```

### Border Radius Tokens
```typescript
'--component/image-list-item/border-radius': 'var(--border-radius/small, 4px)',
'--component/image-list-item-bar/border-radius': 'var(--border-radius/small, 4px)',
```

### Overlay Tokens
```typescript
// ImageListItemBar background
'--component/image-list-item-bar/bg': 'rgba(0, 0, 0, 0.7)',
'--component/image-list-item-bar/text-color': 'var(--color-palatte/common/white, #ffffff)',
```

---

## Component Anatomy

### ImageList Container
- **Display:** Grid or Flexbox (variant dependent)
- **Gap:** CSS gap property for spacing
- **Columns:** Responsive column count
- **Row Height:** Fixed or auto
- **Overflow:** Auto (scrollable)

### ImageListItem
- **Position:** Relative
- **Aspect Ratio:** Maintained
- **Image:** 100% width/height
- **Overlay:** Optional ImageListItemBar

### ImageListItemBar
- **Position:** Absolute (top or bottom)
- **Background:** Semi-transparent overlay
- **Content:** Title, subtitle, action icon
- **Height:** Auto based on content

---

## Variant Types

### Standard Grid
- **Layout:** Equal-sized items in rows/columns
- **Columns:** Fixed number (e.g., 3, 4, 5)
- **Row Height:** Fixed (e.g., 180px)
- **Use Case:** Product catalogs, photo galleries
- **Advantage:** Uniform, predictable layout
- **Common:** Most frequently used

### Quilted (Mosaic)
- **Layout:** Items with different heights (rows/cols span)
- **Columns:** Fixed number
- **Item Sizes:** Custom rows/cols span per item
- **Use Case:** Featured galleries, editorial layouts
- **Advantage:** Visual interest, emphasis
- **Pattern:** Defined via `rows` and `cols` props on items

### Masonry
- **Layout:** Pinterest-style layout
- **Columns:** Fixed number
- **Row Height:** Auto (based on content)
- **Use Case:** Variable-height images
- **Advantage:** No wasted space
- **Note:** Uses CSS columns or JS positioning

### Woven
- **Layout:** Horizontal rows with variable widths
- **Rows:** Horizontal scrolling rows
- **Item Widths:** Variable
- **Use Case:** Horizontal galleries, carousels
- **Advantage:** Unique visual pattern
- **Rare:** Specialized use case

---

## Column Configurations

### Mobile (2-3 columns)
- **Columns:** 2-3
- **Gap:** 4-8px
- **Row Height:** 120-150px
- **Use Case:** Small screens, portraits

### Tablet (3-4 columns)
- **Columns:** 3-4
- **Gap:** 8px
- **Row Height:** 150-180px
- **Use Case:** Medium screens

### Desktop (4-6 columns)
- **Columns:** 4-6
- **Gap:** 8-12px
- **Row Height:** 180-220px
- **Use Case:** Large screens, galleries

---

## ImageListItemBar Positions

### Bottom (Default)
- **Position:** Bottom of image
- **Use Case:** Standard captions
- **Advantage:** Doesn't cover main content
- **Common:** Most frequent

### Top
- **Position:** Top of image
- **Use Case:** Labels, categories
- **Advantage:** Immediately visible
- **Less Common:** Special cases

### Below
- **Position:** Outside image (below)
- **Use Case:** Separate caption area
- **Advantage:** Doesn't overlay image
- **Layout:** Requires extra space

---

## Usage Guidelines

### When to Use
- Photo galleries
- Product catalogs
- Image portfolios
- Real estate listings
- Recipe collections
- Social media feeds
- Art galleries
- Fashion lookbooks
- Search results with images
- User-generated content

### When NOT to Use
- Single image display (use Card/Paper)
- Small image counts (< 3) (use Grid instead)
- Complex interactive items (use Grid with Cards)
- Variable content types mixed (use Grid)
- Heavy text content (use List/Grid)
- Non-image content primarily

### Best Practices

#### Do
- Use appropriate variant for content
- Set responsive column counts
- Maintain consistent aspect ratios (when possible)
- Provide alt text for all images
- Use lazy loading for performance
- Optimize image sizes
- Use CDS spacing for gaps
- Provide image captions via ItemBar
- Test on various screen sizes
- Handle loading states

#### Don't
- Mix very different aspect ratios in standard grid
- Use huge unoptimized images
- Forget responsive column counts
- Forget alt text (accessibility)
- Use tiny gaps (< 4px) on mobile
- Nest ImageLists
- Use for non-image content
- Forget loading placeholders
- Make gaps too large (> 16px typically)
- Use too many columns on mobile (> 3)

---

## Component Integration (CDS Base Components)

### With CDS IconButton (Actions)
```typescript
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

<ImageList cols={3} gap={8}>
  {items.map((item) => (
    <ImageListItem key={item.id}>
      <img src={item.img} alt={item.title} loading="lazy" />
      <ImageListItemBar
        title={item.title}
        actionIcon={
          <IconButton sx={{ color: 'white' }}>
            <FavoriteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>
```

### With CDS Badge (Image Badges)
```typescript
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

<ImageList cols={4} gap={8}>
  {items.map((item) => (
    <ImageListItem key={item.id}>
      <Badge badgeContent={item.count} color="primary">
        <Box component="img" src={item.img} alt={item.title} sx={{ width: '100%' }} />
      </Badge>
    </ImageListItem>
  ))}
</ImageList>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<ul class="image-list">
  <li class="image-list-item">
    <img src="image.jpg" alt="Descriptive alt text" />
    <div class="image-list-item-bar">
      <span>Image title</span>
    </div>
  </li>
</ul>
```

#### Alt Text
```typescript
// Required for all images
<img src={item.img} alt={item.title} />

// Decorative images only
<img src={item.img} alt="" role="presentation" />
```

#### Keyboard Navigation
- **Tab:** Navigate between interactive elements (buttons, links)
- **Enter/Space:** Activate interactive elements
- **Arrow Keys:** Optional for gallery navigation

#### Screen Reader Support
- All images have descriptive alt text
- Image titles announced via ItemBar
- Action buttons labeled appropriately
- List structure announced

---

## Code Examples

### Standard Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  const itemData = [
    { img: '/img1.jpg', title: 'Image 1' },
    { img: '/img2.jpg', title: 'Image 2' },
    { img: '/img3.jpg', title: 'Image 3' },
    { img: '/img4.jpg', title: 'Image 4' },
    { img: '/img5.jpg', title: 'Image 5' },
    { img: '/img6.jpg', title: 'Image 6' },
  ];

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### With Title Bar
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitleBarImageList() {
  return (
    <ImageList cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Quilted Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function QuiltedImageList() {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={121} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  { img: '/img1.jpg', title: 'Image 1', rows: 2, cols: 2 },
  { img: '/img2.jpg', title: 'Image 2' },
  { img: '/img3.jpg', title: 'Image 3' },
  { img: '/img4.jpg', title: 'Image 4', cols: 2 },
  { img: '/img5.jpg', title: 'Image 5', cols: 2 },
  { img: '/img6.jpg', title: 'Image 6', rows: 2, cols: 2 },
];
```

### Masonry Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function MasonryImageList() {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Responsive Columns
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

export default function ResponsiveImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const cols = isMobile ? 2 : isTablet ? 3 : 4;

  return (
    <ImageList cols={cols} gap={8} sx={{ width: '100%', height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### With Custom Gap
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CustomGapImageList() {
  return (
    <ImageList
      cols={3}
      gap={16}  // Custom gap (CDS spacing/4)
      rowHeight={180}
      sx={{ width: '100%' }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Woven Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
    <ImageList variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Action Bar on Hover
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';

export default function HoverImageList() {
  return (
    <ImageList cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            '&:hover .image-bar': {
              opacity: 1,
            },
          }}
        >
          <img src={item.img} alt={item.title} loading="lazy" />
          <ImageListItemBar
            className="image-bar"
            sx={{
              opacity: 0,
              transition: 'opacity 0.3s',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={item.title}
            position="top"
            actionIcon={
              <Box>
                <IconButton sx={{ color: 'white' }}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <ShareIcon />
                </IconButton>
              </Box>
            }
            actionPosition="right"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

---

## Common Patterns

### Photo Gallery
```tsx
<ImageList cols={4} gap={8} rowHeight={180}>
  {photos.map((photo) => (
    <ImageListItem key={photo.id}>
      <img src={photo.url} alt={photo.caption} loading="lazy" />
      <ImageListItemBar title={photo.caption} />
    </ImageListItem>
  ))}
</ImageList>
```

### Product Catalog
```tsx
<ImageList cols={3} gap={12} rowHeight={220}>
  {products.map((product) => (
    <ImageListItem key={product.id}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <ImageListItemBar
        title={product.name}
        subtitle={`$${product.price}`}
        actionIcon={
          <IconButton><AddShoppingCartIcon /></IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>
```

### Portfolio Grid
```tsx
<ImageList variant="quilted" cols={4} rowHeight={150} gap={8}>
  {projects.map((project) => (
    <ImageListItem key={project.id} cols={project.featured ? 2 : 1} rows={project.featured ? 2 : 1}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <ImageListItemBar title={project.title} subtitle={project.category} />
    </ImageListItem>
  ))}
</ImageList>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Columns:** 2-3
- **Gap:** 4-8px
- **Row Height:** 120-150px
- **Touch:** Optimized for touch

### Tablet (600px - 900px)
- **Columns:** 3-4
- **Gap:** 8px
- **Row Height:** 150-180px
- **Layout:** Balanced

### Desktop (> 900px)
- **Columns:** 4-6
- **Gap:** 8-12px
- **Row Height:** 180-220px
- **Hover:** Actions on hover

---

## CDS Token Integration

### Uses CDS Spacing
```typescript
gap={1}   // 4px  (CDS spacing/1)
gap={2}   // 8px  (CDS spacing/2)  - Default
gap={3}   // 12px (CDS spacing/3)
gap={4}   // 16px (CDS spacing/4)
```

### Uses CDS Border Radius
```typescript
border-radius: var(--border-radius/small, 4px);  // Item borders
```

### Uses CDS Colors (ItemBar)
```typescript
background: rgba(0, 0, 0, 0.7);                    // Overlay
color: var(--color-palatte/common/white, #fff);    // Text
```

---

## Total Variant Combinations

**Variants:** 4 (standard, quilted, masonry, woven)
**Columns:** Variable (1-12+)
**Gap Sizes:** 11 (0-10 using CDS spacing)
**ItemBar Positions:** 3 (top, bottom, below)
**Row Heights:** Variable (fixed or auto)

**Practical Combinations:** Hundreds of configurations

---

## Related Components
- **Grid:** Alternative for mixed content layouts (CDS component)
- **Card:** For individual items with complex content (CDS component)
- **Gallery/Carousel:** For sequential image viewing
- **List:** For text-heavy lists (CDS component)

---

## Figma Design Reference
- **Component:** ImageList / Gallery Grid
- **Gap:** 4px, 8px, 12px, 16px (CDS spacing)
- **Variants:** Standard, Quilted, Masonry, Woven
- **Based on CDS:** Uses CDS spacing and border-radius tokens
- **Documentation:** [MUI ImageList API](https://mui.com/api/image-list)

---

## Migration Notes

### Integration with CDS
- **Gap:** Uses CDS spacing scale (1-4 most common = 4px, 8px, 12px, 16px)
- **Border Radius:** Uses CDS small (4px) for item corners
- **ItemBar Colors:** Uses semi-transparent black overlay with white text
- **Integration:** Works with CDS IconButton, Badge, Typography
- **Responsive:** Breakpoint-based column counts recommended

### Design Tokens Required
- **Spacing tokens:** 4px, 8px, 12px, 16px for gaps
- **Border radius tokens:** 4px (small) for item corners
- **Color tokens:** rgba(0, 0, 0, 0.7) overlay, white text
- **Breakpoint tokens:** xs, sm, md, lg, xl for responsive columns

---

## Performance Considerations

- Use `loading="lazy"` for all images
- Optimize image sizes (serve responsive images)
- Use srcSet for different resolutions
- Consider virtualization for very large lists (> 100 items)
- Lazy load images below fold
- Compress images appropriately
- Use appropriate image formats (WebP when possible)
- Avoid very large uncompressed images
- Consider progressive JPEGs
- Use CDN for image delivery

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS spacing and border-radius systems
- 4 layout variants documented (standard, quilted, masonry, woven)
- Full accessibility compliance (WCAG 2.1 Level AA)
- Image gallery component optimized for performance


---


# Accordion Component - Complete Documentation

**Component Type:** Interactive / Disclosure
**Last Updated:** 2026-02-26
**Status:** ✅ Production Ready

---

## Table of Contents

1. [Overview](#overview)
2. [Component Anatomy](#component-anatomy)
3. [Design Tokens](#design-tokens)
4. [Variants](#variants)
5. [States](#states)
6. [Usage Criteria](#usage-criteria)
7. [Responsive Behavior](#responsive-behavior)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)
10. [Examples](#examples)

---

## Overview

The Accordion component provides an interactive header for expandable/collapsible content sections. It allows users to show or hide content panels to manage information density and improve scannability.

### Key Features

- **3 Sizes:** Small (56px), Medium (60px), Large (64px)
- **2 Alignments:** Left chevron or Right chevron
- **4 States:** Idle, Hover, Focus, Disabled
- **2 Open States:** Collapsed, Expanded
- **Optional Elements:** Description text, selection indicator, trailing icon
- **Fully Accessible:** ARIA expanded state, keyboard navigation

### When to Use

✅ **Use Accordion when:**
- Organizing FAQ sections
- Grouping related content in categories
- Creating expandable settings panels
- Building navigation with nested items
- Displaying step-by-step instructions
- Reducing vertical scroll in long forms

❌ **Don't use Accordion when:**
- You have only one collapsible item
- Content is critical and should always be visible
- Building complex multi-step forms (use Stepper instead)
- Creating tabbed navigation (use Tabs instead)
- Content is very short and doesn't need hiding

---

## Component Anatomy

### Visual Structure

```
┌──────────────────────────────────────────────────────────────┐
│ [Selection] [Chevron] [Title Content        ] [Trailing Icon]│
│  Indicator            [Description (optional)]               │
└──────────────────────────────────────────────────────────────┘

Width: 360px (flexible, can expand to container width)
Height: Varies by size (56px / 60px / 64px)
```

### Component Parts

1. **Selection Indicator** (Optional)
   - Vertical colored line on left edge
   - Width: 1px rotated (60px / 56px / 64px depending on size)
   - Color: Primary main
   - Appears when `selected={true}`

2. **Chevron Icon** (Required)
   - Size: 16×16px
   - Icons used:
     - `chevron-right` - Closed state (left alignment)
     - `chevron-down` - Closed state (right alignment) or Open state (left alignment)
     - `chevron-up` - Open state (right alignment)
   - Position: Left or right based on alignment variant

3. **Title Content** (Required)
   - **Title Text:** Primary heading, uses H5/H6/H4 based on size
   - **Description Text:** Optional secondary text, uses Body2/Body3/Body1
   - Flex grows to fill available space
   - Vertical gap: 0px (stacked)

4. **Trailing Icon** (Optional)
   - Size: 16×16px
   - Default: check-circle icon
   - Can be replaced with custom icon
   - Appears when `withIcon={true}`

---

## Design Tokens

### Accordion-Specific Tokens

```typescript
// Spacing
'--component/accordion/gap': '8px',                    // Gap between elements
'--component/accordion/padding-horizontal': '12px',    // Horizontal padding
'--component/accordion/padding-vertical-small': '12px',
'--component/accordion/padding-vertical-medium': '12px',
'--component/accordion/padding-vertical-large': '12px',
'--component/accordion/padding-left': '8px',           // Left padding for chevron

// Heights by Size
'--component/accordion/height-small': '56px',
'--component/accordion/height-medium': '60px',
'--component/accordion/height-large': '64px',

// Selection Indicator
'--component/accordion/selected-line-width': '1px',
'--component/accordion/selected-line-small': '56px',   // Rotated 90deg
'--component/accordion/selected-line-medium': '60px',
'--component/accordion/selected-line-large': '64px',

// Icon Sizes
'--component/accordion/icon-size': '16px',

// Border Radius (Inherited)
'--component/accordion/border-radius': '0px',          // Typically no radius

// Focus Border
'--component/accordion/focus-border-width': '1px',
```

### Color Tokens Used

```typescript
// Background Colors
'--colors/background/default': 'white',                // Idle state
'--colors/primary/light': '#eef1fc',                  // Hover/Focus state
'--colors/background/tertiary': '#f2f2f2',            // Disabled state

// Text Colors
'--colors/text/primary': 'rgba(0,0,0,0.87)',          // Title text
'--colors/secondary/main': '#546574',                  // Description text
'--colors/text/disabled': 'rgba(0,0,0,0.38)',         // Disabled text

// Border Colors
'--colors/primary/main': '#4b3fff',                    // Focus border, selection indicator
```

### Typography Tokens by Size

#### Small Size
```typescript
'--typography/base-styles/h6/font-family': 'DM Sans',
'--typography/base-styles/h6/font-size': '12px',
'--typography/base-styles/h6/font-weight': '600',
'--typography/base-styles/h6/line-height': '16px',
'--typography/base-styles/h6/letter-spacing': '0px',

'--typography/base-styles/body3/font-family': 'DM Sans',
'--typography/base-styles/body3/font-size': '12px',
'--typography/base-styles/body3/font-weight': '400',
'--typography/base-styles/body3/line-height': '16px',
'--typography/base-styles/body3/letter-spacing': '0.17px',
```

#### Medium Size (Default)
```typescript
'--typography/base-styles/h5/font-family': 'DM Sans',
'--typography/base-styles/h5/font-size': '14px',
'--typography/base-styles/h5/font-weight': '600',
'--typography/base-styles/h5/line-height': '18px',
'--typography/base-styles/h5/letter-spacing': '0px',

'--typography/base-styles/body2/font-family': 'DM Sans',
'--typography/base-styles/body2/font-size': '14px',
'--typography/base-styles/body2/font-weight': '400',
'--typography/base-styles/body2/line-height': '18px',
'--typography/base-styles/body2/letter-spacing': '0.17px',
```

#### Large Size
```typescript
'--typography/base-styles/h4/font-family': 'DM Sans',
'--typography/base-styles/h4/font-size': '16px',
'--typography/base-styles/h4/font-weight': '600',
'--typography/base-styles/h4/line-height': '20px',
'--typography/base-styles/h4/letter-spacing': '-0.2px',

'--typography/base-styles/body1/font-family': 'DM Sans',
'--typography/base-styles/body1/font-size': '16px',
'--typography/base-styles/body1/font-weight': '400',
'--typography/base-styles/body1/line-height': '20px',
'--typography/base-styles/body1/letter-spacing': '0.15px',
```

---

## Variants

### Size Variants

#### 1. Small (56px)

**Use when:**
- Compact UI required
- Sidebars with limited width
- Dense information displays
- Mobile views with many sections

**Typography:**
- Title: H6 (12px, semibold)
- Description: Body3 (12px, regular)

**Spacing:**
- Height: 56px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 56px
│     This is a description.             │
└────────────────────────────────────────┘
```

#### 2. Medium (60px) - Default ⭐

**Use when:**
- Most common use case
- Standard desktop layouts
- Balanced readability and density
- Default choice for most applications

**Typography:**
- Title: H5 (14px, semibold)
- Description: Body2 (14px, regular)

**Spacing:**
- Height: 60px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 60px
│     This is a description.             │
└────────────────────────────────────────┘
```

#### 3. Large (64px)

**Use when:**
- Prominent sections
- Touch-first interfaces
- Accessibility needs (larger text)
- Desktop with comfortable spacing

**Typography:**
- Title: H4 (16px, semibold)
- Description: Body1 (16px, regular)

**Spacing:**
- Height: 64px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 64px
│     This is a description.             │
└────────────────────────────────────────┘
```

---

### Alignment Variants

#### Left Alignment

**Chevron Position:** Left side
**Chevron Behavior:**
- Closed: `chevron-right` (►)
- Open: `chevron-down` (▼)

**Layout Flow:**
```
[Selection] [► Chevron] [Title + Description] [Icon]
```

**Use when:**
- Standard accordion pattern
- Reading left-to-right languages
- Navigation menus
- Sidebar sections

#### Right Alignment

**Chevron Position:** Right side
**Chevron Behavior:**
- Closed: `chevron-down` (▼)
- Open: `chevron-up` (▲)

**Layout Flow:**
```
[Selection] [Icon] [Title + Description] [▼ Chevron]
```

**Use when:**
- Icon emphasis (icon appears first)
- Alternative visual hierarchy
- Matching specific design patterns
- Table row expansion headers

---

## States

### 1. Idle (Default)

**Appearance:**
- Background: `--colors/background/default` (white)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Border: None

**When:**
- Resting state
- No user interaction
- Default appearance

### 2. Hover

**Appearance:**
- Background: `--colors/primary/light` (#eef1fc)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Border: None
- Cursor: pointer

**When:**
- Mouse cursor over the accordion header
- Desktop/pointer devices only
- Indicates interactivity

**Transition:**
- Duration: 150ms
- Easing: ease-in-out

### 3. Focus

**Appearance:**
- Background: `--colors/primary/light` (#eef1fc)
- Border: 1px solid `--colors/primary/main` (#4b3fff)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Outline: Visible focus ring

**When:**
- Keyboard navigation (Tab focus)
- Screen reader focus
- Accessibility requirement

**Important:**
- Must be clearly visible
- Cannot be removed for accessibility
- Meets WCAG 2.1 Level AA

### 4. Disabled

**Appearance:**
- Background: `--colors/background/tertiary` (#f2f2f2)
- Title: `--colors/text/disabled` (rgba(0,0,0,0.38))
- Description: `--colors/text/disabled` (rgba(0,0,0,0.38))
- Icons: Reduced opacity
- Cursor: not-allowed

**When:**
- Section cannot be expanded
- Content is unavailable
- User lacks permissions
- Dependent condition not met

**Behavior:**
- Not clickable
- Not keyboard navigable
- Not announced by screen readers as interactive

---

### Open/Closed States

#### Closed State

**Chevron Icon:**
- Left alignment: `chevron-right` (►)
- Right alignment: `chevron-down` (▼)

**ARIA:**
- `aria-expanded="false"`

**Content Panel:**
- Hidden (display: none or height: 0)
- Not in tab order

#### Open State

**Chevron Icon:**
- Left alignment: `chevron-down` (▼)
- Right alignment: `chevron-up` (▲)

**ARIA:**
- `aria-expanded="true"`

**Content Panel:**
- Visible
- Animated expand (height transition)
- Content becomes keyboard navigable

**Animation:**
```css
.accordion-content {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
```

---

### Selection Indicator

**When to Show:**
- Current/active accordion
- User selection in a list
- Highlighted section

**Appearance:**
- 1px vertical line on left edge
- Color: `--colors/primary/main` (#4b3fff)
- Height: Matches accordion height (56px/60px/64px)
- Position: Absolute left edge

**Usage:**
```html
<div class="accordion" data-selected="true">
  <!-- Selection line appears -->
</div>
```

---

## Usage Criteria

### ✅ When to Use Accordion

1. **FAQ Pages**
   - Question as title
   - Answer in expandable content
   - Reduces page length

2. **Settings Panels**
   - Category as title
   - Settings in expandable section
   - Organizes complex options

3. **Product Features**
   - Feature name as title
   - Details in expandable content
   - Improves scannability

4. **Help Documentation**
   - Topic as title
   - Instructions in content
   - Progressive disclosure

5. **Form Sections**
   - Section name as title
   - Form fields in content
   - Reduces cognitive load

6. **Navigation Menus**
   - Category as title
   - Submenu in content
   - Hierarchical structure

### ❌ When NOT to Use Accordion

1. **Single Item**
   - Use simple expand/collapse button instead
   - Accordion implies multiple sections

2. **Critical Content**
   - Don't hide important information
   - Users may not discover it
   - Use visible sections instead

3. **Short Content**
   - If content fits on screen, don't hide it
   - Adds unnecessary interaction

4. **Sequential Processes**
   - Use Stepper component instead
   - Accordion is non-linear

5. **Tabbed Content**
   - Use Tabs component instead
   - Different navigation pattern

6. **Always-Visible Content**
   - Use Cards or Sections instead
   - Accordion hides by default

---

### Content Guidelines

#### Title Text

✅ **Do:**
- Keep titles concise (3-7 words)
- Use clear, descriptive labels
- Use sentence case
- Front-load important words
- Make titles scannable

❌ **Don't:**
- Use vague titles ("More Info", "Details")
- Write full sentences
- Use ALL CAPS
- Include punctuation at end
- Repeat words across titles

**Examples:**
- ✅ "Shipping and delivery options"
- ✅ "Payment methods"
- ✅ "Account security settings"
- ❌ "Click here for more information"
- ❌ "Details"
- ❌ "IMPORTANT: READ THIS FIRST"

#### Description Text (Optional)

✅ **Do:**
- Keep to 1 sentence
- Provide helpful preview
- Use 10-15 words maximum
- Complement the title

❌ **Don't:**
- Repeat the title
- Include full content
- Use multiple sentences
- Make it essential to understand

**Examples:**
- ✅ "Choose how we deliver your order"
- ✅ "Credit card, PayPal, or bank transfer"
- ❌ "This section contains information about..."

---

## Responsive Behavior

### Desktop (1200px+)

**Layout:**
- Width: Flexible (360px minimum)
- Height: 60px (medium size default)
- Hover states: Active
- Cursor: pointer on hover

**Interaction:**
- Click to toggle
- Keyboard navigation supported
- Hover feedback visible

**Spacing:**
- Comfortable padding (12px vertical)
- Icon spacing: 8px

### Tablet (768-1199px)

**Layout:**
- Width: Flexible, full container width
- Height: 60px (medium size recommended)
- Touch targets: 48×48px minimum

**Interaction:**
- Touch to toggle
- No hover states (touch device)
- Focus states for accessibility

**Adjustments:**
- Maintain 60px height
- Ensure touch-friendly hit areas
- Test with fingers, not pointer

### Mobile (<768px)

**Layout:**
- Width: Full width (minus page padding)
- Height: 60px or 64px (large size better for touch)
- Touch targets: 48×48px minimum (met by all sizes)

**Interaction:**
- Touch to toggle
- No hover effects
- Large tap targets

**Adjustments:**
- Consider large size (64px) for better touch
- Hide description text if space constrained
- Stack multiple accordions vertically
- Full-width layout

**Mobile-Specific:**
```css
@media (max-width: 767px) {
  .accordion {
    width: 100%;
    height: var(--component/accordion/height-large); /* 64px */
  }

  .accordion-description {
    display: none; /* Optional: hide on small screens */
  }
}
```

---

## Accessibility

### ARIA Attributes

#### Accordion Header (Button)
```html
<button
  role="button"
  aria-expanded="false"
  aria-controls="panel-1"
  aria-disabled="false"
  class="accordion-header"
>
  <span class="accordion-title">Accordion Title</span>
  <span class="accordion-description">This is a description.</span>
</button>
```

#### Accordion Panel (Content)
```html
<div
  id="panel-1"
  role="region"
  aria-labelledby="accordion-1"
  hidden
>
  <!-- Expandable content -->
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| **Tab** | Move focus to next accordion header |
| **Shift + Tab** | Move focus to previous accordion header |
| **Enter** / **Space** | Toggle accordion open/closed |
| **Home** | Move to first accordion (optional) |
| **End** | Move to last accordion (optional) |
| **↓** | Move to next accordion (optional) |
| **↑** | Move to previous accordion (optional) |

### Screen Reader Announcements

**When focused:**
```
"Accordion Title, This is a description. Button, collapsed. Press Enter to expand."
```

**After expanding:**
```
"Accordion Title expanded. 1 of 5."
```

**After collapsing:**
```
"Accordion Title collapsed."
```

### Focus Management

1. **Visible Focus Indicator**
   - 1px border in primary color
   - Sufficient contrast (3:1 minimum)
   - Clearly distinguishable from hover

2. **Focus Order**
   - Logical top-to-bottom order
   - Accordion headers in document order
   - Content becomes focusable when expanded

3. **Focus Trap**
   - Not required (content is part of page flow)
   - Content should be in natural tab order

### Color Contrast

**WCAG 2.1 Level AA Requirements:**
- Title text: 4.5:1 contrast ratio ✅
  - Primary text on white: ~14.8:1 ✅
- Description text: 4.5:1 contrast ratio ✅
  - Secondary text on white: ~5.2:1 ✅
- Disabled text: 3:1 contrast ratio ✅
  - Disabled text on tertiary: ~4.1:1 ✅

### Touch Targets

- Minimum size: 44×44px ✅
- Small size: 56px ✅
- Medium size: 60px ✅
- Large size: 64px ✅
- All sizes meet WCAG requirements

---

## Best Practices

### Do's ✅

1. **Use Consistent Patterns**
   - Keep all accordions in a group the same size
   - Use same chevron alignment throughout
   - Maintain visual consistency

2. **Provide Clear Titles**
   - Make titles descriptive and scannable
   - Front-load important keywords
   - Keep concise (3-7 words)

3. **Progressive Disclosure**
   - Hide secondary/optional information
   - Show most important content by default
   - Let users expand to see more

4. **Group Related Content**
   - Use multiple accordions for different topics
   - Maintain logical order
   - Consider allowing multiple open at once

5. **Keyboard Support**
   - Ensure all accordions are keyboard accessible
   - Test with Tab, Enter, Space keys
   - Provide clear focus indicators

6. **Consider Default State**
   - Open first accordion by default if helpful
   - Consider user's likely need
   - Remember user's state if possible

### Don'ts ❌

1. **Don't Hide Critical Information**
   - Keep important content visible
   - Don't require users to discover hidden content
   - Use accordions for secondary details

2. **Don't Use for Navigation**
   - Use Navigation/Sidenav component instead
   - Accordion is for content disclosure
   - Navigation has different patterns

3. **Don't Nest Accordions**
   - Avoid accordion within accordion
   - Leads to confusing hierarchy
   - Use other organization methods

4. **Don't Use Tiny Text**
   - Respect minimum font sizes
   - Don't go below 12px (small size)
   - Ensure readability

5. **Don't Disable Without Reason**
   - Only disable when necessary
   - Provide explanation why disabled
   - Consider hiding instead

6. **Don't Force Single Open**
   - Allow multiple accordions open simultaneously
   - Let users compare content
   - Exception: When mutually exclusive options

---

## Examples

### Example 1: Basic FAQ Accordion

```html
<!-- Small Size, Left Alignment, with Description -->
<div class="accordion-container">
  <button
    class="accordion-header"
    aria-expanded="false"
    aria-controls="faq-1"
  >
    <svg class="accordion-icon chevron-right" width="16" height="16">
      <!-- Chevron icon -->
    </svg>
    <div class="accordion-content">
      <div class="accordion-title">How do I reset my password?</div>
      <div class="accordion-description">Instructions for password recovery.</div>
    </div>
  </button>

  <div id="faq-1" class="accordion-panel" hidden>
    <p>Click "Forgot Password" on the login page and follow the email instructions.</p>
  </div>
</div>

<style>
.accordion-header {
  display: flex;
  align-items: center;
  gap: var(--spacings-&-sizes/base/8px);
  padding: var(--spacings-&-sizes/base/12px) var(--spacings-&-sizes/base/12px)
           var(--spacings-&-sizes/base/12px) var(--spacings-&-sizes/base/8px);
  background: var(--colors/background/default);
  border: none;
  cursor: pointer;
  width: 100%;
  height: var(--component/accordion/height-small);
  transition: background-color 150ms ease-in-out;
}

.accordion-header:hover {
  background: var(--colors/primary/light);
}

.accordion-header:focus {
  background: var(--colors/primary/light);
  border: 1px solid var(--colors/primary/main);
  outline: none;
}

.accordion-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.accordion-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: left;
}

.accordion-title {
  font-family: var(--typography/base-styles/h6/font-family);
  font-size: var(--typography/base-styles/h6/font-size);
  font-weight: var(--typography/base-styles/h6/font-weight);
  line-height: var(--typography/base-styles/h6/line-height);
  color: var(--colors/text/primary);
}

.accordion-description {
  font-family: var(--typography/base-styles/body3/font-family);
  font-size: var(--typography/base-styles/body3/font-size);
  font-weight: var(--typography/base-styles/body3/font-weight);
  line-height: var(--typography/base-styles/body3/line-height);
  color: var(--colors/secondary/main);
}

.accordion-panel {
  padding: 16px;
  background: var(--colors/background/paper);
  overflow: hidden;
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-panel[hidden] {
  display: none;
}
</style>
```

### Example 2: Settings Panel (Medium Size, Right Alignment)

```html
<div class="accordion-container">
  <button
    class="accordion-header accordion-right"
    aria-expanded="false"
    aria-controls="settings-1"
  >
    <div class="accordion-content">
      <div class="accordion-title">Notification preferences</div>
      <div class="accordion-description">Email, push, and SMS settings.</div>
    </div>
    <svg class="accordion-icon chevron-down" width="16" height="16">
      <!-- Chevron down icon -->
    </svg>
  </button>

  <div id="settings-1" class="accordion-panel" hidden>
    <!-- Settings form fields -->
  </div>
</div>
```

### Example 3: Selected Accordion with Icon (Large Size)

```html
<div class="accordion-container">
  <button
    class="accordion-header accordion-selected"
    aria-expanded="true"
    aria-controls="section-1"
  >
    <div class="accordion-selection-indicator"></div>
    <svg class="accordion-icon chevron-down" width="16" height="16">
      <!-- Chevron icon -->
    </svg>
    <div class="accordion-content">
      <div class="accordion-title">Completed section</div>
      <div class="accordion-description">All required fields filled.</div>
    </div>
    <svg class="accordion-trailing-icon" width="16" height="16">
      <!-- Check circle icon -->
    </svg>
  </button>

  <div id="section-1" class="accordion-panel">
    <!-- Expanded content -->
  </div>
</div>

<style>
.accordion-selected {
  position: relative;
}

.accordion-selection-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--colors/primary/main);
}

.accordion-trailing-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--colors/success/main);
}
</style>
```

### Example 4: Disabled Accordion

```html
<button
  class="accordion-header accordion-disabled"
  aria-expanded="false"
  aria-disabled="true"
  disabled
>
  <svg class="accordion-icon chevron-right" width="16" height="16">
    <!-- Chevron icon -->
  </svg>
  <div class="accordion-content">
    <div class="accordion-title">Premium features</div>
    <div class="accordion-description">Upgrade to unlock.</div>
  </div>
</button>

<style>
.accordion-disabled {
  background: var(--colors/background/tertiary);
  cursor: not-allowed;
  opacity: 1;
}

.accordion-disabled .accordion-title,
.accordion-disabled .accordion-description {
  color: var(--colors/text/disabled);
}

.accordion-disabled:hover {
  background: var(--colors/background/tertiary);
}
</style>
```

### Example 5: Accordion Group (Multiple Items)

```html
<div class="accordion-group">
  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="true"
      aria-controls="panel-1"
      id="accordion-1"
    >
      <svg class="accordion-icon chevron-down" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">General information</div>
      </div>
    </button>
    <div id="panel-1" class="accordion-panel" aria-labelledby="accordion-1">
      <!-- Content -->
    </div>
  </div>

  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="false"
      aria-controls="panel-2"
      id="accordion-2"
    >
      <svg class="accordion-icon chevron-right" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">Shipping details</div>
      </div>
    </button>
    <div id="panel-2" class="accordion-panel" aria-labelledby="accordion-2" hidden>
      <!-- Content -->
    </div>
  </div>

  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="false"
      aria-controls="panel-3"
      id="accordion-3"
    >
      <svg class="accordion-icon chevron-right" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">Payment options</div>
      </div>
    </button>
    <div id="panel-3" class="accordion-panel" aria-labelledby="accordion-3" hidden>
      <!-- Content -->
    </div>
  </div>
</div>

<style>
.accordion-group {
  border: 1px solid var(--colors/border/default);
  border-radius: var(--border-radius/medium);
}

.accordion-item:not(:last-child) {
  border-bottom: 1px solid var(--colors/border/default);
}
</style>
```

---

## Component Variations Summary

| Variant | Size | Height | Title | Description | Use Case |
|---------|------|--------|-------|-------------|----------|
| Small Left | S | 56px | H6 12px | Body3 12px | Compact sidebars |
| Medium Left ⭐ | M | 60px | H5 14px | Body2 14px | Default choice |
| Large Left | L | 64px | H4 16px | Body1 16px | Touch-friendly |
| Small Right | S | 56px | H6 12px | Body3 12px | Alternative layout |
| Medium Right | M | 60px | H5 14px | Body2 14px | Icon emphasis |
| Large Right | L | 64px | H4 16px | Body1 16px | Accessible touch |

---

## Related Components

- **Navigation (Sidenav):** For app navigation with expandable items
- **Stepper:** For sequential multi-step processes
- **Tabs:** For switching between mutually exclusive views
- **Card:** For grouping related content without collapsing
- **Expansion Panel:** For single collapsible item (use Accordion for multiple)

---

## Changelog

**v1.0.0** (2026-02-26)
- Initial documentation
- 3 size variants (Small, Medium, Large)
- 2 alignment variants (Left, Right)
- 4 states (Idle, Hover, Focus, Disabled)
- Open/closed states with animated transitions
- Optional selection indicator and trailing icon
- Full accessibility support (ARIA, keyboard)
- Responsive specifications
- Complete token specifications
- Usage guidelines and examples

---

**Questions or feedback?** Refer to the design system team or contribute improvements to this documentation.

**File Location:** `DESIGN-SYSTEM-DOCUMENTATION-ACCORDION.md`
**Component Status:** ✅ Production Ready
