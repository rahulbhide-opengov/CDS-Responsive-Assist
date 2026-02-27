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
