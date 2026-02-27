# Bottom Navigation Component Documentation

## Overview
The Bottom Navigation component provides quick access to top-level destinations in mobile and tablet interfaces. It appears at the bottom of the screen and contains 3-5 navigation items with icons and optional labels. It's designed for mobile-first experiences and thumb-friendly interaction.

**Component Type:** Navigation Component
**Based on:** Material-UI (MUI) v6.1.0 BottomNavigation & BottomNavigationAction
**Documentation:** [MUI BottomNavigation API](https://mui.com/api/bottom-navigation)

---

## Design Tokens

### Layout Tokens
```typescript
// Uses CDS sizing system
'--component/bottom-navigation/height': '56px',
'--component/bottom-navigation/min-width': '80px',
'--component/bottom-navigation/max-width': '168px',
'--component/bottom-navigation/action-padding': 'var(--spacing/1, 4px) var(--spacing/3, 12px)',
```

### Color Tokens
```typescript
// Container
'--component/bottom-navigation/bg-color': 'var(--color-palatte/background/paper, #ffffff)',
'--component/bottom-navigation/border-color': 'var(--color-palatte/divider, rgba(0, 0, 0, 0.12))',

// Default/Inactive State
'--component/bottom-navigation/action/default/icon-color': 'var(--color-palatte/action/active, rgba(0, 0, 0, 0.54))',
'--component/bottom-navigation/action/default/text-color': 'var(--color-palatte/text/secondary, rgba(0, 0, 0, 0.6))',

// Selected/Active State
'--component/bottom-navigation/action/selected/icon-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/bottom-navigation/action/selected/text-color': 'var(--color-palatte/primary/main, #4b3fff)',

// Hover State
'--component/bottom-navigation/action/hover/bg-color': 'var(--color-palatte/action/hover, rgba(0, 0, 0, 0.04))',

// Disabled State
'--component/bottom-navigation/action/disabled/icon-color': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26))',
'--component/bottom-navigation/action/disabled/text-color': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.26))',
```

### Typography Tokens
```typescript
'--component/bottom-navigation/label/font-family': 'var(--typography/base-styles/caption/font-family, "DM_Sans:Regular", sans-serif)',
'--component/bottom-navigation/label/font-size': 'var(--typography/base-styles/caption/font-size, 12px)',
'--component/bottom-navigation/label/font-weight': '400',
'--component/bottom-navigation/label/line-height': '16px',
'--component/bottom-navigation/label/letter-spacing': '0.4px',

// Selected label
'--component/bottom-navigation/label-selected/font-weight': '500',
```

### Icon Tokens
```typescript
'--component/bottom-navigation/icon-size': '24px',
'--component/bottom-navigation/icon-margin-bottom': 'var(--spacing/1, 4px)',
```

### Elevation Tokens
```typescript
// Uses CDS elevation system
'--component/bottom-navigation/elevation': '8',  // Level 8 shadow
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/bottom-navigation/z-index': '1100',  // CDS app bar level
```

---

## Component Anatomy

### Bottom Navigation Container
- **Height:** 56px fixed
- **Width:** 100% of screen
- **Position:** Fixed bottom
- **Background:** Paper white
- **Elevation:** 8 (shadow above)
- **Border Top:** 1px divider (optional)
- **Z-Index:** 1100 (CDS app bar level)

### Navigation Action Items
- **Count:** 3-5 items (recommended)
- **Min Width:** 80px
- **Max Width:** 168px
- **Layout:** Flex, equal distribution
- **Alignment:** Center (icon + label)
- **Touch Target:** 56px height (full height)

### Icon
- **Size:** 24×24px
- **Position:** Above label
- **Color:** Grey (inactive), Primary (active)
- **Margin Bottom:** 4px (to label)

### Label
- **Font:** Caption (12px)
- **Weight:** 400 (inactive), 500 (active)
- **Color:** Grey (inactive), Primary (active)
- **Position:** Below icon
- **Text:** Short, 1-2 words

---

## Item Count Variants

### 3 Items
- **Width per Item:** ~33.3% of screen
- **Max Width:** 168px per item
- **Layout:** Spacious
- **Use Case:** Simple apps, focused navigation
- **Example:** Home, Search, Profile

### 4 Items
- **Width per Item:** 25% of screen
- **Max Width:** 168px per item
- **Layout:** Balanced
- **Use Case:** Standard apps, common pattern
- **Example:** Home, Search, Favorites, Profile

### 5 Items (Maximum)
- **Width per Item:** 20% of screen
- **Min Width:** 80px per item enforced
- **Layout:** Compact
- **Use Case:** Complex apps, many destinations
- **Example:** Home, Search, Post, Notifications, Profile

---

## Label Display Variants

### Always Show Labels
- **Display:** Labels always visible
- **Height:** 56px
- **Use Case:** Clear navigation, new users
- **Advantage:** Self-explanatory
- **Disadvantage:** Requires vertical space

### Show Selected Only
- **Display:** Only active item shows label
- **Height:** 56px (maintains height)
- **Use Case:** Experienced users, cleaner look
- **Advantage:** Less clutter
- **Disadvantage:** Less discoverable

### No Labels
- **Display:** Icons only
- **Height:** 56px (maintains height)
- **Use Case:** Icon-only navigation (rare)
- **Advantage:** Minimal
- **Disadvantage:** Requires clear, universal icons
- **Accessibility:** Must provide aria-label

---

## States

### Default (Inactive)
- **Icon Color:** Action active (54% opacity)
- **Label Color:** Text secondary (60% opacity)
- **Label Weight:** 400 (regular)
- **Background:** Transparent
- **Cursor:** pointer

### Selected (Active)
- **Icon Color:** Primary color (`#4b3fff`)
- **Label Color:** Primary color
- **Label Weight:** 500 (medium)
- **Background:** Transparent or subtle highlight
- **Visual:** Clear active state

### Hover
- **Background:** Action hover (4% opacity)
- **Icon:** Maintained
- **Label:** Maintained
- **Transition:** 150ms
- **Cursor:** pointer

### Pressed
- **Background:** Action selected (8% opacity)
- **Icon:** Maintained
- **Label:** Maintained
- **Transition:** Instant
- **Feedback:** Touch ripple effect

### Disabled
- **Icon Color:** Action disabled (26% opacity)
- **Label Color:** Action disabled (26% opacity)
- **Background:** Transparent
- **Cursor:** not-allowed
- **Interaction:** None

---

## Usage Guidelines

### When to Use
- Mobile apps (primary use case)
- 3-5 top-level destinations
- Frequent navigation between sections
- Touch-optimized interfaces
- Tablet apps in portrait mode
- Persistent navigation needs
- Equal-priority destinations

### When NOT to Use
- Desktop interfaces (use Drawer or Tabs)
- More than 5 destinations
- Sequential workflows (use Stepper)
- Hierarchical navigation (use Drawer)
- Temporary actions (use FAB or menu)
- Content scrolling areas
- Rare navigation needs

### Best Practices

#### Do
- Use 3-5 items (optimal is 4)
- Use clear, recognizable icons
- Keep labels short (1-2 words)
- Show active state clearly
- Use CDS primary color for active
- Place most important item first (left)
- Maintain consistent icon style
- Provide touch ripple feedback
- Support keyboard navigation
- Use semantic icons (Home, Search, etc.)

#### Don't
- Use more than 5 items
- Use tiny icons (< 24px)
- Use long labels (> 2 words)
- Hide navigation frequently
- Use for desktop primary nav
- Forget disabled state
- Use color as only indicator
- Make items too narrow (< 80px)
- Use inconsistent icon sizes
- Forget aria-labels

---

## Component Integration (CDS Base Components)

### With CDS Badge
```typescript
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

<BottomNavigationAction
  label="Notifications"
  icon={
    <Badge badgeContent={3} color="error">
      <NotificationsIcon />
    </Badge>
  }
/>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<nav role="navigation" aria-label="Main navigation">
  <button aria-label="Home" aria-current="page">
    <HomeIcon />
    <span>Home</span>
  </button>
  <button aria-label="Search">
    <SearchIcon />
    <span>Search</span>
  </button>
</nav>
```

#### ARIA Attributes
```typescript
{
  // Container
  role: "navigation",
  "aria-label": "Main navigation",

  // Action items
  role: "button",
  "aria-label": string,
  "aria-current": "page",      // For selected item
  "aria-disabled": boolean,
  tabIndex: 0,
}
```

#### Keyboard Navigation
- **Tab:** Navigate through items
- **Shift+Tab:** Navigate backward
- **Enter/Space:** Activate item
- **Arrow Left/Right:** Navigate between items (optional)

#### Touch Targets
- **Height:** 56px (exceeds 48px minimum)
- **Width:** Min 80px per item
- **Spacing:** Items are adjacent (no gaps needed)

#### Color Contrast
- **Inactive Icons:** 3:1 minimum (54% opacity)
- **Active Icons:** 4.5:1 (primary color)
- **Inactive Labels:** 4.5:1 (60% opacity)
- **Active Labels:** 4.5:1 (primary color)

#### Screen Reader Support
- Navigation purpose announced
- Item labels announced
- Active state announced ("current page")
- Icon-only items have aria-label

---

## Code Examples

### Basic Bottom Navigation
```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function BasicBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}
```

### With Router Integration
```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RouterBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const value = location.pathname;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => navigate(newValue)}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" value="/search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" value="/profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
```

### Show Selected Label Only
```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function LabelBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
```

### With Badge
```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Badge from '@mui/material/Badge';

export default function BadgeBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Messages"
        icon={
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        }
      />
      <BottomNavigationAction
        label="Notifications"
        icon={
          <Badge badgeContent={10} color="primary">
            <NotificationsIcon />
          </Badge>
        }
      />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
```

### 5 Items (Maximum)
```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function FiveItemBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Add" icon={<AddIcon />} />
      <BottomNavigationAction label="Inbox" icon={<InboxIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
```

---

## Common Patterns

### Social Media App
```tsx
<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction label="Feed" icon={<HomeIcon />} />
  <BottomNavigationAction label="Search" icon={<SearchIcon />} />
  <BottomNavigationAction label="Post" icon={<AddCircleIcon />} />
  <BottomNavigationAction label="Activity" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
</BottomNavigation>
```

### E-Commerce App
```tsx
<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction label="Shop" icon={<StoreIcon />} />
  <BottomNavigationAction label="Search" icon={<SearchIcon />} />
  <BottomNavigationAction label="Cart" icon={<Badge badgeContent={3}><ShoppingCartIcon /></Badge>} />
  <BottomNavigationAction label="Account" icon={<PersonIcon />} />
</BottomNavigation>
```

### Messaging App
```tsx
<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction label="Chats" icon={<Badge badgeContent={5}><ChatIcon /></Badge>} />
  <BottomNavigationAction label="Calls" icon={<PhoneIcon />} />
  <BottomNavigationAction label="Contacts" icon={<PeopleIcon />} />
  <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
</BottomNavigation>
```

---

## Responsive Behavior

### Mobile Portrait (< 600px)
- **Primary Use Case:** Designed for this
- **Height:** 56px
- **Items:** 3-5 work well
- **Labels:** Show selected or always show
- **Position:** Fixed bottom

### Mobile Landscape (< 960px landscape)
- **Height:** 56px
- **Items:** 3-4 recommended (5 may crowd)
- **Labels:** Consider selected-only
- **Position:** Fixed bottom

### Tablet Portrait (600px - 900px)
- **Height:** 56px
- **Items:** 3-5 work well
- **Consider:** Side navigation alternative
- **Position:** Fixed bottom or side

### Tablet Landscape / Desktop (> 900px)
- **Use Alternative:** Drawer, Tabs, or AppBar
- **Bottom Nav:** Generally not recommended
- **Exception:** Tablet apps in portrait orientation
- **Position:** Consider side navigation instead

---

## CDS Token Integration

### Uses CDS Colors
```typescript
background: var(--color-palatte/background/paper, #ffffff);
border-color: var(--color-palatte/divider, rgba(0, 0, 0, 0.12));
color: var(--color-palatte/primary/main, #4b3fff);          // Active
color: var(--color-palatte/action/active, rgba(0, 0, 0, 0.54)); // Inactive
```

### Uses CDS Spacing
```typescript
padding: var(--spacing/1, 4px) var(--spacing/3, 12px);
margin-bottom: var(--spacing/1, 4px);
```

### Uses CDS Typography
```typescript
font-family: var(--typography/base-styles/caption/font-family);
font-size: var(--typography/base-styles/caption/font-size, 12px);
font-weight: 400;  // Inactive
font-weight: 500;  // Active
```

### Uses CDS Elevation
```typescript
box-shadow: var(--elevation/level-8);  // Shadow above content
```

### Uses CDS Z-Index
```typescript
z-index: var(--z-index/app-bar, 1100);
```

---

## Total Variant Combinations

**Item Counts:** 3 (3 items, 4 items, 5 items)
**Label Displays:** 3 (Always show, Selected only, No labels)
**States per Item:** 5 (Default, Selected, Hover, Pressed, Disabled)

**Total Configurations:** 3 × 3 = **9 base layouts**

---

## Related Components
- **App Bar:** Alternative for desktop top navigation (CDS component)
- **Drawer:** Alternative for side navigation (CDS component)
- **Tabs:** Alternative for section navigation (CDS component)
- **Badge:** Notification indicators (CDS component)
- **Icon:** Navigation icons

---

## Figma Design Reference
- **Component:** Bottom Navigation
- **Height:** 56px fixed
- **Item Width:** 80-168px
- **Icon Size:** 24px
- **Based on CDS:** Uses all CDS color, spacing, typography, elevation tokens
- **Documentation:** [MUI BottomNavigation API](https://mui.com/api/bottom-navigation)

---

## Migration Notes

### Integration with CDS
- **Height:** 56px (matches CDS mobile app bar)
- **Colors:** Uses CDS primary, action, divider tokens
- **Typography:** Uses CDS caption (12px)
- **Spacing:** Uses CDS 4px grid system
- **Elevation:** Uses CDS level 8 shadow
- **Z-Index:** Uses CDS app bar level (1100)
- **Integration:** Works with CDS Badge component

### Design Tokens Required
- **Color tokens:** Primary, action (active, hover, disabled), divider, background
- **Typography tokens:** Caption (12px, 400/500 weight)
- **Spacing tokens:** 4px, 12px
- **Elevation tokens:** Level 8 shadow
- **Z-index tokens:** 1100 (app bar level)
- **Sizing tokens:** 24px (icons), 56px (height), 80-168px (item width)

---

## Performance Considerations

- Bottom navigation is lightweight
- Fixed positioning uses GPU acceleration
- Minimal JavaScript for state management
- Use React.memo for static configurations
- Avoid heavy icon components
- Optimize badge count updates
- Cache navigation state

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS color, spacing, typography, elevation, z-index systems
- 9+ base layout configurations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Mobile-first design pattern
