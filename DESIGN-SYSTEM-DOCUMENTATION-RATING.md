# Rating Component Documentation

## Overview
The Rating component allows users to provide feedback or view ratings using a visual star-based system. It supports half-star increments, different sizes, read-only mode, and customizable icon sets.

**Component Type:** Input Control / Display Component
**Based on:** Material-UI (MUI) v6.1.0 Rating
**Documentation:** [MUI Rating API](https://mui.com/api/rating)

---

## Design Tokens

### Size Tokens
```typescript
// Small
'--component/rating/size-small/icon-size': '18px',
'--component/rating/size-small/gap': '2px',
'--component/rating/size-small/container-height': '18px',

// Medium (Default)
'--component/rating/size-medium/icon-size': '24px',
'--component/rating/size-medium/gap': '4px',
'--component/rating/size-medium/container-height': '24px',

// Large
'--component/rating/size-large/icon-size': '30px',
'--component/rating/size-large/gap': '4px',
'--component/rating/size-large/container-height': '30px',
```

### Color Tokens
```typescript
// Active (Filled)
'--component/rating/active/color': '#faaf00',
'--component/rating/active/color-hover': '#f5a300',

// Inactive (Empty)
'--component/rating/inactive/color': 'rgba(0, 0, 0, 0.26)',
'--component/rating/inactive/color-hover': 'rgba(0, 0, 0, 0.38)',

// Disabled
'--component/rating/disabled/color': 'rgba(0, 0, 0, 0.26)',

// Focus
'--component/rating/focus-ring-color': '#4b3fff',
'--component/rating/focus-ring-width': '2px',
```

### State Tokens
```typescript
'--component/rating/transition-duration': '150ms',
'--component/rating/icon-spacing': '4px',
'--component/rating/max-rating': '5', // Default maximum
```

---

## Size Variants

### Small
- **Icon Size:** 18×18px
- **Gap Between Icons:** 2px
- **Container Height:** 18px
- **Total Width (5 stars):** ~98px
- **Use Case:** Compact UIs, dense layouts, mobile cards

### Medium (Default)
- **Icon Size:** 24×24px
- **Gap Between Icons:** 4px
- **Container Height:** 24px
- **Total Width (5 stars):** ~136px
- **Use Case:** Standard interfaces, product cards, reviews

### Large
- **Icon Size:** 30×30px
- **Gap Between Icons:** 4px
- **Container Height:** 30px
- **Total Width (5 stars):** ~166px
- **Use Case:** Hero sections, featured reviews, emphasis

---

## States

### 1. Empty (No Rating)
- **Icon:** Outlined star
- **Color:** `rgba(0, 0, 0, 0.26)` (light gray)
- **Visual:** Empty star outlines
- **Use Case:** No rating provided yet

### 2. Filled (Full Stars)
- **Icon:** Filled star
- **Color:** `#faaf00` (gold/yellow)
- **Visual:** Solid colored stars
- **Use Case:** Whole number ratings (1, 2, 3, 4, 5)

### 3. Half Filled
- **Icon:** Half-filled star
- **Left Half:** Filled with `#faaf00`
- **Right Half:** Outlined with `rgba(0, 0, 0, 0.26)`
- **Use Case:** Decimal ratings (1.5, 2.5, 3.5, 4.5)
- **Precision:** 0.5 increments

### 4. Hover (Interactive)
- **Filled Icon:** Slightly darker `#f5a300`
- **Empty Icon:** Slightly darker `rgba(0, 0, 0, 0.38)`
- **Transition:** 150ms ease-in-out
- **Visual Feedback:** Stars highlight on hover
- **Use Case:** Interactive rating input

### 5. Focused
- **Focus Ring:** 2px solid `#4b3fff`
- **Border Radius:** Rounded rectangle around all stars
- **Keyboard:** Accessible via Tab
- **Navigation:** Arrow keys change rating

### 6. Disabled
- **Color:** `rgba(0, 0, 0, 0.26)` for both filled and empty
- **Interaction:** None
- **Cursor:** default (not pointer)
- **Visual:** Reduced opacity, no hover effects

### 7. Read-Only
- **Color:** Normal active/inactive colors
- **Interaction:** None (display only)
- **Cursor:** default (not pointer)
- **Use Case:** Displaying existing ratings without editing

---

## Interaction Modes

### Interactive (Input)
- **Click:** Set rating to clicked star value
- **Hover:** Preview rating at hover position
- **Keyboard:** Arrow keys to change value
- **Precision:** Whole numbers (1-5) or half steps (0.5, 1.0, 1.5, etc.)
- **Clear:** Can be cleared to 0 if configured

### Read-Only (Display)
- **No Interaction:** Pure display mode
- **No Hover:** No hover effects
- **No Click:** Cannot change value
- **Use Case:** Show existing ratings, product displays

---

## Precision Options

### Whole Numbers (1.0)
- **Values:** 1, 2, 3, 4, 5
- **Icons:** Only full stars
- **Interaction:** Click anywhere on star to fill
- **Use Case:** Simple rating systems

### Half Steps (0.5)
- **Values:** 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0
- **Icons:** Full and half-filled stars
- **Interaction:** Click left half or right half of star
- **Use Case:** More granular ratings, review systems

### Decimal (0.1)
- **Values:** Any decimal from 0.0 to max (e.g., 3.7, 4.2)
- **Icons:** Partial fill based on decimal value
- **Interaction:** Fine-grained position within star
- **Use Case:** Average ratings display, calculated scores

---

## Usage Guidelines

### When to Use
- Product ratings and reviews
- User feedback collection
- Content quality indicators
- Service ratings
- Skill level indicators
- Satisfaction surveys
- Average rating displays

### When NOT to Use
- Binary choices (use Switch or Checkbox)
- Multiple independent selections (use Checkbox)
- Scales beyond 5-10 points (use Slider)
- Complex feedback (use form with TextField)
- Non-linear scales (use custom component)

### Best Practices

#### Do
- Provide clear labels (e.g., "Rate this product")
- Show current average rating alongside input
- Use read-only mode for displaying ratings
- Include rating count (e.g., "4.5 (128 reviews)")
- Use appropriate size for context
- Enable keyboard navigation
- Provide visual feedback on hover
- Allow half-star precision for more accuracy

#### Don't
- Use without context or labels
- Make stars too small (min 18px)
- Use non-standard icon colors without reason
- Forget to indicate read-only vs interactive
- Use for non-rating contexts
- Disable without visual indication
- Mix different sizes in same context

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- **Tab:** Focus rating component
- **Arrow Right:** Increase rating
- **Arrow Left:** Decrease rating
- **Arrow Up:** Increase rating
- **Arrow Down:** Decrease rating
- **Home:** Set to minimum (0 or 1)
- **End:** Set to maximum (5 or configured max)

#### Screen Readers
```html
<Rating
  value={4.5}
  readOnly
  aria-label="Rating: 4.5 out of 5 stars"
/>

<Rating
  value={rating}
  onChange={(event, newValue) => setRating(newValue)}
  aria-label="Rate this product"
/>
```

#### ARIA Attributes
```typescript
{
  role: "radiogroup",           // For interactive rating
  "aria-label": string,         // Description of rating
  "aria-valuenow": number,      // Current value
  "aria-valuemin": number,      // Minimum value (usually 0 or 1)
  "aria-valuemax": number,      // Maximum value (usually 5)
  "aria-valuetext": string,     // Text representation (e.g., "4.5 out of 5")
  "aria-readonly": boolean,     // Read-only state
  "aria-disabled": boolean,     // Disabled state
}
```

#### Focus Management
- Clear 2px focus ring with 3:1 contrast minimum
- Rounded rectangle focus outline around all stars
- Focus visible on keyboard navigation only
- Focus ring uses primary color by default

#### Color Contrast
- **Filled Stars:** 3:1 minimum against background
- **Empty Stars:** 3:1 minimum against background
- **Focus Ring:** 3:1 minimum against background
- **Disabled:** Exempt from contrast requirements

#### Touch Targets
- **Small:** 18px (desktop only, too small for touch)
- **Medium:** 24px (increase padding for 40px+ touch target)
- **Large:** 30px (increase padding for 48px+ touch target)
- **Best Practice:** Ensure 40×40px minimum touch target with padding

---

## Code Examples

### Basic Rating
```tsx
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Rating
      name="simple-rating"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
```

### Read-Only Rating
```tsx
import Rating from '@mui/material/Rating';

export default function ReadOnlyRating() {
  return (
    <Rating
      name="read-only"
      value={4.5}
      readOnly
      precision={0.5}
    />
  );
}
```

### Size Variants
```tsx
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function SizeRating() {
  return (
    <Stack spacing={2}>
      <Rating name="size-small" defaultValue={3} size="small" />
      <Rating name="size-medium" defaultValue={3} size="medium" />
      <Rating name="size-large" defaultValue={3} size="large" />
    </Stack>
  );
}
```

### Half Star Precision
```tsx
import Rating from '@mui/material/Rating';

export default function HalfRating() {
  return (
    <Rating
      name="half-rating"
      defaultValue={2.5}
      precision={0.5}
    />
  );
}
```

### Disabled Rating
```tsx
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function DisabledRating() {
  return (
    <Stack spacing={2}>
      <Rating name="disabled-rating" value={3} disabled />
      <Rating name="disabled-empty" value={0} disabled />
    </Stack>
  );
}
```

### With Label
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RatingWithLabel() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Box>
      <Typography component="legend">Rate this product</Typography>
      <Rating
        name="product-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
```

### Display Rating with Count
```tsx
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RatingDisplay() {
  const rating = 4.5;
  const reviewCount = 128;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Rating value={rating} precision={0.5} readOnly />
      <Typography variant="body2" color="text.secondary">
        {rating} ({reviewCount} reviews)
      </Typography>
    </Box>
  );
}
```

### Custom Icon Count
```tsx
import Rating from '@mui/material/Rating';

export default function CustomMaxRating() {
  return (
    <Rating
      name="ten-star-rating"
      defaultValue={7}
      max={10}
    />
  );
}
```

### No Rating
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NoRating() {
  const [value, setValue] = React.useState<number | null>(null);

  return (
    <Box>
      <Typography component="legend">Optional rating</Typography>
      <Rating
        name="no-value"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
```

### Hover Feedback
```tsx
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const labels: { [index: string]: string } = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(3);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box>
      <Rating
        name="hover-feedback"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
```

---

## Common Patterns

### Product Rating Display
```tsx
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <Rating value={4.5} precision={0.5} readOnly size="small" />
  <Typography variant="body2">4.5 (234)</Typography>
</Box>
```

### Interactive Review Form
```tsx
<Box>
  <Typography component="legend">How would you rate this?</Typography>
  <Rating
    name="review-rating"
    value={rating}
    onChange={(e, newValue) => setRating(newValue)}
    size="large"
  />
</Box>
```

### Average Rating Summary
```tsx
<Box sx={{ textAlign: 'center' }}>
  <Typography variant="h3">4.5</Typography>
  <Rating value={4.5} precision={0.5} readOnly />
  <Typography variant="body2" color="text.secondary">
    Based on 1,234 reviews
  </Typography>
</Box>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large size
- Ensure adequate touch targets (40px+ with padding)
- Stack rating with label vertically
- Provide clear visual feedback on tap
- Consider larger gaps between stars

### Tablet (600px - 960px)
- Use medium size as default
- Standard touch targets
- Can display inline with labels
- Hover states if pointer available

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for compact displays
- Hover states fully functional
- Keyboard navigation essential
- Inline layouts common

---

## Total Variant Combinations

**Base Combinations:**
- 3 sizes (Small, Medium, Large)
- 3 active states (Empty, Full, Half)
- 2 hover states (false, true)
- 2 disabled states (false, true)
- 2 interaction modes (Interactive, Read-only)

**Total:** 3 × 3 × 2 × 2 × 2 = **72 base combinations**
**With Precision:** 72 × 3 precision options = **216 total combinations**

---

## Related Components
- **Slider:** Alternative for numeric input
- **IconButton:** For single action buttons
- **ToggleButtonGroup:** For mutually exclusive selections
- **Checkbox:** For multiple selections

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 11017:144103
- **Component:** `<Rating>`
- **Documentation:** [MUI Rating API](https://mui.com/api/rating)

---

## Migration Notes

### From Previous Design System
- Icon sizes standardized (18px, 24px, 30px)
- Active color unified to `#faaf00` (gold)
- Inactive color updated to 26% opacity
- Gap spacing aligned with 4px grid (2px small, 4px medium/large)
- Focus ring now uses primary color (#4b3fff)
- Hover colors slightly darker for better feedback
- Disabled state matches other form components
- Half-star precision standardized

### Design Tokens Required
- Color tokens (active, inactive, disabled, hover)
- Spacing tokens (2px, 4px gaps)
- Icon size tokens (18px, 24px, 30px)
- Focus ring tokens (2px width, primary color)
- Transition timing (150ms)

---

## Performance Considerations

- Ratings are lightweight (SVG icons)
- No complex animations
- Use React.memo for read-only ratings in lists
- Avoid creating inline change handlers
- SVG icons are efficient and scalable

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 216 variant combinations documented
- Full accessibility compliance
