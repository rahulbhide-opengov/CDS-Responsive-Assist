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
