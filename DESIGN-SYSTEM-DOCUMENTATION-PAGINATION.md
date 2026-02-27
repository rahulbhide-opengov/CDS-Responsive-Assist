# Pagination Component Documentation

## Overview
The Pagination component enables users to navigate through large datasets by breaking content into discrete pages. It provides page number controls, previous/next navigation, and configurable items-per-page selection.

**Component Type:** Navigation / Data Control Component
**Based on:** Material-UI (MUI) v6.1.0 Pagination
**Documentation:** [MUI Pagination API](https://mui.com/api/pagination)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/pagination/height': '32px',
'--component/pagination/button-height': '32px',
'--component/pagination/button-min-width': '32px',
'--component/pagination/button-padding': '4px 12px',
'--component/pagination/gap-between-buttons': '8px',
'--component/pagination/gap-internal': '16px',
'--component/pagination/border-radius': '4px',
```

### Button State Tokens
```typescript
// Active (Current Page)
'--component/pagination/active/bg-color': '#4b3fff',
'--component/pagination/active/text-color': '#ffffff',
'--component/pagination/active/border-width': '0px',

// Default (Inactive Pages)
'--component/pagination/default/bg-color': 'transparent',
'--component/pagination/default/text-color': '#546574',
'--component/pagination/default/border-color': '#546574',
'--component/pagination/default/border-width': '1px',

// Hover
'--component/pagination/hover/bg-color': 'rgba(75, 63, 255, 0.04)',
'--component/pagination/hover/border-color': '#4b3fff',

// Disabled
'--component/pagination/disabled/bg-color': '#f2f2f2',
'--component/pagination/disabled/text-color': '#546574',
'--component/pagination/disabled/border-color': '#546574',
'--component/pagination/disabled/opacity': '0.6',
'--component/pagination/disabled/cursor': 'not-allowed',
```

### Typography Tokens
```typescript
'--component/pagination/button/font-family': 'var(--fontfamily, "DM_Sans:Medium", sans-serif)',
'--component/pagination/button/font-size': '14px',
'--component/pagination/button/font-weight': '500',
'--component/pagination/button/line-height': '24px',

'--component/pagination/label/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Regular", sans-serif)',
'--component/pagination/label/font-size': '14px',
'--component/pagination/label/font-weight': '400',
'--component/pagination/label/line-height': '18px',
'--component/pagination/label/letter-spacing': '0.17px',
```

### Color Tokens
```typescript
'--component/pagination/text-primary': 'rgba(0, 0, 0, 0.87)',
'--component/pagination/text-secondary': 'rgba(0, 0, 0, 0.6)',
'--component/pagination/icon-size': '16px',
```

---

## Component Anatomy

### Main Container
- **Layout:** Horizontal flexbox
- **Justify:** Space-between
- **Alignment:** Center
- **Min Height:** 32px
- **Sections:** Navigation controls (left), Items per page selector (right)

### Navigation Controls Section
- **Previous Button:** Navigates to previous page
- **Page Number Buttons:** Direct page selection
- **Next Button:** Navigates to next page
- **Info Label:** Shows current range and total items

### Page Number Button Group
- **Border:** 1px solid outline around entire group
- **Border Radius:** 4px
- **Active Page:** Highlighted with primary color
- **Ellipsis:** Shows "..." for truncated pages

### Items Per Page Selector
- **Label:** "Items per page"
- **Dropdown Button:** Shows current items per page value
- **Icon:** Dropdown chevron icon

---

## Button States

### Active (Current Page)
- **Background:** Primary color (`#4b3fff`)
- **Text:** White (`#ffffff`)
- **Border:** None
- **Visual:** Solid filled appearance
- **Use Case:** Indicates current page

### Default (Inactive Pages)
- **Background:** Transparent
- **Text:** Secondary color (`#546574`)
- **Border:** 1px solid secondary color
- **Visual:** Outlined appearance
- **Use Case:** Available pages to navigate to

### Hover
- **Background:** Light primary tint (`rgba(75, 63, 255, 0.04)`)
- **Text:** Secondary color (maintained)
- **Border:** Primary color (`#4b3fff`)
- **Transition:** 150ms
- **Use Case:** Interactive feedback

### Disabled
- **Background:** Light gray (`#f2f2f2`)
- **Text:** Secondary color (`#546574`)
- **Border:** Secondary color
- **Opacity:** 60%
- **Cursor:** not-allowed
- **Use Case:** First/last page boundaries (Previous on page 1, Next on last page)

---

## Navigation Components

### Previous Button
- **Label:** "Previous"
- **Icon:** None (text only)
- **State:** Disabled on first page, enabled otherwise
- **Action:** Navigate to previous page (current - 1)

### Next Button
- **Label:** "Next"
- **Icon:** Right arrow or chevron (16×16px)
- **State:** Disabled on last page, enabled otherwise
- **Action:** Navigate to next page (current + 1)

### Page Number Buttons
- **Content:** Page number (1, 2, 3, etc.)
- **Width:** Minimum 32px (auto-expands for larger numbers)
- **Height:** 32px
- **Active State:** Current page highlighted
- **Action:** Navigate directly to clicked page

### Ellipsis Button
- **Content:** "..."
- **State:** Non-interactive (display only)
- **Purpose:** Indicates truncated page range
- **Use Case:** When total pages > displayable pages (typically > 7)

---

## Information Display

### Items Range Label
- **Format:** "Showing 1-10 of 100 Items"
- **Font:** Body2 (14px, Regular)
- **Color:** Secondary text (60% opacity)
- **Emphasis:** Current range and total in primary text color (87% opacity)
- **Dynamic:** Updates with page changes

### Items Per Page Selector
- **Label:** "Items per page"
- **Current Value:** Displayed in button (e.g., "10")
- **Dropdown:** Opens menu with options (typically 10, 25, 50, 100)
- **Icon:** Chevron-down (16×16px)
- **Action:** Changes number of items displayed per page

---

## Pagination Strategies

### Standard Pagination
```
[Previous] [1] [2] [3] [4] [5] [6] [7] [...] [10] [Next]
```
- **Range:** Shows 7 adjacent pages plus ellipsis and last page
- **Use Case:** 8-50 total pages

### Compact Pagination
```
[Previous] [1] [2] [3] [4] [5] [Next]
```
- **Range:** Shows all pages (≤ 7 total pages)
- **Use Case:** Small datasets

### Extended Pagination
```
[Previous] [1] [...] [5] [6] [7] [8] [9] [...] [100] [Next]
```
- **Range:** Shows current page ± 2 pages, plus first and last
- **Use Case:** Very large datasets (50+ pages)

---

## Usage Guidelines

### When to Use
- Large datasets (> 50 items)
- Search results
- Product listings
- Table data
- Blog post archives
- Report lists
- User management tables
- Any paginated content

### When NOT to Use
- Small datasets (< 25 items) - show all items
- Infinite scroll is more appropriate (social feeds)
- Real-time data streams
- Single-page content
- Content better suited for "Load More" pattern

### Best Practices

#### Do
- Show total number of items
- Indicate current page clearly
- Provide "Previous" and "Next" for sequential navigation
- Allow direct page number selection
- Show items-per-page selector for flexibility
- Display current range (e.g., "1-10 of 100")
- Disable Previous on first page
- Disable Next on last page
- Persist pagination state in URL query params
- Default to reasonable items per page (10-25)

#### Don't
- Hide total page count
- Make page numbers too small (< 32px)
- Forget to disable boundary buttons
- Use pagination for very small datasets
- Mix pagination with infinite scroll
- Reset to page 1 after every filter change (maintain page if possible)
- Use tiny page number ranges (show at least 5-7 pages)
- Forget keyboard navigation support

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<nav aria-label="Pagination Navigation">
  <ul>
    <li>
      <button aria-label="Go to previous page" disabled>Previous</button>
    </li>
    <li>
      <button aria-label="Go to page 1" aria-current="page">1</button>
    </li>
    <li>
      <button aria-label="Go to page 2">2</button>
    </li>
    <li>
      <button aria-label="Go to next page">Next</button>
    </li>
  </ul>
</nav>
```

#### ARIA Attributes
```typescript
{
  role: "navigation",            // For pagination container
  "aria-label": "Pagination",    // Describes navigation purpose
  "aria-current": "page",        // Marks current page button
  "aria-disabled": boolean,      // For disabled prev/next buttons
  "aria-label": string,          // "Go to page X" for each button
}
```

#### Keyboard Navigation
- **Tab:** Focus pagination buttons sequentially
- **Shift+Tab:** Focus previous button
- **Enter/Space:** Activate focused button (navigate to page)
- **Arrow Keys:** Optional, navigate between page buttons

#### Color Contrast
- **Active Button:** 4.5:1 minimum (white on primary blue)
- **Default Button:** 4.5:1 minimum (secondary text on white)
- **Disabled Button:** Exempt from contrast requirements (60% opacity)
- **Labels:** 4.5:1 minimum against background

#### Touch Targets
- **Minimum Size:** 32×32px for all buttons
- **Recommended:** 40×40px with padding for touch devices
- **Spacing:** 8px gap between buttons

#### Screen Reader Support
- Navigation purpose announced ("Pagination Navigation")
- Current page announced ("page 1, current page")
- Page button purpose clear ("Go to page 2")
- Disabled state announced ("Previous, button, disabled")
- Total pages context provided

---

## Code Examples

### Basic Pagination
```tsx
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
  );
}
```

### Controlled Pagination
```tsx
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

export default function ControlledPagination() {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination count={10} page={page} onChange={handleChange} />
  );
}
```

### Pagination with Range Info
```tsx
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function PaginationWithInfo() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
      <Typography variant="body2" color="text.secondary">
        Showing {startItem}-{endItem} of {totalItems} Items
      </Typography>
    </Box>
  );
}
```

### Pagination with Previous/Next
```tsx
import Pagination from '@mui/material/Pagination';

export default function PaginationButtons() {
  return (
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      variant="outlined"
    />
  );
}
```

### Pagination Size Variants
```tsx
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSizes() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
```

### Items Per Page Selector
```tsx
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function PaginationWithItemsPerPage() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 100;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(totalItems / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
        <Typography variant="body2" color="text.secondary">
          Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, totalItems)} of {totalItems} Items
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Items per page
        </Typography>
        <Select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(e.target.value as number);
            setPage(1); // Reset to page 1 when items per page changes
          }}
          size="small"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
```

### Table Pagination
```tsx
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

export default function TablePaginationExample() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={(e, newPage) => setPage(newPage)}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
    />
  );
}
```

---

## Common Patterns

### Product Listing Pagination
```tsx
<Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
  <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
</Box>
```

### Search Results Pagination
```tsx
<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
  <Typography variant="body2" color="text.secondary">
    {totalResults} results found
  </Typography>
  <Pagination count={totalPages} page={page} onChange={handleChange} />
</Box>
```

### Data Table Pagination
```tsx
<TablePagination
  rowsPerPageOptions={[10, 25, 50]}
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Reduce visible page numbers (show 3-5 instead of 7)
- Stack pagination and info label vertically if needed
- Ensure adequate touch targets (40×40px)
- Consider showing only Previous/Next buttons
- Move items-per-page selector below pagination
- Use compact layout

### Tablet (600px - 960px)
- Standard page number range (5-7 visible)
- Horizontal layout maintained
- Standard touch targets
- Items-per-page selector inline

### Desktop (> 960px)
- Full page number range (7+ visible)
- Full horizontal layout
- All controls inline
- Hover states functional
- Keyboard navigation optimal

---

## Total Variant Combinations

**Button States:** 4 (Active, Default, Hover, Disabled)
**Navigation Controls:** 2 (Previous, Next)
**Display Modes:** 3 (Compact, Standard, Extended)
**Optional Elements:** 2 (With/Without items-per-page selector)

**Total Combinations:** 4 states × 3 display modes × 2 optional configs = **24+ combinations**

---

## Related Components
- **Table:** Often used with table data
- **TablePagination:** Specialized pagination for tables
- **Button:** Page buttons are styled buttons
- **Select:** Items-per-page dropdown
- **Typography:** Info labels

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:78210
- **Component:** `<Pagination>`
- **Documentation:** [MUI Pagination API](https://mui.com/api/pagination)

---

## Migration Notes

### From Previous Design System
- Button height standardized to 32px
- Border radius unified to 4px
- Active state uses primary color (#4b3fff)
- Gap between buttons set to 8px
- Typography aligned to 14px body2
- Disabled state opacity set to 60%
- Icon size fixed at 16px
- Border width standardized to 1px

### Design Tokens Required
- Color tokens (primary, secondary, disabled)
- Typography tokens (14px, 400/500 weight)
- Spacing tokens (4px, 8px, 12px, 16px)
- Button height (32px)
- Border radius (4px)
- Icon size (16px)

---

## Performance Considerations

- Only render visible page numbers (use ellipsis for large ranges)
- Debounce page changes if triggering API calls
- Cache page data when possible
- Use URL query params for shareable pagination state
- Consider virtual scrolling for very large datasets
- Avoid re-fetching current page data
- Optimize items-per-page dropdown (limit options)

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 24+ variant combinations documented
- Full accessibility compliance
- Previous/Next navigation included
- Items-per-page selector documented
