# CDS Navigation Documentation

Complete documentation for all CDS navigation components with design tokens, accessibility, and responsive patterns.

## Table of Contents

1. [AppBar](#appbar)
2. [BottomNavigation](#bottomnavigation)
3. [Drawer](#drawer)
4. [Menu](#menu)
5. [Tabs](#tabs)
6. [Pagination](#pagination)
7. [SpeedDial](#speeddial)
8. [TreeView](#treeview)
9. [Stepper](#stepper)

---

# App Bar Component Documentation

## Overview
The App Bar component displays content and actions at the top of the screen. It provides a consistent location for branding, navigation, search, and actions across the application. It can be fixed, static, or sticky, and adapts to different screen sizes.

**Component Type:** Navigation / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 AppBar
**Documentation:** [MUI AppBar API](https://mui.com/api/app-bar)

---

## Design Tokens

### Layout Tokens
```typescript
// Inherits from CDS spacing system
'--component/app-bar/height-mobile': '56px',
'--component/app-bar/height-desktop': '64px',
'--component/app-bar/padding-horizontal': 'var(--spacing/4, 16px)',
'--component/app-bar/padding-vertical': 'var(--spacing/2, 8px)',
'--component/app-bar/min-height': '56px',
```

### Elevation Tokens
```typescript
// Uses CDS elevation system
'--component/app-bar/elevation-default': '4',     // Level 4 shadow
'--component/app-bar/elevation-scrolled': '8',    // Level 8 when scrolled
'--component/app-bar/elevation-none': '0',        // Flat variant
```

### Color Tokens
```typescript
// Primary Variant
'--component/app-bar/primary/bg-color': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/app-bar/primary/text-color': 'var(--color-palatte/primary/contrast-text, #ffffff)',

// Default/Surface Variant
'--component/app-bar/default/bg-color': 'var(--color-palatte/background/paper, #ffffff)',
'--component/app-bar/default/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',

// Transparent Variant
'--component/app-bar/transparent/bg-color': 'transparent',
'--component/app-bar/transparent/text-color': '#ffffff',
'--component/app-bar/transparent/backdrop-filter': 'blur(8px)',
```

### Typography Tokens
```typescript
// Title uses CDS H6 typography
'--component/app-bar/title/font-family': 'var(--typography/base-styles/h6/font-family, "DM_Sans:Medium", sans-serif)',
'--component/app-bar/title/font-size': 'var(--typography/base-styles/h6/font-size, 20px)',
'--component/app-bar/title/font-weight': 'var(--typography/base-styles/h6/font-weight, 500)',
'--component/app-bar/title/line-height': 'var(--typography/base-styles/h6/line-height, 24px)',
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/app-bar/z-index': '1100',  // CDS sticky level
```

---

## Component Anatomy

### Main Container
- **Height:** 56px (mobile), 64px (desktop)
- **Width:** 100% of viewport
- **Position:** Fixed, sticky, or static
- **Elevation:** 4 (default), 0 (flat variant)
- **Background:** Primary color or paper surface

### Content Areas

#### Left Section
- **Menu Button:** IconButton (24×24px icon)
  - Uses CDS IconButton component
  - Opens navigation drawer
  - 48×48px touch target
- **Logo/Brand:** Image or text
  - Typically 32-40px height
  - Left-aligned
  - Clickable (links to home)

#### Center Section
- **Title:** Application or page name
  - Uses CDS H6 typography (20px)
  - Truncates with ellipsis if too long
  - Optional subtitle below
- **Search Bar:** Optional TextField
  - Uses CDS TextField component
  - Expandable or always visible
  - 200-400px width

#### Right Section
- **Action Buttons:** IconButton components
  - Uses CDS IconButton (48×48px)
  - Icons: notifications, settings, help, etc.
  - Badge for notifications (uses CDS Badge)
- **User Avatar:** Avatar component
  - Uses CDS Avatar component
  - Opens user menu on click
  - 32-40px diameter

---

## Position Variants

### Fixed
- **Position:** `position: fixed`
- **Behavior:** Stays at top during scroll
- **Z-Index:** 1100 (CDS sticky level)
- **Use Case:** Primary navigation always accessible
- **Content Offset:** Page content needs top padding (56-64px)

### Static
- **Position:** `position: static`
- **Behavior:** Scrolls with page content
- **Z-Index:** Auto
- **Use Case:** Simple layouts, print-friendly
- **Content Offset:** No padding needed

### Sticky
- **Position:** `position: sticky`
- **Behavior:** Scrolls until top, then sticks
- **Z-Index:** 1100
- **Use Case:** Secondary headers, section navigation
- **Content Offset:** No padding needed

### Absolute
- **Position:** `position: absolute`
- **Behavior:** Positioned relative to parent
- **Z-Index:** Auto or custom
- **Use Case:** Overlay on hero images
- **Content Offset:** Content behind app bar

---

## Color Variants

### Primary
- **Background:** Primary color (`#4b3fff`)
- **Text:** White
- **Icons:** White
- **Use Case:** Brand-forward apps, high visibility
- **Elevation:** 4 (visible shadow)
- **Theme:** Uses CDS primary color tokens

### Default (Paper)
- **Background:** Paper white (`#ffffff`)
- **Text:** Primary text (87% opacity)
- **Icons:** Secondary icon color (54% opacity)
- **Use Case:** Light, minimal aesthetic
- **Elevation:** 4 or 0 (flat)
- **Theme:** Uses CDS background tokens

### Transparent
- **Background:** Transparent or semi-transparent
- **Text:** White (for dark backgrounds)
- **Backdrop Filter:** Optional blur effect
- **Use Case:** Hero sections, overlays
- **Elevation:** 0
- **Theme:** Custom styling

### Secondary
- **Background:** Secondary color
- **Text:** Secondary contrast text
- **Icons:** Secondary contrast
- **Use Case:** Section-specific navigation
- **Elevation:** 4
- **Theme:** Uses CDS secondary color tokens

### Inherit
- **Background:** Inherits from parent
- **Text:** Inherits from context
- **Icons:** Inherits color
- **Use Case:** Flexible theming
- **Elevation:** Configurable
- **Theme:** Contextual

---

## Size Variants

### Mobile (< 600px)
- **Height:** 56px
- **Padding:** 8px 16px (CDS spacing/2, spacing/4)
- **Title Font:** 20px (CDS H6)
- **Icons:** 24×24px
- **Touch Targets:** 48×48px minimum
- **Behavior:** Often fixed position

### Desktop (≥ 600px)
- **Height:** 64px
- **Padding:** 8px 24px (CDS spacing/2, spacing/6)
- **Title Font:** 20px (CDS H6)
- **Icons:** 24×24px
- **Touch Targets:** 48×48px (or 40×40px for mouse)
- **Behavior:** Fixed, static, or sticky

### Dense
- **Height:** 48px
- **Padding:** 4px 16px (CDS spacing/1, spacing/4)
- **Title Font:** 16px (CDS Body1)
- **Use Case:** Compact interfaces, dashboards
- **Spacing:** Reduced gap between elements

---

## Usage Guidelines

### When to Use
- Primary application navigation
- Page-level actions and context
- Branding and identity display
- Global search interface
- User account access
- Notification center access
- Consistent across all pages
- Mobile-first responsive apps

### When NOT to Use
- Within content sections (use Toolbar instead)
- Multiple app bars on same page (confusing)
- For page-specific navigation (use Tabs)
- Dense data tables (takes vertical space)
- Print layouts (hide for printing)

### Best Practices

#### Do
- Keep height consistent across app (56px mobile, 64px desktop)
- Use CDS IconButton component for actions
- Limit actions to 3-5 icons maximum
- Place most important action rightmost
- Use CDS Badge for notifications
- Include accessible labels for icon buttons
- Make logo/title clickable (home link)
- Use CDS elevation tokens (4 or 8)
- Test with long titles (truncate with ellipsis)
- Support keyboard navigation

#### Don't
- Make app bar too tall (> 80px)
- Clutter with too many actions
- Use tiny icons (< 24px)
- Forget mobile touch targets (48px)
- Hide critical navigation in mobile
- Use multiple app bars per page
- Forget to offset content (for fixed app bar)
- Use color-only indicators
- Remove focus indicators
- Make text too small (< 14px)

---

## Component Integration (CDS Base Components)

### Uses CDS IconButton
```typescript
// Menu button
<IconButton
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
  <MenuIcon />
</IconButton>
```

### Uses CDS Avatar
```typescript
// User avatar
<Avatar
  alt="User Name"
  src="/avatar.jpg"
  sx={{ width: 32, height: 32 }}
/>
```

### Uses CDS Badge
```typescript
// Notification icon with badge
<IconButton color="inherit">
  <Badge badgeContent={4} color="error">
    <NotificationsIcon />
  </Badge>
</IconButton>
```

### Uses CDS TextField
```typescript
// Search bar
<TextField
  placeholder="Search…"
  variant="outlined"
  size="small"
  sx={{ bgcolor: 'rgba(255, 255, 255, 0.15)' }}
/>
```

### Uses CDS Button
```typescript
// Action button
<Button
  color="inherit"
  variant="text"
>
  Login
</Button>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<header>
  <nav role="navigation" aria-label="Main navigation">
    <button aria-label="Open navigation menu">
      <MenuIcon />
    </button>
    <h1>App Title</h1>
    <button aria-label="Notifications">
      <NotificationsIcon />
      <span class="badge">4</span>
    </button>
  </nav>
</header>
```

#### ARIA Attributes
```typescript
{
  // App Bar
  role: "banner",              // Top-level header
  "aria-label": "Site header",

  // Navigation within App Bar
  role: "navigation",
  "aria-label": "Main navigation",

  // Icon buttons
  "aria-label": string,        // Descriptive label
  "aria-expanded": boolean,    // For menu buttons
  "aria-haspopup": "menu",     // For dropdown triggers
}
```

#### Keyboard Navigation
- **Tab:** Navigate through interactive elements
- **Enter/Space:** Activate buttons and links
- **Escape:** Close opened menus or search
- **Arrow Keys:** Navigate within menus
- **Focus Visible:** Clear focus indicators (2px outline)

#### Color Contrast
- **Primary Variant:** White text on primary blue (4.5:1+)
- **Default Variant:** 87% black on white (4.5:1+)
- **Icons:** 3:1 minimum contrast
- **Badges:** High contrast (error red with white text)

#### Touch Targets
- **Minimum Size:** 48×48px (CDS standard)
- **Spacing:** 8px gap between targets (CDS spacing/2)
- **Icon Buttons:** 48×48px touch area
- **Menu Button:** 48×48px minimum

#### Screen Reader Support
- App Bar role announced ("banner" or "navigation")
- Icon buttons have descriptive labels
- Badge counts announced ("4 notifications")
- Menu states announced (expanded/collapsed)
- Skip links to main content

---

## Code Examples

### Basic App Bar
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function BasicAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
```

### App Bar with Actions
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';

export default function AppBarWithActions() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="notifications">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton edge="end" color="inherit" aria-label="account">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
```

### App Bar with Search
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function AppBarWithSearch() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
```

### App Bar with Menu
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function AppBarWithMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
```

### Scrolling App Bar (Elevation on Scroll)
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 8 : 4,
  });
}

export default function ElevationAppBar(props: Props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              Scroll to Elevate
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar /> {/* Spacer */}
    </>
  );
}
```

### Hide on Scroll
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              Scroll to Hide
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Spacer */}
    </>
  );
}
```

### Dense App Bar
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Compact App Bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
```

### Transparent App Bar
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TransparentAppBar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Transparent Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
```

---

## Common Patterns

### Standard Dashboard Header
```tsx
<AppBar position="fixed">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
    <IconButton color="inherit"><SearchIcon /></IconButton>
    <IconButton color="inherit">
      <Badge badgeContent={4} color="error"><NotificationsIcon /></Badge>
    </IconButton>
    <Avatar alt="User" src="/avatar.jpg" />
  </Toolbar>
</AppBar>
```

### Marketing Site Header
```tsx
<AppBar position="static" color="default" elevation={0}>
  <Toolbar>
    <img src="/logo.png" alt="Logo" height="40" />
    <Box sx={{ flexGrow: 1 }} />
    <Button color="inherit">Features</Button>
    <Button color="inherit">Pricing</Button>
    <Button color="inherit">About</Button>
    <Button variant="contained">Sign Up</Button>
  </Toolbar>
</AppBar>
```

### Mobile App Header
```tsx
<AppBar position="fixed">
  <Toolbar>
    <IconButton edge="start" color="inherit">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>Title</Typography>
    <IconButton color="inherit">
      <MoreVertIcon />
    </IconButton>
  </Toolbar>
</AppBar>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Height:** 56px (CDS mobile standard)
- **Padding:** 8px 16px (CDS spacing/2, spacing/4)
- **Actions:** Limit to 2-3 icons
- **Title:** Truncate long text
- **Search:** Expandable or separate page
- **Position:** Usually fixed
- **Menu Button:** Always visible (left edge)

### Tablet (600px - 960px)
- **Height:** 64px (CDS desktop standard)
- **Padding:** 8px 24px (CDS spacing/2, spacing/6)
- **Actions:** 3-5 icons acceptable
- **Title:** More space for text
- **Search:** Inline search bar
- **Position:** Fixed or sticky

### Desktop (> 960px)
- **Height:** 64px
- **Padding:** 8px 32px (CDS spacing/2, spacing/8)
- **Actions:** Full set of icons
- **Title:** Full text visible
- **Search:** Always visible inline
- **Position:** Fixed, sticky, or static
- **Hover States:** Functional

---

## CDS Token Integration

### Uses CDS Spacing System
```typescript
padding: var(--spacing/4, 16px);           // 16px horizontal
padding: var(--spacing/2, 8px);            // 8px vertical
margin-right: var(--spacing/2, 8px);       // Icon spacing
gap: var(--spacing/2, 8px);                // Element gaps
```

### Uses CDS Color Tokens
```typescript
background: var(--color-palatte/primary/main, #4b3fff);
color: var(--color-palatte/primary/contrast-text, #ffffff);
background: var(--color-palatte/background/paper, #ffffff);
color: var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87));
```

### Uses CDS Typography
```typescript
font-family: var(--typography/base-styles/h6/font-family);
font-size: var(--typography/base-styles/h6/font-size, 20px);
font-weight: var(--typography/base-styles/h6/font-weight, 500);
line-height: var(--typography/base-styles/h6/line-height, 24px);
```

### Uses CDS Elevation
```typescript
box-shadow: var(--elevation/level-4);      // Default elevation
box-shadow: var(--elevation/level-8);      // Scrolled elevation
box-shadow: none;                          // Flat variant
```

### Uses CDS Sizing
```typescript
height: var(--sizing/app-bar/mobile, 56px);
height: var(--sizing/app-bar/desktop, 64px);
min-height: var(--sizing/touch-target, 48px);  // Touch targets
```

---

## Total Variant Combinations

**Positions:** 4 (Fixed, Static, Sticky, Absolute)
**Colors:** 5 (Primary, Default, Transparent, Secondary, Inherit)
**Sizes:** 3 (Mobile 56px, Desktop 64px, Dense 48px)
**Elevation:** 3 (0, 4, 8)
**Scroll Behaviors:** 3 (Normal, Elevate on scroll, Hide on scroll)

**Total Combinations:** 4 × 5 × 3 = **60+ configurations**

---

## Related Components
- **Toolbar:** Content container within App Bar
- **Navigation (Sidenav):** Opens from menu button
- **Tabs:** Often placed within App Bar
- **Breadcrumbs:** Can be placed below title
- **IconButton:** Action buttons (CDS component)
- **Badge:** Notification indicators (CDS component)
- **Avatar:** User profile (CDS component)
- **Menu:** Dropdown menus from actions
- **Drawer:** Side navigation panel

---

## Figma Design Reference
- **Component:** App Bar / Toolbar
- **Heights:** 56px (mobile), 64px (desktop), 48px (dense)
- **Based on CDS:** Uses all CDS tokens and base components
- **Documentation:** [MUI AppBar API](https://mui.com/api/app-bar)

---

## Migration Notes

### Integration with CDS
- **Heights:** 56px mobile, 64px desktop (matches CDS standards)
- **Colors:** Uses CDS primary, background, and text tokens
- **Typography:** Uses CDS H6 for titles
- **Spacing:** Uses CDS 4px grid system (spacing/2, spacing/4, spacing/6)
- **Elevation:** Uses CDS elevation levels (4, 8)
- **Z-Index:** Uses CDS sticky level (1100)
- **Components:** Integrates CDS IconButton, Avatar, Badge, TextField, Button

### Design Tokens Required
- **Color tokens:** Primary, background, text colors
- **Typography tokens:** H6 (20px, 500 weight)
- **Spacing tokens:** 8px, 16px, 24px, 32px
- **Sizing tokens:** 56px, 64px, 48px heights
- **Elevation tokens:** Level 4, Level 8 shadows
- **Z-index tokens:** 1100 (sticky level)

---

## Performance Considerations

- Fixed App Bar adds to layout thrashing (use transform for animations)
- Minimize re-renders with React.memo on Toolbar children
- Debounce scroll event handlers (elevation on scroll)
- Use CSS transforms for hide/show animations
- Lazy load user menu content
- Optimize logo/image assets
- Avoid heavy components in App Bar (keeps UI responsive)
- Cache search results
- Use portal for dropdown menus (better performance)

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS base components (IconButton, Avatar, Badge, TextField, Button)
- 60+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Responsive behavior for mobile, tablet, desktop


---


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


---


# Drawer Component Documentation

## Overview
The Drawer component is a panel that slides in from the edge of the screen. It's commonly used for navigation menus, filters, settings panels, and contextual actions. Drawers can be temporary (overlay) or permanent (always visible), and can slide from any edge of the screen.

**Component Type:** Navigation / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Drawer
**Documentation:** [MUI Drawer API](https://mui.com/api/drawer)

---

## Design Tokens

### Layout Tokens
```typescript
// Uses CDS spacing and sizing systems
'--component/drawer/width-mobile': '280px',
'--component/drawer/width-desktop': '320px',
'--component/drawer/width-mini': '64px',
'--component/drawer/padding': 'var(--spacing/4, 16px)',
'--component/drawer/header-height': '64px',
```

### Elevation Tokens
```typescript
// Uses CDS elevation system
'--component/drawer/elevation': '16',        // High elevation for temporary
'--component/drawer/permanent-elevation': '0', // No shadow for permanent
```

### Color Tokens
```typescript
// Uses CDS color tokens
'--component/drawer/bg-color': 'var(--color-palatte/background/paper, #ffffff)',
'--component/drawer/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/drawer/border-color': 'var(--color-palatte/divider, rgba(0, 0, 0, 0.12))',
'--component/drawer/backdrop-color': 'rgba(0, 0, 0, 0.5)',
```

### Animation Tokens
```typescript
// Uses CDS transition system
'--component/drawer/transition-duration-enter': 'var(--transition/duration/entering, 225ms)',
'--component/drawer/transition-duration-exit': 'var(--transition/duration/leaving, 195ms)',
'--component/drawer/transition-easing-enter': 'var(--transition/easing/ease-out, cubic-bezier(0, 0, 0.2, 1))',
'--component/drawer/transition-easing-exit': 'var(--transition/easing/ease-in, cubic-bezier(0.4, 0, 1, 1))',
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/drawer/z-index': '1200',        // CDS drawer level
'--component/drawer/backdrop-z-index': '1199',
```

---

## Component Anatomy

### Main Container
- **Width:** 280px (mobile), 320px (desktop), 64px (mini)
- **Height:** 100vh
- **Position:** Fixed or absolute
- **Background:** Paper color (white)
- **Elevation:** 16 (temporary), 0 (permanent)

### Content Sections

#### Header (Optional)
- **Height:** 64px (matches CDS App Bar height)
- **Content:** Logo, title, close button
- **Padding:** 16px (CDS spacing/4)
- **Uses:** CDS IconButton for close action
- **Border:** Bottom border (divider color)

#### Navigation List
- **Component:** Uses CDS List component
- **Items:** ListItem, ListItemButton, ListItemIcon, ListItemText
- **Height:** 48px per item (CDS standard)
- **Padding:** 16px horizontal (CDS spacing/4)
- **States:** Default, hover, active, selected

#### Footer (Optional)
- **Position:** Bottom of drawer
- **Content:** Settings, help, user profile
- **Padding:** 16px (CDS spacing/4)
- **Border:** Top border (divider color)

### Backdrop
- **Color:** Black with 50% opacity
- **Click:** Closes temporary drawer
- **Z-Index:** 1199 (below drawer)
- **Transition:** Fade in/out (225ms)

---

## Variant Types

### Temporary
- **Behavior:** Overlays content, closes on backdrop click
- **Elevation:** 16 (high shadow)
- **Backdrop:** Visible (darkens background)
- **Close:** Click outside, Escape key, or explicit close
- **Use Case:** Mobile navigation, filters
- **Modal:** Blocks interaction with main content
- **Z-Index:** 1200 (CDS drawer level)

### Permanent
- **Behavior:** Always visible, part of layout
- **Elevation:** 0 (no shadow)
- **Backdrop:** None
- **Close:** Cannot be closed
- **Use Case:** Desktop primary navigation
- **Modal:** No, doesn't block content
- **Layout:** Content offset by drawer width

### Persistent
- **Behavior:** Toggleable, pushes content when open
- **Elevation:** 0 (no shadow)
- **Backdrop:** None
- **Close:** Explicit close button only
- **Use Case:** App-level navigation that can be hidden
- **Modal:** No, doesn't block content
- **Layout:** Content animates to accommodate drawer

---

## Anchor Positions

### Left (Default)
- **Direction:** Slides from left edge
- **Use Case:** Primary navigation (LTR languages)
- **Common:** Most widely used
- **Mobile:** Standard mobile menu
- **Desktop:** Primary sidebar

### Right
- **Direction:** Slides from right edge
- **Use Case:** Secondary actions, filters, details panel
- **Common:** Settings, filters, chat panels
- **Mobile:** Secondary actions
- **Desktop:** Contextual panels

### Top
- **Direction:** Slides from top edge
- **Use Case:** Notifications, alerts, filters
- **Common:** Less common than left/right
- **Mobile:** Filter panels
- **Desktop:** Notification center

### Bottom
- **Direction:** Slides from bottom edge
- **Use Case:** Mobile actions, sheets
- **Common:** Mobile bottom sheets
- **Mobile:** Action sheets, share dialogs
- **Desktop:** Rare, use modals instead

---

## Size Variants

### Standard
- **Mobile:** 280px width
- **Desktop:** 320px width
- **Use Case:** Primary navigation with icons and text
- **Content:** Full navigation with labels
- **Padding:** 16px (CDS spacing/4)

### Mini (Collapsed)
- **Width:** 64px
- **Use Case:** Icon-only navigation (expandable)
- **Content:** Icons only, labels on hover
- **Padding:** 8px (CDS spacing/2)
- **Expansion:** Hover to expand, or click to toggle

### Wide
- **Width:** 400-480px
- **Use Case:** Detailed panels, filters, settings
- **Content:** Forms, complex filters, multi-column
- **Padding:** 24px (CDS spacing/6)

### Full Width (Mobile)
- **Width:** 100vw
- **Use Case:** Mobile full-screen navigation
- **Content:** Full navigation menu
- **Padding:** 16px (CDS spacing/4)

---

## Usage Guidelines

### When to Use
- Primary app navigation
- Mobile menu (hamburger icon)
- Filter panels for data tables
- Settings and preferences
- Shopping cart sidebars
- Chat or message panels
- Notification center
- User profile details
- Multi-step wizards (side panel)

### When NOT to Use
- Simple actions (use Menu instead)
- Modal confirmations (use Dialog)
- Very short lists (< 5 items, use Menu)
- Inline editing (use inline forms)
- Always visible on desktop (use permanent instead)
- Content hierarchy > 2 levels (use TreeView)

### Best Practices

#### Do
- Use CDS List component for navigation items
- Match header height to App Bar (64px)
- Include close button for temporary drawers
- Use CDS IconButton for actions
- Support Escape key to close
- Show active/selected state clearly
- Use CDS spacing tokens (4px grid)
- Make clickable areas large (48px height)
- Test with keyboard navigation
- Use permanent drawer on desktop (when appropriate)

#### Don't
- Make drawer too wide (> 480px on desktop)
- Forget close mechanism for temporary
- Use tiny touch targets (< 48px)
- Nest drawers within drawers
- Block all actions on temporary drawer
- Forget backdrop for temporary
- Use drawer for critical instant actions
- Make permanent drawer on small mobile screens
- Forget to offset content (permanent drawer)
- Use multiple drawers simultaneously

---

## Component Integration (CDS Base Components)

### Uses CDS List Components
```typescript
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

<List>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon><InboxIcon /></ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
  </ListItem>
</List>
```

### Uses CDS IconButton
```typescript
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

<IconButton onClick={handleClose} aria-label="close drawer">
  <CloseIcon />
</IconButton>
```

### Uses CDS Divider
```typescript
import Divider from '@mui/material/Divider';

<Divider />  // Separates sections
```

### Uses CDS Avatar
```typescript
import Avatar from '@mui/material/Avatar';

<Avatar alt="User Name" src="/avatar.jpg" />
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<aside role="navigation" aria-label="Main navigation">
  <button aria-label="Close navigation drawer">
    <CloseIcon />
  </button>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</aside>
```

#### ARIA Attributes
```typescript
{
  // Drawer
  role: "navigation",
  "aria-label": "Main navigation drawer",
  "aria-hidden": boolean,      // When closed

  // Close button
  "aria-label": "Close drawer",

  // Backdrop (temporary only)
  "aria-hidden": "true",       // Not read by screen readers
}
```

#### Keyboard Navigation
- **Escape:** Close temporary drawer
- **Tab:** Navigate through items
- **Shift+Tab:** Navigate backward
- **Enter/Space:** Activate item
- **Arrow Keys:** Navigate list items (optional)
- **Focus Trap:** Focus stays in drawer (temporary)
- **Initial Focus:** First focusable element

#### Focus Management
- **Open:** Focus moves to drawer
- **Close:** Focus returns to trigger element
- **Trap:** Focus trapped in temporary drawer
- **Visible:** Clear focus indicators (2px outline)

#### Color Contrast
- **Text:** 4.5:1 minimum (87% black on white)
- **Icons:** 3:1 minimum contrast
- **Selected Item:** 3:1 minimum contrast change
- **Dividers:** 3:1 minimum against background

#### Touch Targets
- **List Items:** 48×48px minimum (CDS standard)
- **Close Button:** 48×48px minimum
- **Spacing:** 8px gap between items (CDS spacing/2)

#### Screen Reader Support
- Drawer purpose announced ("navigation")
- Open/close state announced
- Navigation items read properly
- Selected/active state announced
- Close button purpose clear

---

## Code Examples

### Temporary Drawer
```tsx
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List sx={{ width: 280 }}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
```

### Permanent Drawer
```tsx
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const drawerWidth = 240;

export default function PermanentDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <List>
          {['Dashboard', 'Products', 'Orders', 'Customers'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Spacer for AppBar */}
        <Typography>Main Content</Typography>
      </Box>
    </Box>
  );
}
```

### Persistent Drawer
```tsx
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

const drawerWidth = 240;

export default function PersistentDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Persistent Drawer</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {/* Navigation items */}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar />
        <Typography>Main Content</Typography>
      </Box>
    </Box>
  );
}
```

### Mini Drawer (Collapsible)
```tsx
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
```

### Drawer with Header and Footer
```tsx
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';

export default function DrawerWithHeaderFooter() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      {/* Header */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">Navigation</Typography>
        <IconButton onClick={() => setOpen(false)} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      {/* Navigation */}
      <List sx={{ flexGrow: 1 }}>
        {/* Nav items */}
      </List>

      {/* Footer */}
      <Divider />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar alt="User Name" src="/avatar.jpg" />
        <Box>
          <Typography variant="body2">John Doe</Typography>
          <Typography variant="caption" color="text.secondary">
            john@example.com
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
```

### Responsive Drawer
```tsx
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawer = (
    <List>
      {/* Navigation items */}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile: Temporary drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: 280 } }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Desktop: Permanent drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{ '& .MuiDrawer-paper': { width: 240 } }}
          open
        >
          {drawer}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography>Content</Typography>
      </Box>
    </Box>
  );
}
```

---

## Common Patterns

### App Navigation Drawer
```tsx
<Drawer anchor="left" open={open} onClose={handleClose}>
  <List sx={{ width: 280 }}>
    <ListItemButton selected><ListItemText primary="Dashboard" /></ListItemButton>
    <ListItemButton><ListItemText primary="Products" /></ListItemButton>
    <ListItemButton><ListItemText primary="Orders" /></ListItemButton>
    <Divider />
    <ListItemButton><ListItemText primary="Settings" /></ListItemButton>
  </List>
</Drawer>
```

### Filter Drawer (Right)
```tsx
<Drawer anchor="right" open={filtersOpen} onClose={closeFilters}>
  <Box sx={{ width: 320, p: 3 }}>
    <Typography variant="h6">Filters</Typography>
    <Divider sx={{ my: 2 }} />
    {/* Filter controls */}
  </Box>
</Drawer>
```

### Shopping Cart Drawer
```tsx
<Drawer anchor="right" open={cartOpen} onClose={closeCart}>
  <Box sx={{ width: 400, p: 2 }}>
    <Typography variant="h6">Shopping Cart</Typography>
    {/* Cart items */}
    <Button variant="contained" fullWidth>Checkout</Button>
  </Box>
</Drawer>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Variant:** Temporary (overlay)
- **Width:** 280px or 100vw (full screen)
- **Trigger:** Hamburger menu icon
- **Close:** Backdrop click, Escape, or close button
- **Position:** Usually left anchor
- **Elevation:** 16 (high shadow)

### Tablet (600px - 960px)
- **Variant:** Temporary or permanent
- **Width:** 280-320px
- **Behavior:** Can be permanent or toggleable
- **Position:** Left anchor

### Desktop (> 960px)
- **Variant:** Permanent or persistent
- **Width:** 240-320px (standard), 64px (mini)
- **Behavior:** Always visible or collapsible
- **Position:** Left for primary nav, right for panels
- **Elevation:** 0 (part of layout)

---

## CDS Token Integration

### Uses CDS Spacing
```typescript
padding: var(--spacing/4, 16px);
padding: var(--spacing/6, 24px);   // Wide drawer
margin: var(--spacing/2, 8px);
```

### Uses CDS Colors
```typescript
background: var(--color-palatte/background/paper, #ffffff);
color: var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87));
border-color: var(--color-palatte/divider, rgba(0, 0, 0, 0.12));
```

### Uses CDS Elevation
```typescript
box-shadow: var(--elevation/level-16);  // Temporary drawer
box-shadow: none;                       // Permanent drawer
```

### Uses CDS Transitions
```typescript
transition-duration: var(--transition/duration/entering, 225ms);
transition-duration: var(--transition/duration/leaving, 195ms);
transition-timing-function: var(--transition/easing/ease-out);
```

---

## Total Variant Combinations

**Variants:** 3 (Temporary, Permanent, Persistent)
**Anchors:** 4 (Left, Right, Top, Bottom)
**Sizes:** 4 (Standard, Mini, Wide, Full)

**Total Combinations:** 3 × 4 × 4 = **48+ configurations**

---

## Related Components
- **App Bar:** Often used together for navigation
- **List:** Contains navigation items (CDS component)
- **IconButton:** Close and toggle buttons (CDS component)
- **Divider:** Separates sections (CDS component)
- **Avatar:** User profile in footer (CDS component)
- **Backdrop:** Dark overlay for temporary drawer
- **Menu:** Alternative for simple lists

---

## Figma Design Reference
- **Component:** Drawer / Side Panel
- **Widths:** 280px (mobile), 320px (desktop), 64px (mini)
- **Based on CDS:** Uses all CDS tokens and base components
- **Documentation:** [MUI Drawer API](https://mui.com/api/drawer)

---

## Migration Notes

### Integration with CDS
- **Widths:** 280px mobile, 320px desktop, 64px mini
- **Colors:** Uses CDS paper, text, and divider tokens
- **Spacing:** Uses CDS 4px grid system
- **Elevation:** Uses CDS elevation levels (16 for temporary)
- **Z-Index:** Uses CDS drawer level (1200)
- **Transitions:** Uses CDS animation tokens (225ms enter, 195ms exit)
- **Components:** Integrates CDS List, IconButton, Avatar, Divider

### Design Tokens Required
- **Color tokens:** Background paper, text, divider
- **Spacing tokens:** 8px, 16px, 24px
- **Sizing tokens:** 280px, 320px, 64px widths
- **Elevation tokens:** Level 16 shadow
- **Z-index tokens:** 1200 (drawer level)
- **Transition tokens:** 225ms, 195ms durations

---

## Performance Considerations

- Keep drawer content lightweight
- Lazy load drawer content on first open
- Use React.memo for static list items
- Avoid heavy animations on mobile
- Use `keepMounted` prop for better UX (mobile)
- Optimize list rendering for long menus
- Cache drawer state in localStorage
- Debounce rapid open/close actions

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS base components (List, IconButton, Avatar, Divider)
- 48+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)


---


# Menu Component Documentation

## Overview
The Menu component displays a list of choices on temporary surfaces. It consists of three sub-components: MenuItem (individual items), MenuList (container for items), and Menu (the complete overlay). Menus appear upon interaction with buttons, actions, or other controls.

**Component Type:** Navigation / Overlay Component
**Based on:** Material-UI (MUI) v6.1.0 Menu, MenuItem, MenuList
**Documentation:** [MUI Menu API](https://mui.com/api/menu) | [MUI MenuItem API](https://mui.com/api/menu-item)

---

## Design Tokens

### MenuItem Tokens
```typescript
// Default MenuItem (Non-Dense)
'--component/menu-item/default/font-family': 'var(--typography/menu-item/default/font-family, "DM_Sans:Regular", sans-serif)',
'--component/menu-item/default/font-size': '16px',
'--component/menu-item/default/font-weight': '400',
'--component/menu-item/default/line-height': '24px',
'--component/menu-item/default/letter-spacing': '0.15px',
'--component/menu-item/default/padding': '6px 16px',
'--component/menu-item/default/gap': '12px',

// Dense MenuItem
'--component/menu-item/dense/font-family': 'var(--typography/menu-item/dense/font-family, "DM_Sans:Regular", sans-serif)',
'--component/menu-item/dense/font-size': '14px',
'--component/menu-item/dense/font-weight': '400',
'--component/menu-item/dense/line-height': '20px',
'--component/menu-item/dense/letter-spacing': '0.15px',
'--component/menu-item/dense/padding': '4px 16px',

// Small Screen MenuItem
'--component/menu-item/small-screen/padding': '12px 16px',
```

### MenuItem State Tokens
```typescript
// Enabled
'--component/menu-item/enabled/bg-color': 'transparent',
'--component/menu-item/enabled/text-color': 'rgba(0, 0, 0, 0.87)',

// Hovered
'--component/menu-item/hovered/bg-color': 'rgba(0, 0, 0, 0.04)',
'--component/menu-item/hovered/text-color': 'rgba(0, 0, 0, 0.87)',

// Selected
'--component/menu-item/selected/bg-color': 'rgba(75, 63, 255, 0.04)',
'--component/menu-item/selected/text-color': 'rgba(0, 0, 0, 0.87)',

// Disabled
'--component/menu-item/disabled/bg-color': 'transparent',
'--component/menu-item/disabled/text-color': 'rgba(0, 0, 0, 0.38)',
'--component/menu-item/disabled/cursor': 'default',
```

### MenuList Tokens
```typescript
'--component/menu-list/padding': '8px 0',
'--component/menu-list/min-width': '148px',
```

### Menu Tokens
```typescript
'--component/menu/border-radius': '4px',
'--component/menu/elevation': '8',
'--component/menu/bg-color': '#ffffff',
'--component/menu/max-height': '180px', // When maxHeight enabled
'--component/menu/min-width': '220px', // When autoWidth disabled
'--component/menu/shadow': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
```

### Icon & Divider Tokens
```typescript
'--component/menu-item/icon-size': '24px',
'--component/menu-item/icon-margin': '12px',
'--component/menu-item/divider-height': '1px',
'--component/menu-item/divider-color': 'rgba(0, 0, 0, 0.12)',
```

---

## Component Hierarchy

### 1. Menu (Root Component)
- **Purpose:** Complete menu overlay with Paper wrapper
- **Features:** Elevation shadow, border radius, max height control
- **Positioning:** Absolute/fixed relative to anchor element
- **Properties:** autoWidth, maxHeight

### 2. MenuList (Container)
- **Purpose:** Container for menu items
- **Features:** Vertical padding, keyboard navigation
- **Properties:** dense, disableGutters, autoWidth

### 3. MenuItem (Individual Items)
- **Purpose:** Individual selectable menu option
- **Features:** Icons, text, states, keyboard interaction
- **Properties:** dense, disabled, selected, divider, description

---

## MenuItem Variants

### Default MenuItem
- **Font Size:** 16px
- **Line Height:** 24px
- **Padding:** 6px 16px (vertical, horizontal)
- **Min Height:** 36px
- **Use Case:** Standard desktop menus, primary navigation

### Dense MenuItem
- **Font Size:** 14px
- **Line Height:** 20px
- **Padding:** 4px 16px
- **Min Height:** 32px
- **Use Case:** Compact UIs, sidebars, toolbars

### Small Screen MenuItem
- **Font Size:** 16px
- **Line Height:** 24px
- **Padding:** 12px 16px
- **Min Height:** 48px (adequate touch target)
- **Use Case:** Mobile devices, touch interfaces

### Disabled Gutters MenuItem
- **Padding:** 6px 0px (no horizontal padding)
- **Use Case:** Full-width clickable areas, nested menus

---

## MenuItem States

### Enabled (Default)
- **Background:** Transparent
- **Text Color:** Primary text (87% opacity black)
- **Cursor:** pointer
- **Visual:** Standard appearance
- **Interaction:** Clickable, hoverable

### Hovered
- **Background:** `rgba(0, 0, 0, 0.04)` (4% black overlay)
- **Text Color:** Primary text (maintained)
- **Cursor:** pointer
- **Transition:** 150ms ease-in-out
- **Visual:** Subtle gray background on hover

### Selected
- **Background:** `rgba(75, 63, 255, 0.04)` (4% primary color)
- **Text Color:** Primary text (maintained)
- **Visual:** Light primary color tint
- **Use Case:** Currently selected/active menu item

### Disabled
- **Background:** Transparent
- **Text Color:** `rgba(0, 0, 0, 0.38)` (38% opacity)
- **Cursor:** default (not-allowed)
- **Interaction:** Non-clickable, non-hoverable
- **Visual:** Grayed out appearance

---

## MenuItem Content Options

### Icon + Text (Default)
- **Structure:** [Icon (24×24px)] [Gap: 12px] [Text]
- **Icon Position:** Left-aligned
- **Use Case:** Standard menu items with visual indicators

### Text Only
- **Structure:** [Text]
- **Icon:** Hidden/removed
- **Use Case:** Simple text-based menus

### Icon + Text + Secondary Text
- **Structure:** [Icon] [Gap] [Text] [Secondary Text/Shortcut]
- **Secondary:** Right-aligned caption text (e.g., "⌘C")
- **Use Case:** Menus with keyboard shortcuts

### With Description
- **Structure:** [Icon] [Gap] [Text + Description (stacked)]
- **Description:** Caption text below main text
- **Use Case:** Detailed menu options requiring explanation

### With Divider
- **Visual:** 1px horizontal line below menu item
- **Color:** `rgba(0, 0, 0, 0.12)`
- **Use Case:** Separating menu item groups

---

## Menu Configuration

### Auto Width (true)
- **Behavior:** Menu width adjusts to content
- **Min Width:** Based on longest menu item
- **Use Case:** Dynamic content, varying text lengths

### Auto Width (false)
- **Behavior:** Fixed width menu
- **Width:** 220px (default)
- **Use Case:** Consistent menu width, alignment

### Max Height (true)
- **Behavior:** Menu scrolls when exceeding max height
- **Max Height:** 180px
- **Scrollbar:** Visible when needed
- **Use Case:** Long menu lists, limited screen space

### Max Height (false)
- **Behavior:** Menu expands to fit all items
- **Height:** Auto-calculated
- **Use Case:** Short menus (< 5-6 items)

---

## MenuList Configuration

### Dense (true)
- **Item Height:** 32px (reduced from 36px)
- **Padding:** 4px 16px (reduced from 6px)
- **Use Case:** Compact interfaces, fitting more items

### Dense (false)
- **Item Height:** 36px (standard)
- **Padding:** 6px 16px
- **Use Case:** Standard comfort, better readability

### Disable Gutters (true)
- **Padding:** 0px horizontal (removes 16px)
- **Use Case:** Full-width items, edge-to-edge clickable

### Disable Gutters (false)
- **Padding:** 16px horizontal (standard)
- **Use Case:** Standard inset appearance

---

## Usage Guidelines

### When to Use
- Context menus (right-click)
- Dropdown actions from buttons
- Navigation options
- Settings and preferences
- File operations (Open, Save, Delete)
- Overflow actions (three-dot menus)
- Select/choice menus
- Command palettes

### When NOT to Use
- Persistent navigation (use NavigationBar)
- Form selections with many options (use Select/Autocomplete)
- Binary choices (use Switch/Toggle)
- Single action (use Button)
- Always-visible options (use ButtonGroup)

### Best Practices

#### Do
- Group related items together
- Use dividers to separate groups
- Provide keyboard shortcuts for common actions
- Include icons for visual recognition
- Disable unavailable actions (don't hide)
- Keep menu items concise (1-3 words)
- Position menus near trigger element
- Close menu after item selection
- Support keyboard navigation (Arrow keys, Enter, Esc)
- Use dense variant for compact UIs

#### Don't
- Create overly long menus (> 10 items without scrolling)
- Use menus for complex forms
- Nest menus more than 2 levels deep
- Mix different item heights inconsistently
- Forget touch targets on mobile (48px minimum)
- Use disabled items excessively (consider hiding)
- Place destructive actions without confirmation
- Use menus for primary navigation

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div role="menu" aria-label="Actions menu">
  <div role="menuitem" tabindex="0">
    Menu Item 1
  </div>
  <div role="menuitem" tabindex="0">
    Menu Item 2
  </div>
  <div role="menuitem" aria-disabled="true">
    Disabled Item
  </div>
</div>
```

#### ARIA Attributes
```typescript
{
  role: "menu",                  // For menu container
  role: "menuitem",              // For menu items
  "aria-label": string,          // Menu description
  "aria-disabled": boolean,      // Disabled items
  "aria-haspopup": "menu",       // For trigger button
  "aria-expanded": boolean,      // Menu open/closed state
  tabindex: 0,                   // Focusable items
  tabindex: -1,                  // Disabled items
}
```

#### Keyboard Navigation
- **Arrow Down:** Focus next menu item
- **Arrow Up:** Focus previous menu item
- **Home:** Focus first menu item
- **End:** Focus last menu item
- **Enter/Space:** Activate focused menu item
- **Escape:** Close menu
- **Tab:** Close menu and move focus to next element
- **Alphanumeric:** Type-ahead search (jump to matching item)

#### Focus Management
- Focus moves to first menu item when menu opens
- Focus returns to trigger element when menu closes
- Focus is trapped within menu while open
- Visible focus indicator on focused item
- Skip disabled items during keyboard navigation

#### Color Contrast
- **Enabled Items:** 4.5:1 minimum text contrast
- **Hovered Items:** 3:1 minimum state change
- **Selected Items:** 3:1 minimum against background
- **Disabled Items:** Exempt from contrast requirements
- **Icons:** 3:1 minimum against background

#### Touch Targets
- **Desktop:** 36px minimum (default MenuItem)
- **Mobile:** 48px minimum (small screen MenuItem)
- **Dense:** 32px minimum (desktop only, not recommended for touch)

#### Screen Reader Support
- Menu purpose announced (via aria-label)
- Item count announced ("3 of 10 items")
- Disabled items announced ("unavailable" or "disabled")
- Keyboard shortcuts announced
- Menu state changes announced (opened/closed)

---

## Code Examples

### Basic Menu
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
```

### Menu with Icons
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function IconMenu() {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );
}
```

### Dense Menu
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DenseMenu() {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          style: {
            maxHeight: 48 * 4.5,
          },
        },
      }}
    >
      <MenuItem dense onClick={handleClose}>Item 1</MenuItem>
      <MenuItem dense onClick={handleClose}>Item 2</MenuItem>
      <MenuItem dense onClick={handleClose}>Item 3</MenuItem>
    </Menu>
  );
}
```

### Menu with Dividers
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function DividerMenu() {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>New File</MenuItem>
      <MenuItem onClick={handleClose}>Open File</MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>Save</MenuItem>
      <MenuItem onClick={handleClose}>Save As...</MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>Exit</MenuItem>
    </Menu>
  );
}
```

### Disabled Menu Items
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DisabledMenu() {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Cut</MenuItem>
      <MenuItem onClick={handleClose}>Copy</MenuItem>
      <MenuItem disabled>Paste (Clipboard Empty)</MenuItem>
      <MenuItem onClick={handleClose}>Select All</MenuItem>
    </Menu>
  );
}
```

### Max Height Menu with Scroll
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ScrollableMenu() {
  const options = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: 180,
          width: '20ch',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
}
```

### Context Menu (Right-Click)
```tsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function ContextMenu() {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      <p>Right-click here to open menu</p>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
      </Menu>
    </div>
  );
}
```

---

## Common Patterns

### File Menu
```tsx
<Menu>
  <MenuItem>New</MenuItem>
  <MenuItem>Open...</MenuItem>
  <Divider />
  <MenuItem>Save</MenuItem>
  <MenuItem>Save As...</MenuItem>
  <Divider />
  <MenuItem>Print</MenuItem>
  <Divider />
  <MenuItem>Exit</MenuItem>
</Menu>
```

### Edit Menu
```tsx
<Menu>
  <MenuItem>Undo</MenuItem>
  <MenuItem>Redo</MenuItem>
  <Divider />
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
  <Divider />
  <MenuItem>Select All</MenuItem>
</Menu>
```

### User Account Menu
```tsx
<Menu>
  <MenuItem>
    <ListItemIcon><PersonIcon /></ListItemIcon>
    <ListItemText>Profile</ListItemText>
  </MenuItem>
  <MenuItem>
    <ListItemIcon><SettingsIcon /></ListItemIcon>
    <ListItemText>Settings</ListItemText>
  </MenuItem>
  <Divider />
  <MenuItem>
    <ListItemIcon><LogoutIcon /></ListItemIcon>
    <ListItemText>Logout</ListItemText>
  </MenuItem>
</Menu>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use small screen MenuItem (48px height)
- Adequate touch targets (48×48px minimum)
- Consider bottom sheet instead of dropdown
- Reduce max menu items (5-7 visible)
- Full-width menus when appropriate
- Larger text for readability

### Tablet (600px - 960px)
- Standard or small screen MenuItem
- Touch targets 44-48px
- Standard menu positioning
- Max height scrolling acceptable

### Desktop (> 960px)
- Standard MenuItem (36px height)
- Dense MenuItem acceptable (32px)
- Hover states functional
- Keyboard navigation optimal
- Context menus supported

---

## Total Variant Combinations

**MenuItem Variants:**
- 3 size modes (Default, Dense, Small Screen)
- 4 states (Enabled, Hovered, Selected, Disabled)
- 2 gutter modes (With gutters, Without gutters)
- 2 icon configs (With icon, Without icon)
- 2 divider states (With, Without)

**MenuList Variants:**
- 2 width modes (Auto width, Fixed width)
- 2 dense modes (Dense, Standard)
- 2 screen modes (Desktop, Small screen)
- 2 gutter modes (With, Without)

**Menu Variants:**
- 2 width modes (Auto width, Fixed width)
- 2 height modes (Max height enabled, Disabled)

**Total Base Combinations:** 100+ when considering all permutations

---

## Related Components
- **Select:** Form input with menu-like dropdown
- **Autocomplete:** Searchable menu with filtering
- **Popover:** Generic positioned overlay
- **Drawer:** Side panel navigation
- **Dialog:** Modal overlay for complex interactions

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11051:148490
- **Components:** `<Menu>`, `<MenuList>`, `<MenuItem>`
- **Documentation:** [MUI Menu API](https://mui.com/api/menu) | [MUI MenuItem API](https://mui.com/api/menu-item)

---

## Migration Notes

### From Previous Design System
- MenuItem heights standardized (36px default, 32px dense, 48px mobile)
- Padding unified (6px/4px vertical, 16px horizontal)
- Font sizes aligned (16px default, 14px dense)
- Hover state uses 4% opacity black
- Selected state uses 4% opacity primary color
- Disabled state at 38% opacity
- Icon size fixed at 24×24px
- Gap between icon and text set to 12px
- Menu elevation set to 8 (standard shadow)
- Border radius standardized to 4px

### Design Tokens Required
- Typography tokens (16px, 14px with line heights)
- Color tokens (text primary, disabled, hover, selected)
- Spacing tokens (4px, 6px, 12px, 16px)
- Elevation shadow tokens (elevation 8)
- Border radius (4px)
- Icon size (24px)

---

## Performance Considerations

- Render menus on demand (don't mount until opened)
- Use virtualization for very long menus (> 50 items)
- Avoid complex components within menu items
- Debounce type-ahead search
- Close menu after selection for better UX
- Lazy load submenu content
- Use React.memo for static menu items

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 100+ variant combinations documented
- Full accessibility compliance
- MenuItem, MenuList, and Menu components included


---


# Tabs Component Documentation

## Overview
The Tabs component organizes content into separate views where only one view is visible at a time. It enables users to navigate between related groups of content at the same level of hierarchy, providing clear segmentation and easy access to different sections.

**Component Type:** Navigation / Organization Component
**Based on:** Material-UI (MUI) v6.1.0 Tabs & Tab
**Documentation:** [MUI Tabs API](https://mui.com/api/tabs) | [MUI Tab API](https://mui.com/api/tab)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/tabs/height': '48px',
'--component/tabs/min-height': '48px',
'--component/tabs/scrollable-height': '48px',
'--component/tabs/indicator-height': '2px',
```

### Tab Item Tokens
```typescript
// Standard Tab
'--component/tab/height': '48px',
'--component/tab/min-height': '48px',
'--component/tab/min-width': '90px',
'--component/tab/max-width': '360px',
'--component/tab/padding': '12px 16px',

// Tab with Icon & Label
'--component/tab/with-icon/height': '72px',
'--component/tab/with-icon/min-height': '72px',
'--component/tab/with-icon/padding': '12px 16px',
'--component/tab/icon-size': '24px',
'--component/tab/icon-gap': '8px',
```

### Typography Tokens
```typescript
'--component/tab/font-family': 'var(--typography/base-styles/button/font-family, "DM_Sans:Medium", sans-serif)',
'--component/tab/font-size': '14px',
'--component/tab/font-weight': '500',
'--component/tab/line-height': '24px',
'--component/tab/letter-spacing': '0.4px',
'--component/tab/text-transform': 'uppercase',
```

### Color Tokens
```typescript
// Default State
'--component/tab/default/text-color': 'rgba(0, 0, 0, 0.6)',
'--component/tab/default/icon-color': 'rgba(0, 0, 0, 0.54)',

// Hover State
'--component/tab/hover/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/tab/hover/bg-color': 'rgba(0, 0, 0, 0.04)',

// Active/Selected State
'--component/tab/selected/text-color': '#4b3fff',
'--component/tab/selected/icon-color': '#4b3fff',
'--component/tab/selected/indicator-color': '#4b3fff',

// Focus State
'--component/tab/focus/outline-color': 'rgba(75, 63, 255, 0.5)',
'--component/tab/focus/outline-width': '2px',
'--component/tab/focus/outline-offset': '-2px',

// Disabled State
'--component/tab/disabled/text-color': 'rgba(0, 0, 0, 0.38)',
'--component/tab/disabled/icon-color': 'rgba(0, 0, 0, 0.26)',
'--component/tab/disabled/cursor': 'not-allowed',
```

### Indicator Tokens
```typescript
'--component/tabs/indicator/height': '2px',
'--component/tabs/indicator/color': '#4b3fff',
'--component/tabs/indicator/transition-duration': '300ms',
'--component/tabs/indicator/transition-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
```

### Scrollable Tabs Tokens
```typescript
'--component/tabs/scroll-button/size': '40px',
'--component/tabs/scroll-button/icon-size': '24px',
'--component/tabs/scroll-button/color': 'rgba(0, 0, 0, 0.54)',
```

---

## Component Anatomy

### Tabs Container
- **Purpose:** Root container managing tab navigation
- **Layout:** Horizontal (default) or vertical
- **Features:** Indicator, scroll buttons (if needed)
- **Height:** 48px (text only), 72px (with icons)

### Tab Item
- **Purpose:** Individual clickable tab
- **Content:** Label (text), Icon (optional), Badge (optional)
- **States:** Default, Hover, Selected, Focus, Disabled
- **Width:** Min 90px, Max 360px

### Active Indicator
- **Purpose:** Visual indicator for selected tab
- **Height:** 2px
- **Color:** Primary color
- **Position:** Bottom of tab (horizontal) or left/right (vertical)
- **Animation:** Smooth slide transition (300ms)

### Scroll Buttons
- **Purpose:** Navigate when tabs overflow container
- **Size:** 40×40px
- **Icons:** chevron-left, chevron-right (24px)
- **Position:** Left and right edges
- **Behavior:** Auto-hide when not needed

---

## Tab Variants

### Text Only Tabs
- **Content:** Text label only
- **Height:** 48px
- **Min Width:** 90px
- **Padding:** 12px 16px
- **Use Case:** Simple navigation, space-constrained UIs
- **Text Transform:** Uppercase
- **Font Weight:** 500 (medium)

### Icon + Text Tabs
- **Content:** Icon above text label
- **Height:** 72px
- **Icon Size:** 24×24px
- **Icon Gap:** 8px below icon
- **Layout:** Vertical stack (icon, then label)
- **Use Case:** Visual categorization, important sections
- **Alignment:** Center

### Icon Only Tabs
- **Content:** Icon without text
- **Height:** 48px
- **Width:** 48px (square)
- **Icon Size:** 24×24px
- **Use Case:** Compact navigation, icon-based interfaces
- **Accessibility:** Requires aria-label

### Wrapped Label Tabs
- **Content:** Multi-line text labels
- **Height:** Variable (min 72px)
- **Text Wrap:** Allowed
- **Max Lines:** 2 recommended
- **Use Case:** Long tab labels that don't fit single line

---

## Orientation Variants

### Horizontal Tabs (Default)
- **Layout:** Tabs arranged left to right
- **Indicator Position:** Bottom of tabs
- **Scroll Direction:** Horizontal
- **Use Case:** Primary navigation, most common
- **Best For:** Desktop and tablet viewports

### Vertical Tabs
- **Layout:** Tabs arranged top to bottom
- **Indicator Position:** Left or right of tabs
- **Scroll Direction:** Vertical
- **Use Case:** Side navigation, settings panels
- **Best For:** Desktop with adequate width

---

## Scrollable Behavior

### Fixed Tabs
- **Behavior:** All tabs visible, no scrolling
- **Width:** Tabs expand to fill container equally
- **Use Case:** 2-5 tabs that fit in viewport
- **Best For:** Simple navigation

### Scrollable Tabs
- **Behavior:** Horizontal scroll when tabs overflow
- **Width:** Tabs maintain min/max width constraints
- **Scroll Buttons:** Appear on left/right edges
- **Use Case:** 6+ tabs or long labels
- **Best For:** Many navigation options

### Centered Tabs
- **Behavior:** Tabs centered in container
- **Width:** Tabs maintain natural width
- **Use Case:** Hero sections, prominent navigation
- **Best For:** Small number of tabs (2-4)

---

## Tab States

### Default
- **Text Color:** Secondary text (60% opacity)
- **Icon Color:** Secondary icon (54% opacity)
- **Background:** Transparent
- **Indicator:** Hidden
- **Cursor:** pointer
- **Visual:** Inactive appearance

### Hover
- **Text Color:** Primary text (87% opacity)
- **Icon Color:** Primary icon
- **Background:** Light gray (4% opacity black)
- **Indicator:** Hidden
- **Cursor:** pointer
- **Transition:** 150ms
- **Visual:** Subtle highlight

### Selected (Active)
- **Text Color:** Primary color (`#4b3fff`)
- **Icon Color:** Primary color
- **Background:** Transparent
- **Indicator:** Visible (2px primary color)
- **Font Weight:** 500 (maintained)
- **Visual:** Clear active state

### Focus
- **Outline:** 2px primary (50% opacity)
- **Outline Offset:** -2px (inside)
- **Background:** Maintained from state
- **Keyboard:** Visible focus ring
- **Visual:** Clear focus indicator

### Disabled
- **Text Color:** Light gray (38% opacity)
- **Icon Color:** Very light gray (26% opacity)
- **Background:** Transparent
- **Indicator:** Hidden
- **Cursor:** not-allowed
- **Interaction:** None
- **Visual:** Grayed out appearance

---

## Usage Guidelines

### When to Use
- Organize related content into logical groups
- Switch between views at same hierarchy level
- Navigation within a page or section
- Settings panels with categories
- Data tables with different views
- Dashboard sections
- Multi-step forms (alternative to stepper)
- Product details (overview, specs, reviews)

### When NOT to Use
- Hierarchical navigation (use TreeView or Menu)
- Primary site navigation (use Navigation component)
- Sequential steps (use Stepper)
- Single piece of content (no need for tabs)
- More than 10-12 tabs (consider categorization)
- Unrelated content groupings

### Best Practices

#### Do
- Use 2-7 tabs for optimal usability
- Keep tab labels short (1-2 words)
- Use consistent label length across tabs
- Show selected state clearly with indicator
- Place most important tab first (leftmost)
- Use icons to reinforce meaning
- Maintain tab order (don't reorder dynamically)
- Lazy load tab content for performance
- Support keyboard navigation
- Make indicator animation smooth

#### Don't
- Use too many tabs (> 12)
- Mix different tab heights in same container
- Use tabs for sequential processes (use Stepper)
- Hide critical content in tabs
- Use generic labels ("Tab 1", "Tab 2")
- Nest tabs within tabs
- Make tabs too small (< 90px)
- Remove indicator completely
- Forget disabled state for unavailable tabs
- Use tabs on mobile without scrolling

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div role="tablist" aria-label="Content sections">
  <button
    role="tab"
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
    tabindex="0"
  >
    Overview
  </button>
  <button
    role="tab"
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
    tabindex="-1"
  >
    Details
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1" tabindex="0">
  <p>Overview content</p>
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" tabindex="0" hidden>
  <p>Details content</p>
</div>
```

#### ARIA Attributes
```typescript
{
  // Tabs container
  role: "tablist",
  "aria-label": string,
  "aria-orientation": "horizontal" | "vertical",

  // Tab item
  role: "tab",
  "aria-selected": boolean,
  "aria-controls": string,      // References tabpanel ID
  "aria-disabled": boolean,
  id: string,
  tabIndex: 0 | -1,             // 0 for selected, -1 for others

  // Tab panel
  role: "tabpanel",
  "aria-labelledby": string,    // References tab ID
  id: string,
  tabIndex: 0,
  hidden: boolean,              // Hide inactive panels
}
```

#### Keyboard Navigation
- **Tab:** Focus tabs container (first tab or selected tab)
- **Arrow Left:** Previous tab (horizontal tabs)
- **Arrow Right:** Next tab (horizontal tabs)
- **Arrow Up:** Previous tab (vertical tabs)
- **Arrow Down:** Next tab (vertical tabs)
- **Home:** First tab
- **End:** Last tab
- **Enter/Space:** Activate focused tab
- **Shift+Tab:** Move focus out of tabs

#### Focus Management
- **Initial Focus:** Selected tab receives tabindex="0"
- **Other Tabs:** tabindex="-1" (reachable via arrow keys)
- **Roving Focus:** Arrow keys move focus between tabs
- **Activation:** Focus and selection happen together (automatic activation)

#### Color Contrast
- **Default Text:** 4.5:1 minimum (60% opacity on white)
- **Selected Text:** 4.5:1 minimum (primary color)
- **Indicator:** 3:1 minimum (non-text contrast)
- **Disabled Text:** Exempt from contrast requirements

#### Touch Targets
- **Minimum Height:** 48px
- **Minimum Width:** 48px (icon only) or 90px (with text)
- **Spacing:** Adequate tap area without overlap
- **Mobile:** Increase height to 56px if needed

#### Screen Reader Support
- Tab purpose announced ("Overview, tab, 1 of 3")
- Selected state announced ("selected")
- Panel content associated with tab label
- Orientation announced (horizontal/vertical)
- Disabled state announced ("disabled")

---

## Code Examples

### Basic Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
        <Tab label="Overview" />
        <Tab label="Details" />
        <Tab label="Reviews" />
      </Tabs>
    </Box>
  );
}
```

### Tabs with Panels
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function TabsWithPanels() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(e, v) => setValue(v)}>
        <Tab label="Item One" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Item Two" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Item Three" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Content
      </TabPanel>
    </Box>
  );
}
```

### Icon + Text Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function IconLabelTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab icon={<PhoneIcon />} label="Recents" />
      <Tab icon={<FavoriteIcon />} label="Favorites" />
      <Tab icon={<PersonPinIcon />} label="Nearby" />
    </Tabs>
  );
}
```

### Icon Only Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function IconTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab icon={<PhoneIcon />} aria-label="phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
      <Tab icon={<PersonPinIcon />} aria-label="person" />
    </Tabs>
  );
}
```

### Scrollable Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
```

### Centered Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      centered
    >
      <Tab label="Overview" />
      <Tab label="Features" />
      <Tab label="Pricing" />
    </Tabs>
  );
}
```

### Vertical Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ display: 'flex', height: 400 }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={(e, v) => setValue(v)}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      {/* Other panels */}
    </Box>
  );
}
```

### Disabled Tab
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DisabledTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>
  );
}
```

### Full Width Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      variant="fullWidth"
    >
      <Tab label="Overview" />
      <Tab label="Details" />
      <Tab label="Reviews" />
    </Tabs>
  );
}
```

### Custom Indicator Color
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ColoredIndicatorTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  );
}
```

---

## Common Patterns

### Dashboard Navigation
```tsx
<Tabs value={activeTab} onChange={handleChange}>
  <Tab label="Overview" />
  <Tab label="Analytics" />
  <Tab label="Reports" />
  <Tab label="Settings" />
</Tabs>
```

### Settings Panel
```tsx
<Box sx={{ display: 'flex' }}>
  <Tabs orientation="vertical" value={section}>
    <Tab label="Profile" />
    <Tab label="Account" />
    <Tab label="Privacy" />
    <Tab label="Notifications" />
  </Tabs>
  <Box sx={{ flex: 1, p: 3 }}>
    {/* Settings content */}
  </Box>
</Box>
```

### Product Details
```tsx
<Tabs value={view} onChange={setView}>
  <Tab label="Description" />
  <Tab label="Specifications" />
  <Tab label="Reviews" />
  <Tab label="Q&A" />
</Tabs>
```

### Data Table Views
```tsx
<Tabs value={tableView} onChange={handleViewChange}>
  <Tab label="All Items" />
  <Tab label="Active" />
  <Tab label="Archived" />
</Tabs>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use scrollable tabs by default
- Increase touch target height (56px minimum)
- Enable scroll buttons
- Consider full-width tabs for 2-3 items
- Use text-only tabs (avoid icons to save space)
- Stack vertically if many tabs (alternative: drawer)

### Tablet (600px - 960px)
- Scrollable tabs for 5+ items
- Standard height (48px)
- Fixed tabs work well for 3-5 items
- Icon + text tabs acceptable

### Desktop (> 960px)
- Fixed tabs for up to 7 items
- Scrollable for 8+ items
- Centered tabs for hero sections
- Vertical tabs for side panels
- Full flexibility with all variants

---

## Total Variant Combinations

**Tab Content:** 4 (Text only, Icon + Text, Icon only, Wrapped label)
**Orientations:** 2 (Horizontal, Vertical)
**Behavior:** 3 (Fixed, Scrollable, Centered)
**States:** 5 (Default, Hover, Selected, Focus, Disabled)
**With Badge:** Optional

**Total Base Combinations:** 4 × 2 × 3 = **24 base configurations**
**With States:** 24 × 5 = **120 total combinations**

---

## Related Components
- **App Bar:** Often contains tabs for top-level navigation
- **Stepper:** For sequential processes (alternative to tabs)
- **Breadcrumbs:** For hierarchical navigation
- **Navigation (Sidenav):** For primary app navigation
- **Menu:** For dropdown navigation options

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11053:152542
- **Component:** `<Tabs>`, `<Tab>`
- **Heights:** 48px (text only), 72px (with icons)
- **Documentation:** [MUI Tabs API](https://mui.com/api/tabs)

---

## Migration Notes

### From Previous Design System
- Tab height standardized to 48px (text), 72px (icon + text)
- Min width set to 90px
- Max width set to 360px
- Indicator height fixed at 2px
- Typography aligned to Button style (14px, 500 weight, uppercase)
- Selected state uses primary color (#4b3fff)
- Hover background uses 4% opacity
- Disabled state standardized (38% opacity)
- Focus outline set to 2px
- Transition timing set to 300ms cubic-bezier

### Design Tokens Required
- All color tokens (primary, text, disabled)
- Typography tokens (Button, 14px, 500 weight)
- Spacing tokens (8px, 12px, 16px)
- Height tokens (48px, 72px)
- Transition tokens (300ms)
- Indicator height (2px)

---

## Performance Considerations

- Lazy load tab panel content
- Render only active panel in DOM
- Use React.memo for tab panels
- Avoid heavy operations in tab change handlers
- Debounce rapid tab switching
- Virtualize long lists of tabs (> 50)
- Optimize animations (use CSS transforms)
- Cache panel content when appropriate
- Minimize re-renders with proper keys

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 120+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Horizontal and vertical orientations
- Icon, text, and combined variants
- Scrollable and fixed behaviors


---


# Pagination Component Documentation

## Overview
The Pagination component enables users to navigate through large datasets by breaking content into discrete pages. It provides page number controls, previous/next navigation, and configurable items-per-page selection.

**Component Type:** Navigation / Data Control Component
**Based on:** Material-UI (MUI) v6.1.0 Pagination
**Documentation:** [MUI Pagination API](https://mui.com/api/pagination)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/pagination/height': '32px',
'--component/pagination/button-height': '32px',
'--component/pagination/button-min-width': '32px',
'--component/pagination/button-padding': '4px 12px',
'--component/pagination/gap-between-buttons': '8px',
'--component/pagination/gap-internal': '16px',
'--component/pagination/border-radius': '4px',
```

### Button State Tokens
```typescript
// Active (Current Page)
'--component/pagination/active/bg-color': '#4b3fff',
'--component/pagination/active/text-color': '#ffffff',
'--component/pagination/active/border-width': '0px',

// Default (Inactive Pages)
'--component/pagination/default/bg-color': 'transparent',
'--component/pagination/default/text-color': '#546574',
'--component/pagination/default/border-color': '#546574',
'--component/pagination/default/border-width': '1px',

// Hover
'--component/pagination/hover/bg-color': 'rgba(75, 63, 255, 0.04)',
'--component/pagination/hover/border-color': '#4b3fff',

// Disabled
'--component/pagination/disabled/bg-color': '#f2f2f2',
'--component/pagination/disabled/text-color': '#546574',
'--component/pagination/disabled/border-color': '#546574',
'--component/pagination/disabled/opacity': '0.6',
'--component/pagination/disabled/cursor': 'not-allowed',
```

### Typography Tokens
```typescript
'--component/pagination/button/font-family': 'var(--fontfamily, "DM_Sans:Medium", sans-serif)',
'--component/pagination/button/font-size': '14px',
'--component/pagination/button/font-weight': '500',
'--component/pagination/button/line-height': '24px',

'--component/pagination/label/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Regular", sans-serif)',
'--component/pagination/label/font-size': '14px',
'--component/pagination/label/font-weight': '400',
'--component/pagination/label/line-height': '18px',
'--component/pagination/label/letter-spacing': '0.17px',
```

### Color Tokens
```typescript
'--component/pagination/text-primary': 'rgba(0, 0, 0, 0.87)',
'--component/pagination/text-secondary': 'rgba(0, 0, 0, 0.6)',
'--component/pagination/icon-size': '16px',
```

---

## Component Anatomy

### Main Container
- **Layout:** Horizontal flexbox
- **Justify:** Space-between
- **Alignment:** Center
- **Min Height:** 32px
- **Sections:** Navigation controls (left), Items per page selector (right)

### Navigation Controls Section
- **Previous Button:** Navigates to previous page
- **Page Number Buttons:** Direct page selection
- **Next Button:** Navigates to next page
- **Info Label:** Shows current range and total items

### Page Number Button Group
- **Border:** 1px solid outline around entire group
- **Border Radius:** 4px
- **Active Page:** Highlighted with primary color
- **Ellipsis:** Shows "..." for truncated pages

### Items Per Page Selector
- **Label:** "Items per page"
- **Dropdown Button:** Shows current items per page value
- **Icon:** Dropdown chevron icon

---

## Button States

### Active (Current Page)
- **Background:** Primary color (`#4b3fff`)
- **Text:** White (`#ffffff`)
- **Border:** None
- **Visual:** Solid filled appearance
- **Use Case:** Indicates current page

### Default (Inactive Pages)
- **Background:** Transparent
- **Text:** Secondary color (`#546574`)
- **Border:** 1px solid secondary color
- **Visual:** Outlined appearance
- **Use Case:** Available pages to navigate to

### Hover
- **Background:** Light primary tint (`rgba(75, 63, 255, 0.04)`)
- **Text:** Secondary color (maintained)
- **Border:** Primary color (`#4b3fff`)
- **Transition:** 150ms
- **Use Case:** Interactive feedback

### Disabled
- **Background:** Light gray (`#f2f2f2`)
- **Text:** Secondary color (`#546574`)
- **Border:** Secondary color
- **Opacity:** 60%
- **Cursor:** not-allowed
- **Use Case:** First/last page boundaries (Previous on page 1, Next on last page)

---

## Navigation Components

### Previous Button
- **Label:** "Previous"
- **Icon:** None (text only)
- **State:** Disabled on first page, enabled otherwise
- **Action:** Navigate to previous page (current - 1)

### Next Button
- **Label:** "Next"
- **Icon:** Right arrow or chevron (16×16px)
- **State:** Disabled on last page, enabled otherwise
- **Action:** Navigate to next page (current + 1)

### Page Number Buttons
- **Content:** Page number (1, 2, 3, etc.)
- **Width:** Minimum 32px (auto-expands for larger numbers)
- **Height:** 32px
- **Active State:** Current page highlighted
- **Action:** Navigate directly to clicked page

### Ellipsis Button
- **Content:** "..."
- **State:** Non-interactive (display only)
- **Purpose:** Indicates truncated page range
- **Use Case:** When total pages > displayable pages (typically > 7)

---

## Information Display

### Items Range Label
- **Format:** "Showing 1-10 of 100 Items"
- **Font:** Body2 (14px, Regular)
- **Color:** Secondary text (60% opacity)
- **Emphasis:** Current range and total in primary text color (87% opacity)
- **Dynamic:** Updates with page changes

### Items Per Page Selector
- **Label:** "Items per page"
- **Current Value:** Displayed in button (e.g., "10")
- **Dropdown:** Opens menu with options (typically 10, 25, 50, 100)
- **Icon:** Chevron-down (16×16px)
- **Action:** Changes number of items displayed per page

---

## Pagination Strategies

### Standard Pagination
```
[Previous] [1] [2] [3] [4] [5] [6] [7] [...] [10] [Next]
```
- **Range:** Shows 7 adjacent pages plus ellipsis and last page
- **Use Case:** 8-50 total pages

### Compact Pagination
```
[Previous] [1] [2] [3] [4] [5] [Next]
```
- **Range:** Shows all pages (≤ 7 total pages)
- **Use Case:** Small datasets

### Extended Pagination
```
[Previous] [1] [...] [5] [6] [7] [8] [9] [...] [100] [Next]
```
- **Range:** Shows current page ± 2 pages, plus first and last
- **Use Case:** Very large datasets (50+ pages)

---

## Usage Guidelines

### When to Use
- Large datasets (> 50 items)
- Search results
- Product listings
- Table data
- Blog post archives
- Report lists
- User management tables
- Any paginated content

### When NOT to Use
- Small datasets (< 25 items) - show all items
- Infinite scroll is more appropriate (social feeds)
- Real-time data streams
- Single-page content
- Content better suited for "Load More" pattern

### Best Practices

#### Do
- Show total number of items
- Indicate current page clearly
- Provide "Previous" and "Next" for sequential navigation
- Allow direct page number selection
- Show items-per-page selector for flexibility
- Display current range (e.g., "1-10 of 100")
- Disable Previous on first page
- Disable Next on last page
- Persist pagination state in URL query params
- Default to reasonable items per page (10-25)

#### Don't
- Hide total page count
- Make page numbers too small (< 32px)
- Forget to disable boundary buttons
- Use pagination for very small datasets
- Mix pagination with infinite scroll
- Reset to page 1 after every filter change (maintain page if possible)
- Use tiny page number ranges (show at least 5-7 pages)
- Forget keyboard navigation support

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<nav aria-label="Pagination Navigation">
  <ul>
    <li>
      <button aria-label="Go to previous page" disabled>Previous</button>
    </li>
    <li>
      <button aria-label="Go to page 1" aria-current="page">1</button>
    </li>
    <li>
      <button aria-label="Go to page 2">2</button>
    </li>
    <li>
      <button aria-label="Go to next page">Next</button>
    </li>
  </ul>
</nav>
```

#### ARIA Attributes
```typescript
{
  role: "navigation",            // For pagination container
  "aria-label": "Pagination",    // Describes navigation purpose
  "aria-current": "page",        // Marks current page button
  "aria-disabled": boolean,      // For disabled prev/next buttons
  "aria-label": string,          // "Go to page X" for each button
}
```

#### Keyboard Navigation
- **Tab:** Focus pagination buttons sequentially
- **Shift+Tab:** Focus previous button
- **Enter/Space:** Activate focused button (navigate to page)
- **Arrow Keys:** Optional, navigate between page buttons

#### Color Contrast
- **Active Button:** 4.5:1 minimum (white on primary blue)
- **Default Button:** 4.5:1 minimum (secondary text on white)
- **Disabled Button:** Exempt from contrast requirements (60% opacity)
- **Labels:** 4.5:1 minimum against background

#### Touch Targets
- **Minimum Size:** 32×32px for all buttons
- **Recommended:** 40×40px with padding for touch devices
- **Spacing:** 8px gap between buttons

#### Screen Reader Support
- Navigation purpose announced ("Pagination Navigation")
- Current page announced ("page 1, current page")
- Page button purpose clear ("Go to page 2")
- Disabled state announced ("Previous, button, disabled")
- Total pages context provided

---

## Code Examples

### Basic Pagination
```tsx
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
  );
}
```

### Controlled Pagination
```tsx
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

export default function ControlledPagination() {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination count={10} page={page} onChange={handleChange} />
  );
}
```

### Pagination with Range Info
```tsx
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function PaginationWithInfo() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
      <Typography variant="body2" color="text.secondary">
        Showing {startItem}-{endItem} of {totalItems} Items
      </Typography>
    </Box>
  );
}
```

### Pagination with Previous/Next
```tsx
import Pagination from '@mui/material/Pagination';

export default function PaginationButtons() {
  return (
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      variant="outlined"
    />
  );
}
```

### Pagination Size Variants
```tsx
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSizes() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
```

### Items Per Page Selector
```tsx
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function PaginationWithItemsPerPage() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 100;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(totalItems / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
        <Typography variant="body2" color="text.secondary">
          Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, totalItems)} of {totalItems} Items
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Items per page
        </Typography>
        <Select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(e.target.value as number);
            setPage(1); // Reset to page 1 when items per page changes
          }}
          size="small"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
```

### Table Pagination
```tsx
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

export default function TablePaginationExample() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={(e, newPage) => setPage(newPage)}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
    />
  );
}
```

---

## Common Patterns

### Product Listing Pagination
```tsx
<Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
  <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
</Box>
```

### Search Results Pagination
```tsx
<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
  <Typography variant="body2" color="text.secondary">
    {totalResults} results found
  </Typography>
  <Pagination count={totalPages} page={page} onChange={handleChange} />
</Box>
```

### Data Table Pagination
```tsx
<TablePagination
  rowsPerPageOptions={[10, 25, 50]}
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Reduce visible page numbers (show 3-5 instead of 7)
- Stack pagination and info label vertically if needed
- Ensure adequate touch targets (40×40px)
- Consider showing only Previous/Next buttons
- Move items-per-page selector below pagination
- Use compact layout

### Tablet (600px - 960px)
- Standard page number range (5-7 visible)
- Horizontal layout maintained
- Standard touch targets
- Items-per-page selector inline

### Desktop (> 960px)
- Full page number range (7+ visible)
- Full horizontal layout
- All controls inline
- Hover states functional
- Keyboard navigation optimal

---

## Total Variant Combinations

**Button States:** 4 (Active, Default, Hover, Disabled)
**Navigation Controls:** 2 (Previous, Next)
**Display Modes:** 3 (Compact, Standard, Extended)
**Optional Elements:** 2 (With/Without items-per-page selector)

**Total Combinations:** 4 states × 3 display modes × 2 optional configs = **24+ combinations**

---

## Related Components
- **Table:** Often used with table data
- **TablePagination:** Specialized pagination for tables
- **Button:** Page buttons are styled buttons
- **Select:** Items-per-page dropdown
- **Typography:** Info labels

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:78210
- **Component:** `<Pagination>`
- **Documentation:** [MUI Pagination API](https://mui.com/api/pagination)

---

## Migration Notes

### From Previous Design System
- Button height standardized to 32px
- Border radius unified to 4px
- Active state uses primary color (#4b3fff)
- Gap between buttons set to 8px
- Typography aligned to 14px body2
- Disabled state opacity set to 60%
- Icon size fixed at 16px
- Border width standardized to 1px

### Design Tokens Required
- Color tokens (primary, secondary, disabled)
- Typography tokens (14px, 400/500 weight)
- Spacing tokens (4px, 8px, 12px, 16px)
- Button height (32px)
- Border radius (4px)
- Icon size (16px)

---

## Performance Considerations

- Only render visible page numbers (use ellipsis for large ranges)
- Debounce page changes if triggering API calls
- Cache page data when possible
- Use URL query params for shareable pagination state
- Consider virtual scrolling for very large datasets
- Avoid re-fetching current page data
- Optimize items-per-page dropdown (limit options)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 24+ variant combinations documented
- Full accessibility compliance
- Previous/Next navigation included
- Items-per-page selector documented


---


# SpeedDial Component Documentation

## Overview
The SpeedDial component displays a floating action button (FAB) that reveals a set of related actions when activated. It provides quick access to common tasks through a compact, expandable menu that appears in one of four directions.

**Component Type:** Navigation / Action Component
**Based on:** Material-UI (MUI) v6.1.0 SpeedDial
**Documentation:** [MUI SpeedDial API](https://mui.com/api/speed-dial)

---

## Design Tokens

### Fab Button Tokens
```typescript
// Large Size (Default)
'--component/speed-dial/fab/size-large': '56px',
'--component/speed-dial/fab/icon-size-large': '24px',

// Small Size
'--component/speed-dial/fab/size-small': '40px',
'--component/speed-dial/fab/icon-size-small': '20px',

// Elevation
'--component/speed-dial/fab/elevation': '6',
'--component/speed-dial/fab/elevation-hover': '8',
```

### Color Tokens
```typescript
// Primary
'--component/speed-dial/fab/primary/bg-color': '#4b3fff',
'--component/speed-dial/fab/primary/text-color': '#ffffff',
'--component/speed-dial/fab/primary/hover-bg-color': '#3d32cc',

// Inherit
'--component/speed-dial/fab/inherit/bg-color': 'currentColor',
'--component/speed-dial/fab/inherit/text-color': 'inherit',
'--component/speed-dial/fab/inherit/hover-bg-color': 'rgba(0, 0, 0, 0.08)',
```

### SpeedDialAction Tokens
```typescript
'--component/speed-dial/action/size': '40px',
'--component/speed-dial/action/icon-size': '20px',
'--component/speed-dial/action/bg-color': '#ffffff',
'--component/speed-dial/action/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/speed-dial/action/hover-bg-color': 'rgba(0, 0, 0, 0.04)',
'--component/speed-dial/action/elevation': '6',
'--component/speed-dial/action/spacing': '8px',
```

### Tooltip Tokens
```typescript
'--component/speed-dial/tooltip/bg-color': 'rgba(97, 97, 97, 0.92)',
'--component/speed-dial/tooltip/text-color': '#ffffff',
'--component/speed-dial/tooltip/font-size': '10px',
'--component/speed-dial/tooltip/font-weight': '500',
'--component/speed-dial/tooltip/padding': '4px 8px',
'--component/speed-dial/tooltip/border-radius': '4px',
'--component/speed-dial/tooltip/gap': '8px',
```

### Animation Tokens
```typescript
'--component/speed-dial/transition-duration': '250ms',
'--component/speed-dial/transition-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
'--component/speed-dial/stagger-delay': '30ms',
```

---

## Component Anatomy

### Main Container
- **SpeedDial:** Root container managing the FAB and action items
- **Position:** Fixed or absolute positioning
- **Direction:** Controls expansion direction (up, down, left, right)

### Floating Action Button (FAB)
- **Size Large:** 56×56px (default)
- **Size Small:** 40×40px
- **Icon:** 24px (large), 20px (small)
- **Elevation:** 6 (default), 8 (hover)
- **Shape:** Circular
- **Action:** Click/tap to open/close actions

### SpeedDialAction Items
- **Size:** 40×40px
- **Icon:** 20×20px
- **Background:** White with elevation 6
- **Spacing:** 8px between items
- **Tooltip:** Optional label on hover
- **Animation:** Staggered appearance (30ms delay)

### Tooltip Labels
- **Size:** 10px font
- **Background:** Semi-transparent gray (92% opacity)
- **Padding:** 4px 8px
- **Border Radius:** 4px
- **Gap:** 8px from action button
- **Position:** Opposite to expansion direction

---

## Direction Variants

### Up (Default)
- **Expansion:** Actions appear above the FAB
- **Animation:** Items animate upward
- **Tooltip Position:** Left of action items
- **Use Case:** FAB positioned at bottom-right of screen
- **Stacking:** First action closest to FAB, last action furthest

### Down
- **Expansion:** Actions appear below the FAB
- **Animation:** Items animate downward
- **Tooltip Position:** Left of action items
- **Use Case:** FAB positioned at top of screen
- **Stacking:** First action closest to FAB, last action furthest

### Left
- **Expansion:** Actions appear to the left of FAB
- **Animation:** Items animate leftward
- **Tooltip Position:** Above action items
- **Use Case:** FAB positioned at right edge
- **Stacking:** First action closest to FAB, last action furthest

### Right
- **Expansion:** Actions appear to the right of FAB
- **Animation:** Items animate rightward
- **Tooltip Position:** Above action items
- **Use Case:** FAB positioned at left edge
- **Stacking:** First action closest to FAB, last action furthest

---

## Size Variants

### Large (56px - Default)
- **FAB Size:** 56×56px
- **Icon Size:** 24×24px
- **Use Case:** Primary actions, desktop/tablet interfaces
- **Touch Target:** Adequate for touch (meets 48px minimum)
- **Visual Weight:** Prominent, high emphasis

### Small (40px)
- **FAB Size:** 40×40px
- **Icon Size:** 20×20px
- **Use Case:** Compact UIs, mobile interfaces, less prominent actions
- **Touch Target:** Meets minimum 40px requirement
- **Visual Weight:** Moderate emphasis

---

## Color Variants

### Primary
- **Background:** Primary color (`#4b3fff`)
- **Text/Icon:** White (`#ffffff`)
- **Hover:** Darker primary (`#3d32cc`)
- **Use Case:** Primary actions, most common use
- **Visual:** High contrast, prominent

### Inherit
- **Background:** Inherits from parent (`currentColor`)
- **Text/Icon:** Inherits from parent
- **Hover:** Light overlay (`rgba(0, 0, 0, 0.08)`)
- **Use Case:** Contextual theming, flexible styling
- **Visual:** Adapts to context

---

## States

### Closed (Default)
- **FAB:** Visible with icon (typically "add" or "menu")
- **Actions:** Hidden
- **Icon:** Plus (+) or hamburger menu
- **Elevation:** 6
- **Cursor:** pointer

### Open
- **FAB:** Icon rotates/transforms (typically to "X" or rotated plus)
- **Actions:** Visible in specified direction
- **Animation:** Staggered entrance (30ms delay per item)
- **Elevation:** 8 (FAB), 6 (actions)
- **Backdrop:** Optional semi-transparent backdrop

### Hover (FAB)
- **Elevation:** Increases to 8
- **Background:** Slightly darker (for primary)
- **Scale:** Optional slight scale increase (1.05)
- **Transition:** 250ms smooth

### Hover (Action)
- **Background:** Light gray (`rgba(0, 0, 0, 0.04)`)
- **Elevation:** Maintained at 6
- **Tooltip:** Becomes visible
- **Transition:** 150ms smooth

### Disabled
- **FAB Background:** Gray (`rgba(0, 0, 0, 0.12)`)
- **FAB Icon:** Light gray (`rgba(0, 0, 0, 0.26)`)
- **Actions:** Hidden/disabled
- **Cursor:** not-allowed
- **Interaction:** None

---

## Usage Guidelines

### When to Use
- Quick access to 3-6 related actions
- Floating action menu for common tasks
- Context-specific actions (e.g., share, print, edit)
- Mobile interfaces where space is limited
- Actions that should be always accessible
- Creating, sharing, or exploring actions

### When NOT to Use
- More than 6 actions (use Menu or Drawer instead)
- Single action (use regular FAB)
- Navigation between pages (use Navigation components)
- Actions that need explanatory text (use Menu with labels)
- Desktop applications with ample toolbar space
- Actions that are rarely used

### Best Practices

#### Do
- Limit to 3-6 actions maximum
- Use clear, recognizable icons
- Provide tooltip labels for all actions
- Position FAB where it won't obscure content
- Use primary color for main FAB
- Animate actions with stagger effect
- Close on action selection
- Close on backdrop click
- Use consistent icon style
- Order actions by frequency of use

#### Don't
- Overload with too many actions (> 6)
- Use for primary navigation
- Hide critical actions in SpeedDial
- Position over important content
- Forget tooltips on action items
- Use unclear or ambiguous icons
- Make FAB too small on mobile
- Use for rarely accessed actions
- Mix different action categories
- Forget to handle close state

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div role="presentation">
  <button
    aria-label="Actions menu"
    aria-controls="speed-dial-menu"
    aria-expanded="false"
    aria-haspopup="menu"
  >
    <span>+</span>
  </button>
  <div id="speed-dial-menu" role="menu" hidden>
    <button role="menuitem" aria-label="Share">
      <ShareIcon />
    </button>
    <button role="menuitem" aria-label="Print">
      <PrintIcon />
    </button>
  </div>
</div>
```

#### ARIA Attributes
```typescript
{
  // FAB
  "aria-label": "Actions menu",
  "aria-expanded": boolean,
  "aria-haspopup": "menu",
  "aria-controls": "speed-dial-menu-id",

  // Actions container
  role: "menu",
  id: "speed-dial-menu-id",

  // Action items
  role: "menuitem",
  "aria-label": string,
  tabIndex: 0,
}
```

#### Keyboard Navigation
- **Tab:** Focus FAB button
- **Enter/Space:** Open/close SpeedDial
- **Arrow Keys:** Navigate between action items when open
  - **Up/Down:** For vertical (up/down) direction
  - **Left/Right:** For horizontal (left/right) direction
- **Escape:** Close SpeedDial
- **Tab (when open):** Move to first action, then through actions
- **Shift+Tab:** Reverse navigation

#### Touch Targets
- **FAB Large:** 56×56px (exceeds 48px minimum)
- **FAB Small:** 40×40px (meets 40px minimum)
- **Action Items:** 40×40px (meets minimum)
- **Spacing:** 8px between actions (clear tap targets)

#### Color Contrast
- **Primary FAB:** White icon on primary blue (4.5:1+ contrast)
- **Action Items:** Dark icons on white (4.5:1+ contrast)
- **Tooltips:** White text on dark gray (7:1+ contrast)
- **Disabled State:** 3:1 minimum for disabled elements

#### Screen Reader Support
- FAB purpose announced ("Actions menu")
- Expanded/collapsed state announced
- Number of actions announced when opened
- Action labels read from aria-label or tooltip text
- Close action announced

#### Focus Management
- Focus moves to FAB when opened
- Focus trapped within SpeedDial when open
- Focus returns to FAB when closed
- Clear focus indicators (2px outline)

---

## Code Examples

### Basic SpeedDial
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <PrintIcon />, name: 'Print' },
];

export default function BasicSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
```

### Controlled SpeedDial
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';

export default function ControlledSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="Controlled SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            handleClose();
            action.onClick?.();
          }}
        />
      ))}
    </SpeedDial>
  );
}
```

### Direction Variants
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Stack from '@mui/material/Stack';

export default function DirectionSpeedDials() {
  return (
    <Stack spacing={2}>
      {/* Up Direction (Default) */}
      <SpeedDial
        ariaLabel="SpeedDial up"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} {...action} />
        ))}
      </SpeedDial>

      {/* Down Direction */}
      <SpeedDial
        ariaLabel="SpeedDial down"
        sx={{ position: 'fixed', top: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} {...action} />
        ))}
      </SpeedDial>

      {/* Left Direction */}
      <SpeedDial
        ariaLabel="SpeedDial left"
        sx={{ position: 'fixed', top: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} {...action} />
        ))}
      </SpeedDial>

      {/* Right Direction */}
      <SpeedDial
        ariaLabel="SpeedDial right"
        sx={{ position: 'fixed', top: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} {...action} />
        ))}
      </SpeedDial>
    </Stack>
  );
}
```

### With Custom Icon
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomIconSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="Custom icon SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon icon={<EditIcon />} openIcon={<CloseIcon />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
```

### With Backdrop
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

export default function BackdropSpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Backdrop open={open} onClick={() => setOpen(false)} />
      <SpeedDial
        ariaLabel="SpeedDial with backdrop"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => setOpen(false)}
          />
        ))}
      </SpeedDial>
    </>
  );
}
```

### Small Size Variant
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function SmallSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="Small SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      FabProps={{ size: 'small' }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
```

### Hidden Tooltips
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function HiddenTooltipsSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="Hidden tooltips SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen={false}
        />
      ))}
    </SpeedDial>
  );
}
```

### With Action Handlers
```tsx
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';

export default function ActionHandlersSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleAction = (actionName: string) => {
    console.log(`${actionName} action triggered`);
    setOpen(false);
  };

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: () => handleAction('Copy') },
    { icon: <ShareIcon />, name: 'Share', action: () => handleAction('Share') },
    { icon: <PrintIcon />, name: 'Print', action: () => handleAction('Print') },
  ];

  return (
    <SpeedDial
      ariaLabel="Action handlers SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.action}
        />
      ))}
    </SpeedDial>
  );
}
```

---

## Common Patterns

### File Actions
```tsx
const fileActions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
```

### Social Sharing
```tsx
const shareActions = [
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <TwitterIcon />, name: 'Twitter' },
  { icon: <EmailIcon />, name: 'Email' },
  { icon: <LinkIcon />, name: 'Copy Link' },
];
```

### Content Creation
```tsx
const createActions = [
  { icon: <NoteAddIcon />, name: 'New Note' },
  { icon: <FolderIcon />, name: 'New Folder' },
  { icon: <UploadIcon />, name: 'Upload File' },
  { icon: <CameraIcon />, name: 'Take Photo' },
];
```

### Communication
```tsx
const commActions = [
  { icon: <MessageIcon />, name: 'Message' },
  { icon: <CallIcon />, name: 'Call' },
  { icon: <VideoIcon />, name: 'Video Call' },
  { icon: <EmailIcon />, name: 'Email' },
];
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use large size FAB (56px) for easy tapping
- Position at bottom-right corner
- Expand direction: Up (default)
- Ensure adequate spacing from edges (16px minimum)
- Consider backdrop for focus
- Limit to 3-4 actions maximum
- Tooltips essential for action clarity

### Tablet (600px - 960px)
- Large or small size appropriate
- Standard positioning
- Any direction appropriate
- 4-6 actions acceptable
- Hover states functional

### Desktop (> 960px)
- Any size appropriate
- Flexible positioning
- Any direction works
- Up to 6 actions
- Hover tooltips functional
- Consider alternative UI (toolbar) if space permits

---

## Total Variant Combinations

**Directions:** 4 (Up, Down, Left, Right)
**Sizes:** 2 (Large 56px, Small 40px)
**Colors:** 2 (Primary, Inherit)
**States:** 2 (Closed, Open)
**Action Count:** Variable (typically 3-6 actions)

**Total Base Combinations:** 4 × 2 × 2 × 2 = **32 combinations**

---

## Related Components
- **Fab:** Floating action button (base component)
- **Menu:** Alternative for more actions or complex options
- **Drawer:** For navigation or extensive action lists
- **Tooltip:** Used for action labels
- **IconButton:** For individual icon actions

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11051:152002
- **Component:** `<SpeedDial>`, `<SpeedDialAction>`, `<Fab>`
- **Documentation:** [MUI SpeedDial API](https://mui.com/api/speed-dial)

---

## Migration Notes

### From Previous Design System
- FAB sizes standardized (56px large, 40px small)
- Icon sizes fixed (24px large, 20px small)
- Elevation unified to 6 (default), 8 (hover)
- Action spacing set to 8px
- Stagger animation delay standardized to 30ms
- Tooltip styling updated for consistency
- Primary color updated to #4b3fff
- Animation timing set to 250ms cubic-bezier

### Design Tokens Required
- Color tokens (primary, white, gray shades)
- Elevation tokens (shadow definitions)
- Size tokens (56px, 40px, 24px, 20px)
- Spacing tokens (8px, 16px)
- Animation tokens (250ms, 30ms stagger)
- Border radius (50% for circular)

---

## Performance Considerations

- SpeedDial renders all actions in DOM (hidden by default)
- Animations use CSS transforms (GPU-accelerated)
- Backdrop adds overlay layer (consider performance)
- Limit actions to 6 for optimal performance
- Use React.memo for action items if complex
- Avoid heavy click handlers on actions
- Consider lazy loading action content if needed
- Portal rendering may impact initial render time

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 32+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- 4 directional variants included
- 2 size variants documented


---


# TreeView Component Documentation

## Overview
The TreeView component displays hierarchical data in an expandable tree structure. It supports nested items, selection states, expand/collapse interactions, and visual indentation to represent parent-child relationships.

**Component Type:** Data Display / Navigation Component
**Based on:** Material-UI (MUI) v6.1.0 TreeView & TreeItem
**Documentation:** [MUI TreeView API](https://mui.com/x/react-tree-view/)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/tree-view/item-height': '48px',
'--component/tree-view/item-min-height': '40px',
'--component/tree-view/indent-per-level': '16px',
'--component/tree-view/icon-size': '16px',
'--component/tree-view/icon-gap': '8px',
'--component/tree-view/padding-horizontal': '8px',
```

### Typography Tokens
```typescript
'--component/tree-view/font-family': 'var(--typography/base-styles/body1/font-family, "DM_Sans:Regular", sans-serif)',
'--component/tree-view/font-size': '16px',
'--component/tree-view/font-weight': '400',
'--component/tree-view/line-height': '20px',
'--component/tree-view/letter-spacing': '0.15px',
```

### Color Tokens
```typescript
// Default State
'--component/tree-view/item/bg-color-default': 'transparent',
'--component/tree-view/item/text-color-default': 'rgba(0, 0, 0, 0.87)',
'--component/tree-view/item/icon-color-default': 'rgba(0, 0, 0, 0.54)',

// Hover State
'--component/tree-view/item/bg-color-hover': 'rgba(0, 0, 0, 0.04)',
'--component/tree-view/item/text-color-hover': 'rgba(0, 0, 0, 0.87)',

// Selected State
'--component/tree-view/item/bg-color-selected': 'rgba(75, 63, 255, 0.04)',
'--component/tree-view/item/text-color-selected': 'rgba(75, 63, 255, 1)',
'--component/tree-view/item/icon-color-selected': 'rgba(75, 63, 255, 1)',

// Focus State
'--component/tree-view/item/outline-color-focus': 'rgba(75, 63, 255, 0.5)',
'--component/tree-view/item/outline-width-focus': '2px',
'--component/tree-view/item/outline-offset-focus': '-2px',

// Disabled State
'--component/tree-view/item/text-color-disabled': 'rgba(0, 0, 0, 0.38)',
'--component/tree-view/item/icon-color-disabled': 'rgba(0, 0, 0, 0.26)',
'--component/tree-view/item/cursor-disabled': 'not-allowed',
```

### Icon Tokens
```typescript
'--component/tree-view/icon/expand': 'chevron-right',
'--component/tree-view/icon/collapse': 'chevron-down',
'--component/tree-view/icon/transition-duration': '150ms',
```

---

## Component Anatomy

### TreeView Container
- **Purpose:** Root container managing tree state
- **Props:** Expanded nodes, selected nodes, multi-select
- **Layout:** Vertical stack of tree items
- **Scroll:** Vertical scroll if content exceeds height

### TreeItem
- **Purpose:** Individual node in tree
- **Structure:** Icon + Label + optional children
- **Height:** 48px (default), 40px (dense)
- **Indentation:** 16px per nesting level
- **States:** Default, Hover, Selected, Focus, Disabled

### Expand/Collapse Icon
- **Size:** 16×16px
- **Position:** Left of label
- **States:** Expandable (chevron-right), Expanded (chevron-down)
- **Interaction:** Click to toggle child visibility
- **Animation:** 150ms rotation transition

### Item Label
- **Typography:** Body1 (16px)
- **Color:** Primary text (87% opacity)
- **Selected:** Primary color
- **Disabled:** Light gray (38% opacity)

### Indentation Spacing
- **Level 0:** 8px padding (root items)
- **Level 1:** 24px padding (8px base + 16px indent)
- **Level 2:** 40px padding (8px base + 32px indent)
- **Level 3+:** 56px+ padding (8px base + 48px+ indent)

---

## TreeItem States

### Default
- **Background:** Transparent
- **Text Color:** Primary text (87% opacity)
- **Icon Color:** Secondary icon (54% opacity)
- **Cursor:** pointer
- **Visual:** Standard appearance

### Expandable
- **Icon:** chevron-right (pointing right)
- **Indication:** Has children, currently collapsed
- **Action:** Click to expand and show children
- **Visual:** Chevron indicates more content

### Expanded
- **Icon:** chevron-down (pointing down)
- **Indication:** Has children, currently visible
- **Children:** Rendered below with indentation
- **Action:** Click to collapse and hide children
- **Visual:** Chevron indicates content is shown

### Hover
- **Background:** Light gray (4% opacity black)
- **Text Color:** Maintained
- **Icon Color:** Maintained
- **Transition:** 150ms
- **Cursor:** pointer
- **Visual:** Subtle highlight on hover

### Selected
- **Background:** Light primary (4% opacity primary)
- **Text Color:** Primary color (`#4b3fff`)
- **Icon Color:** Primary color
- **Indication:** Current selection
- **Visual:** Clear selection indicator

### Focus
- **Outline:** 2px primary color (50% opacity)
- **Outline Offset:** -2px (inside border)
- **Background:** Maintained from state
- **Keyboard:** Visible focus ring
- **Visual:** Clear focus indicator

### Disabled
- **Text Color:** Light gray (38% opacity)
- **Icon Color:** Very light gray (26% opacity)
- **Background:** Transparent
- **Cursor:** not-allowed
- **Interaction:** None
- **Visual:** Grayed out appearance

### Selected + Disabled
- **Combination:** Can be both selected and disabled
- **Background:** Light primary (4% opacity)
- **Text Color:** Light gray (38% opacity)
- **Icon Color:** Light gray (26% opacity)
- **Use Case:** Show selection but prevent interaction

---

## Interaction Patterns

### Single Selection
- **Behavior:** Click item to select, deselects previous
- **Visual:** One item highlighted at a time
- **Use Case:** File systems, navigation trees

### Multi-Selection
- **Behavior:** Click items to select multiple
- **Keyboard:** Ctrl/Cmd+Click for additional selections
- **Visual:** Multiple items highlighted simultaneously
- **Use Case:** Batch operations, category selection

### Expand/Collapse
- **Click Icon:** Toggle expand/collapse
- **Click Label:** Select item (optional expand)
- **Keyboard:** Arrow Right (expand), Arrow Left (collapse)
- **Animation:** Smooth 150ms transition

### Keyboard Navigation
- **Arrow Up/Down:** Navigate between items
- **Arrow Right:** Expand collapsed node
- **Arrow Left:** Collapse expanded node or move to parent
- **Home/End:** Jump to first/last item
- **Enter/Space:** Select/activate item
- **Type Ahead:** Jump to item by typing label

---

## Usage Guidelines

### When to Use
- File/folder hierarchies
- Category/subcategory navigation
- Organizational structures
- Nested menu systems
- Taxonomies and classifications
- Outline views
- Expandable documentation sections
- Site navigation with sub-pages

### When NOT to Use
- Flat lists without hierarchy (use List instead)
- Very deep nesting (> 5 levels) - consider alternative UI
- Simple navigation (use Menu or List)
- Small datasets (< 10 items) without nesting
- Frequent selection of leaf nodes (consider flattened view)

### Best Practices

#### Do
- Limit nesting depth (3-5 levels maximum)
- Provide clear expand/collapse icons
- Use consistent indentation (16px per level)
- Show selected state clearly
- Support keyboard navigation
- Provide focus indicators
- Use meaningful, concise labels
- Show loading states for async data
- Remember expansion/selection state
- Allow multi-select when appropriate

#### Don't
- Nest too deeply (> 5 levels)
- Use tiny indentation (< 12px)
- Forget expand/collapse icons
- Mix interactive and non-interactive items
- Remove focus indicators
- Use overly long labels (truncate if needed)
- Auto-expand all nodes (performance issue)
- Forget to handle loading states
- Reset state unnecessarily
- Use TreeView for flat data

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<ul role="tree" aria-label="File system">
  <li role="treeitem" aria-expanded="true" aria-selected="true">
    <span>Documents</span>
    <ul role="group">
      <li role="treeitem" aria-expanded="false">
        <span>Work</span>
      </li>
      <li role="treeitem">
        <span>Personal</span>
      </li>
    </ul>
  </li>
</ul>
```

#### ARIA Attributes
```typescript
{
  // TreeView container
  role: "tree",
  "aria-label": string,
  "aria-multiselectable": boolean,

  // TreeItem
  role: "treeitem",
  "aria-expanded": boolean,      // For expandable items
  "aria-selected": boolean,      // For selected items
  "aria-disabled": boolean,      // For disabled items
  "aria-level": number,          // Nesting level (1-based)
  "aria-setsize": number,        // Total siblings
  "aria-posinset": number,       // Position in siblings
  "aria-label": string,          // Item label

  // Children group
  role: "group",
}
```

#### Keyboard Navigation
- **Arrow Down:** Next item (skip collapsed children)
- **Arrow Up:** Previous item
- **Arrow Right:** Expand collapsed node, or move to first child if expanded
- **Arrow Left:** Collapse expanded node, or move to parent if collapsed
- **Home:** First item in tree
- **End:** Last visible item in tree
- **Enter/Space:** Toggle selection
- **Type Ahead:** Jump to item starting with typed characters
- **Tab:** Move focus out of tree
- **Shift+Tab:** Move focus to tree

#### Focus Management
- **Initial Focus:** First item or previously focused item
- **Focus Visible:** Clear 2px outline
- **Focus Trap:** Focus stays within tree during navigation
- **Tab Out:** Allows exiting tree with Tab key

#### Color Contrast
- **Default Text:** 4.5:1 minimum (87% opacity black on white)
- **Selected Text:** 4.5:1 minimum (primary color on light primary bg)
- **Icons:** 3:1 minimum for non-text contrast
- **Disabled Text:** Exempt from contrast requirements (38% opacity)
- **Focus Indicator:** 3:1 minimum contrast

#### Screen Reader Support
- Tree structure announced ("tree, Documents")
- Expansion state announced ("expanded" or "collapsed")
- Selection state announced ("selected")
- Nesting level announced ("level 2")
- Position in list announced ("3 of 5")
- Disabled state announced ("disabled")

---

## Code Examples

### Basic TreeView
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function BasicTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Documents">
        <TreeItem nodeId="2" label="Work" />
        <TreeItem nodeId="3" label="Personal" />
      </TreeItem>
      <TreeItem nodeId="4" label="Photos">
        <TreeItem nodeId="5" label="Vacation" />
        <TreeItem nodeId="6" label="Family" />
      </TreeItem>
    </TreeView>
  );
}
```

### Controlled TreeView
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { useState } from 'react';

export default function ControlledTreeView() {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Root">
        <TreeItem nodeId="2" label="Child 1" />
        <TreeItem nodeId="3" label="Child 2" />
      </TreeItem>
    </TreeView>
  );
}
```

### Multi-Select TreeView
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function MultiSelectTreeView() {
  return (
    <TreeView
      multiSelect
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Category 1">
        <TreeItem nodeId="2" label="Item 1" />
        <TreeItem nodeId="3" label="Item 2" />
      </TreeItem>
      <TreeItem nodeId="4" label="Category 2">
        <TreeItem nodeId="5" label="Item 3" />
      </TreeItem>
    </TreeView>
  );
}
```

### TreeView with Custom Icons
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function CustomIconsTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
      defaultEndIcon={<InsertDriveFileIcon />}
    >
      <TreeItem nodeId="1" label="Documents">
        <TreeItem nodeId="2" label="resume.pdf" />
        <TreeItem nodeId="3" label="cover-letter.pdf" />
      </TreeItem>
    </TreeView>
  );
}
```

### Disabled TreeItem
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function DisabledTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Active Item" />
      <TreeItem nodeId="2" label="Disabled Item" disabled />
      <TreeItem nodeId="3" label="Another Active Item" />
    </TreeView>
  );
}
```

### TreeView with Rich Content
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RichContentTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem
        nodeId="1"
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FolderIcon />
            <Typography variant="body1">Documents</Typography>
            <Typography variant="caption" color="text.secondary">
              (12 files)
            </Typography>
          </Box>
        }
      >
        <TreeItem nodeId="2" label="File 1.pdf" />
        <TreeItem nodeId="3" label="File 2.pdf" />
      </TreeItem>
    </TreeView>
  );
}
```

### Deeply Nested TreeView
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function DeepTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Level 0">
        <TreeItem nodeId="2" label="Level 1">
          <TreeItem nodeId="3" label="Level 2">
            <TreeItem nodeId="4" label="Level 3">
              <TreeItem nodeId="5" label="Level 4" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
```

### TreeView with Selection Callback
```tsx
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function CallbackTreeView() {
  const handleSelect = (event: React.SyntheticEvent, nodeId: string) => {
    console.log('Selected node:', nodeId);
    // Perform action based on selection
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label="Item 1" />
      <TreeItem nodeId="2" label="Item 2" />
      <TreeItem nodeId="3" label="Item 3" />
    </TreeView>
  );
}
```

---

## Common Patterns

### File System Tree
```tsx
<TreeView>
  <TreeItem nodeId="root" label="My Drive">
    <TreeItem nodeId="docs" label="Documents">
      <TreeItem nodeId="work" label="Work">
        <TreeItem nodeId="file1" label="Report.pdf" />
      </TreeItem>
    </TreeItem>
    <TreeItem nodeId="images" label="Images">
      <TreeItem nodeId="photo1" label="Photo1.jpg" />
    </TreeItem>
  </TreeItem>
</TreeView>
```

### Navigation Menu
```tsx
<TreeView>
  <TreeItem nodeId="dashboard" label="Dashboard" />
  <TreeItem nodeId="products" label="Products">
    <TreeItem nodeId="all-products" label="All Products" />
    <TreeItem nodeId="categories" label="Categories" />
    <TreeItem nodeId="inventory" label="Inventory" />
  </TreeItem>
  <TreeItem nodeId="orders" label="Orders">
    <TreeItem nodeId="pending" label="Pending" />
    <TreeItem nodeId="completed" label="Completed" />
  </TreeItem>
</TreeView>
```

### Category Tree
```tsx
<TreeView multiSelect>
  <TreeItem nodeId="electronics" label="Electronics">
    <TreeItem nodeId="computers" label="Computers" />
    <TreeItem nodeId="phones" label="Phones" />
  </TreeItem>
  <TreeItem nodeId="clothing" label="Clothing">
    <TreeItem nodeId="mens" label="Men's" />
    <TreeItem nodeId="womens" label="Women's" />
  </TreeItem>
</TreeView>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use adequate touch targets (48px minimum height)
- Increase tap area for expand/collapse icons
- Consider collapsible navigation drawer for tree
- Limit visible depth (2-3 levels)
- Use full-width items
- Consider horizontal scroll for deep nesting
- Larger icons (24px) for better touch targets

### Tablet (600px - 960px)
- Standard tree view works well
- 48px item height recommended
- 3-4 nesting levels acceptable
- Standard icon sizes (20px)

### Desktop (> 960px)
- Full tree view functionality
- 40-48px item height
- Deep nesting acceptable (4-5 levels)
- Hover states functional
- Keyboard navigation optimal
- Multi-select with Ctrl/Cmd click

---

## Total Variant Combinations

**TreeItem States:** 3 (Default, Expandable, Expanded)
**Selection States:** 2 (Unselected, Selected)
**Disabled States:** 2 (Enabled, Disabled)
**Focus States:** 2 (Unfocused, Focused)
**Hover States:** 2 (Not Hovering, Hovering)

**Total TreeItem Combinations:** 3 × 2 × 2 = **12 base combinations**
(Focus and Hover add additional interaction states)

**TreeView Modes:** Single-select, Multi-select

**Total:** **24+ combinations**

---

## Related Components
- **List:** For flat hierarchies
- **Menu:** For navigation without hierarchy
- **Accordion:** For expandable sections
- **Drawer:** For navigation panels containing TreeView
- **Breadcrumbs:** For showing current path in tree

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11061:149673
- **Component:** `<TreeView>`, `<TreeItem>`
- **States:** Default, Expandable, Expanded, Selected, Disabled
- **Spacing:** 16px indent per level
- **Documentation:** [MUI TreeView API](https://mui.com/x/react-tree-view/)

---

## Migration Notes

### From Previous Design System
- Item height standardized to 48px
- Indentation unified to 16px per level
- Icon size fixed at 16px
- Icon gap set to 8px
- Typography aligned to Body1 (16px)
- Selected state uses primary color (4% opacity background)
- Disabled state standardized (38% opacity text)
- Focus outline set to 2px primary (50% opacity)
- Hover state uses 4% opacity gray

### Design Tokens Required
- All color tokens (primary, text, icon, disabled)
- Typography tokens (Body1, 16px)
- Spacing tokens (8px, 16px)
- Icon size (16px)
- State opacity values (4%, 38%, 54%, 87%)
- Transition timing (150ms)

---

## Performance Considerations

- Virtualize for very large trees (> 1000 nodes)
- Lazy load children on expansion
- Memoize TreeItem components
- Debounce search/filter operations
- Avoid rendering all nodes upfront
- Use React.memo for static tree items
- Batch state updates for multi-select
- Consider pagination for massive datasets
- Optimize re-renders with proper keys
- Use controlled expansion for large trees

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications (MUI X Lab)
- 24+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Single and multi-select support
- Keyboard navigation fully documented


---


# Stepper Component Documentation

## Overview
The Stepper component displays progress through a sequence of logical and numbered steps. It guides users through multi-step processes like forms, workflows, or onboarding, providing clear visual feedback about their current position and progress.

**Component Type:** Navigation / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 Stepper
**Documentation:** [MUI Stepper API](https://mui.com/api/stepper)

---

## Design Tokens

### Step Icon Tokens
\`\`\`typescript
'--component/stepper/icon-size': '24px',
'--component/stepper/icon-bg-active': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/stepper/icon-bg-inactive': 'var(--color-palatte/action/disabled, rgba(0, 0, 0, 0.38))',
'--component/stepper/icon-bg-completed': 'var(--color-palatte/primary/main, #4b3fff)',
\`\`\`

### Label Tokens
\`\`\`typescript
'--component/stepper/label-color-active': 'var(--color-palatte/text/primary)',
'--component/stepper/label-color-inactive': 'var(--color-palatte/text/secondary)',
\`\`\`

### Connector Tokens
\`\`\`typescript
'--component/stepper/connector-color-inactive': 'var(--color-palatte/action/disabled)',
'--component/stepper/connector-color-active': 'var(--color-palatte/primary/main)',
\`\`\`

---

## Component Anatomy

### Stepper Container
- **Display:** Flex (horizontal) or Block (vertical)
- **Orientation:** Horizontal or Vertical
- **Steps:** Array of Step components

### Step States
- **Active:** Current step
- **Completed:** Finished step
- **Inactive:** Future step
- **Error:** Step with validation error

---

## Usage Guidelines

### When to Use
- Multi-step forms
- Checkout processes
- User onboarding
- Wizard interfaces
- Sequential tasks

### When NOT to Use
- Single-step processes
- Independent pages (use Tabs)
- Too many steps (> 10)

---

## CDS Token Integration

Uses CDS colors, spacing, and typography tokens.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
