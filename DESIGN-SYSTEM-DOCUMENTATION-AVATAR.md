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
