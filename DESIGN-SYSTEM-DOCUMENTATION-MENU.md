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
