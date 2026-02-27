# Table Component Documentation

## Overview
The Table component displays data in rows and columns with support for sorting, selection, pagination, fixed headers, pinned columns, and hierarchical (indented) data. It's designed for structured data presentation with rich interactive features.

**Component Type:** Data Display / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination
**Documentation:** [MUI Table API](https://mui.com/api/table)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/table/border-color': 'rgba(224, 224, 224, 1)',
'--component/table/border-width': '1px',
'--component/table/cell-padding': '16px',
'--component/table/cell-height': '52px',
'--component/table/header-height': '56px',
'--component/table/dense-cell-height': '40px',
```

### Header Tokens
```typescript
'--component/table/header/bg-color': '#fafafa',
'--component/table/header/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/header/font-size': '14px',
'--component/table/header/font-weight': '500',
'--component/table/header/line-height': '24px',
```

### Cell Tokens
```typescript
'--component/table/cell/bg-color': '#ffffff',
'--component/table/cell/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/cell/font-size': '14px',
'--component/table/cell/font-weight': '400',
'--component/table/cell/line-height': '24px',
```

### Row State Tokens
```typescript
// Default
'--component/table/row/bg-color-default': '#ffffff',

// Hover
'--component/table/row/bg-color-hover': 'rgba(0, 0, 0, 0.04)',

// Selected
'--component/table/row/bg-color-selected': 'rgba(75, 63, 255, 0.08)',

// Striped (Alternate rows)
'--component/table/row/bg-color-striped': 'rgba(0, 0, 0, 0.02)',
```

### Indent Tokens (Hierarchical)
```typescript
'--component/table/indent-level-0': '0px',
'--component/table/indent-level-1': '24px',
'--component/table/indent-level-2': '48px',
'--component/table/indent-level-3': '72px',
```

### Pagination Tokens
```typescript
'--component/table/pagination/height': '52px',
'--component/table/pagination/bg-color': '#ffffff',
'--component/table/pagination/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/table/pagination/font-size': '14px',
```

---

## Table Types

### Basic Table
- **Structure:** Simple rows and columns
- **Features:** Header row, data rows, borders
- **Use Case:** Simple data display, read-only data
- **Interaction:** None (display only)

### Advanced Table
- **Structure:** Header + data rows with additional features
- **Features:** Sorting, selection (checkboxes), hover states
- **Use Case:** Interactive data, user selections, sortable data
- **Interaction:** Click to sort, select rows

### Pinned Columns Table
- **Structure:** Fixed left/right columns with scrollable middle
- **Features:** Horizontal scroll, sticky columns
- **Use Case:** Wide tables, important columns always visible
- **Interaction:** Horizontal scroll, column pinning

### Indented Table
- **Structure:** Hierarchical data with visual indentation
- **Features:** Parent-child relationships, expandable rows
- **Use Case:** Tree data, nested categories, file systems
- **Interaction:** Expand/collapse, navigate hierarchy
- **Indent Levels:** 0-3 (0px, 24px, 48px, 72px)

---

## Component Anatomy

### TableContainer
- **Purpose:** Wrapper for horizontal scroll
- **Elevation:** Optional Paper elevation
- **Max Height:** Can be set for vertical scroll

### TableHead
- **Purpose:** Contains header row
- **Background:** Light gray (`#fafafa`)
- **Sticky:** Can be fixed on scroll

### TableBody
- **Purpose:** Contains data rows
- **Background:** White
- **Scroll:** Vertical scroll if max height set

### TableRow
- **Purpose:** Single row of data
- **Height:** 52px (default), 40px (dense)
- **States:** Default, Hover, Selected

### TableCell
- **Purpose:** Individual cell content
- **Padding:** 16px
- **Alignment:** Left (default), Right, Center
- **Width:** Auto or fixed

### TablePagination
- **Purpose:** Page navigation controls
- **Height:** 52px
- **Position:** Bottom of table
- **Controls:** Rows per page, page navigation

---

## Cell Alignment

### Left Aligned (Default)
- **Text Alignment:** Left
- **Use Case:** Text content, names, descriptions
- **Padding:** 16px left/right

### Right Aligned
- **Text Alignment:** Right
- **Use Case:** Numbers, currency, quantities
- **Padding:** 16px left/right

### Center Aligned
- **Text Alignment:** Center
- **Use Case:** Status indicators, icons, badges
- **Padding:** 16px left/right

---

## Row States

### Default
- **Background:** White
- **Text:** Primary text color
- **Border:** Bottom border (1px, light gray)
- **Cursor:** Default

### Hover
- **Background:** `rgba(0, 0, 0, 0.04)` (light gray)
- **Text:** Primary text color
- **Border:** Bottom border maintained
- **Cursor:** pointer (if clickable)
- **Transition:** 150ms

### Selected
- **Background:** `rgba(75, 63, 255, 0.08)` (light primary)
- **Text:** Primary dark color
- **Border:** Bottom border maintained
- **Visual:** Clear selection indicator
- **Checkbox:** Checked state

---

## Indentation Levels

### Level 0 (No Indent)
- **Padding Left:** 16px (standard)
- **Use Case:** Top-level items, root nodes

### Level 1
- **Padding Left:** 40px (16px + 24px indent)
- **Use Case:** First-level children
- **Visual:** Slightly indented

### Level 2
- **Padding Left:** 64px (16px + 48px indent)
- **Use Case:** Second-level children
- **Visual:** Moderately indented

### Level 3
- **Padding Left:** 88px (16px + 72px indent)
- **Use Case:** Third-level children
- **Visual:** Deeply indented
- **Note:** Maximum recommended depth

---

## Usage Guidelines

### When to Use
- Displaying structured data in rows/columns
- Comparing data across multiple attributes
- Sortable datasets
- Selectable records
- Data requiring pagination
- Hierarchical data structures
- Financial data, reports
- Product catalogs

### When NOT to Use
- Small datasets (< 5 rows) - use List instead
- Unstructured content - use Card or List
- Mobile-first designs with narrow viewports
- Single-column data - use List
- Real-time streaming data - consider virtual scrolling

### Best Practices

#### Do
- Use header row for column labels
- Align numbers to the right
- Align text to the left
- Use pagination for large datasets (> 50 rows)
- Provide sorting when helpful
- Use checkboxes for multi-select
- Show hover state for clickable rows
- Use fixed headers for tall tables
- Pin important columns when scrolling horizontally
- Limit indent levels to 3 maximum

#### Don't
- Use tables for layout purposes
- Forget responsive behavior
- Make columns too narrow (< 100px)
- Overcrowd with too many columns (> 10)
- Use tables on small mobile screens
- Mix alignment styles inconsistently
- Forget pagination for large datasets
- Hide important columns off-screen

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic Table Structure
```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

#### ARIA Attributes
```typescript
{
  role: "table",               // For table
  role: "rowgroup",            // For thead/tbody
  role: "row",                 // For tr
  role: "columnheader",        // For th
  role: "cell",                // For td
  "aria-label": string,        // Table description
  "aria-sort": "ascending" | "descending" | "none",
  "aria-selected": boolean,    // Selected rows
  "aria-rowindex": number,     // Row index
  "aria-colindex": number,     // Column index
}
```

#### Keyboard Navigation
- **Tab:** Navigate through interactive elements
- **Arrow Keys:** Navigate cells (if implemented)
- **Space:** Select row (if selectable)
- **Enter:** Activate row action

#### Sortable Headers
```html
<th scope="col" aria-sort="ascending">
  <button>Name</button>
</th>
```

#### Color Contrast
- **Header Text:** 4.5:1 minimum against background
- **Cell Text:** 4.5:1 minimum against background
- **Selected Row:** Sufficient contrast maintained
- **Hover State:** 3:1 minimum change

#### Screen Reader Support
- Use proper table semantics (thead, tbody, th, td)
- Provide scope="col" or scope="row" on headers
- Announce sort direction changes
- Announce selection changes
- Provide table caption or aria-label

---

## Code Examples

### Basic Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const rows = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

### Table with Selection
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

export default function SelectableTable() {
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            selected={selected.includes(row.id)}
            onClick={() => handleSelect(row.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={selected.includes(row.id)} />
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Table with Pagination
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

export default function PaginatedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
      />
    </Paper>
  );
}
```

### Indented Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Row {
  id: number;
  name: string;
  level: number;
}

export default function IndentedTable() {
  const rows: Row[] = [
    { id: 1, name: 'Parent', level: 0 },
    { id: 2, name: 'Child 1', level: 1 },
    { id: 3, name: 'Child 2', level: 1 },
    { id: 4, name: 'Grandchild', level: 2 },
  ];

  return (
    <Table>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell sx={{ pl: 2 + row.level * 3 }}>
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Sticky Header Table
```tsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StickyHeaderTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Consider alternative layouts (cards, lists)
- Horizontal scroll for wide tables
- Reduce column count
- Stack data vertically if possible
- Use accordion pattern for details
- Pagination essential

### Tablet (600px - 960px)
- Horizontal scroll acceptable
- 4-6 columns recommended
- Standard row heights
- Pagination recommended

### Desktop (> 960px)
- Full table display
- Any number of columns
- Hover states functional
- Sorting and filtering
- Advanced features available

---

## Total Variant Combinations

**Table Types:** 4 (Basic, Advanced, Pinned Columns, Indented)
**Row States:** 3 (Default, Hover, Selected)
**Alignments:** 3 (Left, Right, Center)
**Indent Levels:** 4 (0, 1, 2, 3)
**With Pagination:** Yes/No

**Total Base Combinations:** 100+ when considering all permutations

---

## Related Components
- **List:** Alternative for simple data
- **DataGrid:** Advanced table with virtualization
- **Card:** Alternative for mobile
- **Paper:** Container for table

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 18748:455621
- **Component:** `<Table>`, `<TableCell>`, `<TablePagination>`
- **Documentation:** [MUI Table API](https://mui.com/api/table)

---

## Migration Notes

### From Previous Design System
- Cell heights standardized (52px default, 40px dense)
- Header background updated to #fafafa
- Border color standardized to rgba(224, 224, 224, 1)
- Hover state uses 4% opacity
- Selected state uses primary color at 8% opacity
- Padding unified to 16px
- Indent levels standardized (24px increments)
- Font sizes aligned to 14px

### Design Tokens Required
- All color tokens (background, text, borders, states)
- Typography tokens (14px, 400/500 weight)
- Spacing tokens (16px padding, 24px indent)
- Height tokens (52px, 56px)
- Border tokens (1px, light gray)

---

## Performance Considerations

- Use pagination for large datasets (> 100 rows)
- Consider virtualization for very large tables (> 1000 rows)
- Minimize re-renders with React.memo
- Use key prop correctly on TableRow
- Avoid inline functions in render
- Consider server-side pagination for huge datasets
- Use debounce for search/filter inputs

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 100+ variant combinations documented
- Full accessibility compliance
- All 4 table types included
