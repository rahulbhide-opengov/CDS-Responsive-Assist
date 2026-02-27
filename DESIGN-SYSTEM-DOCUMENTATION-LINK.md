# Link Component Documentation

## Overview
The Link component enables navigation between pages, sections, or external resources. It supports both standalone (button-like) and inline (text-embedded) variants with customizable icons and multiple size options.

**Component Type:** Navigation / Action Component
**Based on:** Material-UI (MUI) v6.1.0 Link
**Documentation:** [MUI Link API](https://mui.com/api/link)

---

## Design Tokens

### Typography Tokens
```typescript
// Large (16px)
'--component/link/size-large/font-family': 'var(--typography/base-styles/body1/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-large/font-size': '16px',
'--component/link/size-large/font-weight': '400',
'--component/link/size-large/line-height': '20px',
'--component/link/size-large/letter-spacing': '0.15px',

// Medium (14px - Default)
'--component/link/size-medium/font-family': 'var(--typography/base-styles/body2/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-medium/font-size': '14px',
'--component/link/size-medium/font-weight': '400',
'--component/link/size-medium/line-height': '18px',
'--component/link/size-medium/letter-spacing': '0.17px',

// Small (12px)
'--component/link/size-small/font-family': 'var(--typography/base-styles/caption/font-family, "DM_Sans:Regular", sans-serif)',
'--component/link/size-small/font-size': '12px',
'--component/link/size-small/font-weight': '400',
'--component/link/size-small/line-height': '16px',
'--component/link/size-small/letter-spacing': '0.17px',
```

### Color Tokens
```typescript
// Default State
'--component/link/default/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/default/icon-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',

// Hover State
'--component/link/hover/text-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/hover/icon-color': 'var(--color-palatte/text/primary, rgba(0, 0, 0, 0.87))',
'--component/link/hover/opacity': '0.8',

// Disabled State
'--component/link/disabled/text-color': 'rgba(0, 0, 0, 0.38)',
'--component/link/disabled/icon-color': 'rgba(0, 0, 0, 0.38)',
'--component/link/disabled/cursor': 'not-allowed',

// Inline Variant
'--component/link/inline/text-decoration': 'underline',
'--component/link/inline/text-decoration-skip-ink': 'none',
```

### Layout Tokens
```typescript
'--component/link/icon-size': '16px',
'--component/link/icon-gap': '4px',
'--component/link/padding-top': '2px',
'--component/link/transition-duration': '150ms',
```

---

## Link Types

### Standalone Links
- **Appearance:** Button-like, no underline
- **Use Case:** Navigation actions, call-to-action links, standalone buttons
- **Icon Support:** Left and/or right icons
- **Layout:** Flex container with optional icons
- **Visual:** Plain text without underline

### Inline Links
- **Appearance:** Underlined text
- **Use Case:** Embedded within paragraphs, text-level navigation
- **Icon Support:** Not typically used (text-only)
- **Layout:** Inline with surrounding text
- **Visual:** Underline decoration, skip-ink disabled

---

## Size Variants

### Small (12px)
- **Font Size:** 12px
- **Line Height:** 16px
- **Icon Size:** 16px
- **Use Case:** Compact UIs, dense layouts, footnotes, captions
- **Context:** Small cards, table cells, footer links

### Medium (14px - Default)
- **Font Size:** 14px
- **Line Height:** 18px
- **Icon Size:** 16px
- **Use Case:** Standard body text, navigation, most common use case
- **Context:** Body content, lists, navigation menus

### Large (16px)
- **Font Size:** 16px
- **Line Height:** 20px
- **Icon Size:** 16px
- **Use Case:** Prominent links, hero sections, CTAs
- **Context:** Headers, large content areas, emphasis

---

## States

### Default
- **Text Color:** Primary text color (87% opacity black)
- **Icon Color:** Primary text color
- **Decoration:** Underline for inline, none for standalone
- **Cursor:** pointer
- **Visual:** Standard appearance

### Hover
- **Text Color:** Primary text color
- **Icon Color:** Primary text color
- **Decoration:** Maintained from default
- **Opacity:** Slightly reduced (0.8)
- **Cursor:** pointer
- **Transition:** 150ms smooth
- **Visual:** Slightly lighter appearance on hover

### Disabled
- **Text Color:** `rgba(0, 0, 0, 0.38)` (38% opacity)
- **Icon Color:** `rgba(0, 0, 0, 0.38)`
- **Decoration:** Maintained but grayed out
- **Cursor:** not-allowed
- **Interaction:** None (not clickable)
- **Visual:** Grayed out appearance

---

## Icon Configuration

### Icon Position
- **Left Icon:** Positioned before text (e.g., magnify/search icon)
- **Right Icon:** Positioned after text (e.g., arrow-right, external link icon)
- **Both Icons:** Can have both left and right icons simultaneously
- **No Icons:** Text-only links

### Common Icon Types
- **arrow-right:** Internal navigation, next action
- **arrow-top-right:** External link, opens in new window
- **open-in-new:** Popout to new tab
- **magnify:** Search links
- **arrow-right-thin:** Subtle navigation indicator

### Icon Specifications
- **Size:** 16×16px (consistent across all link sizes)
- **Gap:** 4px from text
- **Alignment:** Vertically centered with text
- **Color:** Inherits from link state

---

## Usage Guidelines

### When to Use
- Navigation between pages or sections
- External resource links
- Call-to-action links
- Inline citations or references
- Download links
- Social media links
- "Learn more" or "Read more" actions
- Email addresses (mailto links)
- Phone numbers (tel links)

### When NOT to Use
- Primary actions (use Button instead)
- Form submissions (use Button)
- Destructive actions (use Button with destructive variant)
- Non-navigation interactions (use Button)
- Disabled actions that should be hidden (hide element instead)

### Best Practices

#### Do
- Use descriptive link text (avoid "click here")
- Indicate external links with icons (arrow-top-right)
- Use inline variant within paragraphs
- Use standalone variant for navigation menus
- Provide clear affordance (underline for inline)
- Show disabled state only when necessary
- Use appropriate size for context
- Include keyboard focus indicators

#### Don't
- Use generic link text ("click here", "more")
- Mix standalone and inline styles inconsistently
- Use links for actions that don't navigate
- Forget to indicate external links
- Use disabled links extensively (hide instead)
- Make links too small (min 12px)
- Use color alone to indicate links
- Remove underlines from inline links without alternative indication

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<a href="/page" target="_self" rel="noopener">
  Link text
</a>

<!-- External link -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External link
  <span aria-label="opens in new window"></span>
</a>
```

#### ARIA Attributes
```typescript
{
  role: "link",                  // Default for <a> element
  "aria-label": string,          // Descriptive label if icon-only
  "aria-disabled": boolean,      // For disabled links
  "aria-current": "page",        // For current page link
  "aria-describedby": string,    // Additional context
  target: "_blank",              // For external links
  rel: "noopener noreferrer",   // Security for target="_blank"
}
```

#### Keyboard Navigation
- **Tab:** Focus link
- **Enter:** Activate link
- **Shift+Tab:** Focus previous element
- **Focus Visible:** Clear focus ring (2px outline)

#### Color Contrast
- **Default Text:** 4.5:1 minimum against background
- **Hover Text:** 4.5:1 minimum against background
- **Disabled Text:** Exempt from contrast requirements (38% opacity)
- **Underline:** Provides non-color affordance for inline links

#### Touch Targets
- **Small (12px):** Increase padding for 40×40px minimum touch target
- **Medium (14px):** Increase padding for 40×40px minimum touch target
- **Large (16px):** Increase padding for 40×40px minimum touch target
- **Standalone:** Ensure adequate padding for touch

#### Screen Reader Support
- Link purpose clear from text alone
- External links announced ("opens in new window")
- Icon-only links have aria-label
- Disabled state announced ("disabled" or "unavailable")

---

## Code Examples

### Basic Standalone Link
```tsx
import Link from '@mui/material/Link';

export default function StandaloneLink() {
  return (
    <Link href="/page" underline="none">
      Link Text
    </Link>
  );
}
```

### Inline Link
```tsx
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function InlineLink() {
  return (
    <Typography variant="body2">
      This is a paragraph with an{' '}
      <Link href="/page">inline link</Link>
      {' '}embedded in the text.
    </Typography>
  );
}
```

### Link with Right Icon
```tsx
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

export default function LinkWithIcon() {
  return (
    <Link href="/page" underline="none">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        Link Text
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Box>
    </Link>
  );
}
```

### External Link
```tsx
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';

export default function ExternalLink() {
  return (
    <Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        External Link
        <OpenInNewIcon sx={{ fontSize: 16 }} />
      </Box>
    </Link>
  );
}
```

### Size Variants
```tsx
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function LinkSizes() {
  return (
    <Stack spacing={2}>
      <Link href="/page" sx={{ fontSize: 12, lineHeight: '16px' }}>
        Small Link (12px)
      </Link>
      <Link href="/page" sx={{ fontSize: 14, lineHeight: '18px' }}>
        Medium Link (14px)
      </Link>
      <Link href="/page" sx={{ fontSize: 16, lineHeight: '20px' }}>
        Large Link (16px)
      </Link>
    </Stack>
  );
}
```

### Disabled Link
```tsx
import Link from '@mui/material/Link';

export default function DisabledLink() {
  return (
    <Link
      href="/page"
      underline="none"
      sx={{
        color: 'rgba(0, 0, 0, 0.38)',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }}
    >
      Disabled Link
    </Link>
  );
}
```

### Link with Left Icon
```tsx
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function LinkWithLeftIcon() {
  return (
    <Link href="/search" underline="none">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <SearchIcon sx={{ fontSize: 16 }} />
        Search
      </Box>
    </Link>
  );
}
```

### Hover State
```tsx
import Link from '@mui/material/Link';

export default function HoverLink() {
  return (
    <Link
      href="/page"
      underline="none"
      sx={{
        transition: 'opacity 150ms',
        '&:hover': {
          opacity: 0.8,
        },
      }}
    >
      Hover Link
    </Link>
  );
}
```

---

## Common Patterns

### Navigation Menu Link
```tsx
<Link href="/dashboard" underline="none" color="text.primary">
  Dashboard
</Link>
```

### Breadcrumb Link
```tsx
<Link href="/parent" underline="hover" color="inherit">
  Parent Page
</Link>
```

### Footer Link
```tsx
<Link href="/privacy" underline="none" color="text.secondary" sx={{ fontSize: 12 }}>
  Privacy Policy
</Link>
```

### Download Link
```tsx
<Link href="/file.pdf" download underline="none">
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    Download PDF
    <DownloadIcon sx={{ fontSize: 16 }} />
  </Box>
</Link>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Use medium or large sizes
- Ensure adequate touch targets (40×40px minimum)
- Increase padding around standalone links
- Stack inline links clearly
- Avoid small size (12px) for primary navigation

### Tablet (600px - 960px)
- Standard sizes appropriate
- Medium size recommended for body content
- Large size for prominent links
- Adequate spacing between links

### Desktop (> 960px)
- Any size appropriate
- Small size acceptable for footnotes and captions
- Hover states fully functional
- Icon indicators for external links

---

## Total Variant Combinations

**Link Types:** 2 (Standalone, Inline)
**Sizes:** 3 (Small 12px, Medium 14px, Large 16px)
**States:** 3 (Default, Hover, Disabled)
**Icon Configurations:** 4 (None, Left, Right, Both)

**Total Combinations:** 2 × 3 × 3 × 4 = **72 combinations**

---

## Related Components
- **Button:** For primary actions and non-navigation interactions
- **Breadcrumbs:** For hierarchical navigation with links
- **Typography:** For text content containing inline links
- **IconButton:** For icon-only navigation actions

---

## Figma Design Reference
- **File:** CDS-37
- **Node ID:** 14866:127209
- **Component:** `<Link>`
- **Documentation:** [MUI Link API](https://mui.com/api/link)

---

## Migration Notes

### From Previous Design System
- Typography standardized to DM Sans
- Font sizes aligned to 12px, 14px, 16px
- Line heights adjusted for better readability
- Icon size fixed at 16px across all link sizes
- Hover transition set to 150ms
- Disabled color standardized to 38% opacity
- Inline links always have underline
- Standalone links have no underline by default

### Design Tokens Required
- Typography tokens (12px, 14px, 16px with line heights)
- Color tokens (text primary, disabled)
- Icon size token (16px)
- Spacing tokens (4px gap, 2px padding)
- Transition timing (150ms)

---

## Performance Considerations

- Links are lightweight (simple DOM elements)
- Use native `<a>` elements for best performance
- Avoid wrapping entire cards in links (bad for accessibility)
- Icon SVGs are efficient
- Minimal JavaScript required
- Transition animations are GPU-accelerated

---

## Version History
- **v1.0** - Initial documentation
- Based on MUI v6.1.0 specifications
- 72 variant combinations documented
- Full accessibility compliance
- Standalone and Inline variants included
