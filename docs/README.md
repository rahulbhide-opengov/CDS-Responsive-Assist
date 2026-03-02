# CDS Design System Documentation

Complete documentation for the CDS Component Design System.

---

## 📚 Quick Navigation

### **Getting Started**
- [Main README](../README.md) - Project overview
- [Quick Start Guide](../QUICK-START.md) - Get started in 5 minutes
- [Implementation Guide](../README-IMPLEMENTATION.md) - Detailed setup instructions

### **Reference Documentation**
- [Component Index](../COMPONENT-INDEX.md) - All 80 components
- [Token Reference](../TOKEN-REFERENCE.md) - Design tokens
- [Pattern Library](../PATTERN-LIBRARY.md) - Common patterns
- [Icon Usage Guide](../ICON-USAGE-GUIDE.md) - Icon guidelines
- [Project Status](../PROJECT-STATUS.md) - Current status

---

## 📖 Documentation Structure

### **Architecture** (`docs/architecture/`)
Deep dive into system architecture and design decisions:
- **CDS-FIRST-ARCHITECTURE.md** - CDS-first architecture explained
- **CDS-VS-MUI-COMPARISON.md** - CDS vs MUI API comparison
- **AUTOMATIC-CDS-USAGE.md** - How CDS abstracts MUI
- **RESPONSIVE_SYSTEM_DIAGRAM.md** - Responsive design system diagram
- **CDS-FIRST-IMPLEMENTATION-STATUS.md** - Implementation status
- **CDS-FIRST-REFACTOR-PLAN.md** - Refactor planning

### **Components** (`docs/components/`)
Detailed component documentation by category:
- **CDS-BUTTONS.md** - Button components (6 components)
- **CDS-FORMS.md** - Form components (17 components)
- **CDS-LAYOUT.md** - Layout components (13 components)
- **CDS-NAVIGATION.md** - Navigation components (16 components)
- **CDS-DATA-DISPLAY.md** - Data display components (19 components)
- **CDS-FEEDBACK.md** - Feedback components (10 components)
- **CDS-UTILITY.md** - Utility components (8 components)

### **Guides** (`docs/guides/`)
User guides and quick references:
- **ICON-POLICY.md** - Icon usage policies
- **ICON-QUICK-REFERENCE.md** - Quick icon reference
- **RESPONSIVE_QUICK_REFERENCE.md** - Responsive design quick reference

### **History** (`docs/history/implementation/`)
Implementation history and audit trails (for reference only):
- Component implementation summaries
- Feature audit documents
- Completion status reports
- Historical implementation notes

---

## 🎯 Documentation by Use Case

### **"I want to get started quickly"**
1. Read [Quick Start Guide](../QUICK-START.md)
2. Check [Component Index](../COMPONENT-INDEX.md)
3. Review [examples/](../examples/)

### **"I want to understand the architecture"**
1. Read [CDS-First Architecture](architecture/CDS-FIRST-ARCHITECTURE.md)
2. Review [CDS vs MUI Comparison](architecture/CDS-VS-MUI-COMPARISON.md)
3. Check [Responsive System Diagram](architecture/RESPONSIVE_SYSTEM_DIAGRAM.md)

### **"I want to use a specific component"**
1. Find component in [Component Index](../COMPONENT-INDEX.md)
2. Read relevant category doc in [docs/components/](components/)
3. Check [examples/](../examples/)

### **"I want to customize tokens"**
1. Read [Token Reference](../TOKEN-REFERENCE.md)
2. Review `src/theme/tokens.ts`
3. Check [Pattern Library](../PATTERN-LIBRARY.md)

### **"I want to ensure accessibility"**
- All components are **WCAG 2.1 Level AA** compliant
- See component docs for ARIA attributes
- Check [Pattern Library](../PATTERN-LIBRARY.md) for accessibility patterns

### **"I want responsive components"**
1. Read [Responsive Quick Reference](guides/RESPONSIVE_QUICK_REFERENCE.md)
2. Check [Responsive System Diagram](architecture/RESPONSIVE_SYSTEM_DIAGRAM.md)
3. All components are responsive by default

---

## 📦 Component Categories

### **Buttons** (6 components)
- Button, IconButton, FAB
- ButtonGroup, LoadingButton, ToggleButton
- [Detailed Documentation →](components/CDS-BUTTONS.md)

### **Forms** (17 components)
- TextField, Checkbox, Radio, Switch, Select
- Autocomplete, OutlinedInput, Slider, Rating
- [Detailed Documentation →](components/CDS-FORMS.md)

### **Layout** (13 components)
- Container, Box, Stack, Grid
- Paper, Card, Divider, Accordion
- [Detailed Documentation →](components/CDS-LAYOUT.md)

### **Navigation** (16 components)
- AppBar, Drawer, BottomNavigation
- Tabs, Stepper, Menu, Breadcrumbs
- [Detailed Documentation →](components/CDS-NAVIGATION.md)

### **Data Display** (19 components)
- Table, List, Avatar, Chip, Badge
- Tooltip, Typography, Alert, Dialog
- [Detailed Documentation →](components/CDS-DATA-DISPLAY.md)

### **Feedback** (10 components)
- CircularProgress, LinearProgress
- Skeleton, Snackbar, Alert, Dialog
- [Detailed Documentation →](components/CDS-FEEDBACK.md)

### **Utility** (8 components)
- Portal, ClickAwayListener, Popper
- Transitions: Grow, Fade, Slide, Zoom, Collapse
- [Detailed Documentation →](components/CDS-UTILITY.md)

---

## 🎨 Key Features

### **CDS-First Architecture**
- Semantic prop names (`variant="primary"` not `variant="contained"`)
- Intuitive API (`leftIcon` not `startIcon`)
- MUI abstracted as implementation detail
- Zero MUI knowledge required

### **Responsive Design**
- Mobile: 390px
- Tablet: 768px
- Desktop: 1440px
- All components adapt automatically

### **Component States**
- Default, Hover, Active, Focus, Disabled
- Error, Success, Warning (inputs)
- Read-Only (inputs)
- Loading (buttons)

### **Size Variants**
- Small (compact, desktop-optimized)
- Medium (default, balanced)
- Large (spacious, mobile-optimized)

### **Accessibility**
- WCAG 2.1 Level AA compliant
- Proper ARIA labels
- Keyboard navigation
- Touch target minimums (44x44px mobile)

---

## 🚀 Common Tasks

### **Using a Component**
```tsx
import { Button, TextField, Card } from '@/components';

// Simple usage
<Button variant="primary">Click Me</Button>

// With props
<TextField
  label="Email"
  type="email"
  state="error"
  helperText="Invalid email"
/>

// Responsive sizing
<Button size="large">Mobile-Optimized</Button>
```

### **Customizing Theme**
```tsx
import { createTheme } from '@/theme';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#your-color',
    },
  },
});
```

### **Using Design Tokens**
```tsx
import { theme } from '@/theme';

const MyComponent = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
}));
```

---

## 📊 Documentation Stats

| Category | Count |
|----------|-------|
| Total Components | 80 |
| Component Docs | 7 files |
| Architecture Docs | 5 files |
| Guides | 3 files |
| Code Examples | 400+ |
| Common Patterns | 250+ |
| Implementation History | 20+ files |

---

## 🔗 External Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design System](https://m3.material.io) (for reference, not required)

---

## 📞 Need Help?

1. Check [Component Index](../COMPONENT-INDEX.md) for component reference
2. Review [Pattern Library](../PATTERN-LIBRARY.md) for common patterns
3. Check [examples/](../examples/) for working code
4. Read category docs in [docs/components/](components/)

---

**Documentation Version:** 3.0.0
**Last Updated:** 2026-03-02
**Status:** ✅ Complete
