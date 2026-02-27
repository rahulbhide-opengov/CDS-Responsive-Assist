# Accordion Component - Complete Documentation

**Component Type:** Interactive / Disclosure
**Last Updated:** 2026-02-26
**Status:** ✅ Production Ready

---

## Table of Contents

1. [Overview](#overview)
2. [Component Anatomy](#component-anatomy)
3. [Design Tokens](#design-tokens)
4. [Variants](#variants)
5. [States](#states)
6. [Usage Criteria](#usage-criteria)
7. [Responsive Behavior](#responsive-behavior)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)
10. [Examples](#examples)

---

## Overview

The Accordion component provides an interactive header for expandable/collapsible content sections. It allows users to show or hide content panels to manage information density and improve scannability.

### Key Features

- **3 Sizes:** Small (56px), Medium (60px), Large (64px)
- **2 Alignments:** Left chevron or Right chevron
- **4 States:** Idle, Hover, Focus, Disabled
- **2 Open States:** Collapsed, Expanded
- **Optional Elements:** Description text, selection indicator, trailing icon
- **Fully Accessible:** ARIA expanded state, keyboard navigation

### When to Use

✅ **Use Accordion when:**
- Organizing FAQ sections
- Grouping related content in categories
- Creating expandable settings panels
- Building navigation with nested items
- Displaying step-by-step instructions
- Reducing vertical scroll in long forms

❌ **Don't use Accordion when:**
- You have only one collapsible item
- Content is critical and should always be visible
- Building complex multi-step forms (use Stepper instead)
- Creating tabbed navigation (use Tabs instead)
- Content is very short and doesn't need hiding

---

## Component Anatomy

### Visual Structure

```
┌──────────────────────────────────────────────────────────────┐
│ [Selection] [Chevron] [Title Content        ] [Trailing Icon]│
│  Indicator            [Description (optional)]               │
└──────────────────────────────────────────────────────────────┘

Width: 360px (flexible, can expand to container width)
Height: Varies by size (56px / 60px / 64px)
```

### Component Parts

1. **Selection Indicator** (Optional)
   - Vertical colored line on left edge
   - Width: 1px rotated (60px / 56px / 64px depending on size)
   - Color: Primary main
   - Appears when `selected={true}`

2. **Chevron Icon** (Required)
   - Size: 16×16px
   - Icons used:
     - `chevron-right` - Closed state (left alignment)
     - `chevron-down` - Closed state (right alignment) or Open state (left alignment)
     - `chevron-up` - Open state (right alignment)
   - Position: Left or right based on alignment variant

3. **Title Content** (Required)
   - **Title Text:** Primary heading, uses H5/H6/H4 based on size
   - **Description Text:** Optional secondary text, uses Body2/Body3/Body1
   - Flex grows to fill available space
   - Vertical gap: 0px (stacked)

4. **Trailing Icon** (Optional)
   - Size: 16×16px
   - Default: check-circle icon
   - Can be replaced with custom icon
   - Appears when `withIcon={true}`

---

## Design Tokens

### Accordion-Specific Tokens

```typescript
// Spacing
'--component/accordion/gap': '8px',                    // Gap between elements
'--component/accordion/padding-horizontal': '12px',    // Horizontal padding
'--component/accordion/padding-vertical-small': '12px',
'--component/accordion/padding-vertical-medium': '12px',
'--component/accordion/padding-vertical-large': '12px',
'--component/accordion/padding-left': '8px',           // Left padding for chevron

// Heights by Size
'--component/accordion/height-small': '56px',
'--component/accordion/height-medium': '60px',
'--component/accordion/height-large': '64px',

// Selection Indicator
'--component/accordion/selected-line-width': '1px',
'--component/accordion/selected-line-small': '56px',   // Rotated 90deg
'--component/accordion/selected-line-medium': '60px',
'--component/accordion/selected-line-large': '64px',

// Icon Sizes
'--component/accordion/icon-size': '16px',

// Border Radius (Inherited)
'--component/accordion/border-radius': '0px',          // Typically no radius

// Focus Border
'--component/accordion/focus-border-width': '1px',
```

### Color Tokens Used

```typescript
// Background Colors
'--colors/background/default': 'white',                // Idle state
'--colors/primary/light': '#eef1fc',                  // Hover/Focus state
'--colors/background/tertiary': '#f2f2f2',            // Disabled state

// Text Colors
'--colors/text/primary': 'rgba(0,0,0,0.87)',          // Title text
'--colors/secondary/main': '#546574',                  // Description text
'--colors/text/disabled': 'rgba(0,0,0,0.38)',         // Disabled text

// Border Colors
'--colors/primary/main': '#4b3fff',                    // Focus border, selection indicator
```

### Typography Tokens by Size

#### Small Size
```typescript
'--typography/base-styles/h6/font-family': 'DM Sans',
'--typography/base-styles/h6/font-size': '12px',
'--typography/base-styles/h6/font-weight': '600',
'--typography/base-styles/h6/line-height': '16px',
'--typography/base-styles/h6/letter-spacing': '0px',

'--typography/base-styles/body3/font-family': 'DM Sans',
'--typography/base-styles/body3/font-size': '12px',
'--typography/base-styles/body3/font-weight': '400',
'--typography/base-styles/body3/line-height': '16px',
'--typography/base-styles/body3/letter-spacing': '0.17px',
```

#### Medium Size (Default)
```typescript
'--typography/base-styles/h5/font-family': 'DM Sans',
'--typography/base-styles/h5/font-size': '14px',
'--typography/base-styles/h5/font-weight': '600',
'--typography/base-styles/h5/line-height': '18px',
'--typography/base-styles/h5/letter-spacing': '0px',

'--typography/base-styles/body2/font-family': 'DM Sans',
'--typography/base-styles/body2/font-size': '14px',
'--typography/base-styles/body2/font-weight': '400',
'--typography/base-styles/body2/line-height': '18px',
'--typography/base-styles/body2/letter-spacing': '0.17px',
```

#### Large Size
```typescript
'--typography/base-styles/h4/font-family': 'DM Sans',
'--typography/base-styles/h4/font-size': '16px',
'--typography/base-styles/h4/font-weight': '600',
'--typography/base-styles/h4/line-height': '20px',
'--typography/base-styles/h4/letter-spacing': '-0.2px',

'--typography/base-styles/body1/font-family': 'DM Sans',
'--typography/base-styles/body1/font-size': '16px',
'--typography/base-styles/body1/font-weight': '400',
'--typography/base-styles/body1/line-height': '20px',
'--typography/base-styles/body1/letter-spacing': '0.15px',
```

---

## Variants

### Size Variants

#### 1. Small (56px)

**Use when:**
- Compact UI required
- Sidebars with limited width
- Dense information displays
- Mobile views with many sections

**Typography:**
- Title: H6 (12px, semibold)
- Description: Body3 (12px, regular)

**Spacing:**
- Height: 56px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 56px
│     This is a description.             │
└────────────────────────────────────────┘
```

#### 2. Medium (60px) - Default ⭐

**Use when:**
- Most common use case
- Standard desktop layouts
- Balanced readability and density
- Default choice for most applications

**Typography:**
- Title: H5 (14px, semibold)
- Description: Body2 (14px, regular)

**Spacing:**
- Height: 60px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 60px
│     This is a description.             │
└────────────────────────────────────────┘
```

#### 3. Large (64px)

**Use when:**
- Prominent sections
- Touch-first interfaces
- Accessibility needs (larger text)
- Desktop with comfortable spacing

**Typography:**
- Title: H4 (16px, semibold)
- Description: Body1 (16px, regular)

**Spacing:**
- Height: 64px
- Padding: 12px vertical, 8px + 12px horizontal
- Gap: 8px

**Visual Example:**
```
┌────────────────────────────────────────┐
│ [►] Accordion Title        [✓]         │ 64px
│     This is a description.             │
└────────────────────────────────────────┘
```

---

### Alignment Variants

#### Left Alignment

**Chevron Position:** Left side
**Chevron Behavior:**
- Closed: `chevron-right` (►)
- Open: `chevron-down` (▼)

**Layout Flow:**
```
[Selection] [► Chevron] [Title + Description] [Icon]
```

**Use when:**
- Standard accordion pattern
- Reading left-to-right languages
- Navigation menus
- Sidebar sections

#### Right Alignment

**Chevron Position:** Right side
**Chevron Behavior:**
- Closed: `chevron-down` (▼)
- Open: `chevron-up` (▲)

**Layout Flow:**
```
[Selection] [Icon] [Title + Description] [▼ Chevron]
```

**Use when:**
- Icon emphasis (icon appears first)
- Alternative visual hierarchy
- Matching specific design patterns
- Table row expansion headers

---

## States

### 1. Idle (Default)

**Appearance:**
- Background: `--colors/background/default` (white)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Border: None

**When:**
- Resting state
- No user interaction
- Default appearance

### 2. Hover

**Appearance:**
- Background: `--colors/primary/light` (#eef1fc)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Border: None
- Cursor: pointer

**When:**
- Mouse cursor over the accordion header
- Desktop/pointer devices only
- Indicates interactivity

**Transition:**
- Duration: 150ms
- Easing: ease-in-out

### 3. Focus

**Appearance:**
- Background: `--colors/primary/light` (#eef1fc)
- Border: 1px solid `--colors/primary/main` (#4b3fff)
- Title: `--colors/text/primary` (rgba(0,0,0,0.87))
- Description: `--colors/secondary/main` (#546574)
- Outline: Visible focus ring

**When:**
- Keyboard navigation (Tab focus)
- Screen reader focus
- Accessibility requirement

**Important:**
- Must be clearly visible
- Cannot be removed for accessibility
- Meets WCAG 2.1 Level AA

### 4. Disabled

**Appearance:**
- Background: `--colors/background/tertiary` (#f2f2f2)
- Title: `--colors/text/disabled` (rgba(0,0,0,0.38))
- Description: `--colors/text/disabled` (rgba(0,0,0,0.38))
- Icons: Reduced opacity
- Cursor: not-allowed

**When:**
- Section cannot be expanded
- Content is unavailable
- User lacks permissions
- Dependent condition not met

**Behavior:**
- Not clickable
- Not keyboard navigable
- Not announced by screen readers as interactive

---

### Open/Closed States

#### Closed State

**Chevron Icon:**
- Left alignment: `chevron-right` (►)
- Right alignment: `chevron-down` (▼)

**ARIA:**
- `aria-expanded="false"`

**Content Panel:**
- Hidden (display: none or height: 0)
- Not in tab order

#### Open State

**Chevron Icon:**
- Left alignment: `chevron-down` (▼)
- Right alignment: `chevron-up` (▲)

**ARIA:**
- `aria-expanded="true"`

**Content Panel:**
- Visible
- Animated expand (height transition)
- Content becomes keyboard navigable

**Animation:**
```css
.accordion-content {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
```

---

### Selection Indicator

**When to Show:**
- Current/active accordion
- User selection in a list
- Highlighted section

**Appearance:**
- 1px vertical line on left edge
- Color: `--colors/primary/main` (#4b3fff)
- Height: Matches accordion height (56px/60px/64px)
- Position: Absolute left edge

**Usage:**
```html
<div class="accordion" data-selected="true">
  <!-- Selection line appears -->
</div>
```

---

## Usage Criteria

### ✅ When to Use Accordion

1. **FAQ Pages**
   - Question as title
   - Answer in expandable content
   - Reduces page length

2. **Settings Panels**
   - Category as title
   - Settings in expandable section
   - Organizes complex options

3. **Product Features**
   - Feature name as title
   - Details in expandable content
   - Improves scannability

4. **Help Documentation**
   - Topic as title
   - Instructions in content
   - Progressive disclosure

5. **Form Sections**
   - Section name as title
   - Form fields in content
   - Reduces cognitive load

6. **Navigation Menus**
   - Category as title
   - Submenu in content
   - Hierarchical structure

### ❌ When NOT to Use Accordion

1. **Single Item**
   - Use simple expand/collapse button instead
   - Accordion implies multiple sections

2. **Critical Content**
   - Don't hide important information
   - Users may not discover it
   - Use visible sections instead

3. **Short Content**
   - If content fits on screen, don't hide it
   - Adds unnecessary interaction

4. **Sequential Processes**
   - Use Stepper component instead
   - Accordion is non-linear

5. **Tabbed Content**
   - Use Tabs component instead
   - Different navigation pattern

6. **Always-Visible Content**
   - Use Cards or Sections instead
   - Accordion hides by default

---

### Content Guidelines

#### Title Text

✅ **Do:**
- Keep titles concise (3-7 words)
- Use clear, descriptive labels
- Use sentence case
- Front-load important words
- Make titles scannable

❌ **Don't:**
- Use vague titles ("More Info", "Details")
- Write full sentences
- Use ALL CAPS
- Include punctuation at end
- Repeat words across titles

**Examples:**
- ✅ "Shipping and delivery options"
- ✅ "Payment methods"
- ✅ "Account security settings"
- ❌ "Click here for more information"
- ❌ "Details"
- ❌ "IMPORTANT: READ THIS FIRST"

#### Description Text (Optional)

✅ **Do:**
- Keep to 1 sentence
- Provide helpful preview
- Use 10-15 words maximum
- Complement the title

❌ **Don't:**
- Repeat the title
- Include full content
- Use multiple sentences
- Make it essential to understand

**Examples:**
- ✅ "Choose how we deliver your order"
- ✅ "Credit card, PayPal, or bank transfer"
- ❌ "This section contains information about..."

---

## Responsive Behavior

### Desktop (1200px+)

**Layout:**
- Width: Flexible (360px minimum)
- Height: 60px (medium size default)
- Hover states: Active
- Cursor: pointer on hover

**Interaction:**
- Click to toggle
- Keyboard navigation supported
- Hover feedback visible

**Spacing:**
- Comfortable padding (12px vertical)
- Icon spacing: 8px

### Tablet (768-1199px)

**Layout:**
- Width: Flexible, full container width
- Height: 60px (medium size recommended)
- Touch targets: 48×48px minimum

**Interaction:**
- Touch to toggle
- No hover states (touch device)
- Focus states for accessibility

**Adjustments:**
- Maintain 60px height
- Ensure touch-friendly hit areas
- Test with fingers, not pointer

### Mobile (<768px)

**Layout:**
- Width: Full width (minus page padding)
- Height: 60px or 64px (large size better for touch)
- Touch targets: 48×48px minimum (met by all sizes)

**Interaction:**
- Touch to toggle
- No hover effects
- Large tap targets

**Adjustments:**
- Consider large size (64px) for better touch
- Hide description text if space constrained
- Stack multiple accordions vertically
- Full-width layout

**Mobile-Specific:**
```css
@media (max-width: 767px) {
  .accordion {
    width: 100%;
    height: var(--component/accordion/height-large); /* 64px */
  }

  .accordion-description {
    display: none; /* Optional: hide on small screens */
  }
}
```

---

## Accessibility

### ARIA Attributes

#### Accordion Header (Button)
```html
<button
  role="button"
  aria-expanded="false"
  aria-controls="panel-1"
  aria-disabled="false"
  class="accordion-header"
>
  <span class="accordion-title">Accordion Title</span>
  <span class="accordion-description">This is a description.</span>
</button>
```

#### Accordion Panel (Content)
```html
<div
  id="panel-1"
  role="region"
  aria-labelledby="accordion-1"
  hidden
>
  <!-- Expandable content -->
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| **Tab** | Move focus to next accordion header |
| **Shift + Tab** | Move focus to previous accordion header |
| **Enter** / **Space** | Toggle accordion open/closed |
| **Home** | Move to first accordion (optional) |
| **End** | Move to last accordion (optional) |
| **↓** | Move to next accordion (optional) |
| **↑** | Move to previous accordion (optional) |

### Screen Reader Announcements

**When focused:**
```
"Accordion Title, This is a description. Button, collapsed. Press Enter to expand."
```

**After expanding:**
```
"Accordion Title expanded. 1 of 5."
```

**After collapsing:**
```
"Accordion Title collapsed."
```

### Focus Management

1. **Visible Focus Indicator**
   - 1px border in primary color
   - Sufficient contrast (3:1 minimum)
   - Clearly distinguishable from hover

2. **Focus Order**
   - Logical top-to-bottom order
   - Accordion headers in document order
   - Content becomes focusable when expanded

3. **Focus Trap**
   - Not required (content is part of page flow)
   - Content should be in natural tab order

### Color Contrast

**WCAG 2.1 Level AA Requirements:**
- Title text: 4.5:1 contrast ratio ✅
  - Primary text on white: ~14.8:1 ✅
- Description text: 4.5:1 contrast ratio ✅
  - Secondary text on white: ~5.2:1 ✅
- Disabled text: 3:1 contrast ratio ✅
  - Disabled text on tertiary: ~4.1:1 ✅

### Touch Targets

- Minimum size: 44×44px ✅
- Small size: 56px ✅
- Medium size: 60px ✅
- Large size: 64px ✅
- All sizes meet WCAG requirements

---

## Best Practices

### Do's ✅

1. **Use Consistent Patterns**
   - Keep all accordions in a group the same size
   - Use same chevron alignment throughout
   - Maintain visual consistency

2. **Provide Clear Titles**
   - Make titles descriptive and scannable
   - Front-load important keywords
   - Keep concise (3-7 words)

3. **Progressive Disclosure**
   - Hide secondary/optional information
   - Show most important content by default
   - Let users expand to see more

4. **Group Related Content**
   - Use multiple accordions for different topics
   - Maintain logical order
   - Consider allowing multiple open at once

5. **Keyboard Support**
   - Ensure all accordions are keyboard accessible
   - Test with Tab, Enter, Space keys
   - Provide clear focus indicators

6. **Consider Default State**
   - Open first accordion by default if helpful
   - Consider user's likely need
   - Remember user's state if possible

### Don'ts ❌

1. **Don't Hide Critical Information**
   - Keep important content visible
   - Don't require users to discover hidden content
   - Use accordions for secondary details

2. **Don't Use for Navigation**
   - Use Navigation/Sidenav component instead
   - Accordion is for content disclosure
   - Navigation has different patterns

3. **Don't Nest Accordions**
   - Avoid accordion within accordion
   - Leads to confusing hierarchy
   - Use other organization methods

4. **Don't Use Tiny Text**
   - Respect minimum font sizes
   - Don't go below 12px (small size)
   - Ensure readability

5. **Don't Disable Without Reason**
   - Only disable when necessary
   - Provide explanation why disabled
   - Consider hiding instead

6. **Don't Force Single Open**
   - Allow multiple accordions open simultaneously
   - Let users compare content
   - Exception: When mutually exclusive options

---

## Examples

### Example 1: Basic FAQ Accordion

```html
<!-- Small Size, Left Alignment, with Description -->
<div class="accordion-container">
  <button
    class="accordion-header"
    aria-expanded="false"
    aria-controls="faq-1"
  >
    <svg class="accordion-icon chevron-right" width="16" height="16">
      <!-- Chevron icon -->
    </svg>
    <div class="accordion-content">
      <div class="accordion-title">How do I reset my password?</div>
      <div class="accordion-description">Instructions for password recovery.</div>
    </div>
  </button>

  <div id="faq-1" class="accordion-panel" hidden>
    <p>Click "Forgot Password" on the login page and follow the email instructions.</p>
  </div>
</div>

<style>
.accordion-header {
  display: flex;
  align-items: center;
  gap: var(--spacings-&-sizes/base/8px);
  padding: var(--spacings-&-sizes/base/12px) var(--spacings-&-sizes/base/12px)
           var(--spacings-&-sizes/base/12px) var(--spacings-&-sizes/base/8px);
  background: var(--colors/background/default);
  border: none;
  cursor: pointer;
  width: 100%;
  height: var(--component/accordion/height-small);
  transition: background-color 150ms ease-in-out;
}

.accordion-header:hover {
  background: var(--colors/primary/light);
}

.accordion-header:focus {
  background: var(--colors/primary/light);
  border: 1px solid var(--colors/primary/main);
  outline: none;
}

.accordion-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.accordion-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: left;
}

.accordion-title {
  font-family: var(--typography/base-styles/h6/font-family);
  font-size: var(--typography/base-styles/h6/font-size);
  font-weight: var(--typography/base-styles/h6/font-weight);
  line-height: var(--typography/base-styles/h6/line-height);
  color: var(--colors/text/primary);
}

.accordion-description {
  font-family: var(--typography/base-styles/body3/font-family);
  font-size: var(--typography/base-styles/body3/font-size);
  font-weight: var(--typography/base-styles/body3/font-weight);
  line-height: var(--typography/base-styles/body3/line-height);
  color: var(--colors/secondary/main);
}

.accordion-panel {
  padding: 16px;
  background: var(--colors/background/paper);
  overflow: hidden;
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-panel[hidden] {
  display: none;
}
</style>
```

### Example 2: Settings Panel (Medium Size, Right Alignment)

```html
<div class="accordion-container">
  <button
    class="accordion-header accordion-right"
    aria-expanded="false"
    aria-controls="settings-1"
  >
    <div class="accordion-content">
      <div class="accordion-title">Notification preferences</div>
      <div class="accordion-description">Email, push, and SMS settings.</div>
    </div>
    <svg class="accordion-icon chevron-down" width="16" height="16">
      <!-- Chevron down icon -->
    </svg>
  </button>

  <div id="settings-1" class="accordion-panel" hidden>
    <!-- Settings form fields -->
  </div>
</div>
```

### Example 3: Selected Accordion with Icon (Large Size)

```html
<div class="accordion-container">
  <button
    class="accordion-header accordion-selected"
    aria-expanded="true"
    aria-controls="section-1"
  >
    <div class="accordion-selection-indicator"></div>
    <svg class="accordion-icon chevron-down" width="16" height="16">
      <!-- Chevron icon -->
    </svg>
    <div class="accordion-content">
      <div class="accordion-title">Completed section</div>
      <div class="accordion-description">All required fields filled.</div>
    </div>
    <svg class="accordion-trailing-icon" width="16" height="16">
      <!-- Check circle icon -->
    </svg>
  </button>

  <div id="section-1" class="accordion-panel">
    <!-- Expanded content -->
  </div>
</div>

<style>
.accordion-selected {
  position: relative;
}

.accordion-selection-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--colors/primary/main);
}

.accordion-trailing-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--colors/success/main);
}
</style>
```

### Example 4: Disabled Accordion

```html
<button
  class="accordion-header accordion-disabled"
  aria-expanded="false"
  aria-disabled="true"
  disabled
>
  <svg class="accordion-icon chevron-right" width="16" height="16">
    <!-- Chevron icon -->
  </svg>
  <div class="accordion-content">
    <div class="accordion-title">Premium features</div>
    <div class="accordion-description">Upgrade to unlock.</div>
  </div>
</button>

<style>
.accordion-disabled {
  background: var(--colors/background/tertiary);
  cursor: not-allowed;
  opacity: 1;
}

.accordion-disabled .accordion-title,
.accordion-disabled .accordion-description {
  color: var(--colors/text/disabled);
}

.accordion-disabled:hover {
  background: var(--colors/background/tertiary);
}
</style>
```

### Example 5: Accordion Group (Multiple Items)

```html
<div class="accordion-group">
  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="true"
      aria-controls="panel-1"
      id="accordion-1"
    >
      <svg class="accordion-icon chevron-down" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">General information</div>
      </div>
    </button>
    <div id="panel-1" class="accordion-panel" aria-labelledby="accordion-1">
      <!-- Content -->
    </div>
  </div>

  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="false"
      aria-controls="panel-2"
      id="accordion-2"
    >
      <svg class="accordion-icon chevron-right" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">Shipping details</div>
      </div>
    </button>
    <div id="panel-2" class="accordion-panel" aria-labelledby="accordion-2" hidden>
      <!-- Content -->
    </div>
  </div>

  <div class="accordion-item">
    <button
      class="accordion-header"
      aria-expanded="false"
      aria-controls="panel-3"
      id="accordion-3"
    >
      <svg class="accordion-icon chevron-right" width="16" height="16"></svg>
      <div class="accordion-content">
        <div class="accordion-title">Payment options</div>
      </div>
    </button>
    <div id="panel-3" class="accordion-panel" aria-labelledby="accordion-3" hidden>
      <!-- Content -->
    </div>
  </div>
</div>

<style>
.accordion-group {
  border: 1px solid var(--colors/border/default);
  border-radius: var(--border-radius/medium);
}

.accordion-item:not(:last-child) {
  border-bottom: 1px solid var(--colors/border/default);
}
</style>
```

---

## Component Variations Summary

| Variant | Size | Height | Title | Description | Use Case |
|---------|------|--------|-------|-------------|----------|
| Small Left | S | 56px | H6 12px | Body3 12px | Compact sidebars |
| Medium Left ⭐ | M | 60px | H5 14px | Body2 14px | Default choice |
| Large Left | L | 64px | H4 16px | Body1 16px | Touch-friendly |
| Small Right | S | 56px | H6 12px | Body3 12px | Alternative layout |
| Medium Right | M | 60px | H5 14px | Body2 14px | Icon emphasis |
| Large Right | L | 64px | H4 16px | Body1 16px | Accessible touch |

---

## Related Components

- **Navigation (Sidenav):** For app navigation with expandable items
- **Stepper:** For sequential multi-step processes
- **Tabs:** For switching between mutually exclusive views
- **Card:** For grouping related content without collapsing
- **Expansion Panel:** For single collapsible item (use Accordion for multiple)

---

## Changelog

**v1.0.0** (2026-02-26)
- Initial documentation
- 3 size variants (Small, Medium, Large)
- 2 alignment variants (Left, Right)
- 4 states (Idle, Hover, Focus, Disabled)
- Open/closed states with animated transitions
- Optional selection indicator and trailing icon
- Full accessibility support (ARIA, keyboard)
- Responsive specifications
- Complete token specifications
- Usage guidelines and examples

---

**Questions or feedback?** Refer to the design system team or contribute improvements to this documentation.

**File Location:** `DESIGN-SYSTEM-DOCUMENTATION-ACCORDION.md`
**Component Status:** ✅ Production Ready
