# Transfer List Component Documentation

## Overview
The Transfer List component (also known as dual list box or shuttle) allows users to move items between two lists. It's used for selecting multiple items from an available set and organizing them into a chosen set, commonly found in permission management, feature selection, and data organization interfaces.

**Component Type:** Input / Selection Component
**Based on:** Material-UI (MUI) v6.1.0 (Custom Pattern)
**Documentation:** [MUI Transfer List Pattern](https://mui.com/material-ui/react-transfer-list/)

---

## Design Tokens

### Container Tokens
\`\`\`typescript
'--component/transfer-list/width': '200px',        // Per list
'--component/transfer-list/height': '230px',       // List height
'--component/transfer-list/gap': 'var(--spacing/4, 16px)',  // Between lists
\`\`\`

### List Tokens
\`\`\`typescript
'--component/transfer-list/bg': 'var(--color-palatte/background/paper, #ffffff)',
'--component/transfer-list/border': '1px solid var(--color-palatte/divider)',
'--component/transfer-list/border-radius': 'var(--border-radius/small, 4px)',
\`\`\`

---

## Component Anatomy

### Transfer List Container
- **Lists:** Two side-by-side lists
- **Controls:** Buttons between lists
- **Items:** Checkable list items
- **Actions:** Move selected items

### Control Buttons
- **Move Right (>):** Transfer selected from left to right
- **Move Left (<):** Transfer selected from right to left  
- **Move All Right (>>):** Transfer all items right
- **Move All Left (<<):** Transfer all items left

---

## Usage Guidelines

### When to Use
- Permission assignment
- Feature selection
- Category management
- User/group assignment
- Filter selection
- Data organization

### When NOT to Use
- Single selection (use Select/Radio)
- Small item count (use Checkbox group)
- Simple yes/no (use Switch)
- Too many items (> 100 - use autocomplete)

---

## CDS Token Integration

Uses CDS List, Checkbox, IconButton, and Button components with full token integration.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
