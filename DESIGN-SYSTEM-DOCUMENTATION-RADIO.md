# Radio Button Component - Complete Documentation

**Component Type:** Form Control / Selection Input
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
7. [FormControlLabel](#formcontrollabel)
8. [RadioGroup](#radiogroup)
9. [Responsive Behavior](#responsive-behavior)
10. [Accessibility](#accessibility)
11. [Best Practices](#best-practices)
12. [Examples](#examples)

---

## Overview

Radio buttons allow users to select exactly one option from a set of mutually exclusive choices. They are typically used in forms and settings where users must make a single selection from multiple options.

### Key Features

- **3 Sizes:** Small (20px), Medium (24px), Large (28px)
- **7 Color Variants:** Default, Primary, Secondary, Error, Warning, Info, Success
- **5 States:** Enabled, Hovered, Focused, Pressed, Disabled
- **2 Checked States:** Unchecked, Checked
- **Label Support:** FormControlLabel wrapper with 4 label placements
- **Group Support:** RadioGroup for managing multiple radios
- **Fully Accessible:** ARIA roles, keyboard navigation, screen reader support

### When to Use

✅ **Use Radio buttons when:**
- User must select exactly one option from 2-7 choices
- All available options should be visible
- Options are mutually exclusive
- Selection is required (not optional)
- Choices need clear visual comparison

❌ **Don't use Radio buttons when:**
- Multiple selections are allowed (use Checkboxes instead)
- Only one option exists (use Checkbox for on/off)
- More than 7 options (use Select/Dropdown instead)
- Selection is optional with no default (use Select/Dropdown)
- Options are long text or need explanation (use Cards or List with Radio)

---

## Component Anatomy

### Visual Structure - Radio Button

```
    ┌─────────────┐
    │   ●         │   Checked (filled circle)
    └─────────────┘

    ┌─────────────┐
    │   ○         │   Unchecked (empty circle)
    └─────────────┘
```

### Component Parts

1. **Outer Circle** (Required)
   - Circular border
   - Size varies: 20px, 24px, 28px
   - Border width: 2px
   - Color: Based on variant and state

2. **Inner Circle / Dot** (When Checked)
   - Centered circle that appears when selected
   - Size: ~50% of outer circle
   - Color: Matches outer circle color
   - Animated transition on check/uncheck

3. **Padding Container**
   - Touch-friendly hit area
   - Minimum 48×48px for accessibility
   - Rounded corners (100px border radius)
   - Invisible but clickable

### Visual Structure - With Label

```
┌──────────────────────────────┐
│  ○  Label Text               │  End placement (default)
└──────────────────────────────┘

┌──────────────────────────────┐
│  Label Text  ○               │  Start placement
└──────────────────────────────┘

┌──────────────────────────────┐
│       Label Text             │
│           ○                  │  Bottom placement
└──────────────────────────────┘

┌──────────────────────────────┐
│           ○                  │
│       Label Text             │  Top placement
└──────────────────────────────┘
```

---

## Design Tokens

### Radio-Specific Tokens

```typescript
// Sizes
'--component/radio/size-small': '20px',
'--component/radio/size-medium': '24px',
'--component/radio/size-large': '28px',

// Inner Dot Size (when checked)
'--component/radio/dot-size-small': '10px',        // 50% of outer
'--component/radio/dot-size-medium': '12px',       // 50% of outer
'--component/radio/dot-size-large': '14px',        // 50% of outer

// Border
'--component/radio/border-width': '2px',
'--component/radio/border-radius': '100px',        // Full circle

// Padding (Touch Target)
'--component/radio/padding': '12px',               // Makes 48×48px minimum
'--component/radio/padding-small': '14px',         // 20px + 28px = 48px
'--component/radio/padding-medium': '12px',        // 24px + 24px = 48px
'--component/radio/padding-large': '10px',         // 28px + 20px = 48px

// Spacing with Label
'--component/radio/label-gap': '8px',              // Gap between radio and label
'--component/radio/label-padding-vertical': '8px', // Vertical padding

// Transition
'--component/radio/transition-duration': '150ms',
'--component/radio/transition-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
```

### Color Tokens by Variant

#### Default Color
```typescript
// Unchecked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Border color

// Checked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Both border and dot

// Disabled
'--colors/action/disabled': 'rgba(0, 0, 0, 0.26)', // Border and dot
```

#### Primary Color
```typescript
// Unchecked
'--colors/action/active': 'rgba(0, 0, 0, 0.54)',   // Border color

// Checked
'--colors/primary/main': '#4b3fff',                 // Border and dot

// Disabled (when checked)
'--colors/action/disabled': 'rgba(0, 0, 0, 0.26)', // Border and dot
```

#### Secondary Color
```typescript
// Checked
'--colors/secondary/main': '#546574',               // Border and dot
```

#### Error Color
```typescript
// Checked
'--colors/error/main': '#d33423',                   // Border and dot
```

#### Warning Color
```typescript
// Checked
'--colors/warning/main': '#ed6c02',                 // Border and dot
```

#### Info Color
```typescript
// Checked
'--colors/info/main': '#0288d1',                    // Border and dot
```

#### Success Color
```typescript
// Checked
'--colors/success/main': '#2e7d32',                 // Border and dot
```

### State Color Overlays

```typescript
// Hover State (overlay on background)
'--colors/action/hover': 'rgba(0, 0, 0, 0.04)',

// Focus State
'--colors/primary/main': '#4b3fff',                 // Focus ring color
'--component/radio/focus-ring-width': '2px',
'--component/radio/focus-ring-offset': '2px',

// Pressed State (overlay)
'--colors/action/selected': 'rgba(0, 0, 0, 0.12)',
```

### Typography Tokens (for Labels)

```typescript
// Label Text (from FormControlLabel)
'--typography/inputs/label-lg/font-family': 'DM Sans',
'--typography/inputs/label-lg/font-size': '16px',
'--typography/inputs/label-lg/font-weight': '400',
'--typography/inputs/label-lg/line-height': '20px',
'--typography/inputs/label-lg/letter-spacing': '0.15px',

// Label Color
'--colors/text/primary': 'rgba(0, 0, 0, 0.87)',

// Disabled Label Color
'--colors/text/disabled': 'rgba(0, 0, 0, 0.38)',
```

---

## Variants

### Size Variants

#### 1. Small (20px)

**Use when:**
- Space is limited
- Dense UI required (tables, compact forms)
- Mobile interfaces with many options
- Secondary or less important selections

**Specifications:**
- Circle diameter: 20px
- Inner dot: 10px
- Border: 2px
- Padding: 14px (total 48×48px touch target)
- Label font: 14px (Body2)

**Visual:**
```
┌────┐
│ ○  │  20×20px
└────┘
```

#### 2. Medium (24px) - Default ⭐

**Use when:**
- Standard forms and settings
- Most common use case
- Default choice for desktop
- Balanced size and readability

**Specifications:**
- Circle diameter: 24px
- Inner dot: 12px
- Border: 2px
- Padding: 12px (total 48×48px touch target)
- Label font: 16px (Label Large)

**Visual:**
```
┌──────┐
│  ○   │  24×24px
└──────┘
```

#### 3. Large (28px)

**Use when:**
- Touch-first interfaces
- Accessibility needs (easier to click)
- Prominent selections
- Older users or motor impairments
- Large screen displays

**Specifications:**
- Circle diameter: 28px
- Inner dot: 14px
- Border: 2px
- Padding: 10px (total 48×48px touch target)
- Label font: 16px (Label Large)

**Visual:**
```
┌────────┐
│   ○    │  28×28px
└────────┘
```

---

### Color Variants

#### 1. Default (Gray)

**Use when:**
- Neutral selections
- Non-critical choices
- System-level settings
- Secondary options

**Colors:**
- Unchecked border: rgba(0, 0, 0, 0.54)
- Checked: rgba(0, 0, 0, 0.54)
- Contrast: Moderate against white

#### 2. Primary (Blue) - Most Common ⭐

**Use when:**
- Main form selections
- Important choices
- Primary user actions
- Brand-aligned selections

**Colors:**
- Unchecked border: rgba(0, 0, 0, 0.54)
- Checked: #4b3fff (primary blue)
- Contrast: High visibility

**Example:**
```
○  Unchecked (gray border)
◉  Checked (blue border & dot)
```

#### 3. Secondary (Gray-Blue)

**Use when:**
- Alternative options
- Complementary to primary
- Less emphasis than primary
- Subtle selections

**Colors:**
- Checked: #546574 (gray-blue)

#### 4. Error (Red)

**Use when:**
- Destructive actions
- Risk acknowledgment
- Error states in forms
- Critical warnings

**Colors:**
- Checked: #d33423 (red)

**Example:**
```
◉  Delete all data permanently
```

#### 5. Warning (Orange)

**Use when:**
- Caution required
- Moderately risky actions
- Important notices
- Advisory selections

**Colors:**
- Checked: #ed6c02 (orange)

**Example:**
```
◉  Proceed with caution
```

#### 6. Info (Light Blue)

**Use when:**
- Informational selections
- Help or tips
- Optional features
- Guidance-related choices

**Colors:**
- Checked: #0288d1 (light blue)

#### 7. Success (Green)

**Use when:**
- Positive confirmations
- Success states
- Opt-in features
- Beneficial selections

**Colors:**
- Checked: #2e7d32 (green)

**Example:**
```
◉  Enable automatic backups
```

---

## States

### 1. Enabled (Default)

**Appearance:**
- Full color saturation
- Clear border (2px)
- Cursor: pointer
- Interactive

**Unchecked:**
- Border: rgba(0, 0, 0, 0.54)
- Background: transparent
- No inner dot

**Checked:**
- Border: Color variant
- Inner dot: Color variant
- Background: transparent

### 2. Hovered

**Appearance:**
- Light overlay appears behind radio
- Background: rgba(0, 0, 0, 0.04)
- Circular hover area (48×48px)
- Cursor: pointer

**When:**
- Mouse cursor over radio or label
- Desktop/pointer devices only
- Indicates interactivity

**Transition:**
- Duration: 150ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### 3. Focused

**Appearance:**
- Visible focus ring
- Ring color: Primary color or variant color
- Ring width: 2px
- Ring offset: 2px from radio edge
- Circular ring shape

**When:**
- Keyboard navigation (Tab key)
- Screen reader focus
- Required for accessibility

**Important:**
- Must be clearly visible
- Cannot be removed
- Meets WCAG 2.4.7 (Focus Visible)

**CSS Example:**
```css
.radio:focus {
  outline: 2px solid var(--colors/primary/main);
  outline-offset: 2px;
  border-radius: 100px;
}
```

### 4. Pressed

**Appearance:**
- Darker overlay behind radio
- Background: rgba(0, 0, 0, 0.12)
- Circular pressed area (48×48px)
- Visual feedback during click

**When:**
- Mouse button down
- Touch press active
- Momentary state during interaction

### 5. Disabled

**Appearance:**
- Reduced opacity
- Border: rgba(0, 0, 0, 0.26)
- Inner dot (if checked): rgba(0, 0, 0, 0.26)
- Label: rgba(0, 0, 0, 0.38)
- Cursor: not-allowed
- Not interactive

**When:**
- Option is unavailable
- Dependent condition not met
- User lacks permission
- Read-only mode

**Behavior:**
- Not clickable
- Not keyboard accessible
- Not announced as interactive
- Can still be visible for context

---

### Checked vs Unchecked States

#### Unchecked State

**Visual:**
```
○  Empty circle with border only
```

**Properties:**
- Border: 2px solid color (gray or variant)
- Background: transparent
- No inner dot
- Ready to be selected

#### Checked State

**Visual:**
```
◉  Circle with border + inner dot
```

**Properties:**
- Border: 2px solid variant color
- Inner dot: Solid circle, variant color
- Center-aligned dot
- Animated transition (150ms)

**Animation:**
```css
@keyframes radio-check {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.radio-dot {
  animation: radio-check 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Usage Criteria

### ✅ When to Use Radio Buttons

1. **Mutually Exclusive Choices**
   - Only one option can be selected
   - Selection changes when clicking another radio
   - Example: Payment method, Shipping speed

2. **2-7 Visible Options**
   - All options fit on screen
   - Easy to scan and compare
   - Example: T-shirt size (XS, S, M, L, XL)

3. **Required Selection**
   - User must choose one option
   - No "none selected" state after initial selection
   - Example: Gender, Account type

4. **Clear Option Names**
   - Short, descriptive labels
   - Easy to understand differences
   - Example: Monthly, Yearly, Lifetime

5. **Visual Comparison Needed**
   - Users benefit from seeing all options
   - Easy to change mind
   - Example: Subscription tiers

### ❌ When NOT to Use Radio Buttons

1. **Multiple Selections**
   - User can pick more than one
   - Use Checkboxes instead
   - Example: Newsletter preferences

2. **Single On/Off Choice**
   - Only one option (e.g., "Agree to terms")
   - Use Checkbox instead
   - Example: Enable notifications

3. **Many Options (>7)**
   - Takes too much vertical space
   - Hard to scan
   - Use Select/Dropdown instead
   - Example: Country selection

4. **Optional Selection**
   - User might not want to select any
   - Need a "None" or default option
   - Consider Select/Dropdown
   - Example: Optional delivery instructions

5. **Long Option Text**
   - Options need explanation
   - Use Cards with embedded Radio
   - Example: Subscription plans with features

6. **Grouped Selections**
   - Multiple sets of radio groups
   - Can be confusing
   - Consider different layout or Tabs

---

## FormControlLabel

The `FormControlLabel` component wraps a Radio button with a text label, providing a clickable area that includes both the radio and its label.

### Label Placement Variants

#### 1. End (Default) ⭐

**Layout:** `[Radio] Label Text`

**Use when:**
- Standard form layouts
- Most common pattern
- Left-to-right reading
- Follows form conventions

**Spacing:**
- Gap: 8px between radio and label
- Padding: 8px vertical

**Example:**
```html
<label>
  <input type="radio" name="option" />
  <span>Option 1</span>
</label>
```

#### 2. Start

**Layout:** `Label Text [Radio]`

**Use when:**
- Right-aligned layouts
- Alternative visual hierarchy
- Emphasizing label over radio
- Specific design requirements

**Spacing:**
- Gap: 8px between label and radio
- Padding: 8px vertical

#### 3. Top

**Layout:**
```
  [Radio]
Label Text
```

**Use when:**
- Vertical card layouts
- Icon-like presentation
- Space-constrained horizontal layouts
- Visual hierarchy emphasis

**Spacing:**
- Gap: 8px between radio and label
- Centered alignment

#### 4. Bottom

**Layout:**
```
Label Text
  [Radio]
```

**Use when:**
- Uncommon but available
- Specific design needs
- Label as heading above selection

**Spacing:**
- Gap: 8px between label and radio
- Centered alignment

### FormControlLabel Props

```typescript
interface FormControlLabelProps {
  control: ReactNode;        // The Radio component
  label: string | ReactNode; // Label text or component
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  disabled?: boolean;         // Disables both radio and label
  value?: any;               // Value for form submission
  onChange?: (event) => void;
}
```

### Disabled State

When `disabled={true}`:
- Radio button: Grayed out (rgba(0, 0, 0, 0.26))
- Label text: Grayed out (rgba(0, 0, 0, 0.38))
- Cursor: not-allowed
- Not clickable
- Not keyboard accessible

---

## RadioGroup

The `RadioGroup` component manages multiple related radio buttons, ensuring only one can be selected at a time.

### Orientation Variants

#### 1. Vertical (Column) - Default ⭐

**Layout:**
```
○ Option 1
○ Option 2
○ Option 3
```

**Use when:**
- Standard form layouts
- 3+ options
- Clear vertical scanning
- Most common pattern

**Spacing:**
- Gap: 0px between items (label padding provides space)
- Each FormControlLabel has 8px vertical padding

#### 2. Horizontal (Row)

**Layout:**
```
○ Option 1    ○ Option 2    ○ Option 3
```

**Use when:**
- 2-4 short options
- Horizontal space available
- Quick selection needed
- Compact layouts

**Spacing:**
- Gap: 16px between items
- Wraps to next line if needed

### RadioGroup Features

#### Controlled vs Uncontrolled

**Controlled (Recommended):**
```jsx
const [value, setValue] = useState('option1');

<RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
```

**Uncontrolled:**
```jsx
<RadioGroup defaultValue="option1">
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
```

#### Name Attribute

All radios in a group must share the same `name` attribute:
```html
<input type="radio" name="payment-method" value="card" />
<input type="radio" name="payment-method" value="paypal" />
<input type="radio" name="payment-method" value="bank" />
```

### RadioGroup Props

```typescript
interface RadioGroupProps {
  value?: any;                 // Currently selected value
  defaultValue?: any;          // Initial value (uncontrolled)
  onChange?: (event, value) => void;
  name?: string;               // Form name for all radios
  row?: boolean;               // Horizontal layout
  children: ReactNode;         // FormControlLabel components
}
```

---

## Responsive Behavior

### Desktop (1200px+)

**Layout:**
- Medium size (24px) default
- Comfortable spacing
- Hover states active
- Vertical or horizontal groups work well

**Interaction:**
- Click to select
- Keyboard navigation (Tab, Arrow keys, Space)
- Hover feedback visible

### Tablet (768-1199px)

**Layout:**
- Medium size (24px) recommended
- Vertical groups preferred
- Touch-friendly spacing (48×48px maintained)

**Interaction:**
- Touch to select
- No hover states (touch device)
- Focus states for accessibility

**Adjustments:**
- Increase spacing between radio groups
- Prefer vertical orientation
- Ensure 48×48px touch targets

### Mobile (<768px)

**Layout:**
- Large size (28px) recommended for better touch
- Vertical groups only
- Full-width label text
- Increased spacing

**Interaction:**
- Touch to select
- No hover effects
- Large touch targets critical

**Adjustments:**
```css
@media (max-width: 767px) {
  .radio-group {
    flex-direction: column; /* Force vertical */
  }

  .radio {
    width: var(--component/radio/size-large); /* 28px */
    height: var(--component/radio/size-large);
  }

  .radio-label {
    padding: 12px 0; /* More vertical space */
  }
}
```

---

## Accessibility

### ARIA Attributes

#### Single Radio Button
```html
<input
  type="radio"
  role="radio"
  aria-checked="false"
  aria-disabled="false"
  id="option1"
  name="options"
  value="option1"
/>
<label for="option1">Option 1</label>
```

#### Radio Group
```html
<div role="radiogroup" aria-labelledby="group-label">
  <span id="group-label">Choose an option:</span>

  <label>
    <input type="radio" name="options" value="option1" aria-checked="true" />
    Option 1
  </label>

  <label>
    <input type="radio" name="options" value="option2" aria-checked="false" />
    Option 2
  </label>
</div>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| **Tab** | Move focus to radio group (focuses first or selected radio) |
| **Space** | Select focused radio (if not already selected) |
| **↑ / ←** | Move to previous radio in group & select it |
| **↓ / →** | Move to next radio in group & select it |
| **Home** | Move to first radio in group (optional) |
| **End** | Move to last radio in group (optional) |

**Important:**
- Arrow keys automatically select the radio (unlike checkboxes)
- Only one radio in group is in tab order at a time
- Once in group, arrow keys navigate, not Tab

### Screen Reader Announcements

**When focused:**
```
"Option 1, radio button, 1 of 3, not selected"
```

**After selecting:**
```
"Option 2, radio button, 2 of 3, selected"
```

**Disabled radio:**
```
"Option 3, radio button, 3 of 3, disabled, not selected"
```

**Group announcement:**
```
"Choose your plan, radio group, 3 items"
```

### Focus Management

1. **Initial Focus**
   - Tab focuses the radio group
   - Focus goes to selected radio (if any)
   - Otherwise, focuses first enabled radio

2. **Within Group**
   - Arrow keys move between radios
   - Automatically selects focused radio
   - Loops back to start/end

3. **Leaving Group**
   - Tab moves to next focusable element
   - Shift+Tab moves to previous

### Color Contrast

**WCAG 2.1 Level AA Requirements:**

- **Unchecked border:** 3:1 contrast ratio (for UI components) ✅
  - rgba(0, 0, 0, 0.54) on white: ~4.1:1 ✅

- **Checked state:** 3:1 contrast ratio ✅
  - Primary #4b3fff on white: ~7.3:1 ✅
  - Error #d33423 on white: ~5.8:1 ✅

- **Label text:** 4.5:1 contrast ratio ✅
  - rgba(0, 0, 0, 0.87) on white: ~14.8:1 ✅

- **Disabled state:** 3:1 not required (disabled components exempt)

### Touch Targets

**WCAG 2.5.5 (Level AAA) & 2.5.8 (Level AA - future):**
- Minimum touch target: 44×44px ✅
- Small radio (20px + 28px padding): 48×48px ✅
- Medium radio (24px + 24px padding): 48×48px ✅
- Large radio (28px + 20px padding): 48×48px ✅

All sizes meet accessibility requirements.

---

## Best Practices

### Do's ✅

1. **Provide Clear Labels**
   - Use concise, descriptive text
   - Front-load important words
   - Keep labels short (1-5 words)
   - Make labels clickable

2. **Use Appropriate Grouping**
   - Keep related radios together
   - Use RadioGroup for mutual exclusivity
   - Provide group label/heading

3. **Set Default Selection**
   - Pre-select the most common option
   - Or the safest option
   - Don't force selection if truly optional

4. **Maintain Consistent Size**
   - Use same size throughout a form
   - Match other form controls
   - Consider touch targets on mobile

5. **Provide Visual Feedback**
   - Clear hover states (desktop)
   - Visible focus indicators
   - Smooth checked/unchecked transitions

6. **Use Semantic HTML**
   - Use `<input type="radio">`
   - Associate labels with `for` attribute
   - Group with `<fieldset>` and `<legend>`

### Don'ts ❌

1. **Don't Use for Multiple Selections**
   - Use Checkboxes instead
   - Radio = one choice only
   - Confusing for users

2. **Don't Hide Options**
   - All options should be visible
   - Don't collapse options
   - Don't paginate options

3. **Don't Use Too Many Options**
   - Max 7 options recommended
   - Use Select/Dropdown for 8+
   - Consider hierarchical options

4. **Don't Nest Radio Groups**
   - Avoid radio groups within radio groups
   - Can be confusing
   - Use different pattern

5. **Don't Disable Without Explanation**
   - Explain why option is disabled
   - Consider hiding instead
   - Provide tooltip if needed

6. **Don't Remove Focus Styles**
   - Required for accessibility
   - Keyboard users need it
   - Fails WCAG compliance

7. **Don't Use for Navigation**
   - Use Tabs or Navigation instead
   - Radio = form selection
   - Wrong pattern for switching views

---

## Examples

### Example 1: Basic Radio Group (Vertical)

```html
<fieldset>
  <legend>Choose your subscription plan</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="free"
        checked
        class="radio"
      />
      <span>Free Plan</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="pro"
        class="radio"
      />
      <span>Pro Plan - $9.99/month</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="plan"
        value="enterprise"
        class="radio"
      />
      <span>Enterprise Plan - $49.99/month</span>
    </label>
  </div>
</fieldset>

<style>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: var(--component/radio/label-gap);
  padding: var(--component/radio/label-padding-vertical) 0;
  cursor: pointer;
  font-family: var(--typography/inputs/label-lg/font-family);
  font-size: var(--typography/inputs/label-lg/font-size);
  color: var(--colors/text/primary);
}

.radio {
  appearance: none;
  width: var(--component/radio/size-medium);
  height: var(--component/radio/size-medium);
  border: 2px solid var(--colors/action/active);
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.radio:checked {
  border-color: var(--colors/primary/main);
}

.radio:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 100px;
  background: var(--colors/primary/main);
  animation: radio-check 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.radio:focus {
  outline: 2px solid var(--colors/primary/main);
  outline-offset: 2px;
}

.radio:disabled {
  border-color: var(--colors/action/disabled);
  cursor: not-allowed;
}

.radio:disabled:checked::before {
  background: var(--colors/action/disabled);
}

@keyframes radio-check {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
```

### Example 2: Horizontal Radio Group

```html
<fieldset>
  <legend>Select your size</legend>

  <div class="radio-group-horizontal" role="radiogroup">
    <label class="radio-label">
      <input type="radio" name="size" value="xs" class="radio" />
      <span>XS</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="s" class="radio" checked />
      <span>S</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="m" class="radio" />
      <span>M</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="l" class="radio" />
      <span>L</span>
    </label>

    <label class="radio-label">
      <input type="radio" name="size" value="xl" class="radio" />
      <span>XL</span>
    </label>
  </div>
</fieldset>

<style>
.radio-group-horizontal {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
}

/* Responsive: Stack on mobile */
@media (max-width: 767px) {
  .radio-group-horizontal {
    flex-direction: column;
    gap: 0;
  }
}
</style>
```

### Example 3: Radio with Error State

```html
<fieldset class="radio-group-error">
  <legend>Terms and Conditions *</legend>

  <div class="radio-group" role="radiogroup" aria-invalid="true" aria-describedby="terms-error">
    <label class="radio-label">
      <input
        type="radio"
        name="terms"
        value="accept"
        class="radio radio-error"
        required
      />
      <span>I accept the terms and conditions</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="terms"
        value="decline"
        class="radio radio-error"
      />
      <span>I decline</span>
    </label>
  </div>

  <span id="terms-error" class="error-message" role="alert">
    You must accept the terms to continue
  </span>
</fieldset>

<style>
.radio-error:checked {
  border-color: var(--colors/error/main);
}

.radio-error:checked::before {
  background: var(--colors/error/main);
}

.error-message {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: var(--colors/error/main);
}
</style>
```

### Example 4: Disabled Radio Options

```html
<fieldset>
  <legend>Select payment method</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-label">
      <input
        type="radio"
        name="payment"
        value="card"
        class="radio"
        checked
      />
      <span>Credit/Debit Card</span>
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="payment"
        value="paypal"
        class="radio"
      />
      <span>PayPal</span>
    </label>

    <label class="radio-label radio-label-disabled">
      <input
        type="radio"
        name="payment"
        value="crypto"
        class="radio"
        disabled
      />
      <span>Cryptocurrency (Coming Soon)</span>
    </label>
  </div>
</fieldset>

<style>
.radio-label-disabled {
  color: var(--colors/text/disabled);
  cursor: not-allowed;
}
</style>
```

### Example 5: Radio with Description Text

```html
<fieldset>
  <legend>Choose your backup frequency</legend>

  <div class="radio-group" role="radiogroup">
    <label class="radio-card">
      <input type="radio" name="backup" value="daily" class="radio" checked />
      <div class="radio-content">
        <div class="radio-title">Daily Backup</div>
        <div class="radio-description">
          Automatic backups every 24 hours
        </div>
      </div>
    </label>

    <label class="radio-card">
      <input type="radio" name="backup" value="weekly" class="radio" />
      <div class="radio-content">
        <div class="radio-title">Weekly Backup</div>
        <div class="radio-description">
          Automatic backups every Sunday at midnight
        </div>
      </div>
    </label>

    <label class="radio-card">
      <input type="radio" name="backup" value="manual" class="radio" />
      <div class="radio-content">
        <div class="radio-title">Manual Backup</div>
        <div class="radio-description">
          Only when you choose to back up
        </div>
      </div>
    </label>
  </div>
</fieldset>

<style>
.radio-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--colors/border/default);
  border-radius: var(--border-radius/medium);
  cursor: pointer;
  transition: all 150ms;
}

.radio-card:hover {
  background: var(--colors/action/hover);
}

.radio-card:has(.radio:checked) {
  border-color: var(--colors/primary/main);
  background: var(--colors/primary/light);
}

.radio-content {
  flex: 1;
}

.radio-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--colors/text/primary);
  margin-bottom: 4px;
}

.radio-description {
  font-size: 14px;
  color: var(--colors/text/secondary);
}
</style>
```

---

## Component Variations Summary

| Variant | Size | Colors | States | Use Case |
|---------|------|--------|--------|----------|
| Small | 20px | 7 | 5 | Dense UIs, tables |
| Medium ⭐ | 24px | 7 | 5 | Standard forms |
| Large | 28px | 7 | 5 | Touch-first, accessibility |

**Total Combinations:** 3 sizes × 7 colors × 5 states × 2 checked states = 210 variants

---

## Related Components

- **Checkbox:** For multiple selections or on/off toggles
- **Switch/Toggle:** For binary on/off states with immediate effect
- **Select/Dropdown:** For single selection from many options (8+)
- **Button Group:** For mutually exclusive button selections
- **Segmented Control:** For 2-5 mutually exclusive options with equal emphasis
- **Tabs:** For switching between different views/content

---

## Changelog

**v1.0.0** (2026-02-26)
- Initial documentation
- 3 size variants (Small 20px, Medium 24px, Large 28px)
- 7 color variants (Default, Primary, Secondary, Error, Warning, Info, Success)
- 5 states (Enabled, Hovered, Focused, Pressed, Disabled)
- 2 checked states (Unchecked, Checked)
- FormControlLabel with 4 label placements
- RadioGroup with vertical/horizontal orientation
- Full accessibility support (ARIA, keyboard)
- Responsive specifications
- Complete token specifications
- Usage guidelines and examples

---

**Questions or feedback?** Refer to the design system team or contribute improvements to this documentation.

**File Location:** `DESIGN-SYSTEM-DOCUMENTATION-RADIO.md`
**Component Status:** ✅ Production Ready
