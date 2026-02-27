# Automatic CDS Usage Guide

## 🎯 CDS is Now the Default Design System

**You never need to mention "CDS" anymore!** The system automatically uses CDS components and tokens for ANY design request.

---

## How It Works

### Simple Request → CDS Code (Automatic)

Just describe what you want, and get production-ready CDS code:

| You Say | You Get |
|---------|---------|
| "Create a button" | CDS Button with proper tokens |
| "Build a form" | CDS TextField + LoadingButton pattern |
| "Make a dashboard" | CDS AppBar + Drawer + Grid + Cards |
| "Design a profile card" | CDS Card + Avatar + Badge |

**No need to say "use CDS" - it's automatic!**

---

## Three Ways to Use

### 1. Text Prompts (Automatic CDS Translation)

**Just describe what you want:**

```
"Create a login page"
```

**You automatically get:**
```tsx
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Stack spacing={3}>
        <Typography variant="h4">Sign In</Typography>
        <TextField label="Email" type="email" required fullWidth />
        <TextField label="Password" type="password" required fullWidth />
        <LoadingButton variant="contained" fullWidth>
          Sign In
        </LoadingButton>
      </Stack>
    </Container>
  );
}
```

All using CDS tokens:
- `spacing={3}` (12px gap)
- `maxWidth="xs"` (444px)
- `variant="h4"` (typography token)
- `variant="contained"` (button style)
- Automatic accessibility
- Responsive by default

---

### 2. Figma Files (Automatic Component Mapping)

**Provide a Figma URL:**

```
"Implement this design: https://figma.com/design/abc123"
```

**System automatically:**
1. ✅ Fetches the Figma design
2. ✅ Identifies UI elements (buttons, inputs, cards, etc.)
3. ✅ Maps to CDS components
4. ✅ Converts colors to CDS tokens
5. ✅ Converts spacing to CDS spacing scale
6. ✅ Maps typography to CDS variants
7. ✅ Generates production-ready code

**Example mapping:**
- Blue button in Figma → `<Button color="primary">`
- 12px spacing → `spacing={3}`
- Large heading → `<Typography variant="h3">`
- Card with shadow → `<Card elevation={1}>`

---

### 3. Screenshots (Automatic Recreation)

**Upload or describe a screenshot:**

```
"Look at this dashboard screenshot and recreate it"
```

**System automatically:**
1. ✅ Analyzes the layout
2. ✅ Identifies components (AppBar, Drawer, Cards, Table, etc.)
3. ✅ Maps to CDS equivalents
4. ✅ Applies proper tokens
5. ✅ Makes it responsive
6. ✅ Adds accessibility features

---

## Automatic Translations

### Common Requests → CDS Components

#### "Create a button"
```tsx
<Button variant="contained" color="primary">
  Click Me
</Button>
```

#### "Build a contact form"
```tsx
<Stack spacing={3}>
  <TextField label="Name" required fullWidth />
  <TextField label="Email" type="email" required fullWidth />
  <TextField label="Message" multiline rows={4} fullWidth />
  <LoadingButton variant="contained">Send</LoadingButton>
</Stack>
```

#### "Make a user card"
```tsx
<Card elevation={1}>
  <CardHeader
    avatar={<Avatar>JD</Avatar>}
    title="John Doe"
    subheader="Software Engineer"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      Bio text here
    </Typography>
  </CardContent>
</Card>
```

#### "Create a data table"
```tsx
<Paper elevation={1}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {/* rows */}
    </TableBody>
  </Table>
</Paper>
<Pagination count={10} />
```

---

## What Gets Applied Automatically

### ✅ CDS Components
Every element uses proper CDS components:
- Buttons → `<Button>`, `<IconButton>`, `<FAB>`
- Inputs → `<TextField>`, `<Checkbox>`, `<Switch>`
- Layout → `<Container>`, `<Grid>`, `<Stack>`
- Navigation → `<AppBar>`, `<Drawer>`, `<BottomNavigation>`
- Display → `<Card>`, `<Typography>`, `<Avatar>`

### ✅ CDS Tokens
All styling uses design tokens:
- Colors → `color="primary"`, `bgcolor="background.paper"`
- Spacing → `spacing={3}`, `sx={{ p: 2, mt: 4 }}`
- Typography → `variant="h4"`, `variant="body1"`
- Elevation → `elevation={1}`, `elevation={4}`
- Border Radius → `borderRadius: 1` (4px)

### ✅ Accessibility (WCAG 2.1 AA)
Built-in automatically:
- Keyboard navigation
- ARIA attributes
- Color contrast (4.5:1 text, 3:1 non-text)
- Touch targets (48px minimum)
- Screen reader support
- Error messages with proper association

### ✅ Responsive Design
Mobile-first automatically:
- Breakpoints: `xs`, `sm`, `md`, `lg`, `xl`
- Grid responsive: `<Grid item xs={12} sm={6} md={4}>`
- Spacing responsive: `sx={{ p: { xs: 2, md: 4 } }}`

---

## Example Workflows

### Workflow 1: Quick Prototype

**You:**
```
"Create a dashboard with a top bar, sidebar, and grid of stat cards"
```

**System generates:**
- CDS AppBar (elevation={4})
- CDS Drawer (elevation={16})
- CDS Grid (spacing={3})
- CDS Cards (elevation={1})
- All with proper tokens
- Fully responsive
- Accessible

### Workflow 2: From Figma

**You:**
```
"Implement this Figma design: [URL]"
```

**System automatically:**
1. Fetches design
2. Maps colors to CDS tokens (primary/secondary/error)
3. Converts spacing to 4px grid
4. Maps text to Typography variants
5. Generates responsive code
6. Adds accessibility

### Workflow 3: From Screenshot

**You:**
```
"Recreate this login page: [screenshot]"
```

**System automatically:**
1. Analyzes layout (centered, max-width container)
2. Identifies inputs (email, password)
3. Maps to CDS TextField
4. Adds LoadingButton for submit
5. Includes error Alert
6. Makes responsive
7. Adds full accessibility

---

## Token Mapping Reference

### Colors (Automatic)
| Design Color | CDS Token | Component Usage |
|--------------|-----------|-----------------|
| Blue button | `primary.main` | `color="primary"` |
| Purple | `secondary.main` | `color="secondary"` |
| Red error | `error.main` | `color="error"` |
| Green success | `success.main` | `color="success"` |
| Orange warning | `warning.main` | `color="warning"` |
| Light blue info | `info.main` | `color="info"` |

### Spacing (Automatic)
| Design Spacing | CDS Token | Usage |
|----------------|-----------|-------|
| 4px | `spacing(1)` | `sx={{ p: 1 }}` |
| 8px | `spacing(2)` | `spacing={2}` |
| 12px | `spacing(3)` | `spacing={3}` |
| 16px | `spacing(4)` | `sx={{ p: 4 }}` |
| 24px | `spacing(6)` | `spacing={6}` |
| 32px | `spacing(8)` | `sx={{ p: 8 }}` |

### Typography (Automatic)
| Design Text | CDS Token | Usage |
|-------------|-----------|-------|
| Page title | `h3` or `h4` | `variant="h3"` |
| Section title | `h5` or `h6` | `variant="h5"` |
| Body text | `body1` | `variant="body1"` |
| Secondary text | `body2` | `variant="body2"` |
| Helper text | `caption` | `variant="caption"` |
| Button text | `button` | `variant="button"` |

### Elevation (Automatic)
| Design Shadow | CDS Token | Usage |
|---------------|-----------|-------|
| Subtle | `elevation={1}` | Cards at rest |
| Medium | `elevation={4}` | App bar |
| Strong | `elevation={8}` | Floating buttons |
| Maximum | `elevation={16}` | Drawer |

---

## Quality Guarantees

Every generated design automatically includes:

### ✅ 100% CDS Component Usage
- No plain HTML elements
- No other component libraries
- Only Material-UI with CDS tokens

### ✅ 100% Token Usage
- No hard-coded colors
- No hard-coded spacing
- No hard-coded typography
- All values from design tokens

### ✅ 100% Accessibility
- WCAG 2.1 Level AA compliant
- Keyboard navigation
- ARIA attributes
- Proper color contrast
- 48px touch targets

### ✅ 100% Responsive
- Mobile-first design
- All breakpoints covered
- Proper grid usage
- Responsive spacing

### ✅ 100% TypeScript
- Type-safe code
- Proper imports
- No type errors

---

## Usage Examples

### Example 1: Quick Button
**Prompt:**
```
"Create a primary button that says 'Get Started'"
```

**Generated:**
```tsx
import Button from '@mui/material/Button';

<Button variant="contained" color="primary">
  Get Started
</Button>
```

### Example 2: Form
**Prompt:**
```
"Create a signup form with name, email, password, and submit button"
```

**Generated:**
```tsx
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

<Stack spacing={3}>
  <TextField label="Name" required fullWidth />
  <TextField label="Email" type="email" required fullWidth />
  <TextField label="Password" type="password" required fullWidth />
  <LoadingButton variant="contained" fullWidth>
    Sign Up
  </LoadingButton>
</Stack>
```

### Example 3: Navigation
**Prompt:**
```
"Create a top navigation bar with logo and menu"
```

**Generated:**
```tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

<AppBar position="fixed" elevation={4}>
  <Toolbar>
    <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      My App
    </Typography>
  </Toolbar>
</AppBar>
```

---

## Try It Now

### In Claude Code
```bash
cd CDS-Responsive-Assist
claude .

# Then just ask:
# "Create a login page"
# "Build a dashboard"
# "Make a profile card"
```

### In Cursor
```bash
cd CDS-Responsive-Assist
cursor .

# Then just ask:
# "Create a contact form"
# "Build a data table"
# "Make a user card"
```

**No need to mention CDS - it's automatic!**

---

## Benefits

### For Developers
- 🚀 **Faster Development** - No need to look up component names
- 📐 **Consistent Design** - All designs follow CDS standards
- ♿ **Built-in Accessibility** - WCAG 2.1 AA compliance automatic
- 📱 **Responsive by Default** - Mobile-first included
- 🎨 **Proper Tokens** - No hard-coded values ever

### For Teams
- 🎯 **Design Consistency** - Everyone uses same components
- 🔧 **Easy Maintenance** - Token-based styling
- 📚 **Self-Documenting** - Clear component usage
- ✅ **Quality Assured** - Automatic best practices
- 🌐 **Accessible by Default** - No accessibility debt

---

## What Changed?

### Before (Manual)
```
"Create a button using CDS Button component with primary color"
```

### After (Automatic)
```
"Create a button"
```

**Same result, no CDS mention needed!**

---

## Technical Details

The system automatically:

1. **Parses Input** - Understands prompts, Figma URLs, screenshots
2. **Identifies Elements** - Recognizes buttons, inputs, cards, etc.
3. **Maps to CDS** - Selects appropriate CDS components
4. **Applies Tokens** - Uses proper color, spacing, typography tokens
5. **Ensures Accessibility** - Adds ARIA attributes, keyboard support
6. **Makes Responsive** - Applies breakpoints, mobile-first
7. **Generates Code** - Production-ready TypeScript/React

---

**🎉 Now you can create any design with just a simple description - CDS is automatic!**

---

**Version:** 1.4.0
**Last Updated:** 2026-02-27
**Status:** Production Ready
