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
