# Collapse Component Documentation

## Overview
The Collapse component expands and collapses content vertically with a smooth animation. It's used for accordion panels, expandable sections, show/hide content, and progressive disclosure patterns. Collapse automatically animates the height transition and supports nested collapsible content.

**Component Type:** Utility / Animation Component
**Based on:** Material-UI (MUI) v6.1.0 Collapse
**Documentation:** [MUI Collapse API](https://mui.com/api/collapse)

---

## Design Tokens

### Transition Tokens
```typescript
// Uses CDS transition system
'--component/collapse/transition-duration-entering': 'var(--transition/duration/entering, 225ms)',
'--component/collapse/transition-duration-leaving': 'var(--transition/duration/leaving, 195ms)',
'--component/collapse/transition-easing-entering': 'var(--transition/easing/ease-out, cubic-bezier(0, 0, 0.2, 1))',
'--component/collapse/transition-easing-leaving': 'var(--transition/easing/ease-in, cubic-bezier(0.4, 0, 1, 1))',
```

### Height Tokens
```typescript
'--component/collapse/height-collapsed': '0px',
'--component/collapse/height-expanded': 'auto',
'--component/collapse/min-height': '0px',
```

---

## Component Anatomy

### Collapse Container
- **Overflow:** Hidden (during transition)
- **Height:** 0 (collapsed) → auto (expanded)
- **Transition:** Height with easing
- **Display:** Block
- **Transform Origin:** Top

### Content Wrapper
- **Inner Element:** Wraps actual content
- **Visibility:** Hidden when collapsed
- **Opacity:** Can animate (optional)
- **Margin:** Preserved during animation

### Animation Behavior
- **Enter:** 0 height → full height (225ms ease-out)
- **Exit:** Full height → 0 height (195ms ease-in)
- **Method:** CSS transition on height property
- **Smooth:** Handles dynamic content height

---

## Orientation Variants

### Vertical (Default)
- **Direction:** Top to bottom
- **Property:** Height animation
- **Use Case:** Most common, standard accordion
- **Default Behavior:** Expands downward

### Horizontal
- **Direction:** Left to right
- **Property:** Width animation
- **Use Case:** Sidebar expansion, horizontal panels
- **Rare:** Less common than vertical

---

## States

### Collapsed (Closed)
- **Height:** 0px
- **Overflow:** Hidden
- **Visibility:** Content hidden
- **Transition:** None (static)
- **Aria:** `aria-expanded="false"`

### Expanding (Opening)
- **Height:** 0 → auto
- **Duration:** 225ms
- **Easing:** ease-out
- **Overflow:** Hidden
- **Transition:** Active

### Expanded (Open)
- **Height:** auto
- **Overflow:** Visible
- **Visibility:** Content visible
- **Transition:** Complete
- **Aria:** `aria-expanded="true"`

### Collapsing (Closing)
- **Height:** auto → 0
- **Duration:** 195ms
- **Easing:** ease-in
- **Overflow:** Hidden
- **Transition:** Active

---

## Usage Guidelines

### When to Use
- Accordion panels
- Expandable content sections
- Show/hide details
- Progressive disclosure
- FAQ sections
- Form sections that can collapse
- Sidebar expansion
- Mobile menu expansion
- Filter panels
- Step-by-step forms

### When NOT to Use
- Tabs (use Tabs component)
- Dialogs/Modals (use Dialog)
- Fade animations (use Fade)
- Slide animations (use Slide)
- Complex multi-state transitions
- Horizontal carousels (use different component)

### Best Practices

#### Do
- Use for vertical content expansion
- Provide clear expand/collapse indicator
- Animate smoothly with CDS transitions
- Allow keyboard control (Enter/Space)
- Use ARIA attributes properly
- Keep collapsed content accessible
- Support multiple open panels (if appropriate)
- Use accordion pattern for related sections
- Provide visual feedback on hover
- Ensure content is fully visible when expanded

#### Don't
- Animate too slowly (> 300ms)
- Nest too many levels (> 3)
- Forget ARIA expanded state
- Hide critical information
- Use for permanent content
- Make toggle target too small
- Forget keyboard navigation
- Use without clear trigger
- Animate too quickly (< 150ms)
- Block all content during animation

---

## Component Integration (CDS Base Components)

### With CDS List (Nested Menu)
```typescript
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const [open, setOpen] = useState(false);

<List>
  <ListItemButton onClick={() => setOpen(!open)}>
    <ListItemText primary="Menu Item" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open}>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Sub Item 1" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Sub Item 2" />
      </ListItemButton>
    </List>
  </Collapse>
</List>
```

### With CDS Card (Expandable Card)
```typescript
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

<Card>
  <CardHeader
    title="Expandable Card"
    action={
      <IconButton onClick={() => setExpanded(!expanded)}>
        <ExpandMoreIcon />
      </IconButton>
    }
  />
  <Collapse in={expanded}>
    <CardContent>
      Hidden content that expands
    </CardContent>
  </Collapse>
</Card>
```

### With CDS Alert (Expandable Alert)
```typescript
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

<Collapse in={open}>
  <Alert
    action={
      <IconButton size="small" onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    }
    severity="info"
  >
    This is a collapsible alert message.
  </Alert>
</Collapse>
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Semantic HTML
```html
<button aria-expanded="false" aria-controls="content-id">
  Toggle Content
</button>
<div id="content-id" role="region" aria-labelledby="button-id">
  Collapsible content
</div>
```

#### ARIA Attributes
```typescript
{
  // On trigger button
  "aria-expanded": expanded,
  "aria-controls": "collapse-content-id",
  id: "trigger-button-id",

  // On Collapse content
  id: "collapse-content-id",
  role: "region",
  "aria-labelledby": "trigger-button-id",
}
```

#### Keyboard Navigation
- **Enter/Space:** Toggle expand/collapse
- **Tab:** Navigate to next focusable element
- **Shift+Tab:** Navigate to previous element
- **Escape:** Optional close (for modals)

#### Focus Management
- Focus remains on trigger after toggle
- Content receives focus if needed
- Tab order includes expanded content
- Skip links work properly

#### Screen Reader Support
- State announced ("expanded" / "collapsed")
- Content changes announced
- Region labeled appropriately
- Live region updates (optional)

---

## Code Examples

### Basic Collapse
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function BasicCollapse() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Button onClick={() => setChecked(!checked)}>
        {checked ? 'Hide' : 'Show'} Content
      </Button>
      <Collapse in={checked}>
        <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', mt: 2 }}>
          This is the collapsible content. It will expand and collapse with a smooth animation.
        </Box>
      </Collapse>
    </>
  );
}
```

### Accordion Panel
```tsx
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionCollapse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardHeader
        title="Expandable Section"
        action={
          <IconButton
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon
              sx={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography paragraph>
            This is the expandable content area. It contains additional details that are hidden by default.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
```

### Nested List Menu
```tsx
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedListCollapse() {
  const [open, setOpen] = useState(false);

  return (
    <List>
      <ListItemButton>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon><DraftsIcon /></ListItemIcon>
        <ListItemText primary="Drafts" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><SendIcon /></ListItemIcon>
            <ListItemText primary="Sent Mail" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="All Mail" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
```

### Multiple Collapsible Sections
```tsx
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MultipleCollapse() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Box>
      {['panel1', 'panel2', 'panel3'].map((panel, index) => (
        <Box key={panel} sx={{ border: '1px solid', borderColor: 'divider', mb: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              cursor: 'pointer',
            }}
            onClick={() => handleChange(panel)}
          >
            <Typography>Section {index + 1}</Typography>
            <IconButton size="small">
              <ExpandMoreIcon
                sx={{
                  transform: expanded === panel ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </IconButton>
          </Box>
          <Collapse in={expanded === panel}>
            <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography>Content for section {index + 1}</Typography>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
```

### Show More / Show Less
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ShowMoreCollapse() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box>
      <Typography paragraph>
        This is the always-visible content preview. Click "Show More" to see additional details.
      </Typography>
      <Collapse in={showMore} collapsedSize={0}>
        <Typography paragraph>
          This is additional content that is hidden by default. It provides more detailed information when expanded.
        </Typography>
        <Typography paragraph>
          You can include as much content as needed here. The collapse animation will handle the height automatically.
        </Typography>
      </Collapse>
      <Button onClick={() => setShowMore(!showMore)} size="small">
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
}
```

### Collapsible Alert
```tsx
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertCollapse() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Warning</AlertTitle>
        This is a collapsible warning alert — click the close button to dismiss!
      </Alert>
    </Collapse>
  );
}
```

### Partial Collapse
```tsx
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PartialCollapse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Collapse in={!expanded} collapsedSize={40}>
        <Box sx={{ height: 200, bgcolor: 'primary.light', p: 2 }}>
          <Typography>
            This content is partially visible when collapsed (40px) and fully visible when expanded (200px).
          </Typography>
        </Box>
      </Collapse>
      <Button onClick={() => setExpanded(!expanded)} sx={{ mt: 1 }}>
        {expanded ? 'Expand' : 'Collapse'}
      </Button>
    </Box>
  );
}
```

### FAQ Accordion
```tsx
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQCollapse() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const faqs: FAQItem[] = [
    { question: 'What is Material-UI?', answer: 'Material-UI is a React component library...' },
    { question: 'How do I install it?', answer: 'Run npm install @mui/material...' },
    { question: 'Is it free?', answer: 'Yes, it is open source and free to use...' },
  ];

  return (
    <Box>
      {faqs.map((faq, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            mb: 1,
            overflow: 'hidden',
          }}
        >
          <Box
            onClick={() => setExpanded(expanded === index ? false : index)}
            sx={{
              p: 2,
              cursor: 'pointer',
              bgcolor: expanded === index ? 'action.selected' : 'transparent',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Typography fontWeight="medium">{faq.question}</Typography>
          </Box>
          <Collapse in={expanded === index}>
            <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography variant="body2">{faq.answer}</Typography>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
```

---

## Common Patterns

### Simple Toggle
```tsx
<Button onClick={() => setOpen(!open)}>Toggle</Button>
<Collapse in={open}>
  <Box sx={{ p: 2 }}>Content</Box>
</Collapse>
```

### Accordion Item
```tsx
<Box onClick={() => setExpanded(!expanded)} sx={{ cursor: 'pointer', p: 2 }}>
  <Typography>Accordion Title</Typography>
  <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
</Box>
<Collapse in={expanded}>
  <Box sx={{ p: 2 }}>Expanded content</Box>
</Collapse>
```

### Expandable List Item
```tsx
<ListItemButton onClick={() => setOpen(!open)}>
  <ListItemText primary="Item" />
  {open ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={open}>
  <List component="div" disablePadding>
    <ListItemButton sx={{ pl: 4 }}>Nested Item</ListItemButton>
  </List>
</Collapse>
```

---

## Responsive Behavior

### Mobile (< 600px)
- Collapse works the same across devices
- Ensure touch targets are 48px minimum
- Consider full-width panels
- May want faster animations

### Tablet (600px - 900px)
- Standard behavior
- Good for accordions
- Side panels work well

### Desktop (> 900px)
- Full functionality
- Can use hover states
- Multiple columns possible
- Nested collapse supported

---

## CDS Token Integration

### Uses CDS Transitions
```typescript
// Entering (expanding)
transition-duration: var(--transition/duration/entering, 225ms);
transition-timing-function: var(--transition/easing/ease-out);

// Leaving (collapsing)
transition-duration: var(--transition/duration/leaving, 195ms);
transition-timing-function: var(--transition/easing/ease-in);
```

### Height Animation
```typescript
height: 0px;          // Collapsed
height: auto;         // Expanded
min-height: 0px;      // Minimum
overflow: hidden;     // During transition
```

---

## Total Variant Combinations

**States:** 4 (collapsed, expanding, expanded, collapsing)
**Orientations:** 2 (vertical, horizontal)
**Unmount Behavior:** 2 (unmountOnExit true/false)
**Timeout:** 3 (auto, custom, per-phase)
**Partial Collapse:** 2 (with collapsedSize, without)

**Practical Combinations:** 48+ configurations

---

## Related Components
- **Accordion:** Specialized Collapse for accordions (could be CDS component)
- **Expand/Transition:** Similar animation components
- **List:** Often used with nested collapsible items (CDS component)
- **Card:** Expandable cards (CDS component)
- **Alert:** Dismissible alerts (CDS component)

---

## Figma Design Reference
- **Component:** Collapse / Expand Animation
- **Transition:** 225ms entering (ease-out), 195ms leaving (ease-in)
- **Direction:** Vertical (default), Horizontal (optional)
- **Based on CDS:** Uses CDS transition tokens
- **Documentation:** [MUI Collapse API](https://mui.com/api/collapse)

---

## Migration Notes

### Integration with CDS
- **Transitions:** Uses CDS entering (225ms) and leaving (195ms) durations
- **Easing:** Uses CDS ease-out (enter) and ease-in (exit)
- **Integration:** Works with all CDS components (List, Card, Alert, Button, etc.)
- **Height Animation:** Automatic height calculation
- **Unmount Option:** `unmountOnExit` removes DOM content when collapsed

### Design Tokens Required
- **Transition tokens:** 225ms entering, 195ms leaving duration
- **Easing tokens:** ease-out (expanding), ease-in (collapsing)

---

## Performance Considerations

- Uses CSS transitions (GPU accelerated)
- Height auto calculation can cause reflows
- Use `unmountOnExit` to remove unused DOM nodes
- Avoid animating very large content blocks
- Consider lazy loading for heavy content
- Minimize nested collapse levels
- Use React.memo for static content
- `timeout="auto"` calculates optimal timing

---

## Best Practices Summary

### Transition Duration
- **Default:** 225ms enter, 195ms exit
- **Fast:** 150-200ms for simple content
- **Slow:** 300ms+ for complex content
- **Auto:** Let MUI calculate based on content height

### Accessibility
- Always provide `aria-expanded` on trigger
- Use `aria-controls` to link trigger and content
- Ensure keyboard navigation works
- Screen readers announce state changes

### Content
- Keep collapsed sections focused
- Don't hide critical information
- Use clear expand/collapse indicators
- Support multiple open panels when appropriate

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
- Integrated with CDS design tokens
- Uses CDS transition system (entering/leaving durations and easing)
- 48+ configuration options documented
- Full accessibility compliance (WCAG 2.1 Level AA)
- Animation utility component for expand/collapse patterns
