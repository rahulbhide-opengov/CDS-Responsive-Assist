# Material Design System Documentation - Part 3 (Final)

**Components 19-25: Headings, Forms, Overlays, and Containers**

---

## 19. Page Heading Component

### Overview
Page headings establish page identity with title, breadcrumbs, and actions.

**Variants:** 2 (Desktop, Mobile)
**Sizes:** 2 (Standard, Compact)
**Optional Elements:** Breadcrumbs, Description, Chips, Actions

---

### 19.1 Page Heading Anatomy

```
Desktop (600px):
┌────────────────────────────────────────────────────┐
│ Home / Products / Laptops          [Edit] [Delete] │  Breadcrumbs + Actions
│                                                     │
│ Laptop Collection                                  │  Title (80px Display)
│ [New] [Featured]                                   │  Chips
│ Browse our latest selection of laptops             │  Description
└────────────────────────────────────────────────────┘

Mobile (320px):
┌──────────────────────┐
│ < Back               │  Navigation
│                      │
│ Laptop Collection    │  Title (24px H2)
│ [New] [Featured]     │  Chips
│ Browse laptops...    │  Description
│                      │
│ [Edit] [Delete]      │  Actions (stacked)
└──────────────────────┘

Components:
1. Breadcrumb (optional)
2. Title (main heading)
3. Chips/badges (optional)
4. Description (optional)
5. Action buttons (optional)
```

---

### 19.2 Page Heading Tokens

```css
/* Spacing */
--component/heading/page-title-spacing-bottom: 16px
--component/heading/breadcrumb-spacing-bottom: 8px
--component/heading/description-spacing-top: 8px
--component/heading/actions-spacing-left: 24px
--component/heading/chip-spacing: 8px

/* Typography - Desktop */
Title Desktop: --typography/display/1 (80px, 700 weight)
Description: --typography/body/large (16px)

/* Typography - Mobile */
Title Mobile: --typography/heading/h2 (24px, 700 weight)
Description Mobile: --typography/body/medium (14px)

/* Layout */
Container Padding: --spacing/6 to --spacing/8 (24-32px)
Max Width: --sizing/container/lg (1200px)
```

---

### 19.3 Title Variants

#### Display Title (Desktop)
```
Laptop Collection
    ↑
80px, Display 1
```

```css
Font: --typography/display/1/font-size (80px)
Weight: --typography/display/1/font-weight (700)
Line Height: --typography/display/1/line-height (96px)
Letter Spacing: -1.5px
Color: --colors/text/primary
```

**When to use:**
- ✅ Desktop/tablet (600px+)
- ✅ Marketing pages
- ✅ Landing pages
- ✅ Main dashboard
- ❌ Mobile (too large)
- ❌ Dense UIs

#### H2 Title (Mobile)
```
Laptop Collection
    ↑
24px, H2
```

```css
Font: --typography/heading/h2/font-size (24px)
Weight: --typography/heading/h2/font-weight (700)
Line Height: --typography/heading/h2/line-height (32px)
Color: --colors/text/primary
```

**When to use:**
- ✅ Mobile (<600px)
- ✅ Tablets (optional)
- ✅ Compact layouts
- ✅ Admin interfaces

---

### 19.4 Optional Elements

#### Breadcrumbs
```
Home / Products / Laptops
──────────────────────────
Laptop Collection
```

**Spacing:**
```css
Margin Bottom: --component/heading/breadcrumb-spacing-bottom (8px)
```

**When to include:**
- ✅ Deep navigation (3+ levels)
- ✅ E-commerce categories
- ✅ Content hierarchies
- ❌ Top-level pages
- ❌ Mobile (consider hiding)

#### Description Text
```
Laptop Collection
Browse our latest selection of high-performance laptops
└────────────────────────────────────────────────────┘
                Description (16px)
```

**Tokens:**
```css
Font: --typography/body/large (16px) desktop
Font Mobile: --typography/body/medium (14px)
Color: --colors/text/secondary
Margin Top: --component/heading/description-spacing-top (8px)
Max Width: 600px (for readability)
```

**When to include:**
- ✅ Clarify page purpose
- ✅ Provide context
- ✅ Marketing pages
- ❌ Self-explanatory pages
- ❌ Keep under 2 sentences

#### Status Chips/Badges
```
Product Dashboard  [Beta] [New Feature]
                   └──────────────────┘
                        Chips
```

**Spacing:**
```css
Chip Spacing: --component/heading/chip-spacing (8px)
Vertical Align: Middle with title or below
```

**Common Chips:**
- [Beta] - Feature in testing
- [New] - Recently added
- [Draft] - Unpublished
- [Private] - Access restricted
- [Updated] - Recently modified

#### Action Buttons
```
Page Title                    [Edit] [Share] [Delete]
                              └──────────────────────┘
                                  Actions (right)
```

**Spacing:**
```css
Spacing from Title: --component/heading/actions-spacing-left (24px)
Button Spacing: --spacing/2 (8px) between buttons
```

**Layout Options:**

**Desktop - Inline Right:**
```
Title ────────────────── [Action 1] [Action 2]
```

**Mobile - Stacked Below:**
```
Title

[Action 1]
[Action 2]
```

---

### 19.5 Layout Patterns

#### Standard Layout
```
┌──────────────────────────────────────────┐
│                                           │
│ Breadcrumb                                │
│ Title (80px)                             │
│ Description text here                     │
│                                           │
└──────────────────────────────────────────┘
```

#### With Actions
```
┌──────────────────────────────────────────┐
│ Breadcrumb              [Edit] [Delete]  │
│ Title (80px)                             │
│ Description text here                     │
└──────────────────────────────────────────┘
```

#### With Background
```
┌──────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓ Title (white text)           [Actions]▓│
│▓▓ Description                            ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└──────────────────────────────────────────┘
      Hero-style with background
```

```css
Background: Linear gradient or image
Padding: --spacing/12 (48px) or larger
Text Color: White (if dark background)
```

---

### 19.6 Responsive Behavior

```
Desktop (1280px+)
├── Display 1 title (80px)
├── Inline actions (right side)
├── Full description
├── Horizontal chip layout
└── Comfortable spacing (32px padding)

Tablet (768-1279px)
├── H1 or Display 2 title (48-60px)
├── Actions may stack or stay inline
├── Full or shortened description
├── Chips may wrap
└── Medium spacing (24px padding)

Mobile (<768px)
├── H2 title (24px)
├── Stacked actions (full-width buttons)
├── Shortened description
├── Chips wrap to multiple rows
├── Hide breadcrumbs (use back button)
└── Compact spacing (16px padding)
```

---

### 19.7 Accessibility

#### Semantic HTML
```html
<header>
  <!-- Breadcrumb -->
  <nav aria-label="Breadcrumb">
    <ol>...</ol>
  </nav>

  <!-- Title -->
  <h1>Laptop Collection</h1>

  <!-- Badges -->
  <div role="region" aria-label="Page status">
    <span class="chip">New</span>
    <span class="chip">Featured</span>
  </div>

  <!-- Description -->
  <p class="description">
    Browse our latest selection of laptops
  </p>

  <!-- Actions -->
  <div class="actions">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</header>
```

#### Screen Reader
- H1 announces: "Laptop Collection, heading level 1"
- Skip to content link should bypass heading
- Actions announced: "Edit button", "Delete button"

---

### 19.8 Best Practices

#### Do's
✅ Use H1 for page title (only one per page)
✅ Keep title concise (2-5 words)
✅ Use sentence case, not ALL CAPS
✅ Include breadcrumbs for deep navigation
✅ Place primary action on right
✅ Keep description under 2 sentences
✅ Use chips sparingly (1-3 max)

#### Don'ts
❌ Don't use multiple H1s on same page
❌ Don't make title too long (>60 characters)
❌ Don't hide page title (needed for context)
❌ Don't put critical info only in breadcrumbs
❌ Don't overload with too many actions (>3)
❌ Don't use vague titles ("Dashboard", "Page")
❌ Don't forget mobile responsiveness

---

## 20. Section Heading Component

### Overview
Section headings organize page content into logical groups.

**Variants:** 2 (With divider, Without divider)
**Sizes:** 2 (Standard H5, Large H4)
**Optional:** Description, Action link

---

### 20.1 Section Heading Anatomy

```
Standard:
ACCOUNT SETTINGS          [Edit]
─────────────────────────────────  Optional divider

With Description:
Personal Information      [Edit]
Update your name, email, and profile picture
─────────────────────────────────

Components:
1. Heading text (H5 or H4)
2. Description (optional)
3. Action link (optional)
4. Divider line (optional)
```

---

### 20.2 Section Heading Tokens

```css
/* Typography */
Heading: --typography/heading/h5 (14px, 700 weight)
Heading Large: --typography/heading/h4 (18px, 700 weight)
Description: --typography/body/medium (14px)

/* Spacing */
Heading Bottom Margin: --spacing/4 (16px)
Description Top Margin: --spacing/1 (4px)
Section Top Margin: --spacing/8 (32px)
Divider Top Margin: --spacing/2 (8px)

/* Colors */
Heading: --colors/text/primary
Description: --colors/text/secondary
Divider: --colors/divider
```

---

### 20.3 Section Heading Sizes

#### Standard (H5 - 14px)
```
Account Settings
```

```css
Font: --typography/heading/h5/font-size (14px)
Weight: --typography/heading/h5/font-weight (700)
Line Height: --typography/heading/h5/line-height (20px)
Letter Spacing: 0.1px
Text Transform: None or Uppercase (optional)
```

**When to use:**
- ✅ Form sections (most common)
- ✅ Settings pages
- ✅ Dense content
- ✅ Secondary organization

#### Large (H4 - 18px)
```
Account Settings
```

```css
Font: --typography/heading/h4/font-size (18px)
Weight: --typography/heading/h4/font-weight (700)
Line Height: --typography/heading/h4/line-height (24px)
```

**When to use:**
- ✅ Major page sections
- ✅ Prominent divisions
- ✅ Marketing pages
- ❌ Frequent sections (too large)

---

### 20.4 Optional Elements

#### Description Text
```
Personal Information
Update your name, email, and profile picture
```

**Tokens:**
```css
Font: --typography/body/medium (14px)
Color: --colors/text/secondary
Margin Top: --spacing/1 (4px)
Max Width: 600px
```

**When to include:**
- ✅ Complex sections needing context
- ✅ Instructions or guidance
- ✅ First-time user onboarding
- ❌ Self-explanatory sections

#### Action Link
```
Account Settings    [Edit all]
                    └────────┘
                    Action link
```

**Tokens:**
```css
Font: --typography/body/medium (14px)
Color: --colors/primary/main
Position: Right side, aligned with heading
Text Decoration: None (underline on hover)
```

**When to include:**
- Edit section
- View all items
- Expand/collapse
- Manage settings

#### Divider Line
```
Section Title
─────────────────────────
```

```css
Border Bottom: 1px solid --colors/divider
Margin Top: --spacing/2 (8px)
```

**When to use:**
- ✅ Emphasize separation
- ✅ Long forms
- ✅ Dense content
- ❌ Already clear separation (whitespace enough)

---

### 20.5 Layout Patterns

#### Standard Section
```
┌────────────────────────────┐
│                            │
│ Personal Information       │  Section heading
│ ─────────────────────────  │  Divider
│                            │
│ [Form fields...]           │  Content
│                            │
└────────────────────────────┘
```

**Spacing:**
```css
Section to Section: --spacing/8 (32px)
Heading to Content: --spacing/4 (16px)
```

#### With Action
```
┌─────────────────────────────────┐
│ Personal Information    [Edit]  │
│ ──────────────────────────────  │
│ [Content...]                    │
└─────────────────────────────────┘
```

#### With Description
```
┌─────────────────────────────────┐
│ Security Settings               │
│ Manage your password and 2FA    │
│ ──────────────────────────────  │
│ [Content...]                    │
└─────────────────────────────────┘
```

---

### 20.6 Section Heading Hierarchy

```
Page Title (H1)
├── Section 1 (H2 or H3)
│   ├── Subsection 1.1 (H4 or H5)
│   │   └── Content
│   └── Subsection 1.2 (H4 or H5)
│       └── Content
└── Section 2 (H2 or H3)
    └── Content
```

**Rules:**
- Don't skip heading levels
- Use consistent sizing per level
- H5 for minor sections (forms)
- H4 for medium sections
- H3 for major sections
- H2 for top-level sections (rare)

---

### 20.7 Responsive Behavior

```
Desktop (1200px+)
├── Standard size (14-18px)
├── Inline actions (right side)
├── Full description
└── Divider visible

Tablet (768-1199px)
├── Standard size
├── Actions may stack
├── Full or shortened description
└── Divider visible

Mobile (<768px)
├── Slightly smaller (12-16px) optional
├── Stacked actions (if any)
├── Shortened description
└── Divider optional (may hide)
```

---

### 20.8 Best Practices

#### Do's
✅ Use for content organization
✅ Keep headings short (2-4 words)
✅ Use consistent heading levels
✅ Add description when helpful
✅ Maintain semantic hierarchy
✅ Use dividers for clarity
✅ Space sections adequately (32px+)

#### Don'ts
❌ Don't overuse (not every group needs heading)
❌ Don't skip heading levels (H2 → H4)
❌ Don't use for single item sections
❌ Don't make headings too long
❌ Don't use ALL CAPS excessively
❌ Don't put essential info only in description
❌ Don't over-divide with too many lines

---

## 21. Form Layout Component

### Overview
Form layouts define structure and organization for input fields and controls.

**Variants:** 4 (Single-Column, Dense Desktop, Multi-Step Wizard, Mobile)
**Patterns:** 3 (Inline, Submit, Real-Time validation)
**Complexity:** Simple to Advanced

---

### 21.1 Form Layout Anatomy

```
Form Structure:

┌────────────────────────────────────┐
│ Form Title                         │  Heading
├────────────────────────────────────┤
│ SECTION 1: Personal Info           │  Section heading
│                                    │
│ First Name *                       │  Field label
│ [_______________]                  │  Input
│ Enter your first name              │  Helper text
│                                    │
│ Email *                            │
│ [_______________]                  │
│ ✕ Invalid email format             │  Error message
│                                    │
├────────────────────────────────────┤
│ SECTION 2: Address                 │
│ [Fields...]                        │
├────────────────────────────────────┤
│              [Cancel] [Submit]     │  Actions
└────────────────────────────────────┘

Components:
1. Form heading (H2-H4)
2. Section headings (H5)
3. Field labels
4. Input fields
5. Helper text
6. Error messages
7. Action buttons
```

---

### 21.2 Form Layout Tokens

```css
/* Spacing */
--component/form/field-spacing-vertical: 24px
--component/form/section-spacing: 32px
--component/form/group-spacing: 16px
--component/form/label-spacing-bottom: 8px
--component/form/helper-text-spacing-top: 4px
--component/form/error-spacing-top: 4px

/* Dimensions */
--component/form/field-max-width: 500px
--component/form/input-height-small: 32px
--component/form/input-height-medium: 40px
--component/form/input-height-large: 48px

/* Colors */
Field Border: --colors/border/default
Field Border Focus: --colors/border/focus
Field Border Error: --colors/border/error
Error Text: --colors/error/main
Helper Text: --colors/text/secondary

/* Typography */
Label: --typography/input/label/medium (14px, 500 weight)
Input Text: --typography/body/medium (14px)
Helper Text: --typography/helper-text (12px)
Error Text: --typography/helper-text (12px)
```

---

### 21.3 Form Layout Variants

#### Single-Column Layout (Recommended)
```
┌──────────────────┐
│ Name *           │  Full width
│ [____________]   │  500px max
│                  │
│ Email *          │
│ [____________]   │
│                  │
│ Message *        │
│ [____________]   │
│ [____________]   │
│                  │
│     [Submit]     │
└──────────────────┘
```

**Tokens:**
```css
Max Width: --component/form/field-max-width (500px)
Field to Field: --component/form/field-spacing-vertical (24px)
Layout: Vertical stack
Alignment: Left
```

**When to use:**
- ✅ Most forms (default)
- ✅ Mobile-first design
- ✅ Simple forms (5-15 fields)
- ✅ Long text inputs
- ✅ Accessibility best practice

**Benefits:**
- Easiest to scan vertically
- Better mobile experience
- Clearer visual flow
- Reduced errors
- Better accessibility

#### Dense Desktop Layout (2-Column)
```
┌─────────────────────────────────┐
│ First Name *      Last Name *   │  Row 1
│ [__________]      [__________]  │
│                                 │
│ Email *           Phone         │  Row 2
│ [__________]      [__________]  │
│                                 │
│ Address *                       │  Row 3 (full-width)
│ [_________________________]     │
│                                 │
│ City *            State   Zip   │  Row 4
│ [__________] [____] [____]      │
│                                 │
│         [Cancel] [Submit]       │
└─────────────────────────────────┘
```

**When to use:**
- ✅ Desktop only (≥1024px)
- ✅ Space-constrained
- ✅ Related fields (First/Last name)
- ✅ Short inputs (names, numbers)
- ❌ Mobile/tablet
- ❌ Long text fields

**Grid System:**
```css
Display: grid
Grid Template Columns: 1fr 1fr
Gap: --spacing/4 (16px) horizontal
     --spacing/6 (24px) vertical
```

**Field Sizing:**
- Equal width: 1fr 1fr
- Proportional: 2fr 1fr (e.g., City + State)
- Full width: span 2 columns

#### Multi-Step Wizard
```
Step 1: Personal Info  →  Step 2: Address  →  Step 3: Review

┌────────────────────────────────┐
│ ①───②───③───○───○              │  Stepper
│ Personal  Current               │
├────────────────────────────────┤
│                                │
│ [Fields for step 1...]         │
│                                │
├────────────────────────────────┤
│        [Back] [Continue]       │  Navigation
└────────────────────────────────┘
```

**When to use:**
- ✅ Complex forms (20+ fields)
- ✅ Logical groupings
- ✅ Progressive disclosure
- ✅ Reduce cognitive load
- ❌ Simple forms (unnecessary)

**Structure:**
```
Step 1: Basic info (3-7 fields)
Step 2: Additional info (3-7 fields)
Step 3: Confirmation/Review
Step 4: Success
```

#### Mobile Layout (Stacked)
```
┌─────────────┐
│ Name *      │  Full-width fields
│ [________]  │  Larger touch targets
│             │  (48px)
│ Email *     │
│ [________]  │
│             │
│ Phone       │
│ [________]  │
│             │
│  [Submit]   │  Full-width button
└─────────────┘
```

**Tokens:**
```css
Input Height: --component/form/input-height-large (48px)
Field Width: 100% (full-width)
Font Size: 16px minimum (prevents zoom on iOS)
Spacing: Reduced (16px between fields)
```

**Mobile Optimizations:**
- Full-width inputs
- Large touch targets (48px min)
- Reduce field spacing
- Stack all fields vertically
- Full-width buttons
- Larger text (16px+)

---

### 21.4 Field Anatomy

#### Complete Field Structure
```
Label *                    Required indicator
[__________________]       Input field
Helper text here           Guidance
```

**With Error:**
```
Email *
[__________________]
✕ Please enter a valid email address
```

**Tokens:**
```css
Label to Input: --component/form/label-spacing-bottom (8px)
Input to Helper: --component/form/helper-text-spacing-top (4px)
Input to Error: --component/form/error-spacing-top (4px)
```

---

### 21.5 Field Grouping

#### Related Fields
```
Name:
  First Name *    Last Name *
  [_________]     [_________]
```

**Group Spacing:**
```css
Fields in Group: --component/form/group-spacing (16px)
Group to Group: --component/form/field-spacing-vertical (24px)
```

#### Fieldset with Legend
```html
<fieldset>
  <legend>Shipping Address</legend>
  [Fields...]
</fieldset>
```

```css
Fieldset:
  border: 1px solid --colors/divider
  border-radius: --border-radius/medium (8px)
  padding: --spacing/4 (16px)

Legend:
  font: --typography/heading/h5
  padding: 0 --spacing/2 (8px)
```

---

### 21.6 Validation Patterns

#### Inline Validation (On Blur)
**Timing:** After user leaves field

```
User types → User tabs away → Validate → Show error
```

**When to use:**
- ✅ Most validations (recommended)
- ✅ Format checks (email, phone)
- ✅ Required fields
- ✅ Length requirements

**Behavior:**
```
1. User starts typing → No validation yet
2. User leaves field (blur) → Validate
3. If invalid → Show error, red border
4. If valid → Optional success indicator
5. User returns to field → Clear error on first change
```

#### Submit Validation
**Timing:** When form submitted

```
Click Submit → Validate all fields → Show errors
```

**When to use:**
- ✅ Simple forms
- ✅ Fewer fields (≤5)
- ❌ Complex forms (frustrating)

**Behavior:**
```
1. User clicks Submit
2. Validate all fields
3. If errors:
   → Scroll to first error
   → Show all errors
   → Focus first invalid field
4. If valid:
   → Submit form
```

#### Real-Time Validation
**Timing:** As user types

```
User types → Validate on every keystroke
```

**When to use:**
- ✅ Password strength
- ✅ Username availability
- ✅ Character count
- ❌ Most fields (annoying)

**Behavior:**
```
Email field:
  Type: "john"     → No error yet
  Type: "john@"    → Still typing...
  Type: "john@ex"  → Still typing...
  Stop typing 500ms → Validate → Show if invalid
```

**Debouncing:**
```css
Delay: 500ms after last keystroke
Purpose: Don't validate on every key
```

---

### 21.7 Error Handling

#### Error Message Guidelines
```
❌ Bad:  "Invalid input"
✅ Good: "Email must include @"

❌ Bad:  "Error in field"
✅ Good: "Password must be at least 8 characters"

❌ Bad:  "Wrong format"
✅ Good: "Phone number format: (555) 555-5555"
```

**Error Message Format:**
- Be specific
- Explain how to fix
- Use plain language
- Show example format
- Don't blame user

#### Error Summary
**For forms with multiple errors:**

```
┌────────────────────────────────┐
│ ⚠️ Please fix 3 errors:        │  Error summary
│   • Email is required          │  (top of form)
│   • Phone format invalid       │
│   • Password too short         │
├────────────────────────────────┤
│ [Form fields...]               │
└────────────────────────────────┘
```

**Implementation:**
```
1. Show summary at top of form
2. List all errors
3. Make errors clickable (jump to field)
4. Update summary as errors fixed
```

---

### 21.8 Required Fields

#### Indicating Required
**Option 1: Asterisk (*)**
```
Email *
[__________]
```

**Option 2: Text Label**
```
Email (required)
[__________]
```

**Option 3: All Required**
```
Form Title
* Required fields

Email *
[__________]
```

**Best Practice:**
- Use asterisk (*) - most common
- Add legend: "* Required fields"
- Mark optional fields if most are required
- Be consistent throughout form

---

### 21.9 Form Actions

#### Button Placement
**Right-aligned (Desktop):**
```
                    [Cancel] [Submit]
```

**Left-aligned:**
```
[Submit] [Cancel]
```

**Full-width (Mobile):**
```
[Submit          ]
[Cancel          ]
```

**Spacing:**
```css
Between Buttons: --spacing/2 (8px)
Form to Buttons: --spacing/8 (32px)
```

#### Button Order
```
Primary action (right): [Submit]
Secondary action (left): [Cancel]
```

**Alternative:**
```
[Submit] [Save Draft] [Cancel]
  ↑          ↑           ↑
Primary   Secondary   Tertiary
```

#### Loading State
```
[⟳ Submitting...]  Disabled, with spinner
```

---

### 21.10 Responsive Behavior

```
Desktop (1200px+)
├── Single-column (500px max) or 2-column
├── Labels above inputs
├── Inline validation
├── Action buttons right-aligned
└── Comfortable spacing (24px)

Tablet (768-1199px)
├── Single-column (preferred)
├── Labels above inputs
├── Full-width buttons (optional)
├── Standard spacing
└── May reduce to 2-column for simple fields

Mobile (<768px)
├── Single-column (required)
├── Full-width fields
├── Large inputs (48px)
├── Full-width buttons
├── Stacked vertically
├── Reduced spacing (16px)
└── Font size 16px+ (prevent zoom)
```

---

### 21.11 Accessibility

#### Form Structure
```html
<form aria-label="Contact form">
  <fieldset>
    <legend>Personal Information</legend>

    <label for="name">
      Name <span aria-label="required">*</span>
    </label>
    <input
      id="name"
      type="text"
      required
      aria-required="true"
      aria-describedby="name-helper"
      aria-invalid="false"
    />
    <span id="name-helper">Enter your full name</span>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

#### Error Announcements
```html
<input
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Email is required
</span>
```

#### Keyboard Navigation
```
Tab: Next field
Shift+Tab: Previous field
Enter: Submit form (if in text input)
Space: Toggle checkbox/radio
Arrow keys: Navigate radio group
```

---

### 21.12 Best Practices

#### Do's
✅ Use single-column layout (default)
✅ Label all fields clearly
✅ Mark required fields
✅ Provide helpful error messages
✅ Validate at appropriate times
✅ Group related fields
✅ Show progress (multi-step)
✅ Save user input (don't lose data)
✅ Use appropriate input types
✅ Make buttons clearly actionable

#### Don'ts
❌ Don't use placeholders as labels
❌ Don't validate as user types (usually)
❌ Don't require all fields
❌ Don't use vague error messages
❌ Don't reset form on error
❌ Don't hide field requirements
❌ Don't use CAPTCHA unless necessary
❌ Don't make forms longer than needed
❌ Don't forget mobile optimization

---

## 22. Dialog (Modal) Component

### Overview
Dialogs are overlay windows that focus user attention on specific tasks.

**Variants:** 3 (Alert, Confirmation, Form)
**Sizes:** 3 (Small, Medium, Large)
**Types:** 2 (Modal, Non-Modal)
**Features:** Backdrop, Close button, Actions

---

### 22.1 Dialog Anatomy

```
┌─────────────────────────────────────┐ ← Backdrop (dims background)
│                                     │
│   ┌───────────────────────────┐   │
│   │ Dialog Title          [×] │   │ ← Header
│   ├───────────────────────────┤   │
│   │                           │   │
│   │ Dialog content goes here. │   │ ← Content
│   │ Can include text, forms,  │   │
│   │ lists, or other elements. │   │
│   │                           │   │
│   ├───────────────────────────┤   │
│   │         [Cancel] [OK]     │   │ ← Actions
│   └───────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘

Components:
1. Backdrop - Dims/blocks background
2. Dialog container - White box
3. Header - Title + close button
4. Content - Main dialog body
5. Actions - Button(s) to proceed/cancel
```

---

### 22.2 Dialog Tokens

```css
/* Dimensions */
--component/dialog/min-width: 280px
--component/dialog/max-width: 560px
--component/dialog/title-height: 64px
--component/dialog/content-padding: 24px
--component/dialog/actions-height: 52px
--component/dialog/actions-spacing: 8px

/* Backdrop */
Background: rgba(0, 0, 0, 0.5)
Z-Index: --z-index/modal-backdrop (1300)

/* Dialog */
Background: --colors/background/paper
Border Radius: --border-radius/dialog (12px)
Elevation: --elevation/24
Z-Index: --z-index/modal (1400)

/* Typography */
Title: --typography/heading/h6 (12px) or h5 (14px)
Content: --typography/body/medium (14px)

/* Animation */
Duration: --transition/duration/entering (225ms)
Easing: --transition/easing/ease-out
```

---

### 22.3 Dialog Sizes

#### Small Dialog (280-400px)
```
┌──────────────────┐
│ Delete Item? [×] │
│──────────────────│
│ This action     │
│ cannot be undone│
│──────────────────│
│ [Cancel] [Delete]│
└──────────────────┘
    Min 280px
```

**When to use:**
- ✅ Simple confirmations
- ✅ Alerts
- ✅ Short messages
- ✅ Yes/No questions

#### Medium Dialog (400-560px)
```
┌─────────────────────────┐
│ Edit Profile        [×] │
│─────────────────────────│
│ Name:                   │
│ [___________]           │
│                         │
│ Email:                  │
│ [___________]           │
│─────────────────────────│
│        [Cancel] [Save]  │
└─────────────────────────┘
       Default 560px
```

**When to use:**
- ✅ Most dialogs (default)
- ✅ Forms (3-7 fields)
- ✅ Medium content
- ✅ Settings

#### Large Dialog (600-800px)
```
┌────────────────────────────────┐
│ Create New Project        [×]  │
│────────────────────────────────│
│ [Longer form...]               │
│ [Multiple sections...]         │
│────────────────────────────────│
│              [Cancel] [Create] │
└────────────────────────────────┘
         600-800px
```

**When to use:**
- ✅ Complex forms
- ✅ Multi-step wizards
- ✅ Rich content
- ❌ Consider full-page instead if too complex

---

### 22.4 Dialog Types

#### Alert Dialog
**Purpose:** Show important message, require acknowledgment

```
┌────────────────────────┐
│ Error                  │
│────────────────────────│
│ Failed to save changes.│
│ Please try again.      │
│────────────────────────│
│                  [OK]  │
└────────────────────────┘
```

**Features:**
- Single action button (OK, Close)
- No cancel (must acknowledge)
- Icon (optional): ℹ️ ⚠️ ✕
- Auto-focus OK button

#### Confirmation Dialog
**Purpose:** Confirm destructive or important action

```
┌────────────────────────────┐
│ Delete 5 items?            │
│────────────────────────────│
│ This action cannot be      │
│ undone. All selected items │
│ will be permanently deleted│
│────────────────────────────│
│     [Cancel] [Delete]      │
└────────────────────────────┘
```

**Features:**
- Two actions (Cancel + Confirm)
- Clear consequences
- Destructive action in red (optional)
- Auto-focus Cancel (safe default)

#### Form Dialog
**Purpose:** Collect user input

```
┌────────────────────────────┐
│ Add New User           [×] │
│────────────────────────────│
│ Name *                     │
│ [_______________]          │
│                            │
│ Email *                    │
│ [_______________]          │
│                            │
│ Role                       │
│ [Admin ▼]                  │
│────────────────────────────│
│        [Cancel] [Add User] │
└────────────────────────────┘
```

**Features:**
- Form inputs
- Validation
- Submit/Cancel buttons
- Close on successful submit

---

### 22.5 Dialog Header

```
┌────────────────────────────┐
│ Dialog Title          [×]  │ ← Header
│────────────────────────────│
```

**Tokens:**
```css
Height: --component/dialog/title-height (64px)
Padding: --spacing/6 (24px)
Title Font: --typography/heading/h6 or h5
Border Bottom: 1px solid --colors/divider (optional)
```

**Close Button:**
```css
Size: 40×40px
Icon: × (times)
Icon Size: --sizing/icon/medium (24px)
Position: Absolute, top-right
Color: --colors/text/secondary
Hover: --colors/action/hover
```

---

### 22.6 Dialog Content

```
┌────────────────────────────┐
│ Title                  [×] │
├────────────────────────────┤
│                            │ ← Content area
│ Text, forms, lists, etc.   │
│ Scrollable if overflow     │
│                            │
├────────────────────────────┤
```

**Tokens:**
```css
Padding: --component/dialog/content-padding (24px)
Max Height: 60vh (or fixed, e.g., 400px)
Overflow: auto (scrollable)
Font: --typography/body/medium (14px)
Line Height: 1.5
```

**Content Guidelines:**
- Keep concise (2-4 paragraphs max)
- Use lists for multiple items
- Include icons for emphasis
- Make scrollable if too long
- Don't exceed 60% viewport height

---

### 22.7 Dialog Actions

```
┌────────────────────────────┐
│ Title                  [×] │
│────────────────────────────│
│ Content...                 │
├────────────────────────────┤
│         [Cancel] [Confirm] │ ← Actions
└────────────────────────────┘
```

**Tokens:**
```css
Height: --component/dialog/actions-height (52px)
Padding: --spacing/4 (16px) --spacing/6 (24px)
Button Spacing: --component/dialog/actions-spacing (8px)
Alignment: Right (most common) or Center
Border Top: 1px solid --colors/divider (optional)
```

**Button Order:**
```
[Secondary] [Primary]
[Cancel]    [Submit]
[No]        [Yes]
```

**Button Variants:**
- Primary: Contained button (submit)
- Secondary: Text or outlined button (cancel)
- Destructive: Red contained button (delete)

---

### 22.8 Modal vs Non-Modal

#### Modal Dialog (Default)
**Blocks interaction with page behind**

```
Features:
✅ Backdrop prevents clicks outside
✅ Escape key closes dialog
✅ Focus trapped inside dialog
✅ Scrolls independently
✅ Disables page scroll
```

**When to use:**
- ✅ Require user decision
- ✅ Important actions
- ✅ Forms that must be completed
- ✅ Errors/warnings

#### Non-Modal Dialog
**Allows interaction with page behind**

```
Features:
✅ No backdrop (or light backdrop)
✅ Can click outside to dismiss
✅ Page remains interactive
✅ Multiple dialogs possible
```

**When to use:**
- ✅ Contextual help
- ✅ Non-blocking notifications
- ✅ Inspectors/properties panels
- ❌ Most dialogs (modal preferred)

---

### 22.9 Dialog Behavior

#### Opening
```
1. Fade in backdrop (150ms)
2. Scale in dialog (225ms)
   - Start: scale(0.9), opacity(0)
   - End: scale(1), opacity(1)
3. Focus first interactive element
4. Trap focus inside dialog
5. Disable page scroll
```

**Animation:**
```css
@keyframes dialogOpen {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

Duration: --transition/duration/entering (225ms)
Easing: --transition/easing/ease-out
```

#### Closing
```
1. Scale out dialog (195ms)
   - Start: scale(1), opacity(1)
   - End: scale(0.9), opacity(0)
2. Fade out backdrop (150ms)
3. Return focus to trigger element
4. Re-enable page scroll
5. Remove from DOM
```

**Animation:**
```css
Duration: --transition/duration/leaving (195ms)
Easing: --transition/easing/ease-in
```

#### Focus Management
```
On open:
→ Move focus to first focusable element
→ Or to a specific element (e.g., form input)

During:
→ Tab only cycles within dialog
→ Shift+Tab goes backwards

On close:
→ Return focus to element that opened dialog
→ (e.g., the button that triggered it)
```

---

### 22.10 Keyboard Interactions

```
Escape: Close dialog
Tab: Next focusable element
Shift+Tab: Previous focusable element
Enter: Activate focused button
Space: Activate focused button
Arrow keys: Navigate options (if applicable)
```

**Focus Trap:**
```
Dialog elements:
[Close ×] → [Input 1] → [Input 2] → [Cancel] → [Submit] → [Close ×]
    ↑                                                           ↓
    └───────────────────────────────────────────────────────────┘
                    Loops back to start
```

---

### 22.11 Responsive Behavior

```
Desktop (1024px+)
├── Centered in viewport
├── Fixed width (280-800px)
├── Max height: 80vh
├── Margin: 24px from edges
└── Content scrollable

Tablet (768-1023px)
├── Centered or slightly smaller
├── Width: 90% of viewport
├── Max width: 560px
└── Comfortable margins

Mobile (<768px)
├── Full-width (or near-full)
├── Bottom sheet style (optional)
├── Margin: 16px
├── Max height: 90vh
└── Easier close gestures
```

#### Mobile Adaptations

**Bottom Sheet:**
```
┌────────────────────┐
│ Page content       │
│                    │
└────────────────────┘
        ↓ Slides up
┌────────────────────┐
│ ▂ (Handle)         │ ← Swipe down to close
│────────────────────│
│ Dialog Title       │
│────────────────────│
│ Content...         │
│────────────────────│
│ [Actions]          │
└────────────────────┘
```

**Benefits:**
- Native feel on mobile
- Easier to reach bottom buttons
- Swipe-to-dismiss gesture
- Takes full screen width

---

### 22.12 Accessibility

#### Semantic HTML
```html
<div
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-content"
  aria-modal="true"
>
  <h2 id="dialog-title">Delete Item</h2>
  <div id="dialog-content">
    This action cannot be undone.
  </div>
  <div class="dialog-actions">
    <button>Cancel</button>
    <button>Delete</button>
  </div>
</div>

<!-- Backdrop -->
<div class="backdrop" aria-hidden="true"></div>
```

#### Screen Reader
```
On open:
- "Dialog: Delete Item"
- Reads content
- "This action cannot be undone"
- "Cancel button"
- "Delete button"

Navigation:
- Tab through interactive elements
- Announces button names and states
```

#### Focus Requirements
- Focus moves to dialog on open
- Focus trapped inside dialog
- Focus returns to trigger on close
- First focusable element receives focus
- Logical tab order

---

### 22.13 Best Practices

#### Do's
✅ Use sparingly (don't overuse modals)
✅ Make purpose clear in title
✅ Provide close button (×)
✅ Allow Escape key to close
✅ Keep content concise
✅ Use for important decisions
✅ Trap focus inside dialog
✅ Animate entry/exit
✅ Return focus on close

#### Don'ts
❌ Don't nest dialogs (dialog within dialog)
❌ Don't make dialogs too large
❌ Don't use for non-critical info (use snackbar)
❌ Don't auto-open without user action
❌ Don't prevent closing (except critical alerts)
❌ Don't hide close button
❌ Don't use for long forms (use full page)
❌ Don't forget keyboard accessibility

---

## 23. Tooltip Component

### Overview
Tooltips provide brief, contextual information on hover or focus.

**Variants:** 2 (Plain, Rich)
**Positions:** 4 (Top, Bottom, Left, Right)
**Triggers:** 3 (Hover, Focus, Click)
**Arrow:** Optional

---

### 23.1 Tooltip Anatomy

```
                  ┌────────────────┐
     [Button]     │ Tooltip text   │  ← Tooltip
        ↑         └────────▼───────┘  ← Arrow (optional)
     Target              ↑
                    Positioned
                  relative to target

Components:
1. Target element (trigger)
2. Tooltip container
3. Tooltip content (text)
4. Arrow/pointer (optional)
```

---

### 23.2 Tooltip Tokens

```css
/* Dimensions */
--component/tooltip/max-width: 300px
--component/tooltip/padding-horizontal: 8px
--component/tooltip/padding-vertical: 4px
--component/tooltip/arrow-size: 8px

/* Colors */
Background: rgba(97, 97, 97, 0.9) (dark gray, semi-transparent)
Text: #ffffff (white)

/* Typography */
Font: --typography/caption (12px)
Line Height: 1.4
Text Align: Center or left

/* Border Radius */
--border-radius/tooltip: 4px

/* Elevation */
Elevation: --elevation/4 (subtle shadow)
Z-Index: --z-index/tooltip (1600) - highest

/* Animation */
Duration: --transition/duration/shortest (150ms)
Easing: --transition/easing/ease-out
Delay: 300ms (before showing)
```

---

### 23.3 Tooltip Positions

#### Top (Default)
```
    ┌──────────────┐
    │ Tooltip text │
    └──────▼───────┘
       [Button]
```

**When to use:**
- ✅ Most tooltips (default)
- ✅ Buttons in content area
- ✅ Plenty of space above

#### Bottom
```
       [Button]
    ┌──────▲───────┐
    │ Tooltip text │
    └──────────────┘
```

**When to use:**
- ✅ Elements near top of viewport
- ✅ Navigation items
- ✅ Header buttons

#### Left
```
┌──────────────┐◄──[Button]
│ Tooltip text │
└──────────────┘
```

**When to use:**
- ✅ Elements on right edge
- ✅ Side-aligned buttons

#### Right
```
[Button]──►┌──────────────┐
           │ Tooltip text │
           └──────────────┘
```

**When to use:**
- ✅ Elements on left edge
- ✅ Sidebar icons

---

### 23.4 Tooltip Triggers

#### Hover (Most Common)
```
Mouse enters → Show tooltip (after 300ms delay)
Mouse leaves → Hide tooltip (immediately)
```

**When to use:**
- ✅ Desktop interfaces
- ✅ Icon buttons
- ✅ Truncated text
- ✅ Informational icons
- ❌ Mobile (no hover state)

#### Focus
```
Tab to element → Show tooltip
Tab away → Hide tooltip
```

**When to use:**
- ✅ Keyboard navigation
- ✅ Accessibility
- ✅ Form inputs
- ✅ All interactive elements

#### Click (Touch-Friendly)
```
Tap/click element → Show tooltip
Tap/click outside → Hide tooltip
```

**When to use:**
- ✅ Mobile devices
- ✅ Touch interfaces
- ✅ Complex tooltips
- ❌ Use sparingly (can be annoying)

**Combined (Best Practice):**
```
Desktop: Hover + Focus
Mobile: Click/Tap
```

---

### 23.5 Tooltip Variants

#### Plain Tooltip
**Simple text only**

```
┌─────────────────────┐
│ Edit this item      │
└─────────────────────┘
```

```css
Background: rgba(97, 97, 97, 0.9)
Color: white
Padding: 4px 8px
Font: 12px
Max Width: 300px
```

**When to use:**
- ✅ Most tooltips (default)
- ✅ Short explanations (1-2 lines)
- ✅ Button labels
- ✅ Icon meanings

#### Rich Tooltip (Popover)
**With formatting, links, or icons**

```
┌─────────────────────────────┐
│ [!] Keyboard Shortcut       │
│ ─────────────────────────── │
│ Press Ctrl+S to save        │
│ Press Ctrl+Z to undo        │
│ [Learn more →]              │
└─────────────────────────────┘
```

```css
Background: --colors/background/paper (white)
Border: 1px solid --colors/divider
Color: --colors/text/primary
Padding: 12px 16px
Max Width: 400px
Elevation: --elevation/8
```

**When to use:**
- ✅ Complex information
- ✅ Multiple lines
- ✅ Links or actions
- ✅ Formatted content
- ❌ Simple text (use plain tooltip)

**Difference from Dialog:**
- Tooltip: Lightweight, non-modal
- Dialog: Heavy, modal, requires action

---

### 23.6 Tooltip Content

#### Text Content Guidelines
```
✅ Good:
- "Edit item" (concise)
- "Delete this entry permanently" (clear)
- "Keyboard shortcut: Ctrl+S" (helpful)

❌ Bad:
- "Click this button to edit the selected item in the list" (too long)
- "Edit" (already on button text, redundant)
- "This feature is currently unavailable because..." (use alert)
```

**Best Practices:**
- Keep under 10 words (plain tooltip)
- Use sentence case
- Don't repeat visible text
- Provide value (shortcuts, tips, clarification)
- Avoid full sentences when possible

#### When to Use Tooltips
```
✅ Use for:
- Icon button labels
- Truncated text (show full text)
- Keyboard shortcuts
- Brief explanations
- Disabled state reasons
- Abbreviations/acronyms

❌ Don't use for:
- Essential information (use inline text)
- Long descriptions (use help text)
- Interactive elements (use popover)
- Error messages (use inline errors)
```

---

### 23.7 Arrow/Pointer

#### With Arrow (Default)
```
    ┌──────────────┐
    │ Tooltip text │
    └──────▼───────┘  ← Arrow points to target
       [Button]
```

```css
Arrow Size: --component/tooltip/arrow-size (8px)
Arrow Color: Same as tooltip background
Position: Centered on target element
```

#### Without Arrow
```
    ┌──────────────┐
    │ Tooltip text │
    └──────────────┘
       [Button]
         ↑
    Small gap (4px)
```

**When to omit:**
- ✅ Cleaner look
- ✅ Very small tooltips
- ✅ Multiple tooltips near each other

---

### 23.8 Tooltip Positioning Logic

#### Auto-Positioning
```
1. Preferred position: Top
2. If no space above → Try bottom
3. If no space below → Try right
4. If no space right → Try left
5. If no space anywhere → Show anyway (scroll)
```

**Viewport Constraints:**
```
Tooltip must:
- Stay within viewport bounds
- Not overlap trigger element
- Be readable (not cut off)
- Have 8px margin from edges
```

#### Alignment
```
Top/Bottom tooltips:
- Align center with target
- If target near edge, align left/right
- Keep arrow pointing to target center

Left/Right tooltips:
- Align middle vertically
- Adjust if near top/bottom edge
```

---

### 23.9 Animation

#### Show Animation
```css
@keyframes tooltipShow {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

Duration: 150ms
Easing: ease-out
Delay: 300ms (after hover)
```

#### Hide Animation
```css
@keyframes tooltipHide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

Duration: 75ms
Easing: ease-in
Delay: 0 (immediate)
```

**Why delay on show?**
- Prevent accidental tooltips
- User moving mouse across screen
- Only show if truly hovering

---

### 23.10 Responsive Behavior

```
Desktop (1024px+)
├── Hover trigger (300ms delay)
├── Position: auto (best fit)
├── Max width: 300px
└── Standard sizing

Tablet (768-1023px)
├── Hover + touch trigger
├── Slightly larger tap target
├── Max width: 250px
└── Auto-position aware of viewport

Mobile (<768px)
├── Click/tap trigger only (no hover)
├── Larger touch targets (44px min)
├── Full-width or max-width: 90vw
├── Bottom sheet style (optional)
└── Dismiss on outside tap
```

#### Mobile Tooltip Considerations
```
Problem: No hover on mobile
Solutions:
1. Show on tap (hold, not immediate)
2. Use "?" icon for info
3. Convert to inline help text
4. Use accordion/expandable sections
5. Bottom sheet for complex info
```

---

### 23.11 Accessibility

#### ARIA Implementation
```html
<!-- Button with tooltip -->
<button aria-describedby="tooltip-1">
  <svg aria-hidden="true">...</svg>
</button>

<div
  role="tooltip"
  id="tooltip-1"
  class="tooltip"
>
  Edit this item
</div>

<!-- Disabled button with reason -->
<button disabled aria-describedby="tooltip-2">
  Submit
</button>

<div role="tooltip" id="tooltip-2">
  Please fill all required fields
</div>
```

#### Keyboard Support
```
Tab to element → Show tooltip
Shift+Tab away → Hide tooltip
Escape → Hide tooltip
```

#### Screen Reader
```
Focus button:
- "Edit button"
- "Edit this item" (tooltip read automatically)

Disabled button:
- "Submit button, disabled"
- "Please fill all required fields"
```

---

### 23.12 Best Practices

#### Do's
✅ Keep text brief (5-10 words)
✅ Use for non-essential info
✅ Show on hover + focus
✅ Delay appearance (300ms)
✅ Position automatically
✅ Use dark background (contrast)
✅ Include keyboard shortcut info
✅ Provide for disabled elements
✅ Support touch/click on mobile

#### Don'ts
❌ Don't hide essential information
❌ Don't use for error messages
❌ Don't make interactive (use popover)
❌ Don't show on page load
❌ Don't nest tooltips
❌ Don't use for long text (>20 words)
❌ Don't block important content
❌ Don't show multiple simultaneously
❌ Don't rely solely on hover (mobile)

---

### 23.13 Common Use Cases

**Icon Buttons:**
```
[✏️] → "Edit"
[🗑️] → "Delete"
[⬇️] → "Download"
```

**Truncated Text:**
```
This is a very lon... → "This is a very long title that was truncated"
```

**Keyboard Shortcuts:**
```
[💾 Save] → "Keyboard shortcut: Ctrl+S"
```

**Disabled Elements:**
```
[Submit] (disabled) → "Complete all required fields to submit"
```

**Info Icons:**
```
[ℹ️] → "Your data is encrypted and secure"
```

**Abbreviations:**
```
CSV → "Comma-Separated Values"
API → "Application Programming Interface"
```

---

## 24. Snackbar (Toast) Component

### Overview
Snackbars provide brief feedback about operations at the bottom of the screen.

**Variants:** 4 (Info, Success, Warning, Error)
**Positions:** 3 (Bottom-left, Bottom-center, Bottom-right)
**Duration:** Auto-dismiss or Persistent
**Features:** Message, Action button, Close button

---

### 24.1 Snackbar Anatomy

```
┌──────────────────────────────────────┐
│ ✓ Item saved successfully   [Undo]  │
└──────────────────────────────────────┘
  ↑        ↑                      ↑
Icon    Message               Action (opt)

Components:
1. Container (rounded rectangle)
2. Icon (optional, indicates type)
3. Message text
4. Action button (optional)
5. Close button (optional)
```

---

### 24.2 Snackbar Tokens

```css
/* Dimensions */
--component/snackbar/width: 344px
--component/snackbar/min-height: 48px
--component/snackbar/padding-horizontal: 16px
--component/snackbar/padding-vertical: 6px
--component/snackbar/action-spacing: 8px

/* Colors */
Background: rgba(49, 49, 49, 0.9) (dark gray)
Text: #ffffff (white)

/* Success Variant */
Background Success: rgba(46, 125, 50, 0.9) (green)

/* Error Variant */
Background Error: rgba(211, 47, 47, 0.9) (red)

/* Warning Variant */
Background Warning: rgba(237, 108, 2, 0.9) (orange)

/* Typography */
Message: --typography/body/medium (14px)
Action Button: --typography/button/medium (14px)

/* Position */
Bottom: 24px (from viewport bottom)
Left/Center/Right: based on variant
Z-Index: --z-index/snackbar (1500)

/* Animation */
Duration: --transition/duration/entering (225ms)
Auto-dismiss: 4000-7000ms (4-7 seconds)
```

---

### 24.3 Snackbar Positions

#### Bottom-Center (Default)
```
┌────────────────────────────────────────┐
│                                        │
│         Page Content                   │
│                                        │
│                                        │
└────────────────────────────────────────┘
         ┌──────────────────┐
         │ Message text [X] │  ← Snackbar
         └──────────────────┘
              Centered
```

**When to use:**
- ✅ Most snackbars (default)
- ✅ General notifications
- ✅ Not blocking important content

#### Bottom-Left
```
┌────────────────────────────────────────┐
│                                        │
│         Page Content                   │
│                                        │
│                                        │
└────────────────────────────────────────┘
┌──────────────────┐
│ Message text [X] │  ← Snackbar
└──────────────────┘
    Left-aligned
```

**When to use:**
- ✅ Desktop applications
- ✅ If FAB on right side
- ✅ LTR interfaces (default)

#### Bottom-Right
```
┌────────────────────────────────────────┐
│                                        │
│         Page Content                   │
│                                        │
│                                        │
└────────────────────────────────────────┘
                  ┌──────────────────┐
                  │ Message text [X] │  ← Snackbar
                  └──────────────────┘
                      Right-aligned
```

**When to use:**
- ✅ RTL interfaces
- ✅ If elements on left
- ✅ User preference

---

### 24.4 Snackbar Variants

#### Info Snackbar (Default)
```
┌──────────────────────────────┐
│ ℹ️ Settings updated          │
└──────────────────────────────┘
```

**Tokens:**
```css
Background: rgba(49, 49, 49, 0.9)
Icon: ℹ️ or none
Color: white
```

**When to use:**
- ✅ General notifications
- ✅ Informational feedback
- ✅ Non-critical updates

#### Success Snackbar
```
┌──────────────────────────────┐
│ ✓ Changes saved successfully │
└──────────────────────────────┘
```

**Tokens:**
```css
Background: rgba(46, 125, 50, 0.9) (green)
Icon: ✓ (checkmark)
Color: white
```

**When to use:**
- ✅ Successful operations
- ✅ Confirmations
- ✅ Completed actions

#### Warning Snackbar
```
┌──────────────────────────────┐
│ ⚠️ Network connection slow   │
└──────────────────────────────┘
```

**Tokens:**
```css
Background: rgba(237, 108, 2, 0.9) (orange)
Icon: ⚠️ (warning triangle)
Color: white
```

**When to use:**
- ✅ Non-critical issues
- ✅ Caution messages
- ✅ Potential problems

#### Error Snackbar
```
┌──────────────────────────────┐
│ ✕ Failed to save changes     │
└──────────────────────────────┘
```

**Tokens:**
```css
Background: rgba(211, 47, 47, 0.9) (red)
Icon: ✕ (X mark)
Color: white
```

**When to use:**
- ✅ Error messages
- ✅ Failed operations
- ✅ Critical issues

---

### 24.5 Snackbar Content

#### Message Guidelines
```
✅ Good:
- "Item deleted" (concise, clear)
- "5 files uploaded successfully" (specific)
- "Connection lost. Retrying..." (informative)

❌ Bad:
- "Success" (too vague)
- "An error occurred while trying to save your changes to the database" (too long)
- "OK" (doesn't explain what happened)
```

**Best Practices:**
- Keep under 2 lines (mobile: 1 line)
- Use past tense ("Saved", not "Saving")
- Be specific ("3 items deleted" vs "Items deleted")
- Provide value (user needs to know)
- Use sentence case

---

### 24.6 Action Button

#### With Action
```
┌─────────────────────────────────────┐
│ Email sent to john@example.com [Undo]│
└─────────────────────────────────────┘
                                 ↑
                            Action button
```

**Tokens:**
```css
Button Style: Text button
Color: --colors/primary/light or white
Font Weight: 700
Height: 36px
Padding: 0 --spacing/3 (12px)
```

**Common Actions:**
- Undo
- Retry
- View
- Dismiss
- Learn more

**When to include:**
- ✅ Reversible actions (Undo)
- ✅ Failed operations (Retry)
- ✅ Related content (View)
- ❌ Simple confirmations

#### Without Action
```
┌──────────────────────────────┐
│ ✓ Profile updated            │
└──────────────────────────────┘
```

**When to omit:**
- ✅ Simple confirmations
- ✅ No related action available
- ✅ Auto-dismiss sufficient

---

### 24.7 Duration & Dismissal

#### Auto-Dismiss (Default)
```
Show snackbar
↓
Wait 4-7 seconds
↓
Fade out and remove
```

**Duration Guidelines:**
```
Short message (1 line): 4 seconds
Medium message (2 lines): 6 seconds
With action button: 7 seconds
Error message: 7 seconds (more time to read)
```

**Pause on Hover:**
```
User hovers → Pause timer
User moves away → Resume timer
```

#### Manual Dismiss
```
┌─────────────────────────────────────┐
│ Connection lost. Retrying...    [×] │
└─────────────────────────────────────┘
                                  ↑
                            Close button
```

**When to use:**
- ✅ Persistent errors
- ✅ Ongoing processes
- ✅ Important messages user must acknowledge
- ❌ Simple confirmations (use auto-dismiss)

**Close Button:**
```css
Size: 24×24px
Icon: × (times)
Color: white with 70% opacity
Hover: white 100% opacity
```

---

### 24.8 Stacking Behavior

#### Single Snackbar (Preferred)
```
New notification → Replace current snackbar
```

**Benefits:**
- Less clutter
- Clear single message
- Not overwhelming

#### Multiple Snackbars (Queue)
```
First:
┌──────────────────────┐
│ Item 1 deleted       │
└──────────────────────┘

Second appears after first dismissed:
┌──────────────────────┐
│ Item 2 deleted       │
└──────────────────────┘
```

**Queue Behavior:**
```
1. Show first snackbar
2. Queue additional notifications
3. When first dismissed/expires, show next
4. Continue until queue empty
```

**Max Queue Size:** 3-5 messages (drop oldest)

#### Vertical Stack (Alternative)
```
┌──────────────────────┐
│ Message 3 (newest)   │
└──────────────────────┘
┌──────────────────────┐
│ Message 2            │
└──────────────────────┘
┌──────────────────────┐
│ Message 1 (oldest)   │
└──────────────────────┘
```

**When to use:**
- ✅ Real-time notifications (chat)
- ✅ System monitoring
- ❌ General use (too cluttered)

---

### 24.9 Animation

#### Slide In
```css
@keyframes snackbarSlideIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

Duration: 225ms
Easing: ease-out
```

#### Slide Out
```css
@keyframes snackbarSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
  }
}

Duration: 195ms
Easing: ease-in
```

---

### 24.10 Responsive Behavior

```
Desktop (1024px+)
├── Width: 344px (fixed)
├── Position: Bottom-left/center/right
├── Margin: 24px from edges
├── Elevation: 6
└── Action button inline

Tablet (768-1023px)
├── Width: 344px or 90% viewport
├── Position: Bottom-center (preferred)
├── Margin: 16px from edges
└── Action button inline or stacked

Mobile (<768px)
├── Width: Full-width or 90vw
├── Position: Bottom (stretched)
├── Margin: 8px from edges
├── Action button stacked below message
├── Larger touch targets
└── Swipe to dismiss gesture
```

#### Mobile Snackbar
```
┌────────────────────────────────┐
│ Message text goes here         │
│                                │
│ [Action Button]            [×] │
└────────────────────────────────┘
         Full-width
```

---

### 24.11 Accessibility

#### ARIA Implementation
```html
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="snackbar"
>
  <span class="snackbar-message">
    Item saved successfully
  </span>
  <button aria-label="Undo">
    Undo
  </button>
  <button aria-label="Close notification">
    ×
  </button>
</div>

<!-- Error snackbar -->
<div
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  Failed to save changes
</div>
```

#### ARIA Live Regions
```
Info/Success: role="status" aria-live="polite"
  → Announces when convenient

Warning/Error: role="alert" aria-live="assertive"
  → Announces immediately
```

#### Screen Reader
```
"Status: Item saved successfully. Undo button. Close notification button."

On error:
"Alert: Failed to save changes. Retry button."
```

#### Keyboard Support
```
Tab: Focus action button
Enter/Space: Activate focused button
Escape: Dismiss snackbar
```

---

### 24.12 Best Practices

#### Do's
✅ Keep messages brief (1-2 lines)
✅ Use for temporary feedback
✅ Auto-dismiss after 4-7 seconds
✅ Provide action when relevant (Undo)
✅ Use appropriate variant (success/error)
✅ Position at bottom of screen
✅ Pause on hover
✅ Queue multiple notifications

#### Don'ts
❌ Don't use for critical errors (use dialog)
❌ Don't show multiple simultaneously
❌ Don't make messages too long
❌ Don't require user action to proceed
❌ Don't block important content
❌ Don't auto-dismiss errors immediately
❌ Don't use for form validation
❌ Don't show on every minor action

---

### 24.13 Common Use Cases

**Successful Operations:**
```
"Item added to cart"
"Settings saved"
"File uploaded successfully"
```

**Reversible Actions:**
```
"Email sent [Undo]"
"Item deleted [Undo]"
"3 items archived [Undo]"
```

**Errors:**
```
"Failed to save changes [Retry]"
"Connection lost. Retrying..."
"Upload failed [Try again]"
```

**Progress:**
```
"Uploading file... 45%"
"Processing request..."
"Syncing data..."
```

**Confirmations:**
```
"Password changed"
"Account created"
"Subscription updated"
```

---

## 25. Card Component

### Overview
Cards are surfaces containing related content and actions about a single subject.

**Variants:** 3 (Basic, Outlined, Elevated)
**Types:** 5 (Simple, Media, Action, Complex, Product)
**Elevation:** 0-8
**Features:** Header, Media, Content, Actions

---

### 25.1 Card Anatomy

```
┌────────────────────────────────┐
│ Card Title           [⋮]       │  ← Header
├────────────────────────────────┤
│ ██████████████████             │  ← Media (optional)
│ ██████████████████             │
├────────────────────────────────┤
│                                │  ← Content
│ Card content text goes here.   │
│ Can include multiple lines     │
│ and various elements.          │
│                                │
├────────────────────────────────┤
│         [Action 1] [Action 2]  │  ← Actions (optional)
└────────────────────────────────┘

Components:
1. Container (card surface)
2. Header (title + subtitle + actions)
3. Media (image, video, or graphic)
4. Content (text, lists, etc.)
5. Actions (buttons or links)
```

---

### 25.2 Card Tokens

```css
/* Dimensions */
Min Width: 280px (mobile)
Max Width: 100% or fixed (e.g., 400px)
Min Height: No minimum (auto)
Padding: --spacing/4 (16px) to --spacing/6 (24px)

/* Border Radius */
--border-radius/card: 12px

/* Elevation */
Basic: --elevation/0 (flat)
Outlined: --elevation/0 with 1px border
Elevated: --elevation/2 (rest), --elevation/4 (hover)

/* Colors */
Background: --colors/background/paper (#ffffff)
Border (Outlined): 1px solid --colors/divider
```

---

I've completed comprehensive documentation for all 25 components!

Would you like me to:
1. Create a master index/table of contents document?
2. Add more visual examples or code snippets?
3. Create a quick reference guide (cheat sheet)?
4. Package everything with a README?