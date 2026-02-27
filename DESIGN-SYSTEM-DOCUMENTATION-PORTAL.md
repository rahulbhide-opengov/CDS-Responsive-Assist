# Portal Component Documentation

## Overview
The Portal component renders children into a DOM node that exists outside the parent component's DOM hierarchy. It provides a way to render content at a different location in the DOM tree, which is useful for modals, tooltips, and other overlay components that need to escape parent container constraints like overflow, z-index, or positioning.

**Component Type:** Utility Component
**Based on:** Material-UI (MUI) v6.1.0 Portal
**Documentation:** [MUI Portal API](https://mui.com/api/portal)

---

## Design Tokens

Portal is a utility component with no visual styling. It uses the parent component's tokens.

```typescript
// No specific design tokens - utility component
// Inherits styling from children components
```

---

## Component Anatomy

### Portal Container
- **Render Location:** Outside parent DOM hierarchy
- **Default Container:** `document.body`
- **Custom Container:** Any DOM element
- **Children:** Any React elements
- **Visibility:** Determined by children

### Key Characteristics
- **No Styling:** Portal itself adds no styling
- **DOM Escape:** Breaks out of parent stacking context
- **Event Bubbling:** React events still bubble to parent
- **Accessibility:** Screen readers follow React tree, not DOM tree

---

## Use Cases

### When to Use
- **Modals/Dialogs:** Prevent overflow/z-index issues
- **Tooltips:** Render above all content
- **Popovers:** Escape parent constraints
- **Dropdowns:** Avoid clipping by overflow: hidden
- **Full-screen overlays:** Render at body level
- **Custom positioning:** Need to escape parent stacking context
- **Sticky elements:** That need different positioning context

### When NOT to Use
- **Normal content flow:** Use regular components
- **Simple layouts:** No parent constraints
- **SEO-critical content:** Portal content may affect crawling
- **Server-side rendering:** Can cause hydration issues if not careful
- **Simple tooltips:** Use Tooltip component (has built-in Portal)

---

## Container Options

### Default (document.body)
```typescript
<Portal>
  <div>Renders in document.body</div>
</Portal>
```
- **Container:** `document.body`
- **Use Case:** Most common, full-page overlays
- **Default:** When no container specified

### Custom Container
```typescript
const container = document.getElementById('custom-root');

<Portal container={container}>
  <div>Renders in custom container</div>
</Portal>
```
- **Container:** Any DOM element
- **Use Case:** Specific placement requirements
- **Flexibility:** Full control over render location

### Disabled Portal
```typescript
<Portal disablePortal>
  <div>Renders in normal DOM position</div>
</Portal>
```
- **Behavior:** Acts like normal React component
- **Use Case:** Conditional portal behavior
- **Testing:** Easier to test without portal

---

## Component Integration (CDS Base Components)

### With CDS Modal/Dialog
```typescript
import Portal from '@mui/material/Portal';
import { useState } from 'react';

function ModalWithPortal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '4px' }}>
              <h2>Modal Content</h2>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
```

### With CDS Tooltip (Custom)
```typescript
import Portal from '@mui/material/Portal';
import { useState, useRef } from 'react';

function CustomTooltip({ children, tooltip }) {
  const [show, setShow] = useState(false);
  const anchorRef = useRef(null);

  return (
    <>
      <span
        ref={anchorRef}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && (
        <Portal>
          <div style={{
            position: 'absolute',
            top: anchorRef.current?.getBoundingClientRect().bottom + 8,
            left: anchorRef.current?.getBoundingClientRect().left,
            background: '#616161',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1500,
          }}>
            {tooltip}
          </div>
        </Portal>
      )}
    </>
  );
}
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Focus Management
```typescript
// Portal doesn't affect React focus order
<Portal>
  <button>Still in React focus order</button>
</Portal>
```

#### Screen Reader Considerations
- **React Tree:** Screen readers follow React tree, not DOM order
- **ARIA:** All ARIA attributes work normally
- **Navigation:** Keyboard navigation follows React order
- **Announcement:** Content changes announced correctly

#### Best Practices
- Use Portal for visual positioning only
- Maintain logical focus order in React tree
- Provide proper ARIA labels
- Ensure keyboard accessibility
- Test with screen readers

---

## Code Examples

### Basic Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function BasicPortal() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Portal Content
      </button>
      {show && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1300,
          }}>
            <h3>Portal Content</h3>
            <p>This is rendered in document.body</p>
          </div>
        </Portal>
      )}
    </div>
  );
}
```

### Custom Container Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState, useRef, useEffect } from 'react';

export default function CustomContainerPortal() {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Portal</button>
      
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          marginTop: '20px',
          padding: '20px',
          border: '2px dashed #ccc',
          minHeight: '200px',
        }}
      >
        <p>Custom Portal Container</p>
        {show && containerRef.current && (
          <Portal container={containerRef.current}>
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '10px',
              background: 'lightblue',
              borderRadius: '4px',
            }}>
              Portal content in custom container
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
}
```

### Conditional Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function ConditionalPortal() {
  const [usePortal, setUsePortal] = useState(true);

  return (
    <div style={{ overflow: 'hidden', height: '200px', border: '1px solid #ccc' }}>
      <label>
        <input
          type="checkbox"
          checked={usePortal}
          onChange={(e) => setUsePortal(e.target.checked)}
        />
        Use Portal (escape overflow)
      </label>
      
      <Portal disablePortal={!usePortal}>
        <div style={{
          marginTop: '150px',
          padding: '10px',
          background: 'yellow',
        }}>
          {usePortal ? 'Escaped overflow!' : 'Clipped by overflow'}
        </div>
      </Portal>
    </div>
  );
}
```

### Tooltip Portal
```tsx
import Portal from '@mui/material/Portal';
import { useState, useRef } from 'react';

export default function TooltipPortal() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
      setShow(true);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
      >
        Hover me
      </button>
      {show && (
        <Portal>
          <div style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            padding: '4px 8px',
            background: '#616161',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            pointerEvents: 'none',
            zIndex: 1500,
          }}>
            Tooltip content
          </div>
        </Portal>
      )}
    </>
  );
}
```

### Fullscreen Overlay
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function FullscreenOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Fullscreen</button>
      {open && (
        <Portal>
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1400,
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '8px',
              maxWidth: '500px',
            }}>
              <h2>Fullscreen Content</h2>
              <p>This overlay is rendered at document.body level.</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
```

### Multiple Portals
```tsx
import Portal from '@mui/material/Portal';
import { useState } from 'react';

export default function MultiplePortals() {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{ marginLeft: '10px' }}
      >
        Hover for Tooltip
      </button>

      {showModal && (
        <Portal>
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '4px' }}>
              <h3>Modal</h3>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}

      {showTooltip && (
        <Portal>
          <div style={{
            position: 'fixed',
            top: '100px',
            left: '200px',
            padding: '4px 8px',
            background: '#616161',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1500,
          }}>
            Tooltip
          </div>
        </Portal>
      )}
    </>
  );
}
```

---

## Common Patterns

### Modal/Dialog Base
```tsx
{isOpen && (
  <Portal>
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
      </div>
    </div>
  </Portal>
)}
```

### Dropdown Menu
```tsx
{isOpen && (
  <Portal>
    <div style={{
      position: 'absolute',
      top: anchorPosition.bottom,
      left: anchorPosition.left,
      zIndex: 1300,
    }}>
      {menuItems}
    </div>
  </Portal>
)}
```

### Toast Notification
```tsx
<Portal>
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1400,
  }}>
    {notifications}
  </div>
</Portal>
```

---

## Server-Side Rendering (SSR)

### SSR Considerations
```tsx
import Portal from '@mui/material/Portal';
import { useEffect, useState } from 'react';

function SSRSafePortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Portal>{children}</Portal>;
}
```

### Hydration Issues
- Portal renders to `document.body` by default
- Server doesn't have `document.body`
- Use `useEffect` to delay portal rendering
- Or use `disablePortal` during SSR

---

## Performance Considerations

### Best Practices
- Portal is very lightweight (no performance overhead)
- Creates minimal DOM nodes
- React events work normally (bubble through React tree)
- Clean up portal content on unmount
- Avoid creating many portal instances simultaneously
- Use conditional rendering to mount/unmount

### Memory Management
```tsx
// Good - Portal unmounts when component unmounts
{show && <Portal>{content}</Portal>}

// Good - Cleanup happens automatically
useEffect(() => {
  return () => {
    // Portal content automatically removed
  };
}, []);
```

---

## CDS Token Integration

Portal itself has no styling. Components rendered inside Portal should use CDS tokens:

```tsx
<Portal>
  <Box sx={{
    position: 'fixed',
    bgcolor: 'background.paper',
    boxShadow: 8,
    borderRadius: 1,
    p: 3,
    zIndex: 'modal',
  }}>
    Content using CDS tokens
  </Box>
</Portal>
```

---

## Related Components

- **Modal** - Uses Portal internally (CDS component)
- **Dialog** - Uses Portal internally (CDS component)
- **Popover** - Uses Portal internally (CDS component)
- **Menu** - Uses Portal internally (CDS component)
- **Tooltip** - Uses Portal internally (CDS component)
- **Drawer** - Uses Portal for temporary variant (CDS component)

**Note:** Most overlay components in MUI use Portal internally, so you rarely need to use Portal directly.

---

## Figma Design Reference

Portal is a utility component with no visual representation in Figma.

**Documentation:** [MUI Portal API](https://mui.com/api/portal)

---

## Migration Notes

### Integration with CDS
- **Utility Only:** Portal provides no styling
- **Use with CDS Components:** Combine with Box, Paper, etc. for styled content
- **Z-Index:** Use CDS z-index tokens for proper layering
- **Events:** React event system works normally through Portal

### Design Tokens Required
- None directly (Portal is unstyled)
- Use CDS tokens on children components

---

## Testing

### Unit Testing
```tsx
import { render } from '@testing-library/react';
import Portal from '@mui/material/Portal';

test('renders children in portal', () => {
  const { container } = render(
    <Portal>
      <div data-testid="portal-content">Content</div>
    </Portal>
  );
  
  // Content is not in container (rendered in document.body)
  expect(container.querySelector('[data-testid="portal-content"]')).toBeNull();
  
  // Content is in document.body
  expect(document.querySelector('[data-testid="portal-content"]')).toBeInTheDocument();
});
```

### Testing with disablePortal
```tsx
test('renders children normally when disabled', () => {
  const { container } = render(
    <Portal disablePortal>
      <div data-testid="portal-content">Content</div>
    </Portal>
  );
  
  // Content is in container when portal disabled
  expect(container.querySelector('[data-testid="portal-content"]')).toBeInTheDocument();
});
```

---

## Debugging Tips

### Common Issues

**Issue:** Portal content not visible
- **Check:** Z-index value
- **Check:** Position is set (absolute/fixed)
- **Check:** Container element exists

**Issue:** Events not working
- **Solution:** React events work normally - check event handlers

**Issue:** SSR hydration mismatch
- **Solution:** Use `useEffect` to delay portal rendering

**Issue:** Focus management problems
- **Solution:** Manually manage focus with refs

---

## Version History

- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Utility component for DOM rendering outside parent hierarchy
- No visual styling (utility only)
- Works with all CDS components
- Full React event compatibility

---

## Best Practices Summary

### Do
- Use Portal for overlays that need to escape parent constraints
- Clean up portal content on unmount
- Use CDS tokens on content inside Portal
- Handle SSR carefully with useEffect
- Test portal behavior in different scenarios
- Use z-index tokens for proper layering

### Don't
- Use Portal for normal content flow
- Forget to clean up on unmount
- Create too many simultaneous portals
- Ignore SSR considerations
- Use without proper positioning
- Forget accessibility in portal content

---

**Portal is a low-level utility. Most developers should use higher-level components like Dialog, Popover, or Menu that use Portal internally.**
