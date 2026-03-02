# CDS Design System

**Version 3.0.0** | **Production Ready** ✅

A complete, production-ready component design system with CDS-first architecture, 100% Figma compliance, WCAG 2.1 Level AA accessibility, and full responsive design.

[![Components](https://img.shields.io/badge/Components-80-success)](COMPONENT-INDEX.md)
[![Figma Compliance](https://img.shields.io/badge/Figma-100%25-blue)](docs/history/implementation/)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20Level%20AA-green)](docs/components/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Full-blue)](src/)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy files to your project
cp -r src/components your-project/src/
cp -r src/theme your-project/src/

# Use components
import { Button, TextField, Card } from '@/components';
import { ThemeProvider } from '@/theme';
```

**👉 See [QUICK-START.md](QUICK-START.md) for detailed setup**

---

## 📊 What's Inside

### **80 Components** - Production Ready

| Category | Count | Examples |
|----------|-------|----------|
| **Buttons** | 6 | Button, IconButton, FAB, ButtonGroup, LoadingButton, ToggleButton |
| **Forms** | 17 | TextField, Checkbox, Radio, Switch, Select, Autocomplete, Slider, Rating |
| **Layout** | 13 | Container, Box, Stack, Grid, Paper, Card, Divider, Accordion |
| **Navigation** | 16 | AppBar, Drawer, Tabs, Menu, Stepper, Breadcrumbs, Pagination |
| **Data Display** | 19 | Table, List, Avatar, Chip, Badge, Tooltip, Typography, Alert |
| **Feedback** | 10 | Progress, Skeleton, Snackbar, Alert, Dialog, Backdrop, Modal |
| **Utility** | 8 | Portal, ClickAwayListener, Popper, Transitions (Grow, Fade, Slide, Zoom, Collapse) |
| **Special** | 3 | TreeView, TreeItem, Timeline |

### **Complete Documentation**

- **400+ Code Examples** - Copy-paste ready
- **250+ Common Patterns** - Best practices
- **100% TypeScript** - Full type safety
- **WCAG 2.1 Level AA** - Accessibility compliant

---

## ✨ Key Features

### **CDS-First Architecture**

Intuitive, semantic API that abstracts Material-UI complexity:

```tsx
// CDS Way (Simple & Intuitive)
<Button variant="primary" leftIcon={<SaveIcon />} loading>
  Save Changes
</Button>

// vs MUI Way (Complex & Verbose)
<Button variant="contained" color="primary" startIcon={<SaveIcon />}>
  {loading ? <CircularProgress size={20} /> : 'Save Changes'}
</Button>
```

**Key Principles:**
- ✅ Semantic prop names (`variant="primary"` not `variant="contained"`)
- ✅ Intuitive API (`leftIcon` not `startIcon`)
- ✅ Built-in features (loading states, responsive sizing)
- ✅ Zero MUI knowledge required

### **100% Figma Compliance**

Every component matches Figma designs exactly:

- ✅ Exact color values from Figma variables
- ✅ Proper typography scaling
- ✅ Correct component states (disabled, hover, focus, active)
- ✅ Accurate spacing and sizing
- ✅ Read-only states with purple-tinted backgrounds

### **Fully Responsive**

All components adapt to screen sizes automatically:

- **Mobile**: 390px - Larger touch targets (44x44px minimum)
- **Tablet**: 768px - Balanced sizing
- **Desktop**: 1440px - Compact, information-dense

```tsx
// Automatically responsive
<Button size="large">Mobile-Optimized</Button>  // 48px on mobile, 40px on desktop
<TextField size="small">Desktop-Dense</TextField>  // 28px on desktop, 32px on mobile
```

### **WCAG 2.1 Level AA Compliant**

- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast ratios verified
- ✅ Touch target minimums (44x44px on mobile)
- ✅ Screen reader friendly

---

## 📚 Documentation

### **Quick Links**

| Document | Description |
|----------|-------------|
| [Quick Start](QUICK-START.md) | Get started in 5 minutes |
| [Component Index](COMPONENT-INDEX.md) | All 80 components |
| [Token Reference](TOKEN-REFERENCE.md) | Design tokens |
| [Pattern Library](PATTERN-LIBRARY.md) | Common patterns |
| [Icon Guide](ICON-USAGE-GUIDE.md) | Icon usage |
| [Project Status](PROJECT-STATUS.md) | Current status |
| [Changelog](CHANGELOG.md) | Version history |

### **Detailed Documentation**

```
docs/
├── architecture/           # Architecture & design decisions
│   ├── CDS-FIRST-ARCHITECTURE.md
│   ├── CDS-VS-MUI-COMPARISON.md
│   └── RESPONSIVE_SYSTEM_DIAGRAM.md
├── components/            # Component documentation
│   ├── CDS-BUTTONS.md
│   ├── CDS-FORMS.md
│   ├── CDS-LAYOUT.md
│   ├── CDS-NAVIGATION.md
│   ├── CDS-DATA-DISPLAY.md
│   ├── CDS-FEEDBACK.md
│   └── CDS-UTILITY.md
├── guides/                # User guides
│   ├── ICON-POLICY.md
│   ├── ICON-QUICK-REFERENCE.md
│   └── RESPONSIVE_QUICK_REFERENCE.md
└── history/               # Implementation history
    └── implementation/
```

**👉 See [docs/README.md](docs/README.md) for complete navigation**

---

## 💡 Usage Examples

### **Simple Button**
```tsx
import { Button } from '@/components';

<Button variant="primary" onClick={handleSave}>
  Save Changes
</Button>
```

### **Form with States**
```tsx
import { TextField } from '@/components';

// Error state
<TextField
  label="Email"
  type="email"
  state="error"
  helperText="Invalid email address"
/>

// Success state
<TextField
  label="Email"
  type="email"
  state="success"
  helperText="Email verified"
/>

// Read-only state (NEW in v3.0.0)
<TextField
  label="Email"
  value="user@example.com"
  readOnly
/>
```

### **Responsive Components**
```tsx
import { Button, TextField, Card } from '@/components';

// Automatically responsive sizing
<Button size="large">Mobile-Optimized</Button>
<TextField size="small" label="Desktop-Dense" />

// Responsive layout
<Card>
  <Stack spacing={2}>
    <TextField label="Name" fullWidth />
    <TextField label="Email" fullWidth />
    <Button variant="primary" fullWidth>Submit</Button>
  </Stack>
</Card>
```

### **With Theme**
```tsx
import { ThemeProvider } from '@/theme';
import { Button, TextField } from '@/components';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Themed Button</Button>
      <TextField label="Themed Input" />
    </ThemeProvider>
  );
}
```

**👉 See [examples/](examples/) for complete examples**

---

## 🎨 Design System

### **Design Tokens**

8 comprehensive token categories:

1. **Colors** - Primary, secondary, semantic colors
2. **Typography** - Responsive type scale
3. **Spacing** - Consistent spacing system
4. **Elevation** - Shadow hierarchy
5. **Borders** - Radius and widths
6. **States** - Hover, focus, active, disabled
7. **Breakpoints** - Mobile, tablet, desktop
8. **Transitions** - Consistent animations

**👉 See [TOKEN-REFERENCE.md](TOKEN-REFERENCE.md) for complete token list**

### **Component States**

All components support comprehensive states:

- **Default** - Base appearance
- **Hover** - Mouse over
- **Active** - Pressed/clicked
- **Focus** - Keyboard navigation
- **Disabled** - Inactive (60% opacity for buttons, grey background for inputs)
- **Read-Only** - View-only (purple-tinted background, text selectable)
- **Error/Success/Warning** - Validation states (inputs)
- **Loading** - Async operations (buttons)

### **Size Variants**

Consistent sizing across all components:

- **Small** - Compact, desktop-optimized (28-32px)
- **Medium** - Default, balanced (32-40px)
- **Large** - Spacious, mobile-optimized (40-48px)

All sizes automatically adjust across breakpoints.

---

## 🏗️ Architecture

### **CDS-First Design**

```
┌─────────────────────────────────────┐
│          Developer Uses              │
│      CDS Components & Props          │
│   (Semantic, Intuitive API)          │
└──────────────┬──────────────────────┘
               │
        Maps internally to
               │
┌──────────────▼──────────────────────┐
│     MUI Components & Props           │
│   (Implementation Detail)            │
└──────────────┬──────────────────────┘
               │
        Renders to
               │
┌──────────────▼──────────────────────┐
│         DOM Elements                 │
│    (HTML/CSS Output)                 │
└─────────────────────────────────────┘
```

**Benefits:**
- Developers never see MUI complexity
- Future MUI updates don't break your code
- Can swap UI library without API changes
- Consistent experience across all components

**👉 See [docs/architecture/CDS-FIRST-ARCHITECTURE.md](docs/architecture/CDS-FIRST-ARCHITECTURE.md) for details**

---

## 📦 Project Structure

```
CDS-Responsive-Assist/
├── README.md                      # This file
├── QUICK-START.md                 # Quick start guide
├── COMPONENT-INDEX.md             # Component reference
├── TOKEN-REFERENCE.md             # Design tokens
├── PATTERN-LIBRARY.md             # Common patterns
├── ICON-USAGE-GUIDE.md           # Icon guide
├── PROJECT-STATUS.md              # Status & metrics
├── CHANGELOG.md                   # Version history
├── docs/
│   ├── README.md                  # Documentation index
│   ├── architecture/              # Architecture docs
│   ├── components/                # Component docs
│   ├── guides/                    # User guides
│   └── history/                   # Implementation history
├── src/
│   ├── components/                # Component implementations
│   │   ├── Button.tsx
│   │   ├── Form.tsx
│   │   ├── FormExtended.tsx
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── DataDisplay.tsx
│   │   ├── Feedback.tsx
│   │   └── Utility.tsx
│   ├── theme/                     # Theme & tokens
│   │   ├── index.ts
│   │   └── tokens.ts
│   └── index.ts                   # Main exports
├── examples/                      # Usage examples
│   ├── basic-usage.tsx
│   ├── ButtonCDSFirstExamples.tsx
│   ├── dashboard-example.tsx
│   └── IconExamples.tsx
└── package.json
```

---

## 🚦 Status

| Feature | Status |
|---------|--------|
| **Components** | ✅ 80/80 (100%) |
| **Figma Compliance** | ✅ 100% |
| **Responsive Design** | ✅ Complete |
| **Accessibility** | ✅ WCAG 2.1 AA |
| **TypeScript** | ✅ Full Support |
| **Documentation** | ✅ Complete |
| **Examples** | ✅ 400+ |
| **Production Ready** | ✅ Yes |

**👉 See [PROJECT-STATUS.md](PROJECT-STATUS.md) for detailed metrics**

---

## 📝 Recent Updates

### **v3.0.0 - 2026-03-02** (Current)
- ✅ 100% Figma-compliant component states
- ✅ Read-only state for all input components
- ✅ Responsive size variants for all form components
- ✅ Documentation restructure with clean organization

### **v2.1.0 - 2026-03-01**
- ✅ Responsive theme system
- ✅ TextField responsive implementation
- ✅ Automatic responsive typography

### **v2.0.0 - 2026-02-28**
- ✅ Complete CDS-first architecture
- ✅ 80 components implemented
- ✅ Comprehensive documentation

**👉 See [CHANGELOG.md](CHANGELOG.md) for complete history**

---

## 🎯 Getting Started

### **1. Quick Setup** (5 minutes)
```bash
# See QUICK-START.md
npm install
cp -r src/components your-project/src/
cp -r src/theme your-project/src/
```

### **2. Choose Your Path**

#### **For New Users**
1. Read [QUICK-START.md](QUICK-START.md)
2. Check [examples/basic-usage.tsx](examples/basic-usage.tsx)
3. Browse [COMPONENT-INDEX.md](COMPONENT-INDEX.md)

#### **For Experienced Developers**
1. Review [docs/architecture/CDS-FIRST-ARCHITECTURE.md](docs/architecture/CDS-FIRST-ARCHITECTURE.md)
2. Check [PATTERN-LIBRARY.md](PATTERN-LIBRARY.md)
3. Explore [docs/components/](docs/components/)

#### **For Designers**
1. Review [TOKEN-REFERENCE.md](TOKEN-REFERENCE.md)
2. Check [ICON-USAGE-GUIDE.md](ICON-USAGE-GUIDE.md)
3. See [docs/guides/RESPONSIVE_QUICK_REFERENCE.md](docs/guides/RESPONSIVE_QUICK_REFERENCE.md)

---

## 🤝 Contributing

This is a production-ready design system. For questions or suggestions:

1. Review [documentation](docs/README.md)
2. Check [examples](examples/)
3. See [Project Status](PROJECT-STATUS.md)

---

## 📄 License

MIT License - See package.json for details

---

## 🔗 Links

- **Documentation**: [docs/README.md](docs/README.md)
- **Components**: [COMPONENT-INDEX.md](COMPONENT-INDEX.md)
- **Examples**: [examples/](examples/)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)
- **Status**: [PROJECT-STATUS.md](PROJECT-STATUS.md)

---

**CDS Design System v3.0.0**
Production Ready ✅ | 80 Components | 100% Figma Compliant | WCAG 2.1 AA

Built with ❤️ using React, TypeScript, and Material-UI
