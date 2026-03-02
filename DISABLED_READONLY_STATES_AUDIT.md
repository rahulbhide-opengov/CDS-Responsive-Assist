# Disabled & Read-Only States Audit

**Date**: 2026-03-02
**Purpose**: Verify disabled and read-only states match Figma specifications

---

## 🎯 Current Status

### **Disabled State Tokens** ✅ Defined

Located in: `src/theme/tokens.ts:149-170`

```typescript
// Text
text: {
  disabled: 'rgba(0, 0, 0, 0.38)',   // 38% opacity - Disabled text
}

// Background
background: {
  tertiary: '#f2f2f2',  // Disabled/inactive backgrounds
}

// Action
action: {
  disabled: 'rgba(0, 0, 0, 0.26)',         // Disabled elements - 26%
  disabledBackground: 'rgba(0, 0, 0, 0.12)', // Disabled button backgrounds - 12%
  disabledOpacity: 0.38,
}
```

---

## 🔘 Button Disabled State

### **Current Implementation**

**Status**: ⚠️ **PARTIALLY IMPLEMENTED** (Using MUI defaults)

**File**: `src/components/Button.tsx`

#### **What's Currently Used:**
```typescript
// Button component just passes disabled prop to MUI
disabled={disabled || loading}

// No explicit CDS disabled styling in StyledMuiButton
// Relies on MUI theme defaults
```

#### **MUI Default Disabled Styles** (from theme):
```typescript
// These are applied by MUI, NOT explicitly in our code
'&.Mui-disabled': {
  opacity: 0.38,  // Or similar
  pointerEvents: 'none',
  // MUI handles colors/backgrounds
}
```

### **What's Missing:**
- ❌ No explicit disabled background color using `action.disabledBackground`
- ❌ No explicit disabled text color using `text.disabled`
- ❌ No CDS-specific disabled styling
- ❌ Not verified against Figma specs

### **What Should Be Implemented:**

Based on typical design systems, disabled buttons should have:
1. **Background**: Specific disabled background color (not just opacity)
2. **Text**: Disabled text color
3. **Border**: Disabled border color (for outlined buttons)
4. **Cursor**: `not-allowed` or `default`
5. **Pointer Events**: `none`

---

## 📝 Input Field Disabled State

### **Current Implementation**

**Status**: ⚠️ **PARTIALLY IMPLEMENTED**

**File**: `src/components/Form.tsx`

#### **TextField Disabled State:**

Currently has NO explicit disabled styling in `StyledMuiTextField`.

**What's Used:**
```typescript
// Only passes disabled prop to MUI
disabled={disabled}

// MUI handles disabled state with default styling
// No CDS-specific disabled styling
```

#### **OutlinedInput Disabled State:**

Has minimal disabled styling:

```typescript
'&.Mui-disabled': {
  backgroundColor: theme.palette.action.disabledBackground,
}
```

**Only background color is set!**

### **What's Missing:**
- ❌ No explicit disabled border color
- ❌ No explicit disabled text color for input value
- ❌ No explicit disabled label color
- ❌ No disabled placeholder color
- ❌ No cursor styling
- ❌ Not verified against Figma specs

### **What Should Be Implemented:**

Disabled input fields should have:
1. **Background**: Disabled background color
2. **Border**: Disabled border color and width
3. **Text/Value**: Disabled text color
4. **Label**: Disabled label color
5. **Placeholder**: Disabled placeholder color
6. **Helper Text**: Disabled helper text color
7. **Cursor**: `not-allowed`

---

## 📖 Read-Only State

### **Current Implementation**

**Status**: ❌ **NOT IMPLEMENTED AT ALL**

#### **TextField:**
- ❌ No `readOnly` prop in interface
- ❌ No read-only styling

#### **OutlinedInput:**
- ❌ No `readOnly` prop in interface
- ❌ No read-only styling

#### **Select:**
- ❌ No `readOnly` prop in interface
- ❌ No read-only styling

#### **Autocomplete:**
- ❌ No `readOnly` prop in interface
- ❌ No read-only styling

#### **Rating:**
- ✅ Has `readOnly` prop (line 163 in FormExtended.tsx)
- ✅ MUI Rating component supports read-only natively

### **What's Needed:**

Read-only inputs should have:
1. **Prop**: `readOnly?: boolean` in component interfaces
2. **Background**: Read-only background color (often same as disabled)
3. **Border**: Read-only border color (often different from disabled)
4. **Text/Value**: Normal text color (readable, unlike disabled)
5. **Cursor**: `default` or `text` (not `not-allowed`)
6. **Interaction**: No editing, but can focus, select, copy
7. **Visual Distinction**: Different from disabled (typically clearer/darker text)

---

## 🎨 Figma Specifications Needed

To implement disabled and read-only states correctly, I need the following from Figma:

### **1. Button Disabled State**

For each button variant (Primary, Secondary, Tertiary, etc.):

**Screenshots or Variables for:**
- ❓ Disabled background color (exact hex or RGBA)
- ❓ Disabled text color (exact hex or RGBA)
- ❓ Disabled border color (for outlined buttons)
- ❓ Disabled opacity (if overlay used instead of solid color)
- ❓ Disabled cursor style
- ❓ Any shadows/elevation for disabled state

**Example of what I need:**
```
Primary Button Disabled:
- Background: #E0E0E0 or rgba(0, 0, 0, 0.12)
- Text: rgba(0, 0, 0, 0.38)
- Border: N/A (contained button)
- Opacity: 1.0 (no additional opacity)
- Cursor: not-allowed

Secondary Button Disabled:
- Background: transparent
- Text: rgba(0, 0, 0, 0.38)
- Border: rgba(0, 0, 0, 0.26)
- Opacity: 1.0
- Cursor: not-allowed
```

---

### **2. Input Field Disabled State**

For TextField, Select, Autocomplete:

**Screenshots or Variables for:**
- ❓ Disabled background color
- ❓ Disabled border color
- ❓ Disabled border width (same as default or different?)
- ❓ Disabled input value/text color
- ❓ Disabled label color (floating label)
- ❓ Disabled placeholder text color
- ❓ Disabled helper text color
- ❓ Disabled cursor style
- ❓ Any disabled icons color (dropdown arrow, etc.)

**Example of what I need:**
```
TextField Disabled:
- Background: #F5F5F5 or transparent
- Border: 1px solid rgba(0, 0, 0, 0.26)
- Input Text: rgba(0, 0, 0, 0.38)
- Label: rgba(0, 0, 0, 0.38)
- Placeholder: rgba(0, 0, 0, 0.26)
- Helper Text: rgba(0, 0, 0, 0.38)
- Cursor: not-allowed
```

---

### **3. Input Field Read-Only State**

For TextField, Select, Autocomplete:

**Screenshots or Variables for:**
- ❓ Read-only background color
- ❓ Read-only border color
- ❓ Read-only border width
- ❓ Read-only input value/text color
- ❓ Read-only label color
- ❓ Read-only cursor style (typically `default` not `not-allowed`)
- ❓ Any read-only icons color
- ❓ Visual indicator that field is read-only (icon, badge, border style?)

**Example of what I need:**
```
TextField Read-Only:
- Background: #F9F9F9 or transparent
- Border: 1px solid rgba(0, 0, 0, 0.23)
- Input Text: rgba(0, 0, 0, 0.87) [DARKER than disabled]
- Label: rgba(0, 0, 0, 0.6)
- Cursor: default (not not-allowed)
- Icon: Optional read-only indicator
```

**Key Difference from Disabled:**
- Read-only text should be MORE readable than disabled
- Read-only can be focused and text can be selected/copied
- Read-only has `cursor: default` NOT `cursor: not-allowed`

---

### **4. Checkbox/Radio/Switch Disabled State**

**Screenshots or Variables for:**
- ❓ Disabled background/box color (unchecked)
- ❓ Disabled border color (unchecked)
- ❓ Disabled checkmark/dot color (checked)
- ❓ Disabled background color (checked)
- ❓ Disabled label text color
- ❓ Disabled opacity or solid color

**Example of what I need:**
```
Checkbox Disabled (unchecked):
- Border: rgba(0, 0, 0, 0.26)
- Background: transparent
- Label: rgba(0, 0, 0, 0.38)

Checkbox Disabled (checked):
- Background: rgba(0, 0, 0, 0.26)
- Checkmark: rgba(255, 255, 255, 0.38)
- Label: rgba(0, 0, 0, 0.38)
```

---

## 📋 Implementation Checklist

Once Figma specs are provided, I will:

### **Phase 1: Buttons**
- [ ] Add explicit disabled styling to StyledMuiButton
- [ ] Set disabled background color from tokens
- [ ] Set disabled text color from tokens
- [ ] Set disabled border color (for outlined variants)
- [ ] Add disabled cursor style
- [ ] Test all button variants (primary, secondary, tertiary, etc.)

### **Phase 2: Input Fields - Disabled**
- [ ] Add explicit disabled styling to TextField
- [ ] Set disabled background color
- [ ] Set disabled border color and width
- [ ] Set disabled input text color
- [ ] Set disabled label color
- [ ] Set disabled placeholder color
- [ ] Set disabled helper text color
- [ ] Add disabled cursor style
- [ ] Apply same to Select, Autocomplete, OutlinedInput

### **Phase 3: Input Fields - Read-Only**
- [ ] Add `readOnly?: boolean` prop to TextField interface
- [ ] Add read-only styling (different from disabled)
- [ ] Set read-only background color
- [ ] Set read-only border color
- [ ] Keep text color readable (darker than disabled)
- [ ] Set cursor to `default` (not `not-allowed`)
- [ ] Allow focus and text selection
- [ ] Apply same to Select, Autocomplete, OutlinedInput

### **Phase 4: Checkboxes/Radios/Switches**
- [ ] Add explicit disabled styling
- [ ] Set disabled colors for unchecked state
- [ ] Set disabled colors for checked state
- [ ] Set disabled label colors
- [ ] Add disabled cursor style

### **Phase 5: Token Updates** (if needed)
- [ ] Update token values if Figma specs differ
- [ ] Add new tokens if needed (e.g., read-only specific)
- [ ] Update theme to use correct tokens

---

## 🔍 Current Token Values vs Typical Figma Values

### **What We Have:**
```typescript
text.disabled: rgba(0, 0, 0, 0.38)           // 38% opacity
action.disabled: rgba(0, 0, 0, 0.26)         // 26% opacity
action.disabledBackground: rgba(0, 0, 0, 0.12) // 12% opacity
background.tertiary: #f2f2f2                 // Solid grey
```

### **Questions:**
1. Are these opacity values correct per Figma?
2. Should disabled backgrounds use solid colors (#f2f2f2) or transparent overlays (rgba)?
3. Do different components have different disabled colors?
4. Are read-only states visually different from disabled?

---

## 📸 What I Need From You

Please provide ONE of the following:

### **Option 1: Figma Screenshots** (Preferred)
Take screenshots from Figma showing:
1. Button in disabled state (for each variant)
2. TextField in disabled state
3. TextField in read-only state (if exists)
4. Checkbox/Radio in disabled state (checked and unchecked)

### **Option 2: Figma Variables Export**
Export the Figma variables for:
- Disabled text colors
- Disabled background colors
- Disabled border colors
- Read-only colors (if different from disabled)

### **Option 3: Color Specifications**
Provide exact values like:
```
Button Disabled:
- Background: #E0E0E0
- Text: rgba(0, 0, 0, 0.38)
- Border (outlined): rgba(0, 0, 0, 0.26)

TextField Disabled:
- Background: #F5F5F5
- Border: 1px solid rgba(0, 0, 0, 0.23)
- Text: rgba(0, 0, 0, 0.38)
- Label: rgba(0, 0, 0, 0.38)

TextField Read-Only:
- Background: transparent
- Border: 1px solid rgba(0, 0, 0, 0.23)
- Text: rgba(0, 0, 0, 0.87)
- Label: rgba(0, 0, 0, 0.6)
```

---

## ⏭️ Next Steps

1. **You provide**: Figma specifications for disabled and read-only states
2. **I will**:
   - Compare with current implementation
   - Update tokens if needed
   - Implement explicit disabled styling for all components
   - Add read-only prop and styling to input fields
   - Test all states across all components
   - Commit and push changes

---

**Status**: ⚠️ **AWAITING FIGMA SPECIFICATIONS**

Please provide Figma screenshots or specifications for disabled and read-only states so I can ensure 100% match.
