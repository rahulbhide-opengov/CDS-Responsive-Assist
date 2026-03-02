# Component States Audit - Buttons & Input Fields

**Date**: 2026-03-02
**Purpose**: Verify if component states match Figma specifications exactly

---

## 🎯 Question to Answer

**Do buttons and input fields have the EXACT state details (colors, sizes, etc.) as specified in Figma?**

---

## 📊 Current State Implementation

### **States Currently Defined in Tokens**

#### **Primary States (Blurple)**
Located in: `src/theme/tokens.ts:196-208`

**Light Mode:**
```typescript
hover: 'rgba(75, 63, 255, 0.04)'        // Blurple 700 @ 4%
selected: 'rgba(75, 63, 255, 0.08)'     // Blurple 700 @ 8%
focus: 'rgba(75, 63, 255, 0.12)'        // Blurple 700 @ 12%
focusVisible: 'rgba(75, 63, 255, 0.30)' // Blurple 700 @ 30%
```

**Dark Mode:**
```typescript
hover: 'rgba(148, 168, 255, 0.08)'      // #94A8FF @ 8%
selected: 'rgba(148, 168, 255, 0.16)'   // #94A8FF @ 16%
focus: 'rgba(148, 168, 255, 0.12)'      // #94A8FF @ 12%
focusVisible: 'rgba(148, 168, 255, 0.30)' // #94A8FF @ 30%
```

---

#### **Secondary States (Slate)**
Located in: `src/theme/tokens.ts:214-226`

**Light Mode:**
```typescript
hover: 'rgba(84, 101, 116, 0.04)'       // #546574 @ 4%
selected: 'rgba(84, 101, 116, 0.08)'    // #546574 @ 8%
focus: 'rgba(84, 101, 116, 0.12)'       // #546574 @ 12%
focusVisible: 'rgba(84, 101, 116, 0.30)' // #546574 @ 30%
```

**Dark Mode:**
```typescript
hover: 'rgba(156, 177, 195, 0.08)'      // #9CB1C3 @ 8%
selected: 'rgba(156, 177, 195, 0.16)'   // #9CB1C3 @ 16%
focus: 'rgba(156, 177, 195, 0.12)'      // #9CB1C3 @ 12%
focusVisible: 'rgba(156, 177, 195, 0.30)' // #9CB1C3 @ 30%
```

---

#### **Action States (Global)**
Located in: `src/theme/tokens.ts:162-172`

```typescript
active: 'rgba(0, 0, 0, 0.54)'           // Active states - 54%
hover: 'rgba(0, 0, 0, 0.04)'            // Hover backgrounds - 4%
hoverOpacity: 0.04

selected: 'rgba(0, 0, 0, 0.08)'         // Selected backgrounds - 8%
selectedOpacity: 0.08

disabled: 'rgba(0, 0, 0, 0.26)'         // Disabled elements - 26%
disabledBackground: 'rgba(0, 0, 0, 0.12)' // Disabled button backgrounds - 12%
disabledOpacity: 0.38

focus: 'rgba(0, 0, 0, 0.12)'            // Focus rings - 12%
focusOpacity: 0.12
```

---

## 🔘 Button States Implementation

### **Current Implementation**

**File**: `src/components/Button.tsx:195-275`

#### **States Implemented:**
1. ✅ **Hover** - Theme-based (MUI handles via theme overrides)
2. ✅ **Focus-Visible** - Custom outline `3px solid primary.light` with 2px offset
3. ✅ **Active** - Theme-based (MUI handles via theme overrides)
4. ✅ **Disabled** - MUI built-in disabled state
5. ✅ **Loading** - Custom data attribute with opacity 0.7
6. ⚠️ **Pressed/Active** - Partially handled by theme

#### **What's Implemented:**
```typescript
// Focus-visible state (keyboard navigation)
'&:focus-visible': {
  outline: `3px solid ${theme.palette.primary.light}`,
  outlineOffset: 2,
}

// Loading state
'&[data-cds-loading="true"]': {
  pointerEvents: 'none',
  opacity: 0.7,
}

// Ghost variant hover
'&[data-cds-variant="ghost"]': {
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: theme.palette.secondaryStates.light.hover,
    color: theme.palette.text.primary,
  },
}
```

#### **States Handled by Theme Overrides** (`src/theme/index.ts:200-290`)

**Primary Button (Contained):**
```typescript
'&:hover': {
  backgroundColor: 'primary.main',
  backgroundImage: `linear-gradient(
    ${primaryStates.light.hover},
    ${primaryStates.light.hover}
  )`,
}

'&:active': {
  backgroundImage: `linear-gradient(
    ${primaryStates.light.selected},
    ${primaryStates.light.selected}
  )`,
}

'&.Mui-focusVisible': {
  boxShadow: `0 0 0 3px ${primaryStates.light.focusVisible}`,
}
```

**Secondary Button (Outlined):**
```typescript
'&:hover': {
  backgroundColor: primaryStates.light.hover,
  borderColor: 'primary.main',
}

'&:active': {
  backgroundColor: primaryStates.light.selected,
}

'&.Mui-focusVisible': {
  boxShadow: `0 0 0 3px ${primaryStates.light.focusVisible}`,
}
```

**Tertiary Button (Text):**
```typescript
'&:hover': {
  backgroundColor: primaryStates.light.hover,
}

'&:active': {
  backgroundColor: primaryStates.light.selected,
}

'&.Mui-focusVisible': {
  boxShadow: `0 0 0 3px ${primaryStates.light.focusVisible}`,
}
```

---

### **Button States by Variant**

| Variant | Default | Hover | Active/Pressed | Focus | Disabled | Loading |
|---------|---------|-------|----------------|-------|----------|---------|
| **Primary** | ✅ Blurple 700 | ✅ + 4% overlay | ✅ + 8% overlay | ✅ 3px ring @ 30% | ✅ MUI default | ✅ Custom |
| **Secondary** | ✅ Outlined | ✅ 4% bg | ✅ 8% bg | ✅ 3px ring @ 30% | ✅ MUI default | ✅ Custom |
| **Tertiary** | ✅ Text | ✅ 4% bg | ✅ 8% bg | ✅ 3px ring @ 30% | ✅ MUI default | ✅ Custom |
| **Danger** | ✅ Error color | ✅ Theme | ✅ Theme | ✅ Theme | ✅ MUI default | ✅ Custom |
| **Success** | ✅ Success color | ✅ Theme | ✅ Theme | ✅ Theme | ✅ MUI default | ✅ Custom |
| **Ghost** | ✅ Text secondary | ✅ Custom hover | ⚠️ Not explicit | ⚠️ Not explicit | ✅ MUI default | ✅ Custom |
| **Link** | ✅ Underlined | ✅ Custom | ⚠️ Not explicit | ⚠️ Not explicit | ✅ MUI default | ✅ Custom |

---

## 📝 Input Field States Implementation

### **Current Implementation**

**File**: `src/components/Form.tsx:958-1123`

#### **States Implemented for TextField:**
1. ✅ **Focus** - 2px border with primary color
2. ✅ **Error** - 2px border with error color
3. ✅ **Success** - 2px border with success color (custom data attribute)
4. ✅ **Warning** - 2px border with warning color (custom data attribute)
5. ✅ **Disabled** - MUI built-in disabled state
6. ⚠️ **Hover** - Not explicitly implemented (MUI default)

#### **What's Implemented:**
```typescript
// Focus state
'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
  borderWidth: 2,
  borderColor: theme.palette.primary.main,
}

// Error state - ensure proper contrast
'&.Mui-error .MuiOutlinedInput-notchedOutline': {
  borderColor: theme.palette.error.main,
  borderWidth: 2,
}

// Success state (custom)
'&[data-state="success"] .MuiOutlinedInput-notchedOutline': {
  borderColor: theme.palette.success.main,
  borderWidth: 2,
}

// Warning state (custom)
'&[data-state="warning"] .MuiOutlinedInput-notchedOutline': {
  borderColor: theme.palette.warning.main,
  borderWidth: 2,
}

// Label states
'& .MuiInputLabel-root': {
  '&.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '&.Mui-error': {
    color: theme.palette.error.main,
  },
  '&[data-state="success"]': {
    color: theme.palette.success.main,
  },
  '&[data-state="warning"]': {
    color: theme.palette.warning.main,
  },
}
```

---

### **Input Field States Summary**

| State | Border | Label Color | Background | Implemented |
|-------|--------|-------------|------------|-------------|
| **Default** | ✅ 1px grey | ✅ Text secondary | ✅ Transparent | ✅ Yes |
| **Hover** | ⚠️ MUI default | ⚠️ MUI default | ⚠️ MUI default | ⚠️ Partial |
| **Focus** | ✅ 2px primary | ✅ Primary color | ✅ Transparent | ✅ Yes |
| **Filled** | ✅ 1px grey | ✅ Shrunk label | ✅ Transparent | ✅ Yes |
| **Error** | ✅ 2px error | ✅ Error color | ✅ Transparent | ✅ Yes |
| **Success** | ✅ 2px success | ✅ Success color | ✅ Transparent | ✅ Yes |
| **Warning** | ✅ 2px warning | ✅ Warning color | ✅ Transparent | ✅ Yes |
| **Disabled** | ✅ MUI disabled | ✅ Disabled color | ✅ Disabled bg | ✅ Yes |

---

## ❓ What's Missing / Needs Verification

### **Potential Missing States:**

1. **Button Hover Colors** - Are the opacity overlays (4%/8%) correct per Figma?
2. **Button Active/Pressed** - Is the "selected" state the same as "pressed"?
3. **Input Hover State** - Should there be an explicit hover state with different border?
4. **Focus Ring Width** - Is 3px correct for buttons? What about inputs?
5. **Focus Ring Color** - Using primary.light vs focusVisible token - which is correct?
6. **Disabled Opacity** - Are disabled states using correct opacity values?
7. **State Transitions** - Are transition durations correct?

### **States That May Need Explicit Implementation:**

#### **Buttons:**
- ❓ Pressed state (different from active?)
- ❓ Hover with focus (combined state)
- ❓ Active + focus (combined state)

#### **Inputs:**
- ❓ Explicit hover state (border color change?)
- ❓ Hover with filled value
- ❓ Focus ring (in addition to border?)
- ❓ Error + hover
- ❓ Error + focus

---

## 📸 What We Need from Figma

To verify exact implementation, please provide Figma variable screenshots or specifications for:

### **Button States:**
1. **Primary Button States:**
   - Default (background color, text color)
   - Hover (background color, overlay)
   - Active/Pressed (background color, overlay)
   - Focus (outline/ring color, width, offset)
   - Disabled (background color, text color, opacity)
   - Loading (appearance)

2. **Secondary Button States:**
   - Default (border color, text color)
   - Hover (border, background, text)
   - Active/Pressed
   - Focus (outline/ring)
   - Disabled

3. **Tertiary/Text Button States:**
   - Default
   - Hover
   - Active/Pressed
   - Focus
   - Disabled

### **Input Field States:**
1. **TextField States:**
   - Default (border width, border color)
   - Hover (border width, border color)
   - Focus (border width, border color, focus ring?)
   - Filled (border, label position)
   - Error (border, label, helper text colors)
   - Success (border, label colors)
   - Warning (border, label colors)
   - Disabled (border, background, text)

2. **Select States:**
   - Same as TextField + dropdown states

3. **Autocomplete States:**
   - Same as TextField + option states (hover, selected, focus)

---

## 🔍 Verification Checklist

### **Colors:**
- [ ] Button hover overlay opacity matches Figma
- [ ] Button active/pressed overlay opacity matches Figma
- [ ] Button focus ring color matches Figma
- [ ] Button focus ring width/offset matches Figma
- [ ] Input border colors match Figma (all states)
- [ ] Input label colors match Figma (all states)
- [ ] Disabled states use correct opacity/colors

### **Sizes:**
- [ ] Focus ring width correct for buttons
- [ ] Focus ring offset correct for buttons
- [ ] Input border width correct (default: 1px, focus: 2px)
- [ ] Focus ring for inputs (if applicable)

### **Behavior:**
- [ ] Transition durations match Figma
- [ ] State priorities correct (focus > hover > active)
- [ ] Combined states handled correctly

---

## 📝 Next Steps

**To complete this audit, we need:**

1. **Figma Variable Screenshots** for component states showing:
   - State colors (hover, focus, active, pressed, disabled)
   - State opacities/overlays
   - Focus ring specifications (color, width, offset)
   - Border specifications for inputs (width, color per state)

2. **Figma Interaction/Prototype Details** showing:
   - Transition durations
   - Easing functions
   - State layering (e.g., hover + focus)

3. **Comparison & Implementation**:
   - Compare current tokens with Figma variables
   - Identify gaps
   - Implement missing states
   - Adjust existing states to match exactly

---

**Status**: ⚠️ **AWAITING FIGMA SPECIFICATIONS**

Please provide Figma screenshots or variable exports for component states so we can verify and ensure 100% match.
