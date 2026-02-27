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
