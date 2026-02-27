# Progress Component Documentation

## Overview
The Progress component provides visual feedback about the duration and state of operations. It includes Linear and Circular variants to indicate determinate (known duration) and indeterminate (unknown duration) loading states.

**Component Type:** Feedback / Loading Indicator
**Based on:** Material-UI (MUI) v6.1.0 LinearProgress & CircularProgress
**Documentation:** [MUI LinearProgress](https://mui.com/api/linear-progress) | [MUI CircularProgress](https://mui.com/api/circular-progress)

---

## Design Tokens

### Linear Progress Tokens
```typescript
'--component/linear-progress/height': '4px',
'--component/linear-progress/border-radius': '2px',
'--component/linear-progress/buffer-dot-size': '10px',
```

### Circular Progress Tokens
```typescript
'--component/circular-progress/size-small': '16px',
'--component/circular-progress/size-medium': '32px',
'--component/circular-progress/size-large': '40px',
'--component/circular-progress/thickness': '3.6',
```

### Color Tokens - Primary
```typescript
'--component/progress/primary/color': '#4b3fff',
'--component/progress/primary/bg-color': 'rgba(75, 63, 255, 0.3)',
```

### Color Tokens - Secondary
```typescript
'--component/progress/secondary/color': '#dc004e',
'--component/progress/secondary/bg-color': 'rgba(220, 0, 78, 0.3)',
```

### Color Tokens - Inherit
```typescript
'--component/progress/inherit/color': 'currentColor',
'--component/progress/inherit/bg-color': 'rgba(0, 0, 0, 0.3)',
```

### Animation Tokens
```typescript
'--component/progress/animation-duration': '2.1s',
'--component/progress/animation-timing': 'linear',
```

---

## Component Types

### Linear Progress
- **Shape:** Horizontal bar
- **Height:** 4px
- **Use Case:** File uploads, page loads, step progress
- **Variants:** Determinate, Indeterminate, Buffer

### Circular Progress
- **Shape:** Circular spinner
- **Sizes:** 16px (small), 32px (medium), 40px (large)
- **Use Case:** Loading buttons, inline loading, page spinners
- **Variants:** Determinate, Indeterminate

---

## Linear Progress Variants

### Determinate
- **Progress:** Shows specific percentage (0-100%)
- **Visual:** Filled bar from left to right
- **Use Case:** Known duration operations (file uploads, downloads)
- **Behavior:** Static or incrementally updates

### Indeterminate
- **Progress:** Unknown completion time
- **Visual:** Animated bar moving left to right continuously
- **Animation:** Infinite loop
- **Use Case:** Unknown duration operations (API calls, processing)

### Buffer
- **Progress:** Two-phase loading (download + processing)
- **Primary Bar:** Current progress
- **Buffer Bar:** Buffered/preloaded content
- **Visual:** Two overlapping bars with dots
- **Use Case:** Video buffering, chunked downloads
- **Behavior:** Both bars animate independently

---

## Circular Progress Variants

### Determinate
- **Progress:** Shows specific percentage (0-100%)
- **Visual:** Arc fills clockwise from top
- **Use Case:** Timed operations, countdown timers
- **Behavior:** Static or incrementally updates

### Indeterminate
- **Progress:** Unknown completion time
- **Visual:** Rotating spinner animation
- **Animation:** Infinite rotation
- **Use Case:** General loading, button states
- **Behavior:** Continuous spin

---

## Size Variants (Circular Only)

### Small (16px)
- **Diameter:** 16px
- **Stroke Width:** ~3px
- **Use Case:** Inline loading, compact UI, button loading
- **Context:** Text-level indicators

### Medium (32px - Default)
- **Diameter:** 32px
- **Stroke Width:** ~3.6px
- **Use Case:** Standard loading, cards, panels
- **Context:** Component-level indicators

### Large (40px)
- **Diameter:** 40px
- **Stroke Width:** ~4px
- **Use Case:** Page-level loading, prominent indicators
- **Context:** Full-screen or section loaders

---

## Color Variants

### Primary
- **Color:** `#4b3fff` (Blue)
- **Background:** `rgba(75, 63, 255, 0.3)` (30% opacity)
- **Use Case:** Primary actions, main loading indicators

### Secondary
- **Color:** `#dc004e` (Pink/Red)
- **Background:** `rgba(220, 0, 78, 0.3)` (30% opacity)
- **Use Case:** Secondary actions, alternative emphasis

### Inherit
- **Color:** `currentColor` (inherits from parent)
- **Background:** `rgba(0, 0, 0, 0.3)` (30% opacity)
- **Use Case:** Adapts to context, flexible theming

---

## Usage Guidelines

### When to Use
- File uploads/downloads
- Form submissions
- Data fetching
- Page transitions
- Long-running operations (> 1 second)
- Buffering content
- Button loading states
- Step progress indicators

### When NOT to Use
- Instant operations (< 300ms) - show nothing
- Very quick operations (< 1 second) - consider Skeleton
- Multiple concurrent operations - use single indicator
- Static progress - use visual meter instead

### Best Practices

#### Do
- Use determinate for known duration operations
- Use indeterminate for unknown duration
- Show progress for operations > 1 second
- Provide context text with progress
- Use buffer variant for streaming/chunked content
- Size circular progress appropriately for context
- Place near the affected content area
- Remove progress indicator when complete

#### Don't
- Show progress for instant operations
- Use determinate without accurate progress data
- Mix multiple progress indicators on screen
- Forget to handle completion state
- Use progress for decorative purposes
- Block all UI during loading
- Use tiny progress indicators (< 16px)

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### ARIA Attributes
```html
<!-- Determinate progress -->
<CircularProgress
  variant="determinate"
  value={75}
  aria-label="Loading progress"
  role="progressbar"
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
/>

<!-- Indeterminate progress -->
<CircularProgress
  aria-label="Loading"
  role="progressbar"
/>
```

#### Role Attributes
```typescript
{
  role: "progressbar",
  "aria-valuenow": number,      // Current value (determinate only)
  "aria-valuemin": 0,           // Minimum value (determinate)
  "aria-valuemax": 100,         // Maximum value (determinate)
  "aria-label": string,         // Description
  "aria-labelledby": string,    // References label element
  "aria-busy": "true",          // Indicates loading state
}
```

#### Screen Reader Support
- Announce progress updates for determinate
- Announce loading state for indeterminate
- Provide descriptive labels
- Consider live region for updates

#### Visual Considerations
- Progress must be perceivable (adequate size and contrast)
- Don't rely on color alone (provide text label)
- Animation respects `prefers-reduced-motion`
- Minimum size 16px for visibility

---

## Code Examples

### Linear Determinate
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress variant="determinate" value={progress} />
  );
}
```

### Linear Indeterminate
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <LinearProgress />
  );
}
```

### Linear Buffer
```tsx
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBuffer((oldBuffer) => {
        if (oldBuffer === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldBuffer + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress
      variant="buffer"
      value={progress}
      valueBuffer={buffer}
    />
  );
}
```

### Circular Determinate
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
```

### Circular Indeterminate
```tsx
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <CircularProgress />
  );
}
```

### Size Variants
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function CircularSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={16} />
      <CircularProgress size={32} />
      <CircularProgress size={40} />
    </Stack>
  );
}
```

### Color Variants
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function ColorProgress() {
  return (
    <Stack spacing={2}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
```

### Loading Button
```tsx
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingButton() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
    >
      {loading ? 'Loading...' : 'Submit'}
    </Button>
  );
}
```

### With Label
```tsx
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressWithLabel() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CircularProgress />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Loading data...
      </Typography>
    </Box>
  );
}
```

---

## Common Patterns

### File Upload
```tsx
<Box>
  <Typography variant="body2">Uploading...</Typography>
  <LinearProgress variant="determinate" value={uploadProgress} />
  <Typography variant="caption">{uploadProgress}%</Typography>
</Box>
```

### Page Loading
```tsx
<Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
  <CircularProgress size={40} />
</Box>
```

### Inline Loading
```tsx
<Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
  <CircularProgress size={16} />
  <Typography variant="body2">Processing...</Typography>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large circular progress
- Full-width linear progress
- Adequate visual size for touch screens
- Clear labels for context

### Tablet (600px - 960px)
- Standard sizes appropriate
- Context-aware sizing

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for inline indicators
- Use context to determine sizing

---

## Total Variant Combinations

**Linear Progress:**
- 3 types (Determinate, Indeterminate, Buffer)
- 3 colors (Primary, Secondary, Inherit)
**Total Linear:** 3 × 3 = **9 combinations**

**Circular Progress:**
- 2 types (Determinate, Indeterminate)
- 3 sizes (Small 16px, Medium 32px, Large 40px)
- 3 colors (Primary, Secondary, Inherit)
**Total Circular:** 2 × 3 × 3 = **18 combinations**

**Grand Total:** 9 + 18 = **27 combinations**

---

## Related Components
- **Skeleton:** Placeholder for content loading
- **Backdrop:** Full-screen loading overlay
- **Button:** Loading button states
- **Snackbar:** Loading notifications

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11045:146855
- **Component:** `<Progress>` (Linear & Circular)
- **Documentation:** [MUI LinearProgress](https://mui.com/api/linear-progress) | [MUI CircularProgress](https://mui.com/api/circular-progress)

---

## Migration Notes

### From Previous Design System
- Linear progress height standardized to 4px
- Border radius updated to 2px
- Circular progress sizes standardized (16px, 32px, 40px)
- Stroke thickness unified to 3.6
- Animation duration set to 2.1s
- Color opacity standardized to 30%
- Buffer variant dots standardized

### Design Tokens Required
- All color tokens (primary, secondary, inherit)
- Size tokens (4px height, 16/32/40px diameter)
- Border radius (2px)
- Animation timing (2.1s)
- Opacity values (30% background)

---

## Performance Considerations

- Progress animations use CSS (GPU-accelerated)
- Indeterminate animations are infinite loops
- Update determinate progress efficiently (debounce updates)
- Avoid creating/destroying frequently
- Use React.memo for static progress values
- Respect `prefers-reduced-motion` for accessibility

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 27 variant combinations documented
- Full accessibility compliance
- Linear and Circular variants included
