# Tabs Component Documentation

## Overview
The Tabs component organizes content into separate views where only one view is visible at a time. It enables users to navigate between related groups of content at the same level of hierarchy, providing clear segmentation and easy access to different sections.

**Component Type:** Navigation / Organization Component
**Based on:** Material-UI (MUI) v6.1.0 Tabs & Tab
**Documentation:** [MUI Tabs API](https://mui.com/api/tabs) | [MUI Tab API](https://mui.com/api/tab)

---

## Design Tokens

### Layout Tokens
```typescript
'--component/tabs/height': '48px',
'--component/tabs/min-height': '48px',
'--component/tabs/scrollable-height': '48px',
'--component/tabs/indicator-height': '2px',
```

### Tab Item Tokens
```typescript
// Standard Tab
'--component/tab/height': '48px',
'--component/tab/min-height': '48px',
'--component/tab/min-width': '90px',
'--component/tab/max-width': '360px',
'--component/tab/padding': '12px 16px',

// Tab with Icon & Label
'--component/tab/with-icon/height': '72px',
'--component/tab/with-icon/min-height': '72px',
'--component/tab/with-icon/padding': '12px 16px',
'--component/tab/icon-size': '24px',
'--component/tab/icon-gap': '8px',
```

### Typography Tokens
```typescript
'--component/tab/font-family': 'var(--typography/base-styles/button/font-family, "DM_Sans:Medium", sans-serif)',
'--component/tab/font-size': '14px',
'--component/tab/font-weight': '500',
'--component/tab/line-height': '24px',
'--component/tab/letter-spacing': '0.4px',
'--component/tab/text-transform': 'uppercase',
```

### Color Tokens
```typescript
// Default State
'--component/tab/default/text-color': 'rgba(0, 0, 0, 0.6)',
'--component/tab/default/icon-color': 'rgba(0, 0, 0, 0.54)',

// Hover State
'--component/tab/hover/text-color': 'rgba(0, 0, 0, 0.87)',
'--component/tab/hover/bg-color': 'rgba(0, 0, 0, 0.04)',

// Active/Selected State
'--component/tab/selected/text-color': '#4b3fff',
'--component/tab/selected/icon-color': '#4b3fff',
'--component/tab/selected/indicator-color': '#4b3fff',

// Focus State
'--component/tab/focus/outline-color': 'rgba(75, 63, 255, 0.5)',
'--component/tab/focus/outline-width': '2px',
'--component/tab/focus/outline-offset': '-2px',

// Disabled State
'--component/tab/disabled/text-color': 'rgba(0, 0, 0, 0.38)',
'--component/tab/disabled/icon-color': 'rgba(0, 0, 0, 0.26)',
'--component/tab/disabled/cursor': 'not-allowed',
```

### Indicator Tokens
```typescript
'--component/tabs/indicator/height': '2px',
'--component/tabs/indicator/color': '#4b3fff',
'--component/tabs/indicator/transition-duration': '300ms',
'--component/tabs/indicator/transition-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
```

### Scrollable Tabs Tokens
```typescript
'--component/tabs/scroll-button/size': '40px',
'--component/tabs/scroll-button/icon-size': '24px',
'--component/tabs/scroll-button/color': 'rgba(0, 0, 0, 0.54)',
```

---

## Component Anatomy

### Tabs Container
- **Purpose:** Root container managing tab navigation
- **Layout:** Horizontal (default) or vertical
- **Features:** Indicator, scroll buttons (if needed)
- **Height:** 48px (text only), 72px (with icons)

### Tab Item
- **Purpose:** Individual clickable tab
- **Content:** Label (text), Icon (optional), Badge (optional)
- **States:** Default, Hover, Selected, Focus, Disabled
- **Width:** Min 90px, Max 360px

### Active Indicator
- **Purpose:** Visual indicator for selected tab
- **Height:** 2px
- **Color:** Primary color
- **Position:** Bottom of tab (horizontal) or left/right (vertical)
- **Animation:** Smooth slide transition (300ms)

### Scroll Buttons
- **Purpose:** Navigate when tabs overflow container
- **Size:** 40×40px
- **Icons:** chevron-left, chevron-right (24px)
- **Position:** Left and right edges
- **Behavior:** Auto-hide when not needed

---

## Tab Variants

### Text Only Tabs
- **Content:** Text label only
- **Height:** 48px
- **Min Width:** 90px
- **Padding:** 12px 16px
- **Use Case:** Simple navigation, space-constrained UIs
- **Text Transform:** Uppercase
- **Font Weight:** 500 (medium)

### Icon + Text Tabs
- **Content:** Icon above text label
- **Height:** 72px
- **Icon Size:** 24×24px
- **Icon Gap:** 8px below icon
- **Layout:** Vertical stack (icon, then label)
- **Use Case:** Visual categorization, important sections
- **Alignment:** Center

### Icon Only Tabs
- **Content:** Icon without text
- **Height:** 48px
- **Width:** 48px (square)
- **Icon Size:** 24×24px
- **Use Case:** Compact navigation, icon-based interfaces
- **Accessibility:** Requires aria-label

### Wrapped Label Tabs
- **Content:** Multi-line text labels
- **Height:** Variable (min 72px)
- **Text Wrap:** Allowed
- **Max Lines:** 2 recommended
- **Use Case:** Long tab labels that don't fit single line

---

## Orientation Variants

### Horizontal Tabs (Default)
- **Layout:** Tabs arranged left to right
- **Indicator Position:** Bottom of tabs
- **Scroll Direction:** Horizontal
- **Use Case:** Primary navigation, most common
- **Best For:** Desktop and tablet viewports

### Vertical Tabs
- **Layout:** Tabs arranged top to bottom
- **Indicator Position:** Left or right of tabs
- **Scroll Direction:** Vertical
- **Use Case:** Side navigation, settings panels
- **Best For:** Desktop with adequate width

---

## Scrollable Behavior

### Fixed Tabs
- **Behavior:** All tabs visible, no scrolling
- **Width:** Tabs expand to fill container equally
- **Use Case:** 2-5 tabs that fit in viewport
- **Best For:** Simple navigation

### Scrollable Tabs
- **Behavior:** Horizontal scroll when tabs overflow
- **Width:** Tabs maintain min/max width constraints
- **Scroll Buttons:** Appear on left/right edges
- **Use Case:** 6+ tabs or long labels
- **Best For:** Many navigation options

### Centered Tabs
- **Behavior:** Tabs centered in container
- **Width:** Tabs maintain natural width
- **Use Case:** Hero sections, prominent navigation
- **Best For:** Small number of tabs (2-4)

---

## Tab States

### Default
- **Text Color:** Secondary text (60% opacity)
- **Icon Color:** Secondary icon (54% opacity)
- **Background:** Transparent
- **Indicator:** Hidden
- **Cursor:** pointer
- **Visual:** Inactive appearance

### Hover
- **Text Color:** Primary text (87% opacity)
- **Icon Color:** Primary icon
- **Background:** Light gray (4% opacity black)
- **Indicator:** Hidden
- **Cursor:** pointer
- **Transition:** 150ms
- **Visual:** Subtle highlight

### Selected (Active)
- **Text Color:** Primary color (`#4b3fff`)
- **Icon Color:** Primary color
- **Background:** Transparent
- **Indicator:** Visible (2px primary color)
- **Font Weight:** 500 (maintained)
- **Visual:** Clear active state

### Focus
- **Outline:** 2px primary (50% opacity)
- **Outline Offset:** -2px (inside)
- **Background:** Maintained from state
- **Keyboard:** Visible focus ring
- **Visual:** Clear focus indicator

### Disabled
- **Text Color:** Light gray (38% opacity)
- **Icon Color:** Very light gray (26% opacity)
- **Background:** Transparent
- **Indicator:** Hidden
- **Cursor:** not-allowed
- **Interaction:** None
- **Visual:** Grayed out appearance

---

## Usage Guidelines

### When to Use
- Organize related content into logical groups
- Switch between views at same hierarchy level
- Navigation within a page or section
- Settings panels with categories
- Data tables with different views
- Dashboard sections
- Multi-step forms (alternative to stepper)
- Product details (overview, specs, reviews)

### When NOT to Use
- Hierarchical navigation (use TreeView or Menu)
- Primary site navigation (use Navigation component)
- Sequential steps (use Stepper)
- Single piece of content (no need for tabs)
- More than 10-12 tabs (consider categorization)
- Unrelated content groupings

### Best Practices

#### Do
- Use 2-7 tabs for optimal usability
- Keep tab labels short (1-2 words)
- Use consistent label length across tabs
- Show selected state clearly with indicator
- Place most important tab first (leftmost)
- Use icons to reinforce meaning
- Maintain tab order (don't reorder dynamically)
- Lazy load tab content for performance
- Support keyboard navigation
- Make indicator animation smooth

#### Don't
- Use too many tabs (> 12)
- Mix different tab heights in same container
- Use tabs for sequential processes (use Stepper)
- Hide critical content in tabs
- Use generic labels ("Tab 1", "Tab 2")
- Nest tabs within tabs
- Make tabs too small (< 90px)
- Remove indicator completely
- Forget disabled state for unavailable tabs
- Use tabs on mobile without scrolling

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<div role="tablist" aria-label="Content sections">
  <button
    role="tab"
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
    tabindex="0"
  >
    Overview
  </button>
  <button
    role="tab"
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
    tabindex="-1"
  >
    Details
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1" tabindex="0">
  <p>Overview content</p>
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" tabindex="0" hidden>
  <p>Details content</p>
</div>
```

#### ARIA Attributes
```typescript
{
  // Tabs container
  role: "tablist",
  "aria-label": string,
  "aria-orientation": "horizontal" | "vertical",

  // Tab item
  role: "tab",
  "aria-selected": boolean,
  "aria-controls": string,      // References tabpanel ID
  "aria-disabled": boolean,
  id: string,
  tabIndex: 0 | -1,             // 0 for selected, -1 for others

  // Tab panel
  role: "tabpanel",
  "aria-labelledby": string,    // References tab ID
  id: string,
  tabIndex: 0,
  hidden: boolean,              // Hide inactive panels
}
```

#### Keyboard Navigation
- **Tab:** Focus tabs container (first tab or selected tab)
- **Arrow Left:** Previous tab (horizontal tabs)
- **Arrow Right:** Next tab (horizontal tabs)
- **Arrow Up:** Previous tab (vertical tabs)
- **Arrow Down:** Next tab (vertical tabs)
- **Home:** First tab
- **End:** Last tab
- **Enter/Space:** Activate focused tab
- **Shift+Tab:** Move focus out of tabs

#### Focus Management
- **Initial Focus:** Selected tab receives tabindex="0"
- **Other Tabs:** tabindex="-1" (reachable via arrow keys)
- **Roving Focus:** Arrow keys move focus between tabs
- **Activation:** Focus and selection happen together (automatic activation)

#### Color Contrast
- **Default Text:** 4.5:1 minimum (60% opacity on white)
- **Selected Text:** 4.5:1 minimum (primary color)
- **Indicator:** 3:1 minimum (non-text contrast)
- **Disabled Text:** Exempt from contrast requirements

#### Touch Targets
- **Minimum Height:** 48px
- **Minimum Width:** 48px (icon only) or 90px (with text)
- **Spacing:** Adequate tap area without overlap
- **Mobile:** Increase height to 56px if needed

#### Screen Reader Support
- Tab purpose announced ("Overview, tab, 1 of 3")
- Selected state announced ("selected")
- Panel content associated with tab label
- Orientation announced (horizontal/vertical)
- Disabled state announced ("disabled")

---

## Code Examples

### Basic Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
        <Tab label="Overview" />
        <Tab label="Details" />
        <Tab label="Reviews" />
      </Tabs>
    </Box>
  );
}
```

### Tabs with Panels
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function TabsWithPanels() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(e, v) => setValue(v)}>
        <Tab label="Item One" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Item Two" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Item Three" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Content
      </TabPanel>
    </Box>
  );
}
```

### Icon + Text Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function IconLabelTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab icon={<PhoneIcon />} label="Recents" />
      <Tab icon={<FavoriteIcon />} label="Favorites" />
      <Tab icon={<PersonPinIcon />} label="Nearby" />
    </Tabs>
  );
}
```

### Icon Only Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function IconTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab icon={<PhoneIcon />} aria-label="phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
      <Tab icon={<PersonPinIcon />} aria-label="person" />
    </Tabs>
  );
}
```

### Scrollable Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
```

### Centered Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      centered
    >
      <Tab label="Overview" />
      <Tab label="Features" />
      <Tab label="Pricing" />
    </Tabs>
  );
}
```

### Vertical Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ display: 'flex', height: 400 }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={(e, v) => setValue(v)}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      {/* Other panels */}
    </Box>
  );
}
```

### Disabled Tab
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DisabledTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>
  );
}
```

### Full Width Tabs
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      variant="fullWidth"
    >
      <Tab label="Overview" />
      <Tab label="Details" />
      <Tab label="Reviews" />
    </Tabs>
  );
}
```

### Custom Indicator Color
```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ColoredIndicatorTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      onChange={(e, v) => setValue(v)}
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  );
}
```

---

## Common Patterns

### Dashboard Navigation
```tsx
<Tabs value={activeTab} onChange={handleChange}>
  <Tab label="Overview" />
  <Tab label="Analytics" />
  <Tab label="Reports" />
  <Tab label="Settings" />
</Tabs>
```

### Settings Panel
```tsx
<Box sx={{ display: 'flex' }}>
  <Tabs orientation="vertical" value={section}>
    <Tab label="Profile" />
    <Tab label="Account" />
    <Tab label="Privacy" />
    <Tab label="Notifications" />
  </Tabs>
  <Box sx={{ flex: 1, p: 3 }}>
    {/* Settings content */}
  </Box>
</Box>
```

### Product Details
```tsx
<Tabs value={view} onChange={setView}>
  <Tab label="Description" />
  <Tab label="Specifications" />
  <Tab label="Reviews" />
  <Tab label="Q&A" />
</Tabs>
```

### Data Table Views
```tsx
<Tabs value={tableView} onChange={handleViewChange}>
  <Tab label="All Items" />
  <Tab label="Active" />
  <Tab label="Archived" />
</Tabs>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use scrollable tabs by default
- Increase touch target height (56px minimum)
- Enable scroll buttons
- Consider full-width tabs for 2-3 items
- Use text-only tabs (avoid icons to save space)
- Stack vertically if many tabs (alternative: drawer)

### Tablet (600px - 960px)
- Scrollable tabs for 5+ items
- Standard height (48px)
- Fixed tabs work well for 3-5 items
- Icon + text tabs acceptable

### Desktop (> 960px)
- Fixed tabs for up to 7 items
- Scrollable for 8+ items
- Centered tabs for hero sections
- Vertical tabs for side panels
- Full flexibility with all variants

---

## Total Variant Combinations

**Tab Content:** 4 (Text only, Icon + Text, Icon only, Wrapped label)
**Orientations:** 2 (Horizontal, Vertical)
**Behavior:** 3 (Fixed, Scrollable, Centered)
**States:** 5 (Default, Hover, Selected, Focus, Disabled)
**With Badge:** Optional

**Total Base Combinations:** 4 × 2 × 3 = **24 base configurations**
**With States:** 24 × 5 = **120 total combinations**

---

## Related Components
- **App Bar:** Often contains tabs for top-level navigation
- **Stepper:** For sequential processes (alternative to tabs)
- **Breadcrumbs:** For hierarchical navigation
- **Navigation (Sidenav):** For primary app navigation
- **Menu:** For dropdown navigation options

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11053:152542
- **Component:** `<Tabs>`, `<Tab>`
- **Heights:** 48px (text only), 72px (with icons)
- **Documentation:** [MUI Tabs API](https://mui.com/api/tabs)

---

## Migration Notes

### From Previous Design System
- Tab height standardized to 48px (text), 72px (icon + text)
- Min width set to 90px
- Max width set to 360px
- Indicator height fixed at 2px
- Typography aligned to Button style (14px, 500 weight, uppercase)
- Selected state uses primary color (#4b3fff)
- Hover background uses 4% opacity
- Disabled state standardized (38% opacity)
- Focus outline set to 2px
- Transition timing set to 300ms cubic-bezier

### Design Tokens Required
- All color tokens (primary, text, disabled)
- Typography tokens (Button, 14px, 500 weight)
- Spacing tokens (8px, 12px, 16px)
- Height tokens (48px, 72px)
- Transition tokens (300ms)
- Indicator height (2px)

---

## Performance Considerations

- Lazy load tab panel content
- Render only active panel in DOM
- Use React.memo for tab panels
- Avoid heavy operations in tab change handlers
- Debounce rapid tab switching
- Virtualize long lists of tabs (> 50)
- Optimize animations (use CSS transforms)
- Cache panel content when appropriate
- Minimize re-renders with proper keys

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 120+ variant combinations documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Horizontal and vertical orientations
- Icon, text, and combined variants
- Scrollable and fixed behaviors
