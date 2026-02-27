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
