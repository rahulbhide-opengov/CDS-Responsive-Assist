# Image List Component Documentation

## Overview
The Image List component displays a collection of images in an organized grid layout with support for multiple variants including masonry, quilted, and woven patterns. It's optimized for displaying galleries, photo collections, and product catalogs with consistent spacing and responsive behavior.

**Component Type:** Data Display / Layout Component
**Based on:** Material-UI (MUI) v6.1.0 ImageList
**Documentation:** [MUI ImageList API](https://mui.com/api/image-list)

---

## Design Tokens

### Layout Tokens
```typescript
// Uses CDS spacing system
'--component/image-list/gap': 'var(--spacing/2, 8px)',        // Standard gap
'--component/image-list/row-height': '180px',                 // Default row height
'--component/image-list/cols': '3',                           // Default columns
```

### Spacing Tokens
```typescript
'--component/image-list/gap-small': 'var(--spacing/1, 4px)',     // 4px
'--component/image-list/gap-medium': 'var(--spacing/2, 8px)',    // 8px (default)
'--component/image-list/gap-large': 'var(--spacing/3, 12px)',    // 12px
'--component/image-list/gap-xlarge': 'var(--spacing/4, 16px)',   // 16px
```

### Border Radius Tokens
```typescript
'--component/image-list-item/border-radius': 'var(--border-radius/small, 4px)',
'--component/image-list-item-bar/border-radius': 'var(--border-radius/small, 4px)',
```

### Overlay Tokens
```typescript
// ImageListItemBar background
'--component/image-list-item-bar/bg': 'rgba(0, 0, 0, 0.7)',
'--component/image-list-item-bar/text-color': 'var(--color-palatte/common/white, #ffffff)',
```

---

## Component Anatomy

### ImageList Container
- **Display:** Grid or Flexbox (variant dependent)
- **Gap:** CSS gap property for spacing
- **Columns:** Responsive column count
- **Row Height:** Fixed or auto
- **Overflow:** Auto (scrollable)

### ImageListItem
- **Position:** Relative
- **Aspect Ratio:** Maintained
- **Image:** 100% width/height
- **Overlay:** Optional ImageListItemBar

### ImageListItemBar
- **Position:** Absolute (top or bottom)
- **Background:** Semi-transparent overlay
- **Content:** Title, subtitle, action icon
- **Height:** Auto based on content

---

## Variant Types

### Standard Grid
- **Layout:** Equal-sized items in rows/columns
- **Columns:** Fixed number (e.g., 3, 4, 5)
- **Row Height:** Fixed (e.g., 180px)
- **Use Case:** Product catalogs, photo galleries
- **Advantage:** Uniform, predictable layout
- **Common:** Most frequently used

### Quilted (Mosaic)
- **Layout:** Items with different heights (rows/cols span)
- **Columns:** Fixed number
- **Item Sizes:** Custom rows/cols span per item
- **Use Case:** Featured galleries, editorial layouts
- **Advantage:** Visual interest, emphasis
- **Pattern:** Defined via `rows` and `cols` props on items

### Masonry
- **Layout:** Pinterest-style layout
- **Columns:** Fixed number
- **Row Height:** Auto (based on content)
- **Use Case:** Variable-height images
- **Advantage:** No wasted space
- **Note:** Uses CSS columns or JS positioning

### Woven
- **Layout:** Horizontal rows with variable widths
- **Rows:** Horizontal scrolling rows
- **Item Widths:** Variable
- **Use Case:** Horizontal galleries, carousels
- **Advantage:** Unique visual pattern
- **Rare:** Specialized use case

---

## Column Configurations

### Mobile (2-3 columns)
- **Columns:** 2-3
- **Gap:** 4-8px
- **Row Height:** 120-150px
- **Use Case:** Small screens, portraits

### Tablet (3-4 columns)
- **Columns:** 3-4
- **Gap:** 8px
- **Row Height:** 150-180px
- **Use Case:** Medium screens

### Desktop (4-6 columns)
- **Columns:** 4-6
- **Gap:** 8-12px
- **Row Height:** 180-220px
- **Use Case:** Large screens, galleries

---

## ImageListItemBar Positions

### Bottom (Default)
- **Position:** Bottom of image
- **Use Case:** Standard captions
- **Advantage:** Doesn't cover main content
- **Common:** Most frequent

### Top
- **Position:** Top of image
- **Use Case:** Labels, categories
- **Advantage:** Immediately visible
- **Less Common:** Special cases

### Below
- **Position:** Outside image (below)
- **Use Case:** Separate caption area
- **Advantage:** Doesn't overlay image
- **Layout:** Requires extra space

---

## Usage Guidelines

### When to Use
- Photo galleries
- Product catalogs
- Image portfolios
- Real estate listings
- Recipe collections
- Social media feeds
- Art galleries
- Fashion lookbooks
- Search results with images
- User-generated content

### When NOT to Use
- Single image display (use Card/Paper)
- Small image counts (< 3) (use Grid instead)
- Complex interactive items (use Grid with Cards)
- Variable content types mixed (use Grid)
- Heavy text content (use List/Grid)
- Non-image content primarily

### Best Practices

#### Do
- Use appropriate variant for content
- Set responsive column counts
- Maintain consistent aspect ratios (when possible)
- Provide alt text for all images
- Use lazy loading for performance
- Optimize image sizes
- Use CDS spacing for gaps
- Provide image captions via ItemBar
- Test on various screen sizes
- Handle loading states

#### Don't
- Mix very different aspect ratios in standard grid
- Use huge unoptimized images
- Forget responsive column counts
- Forget alt text (accessibility)
- Use tiny gaps (< 4px) on mobile
- Nest ImageLists
- Use for non-image content
- Forget loading placeholders
- Make gaps too large (> 16px typically)
- Use too many columns on mobile (> 3)

---

## Component Integration (CDS Base Components)

### With CDS IconButton (Actions)
```typescript
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

<ImageList cols={3} gap={8}>
  {items.map((item) => (
    <ImageListItem key={item.id}>
      <img src={item.img} alt={item.title} loading="lazy" />
      <ImageListItemBar
        title={item.title}
        actionIcon={
          <IconButton sx={{ color: 'white' }}>
            <FavoriteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>
```

### With CDS Badge (Image Badges)
```typescript
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

<ImageList cols={4} gap={8}>
  {items.map((item) => (
    <ImageListItem key={item.id}>
      <Badge badgeContent={item.count} color="primary">
        <Box component="img" src={item.img} alt={item.title} sx={{ width: '100%' }} />
      </Badge>
    </ImageListItem>
  ))}
</ImageList>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<ul class="image-list">
  <li class="image-list-item">
    <img src="image.jpg" alt="Descriptive alt text" />
    <div class="image-list-item-bar">
      <span>Image title</span>
    </div>
  </li>
</ul>
```

#### Alt Text
```typescript
// Required for all images
<img src={item.img} alt={item.title} />

// Decorative images only
<img src={item.img} alt="" role="presentation" />
```

#### Keyboard Navigation
- **Tab:** Navigate between interactive elements (buttons, links)
- **Enter/Space:** Activate interactive elements
- **Arrow Keys:** Optional for gallery navigation

#### Screen Reader Support
- All images have descriptive alt text
- Image titles announced via ItemBar
- Action buttons labeled appropriately
- List structure announced

---

## Code Examples

### Standard Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  const itemData = [
    { img: '/img1.jpg', title: 'Image 1' },
    { img: '/img2.jpg', title: 'Image 2' },
    { img: '/img3.jpg', title: 'Image 3' },
    { img: '/img4.jpg', title: 'Image 4' },
    { img: '/img5.jpg', title: 'Image 5' },
    { img: '/img6.jpg', title: 'Image 6' },
  ];

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### With Title Bar
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitleBarImageList() {
  return (
    <ImageList cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Quilted Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function QuiltedImageList() {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={121} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  { img: '/img1.jpg', title: 'Image 1', rows: 2, cols: 2 },
  { img: '/img2.jpg', title: 'Image 2' },
  { img: '/img3.jpg', title: 'Image 3' },
  { img: '/img4.jpg', title: 'Image 4', cols: 2 },
  { img: '/img5.jpg', title: 'Image 5', cols: 2 },
  { img: '/img6.jpg', title: 'Image 6', rows: 2, cols: 2 },
];
```

### Masonry Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function MasonryImageList() {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Responsive Columns
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

export default function ResponsiveImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const cols = isMobile ? 2 : isTablet ? 3 : 4;

  return (
    <ImageList cols={cols} gap={8} sx={{ width: '100%', height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### With Custom Gap
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CustomGapImageList() {
  return (
    <ImageList
      cols={3}
      gap={16}  // Custom gap (CDS spacing/4)
      rowHeight={180}
      sx={{ width: '100%' }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Woven Image List
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
    <ImageList variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

### Action Bar on Hover
```tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';

export default function HoverImageList() {
  return (
    <ImageList cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            '&:hover .image-bar': {
              opacity: 1,
            },
          }}
        >
          <img src={item.img} alt={item.title} loading="lazy" />
          <ImageListItemBar
            className="image-bar"
            sx={{
              opacity: 0,
              transition: 'opacity 0.3s',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={item.title}
            position="top"
            actionIcon={
              <Box>
                <IconButton sx={{ color: 'white' }}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <ShareIcon />
                </IconButton>
              </Box>
            }
            actionPosition="right"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
```

---

## Common Patterns

### Photo Gallery
```tsx
<ImageList cols={4} gap={8} rowHeight={180}>
  {photos.map((photo) => (
    <ImageListItem key={photo.id}>
      <img src={photo.url} alt={photo.caption} loading="lazy" />
      <ImageListItemBar title={photo.caption} />
    </ImageListItem>
  ))}
</ImageList>
```

### Product Catalog
```tsx
<ImageList cols={3} gap={12} rowHeight={220}>
  {products.map((product) => (
    <ImageListItem key={product.id}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <ImageListItemBar
        title={product.name}
        subtitle={`$${product.price}`}
        actionIcon={
          <IconButton><AddShoppingCartIcon /></IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>
```

### Portfolio Grid
```tsx
<ImageList variant="quilted" cols={4} rowHeight={150} gap={8}>
  {projects.map((project) => (
    <ImageListItem key={project.id} cols={project.featured ? 2 : 1} rows={project.featured ? 2 : 1}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <ImageListItemBar title={project.title} subtitle={project.category} />
    </ImageListItem>
  ))}
</ImageList>
```

---

## Responsive Behavior

### Mobile (< 600px)
- **Columns:** 2-3
- **Gap:** 4-8px
- **Row Height:** 120-150px
- **Touch:** Optimized for touch

### Tablet (600px - 900px)
- **Columns:** 3-4
- **Gap:** 8px
- **Row Height:** 150-180px
- **Layout:** Balanced

### Desktop (> 900px)
- **Columns:** 4-6
- **Gap:** 8-12px
- **Row Height:** 180-220px
- **Hover:** Actions on hover

---

## CDS Token Integration

### Uses CDS Spacing
```typescript
gap={1}   // 4px  (CDS spacing/1)
gap={2}   // 8px  (CDS spacing/2)  - Default
gap={3}   // 12px (CDS spacing/3)
gap={4}   // 16px (CDS spacing/4)
```

### Uses CDS Border Radius
```typescript
border-radius: var(--border-radius/small, 4px);  // Item borders
```

### Uses CDS Colors (ItemBar)
```typescript
background: rgba(0, 0, 0, 0.7);                    // Overlay
color: var(--color-palatte/common/white, #fff);    // Text
```

---

## Total Variant Combinations

**Variants:** 4 (standard, quilted, masonry, woven)
**Columns:** Variable (1-12+)
**Gap Sizes:** 11 (0-10 using CDS spacing)
**ItemBar Positions:** 3 (top, bottom, below)
**Row Heights:** Variable (fixed or auto)

**Practical Combinations:** Hundreds of configurations

---

## Related Components
- **Grid:** Alternative for mixed content layouts (CDS component)
- **Card:** For individual items with complex content (CDS component)
- **Gallery/Carousel:** For sequential image viewing
- **List:** For text-heavy lists (CDS component)

---

## Figma Design Reference
- **Component:** ImageList / Gallery Grid
- **Gap:** 4px, 8px, 12px, 16px (CDS spacing)
- **Variants:** Standard, Quilted, Masonry, Woven
- **Based on CDS:** Uses CDS spacing and border-radius tokens
- **Documentation:** [MUI ImageList API](https://mui.com/api/image-list)

---

## Migration Notes

### Integration with CDS
- **Gap:** Uses CDS spacing scale (1-4 most common = 4px, 8px, 12px, 16px)
- **Border Radius:** Uses CDS small (4px) for item corners
- **ItemBar Colors:** Uses semi-transparent black overlay with white text
- **Integration:** Works with CDS IconButton, Badge, Typography
- **Responsive:** Breakpoint-based column counts recommended

### Design Tokens Required
- **Spacing tokens:** 4px, 8px, 12px, 16px for gaps
- **Border radius tokens:** 4px (small) for item corners
- **Color tokens:** rgba(0, 0, 0, 0.7) overlay, white text
- **Breakpoint tokens:** xs, sm, md, lg, xl for responsive columns

---

## Performance Considerations

- Use `loading="lazy"` for all images
- Optimize image sizes (serve responsive images)
- Use srcSet for different resolutions
- Consider virtualization for very large lists (> 100 items)
- Lazy load images below fold
- Compress images appropriately
- Use appropriate image formats (WebP when possible)
- Avoid very large uncompressed images
- Consider progressive JPEGs
- Use CDN for image delivery

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS spacing and border-radius systems
- 4 layout variants documented (standard, quilted, masonry, woven)
- Full accessibility compliance (WCAG 2.1 Level AA)
- Image gallery component optimized for performance
