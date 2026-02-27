# CDS Component Index

Quick reference guide for all 70+ documented components with use cases and documentation links.

## Quick Search

**Looking for a component?**
- Press Ctrl+F (Cmd+F on Mac) and search by keyword
- Or browse by category below

---

## Foundation & Layout (7)

### Box
**File:** `DESIGN-SYSTEM-DOCUMENTATION-BOX.md`
**Use Case:** Generic container with sx prop for one-off styling
**When:** Need custom layout without creating styled component
**Keywords:** container, wrapper, layout, custom styling

### Container
**File:** `DESIGN-SYSTEM-DOCUMENTATION-CONTAINER.md`
**Use Case:** Max-width content wrapper for responsive layouts
**When:** Need centered content with max-width breakpoints
**Keywords:** wrapper, max-width, centered, responsive container

### Grid
**File:** `DESIGN-SYSTEM-DOCUMENTATION-GRID.md`
**Use Case:** 12-column responsive grid system
**When:** Complex multi-column layouts
**Keywords:** columns, responsive, layout, grid system

### Stack
**File:** `DESIGN-SYSTEM-DOCUMENTATION-STACK.md`
**Use Case:** One-dimensional flexbox layout (row/column)
**When:** Simple vertical or horizontal layouts with spacing
**Keywords:** flexbox, vertical, horizontal, spacing, flex

### Paper
**File:** `DESIGN-SYSTEM-DOCUMENTATION-PAPER.md`
**Use Case:** Elevated surface with shadow
**When:** Need visual separation with elevation
**Keywords:** card base, surface, elevation, shadow

### Divider
**File:** `DESIGN-SYSTEM-DOCUMENTATION-DIVIDER.md`
**Use Case:** Visual separator line
**When:** Separate content sections
**Keywords:** separator, line, hr, border

### Link
**File:** `DESIGN-SYSTEM-DOCUMENTATION-LINK.md`
**Use Case:** Styled hyperlinks
**When:** Navigation, external links, in-text links
**Keywords:** anchor, hyperlink, navigation, url

---

## Navigation (9)

### App Bar
**File:** `DESIGN-SYSTEM-DOCUMENTATION-APPBAR.md`
**Use Case:** Top navigation bar with branding, menu, actions
**When:** Primary navigation for web apps
**Keywords:** header, navbar, toolbar, top navigation

### Bottom Navigation
**File:** `DESIGN-SYSTEM-DOCUMENTATION-BOTTOMNAVIGATION.md`
**Use Case:** Mobile bottom tab navigation (3-5 items)
**When:** Mobile apps, touch-optimized navigation
**Keywords:** mobile nav, tabs, bottom tabs, mobile menu

### Drawer
**File:** `DESIGN-SYSTEM-DOCUMENTATION-DRAWER.md`
**Use Case:** Side panel navigation (permanent/temporary/persistent)
**When:** Desktop sidebar, mobile menu, off-canvas navigation
**Keywords:** sidebar, side menu, hamburger menu, off-canvas

### Menu
**File:** `DESIGN-SYSTEM-DOCUMENTATION-MENU.md`
**Use Case:** Dropdown/context menu with options
**When:** Action menus, context menus, dropdown lists
**Keywords:** dropdown, context menu, popup menu, options

### Tabs
**File:** `DESIGN-SYSTEM-DOCUMENTATION-TABS.md`
**Use Case:** Tabbed navigation for content sections
**When:** Multiple views in same area, settings panels
**Keywords:** tabs, tabbed interface, content switcher

### Pagination
**File:** `DESIGN-SYSTEM-DOCUMENTATION-PAGINATION.md`
**Use Case:** Navigate through multiple pages of data
**When:** Large data sets, search results, galleries
**Keywords:** page numbers, next/prev, data navigation

### Speed Dial
**File:** `DESIGN-SYSTEM-DOCUMENTATION-SPEEDDIAL.md`
**Use Case:** Floating action button that expands to show actions
**When:** Primary actions that need quick access
**Keywords:** FAB menu, floating actions, quick actions

### Tree View
**File:** `DESIGN-SYSTEM-DOCUMENTATION-TREEVIEW.md`
**Use Case:** Hierarchical navigation with expand/collapse
**When:** File systems, category navigation, nested menus
**Keywords:** tree, hierarchy, nested, expandable, folders

### Stepper
**File:** `DESIGN-SYSTEM-DOCUMENTATION-STEPPER.md`
**Use Case:** Multi-step process navigation (wizards, checkout)
**When:** Complex forms, onboarding, checkout flows
**Keywords:** wizard, steps, multi-step form, progress

---

## Buttons (6)

### Button
**File:** Referenced in multiple docs (core component)
**Use Case:** Standard clickable button (contained/outlined/text)
**When:** Primary/secondary actions, form submissions
**Keywords:** button, click, action, submit, cta

### Icon Button
**File:** `DESIGN-SYSTEM-DOCUMENTATION-ICONBUTTON.md`
**Use Case:** Button with only icon (no text)
**When:** Toolbar actions, compact spaces, clear icon meaning
**Keywords:** icon only, toolbar button, action icon

### FAB (Floating Action Button)
**File:** `DESIGN-SYSTEM-DOCUMENTATION-FAB.md`
**Use Case:** Prominent circular floating button for primary action
**When:** Single most important action on screen
**Keywords:** floating button, primary action, circular button

### Button Group
**File:** `DESIGN-SYSTEM-DOCUMENTATION-BUTTON-GROUP.md`
**Use Case:** Related buttons grouped together
**When:** Multiple related actions, segmented controls
**Keywords:** button group, related actions, segmented

### Toggle Button
**File:** `DESIGN-SYSTEM-DOCUMENTATION-TOGGLEBUTTON.md`
**Use Case:** Button that toggles between states
**When:** Bold/italic toggles, multi-select options
**Keywords:** toggle, switch button, selectable, multi-select

### Loading Button
**File:** `DESIGN-SYSTEM-DOCUMENTATION-LOADINGBUTTON.md`
**Use Case:** Button with loading state and spinner
**When:** Async operations, form submissions, API calls
**Keywords:** loading, spinner, async, submitting

---

## Form Inputs (12)

### Text Field
**File:** Referenced in multiple docs (core component)
**Use Case:** Text input with label, helper text, validation
**When:** Any text input needs
**Keywords:** input, text field, form field, text box

### Checkbox
**File:** `DESIGN-SYSTEM-DOCUMENTATION-CHECKBOX.md`
**Use Case:** Binary selection (checked/unchecked)
**When:** Agree to terms, multiple selections
**Keywords:** check, checkbox, selection, multi-select

### Radio
**File:** `DESIGN-SYSTEM-DOCUMENTATION-RADIO.md`
**Use Case:** Single selection from group of options
**When:** Mutually exclusive choices
**Keywords:** radio button, single select, option group

### Switch
**File:** `DESIGN-SYSTEM-DOCUMENTATION-SWITCH.md`
**Use Case:** Toggle between on/off states
**When:** Settings, enable/disable features
**Keywords:** toggle, switch, on/off, enable/disable

### Select
**File:** `DESIGN-SYSTEM-DOCUMENTATION-SELECT.md`
**Use Case:** Dropdown selection from list
**When:** Many options, space-constrained
**Keywords:** dropdown, select, picker, options

### Slider
**File:** `DESIGN-SYSTEM-DOCUMENTATION-SLIDER.md`
**Use Case:** Select value from range by dragging
**When:** Volume, brightness, price range
**Keywords:** range, slider, value picker, drag

### Rating
**File:** `DESIGN-SYSTEM-DOCUMENTATION-RATING.md`
**Use Case:** Star rating input/display
**When:** Reviews, feedback, quality ratings
**Keywords:** stars, rating, review, score

### Form Label
**File:** `DESIGN-SYSTEM-DOCUMENTATION-FORMLABEL.md`
**Use Case:** Accessible label for form inputs
**When:** All form inputs need labels
**Keywords:** label, form label, input label

### Transfer List
**File:** `DESIGN-SYSTEM-DOCUMENTATION-TRANSFERLIST.md`
**Use Case:** Move items between two lists (available/selected)
**When:** Permissions, feature selection, bulk transfers
**Keywords:** dual list, transfer, move items, bulk select

### Date Picker
**File:** Referenced in earlier docs
**Use Case:** Select date from calendar
**When:** Date inputs, scheduling
**Keywords:** calendar, date, date picker

### Time Picker
**File:** Referenced in earlier docs
**Use Case:** Select time from clock
**When:** Time inputs, scheduling, appointments
**Keywords:** clock, time, time picker

### Autocomplete
**File:** Part of Select documentation
**Use Case:** Search and select from large lists
**When:** Many options, searchable dropdowns
**Keywords:** search select, autocomplete, typeahead

---

## Data Display (13)

### Avatar
**File:** `DESIGN-SYSTEM-DOCUMENTATION-AVATAR.md`
**Use Case:** User profile image or initials
**When:** User identity, profile displays
**Keywords:** profile picture, user image, initials

### Badge
**File:** `DESIGN-SYSTEM-DOCUMENTATION-BADGE.md`
**Use Case:** Small notification badge on icons/avatars
**When:** Notification counts, status indicators
**Keywords:** notification, counter, indicator, dot

### List
**File:** `DESIGN-SYSTEM-DOCUMENTATION-LIST.md`
**Use Case:** Vertical list of items
**When:** Contact lists, menu items, settings
**Keywords:** list, items, vertical list, menu items

### Table
**File:** `DESIGN-SYSTEM-DOCUMENTATION-TABLE.md`
**Use Case:** Tabular data display with rows and columns
**When:** Data tables, reports, structured data
**Keywords:** table, data grid, rows, columns

### Image List
**File:** `DESIGN-SYSTEM-DOCUMENTATION-IMAGELIST.md`
**Use Case:** Grid gallery of images
**When:** Photo galleries, product grids, media display
**Keywords:** gallery, image grid, photos, masonry

### Accordion
**File:** `DESIGN-SYSTEM-DOCUMENTATION-ACCORDION.md`
**Use Case:** Expandable panels with headers
**When:** FAQs, collapsible sections, settings groups
**Keywords:** collapse, expandable, accordion, panel

### Card
**File:** Referenced in multiple docs (core component)
**Use Case:** Content container with header, media, actions
**When:** Blog posts, products, user profiles
**Keywords:** card, content box, media card

### Chip
**File:** Referenced in multiple docs (core component)
**Use Case:** Small labeled element (tags, filters, selections)
**When:** Tags, filters, removable selections
**Keywords:** tag, chip, pill, label, token

### Typography
**File:** Referenced in multiple docs (core component)
**Use Case:** Text styling with design system tokens
**When:** All text display needs
**Keywords:** text, heading, paragraph, font

### Tooltip
**File:** Referenced in multiple docs (core component)
**Use Case:** Popup hint on hover
**When:** Icon explanations, additional info
**Keywords:** hint, popup, hover text, info

### Icon
**File:** Referenced in multiple docs
**Use Case:** Display icons from Material Icons
**When:** Visual indicators, buttons, navigation
**Keywords:** icon, svg, material icons, symbol

### Data Grid
**File:** MUI X (premium) - not documented
**Use Case:** Advanced data table with sorting, filtering, editing
**When:** Complex data management
**Keywords:** advanced table, data grid, spreadsheet

---

## Feedback (9)

### Alert
**File:** `DESIGN-SYSTEM-DOCUMENTATION-ALERT.md`
**Use Case:** Important messages with severity levels
**When:** Success, error, warning, info messages
**Keywords:** message, notification, banner, alert

### Progress
**File:** `DESIGN-SYSTEM-DOCUMENTATION-PROGRESS.md`
**Use Case:** Generic progress indicators (linear/circular)
**When:** Loading states, progress tracking
**Keywords:** loading, progress, spinner

### Linear Progress
**File:** `DESIGN-SYSTEM-DOCUMENTATION-LINEARPROGRESS.md`
**Use Case:** Horizontal progress bar
**When:** File uploads, page loading, determinate progress
**Keywords:** progress bar, loading bar, horizontal progress

### Circular Progress
**File:** `DESIGN-SYSTEM-DOCUMENTATION-CIRCULARPROGRESS.md`
**Use Case:** Circular loading spinner
**When:** Button loading, page loading, indeterminate loading
**Keywords:** spinner, loading circle, circular loader

### Skeleton
**File:** `DESIGN-SYSTEM-DOCUMENTATION-SKELETON.md`
**Use Case:** Loading placeholder matching content shape
**When:** Content loading states, perceived performance
**Keywords:** loading placeholder, skeleton screen, shimmer

### Backdrop
**File:** `DESIGN-SYSTEM-DOCUMENTATION-BACKDROP.md`
**Use Case:** Full-screen overlay for loading/modals
**When:** Block UI during loading, modal backgrounds
**Keywords:** overlay, screen block, modal backdrop

### Snackbar
**File:** Referenced in earlier docs
**Use Case:** Temporary notification at bottom of screen
**When:** Success confirmations, undo actions
**Keywords:** toast, notification, temporary message

### Dialog
**File:** Referenced in earlier docs
**Use Case:** Modal dialog requiring user interaction
**When:** Confirmations, forms, important messages
**Keywords:** modal, popup, dialog, lightbox

---

## Utility (6)

### Popover
**File:** `DESIGN-SYSTEM-DOCUMENTATION-POPOVER.md`
**Use Case:** Floating content anchored to element
**When:** Additional info, context menus, custom tooltips
**Keywords:** popup, floating content, anchor, popup menu

### Collapse
**File:** `DESIGN-SYSTEM-DOCUMENTATION-COLLAPSE.md`
**Use Case:** Expand/collapse animation for content
**When:** Show/hide sections, accordions, expandable content
**Keywords:** expand, collapse, animate, show/hide

### Click Away Listener
**File:** Referenced in earlier docs
**Use Case:** Detect clicks outside element
**When:** Close dropdowns, menus, popups on outside click
**Keywords:** click outside, close on blur, detect outside

### Modal
**File:** Referenced in earlier docs
**Use Case:** Base modal component for dialogs
**When:** Building custom modals, overlays
**Keywords:** overlay, modal base, popup base

### Transition
**File:** Referenced in earlier docs
**Use Case:** Animation wrapper components
**When:** Custom animations, entrance/exit effects
**Keywords:** animate, transition, fade, slide, grow

### Portal
**File:** `DESIGN-SYSTEM-DOCUMENTATION-PORTAL.md`
**Use Case:** Render content outside parent DOM hierarchy
**When:** Modals, tooltips, escaping overflow/z-index
**Keywords:** dom portal, render outside, teleport

---

## Advanced (2)

### File Upload
**File:** `DESIGN-SYSTEM-DOCUMENTATION-FILEUPLOAD.md`
**Use Case:** File input with drag-and-drop, validation
**When:** Upload documents, images, any files
**Keywords:** upload, file input, drag drop, file picker

### Custom Implementations
**File:** Various documentation files
**Use Case:** Patterns for building custom components
**When:** Need component not in standard library
**Keywords:** custom, pattern, implementation

---

## Search by Use Case

### Building Forms
- TextField, Checkbox, Radio, Switch, Select, Slider, Rating
- FormLabel, TransferList, DatePicker, TimePicker
- LoadingButton for submission
- Alert for validation errors

### Building Navigation
- AppBar (desktop), BottomNavigation (mobile), Drawer (sidebar)
- Tabs (content sections), Menu (dropdowns), Breadcrumbs
- Stepper (wizards), TreeView (hierarchical)

### Displaying Data
- Table (structured data), List (simple lists)
- Card (content cards), ImageList (galleries)
- Accordion (collapsible sections)
- Typography (text), Avatar (users), Badge (counts)

### Providing Feedback
- Alert (messages), Snackbar (temporary notifications)
- LinearProgress, CircularProgress (loading)
- Skeleton (loading placeholders), Backdrop (overlays)
- Dialog (confirmations), Tooltip (hints)

### Creating Layouts
- Container (max-width wrapper), Grid (multi-column)
- Stack (vertical/horizontal), Box (custom)
- Paper (elevated surfaces), Divider (separators)

### Adding Interactions
- Button, IconButton, FAB (actions)
- ButtonGroup, ToggleButton (grouped actions)
- Menu (action menus), SpeedDial (floating actions)
- Popover (floating content), Collapse (show/hide)

---

## Search by Keywords

### A-C
**Accessibility:** All components WCAG 2.1 AA compliant
**Action:** Button, IconButton, FAB, Menu, SpeedDial
**Alert:** Alert, Snackbar, Dialog
**Animation:** Collapse, Transition, Modal
**Avatar:** Avatar, Badge, List
**Button:** Button, IconButton, FAB, ButtonGroup, ToggleButton, LoadingButton
**Card:** Card, Paper, ImageList
**Checkbox:** Checkbox, FormLabel, TransferList
**Click:** Button, IconButton, ClickAwayListener
**Container:** Container, Box, Paper, Stack

### D-G
**Data:** Table, List, DataGrid, Chip
**Date:** DatePicker, TimePicker
**Dialog:** Dialog, Modal, Backdrop
**Divider:** Divider
**Drag:** Slider, TransferList, FileUpload
**Drawer:** Drawer, AppBar
**Dropdown:** Menu, Select, Autocomplete
**Expandable:** Accordion, Collapse, TreeView
**FAB:** FAB, SpeedDial
**Feedback:** Alert, Progress, Snackbar, Backdrop
**File:** FileUpload
**Filter:** Chip, Select, Autocomplete
**Floating:** FAB, Popover, Tooltip, SpeedDial
**Form:** TextField, Checkbox, Radio, Switch, Select, all inputs
**Gallery:** ImageList, Grid
**Grid:** Grid, ImageList, Table

### H-M
**Header:** AppBar, Accordion, Card
**Icon:** Icon, IconButton, Avatar, Badge
**Image:** Avatar, ImageList, Card, FileUpload
**Input:** TextField, Checkbox, Radio, Switch, Select, Slider, all inputs
**Label:** FormLabel, Chip, Badge
**Layout:** Box, Container, Grid, Stack, Paper
**Link:** Link, Breadcrumbs
**List:** List, TransferList, Menu, Select
**Loading:** Progress, Skeleton, LoadingButton, Backdrop
**Menu:** Menu, Drawer, BottomNavigation, SpeedDial
**Modal:** Dialog, Modal, Backdrop, Portal
**Mobile:** BottomNavigation, Drawer, AppBar

### N-S
**Navigation:** AppBar, Drawer, Menu, Tabs, Breadcrumbs, all navigation
**Notification:** Badge, Alert, Snackbar
**Overlay:** Backdrop, Modal, Dialog, Popover
**Pagination:** Pagination, Table
**Panel:** Accordion, Drawer, Dialog
**Paper:** Paper, Card
**Picker:** DatePicker, TimePicker, Select, FileUpload
**Popup:** Popover, Menu, Dialog, Tooltip
**Portal:** Portal, Modal, Popover
**Progress:** LinearProgress, CircularProgress, Skeleton, LoadingButton
**Radio:** Radio, FormLabel
**Rating:** Rating
**Search:** Autocomplete, TextField
**Select:** Select, Autocomplete, Radio, Checkbox
**Separator:** Divider
**Sidebar:** Drawer, AppBar
**Skeleton:** Skeleton, Progress
**Slider:** Slider
**Snackbar:** Snackbar, Alert
**Spinner:** CircularProgress, LoadingButton
**Stack:** Stack, ButtonGroup
**Stepper:** Stepper
**Switch:** Switch, ToggleButton

### T-Z
**Table:** Table, List, DataGrid
**Tabs:** Tabs, BottomNavigation
**Tag:** Chip
**Text:** TextField, Typography
**Time:** TimePicker, DatePicker
**Toast:** Snackbar, Alert
**Toggle:** Switch, ToggleButton, Checkbox
**Toolbar:** AppBar, ButtonGroup
**Tooltip:** Tooltip, Popover
**Transfer:** TransferList
**Transition:** Collapse, Modal, Drawer
**Tree:** TreeView
**Typography:** Typography (all text)
**Upload:** FileUpload
**Validation:** TextField, FormLabel, Alert
**Wizard:** Stepper

---

## Component Relationships

### Often Used Together

**AppBar + Drawer**
- Desktop app navigation
- Mobile hamburger menu

**Card + Avatar + Badge**
- User profiles
- Social media posts

**List + Avatar + IconButton**
- Contact lists
- Chat interfaces

**Grid + Card + ImageList**
- Product galleries
- Portfolio layouts

**Form + TextField + LoadingButton**
- Contact forms
- Login/signup

**Dialog + Alert + Button**
- Confirmations
- Delete warnings

**Table + Pagination + LinearProgress**
- Data tables
- Search results

**Tabs + Container + Stack**
- Tabbed interfaces
- Settings pages

**Menu + IconButton + Popover**
- Action menus
- Dropdown options

**Skeleton + Card/List**
- Loading states
- Placeholder content

---

## Quick Decision Tree

### Need to display content?
- **Structured data** → Table, List
- **Cards/media** → Card, ImageList
- **Text** → Typography
- **User identity** → Avatar, Chip

### Need navigation?
- **Desktop** → AppBar + Drawer
- **Mobile** → BottomNavigation
- **Content sections** → Tabs
- **Multi-step** → Stepper
- **Hierarchical** → TreeView, Menu

### Need user input?
- **Text** → TextField
- **Selection** → Checkbox, Radio, Switch
- **Choose from list** → Select, Autocomplete
- **Range** → Slider
- **Rating** → Rating
- **Date/Time** → DatePicker, TimePicker
- **Files** → FileUpload

### Need to provide feedback?
- **Messages** → Alert, Snackbar
- **Loading** → Progress, Skeleton, LoadingButton
- **Blocking** → Backdrop, Dialog
- **Hints** → Tooltip, Popover

### Need layout?
- **Max-width wrapper** → Container
- **Multi-column** → Grid
- **Vertical/horizontal** → Stack
- **Custom** → Box
- **Elevated** → Paper

### Need interaction?
- **Primary action** → Button (contained)
- **Secondary action** → Button (outlined)
- **Tertiary action** → Button (text)
- **Icon only** → IconButton
- **Prominent action** → FAB
- **Multiple actions** → ButtonGroup, Menu, SpeedDial

---

**Last Updated:** 2026-02-27
**Total Components:** 70+
**Documentation Version:** 1.4
