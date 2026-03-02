# CDS Utility Documentation

Complete documentation for all CDS utility components with design tokens, accessibility, and advanced patterns.

## Table of Contents

1. [Popover](#popover)
2. [Collapse](#collapse)
3. [Portal](#portal)
4. [FileUpload](#fileupload)

---

# Popover Component Documentation

## Overview
The Popover component displays floating content anchored to an element on the page. It's used for tooltips, dropdowns, menus, and contextual information that appears on demand. Popover provides precise positioning control and automatically handles edge detection to keep content visible within the viewport.

**Component Type:** Utility / Overlay Component
**Based on:** Material-UI (MUI) v6.1.0 Popover
**Documentation:** [MUI Popover API](https://mui.com/api/popover)

---

## Design Tokens

### Color Tokens
```typescript
// Uses CDS color system
'--component/popover/bg-color': 'var(--color-palatte/background/paper, #ffffff)',
'--component/popover/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
```

### Elevation Tokens
```typescript
// Uses CDS elevation system
'--component/popover/elevation': '8',  // Level 8 shadow (floating above content)
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/popover/z-index': '1300',  // CDS modal level (above app bar/drawer)
```

### Border Radius Tokens
```typescript
'--component/popover/border-radius': 'var(--border-radius/small, 4px)',
```

### Spacing Tokens
```typescript
// Content padding
'--component/popover/padding': 'var(--spacing/4, 16px)',
```

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/popover/transition-duration': 'var(--transition/duration/entering, 225ms)',
'--component/popover/transition-easing': 'var(--transition/easing/ease-out, cubic-bezier(0, 0, 0.2, 1))',
```

---

## Component Anatomy

### Popover Container
- **Position:** Absolute (portal rendered)
- **Background:** Paper white
- **Elevation:** 8 (shadow)
- **Z-Index:** 1300 (modal level)
- **Border Radius:** 4px (small)
- **Overflow:** Auto (scrollable if needed)

### Anchor Connection
- **Anchor Element:** The element Popover is positioned relative to
- **Anchor Origin:** Point on anchor element (top, center, bottom × left, center, right)
- **Transform Origin:** Point on Popover (top, center, bottom × left, center, right)
- **Position:** Calculated to connect anchor origin to transform origin

### Backdrop (Optional)
- **Overlay:** Optional semi-transparent backdrop
- **Behavior:** Click to close
- **Z-Index:** 1299 (below Popover)

---

## Anchor Origin Positions

### Vertical Options
- **top:** Top edge of anchor element
- **center:** Vertical center of anchor element
- **bottom:** Bottom edge of anchor element

### Horizontal Options
- **left:** Left edge of anchor element
- **center:** Horizontal center of anchor element
- **right:** Right edge of anchor element

### Common Combinations
```typescript
// Below element, left-aligned
anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}

// Above element, centered
anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

// Right side of element, top-aligned
anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
```

---

## Transform Origin Positions

Transform origin determines which point of the Popover aligns with the anchor point.

### Common Combinations
```typescript
// Popover's top-left corner at anchor point
transformOrigin={{ vertical: 'top', horizontal: 'left' }}

// Popover's bottom-center at anchor point
transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}

// Popover's center at anchor point (centered)
transformOrigin={{ vertical: 'center', horizontal: 'center' }}
```

---

## Common Positioning Patterns

### Dropdown Menu (Below Element)
```typescript
anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
transformOrigin={{ vertical: 'top', horizontal: 'left' }}
```

### Tooltip (Above Element)
```typescript
anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
```

### Context Menu (At Click Position)
```typescript
anchorReference="anchorPosition"
anchorPosition={{ top: mouseY, left: mouseX }}
```

### Side Panel (Right of Element)
```typescript
anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
transformOrigin={{ vertical: 'top', horizontal: 'left' }}
```

---

## Usage Guidelines

### When to Use
- Dropdown menus from buttons
- Rich tooltips with interactive content
- Context menus (right-click menus)
- Date pickers, color pickers
- User profile cards
- More actions menus
- Autocomplete suggestions
- Filter panels
- Contextual help panels

### When NOT to Use
- Simple text-only tooltips (use Tooltip component)
- Full-page overlays (use Dialog/Modal)
- Side navigation (use Drawer)
- Persistent UI elements (use permanent components)
- Mobile bottom sheets (use Drawer with anchor="bottom")
- Notifications (use Snackbar/Alert)

### Best Practices

#### Do
- Set appropriate anchor and transform origins
- Use elevation for visual hierarchy
- Allow click outside to close
- Provide escape key to close
- Keep content concise and focused
- Use for temporary content only
- Position to avoid viewport edges
- Test on small screens
- Provide accessible close button
- Use CDS Paper/Card inside for content

#### Don't
- Use for critical information
- Make content too large (use Dialog instead)
- Nest Popovers deeply
- Forget keyboard accessibility
- Block all interaction with backdrop
- Use for permanent navigation
- Forget mobile considerations
- Make content too complex
- Ignore viewport boundaries
- Forget to clean up on unmount

---

## Component Integration (CDS Base Components)

### With CDS Button
```typescript
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const [anchorEl, setAnchorEl] = useState(null);

<Button onClick={(e) => setAnchorEl(e.currentTarget)}>
  Open Menu
</Button>
<Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={() => setAnchorEl(null)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
>
  <Box sx={{ p: 2 }}>Popover content</Box>
</Popover>
```

### With CDS List (Menu)
```typescript
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <List>
    <ListItemButton onClick={handleAction1}>Action 1</ListItemButton>
    <ListItemButton onClick={handleAction2}>Action 2</ListItemButton>
    <ListItemButton onClick={handleAction3}>Action 3</ListItemButton>
  </List>
</Popover>
```

### With CDS Card (Rich Content)
```typescript
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <Card>
    <CardContent>
      <Typography variant="h6">User Profile</Typography>
      <Typography variant="body2">john@example.com</Typography>
    </CardContent>
  </Card>
</Popover>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div role="presentation">
  <div role="tooltip" id="popover-content">
    Popover content here
  </div>
</div>
```

#### ARIA Attributes
```typescript
{
  // On anchor element
  "aria-describedby": "popover-id",
  "aria-haspopup": "true",
  "aria-expanded": open,

  // On Popover
  id: "popover-id",
  role: "tooltip",  // or "dialog" for interactive content
  "aria-modal": false,  // Usually non-modal
}
```

#### Keyboard Navigation
- **Escape:** Close Popover
- **Tab:** Focus trap (optional, for modal behavior)
- **Click Outside:** Close Popover
- **Enter/Space:** Activate trigger

#### Focus Management
- Focus moves to Popover content when opened (optional)
- Focus returns to trigger when closed
- Tab order natural within Popover
- Escape key always works

#### Screen Reader Support
- Trigger announces Popover association
- Content announced when opened
- Close action announced
- Role appropriate for content type

---

## Code Examples

### Basic Popover
```tsx
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleClick}>Open Popover</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
}
```

### Dropdown Menu
```tsx
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (action: string) => {
    console.log(action);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Options
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <List sx={{ width: 200 }}>
          <ListItemButton onClick={() => handleMenuClick('Edit')}>
            <ListItemText primary="Edit" />
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick('Delete')}>
            <ListItemText primary="Delete" />
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick('Share')}>
            <ListItemText primary="Share" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
}
```

### Context Menu
```tsx
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function ContextMenu() {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX, mouseY: event.clientY }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <>
      <Box
        onContextMenu={handleContextMenu}
        sx={{ border: '1px dashed grey', p: 4, cursor: 'context-menu' }}
      >
        Right-click here to open context menu
      </Box>
      <Popover
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <List>
          <ListItemButton onClick={handleClose}>
            <ListItemText primary="Copy" />
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemText primary="Paste" />
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemText primary="Delete" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
}
```

### User Profile Card
```tsx
import Popover from '@mui/material/Popover';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function UserProfilePopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <Avatar
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ cursor: 'pointer' }}
      >
        JD
      </Avatar>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ width: 56, height: 56, mr: 2 }}>JD</Avatar>
              <Box>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  john.doe@example.com
                </Typography>
              </Box>
            </Box>
            <Button fullWidth variant="outlined">
              View Profile
            </Button>
          </CardContent>
        </Card>
      </Popover>
    </>
  );
}
```

### Tooltip-Style Popover
```tsx
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';

export default function TooltipPopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        <InfoIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ pointerEvents: 'none' }}
      >
        <Typography sx={{ p: 2, maxWidth: 300 }}>
          This is additional information displayed in a popover tooltip.
        </Typography>
      </Popover>
    </>
  );
}
```

### With Backdrop
```tsx
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function BackdropPopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
        Open with Backdrop
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        slotProps={{
          backdrop: {
            sx: { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
          }
        }}
      >
        <Box sx={{ p: 3, maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Modal-style Popover
          </Typography>
          <Typography variant="body2">
            This popover has a backdrop to focus attention.
          </Typography>
        </Box>
      </Popover>
    </>
  );
}
```

### Delayed Close
```tsx
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function DelayedPopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setAnchorEl(null);
      }
    }, 200);
  };

  return (
    <>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover Me
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: handleMouseLeave,
        }}
      >
        <Box sx={{ p: 2 }}>
          Popover content that stays open when hovering
        </Box>
      </Popover>
    </>
  );
}
```

### Multiple Origins
```tsx
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function MultiOriginPopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [position, setPosition] = useState({ vertical: 'bottom', horizontal: 'left' });

  const handleClick = (event: React.MouseEvent<HTMLElement>, pos: any) => {
    setAnchorEl(event.currentTarget);
    setPosition(pos);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={(e) => handleClick(e, { vertical: 'bottom', horizontal: 'left' })}>
          Bottom Left
        </Button>
        <Button onClick={(e) => handleClick(e, { vertical: 'top', horizontal: 'center' })}>
          Top Center
        </Button>
        <Button onClick={(e) => handleClick(e, { vertical: 'bottom', horizontal: 'right' })}>
          Bottom Right
        </Button>
      </Stack>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={position as any}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box sx={{ p: 2 }}>Positioned based on button clicked</Box>
      </Popover>
    </>
  );
}
```

---

## Common Patterns

### Action Menu
```tsx
<IconButton onClick={handleClick}>
  <MoreVertIcon />
</IconButton>
<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <List>
    <ListItemButton>Edit</ListItemButton>
    <ListItemButton>Delete</ListItemButton>
    <ListItemButton>Share</ListItemButton>
  </List>
</Popover>
```

### Filter Panel
```tsx
<Button onClick={handleClick}>Filters</Button>
<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <Box sx={{ p: 2, width: 300 }}>
    <Typography variant="h6" gutterBottom>Filters</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Active" />
      <FormControlLabel control={<Checkbox />} label="Inactive" />
    </FormGroup>
  </Box>
</Popover>
```

### Date Picker Trigger
```tsx
<TextField
  onClick={handleClick}
  value={selectedDate}
  label="Select Date"
  InputProps={{ readOnly: true }}
/>
<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <DateCalendar onChange={handleDateChange} />
</Popover>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Consider using Drawer instead for better mobile UX
- Ensure Popover doesn't overflow viewport
- Use appropriate positioning
- Test touch interactions
- Larger touch targets (48px minimum)

### Tablet (600px - 900px)
- Standard Popover behavior works well
- Adjust max-width for content
- Test both orientations

### Desktop (> 900px)
- Full Popover functionality
- Hover interactions possible
- Context menus work well
- Precise positioning

---

## CDS Token Integration

### Uses CDS Colors
```typescript
background: var(--color-palatte/background/paper, #ffffff);
color: var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87));
```

### Uses CDS Elevation
```typescript
box-shadow: var(--elevation/level-8);  // Floating elevation
```

### Uses CDS Z-Index
```typescript
z-index: var(--z-index/modal, 1300);
```

### Uses CDS Border Radius
```typescript
border-radius: var(--border-radius/small, 4px);
```

### Uses CDS Transitions
```typescript
transition-duration: var(--transition/duration/entering, 225ms);
transition-timing-function: var(--transition/easing/ease-out);
```

---

## Total Variant Combinations

**Anchor Origins:** 9 (3 vertical × 3 horizontal)
**Transform Origins:** 9 (3 vertical × 3 horizontal)
**Anchor Reference:** 2 (anchorEl, anchorPosition)
**Backdrop:** 2 (with, without)

**Total Combinations:** 9 × 9 × 2 × 2 = **324+ configurations**

---

## Related Components
- **Menu:** Specialized Popover for menus (CDS component)
- **Tooltip:** Simple text-only tooltips (CDS component)
- **Dialog:** Modal overlays (CDS component)
- **Drawer:** Side panels (CDS component)
- **Backdrop:** Overlay background (CDS component)

---

## Figma Design Reference
- **Component:** Popover / Floating Content
- **Elevation:** 8 (floating above content)
- **Z-Index:** 1300 (modal level)
- **Border Radius:** 4px
- **Based on CDS:** Uses CDS elevation, z-index, color, transition tokens
- **Documentation:** [MUI Popover API](https://mui.com/api/popover)

---

## Migration Notes

### Integration with CDS
- **Elevation:** Uses CDS level 8 shadow
- **Z-Index:** Uses CDS modal level (1300)
- **Colors:** Uses CDS background/paper and text tokens
- **Border Radius:** Uses CDS small (4px)
- **Transitions:** Uses CDS entering duration (225ms)
- **Integration:** Works with all CDS components (Button, List, Card, Typography, etc.)

### Design Tokens Required
- **Z-index tokens:** 1300 (modal level)
- **Elevation tokens:** Level 8 shadow
- **Color tokens:** background/paper, text/primary
- **Border radius tokens:** 4px (small)
- **Transition tokens:** 225ms entering duration, ease-out easing

---

## Performance Considerations

- Popover uses React Portal (renders outside DOM hierarchy)
- Positioning calculated on mount and scroll
- Uses transform for GPU-accelerated animations
- Clean up event listeners on unmount
- Avoid heavy content (lazy load if needed)
- Consider virtualization for long lists
- Use React.memo for static content
- Optimize re-renders with useCallback

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS elevation, z-index, color, border-radius, transition systems
- 324+ configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Utility component for positioned overlays


---


# Collapse Component Documentation

## Overview
The Collapse component expands and collapses content vertically with a smooth animation. It's used for accordion panels, expandable sections, show/hide content, and progressive disclosure patterns. Collapse automatically animates the height transition and supports nested collapsible content.

**Component Type:** Utility / Animation Component
**Based on:** Material-UI (MUI) v6.1.0 Collapse
**Documentation:** [MUI Collapse API](https://mui.com/api/collapse)

---

## Design Tokens

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/collapse/transition-duration-entering': 'var(--transition/duration/entering, 225ms)',
'--component/collapse/transition-duration-leaving': 'var(--transition/duration/leaving, 195ms)',
'--component/collapse/transition-easing-entering': 'var(--transition/easing/ease-out, cubic-bezier(0, 0, 0.2, 1))',
'--component/collapse/transition-easing-leaving': 'var(--transition/easing/ease-in, cubic-bezier(0.4, 0, 1, 1))',
```

### Height Tokens
```typescript
'--component/collapse/height-collapsed': '0px',
'--component/collapse/height-expanded': 'auto',
'--component/collapse/min-height': '0px',
```

---

## Component Anatomy

### Collapse Container
- **Overflow:** Hidden (during transition)
- **Height:** 0 (collapsed) → auto (expanded)
- **Transition:** Height with easing
- **Display:** Block
- **Transform Origin:** Top

### Content Wrapper
- **Inner Element:** Wraps actual content
- **Visibility:** Hidden when collapsed
- **Opacity:** Can animate (optional)
- **Margin:** Preserved during animation

### Animation Behavior
- **Enter:** 0 height → full height (225ms ease-out)
- **Exit:** Full height → 0 height (195ms ease-in)
- **Method:** CSS transition on height property
- **Smooth:** Handles dynamic content height

---

## Orientation Variants

### Vertical (Default)
- **Direction:** Top to bottom
- **Property:** Height animation
- **Use Case:** Most common, standard accordion
- **Default Behavior:** Expands downward

### Horizontal
- **Direction:** Left to right
- **Property:** Width animation
- **Use Case:** Sidebar expansion, horizontal panels
- **Rare:** Less common than vertical

---

## States

### Collapsed (Closed)
- **Height:** 0px
- **Overflow:** Hidden
- **Visibility:** Content hidden
- **Transition:** None (static)
- **Aria:** `aria-expanded="false"`

### Expanding (Opening)
- **Height:** 0 → auto
- **Duration:** 225ms
- **Easing:** ease-out
- **Overflow:** Hidden
- **Transition:** Active

### Expanded (Open)
- **Height:** auto
- **Overflow:** Visible
- **Visibility:** Content visible
- **Transition:** Complete
- **Aria:** `aria-expanded="true"`

### Collapsing (Closing)
- **Height:** auto → 0
- **Duration:** 195ms
- **Easing:** ease-in
- **Overflow:** Hidden
- **Transition:** Active

---

## Usage Guidelines

### When to Use
- Accordion panels
- Expandable content sections
- Show/hide details
- Progressive disclosure
- FAQ sections
- Form sections that can collapse
- Sidebar expansion
- Mobile menu expansion
- Filter panels
- Step-by-step forms

### When NOT to Use
- Tabs (use Tabs component)
- Dialogs/Modals (use Dialog)
- Fade animations (use Fade)
- Slide animations (use Slide)
- Complex multi-state transitions
- Horizontal carousels (use different component)

### Best Practices

#### Do
- Use for vertical content expansion
- Provide clear expand/collapse indicator
- Animate smoothly with CDS transitions
- Allow keyboard control (Enter/Space)
- Use ARIA attributes properly
- Keep collapsed content accessible
- Support multiple open panels (if appropriate)
- Use accordion pattern for related sections
- Provide visual feedback on hover
- Ensure content is fully visible when expanded

#### Don't
- Animate too slowly (> 300ms)
- Nest too many levels (> 3)
- Forget ARIA expanded state
- Hide critical information
- Use for permanent content
- Make toggle target too small
- Forget keyboard navigation
- Use without clear trigger
- Animate too quickly (< 150ms)
- Block all content during animation

---

## Component Integration (CDS Base Components)

### With CDS List (Nested Menu)
```typescript
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const [open, setOpen] = useState(false);

<List>
  <ListItemButton onClick={() => setOpen(!open)}>
    <ListItemText primary="Menu Item" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open}>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Sub Item 1" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Sub Item 2" />
      </ListItemButton>
    </List>
  </Collapse>
</List>
```

### With CDS Card (Expandable Card)
```typescript
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

<Card>
  <CardHeader
    title="Expandable Card"
    action={
      <IconButton onClick={() => setExpanded(!expanded)}>
        <ExpandMoreIcon />
      </IconButton>
    }
  />
  <Collapse in={expanded}>
    <CardContent>
      Hidden content that expands
    </CardContent>
  </Collapse>
</Card>
```

### With CDS Alert (Expandable Alert)
```typescript
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

<Collapse in={open}>
  <Alert
    action={
      <IconButton size="small" onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    }
    severity="info"
  >
    This is a collapsible alert message.
  </Alert>
</Collapse>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<button aria-expanded="false" aria-controls="content-id">
  Toggle Content
</button>
<div id="content-id" role="region" aria-labelledby="button-id">
  Collapsible content
</div>
```

#### ARIA Attributes
```typescript
{
  // On trigger button
  "aria-expanded": expanded,
  "aria-controls": "collapse-content-id",
  id: "trigger-button-id",

  // On Collapse content
  id: "collapse-content-id",
  role: "region",
  "aria-labelledby": "trigger-button-id",
}
```

#### Keyboard Navigation
- **Enter/Space:** Toggle expand/collapse
- **Tab:** Navigate to next focusable element
- **Shift+Tab:** Navigate to previous element
- **Escape:** Optional close (for modals)

#### Focus Management
- Focus remains on trigger after toggle
- Content receives focus if needed
- Tab order includes expanded content
- Skip links work properly

#### Screen Reader Support
- State announced ("expanded" / "collapsed")
- Content changes announced
- Region labeled appropriately
- Live region updates (optional)

---

## Code Examples

### Basic Collapse
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function BasicCollapse() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Button onClick={() => setChecked(!checked)}>
        {checked ? 'Hide' : 'Show'} Content
      </Button>
      <Collapse in={checked}>
        <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', mt: 2 }}>
          This is the collapsible content. It will expand and collapse with a smooth animation.
        </Box>
      </Collapse>
    </>
  );
}
```

### Accordion Panel
```tsx
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionCollapse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardHeader
        title="Expandable Section"
        action={
          <IconButton
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon
              sx={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography paragraph>
            This is the expandable content area. It contains additional details that are hidden by default.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
```

### Nested List Menu
```tsx
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedListCollapse() {
  const [open, setOpen] = useState(false);

  return (
    <List>
      <ListItemButton>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon><DraftsIcon /></ListItemIcon>
        <ListItemText primary="Drafts" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><SendIcon /></ListItemIcon>
            <ListItemText primary="Sent Mail" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="All Mail" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
```

### Multiple Collapsible Sections
```tsx
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MultipleCollapse() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Box>
      {['panel1', 'panel2', 'panel3'].map((panel, index) => (
        <Box key={panel} sx={{ border: '1px solid', borderColor: 'divider', mb: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              cursor: 'pointer',
            }}
            onClick={() => handleChange(panel)}
          >
            <Typography>Section {index + 1}</Typography>
            <IconButton size="small">
              <ExpandMoreIcon
                sx={{
                  transform: expanded === panel ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </IconButton>
          </Box>
          <Collapse in={expanded === panel}>
            <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography>Content for section {index + 1}</Typography>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
```

### Show More / Show Less
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ShowMoreCollapse() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box>
      <Typography paragraph>
        This is the always-visible content preview. Click "Show More" to see additional details.
      </Typography>
      <Collapse in={showMore} collapsedSize={0}>
        <Typography paragraph>
          This is additional content that is hidden by default. It provides more detailed information when expanded.
        </Typography>
        <Typography paragraph>
          You can include as much content as needed here. The collapse animation will handle the height automatically.
        </Typography>
      </Collapse>
      <Button onClick={() => setShowMore(!showMore)} size="small">
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
}
```

### Collapsible Alert
```tsx
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertCollapse() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Warning</AlertTitle>
        This is a collapsible warning alert — click the close button to dismiss!
      </Alert>
    </Collapse>
  );
}
```

### Partial Collapse
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PartialCollapse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Collapse in={!expanded} collapsedSize={40}>
        <Box sx={{ height: 200, bgcolor: 'primary.light', p: 2 }}>
          <Typography>
            This content is partially visible when collapsed (40px) and fully visible when expanded (200px).
          </Typography>
        </Box>
      </Collapse>
      <Button onClick={() => setExpanded(!expanded)} sx={{ mt: 1 }}>
        {expanded ? 'Expand' : 'Collapse'}
      </Button>
    </Box>
  );
}
```

### FAQ Accordion
```tsx
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQCollapse() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const faqs: FAQItem[] = [
    { question: 'What is Material-UI?', answer: 'Material-UI is a React component library...' },
    { question: 'How do I install it?', answer: 'Run npm install @mui/material...' },
    { question: 'Is it free?', answer: 'Yes, it is open source and free to use...' },
  ];

  return (
    <Box>
      {faqs.map((faq, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            mb: 1,
            overflow: 'hidden',
          }}
        >
          <Box
            onClick={() => setExpanded(expanded === index ? false : index)}
            sx={{
              p: 2,
              cursor: 'pointer',
              bgcolor: expanded === index ? 'action.selected' : 'transparent',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Typography fontWeight="medium">{faq.question}</Typography>
          </Box>
          <Collapse in={expanded === index}>
            <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography variant="body2">{faq.answer}</Typography>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
```

---

## Common Patterns

### Simple Toggle
```tsx
<Button onClick={() => setOpen(!open)}>Toggle</Button>
<Collapse in={open}>
  <Box sx={{ p: 2 }}>Content</Box>
</Collapse>
```

### Accordion Item
```tsx
<Box onClick={() => setExpanded(!expanded)} sx={{ cursor: 'pointer', p: 2 }}>
  <Typography>Accordion Title</Typography>
  <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
</Box>
<Collapse in={expanded}>
  <Box sx={{ p: 2 }}>Expanded content</Box>
</Collapse>
```

### Expandable List Item
```tsx
<ListItemButton onClick={() => setOpen(!open)}>
  <ListItemText primary="Item" />
  {open ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={open}>
  <List component="div" disablePadding>
    <ListItemButton sx={{ pl: 4 }}>Nested Item</ListItemButton>
  </List>
</Collapse>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Collapse works the same across devices
- Ensure touch targets are 48px minimum
- Consider full-width panels
- May want faster animations

### Tablet (600px - 900px)
- Standard behavior
- Good for accordions
- Side panels work well

### Desktop (> 900px)
- Full functionality
- Can use hover states
- Multiple columns possible
- Nested collapse supported

---

## CDS Token Integration

### Uses CDS Transitions
```typescript
// Entering (expanding)
transition-duration: var(--transition/duration/entering, 225ms);
transition-timing-function: var(--transition/easing/ease-out);

// Leaving (collapsing)
transition-duration: var(--transition/duration/leaving, 195ms);
transition-timing-function: var(--transition/easing/ease-in);
```

### Height Animation
```typescript
height: 0px;          // Collapsed
height: auto;         // Expanded
min-height: 0px;      // Minimum
overflow: hidden;     // During transition
```

---

## Total Variant Combinations

**States:** 4 (collapsed, expanding, expanded, collapsing)
**Orientations:** 2 (vertical, horizontal)
**Unmount Behavior:** 2 (unmountOnExit true/false)
**Timeout:** 3 (auto, custom, per-phase)
**Partial Collapse:** 2 (with collapsedSize, without)

**Practical Combinations:** 48+ configurations

---

## Related Components
- **Accordion:** Specialized Collapse for accordions (could be CDS component)
- **Expand/Transition:** Similar animation components
- **List:** Often used with nested collapsible items (CDS component)
- **Card:** Expandable cards (CDS component)
- **Alert:** Dismissible alerts (CDS component)

---

## Figma Design Reference
- **Component:** Collapse / Expand Animation
- **Transition:** 225ms entering (ease-out), 195ms leaving (ease-in)
- **Direction:** Vertical (default), Horizontal (optional)
- **Based on CDS:** Uses CDS transition tokens
- **Documentation:** [MUI Collapse API](https://mui.com/api/collapse)

---

## Migration Notes

### Integration with CDS
- **Transitions:** Uses CDS entering (225ms) and leaving (195ms) durations
- **Easing:** Uses CDS ease-out (enter) and ease-in (exit)
- **Integration:** Works with all CDS components (List, Card, Alert, Button, etc.)
- **Height Animation:** Automatic height calculation
- **Unmount Option:** `unmountOnExit` removes DOM content when collapsed

### Design Tokens Required
- **Transition tokens:** 225ms entering, 195ms leaving duration
- **Easing tokens:** ease-out (expanding), ease-in (collapsing)

---

## Performance Considerations

- Uses CSS transitions (GPU accelerated)
- Height auto calculation can cause reflows
- Use `unmountOnExit` to remove unused DOM nodes
- Avoid animating very large content blocks
- Consider lazy loading for heavy content
- Minimize nested collapse levels
- Use React.memo for static content
- `timeout="auto"` calculates optimal timing

---

## Best Practices Summary

### Transition Duration
- **Default:** 225ms enter, 195ms exit
- **Fast:** 150-200ms for simple content
- **Slow:** 300ms+ for complex content
- **Auto:** Let MUI calculate based on content height

### Accessibility
- Always provide `aria-expanded` on trigger
- Use `aria-controls` to link trigger and content
- Ensure keyboard navigation works
- Screen readers announce state changes

### Content
- Keep collapsed sections focused
- Don't hide critical information
- Use clear expand/collapse indicators
- Support multiple open panels when appropriate

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS transition system (entering/leaving durations and easing)
- 48+ configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Animation utility component for expand/collapse patterns


---


# Portal Component Documentation

## Overview
The Portal component renders children into a DOM node that exists outside the parent component's DOM hierarchy. It provides a way to render content at a different location in the DOM tree, which is useful for modals, tooltips, and other overlay components that need to escape parent container constraints like overflow, z-index, or positioning.

**Component Type:** Utility Component
**Based on:** Material-UI (MUI) v6.1.0 Portal
**Documentation:** [MUI Portal API](https://mui.com/api/portal)

---

## Design Tokens

Portal is a utility component with no visual styling. It uses the parent component's tokens.

```typescript
// No specific design tokens - utility component
// Inherits styling from children components
```

---

## Component Anatomy

### Portal Container
- **Render Location:** Outside parent DOM hierarchy
- **Default Container:** `document.body`
- **Custom Container:** Any DOM element
- **Children:** Any React elements
- **Visibility:** Determined by children

### Key Characteristics
- **No Styling:** Portal itself adds no styling
- **DOM Escape:** Breaks out of parent stacking context
- **Event Bubbling:** React events still bubble to parent
- **Accessibility:** Screen readers follow React tree, not DOM tree

---

## Use Cases

### When to Use
- **Modals/Dialogs:** Prevent overflow/z-index issues
- **Tooltips:** Render above all content
- **Popovers:** Escape parent constraints
- **Dropdowns:** Avoid clipping by overflow: hidden
- **Full-screen overlays:** Render at body level
- **Custom positioning:** Need to escape parent stacking context
- **Sticky elements:** That need different positioning context

### When NOT to Use
- **Normal content flow:** Use regular components
- **Simple layouts:** No parent constraints
- **SEO-critical content:** Portal content may affect crawling
- **Server-side rendering:** Can cause hydration issues if not careful
- **Simple tooltips:** Use Tooltip component (has built-in Portal)

---

## Container Options

### Default (document.body)
```typescript
<Portal>
  <div>Renders in document.body</div>
</Portal>
```
- **Container:** `document.body`
- **Use Case:** Most common, full-page overlays
- **Default:** When no container specified

### Custom Container
```typescript
const container = document.getElementById('custom-root');

<Portal container={container}>
  <div>Renders in custom container</div>
</Portal>
```
- **Container:** Any DOM element
- **Use Case:** Specific placement requirements
- **Flexibility:** Full control over render location

### Disabled Portal
```typescript
<Portal disablePortal>
  <div>Renders in normal DOM position</div>
</Portal>
```
- **Behavior:** Acts like normal React component
- **Use Case:** Conditional portal behavior
- **Testing:** Easier to test without portal

---

## Component Integration (CDS Base Components)

### With CDS Modal/Dialog
```typescript
import Portal from '@mui/material/Portal';
import { useState } from 'react';

function ModalWithPortal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '4px' }}>
              <h2>Modal Content</h2>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
```

### With CDS Tooltip (Custom)
```typescript
import Portal from '@mui/material/Portal';
import { useState, useRef } from 'react';

function CustomTooltip({ children, tooltip }) {
  const [show, setShow] = useState(false);
  const anchorRef = useRef(null);

  return (
    <>
      <span
        ref={anchorRef}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && (
        <Portal>
          <div style={{
            position: 'absolute',
            top: anchorRef.current?.getBoundingClientRect().bottom + 8,
            left: anchorRef.current?.getBoundingClientRect().left,
            background: '#616161',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1500,
          }}>
            {tooltip}
          </div>
        </Portal>
      )}
    </>
  );
}
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Focus Management
```typescript
// Portal doesn't affect React focus order
<Portal>
  <button>Still in React focus order</button>
</Portal>
```

#### Screen Reader Considerations
- **React Tree:** Screen readers follow React tree, not DOM order
- **ARIA:** All ARIA attributes work normally
- **Navigation:** Keyboard navigation follows React order
- **Announcement:** Content changes announced correctly

#### Best Practices
- Use Portal for visual positioning only
- Maintain logical focus order in React tree
- Provide proper ARIA labels
- Ensure keyboard accessibility
- Test with screen readers

---

## Code Examples

### Basic Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function BasicPortal() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Portal Content
      </button>
      {show && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1300,
          }}>
            <h3>Portal Content</h3>
            <p>This is rendered in document.body</p>
          </div>
        </Portal>
      )}
    </div>
  );
}
```

### Custom Container Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState, useRef, useEffect } from 'react';

export default function CustomContainerPortal() {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Portal</button>
      
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          marginTop: '20px',
          padding: '20px',
          border: '2px dashed #ccc',
          minHeight: '200px',
        }}
      >
        <p>Custom Portal Container</p>
        {show && containerRef.current && (
          <Portal container={containerRef.current}>
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '10px',
              background: 'lightblue',
              borderRadius: '4px',
            }}>
              Portal content in custom container
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
}
```

### Conditional Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function ConditionalPortal() {
  const [usePortal, setUsePortal] = useState(true);

  return (
    <div style={{ overflow: 'hidden', height: '200px', border: '1px solid #ccc' }}>
      <label>
        <input
          type="checkbox"
          checked={usePortal}
          onChange={(e) => setUsePortal(e.target.checked)}
        />
        Use Portal (escape overflow)
      </label>
      
      <Portal disablePortal={!usePortal}>
        <div style={{
          marginTop: '150px',
          padding: '10px',
          background: 'yellow',
        }}>
          {usePortal ? 'Escaped overflow!' : 'Clipped by overflow'}
        </div>
      </Portal>
    </div>
  );
}
```

### Tooltip Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState, useRef } from 'react';

export default function TooltipPortal() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
      setShow(true);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
      >
        Hover me
      </button>
      {show && (
        <Portal>
          <div style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            padding: '4px 8px',
            background: '#616161',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            pointerEvents: 'none',
            zIndex: 1500,
          }}>
            Tooltip content
          </div>
        </Portal>
      )}
    </>
  );
}
```

### Fullscreen Overlay
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function FullscreenOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Fullscreen</button>
      {open && (
        <Portal>
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1400,
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '8px',
              maxWidth: '500px',
            }}>
              <h2>Fullscreen Content</h2>
              <p>This overlay is rendered at document.body level.</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
```

### Multiple Portals
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function MultiplePortals() {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{ marginLeft: '10px' }}
      >
        Hover for Tooltip
      </button>

      {showModal && (
        <Portal>
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '4px' }}>
              <h3>Modal</h3>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}

      {showTooltip && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: '100px',
            left: '200px',
            padding: '4px 8px',
            background: '#616161',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1500,
          }}>
            Tooltip
          </div>
        </Portal>
      )}
    </>
  );
}
```

---

## Common Patterns

### Modal/Dialog Base
```tsx
{isOpen && (
  <Portal>
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
      </div>
    </div>
  </Portal>
)}
```

### Dropdown Menu
```tsx
{isOpen && (
  <Portal>
    <div style={{
      position: 'absolute',
      top: anchorPosition.bottom,
      left: anchorPosition.left,
      zIndex: 1300,
    }}>
      {menuItems}
    </div>
  </Portal>
)}
```

### Toast Notification
```tsx
<Portal>
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1400,
  }}>
    {notifications}
  </div>
</Portal>
```

---

## Server-Side Rendering (SSR)

### SSR Considerations
```tsx
import Portal from '@mui/material/Portal';
import { useEffect, useState } from 'react';

function SSRSafePortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Portal>{children}</Portal>;
}
```

### Hydration Issues
- Portal renders to `document.body` by default
- Server doesn't have `document.body`
- Use `useEffect` to delay portal rendering
- Or use `disablePortal` during SSR

---

## Performance Considerations

### Best Practices
- Portal is very lightweight (no performance overhead)
- Creates minimal DOM nodes
- React events work normally (bubble through React tree)
- Clean up portal content on unmount
- Avoid creating many portal instances simultaneously
- Use conditional rendering to mount/unmount

### Memory Management
```tsx
// Good - Portal unmounts when component unmounts
{show && <Portal>{content}</Portal>}

// Good - Cleanup happens automatically
useEffect(() => {
  return () => {
    // Portal content automatically removed
  };
}, []);
```

---

## CDS Token Integration

Portal itself has no styling. Components rendered inside Portal should use CDS tokens:

```tsx
<Portal>
  <Box sx={{
    position: 'fixed',
    bgcolor: 'background.paper',
    boxShadow: 8,
    borderRadius: 1,
    p: 3,
    zIndex: 'modal',
  }}>
    Content using CDS tokens
  </Box>
</Portal>
```

---

## Related Components

- **Modal** - Uses Portal internally (CDS component)
- **Dialog** - Uses Portal internally (CDS component)
- **Popover** - Uses Portal internally (CDS component)
- **Menu** - Uses Portal internally (CDS component)
- **Tooltip** - Uses Portal internally (CDS component)
- **Drawer** - Uses Portal for temporary variant (CDS component)

**Note:** Most overlay components in MUI use Portal internally, so you rarely need to use Portal directly.

---

## Figma Design Reference

Portal is a utility component with no visual representation in Figma.

**Documentation:** [MUI Portal API](https://mui.com/api/portal)

---

## Migration Notes

### Integration with CDS
- **Utility Only:** Portal provides no styling
- **Use with CDS Components:** Combine with Box, Paper, etc. for styled content
- **Z-Index:** Use CDS z-index tokens for proper layering
- **Events:** React event system works normally through Portal

### Design Tokens Required
- None directly (Portal is unstyled)
- Use CDS tokens on children components

---

## Testing

### Unit Testing
```tsx
import { render } from '@testing-library/react';
import Portal from '@mui/material/Portal';

test('renders children in portal', () => {
  const { container } = render(
    <Portal>
      <div data-testid="portal-content">Content</div>
    </Portal>
  );
  
  // Content is not in container (rendered in document.body)
  expect(container.querySelector('[data-testid="portal-content"]')).toBeNull();
  
  // Content is in document.body
  expect(document.querySelector('[data-testid="portal-content"]')).toBeInTheDocument();
});
```

### Testing with disablePortal
```tsx
test('renders children normally when disabled', () => {
  const { container } = render(
    <Portal disablePortal>
      <div data-testid="portal-content">Content</div>
    </Portal>
  );
  
  // Content is in container when portal disabled
  expect(container.querySelector('[data-testid="portal-content"]')).toBeInTheDocument();
});
```

---

## Debugging Tips

### Common Issues

**Issue:** Portal content not visible
- **Check:** Z-index value
- **Check:** Position is set (absolute/fixed)
- **Check:** Container element exists

**Issue:** Events not working
- **Solution:** React events work normally - check event handlers

**Issue:** SSR hydration mismatch
- **Solution:** Use `useEffect` to delay portal rendering

**Issue:** Focus management problems
- **Solution:** Manually manage focus with refs

---

## Version History

- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Utility component for DOM rendering outside parent hierarchy
- No visual styling (utility only)
- Works with all CDS components
- Full React event compatibility

---

## Best Practices Summary

### Do
- Use Portal for overlays that need to escape parent constraints
- Clean up portal content on unmount
- Use CDS tokens on content inside Portal
- Handle SSR carefully with useEffect
- Test portal behavior in different scenarios
- Use z-index tokens for proper layering

### Don't
- Use Portal for normal content flow
- Forget to clean up on unmount
- Create too many simultaneous portals
- Ignore SSR considerations
- Use without proper positioning
- Forget accessibility in portal content

---

**Portal is a low-level utility. Most developers should use higher-level components like Dialog, Popover, or Menu that use Portal internally.**


---


# File Upload Component Documentation

## Overview
The File Upload pattern allows users to select and upload files from their local system. While Material-UI doesn't provide a dedicated FileUpload component, this document covers best practices for implementing file upload functionality using CDS components (Button, IconButton, TextField) combined with HTML5 file inputs, drag-and-drop zones, and upload progress indicators.

**Component Type:** Input / Pattern Component
**Based on:** HTML5 File API + Material-UI (MUI) v6.1.0 Components
**Documentation:** Pattern-based implementation

---

## Design Tokens

### Button Tokens (for Upload Triggers)
```typescript
// Uses CDS Button tokens
'--component/file-upload/button-height': 'var(--sizing/button/medium, 40px)',
'--component/file-upload/button-padding': 'var(--spacing/1.5, 6px) var(--spacing/4, 16px)',
```

### Drop Zone Tokens
```typescript
'--component/file-upload/dropzone-border': '2px dashed var(--color-palatte/divider, rgba(0, 0, 0, 0.12))',
'--component/file-upload/dropzone-border-active': '2px dashed var(--color-palatte/primary/main, #4b3fff)',
'--component/file-upload/dropzone-bg': 'var(--color-palatte/action/hover, rgba(0, 0, 0, 0.04))',
'--component/file-upload/dropzone-bg-active': 'var(--color-palatte/primary/light, rgba(75, 63, 255, 0.08))',
'--component/file-upload/dropzone-padding': 'var(--spacing/8, 32px)',
'--component/file-upload/dropzone-border-radius': 'var(--border-radius/small, 4px)',
```

### File List Tokens
```typescript
'--component/file-upload/file-item-padding': 'var(--spacing/2, 8px)',
'--component/file-upload/file-item-border': '1px solid var(--color-palatte/divider)',
'--component/file-upload/file-item-border-radius': 'var(--border-radius/small, 4px)',
```

---

## Component Anatomy

### File Input (Hidden)
- **Element:** `<input type="file" />`
- **Visibility:** Hidden with CSS
- **Trigger:** Button click
- **Multiple:** Single or multiple files
- **Accept:** File type restrictions

### Upload Button
- **Component:** CDS Button or IconButton
- **Action:** Triggers file input click
- **Icon:** CloudUpload, AttachFile, etc.
- **Label:** "Upload", "Choose File", etc.

### Drop Zone (Optional)
- **Area:** Drag and drop target
- **Visual:** Dashed border, hover state
- **Feedback:** Visual indication on drag over
- **Alternative:** To button click

### File List
- **Display:** Selected files
- **Info:** Name, size, type
- **Actions:** Remove, preview
- **Progress:** Upload progress bar

---

## Implementation Patterns

### Basic Button Upload
```typescript
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

<Button
  component="label"
  variant="contained"
  startIcon={<CloudUploadIcon />}
>
  Upload File
  <input
    type="file"
    hidden
    onChange={handleFileChange}
  />
</Button>
```

### Icon Button Upload
```typescript
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';

<IconButton component="label" color="primary">
  <AttachFileIcon />
  <input
    type="file"
    hidden
    onChange={handleFileChange}
  />
</IconButton>
```

### Multiple Files
```typescript
<Button component="label" variant="outlined">
  Upload Multiple Files
  <input
    type="file"
    hidden
    multiple
    onChange={handleMultipleFiles}
  />
</Button>
```

### File Type Restrictions
```typescript
<Button component="label" variant="contained">
  Upload Image
  <input
    type="file"
    hidden
    accept="image/*"
    onChange={handleImageUpload}
  />
</Button>

// Specific types
accept=".pdf,.doc,.docx"
accept="image/png,image/jpeg"
accept="video/*"
```

---

## Usage Guidelines

### When to Use
- Document upload forms
- Profile photo upload
- Bulk file imports
- Attachment features
- Media upload (images, videos)
- CSV/Excel imports
- Resume/CV upload
- File-based configurations

### When NOT to Use
- Text input (use TextField)
- Simple data entry
- URL-based content
- Copy-paste content
- Small amounts of text

### Best Practices

#### Do
- Show selected file name and size
- Provide file type restrictions
- Display upload progress
- Allow file removal before upload
- Validate file size and type
- Show clear error messages
- Support drag-and-drop (for desktop)
- Indicate allowed file types
- Provide file preview when appropriate
- Show upload success/failure state

#### Don't
- Upload without user confirmation
- Allow unlimited file sizes
- Forget to validate file types
- Hide upload progress
- Make file selection unclear
- Forget mobile considerations
- Allow dangerous file types (.exe, .bat)
- Forget to handle errors
- Block UI during upload
- Forget to provide cancel option

---

## Component Integration (CDS Base Components)

### With CDS Button
```typescript
import Button from '@mui/material/Button';
import { useState } from 'react';

function FileUploadButton() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <Button component="label" variant="contained">
        Choose File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {file && <Typography sx={{ mt: 1 }}>Selected: {file.name}</Typography>}
    </>
  );
}
```

### With CDS LinearProgress
```typescript
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';

function FileUploadWithProgress() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file: File) => {
    setUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(i);
    }
    setUploading(false);
  };

  return (
    <>
      <Button component="label" variant="contained" disabled={uploading}>
        Upload File
        <input
          type="file"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
          }}
        />
      </Button>
      {uploading && <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />}
    </>
  );
}
```

### With CDS List (File List)
```typescript
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function FileUploadList() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button component="label" variant="contained">
        Add Files
        <input type="file" hidden multiple onChange={handleFileChange} />
      </Button>
      <List>
        {files.map((file, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleRemove(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={file.name}
              secondary={`${(file.size / 1024).toFixed(2)} KB`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
```typescript
<Button component="label" variant="contained">
  Upload File
  <input
    type="file"
    hidden
    onChange={handleFileChange}
    aria-label="Upload file"
  />
</Button>
```
- **Tab:** Focus on button
- **Enter/Space:** Activate file picker
- **Escape:** Cancel file picker (native)

#### ARIA Attributes
```typescript
{
  // On button/label
  "aria-label": "Upload file",
  "aria-describedby": "file-upload-help",

  // On file input
  "aria-required": true,
  "aria-invalid": hasError,
}
```

#### Screen Reader Support
- Button label announced
- File selection announced
- Upload progress announced
- Error messages announced
- Success state announced

#### Color Contrast
- Button text: 4.5:1 minimum
- Error messages: 4.5:1 minimum
- Drop zone border: Visible distinction
- Progress indicator: Clear visibility

---

## Code Examples

### Basic File Upload
```tsx
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

export default function BasicFileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Choose File
        <input
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {file && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </Typography>
      )}
    </div>
  );
}
```

### Drag and Drop Zone
```tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

export default function DragDropUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        border: isDragging ? '2px dashed' : '2px dashed',
        borderColor: isDragging ? 'primary.main' : 'divider',
        bgcolor: isDragging ? 'primary.light' : 'action.hover',
        borderRadius: 1,
        p: 4,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
    >
      <CloudUploadIcon sx={{ fontSize: 48, color: 'action.active', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        {file ? file.name : 'Drag and drop file here'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        or click to browse
      </Typography>
    </Box>
  );
}
```

### Multiple File Upload with Preview
```tsx
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useState } from 'react';

export default function MultipleFileUpload() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button component="label" variant="contained">
        Add Files
        <input type="file" hidden multiple onChange={handleFileChange} />
      </Button>
      {files.length > 0 && (
        <List sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemove(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <InsertDriveFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={file.name}
                secondary={`${(file.size / 1024).toFixed(2)} KB - ${file.type || 'Unknown type'}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
```

### Image Upload with Preview
```tsx
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function ImageUploadPreview() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Button component="label" variant="contained">
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
      {preview && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>Preview:</Typography>
          <Box
            component="img"
            src={preview}
            alt="Preview"
            sx={{
              maxWidth: 300,
              maxHeight: 300,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
```

### Upload with Validation
```tsx
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function ValidatedFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setError('');

    if (!selectedFile) return;

    if (selectedFile.size > MAX_SIZE) {
      setError('File size must be less than 5MB');
      return;
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('Only JPG, PNG, and PDF files are allowed');
      return;
    }

    setFile(selectedFile);
  };

  return (
    <>
      <Button component="label" variant="contained">
        Upload File (Max 5MB)
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {file && (
        <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
          ✓ {file.name} ready to upload
        </Typography>
      )}
    </>
  );
}
```

### Complete Upload Flow
```tsx
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function CompleteUploadFlow() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setSuccess(false);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError('');

    try {
      // Simulate upload
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setProgress(i);
      }
      setSuccess(true);
      setFile(null);
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button component="label" variant="outlined" disabled={uploading}>
          Choose File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button
          variant="contained"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          Upload
        </Button>
      </Box>

      {file && !uploading && !success && (
        <Typography variant="body2">
          Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </Typography>
      )}

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Uploading... {progress}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          File uploaded successfully!
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}
```

---

## Common Patterns

### Simple Upload Button
```tsx
<Button component="label" variant="contained">
  Upload
  <input type="file" hidden onChange={handleFileChange} />
</Button>
```

### Avatar Upload
```tsx
<Avatar>
  <IconButton component="label">
    <CameraAltIcon />
    <input type="file" hidden accept="image/*" />
  </IconButton>
</Avatar>
```

### Attachment Field
```tsx
<TextField
  fullWidth
  value={fileName}
  InputProps={{
    readOnly: true,
    endAdornment: (
      <IconButton component="label">
        <AttachFileIcon />
        <input type="file" hidden />
      </IconButton>
    ),
  }}
/>
```

---

## Validation

### File Size Validation
```typescript
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

if (file.size > MAX_SIZE) {
  alert('File too large');
}
```

### File Type Validation
```typescript
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

if (!ALLOWED_TYPES.includes(file.type)) {
  alert('Invalid file type');
}
```

### File Extension Validation
```typescript
const allowedExtensions = ['.jpg', '.png', '.pdf'];
const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

if (!allowedExtensions.includes(fileExtension)) {
  alert('Invalid file extension');
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Full-width buttons
- Simplified upload UI
- Native file picker
- Touch-optimized
- Camera access (accept="image/*" on mobile)

### Tablet (600px - 900px)
- Standard button sizes
- Drag-and-drop optional
- File list with details

### Desktop (> 900px)
- Drag-and-drop zones
- Multiple file selection
- File previews
- Advanced validation

---

## CDS Token Integration

### Uses CDS Button Tokens
```typescript
button-height: var(--sizing/button/medium, 40px);
button-padding: var(--spacing/4, 16px);
```

### Uses CDS Colors
```typescript
border-color: var(--color-palatte/divider);
bg-active: var(--color-palatte/primary/light);
```

### Uses CDS Spacing
```typescript
padding: var(--spacing/8, 32px);
gap: var(--spacing/2, 8px);
```

---

## Security Considerations

### File Validation
- Always validate file types on server
- Check file size limits
- Scan for malware
- Sanitize file names
- Use secure upload endpoints

### Dangerous File Types
```typescript
// Block these extensions
const BLOCKED_EXTENSIONS = [
  '.exe', '.bat', '.cmd', '.sh',
  '.js', '.vbs', '.msi', '.app'
];
```

---

## Version History

- **v1.0** - Initial CDS integration documentation
- Based on HTML5 File API + MUI v6.1.0 components
- Pattern-based implementation
- Uses CDS Button, IconButton, List, LinearProgress, Alert
- Full CDS token integration
- WCAG 2.1 Level AA accessibility compliance

---

**Note:** File Upload is a pattern, not a dedicated MUI component. This documentation provides best practices for implementing file upload using CDS components.
