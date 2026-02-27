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
