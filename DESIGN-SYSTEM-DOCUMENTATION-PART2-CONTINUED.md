# Material Design System Documentation - Part 2 (Continued)

**Components 16-25: Navigation through Card**

---

## 16. Navigation (Sidenav) Component

### Overview
Navigation provides hierarchical access to app sections through a sidebar menu.

**Variants:** 4 (Default, Slim, Combined, Small Screen)
**Item Types:** 3 (Standard, Expandable, Section Header)
**States:** 5 (Default, Hover, Active, Focus, Disabled)

---

### 16.1 Navigation Anatomy

```
┌─────────────────┐
│  [Logo]         │  Header
├─────────────────┤
│  [🏠] Dashboard │  Nav Item (Active)
│  [📊] Analytics │  Nav Item
│  [👥] Users  ▼  │  Expandable Item (Collapsed)
│  [⚙️] Settings  │  Nav Item
├─────────────────┤
│  ADMIN         │  Section Header
├─────────────────┤
│  [🔧] Tools     │  Nav Item
│  [📝] Logs      │  Nav Item
├─────────────────┤
│  [👤] Profile   │  Footer Item
│  [🚪] Logout    │  Footer Item
└─────────────────┘

Components:
1. Header (logo, brand)
2. Nav items (icon + label)
3. Expandable items (with sub-items)
4. Section headers (dividers)
5. Footer items (user menu, logout)
```

---

### 16.2 Navigation Tokens

```css
/* Width Variants */
--component/nav/width-default: 256px
--component/nav/width-slim: 64px
--component/nav/width-combined: 320px
--component/nav/width-small-screen: 280px

/* Nav Item Heights */
--component/nav/item-height: 48px
--component/nav/item-height-collapsed: 64px
--component/nav/item-height-expanded: 272px

/* Padding */
--component/nav/item-padding-horizontal: 16px
--component/nav/item-padding-vertical: 12px

/* Icon Sizing */
--component/nav/icon-size: 24px
--component/nav/icon-spacing: 16px
--component/nav/expand-icon-size: 20px

/* Colors */
--colors/nav/background: #ffffff
--colors/nav/item-hover: rgba(0, 0, 0, 0.04)
--colors/nav/item-active: rgba(75, 63, 255, 0.08)
--colors/nav/item-text: rgba(0, 0, 0, 0.87)
--colors/nav/item-text-active: #4b3fff

/* Typography */
Nav Item: --typography/body/medium (14px)
Section Header: --typography/overline (12px, uppercase)
```

---

### 16.3 Navigation Variants

#### Default Sidenav (256px)
**Appearance:** Full-width with icons and labels

```
┌────────────────────────┐
│  MyApp                 │  64px header
├────────────────────────┤
│  [🏠] Dashboard        │  48px items
│  [📊] Analytics        │
│  [👥] Users            │
│  [⚙️] Settings         │
└────────────────────────┘
        256px
```

**When to use:**
- ✅ Primary navigation (most common)
- ✅ Desktop applications
- ✅ Admin dashboards
- ✅ 5-15 nav items
- ❌ Mobile (too wide)

**Tokens:**
```css
Width: --component/nav/width-default (256px)
Item Height: --component/nav/item-height (48px)
Padding: --component/nav/item-padding-horizontal (16px)
```

#### Slim Sidenav (64px)
**Appearance:** Icons only, labels in tooltip

```
┌─────┐
│ [M] │  Logo
├─────┤
│ [🏠]│  Tooltip: "Dashboard"
│ [📊]│  Tooltip: "Analytics"
│ [👥]│  Tooltip: "Users"
│ [⚙️]│  Tooltip: "Settings"
└─────┘
  64px
```

**When to use:**
- ✅ Space-constrained layouts
- ✅ Power users (know icons)
- ✅ Toggle from default
- ❌ First-time users
- ❌ Complex navigation

**Interaction:**
```
Hover item → Show tooltip with label
Click toggle → Expand to default width
```

**Tokens:**
```css
Width: --component/nav/width-slim (64px)
Icon Size: --component/nav/icon-size (24px)
Tooltip Delay: 300ms
```

#### Combined Sidenav (320px)
**Appearance:** Two-level navigation with main + secondary panel

```
┌──────────┬──────────────┐
│  [🏠]    │  Dashboard   │
│  Dashboard  Widgets     │  Primary (80px)
├──────────┤  Reports     │  Secondary (240px)
│  [📊]    │  Trends      │
│  Analytics  Compare     │
├──────────┤              │
│  [👥]    │              │
│  Users   │              │
└──────────┴──────────────┘
         320px
```

**When to use:**
- ✅ Complex applications
- ✅ Deep hierarchies
- ✅ Context-specific sub-menus
- ✅ Desktop only
- ❌ Simple apps

**Behavior:**
```
Click main item → Secondary panel shows sub-items
Hover main item → Highlight, no change
Click sub-item → Navigate, secondary remains
```

#### Small Screen Sidenav (280px)
**Appearance:** Mobile drawer overlay

```
[☰ Menu]  Page Title

Click hamburger →

┌────────────────────────┐
│█ [← Back]              │  Drawer overlay
│█                       │
│█ [🏠] Dashboard        │
│█ [📊] Analytics        │
│█ [👥] Users            │
│█ [⚙️] Settings         │
│█                       │
│█ [👤] Profile          │
│█ [🚪] Logout           │
└────────────────────────┘
  ↑                ↑
Drawer         Backdrop
(280px)        (dim rest)
```

**When to use:**
- ✅ Mobile devices (required)
- ✅ Tablets (portrait)
- ✅ Responsive layouts
- ✅ Touch interfaces

**Behavior:**
```
Open: Slide in from left
Close: Tap backdrop, swipe left, or tap close
Overlay: z-index above content
```

**Tokens:**
```css
Width: --component/nav/width-small-screen (280px)
Backdrop: rgba(0, 0, 0, 0.5)
Animation: --transition/duration/entering (225ms)
```

---

### 16.4 Nav Item Types

#### Standard Nav Item
**Appearance:** Icon + label

```
[🏠] Dashboard
```

**Structure:**
```css
Height: --component/nav/item-height (48px)
Padding: 0 --component/nav/item-padding-horizontal
Icon: --component/nav/icon-size (24px)
Icon Spacing: --component/nav/icon-spacing (16px)
Font: --typography/body/medium (14px)
Border Radius: --border-radius/medium (8px)
```

**States:**
```
Default:
  background: transparent
  color: --colors/nav/item-text

Hover:
  background: --colors/nav/item-hover
  cursor: pointer

Active:
  background: --colors/nav/item-active
  color: --colors/nav/item-text-active
  font-weight: 500 (medium)
  border-left: 3px solid --colors/primary/main (optional)

Focus:
  outline: 2px solid --colors/primary/main
  outline-offset: -2px

Disabled:
  opacity: 0.38
  cursor: not-allowed
  no hover effect
```

#### Expandable Nav Item
**Appearance:** Icon + label + expand indicator

```
Collapsed:
[👥] Users  ▼

Expanded:
[👥] Users  ▲
    ├ All Users
    ├ Active Users
    ├ Pending
    └ Archived
```

**Tokens:**
```css
Collapsed Height: --component/nav/item-height (48px)
Expanded Height: --component/nav/item-height-expanded (272px)
Expand Icon: --component/nav/expand-icon-size (20px)
Sub-item Indent: --spacing/8 (32px)
```

**Behavior:**
```
Click parent → Toggle expand/collapse
Click sub-item → Navigate to page
Current sub-item → Parent remains expanded
Animation: --transition/duration/standard (300ms)
```

**Sub-item Styling:**
```css
Height: 40px (slightly smaller)
Padding Left: 32px + 24px = 56px (indent + icon)
Font Size: --typography/body/small (12px)
No icon (or smaller icon 16px)
```

#### Section Header
**Appearance:** Uppercase label divider

```
ADMIN
```

**Tokens:**
```css
Height: 32px
Padding: --spacing/2 --component/nav/item-padding-horizontal
Font: --typography/overline (12px, uppercase)
Color: --colors/text/secondary
Margin Top: --spacing/6 (24px)
Margin Bottom: --spacing/2 (8px)
```

**When to use:**
- ✅ Group related nav items
- ✅ Separate sections (user vs admin)
- ✅ Organize long nav lists
- ❌ Every item (loses meaning)

---

### 16.5 Navigation Header

#### Logo & Brand
```
┌────────────────────────┐
│  [Logo] MyApp          │
│                        │
└────────────────────────┘
```

**Tokens:**
```css
Height: 64px
Padding: --spacing/4 (16px)
Logo Size: 32px
Font: --typography/heading/h6 (12px) or h5 (14px)
```

**Behavior:**
- Clickable → Navigate to home/dashboard
- Slim variant → Show only logo icon

#### With User Profile
```
┌────────────────────────┐
│  [Logo] MyApp          │
│  ────────────────────  │
│  [Avatar] John Doe     │
│  john@example.com      │
└────────────────────────┘
```

**Expandable User Menu:**
```
Click profile →
┌────────────────────────┐
│  [Avatar] John Doe  ▲  │
│  ├ My Profile          │
│  ├ Settings            │
│  └ Logout              │
└────────────────────────┘
```

---

### 16.6 Navigation Footer

#### Fixed Footer Items
```
┌────────────────────────┐
│  ... nav items ...     │
│                        │
├────────────────────────┤  Divider
│  [⚙️] Settings         │  Footer area
│  [?] Help              │
│  [👤] Profile          │
└────────────────────────┘
```

**Tokens:**
```css
Position: Sticky bottom or absolute
Border Top: 1px solid --colors/divider
Padding Top: --spacing/2 (8px)
```

**Common Footer Items:**
- Settings
- Help/Support
- Feedback
- User menu
- Logout
- Theme toggle

---

### 16.7 Badge & Notifications

#### Notification Badge
```
[📧] Messages  [3]
               ↑
            Badge
```

**Tokens:**
```css
Badge Size: 20px (min-width)
Background: --colors/error/main (red for alerts)
Color: white
Font: --typography/caption (12px)
Border Radius: --border-radius/full (pill)
Position: Absolute, top-right of icon
```

**Badge Variants:**
- **Dot:** Small circle (8px) for unread indicator
- **Count:** Number up to 99 (show "99+" for larger)
- **Icon:** Checkmark, alert, etc.

**Colors by Priority:**
- Red (error): Urgent (unread messages)
- Orange (warning): Needs attention
- Blue (info): Informational
- Green (success): Completed

---

### 16.8 Nested Navigation

#### Multi-level Hierarchy
```
[📁] Projects  ▼
    ├ [📋] Project A  ▼
    │   ├ Overview
    │   ├ Tasks
    │   └ Files
    ├ [📋] Project B
    └ [📋] Project C
```

**Indentation:**
```css
Level 1: 16px padding-left
Level 2: 48px padding-left (16 + 32)
Level 3: 80px padding-left (16 + 32 + 32)
Max Depth: 3 levels (avoid going deeper)
```

**Visual Indicators:**
- Lines connecting items (optional)
- Different icon sizes per level
- Reduced font size for deeper levels

---

### 16.9 Navigation States

#### Loading State
```
[🔄] Loading...
    ↓
[🏠] Dashboard
[📊] Analytics
[⏳] Users      ← Loading
[⚙️] Settings
```

**Show skeleton:**
```
▓▓▓▓ ▓▓▓▓▓▓▓▓▓
▓▓▓▓ ▓▓▓▓▓▓▓
▓▓▓▓ ▓▓▓▓▓▓▓▓▓
```

#### Error State
```
[⚠️] Failed to load
    [Retry]
```

#### Empty State
```
No items to display
[Add first item]
```

---

### 16.10 Toggle Behavior

#### Expand/Collapse Entire Nav
```
Default (256px) → [☰] Click → Slim (64px)
Slim (64px)     → [☰] Click → Default (256px)

Animation:
  Width: 225ms ease-in-out
  Opacity: Labels fade in/out
  Icons: Remain visible
```

**Toggle Button:**
```css
Position: Top-right of nav or in header
Size: 40×40px
Icon: ☰ (hamburger) or ← (collapse)
```

**Persistent State:**
- Save to localStorage
- Remember user preference
- Apply on page load

---

### 16.11 Search in Navigation

#### Nav Search Bar
```
┌────────────────────────┐
│ [🔍 Search: ____]  [×] │
├────────────────────────┤
│ Results:               │
│ [📊] Analytics         │  (matched)
│ [⚙️] Account Settings  │  (matched)
└────────────────────────┘
```

**Features:**
- Filter nav items as you type
- Highlight matching text
- Show/hide non-matching items
- Clear button
- Keyboard shortcuts (Ctrl+K, Cmd+K)

**Tokens:**
```css
Height: 48px
Padding: --spacing/3 (12px)
Background: --colors/action/hover
Border Radius: --border-radius/medium (8px)
```

---

### 16.12 Accessibility

#### Keyboard Navigation
```
Tab: Move focus to next item
Shift+Tab: Move focus to previous item
Enter/Space: Activate focused item
Arrow Down: Next item
Arrow Up: Previous item
Arrow Right: Expand item
Arrow Left: Collapse item
Home: First item
End: Last item
```

#### ARIA Implementation
```html
<nav aria-label="Main navigation">
  <ul role="list">
    <!-- Standard item -->
    <li>
      <a href="/dashboard" aria-current="page">
        <svg aria-hidden="true">...</svg>
        Dashboard
      </a>
    </li>

    <!-- Expandable item -->
    <li>
      <button
        aria-expanded="false"
        aria-controls="users-submenu"
      >
        <svg aria-hidden="true">...</svg>
        Users
        <svg aria-hidden="true">▼</svg>
      </button>
      <ul id="users-submenu" role="list">
        <li><a href="/users/all">All Users</a></li>
        <li><a href="/users/active">Active</a></li>
      </ul>
    </li>

    <!-- Section header -->
    <li role="presentation">
      <span aria-label="Admin section">ADMIN</span>
    </li>
  </ul>
</nav>
```

#### Screen Reader Announcements
- Current page: "Dashboard, current page"
- Expandable: "Users, collapsed, button"
- Sub-items: "All Users, 1 of 4"
- Badge: "Messages, 3 unread"

---

### 16.13 Responsive Behavior

```
Desktop (1200px+)
├── Default sidenav (256px)
├── Can toggle to slim (64px)
├── Fixed position (stays visible)
└── Scrollable if content exceeds height

Tablet (768-1199px)
├── Slim by default (64px)
├── Expand on hover (temporary)
├── Or use drawer overlay
└── Collapsible on narrow tablets

Mobile (<768px)
├── Hidden by default
├── Hamburger menu in header
├── Drawer overlay (280px)
├── Full-height overlay
├── Swipe to close
└── Backdrop dims content
```

---

### 16.14 Best Practices

#### Do's
✅ Order items by importance/frequency
✅ Use clear, recognizable icons
✅ Limit to 10-15 main items
✅ Group related items with section headers
✅ Show active state clearly
✅ Provide keyboard navigation
✅ Make icons consistent (style, size)
✅ Include tooltips in slim variant
✅ Save toggle state preference

#### Don'ts
❌ Don't exceed 3 levels of nesting
❌ Don't hide primary navigation
❌ Don't use unclear icon meanings
❌ Don't make nav items too tall (>56px)
❌ Don't forget mobile drawer
❌ Don't auto-collapse on every click
❌ Don't use different icon styles
❌ Don't make all items expandable

---

## 17. Breadcrumb Component

### Overview
Breadcrumbs show the current page location within the site hierarchy.

**Variants:** 2 (Standard, Collapsed)
**Separator Styles:** 3 (Slash, Chevron, Custom)
**States:** 3 (Default, Hover, Current)

---

### 17.1 Breadcrumb Anatomy

```
Home / Products / Electronics / Laptops / MacBook Pro
  ↑       ↑           ↑            ↑          ↑
Link    Link      Link         Link      Current
        └─ Sep ─┘

With collapse:
Home / ... / Laptops / MacBook Pro
       ↑
   Collapsed
   indicator
```

**Components:**
1. **Breadcrumb Items** - Clickable links
2. **Separators** - Visual dividers (/, >, →)
3. **Current Page** - Non-clickable, emphasized
4. **Collapse Indicator** - "..." for hidden items

---

### 17.2 Breadcrumb Tokens

```css
/* Spacing */
--component/breadcrumb/item-spacing: 8px
--component/breadcrumb/separator-spacing: 8px
--component/breadcrumb/collapse-button-size: 24px

/* Colors */
--colors/breadcrumb/text: rgba(0, 0, 0, 0.6)
--colors/breadcrumb/separator: rgba(0, 0, 0, 0.38)
--colors/breadcrumb/collapse-fill: #e0e0e0
--colors/breadcrumb/current: rgba(0, 0, 0, 0.87)

/* Typography */
Font: --typography/body/medium (14px)
Weight: 400 (normal)
Current Weight: 500 (medium) or 700 (bold)

/* Max Items */
--component/breadcrumb/max-items-visible: 3
```

---

### 17.3 Separator Styles

#### Slash Separator (Default)
```
Home / Products / Laptops
```

```css
Content: "/"
Color: --colors/breadcrumb/separator
Padding: 0 --component/breadcrumb/separator-spacing (8px)
```

#### Chevron Separator
```
Home > Products > Laptops
or
Home › Products › Laptops  (single right angle)
```

```css
Content: ">" or "›"
Color: --colors/breadcrumb/separator
```

#### Arrow Separator
```
Home → Products → Laptops
```

```css
Content: "→"
Font Size: 16px
```

#### Icon Separator
```
Home [icon] Products [icon] Laptops
```

**Use icon:** chevron-right, arrow-forward

---

### 17.4 Breadcrumb States

#### Default State
```css
Link:
  color: --colors/breadcrumb/text
  text-decoration: none

Separator:
  color: --colors/breadcrumb/separator
```

#### Hover State
```css
Link:
  color: --colors/primary/main
  text-decoration: underline
  cursor: pointer
```

#### Current Page (Last Item)
```css
Not a link:
  color: --colors/breadcrumb/current
  font-weight: 500 or 700
  cursor: default
  no hover effect
```

#### Focus State
```css
Link:
  outline: 2px solid --colors/primary/main
  outline-offset: 2px
  border-radius: --border-radius/small (4px)
```

---

### 17.5 Collapse Behavior

#### Automatic Collapse
**When:** More than 3-4 items (configurable)

```
Full:
Home / Products / Electronics / Laptops / MacBook Pro

Collapsed:
Home / ... / Laptops / MacBook Pro
       ↑
   Click to expand
```

**Rules:**
- Always show: Home (first) + Last 2 items
- Collapse: Middle items
- Show count: "... (3 items)"

#### Expand on Click
```
Click "..." →
┌─────────────────┐
│ Products        │
│ Electronics     │
│ Laptops         │  Dropdown menu
└─────────────────┘

Select item → Navigate to that page
```

**Collapse Button:**
```css
Size: --component/breadcrumb/collapse-button-size (24px)
Background: --colors/breadcrumb/collapse-fill
Border Radius: --border-radius/full (circle)
Icon: "..." (ellipsis)
```

---

### 17.6 Breadcrumb Patterns

#### Standard Breadcrumb
```
Home / Products / Laptops / MacBook Pro
└─────────────────────────────┘
        Navigation path
```

**Use for:**
- ✅ Site navigation
- ✅ E-commerce category paths
- ✅ File system paths
- ✅ Multi-level content

#### With Icons
```
[🏠] Home / [📦] Products / [💻] Laptops
```

**When to use:**
- ✅ First item only (Home)
- ✅ All items (if icons are clear)
- ❌ Mixing icon and non-icon items

#### Back Button + Breadcrumb
```
[← Back]    Home / Products / Laptops / MacBook Pro
```

**When to use:**
- ✅ Mobile interfaces
- ✅ Linear flows (checkouts, wizards)
- ✅ Apps with both hierarchy and history

---

### 17.7 Placement & Layout

#### Top of Page
```
┌─────────────────────────────────┐
│ Home / Products / Laptops       │  Breadcrumb
├─────────────────────────────────┤
│ Laptops                         │  Page Title
│                                 │
│ [Content...]                    │
└─────────────────────────────────┘
```

**Most common placement:**
- Above page title
- 16-24px margin below

#### Below Header
```
┌─────────────────────────────────┐
│ [Logo]  [Nav]  [Search] [User]  │  Header
├─────────────────────────────────┤
│ Home / Products / Laptops       │  Breadcrumb
├─────────────────────────────────┤
│ Laptops                         │  Page Title
└─────────────────────────────────┘
```

#### Inline with Title
```
┌─────────────────────────────────┐
│ Home / Products / Laptops       │  Breadcrumb
│ Laptop Collection               │  Title (large)
└─────────────────────────────────┘
```

---

### 17.8 Responsive Behavior

```
Desktop (1200px+)
├── Full breadcrumb visible
├── All items shown (or collapsed if >4)
├── Hover states active
└── Standard font size (14px)

Tablet (768-1199px)
├── Collapse after 3 items
├── Reduce spacing slightly
├── Full breadcrumb or hide if needed
└── Standard font size

Mobile (<768px)
├── Option 1: Hide breadcrumb entirely
│   └── Use back button instead
├── Option 2: Show last item only
│   └── "< Products"
├── Option 3: Collapse to "< Back"
└── Smaller font size (12px)
```

#### Mobile Alternatives

**Back Link Only:**
```
[← Products]

Better than breadcrumb on mobile:
- Simpler
- Easier to tap
- Less clutter
```

**Last Item Only:**
```
< Laptops / MacBook Pro
```

**Icon Only:**
```
[← Home] [→]  MacBook Pro
```

---

### 17.9 Structured Data (SEO)

#### Schema.org Markup
```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope
        itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope
        itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/products">
        <span itemprop="name">Products</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope
        itemtype="https://schema.org/ListItem">
      <span itemprop="name">Laptops</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

**Benefits:**
- Google shows breadcrumbs in search results
- Better SEO
- Clear site structure

---

### 17.10 Accessibility

#### Semantic HTML
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Laptops</li>
  </ol>
</nav>
```

#### ARIA Labels
```html
<!-- Current page -->
<li aria-current="page">MacBook Pro</li>

<!-- Collapse button -->
<button aria-label="Show hidden breadcrumb items">
  ...
</button>

<!-- With dropdown -->
<button
  aria-expanded="false"
  aria-controls="breadcrumb-menu"
>
  ...
</button>
```

#### Screen Reader Behavior
```
Announce: "Breadcrumb navigation"
Read: "Home, link"
Read: "Products, link"
Read: "Laptops, current page"
```

---

### 17.11 Best Practices

#### Do's
✅ Show full hierarchy (when space allows)
✅ Make all items except last clickable
✅ Use consistent separators
✅ Start with Home or root level
✅ Match site structure exactly
✅ Use semantic HTML (<nav>, <ol>)
✅ Add structured data for SEO
✅ Keep items short (truncate if needed)

#### Don'ts
❌ Don't show breadcrumb on homepage
❌ Don't make current page clickable
❌ Don't use for single-level sites
❌ Don't show full paths (truncate long items)
❌ Don't use multiple breadcrumbs on one page
❌ Don't include query parameters in URLs
❌ Don't make separators clickable
❌ Don't use on very deep hierarchies (>6 levels)

---

### 17.12 Advanced Features

#### Dynamic Breadcrumbs
**Update based on filters/state:**

```
Before: Products / Laptops
After filter: Products / Laptops / Under $1000
```

#### Truncation
**Long item names:**

```
Home / Very Long Category Name... / Item
                ↑
            Truncate with ellipsis
            Show full name in tooltip
```

```css
max-width: 150px
overflow: hidden
text-overflow: ellipsis
white-space: nowrap
```

#### Custom Styling
**Different style per level:**

```
Home (bold) / Products (regular) / Laptops (light)
```

---

## 18. Chip Component

### Overview
Chips are compact elements representing input, attribute, or action.

**Variants:** 2 (Filled, Outlined)
**Sizes:** 2 (Small, Medium)
**Types:** 4 (Input, Filter, Choice, Action)
**Features:** Avatar, Icon, Delete button

---

### 18.1 Chip Anatomy

```
┌──────────────────────┐
│ [A] Label Text  [×]  │
└──────────────────────┘
  ↑      ↑         ↑
Avatar Label   Delete
(opt)          button
                (opt)

Components:
1. Container (rounded pill shape)
2. Leading element (avatar or icon)
3. Label text
4. Trailing element (delete or dropdown)
```

---

### 18.2 Chip Tokens

```css
/* Dimensions */
--component/chip/height: 32px
--component/chip/height-small: 24px
--component/chip/padding-horizontal: 12px
--component/chip/spacing: 8px

/* Elements */
--component/chip/avatar-size: 24px
--component/chip/icon-size: 18px
--component/chip/delete-icon-size: 18px

/* Colors */
--colors/chip/background: #e0e0e0
--colors/chip/text: rgba(0, 0, 0, 0.87)
--colors/chip/border: transparent

/* Outlined Variant */
Chip Outlined:
  background: transparent
  border: 1px solid --colors/divider

/* Typography */
Font: --typography/body/medium (14px)
Font Small: --typography/body/small (12px)

/* Border Radius */
--border-radius/chip: 16px
```

---

### 18.3 Chip Variants

#### Filled Chip (Default)
**Appearance:** Solid background

```css
Background: --colors/chip/background (#e0e0e0)
Border: none
Color: --colors/chip/text
```

**When to use:**
- ✅ Most chips (default)
- ✅ Tags and labels
- ✅ Filter selections
- ✅ Input chips

**States:**
```
Default:
  background: #e0e0e0

Hover:
  background: #d5d5d5 (darker)

Active/Pressed:
  background: #c0c0c0

Focus:
  outline: 2px solid --colors/primary/main
```

#### Outlined Chip
**Appearance:** Transparent with border

```css
Background: transparent
Border: 1px solid --colors/chip/border
Color: --colors/chip/text
```

**When to use:**
- ✅ Less emphasis
- ✅ Secondary selections
- ✅ Light backgrounds
- ✅ To differentiate from filled

**States:**
```
Default:
  border: 1px solid rgba(0, 0, 0, 0.12)

Hover:
  background: rgba(0, 0, 0, 0.04)
  border: 1px solid rgba(0, 0, 0, 0.24)

Selected:
  border: 2px solid --colors/primary/main
  background: rgba(75, 63, 255, 0.08)
```

---

### 18.4 Chip Sizes

#### Medium Chip (Default)
```css
Height: --component/chip/height (32px)
Font: --typography/body/medium (14px)
Padding: 0 --component/chip/padding-horizontal (12px)
Avatar: --component/chip/avatar-size (24px)
Icon: --component/chip/icon-size (18px)
```

**Use for:**
- ✅ Most chips (standard)
- ✅ Forms and filters
- ✅ Comfortable spacing

#### Small Chip
```css
Height: --component/chip/height-small (24px)
Font: --typography/body/small (12px)
Padding: 0 --spacing/2 (8px)
Avatar: 16px (smaller)
Icon: 14px (smaller)
```

**Use for:**
- ✅ Dense interfaces
- ✅ Inline tags
- ✅ Compact lists
- ✅ Many chips in small space

---

### 18.5 Chip Types by Function

#### Input Chip
**Purpose:** Represent user-entered data (emails, tags)

```
Email Recipients:
[john@ex.com ×] [jane@ex.com ×] [+ Add]
```

**Features:**
- Delete button (×)
- Can be added/removed
- Used in text input fields
- Shows validation state

**Example Use:**
```
To: [________]
    [Alice ×] [Bob ×] [Charlie ×]
```

#### Filter Chip
**Purpose:** Filter or refine results

```
Filters:
[Category: Electronics ×] [Price: Under $500 ×] [In Stock]
```

**Features:**
- Toggleable (on/off)
- Shows active filters
- Delete removes filter
- Can show count

**States:**
```
Inactive: Gray, outlined
Active: Filled, colored
Count: [Category (5)]
```

#### Choice Chip
**Purpose:** Single or multi-select options

```
Size:
( ) Small  (•) Medium  ( ) Large
 ↑          ↑           ↑
Unselected Selected  Unselected
```

**Features:**
- Radio or checkbox behavior
- Mutually exclusive (radio) or multi (checkbox)
- Visual selection indicator

**Single-select:**
```css
Selected:
  background: --colors/primary/main
  color: white
  font-weight: 700
```

**Multi-select:**
```css
Selected:
  background: --colors/primary/light (lighter)
  border: 2px solid --colors/primary/main
  checkmark icon visible
```

#### Action Chip
**Purpose:** Trigger an action

```
[+ Add to Cart]  [↓ Download]  [→ Share]
```

**Features:**
- Clickable button
- Leading icon (optional)
- Hover states
- No delete button

**Visual:**
```css
Look like buttons but:
  - Smaller height (32px vs 40px)
  - Pill shape
  - Lighter weight
```

---

### 18.6 Chip with Avatar

```
[👤 John Doe ×]
 ↑
Avatar (circular photo or icon)
```

**Tokens:**
```css
Avatar Size: --component/chip/avatar-size (24px)
Avatar Spacing: --spacing/2 (8px) from label
Avatar Position: Left side, -4px margin-left (overlap)
```

**When to use:**
- ✅ User mentions/tags
- ✅ Contact lists
- ✅ Assignees
- ✅ Team members

**Avatar Types:**
- Photo (user picture)
- Initials (JD)
- Icon (generic user icon)

---

### 18.7 Chip with Icon

#### Leading Icon
```
[✓ Completed]
 ↑
Icon
```

**Tokens:**
```css
Icon Size: --component/chip/icon-size (18px)
Icon Spacing: --spacing/2 (8px) from label
Icon Color: Inherit from text or custom
```

**Common Icons:**
- ✓ Success/completed
- ⚠️ Warning
- ℹ️ Info
- ✕ Error
- 🔒 Private/locked
- ⭐ Featured

#### Trailing Icon (Dropdown)
```
[Category ▼]
          ↑
       Dropdown
```

**When to use:**
- Chip opens menu
- Shows more options
- Expandable content

---

### 18.8 Delete/Close Button

```
[Label Text  ×]
             ↑
        Delete button
```

**Tokens:**
```css
Size: --component/chip/delete-icon-size (18px)
Spacing: --spacing/2 (8px) from label
Color: rgba(0, 0, 0, 0.6)
Hover Color: --colors/error/main
```

**Behavior:**
```
Hover delete button:
  → Icon darkens or changes to red
  → Cursor: pointer
  → Don't trigger chip hover

Click delete:
  → Remove chip with animation
  → Fade out (150ms)
  → Slide out and collapse gap
  → Trigger onDelete callback
```

**Accessibility:**
```html
<button
  aria-label="Remove Alice"
  class="chip-delete"
>
  <svg aria-hidden="true">×</svg>
</button>
```

---

### 18.9 Chip States

#### Default
```css
Background: --colors/chip/background
Opacity: 1
```

#### Hover
```css
Background: Darken 5-10%
Cursor: pointer (if clickable)
Elevation: +1 (optional)
```

#### Selected/Active
```css
Background: --colors/primary/main or lighter tint
Border: Thicker or colored
Font Weight: 500 or 700
```

#### Focused
```css
Outline: 2px solid --colors/primary/main
Outline Offset: 2px
```

#### Disabled
```css
Opacity: 0.38
Cursor: not-allowed
No hover effects
Delete button hidden or disabled
```

---

### 18.10 Chip Groups

#### Horizontal Chip Group
```
[Tag 1] [Tag 2] [Tag 3] [Tag 4]
```

**Spacing:**
```css
Gap: --component/chip/spacing (8px)
Display: flex
Flex Wrap: wrap (wraps to next line)
```

#### Vertical Chip Stack
```
[Tag 1]
[Tag 2]
[Tag 3]
```

**Spacing:**
```css
Gap: --spacing/2 (8px)
Display: flex
Flex Direction: column
```

#### Scrollable Chip Row
```
[Tag 1] [Tag 2] [Tag 3] [Tag 4] [Tag 5] →
←──────────────────────────────────────→
            Scrollable
```

**When to use:**
- Many chips
- Limited horizontal space
- Preserve layout

```css
Display: flex
Overflow-X: auto
Scrollbar Height: 8px (custom)
```

---

### 18.11 Responsive Behavior

```
Desktop (1200px+)
├── Standard size (32px)
├── Multiple chips per row
├── Comfortable spacing (8px)
└── All features visible

Tablet (768-1199px)
├── Standard or small size
├── May wrap more frequently
├── Reduce spacing slightly
└── Full features

Mobile (<768px)
├── Small size (24px) recommended
├── Full-width chips (optional)
├── Stack vertically (optional)
├── Reduce spacing (4px)
└── Larger tap targets (min 44px)
```

---

### 18.12 Animation

#### Add Chip
```css
Animation: Scale in + Fade in
Duration: 150ms
Easing: ease-out

@keyframes chipEnter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### Remove Chip
```css
Animation: Scale out + Fade out
Duration: 150ms
Easing: ease-in

@keyframes chipExit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
```

#### Hover
```css
Transition: background-color 150ms ease
```

---

### 18.13 Accessibility

#### Keyboard Support
```
Tab: Focus next chip
Shift+Tab: Focus previous chip
Delete/Backspace: Remove focused chip (if deletable)
Enter/Space: Activate chip (if clickable)
Arrow Keys: Navigate between chips in group
```

#### ARIA Labels
```html
<!-- Input chip -->
<div role="button" class="chip">
  <img src="avatar.jpg" alt="" aria-hidden="true" />
  <span>John Doe</span>
  <button aria-label="Remove John Doe">×</button>
</div>

<!-- Filter chip -->
<button
  role="button"
  aria-pressed="true"
  class="chip chip-filter"
>
  <span>Electronics</span>
  <span aria-label="Remove filter">×</span>
</button>

<!-- Choice chip (radio) -->
<input type="radio" id="size-m" name="size" />
<label for="size-m" class="chip">Medium</label>
```

#### Screen Reader
```
Announce:
- "John Doe, removable"
- "Electronics filter, selected, removable"
- "Medium, radio button, selected, 2 of 3"
```

---

### 18.14 Best Practices

#### Do's
✅ Use for tags, categories, filters
✅ Make deletable when appropriate
✅ Group related chips together
✅ Use icons to clarify meaning
✅ Limit chip text length (2-3 words)
✅ Provide clear hover states
✅ Support keyboard navigation
✅ Truncate long text with ellipsis

#### Don'ts
❌ Don't use for primary actions (use buttons)
❌ Don't make chips too large (>40px)
❌ Don't use many different colors
❌ Don't pack too tightly (<4px gap)
❌ Don't use for binary choices (use toggle)
❌ Don't make non-interactive chips look clickable
❌ Don't use long sentences
❌ Don't forget mobile tap targets

---

### 18.15 Use Cases

**Input Fields:**
```
Email Recipients: [john@ex.com ×] [jane@ex.com ×]
```

**Tags:**
```
Tags: [JavaScript] [React] [TypeScript] [+ Add tag]
```

**Filters:**
```
Active Filters: [In Stock ×] [Under $100 ×] [Clear all]
```

**Categories:**
```
Categories: [Electronics] [Computers] [Laptops]
```

**Status:**
```
Status: [✓ Completed] [⚠️ Pending] [✕ Failed]
```

**Selections:**
```
Selected Items: [Item 1 ×] [Item 2 ×] [Item 3 ×]
```

---

Would you like me to continue with the remaining 7 components (Page Heading, Section Heading, Form Layout, Dialog, Tooltip, Snackbar, and Card)?