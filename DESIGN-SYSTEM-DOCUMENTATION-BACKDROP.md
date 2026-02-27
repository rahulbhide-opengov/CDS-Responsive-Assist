# Backdrop Component Documentation

## Overview
The Backdrop component creates a semi-transparent overlay that appears behind modal components like Dialogs, Drawers, and Menus. It darkens the background content, focuses user attention on the foreground element, and can be clicked to close the overlay.

**Component Type:** Utility / Overlay Component
**Based on:** Material-UI (MUI) v6.1.0 Backdrop
**Documentation:** [MUI Backdrop API](https://mui.com/api/backdrop)

---

## Design Tokens

### Color Tokens
```typescript
// Uses CDS color system
'--component/backdrop/bg-color': 'rgba(0, 0, 0, 0.5)',        // 50% black (default)
'--component/backdrop/bg-color-light': 'rgba(0, 0, 0, 0.3)',  // 30% black (light)
'--component/backdrop/bg-color-dark': 'rgba(0, 0, 0, 0.7)',   // 70% black (dark)
'--component/backdrop/invisible': 'transparent',               // Invisible variant
```

### Z-Index Tokens
```typescript
// Uses CDS z-index system
'--component/backdrop/z-index-modal': '1300',       // Behind modal (1400)
'--component/backdrop/z-index-drawer': '1199',      // Behind drawer (1200)
'--component/backdrop/z-index-custom': '1050',      // Custom overlays
```

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/backdrop/transition-duration': 'var(--transition/duration/standard, 300ms)',
'--component/backdrop/transition-easing': 'var(--transition/easing/ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
```

---

## Component Anatomy

### Backdrop Overlay
- **Position:** Fixed (covers entire viewport)
- **Top:** 0
- **Left:** 0
- **Width:** 100vw
- **Height:** 100vh
- **Background:** Black with opacity
- **Z-Index:** Below modal content
- **Cursor:** Default or pointer (if clickable)

### Click Handler
- **Action:** Close overlay
- **Target:** Entire backdrop area
- **Behavior:** Optional (can be disabled)
- **Use Case:** Click outside to dismiss

---

## Opacity Variants

### Standard (50%)
- **Opacity:** `rgba(0, 0, 0, 0.5)`
- **Use Case:** Default modals, standard overlays
- **Visual:** Moderate darkening
- **Readability:** Background still somewhat visible

### Light (30%)
- **Opacity:** `rgba(0, 0, 0, 0.3)`
- **Use Case:** Less intrusive overlays, drawers
- **Visual:** Subtle darkening
- **Readability:** Background more visible

### Dark (70%)
- **Opacity:** `rgba(0, 0, 0, 0.7)`
- **Use Case:** High-focus modals, critical dialogs
- **Visual:** Strong darkening
- **Readability:** Background barely visible

### Invisible
- **Opacity:** `transparent`
- **Use Case:** Click detection without visual overlay
- **Visual:** No darkening
- **Readability:** Background fully visible

---

## Z-Index Levels

### Modal Backdrop (1300)
- **Purpose:** Behind Dialog, Modal
- **Value:** 1300
- **Content Z-Index:** 1400
- **Use Case:** Dialog overlays

### Drawer Backdrop (1199)
- **Purpose:** Behind Drawer
- **Value:** 1199
- **Content Z-Index:** 1200
- **Use Case:** Navigation drawer overlays

### Custom Backdrop (1050)
- **Purpose:** Custom overlays
- **Value:** 1050
- **Content Z-Index:** 1100+
- **Use Case:** Popover, custom components

---

## Usage Guidelines

### When to Use
- Behind modal dialogs
- Behind temporary drawers
- Behind full-screen overlays
- Loading screens (with spinner)
- Image galleries/lightboxes
- Video players (full-screen)
- Focus mode overlays
- Click-outside detection

### When NOT to Use
- Permanent UI elements
- Non-modal content
- Inline overlays
- Tooltips or popovers (usually)
- App bars or navigation
- Decorative purposes only

### Best Practices

#### Do
- Use appropriate opacity (50% standard)
- Set correct z-index (below content)
- Allow click to close (when appropriate)
- Animate fade in/out smoothly
- Use with modal components
- Block scroll on background content
- Provide escape key to close
- Use dark backdrop for critical modals

#### Don't
- Make backdrop too dark (> 80%)
- Use without modal content
- Forget transition animation
- Block all interactions permanently
- Use for decorative overlays
- Forget to clean up on unmount
- Make backdrop click-only (provide close button too)
- Use multiple backdrops simultaneously

---

## Component Integration (CDS Base Components)

### With CDS Dialog
```typescript
import Dialog from '@mui/material/Dialog';
import Backdrop from '@mui/material/Backdrop';

<Dialog
  open={open}
  onClose={handleClose}
  BackdropComponent={Backdrop}
  BackdropProps={{
    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  }}
>
  {/* Dialog content */}
</Dialog>
```

### With CDS Drawer
```typescript
import Drawer from '@mui/material/Drawer';

<Drawer
  open={open}
  onClose={handleClose}
  ModalProps={{
    BackdropProps: {
      sx: { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
    }
  }}
>
  {/* Drawer content */}
</Drawer>
```

### With CDS CircularProgress
```typescript
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

<Backdrop open={loading} sx={{ zIndex: 1400 }}>
  <CircularProgress color="inherit" />
</Backdrop>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<!-- Backdrop is typically decorative -->
<div
  class="backdrop"
  aria-hidden="true"
  onclick="handleClose()"
></div>
```

#### ARIA Attributes
```typescript
{
  // Backdrop itself
  "aria-hidden": "true",       // Not announced by screen readers

  // Modal content behind backdrop
  "aria-modal": "true",        // On modal content
  role: "dialog",              // On modal content
}
```

#### Keyboard Navigation
- **Escape:** Should close backdrop and modal
- **Tab:** Focus stays within modal (focus trap)
- **Click:** Optional close on backdrop click

#### Focus Management
- Focus moves to modal when backdrop opens
- Focus trapped within modal
- Focus returns to trigger when backdrop closes
- Backdrop itself not focusable

#### Screen Reader Support
- Backdrop marked aria-hidden="true"
- Modal content announced, not backdrop
- Close action announced when triggered
- Background content inert (not accessible)

---

## Code Examples

### Basic Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

export default function BasicBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Typography>Click anywhere to close</Typography>
      </Backdrop>
    </>
  );
}
```

### Backdrop with Loading Spinner
```tsx
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingBackdrop() {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <>
      <Button onClick={handleLoad}>Load Data</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
```

### Custom Opacity Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';

export default function CustomOpacityBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Light Backdrop</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      />
    </>
  );
}
```

### Backdrop with Content
```tsx
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ContentBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Content</Button>
      <Backdrop
        open={open}
        sx={{ zIndex: 1400 }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <Typography paragraph>
            This content won't close when clicked.
          </Typography>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Box>
      </Backdrop>
    </>
  );
}
```

### Invisible Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';

export default function InvisibleBackdrop() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Invisible</Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        invisible
      />
    </>
  );
}
```

### Non-Dismissible Backdrop
```tsx
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function NonDismissibleBackdrop() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button onClick={() => setLoading(true)}>Start Loading</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: 1400 }}
        open={loading}
        // No onClick handler - can't dismiss by clicking
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress color="inherit" />
          <Typography sx={{ mt: 2 }}>Loading... Please wait</Typography>
        </Box>
      </Backdrop>
    </>
  );
}
```

---

## Common Patterns

### Loading Overlay
```tsx
<Backdrop open={loading} sx={{ zIndex: 1400 }}>
  <CircularProgress color="primary" />
</Backdrop>
```

### Dialog Backdrop
```tsx
<Dialog
  open={open}
  onClose={handleClose}
  BackdropProps={{
    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  }}
>
  {/* Dialog content */}
</Dialog>
```

### Image Lightbox
```tsx
<Backdrop open={showImage} onClick={handleClose} sx={{ zIndex: 1400 }}>
  <img src={imageSrc} alt="Full size" style={{ maxWidth: '90%', maxHeight: '90%' }} />
</Backdrop>
```

### Drawer Backdrop
```tsx
<Drawer
  open={open}
  onClose={handleClose}
  ModalProps={{
    BackdropProps: {
      sx: { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
    }
  }}
>
  {/* Drawer content */}
</Drawer>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Same behavior across all devices
- Full viewport coverage
- Touch-enabled close on backdrop
- May use lighter opacity (30%)

### Tablet (600px - 960px)
- Same behavior
- Full viewport coverage
- Standard opacity (50%)

### Desktop (> 960px)
- Same behavior
- Full viewport coverage
- Standard opacity (50%)
- Mouse click to close

---

## CDS Token Integration

### Uses CDS Colors
```typescript
background: rgba(0, 0, 0, 0.5);    // Standard backdrop
background: rgba(0, 0, 0, 0.3);    // Light variant
background: rgba(0, 0, 0, 0.7);    // Dark variant
background: transparent;            // Invisible
```

### Uses CDS Z-Index
```typescript
z-index: 1300;  // Modal backdrop (CDS modal level - 100)
z-index: 1199;  // Drawer backdrop (CDS drawer level - 1)
z-index: 1050;  // Custom overlays
```

### Uses CDS Transitions
```typescript
transition-duration: var(--transition/duration/standard, 300ms);
transition-timing-function: var(--transition/easing/ease-in-out);
```

---

## Total Variant Combinations

**Opacity Levels:** 4 (Standard 50%, Light 30%, Dark 70%, Invisible)
**Z-Index Levels:** 3 (Modal 1300, Drawer 1199, Custom 1050)
**Interaction:** 2 (Clickable, Non-clickable)

**Total Combinations:** 4 × 3 × 2 = **24 configurations**

---

## Related Components
- **Dialog:** Uses backdrop for modal overlay (CDS component)
- **Drawer:** Uses backdrop for temporary drawer (CDS component)
- **Modal:** Base component using backdrop
- **CircularProgress:** Often used with backdrop for loading (CDS component)
- **Menu:** May use subtle backdrop

---

## Figma Design Reference
- **Component:** Backdrop / Overlay
- **Opacity:** 50% (standard), 30% (light), 70% (dark)
- **Z-Index:** 1300 (modal), 1199 (drawer)
- **Based on CDS:** Uses CDS z-index and transition tokens
- **Documentation:** [MUI Backdrop API](https://mui.com/api/backdrop)

---

## Migration Notes

### Integration with CDS
- **Opacity:** 50% standard (0.5 alpha)
- **Z-Index:** Uses CDS z-index levels (1199, 1300)
- **Transitions:** Uses CDS transition timing (300ms)
- **Colors:** Black with varying opacity
- **Integration:** Works with CDS Dialog, Drawer, CircularProgress

### Design Tokens Required
- **Z-index tokens:** 1199 (drawer level - 1), 1300 (modal level - 100)
- **Transition tokens:** 300ms duration, ease-in-out timing
- **Color tokens:** Black (0, 0, 0) with opacity variants

---

## Performance Considerations

- Backdrop is lightweight (single div)
- Uses CSS opacity and z-index (no JavaScript)
- Transition animations GPU-accelerated
- Fixed positioning efficient
- Avoid rendering heavy content on backdrop
- Clean up on unmount (remove from DOM)
- Use `invisible` prop instead of `opacity: 0` when possible

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS z-index and transition systems
- 24 configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Utility component for modal overlays
