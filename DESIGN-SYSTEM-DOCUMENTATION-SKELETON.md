# Skeleton Component Documentation

## Overview
The Skeleton component displays placeholder previews of content before data loads, reducing perceived load time and improving user experience during async operations.

**Component Type:** Loading Indicator
**Based on:** Material-UI (MUI) v6.1.0 Skeleton
**Documentation:** [MUI Skeleton API](https://mui.com/api/skeleton)

---

## Design Tokens

### Color Tokens
```typescript
'--component/skeleton/bg-color': 'rgba(0, 0, 0, 0.04)',
'--component/skeleton/animation-duration': '1.5s',
'--component/skeleton/animation-timing': 'ease-in-out',
```

### Shape Tokens
```typescript
// Text
'--component/skeleton/text/width': '120px',
'--component/skeleton/text/height': '12px',
'--component/skeleton/text/border-radius': '4px',

// Circle
'--component/skeleton/circle/size': '40px',
'--component/skeleton/circle/border-radius': '100px',

// Rectangle
'--component/skeleton/rectangle/width': '120px',
'--component/skeleton/rectangle/height': '120px',
'--component/skeleton/rectangle/border-radius': '4px',
```

---

## Shape Variants

### Text
- **Dimensions:** 120px × 12px (default)
- **Border Radius:** 4px
- **Use Case:** Single line text placeholder, titles, labels, list items
- **Customizable:** Width and height can be adjusted

### Circle
- **Dimensions:** 40px diameter (default)
- **Border Radius:** 100px (fully rounded)
- **Use Case:** Avatar placeholders, icon placeholders, profile images
- **Customizable:** Size can be adjusted

### Rectangle
- **Dimensions:** 120px × 120px (default)
- **Border Radius:** 4px
- **Use Case:** Image placeholders, card thumbnails, media content
- **Customizable:** Width and height independent

---

## Animation

### Pulse Animation (Default)
- **Type:** Opacity fade in/out
- **Duration:** 1.5s
- **Timing:** ease-in-out
- **Loop:** Infinite
- **Effect:** Subtle pulsing to indicate loading

### Wave Animation (Optional)
- **Type:** Linear gradient sweep
- **Duration:** 1.5s
- **Direction:** Left to right
- **Effect:** Shimmer/wave across skeleton

---

## Usage Guidelines

### When to Use
- Initial page load with async data
- Infinite scroll loading indicators
- Lazy-loaded images
- Fetching list items or cards
- Progressive content loading
- Any async operation > 500ms

### When NOT to Use
- Quick operations < 300ms (use nothing or spinner)
- Final/static content
- Error states (use error message)
- Empty states (use empty state illustration)
- Critical actions requiring full attention (use modal spinner)

### Best Practices

#### Do
- Match skeleton shape to actual content
- Use appropriate dimensions
- Show skeleton for entire layout
- Animate to indicate loading
- Replace skeleton with real content smoothly
- Use multiple skeletons for lists
- Maintain spacing and alignment with final content

#### Don't
- Show skeleton for < 300ms
- Use different shapes than final content
- Leave skeleton visible after content loads
- Use for static content
- Mix skeletons with real content inconsistently
- Overuse animations (keep subtle)

---

## Common Patterns

### List Skeleton
```
┌────────────────────────────┐
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
│ ○  ━━━━━━━━━━━           │
└────────────────────────────┘
```

### Card Skeleton
```
┌────────────────────────────┐
│ ▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭     │
│                            │
│ ━━━━━━━━━━━               │
│ ━━━━━━━                   │
└────────────────────────────┘
```

### Profile Skeleton
```
┌────────────────────────────┐
│    ○                       │
│  ━━━━━                    │
│  ━━━━━━━━                 │
└────────────────────────────┘
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Screen Reader Announcement
```html
<Skeleton aria-label="Loading content" />
<!-- or -->
<div aria-busy="true" aria-live="polite">
  <Skeleton />
</div>
```

#### ARIA Attributes
```typescript
{
  "aria-busy": true,          // Indicates loading state
  "aria-live": "polite",      // Announces when content loads
  "aria-label": "Loading...", // Describes loading state
}
```

#### Animation Considerations
- Respect `prefers-reduced-motion` setting
- Disable animations for users with motion sensitivity
- Provide static skeleton alternative

#### Focus Management
- Skeletons should not receive focus
- No keyboard interaction needed
- Focus moves to loaded content when ready

---

## Code Examples

### Basic Skeleton Variants
```tsx
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonVariants() {
  return (
    <Stack spacing={2}>
      {/* Text skeleton */}
      <Skeleton variant="text" width={210} />

      {/* Circle skeleton */}
      <Skeleton variant="circular" width={40} height={40} />

      {/* Rectangle skeleton */}
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
```

### List Skeleton
```tsx
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function ListSkeleton() {
  return (
    <Stack spacing={1}>
      {[...Array(5)].map((_, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={200} />
        </Box>
      ))}
    </Stack>
  );
}
```

### Card Skeleton
```tsx
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardSkeleton() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" width="60%" />
      </CardContent>
    </Card>
  );
}
```

### With Animation Control
```tsx
import Skeleton from '@mui/material/Skeleton';

export default function AnimationSkeleton() {
  return (
    <>
      {/* Pulse animation (default) */}
      <Skeleton animation="pulse" width={210} height={40} />

      {/* Wave animation */}
      <Skeleton animation="wave" width={210} height={40} />

      {/* No animation */}
      <Skeleton animation={false} width={210} height={40} />
    </>
  );
}
```

### Custom Dimensions
```tsx
import Skeleton from '@mui/material/Skeleton';

export default function CustomSkeleton() {
  return (
    <>
      {/* Small text */}
      <Skeleton variant="text" width={80} height={12} />

      {/* Large avatar */}
      <Skeleton variant="circular" width={80} height={80} />

      {/* Wide rectangle */}
      <Skeleton variant="rectangular" width={400} height={200} />
    </>
  );
}
```

### Loading State Pattern
```tsx
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function LoadingContent() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setData({ title: 'Loaded Content' });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton variant="text" width={200} />
      ) : (
        <Typography variant="h4">{data.title}</Typography>
      )}
    </>
  );
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Reduce skeleton sizes proportionally
- Maintain minimum 12px height for text
- Stack skeletons vertically
- Full width for rectangles

### Tablet (600px - 960px)
- Standard skeleton sizes
- Grid layouts with 2-3 columns
- Adjust widths to fit containers

### Desktop (> 960px)
- Standard or larger skeleton sizes
- Multi-column grid layouts
- Wider rectangles for cards/images

---

## Total Variant Combinations

**Base Variants:** 3 shapes (Text, Circle, Rectangle)
**Animation Types:** 3 (Pulse, Wave, None)
**Total:** 3 shapes × 3 animations = **9 base combinations**
**Custom:** Unlimited with width/height customization

---

## Related Components
- **CircularProgress:** Determinate/indeterminate spinner
- **LinearProgress:** Progress bar indicator
- **Backdrop:** Full-screen loading overlay
- **Placeholder:** Static placeholder images

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11045:147079
- **Component:** `<Skeleton>`
- **Documentation:** [MUI Skeleton API](https://mui.com/api/skeleton)

---

## Migration Notes

### From Previous Design System
- Background color standardized to `rgba(0, 0, 0, 0.04)`
- Border radius aligned with design system (4px)
- Animation duration standardized to 1.5s
- Default dimensions established for consistency
- Wave animation now available as variant

### Design Tokens Required
- Action color tokens (hover state opacity)
- Border radius tokens (4px)
- Animation timing tokens
- `prefers-reduced-motion` media query support

---

## Performance Considerations

- Skeletons are lightweight (single div)
- CSS animations are GPU-accelerated
- No JavaScript required for animation
- Minimal re-renders when switching to content
- Use React.memo for list skeletons

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 3 shape variants documented
- Full accessibility compliance
