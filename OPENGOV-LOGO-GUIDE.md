# OpenGov Logo Usage Guide

**Version:** 1.0
**Last Updated:** 2026-03-02
**Status:** Official Brand Guidelines

---

## 📂 Logo Assets Location

All OpenGov logo assets are stored in the `assets/` directory:

```
assets/
├── brand/
│   └── OpenGov-Brand-Guidelines.pdf    # Official brand guidelines
├── logos/
│   └── opengov/                         # OpenGov logo variants
│       ├── Full Color/                  # RGB Full Color (Primary)
│       ├── Blurple/                     # Blurple monochrome
│       ├── Black/                       # Black monochrome
│       ├── Gray/                        # Gray monochrome
│       ├── White/                       # White monochrome
│       └── Reverse/                     # Reverse (for dark backgrounds)
└── wand/                                # OpenGov Wand icon
    ├── Black/                           # Black wand
    ├── Blurple/                         # Blurple wand
    ├── Gray/                            # Gray wand
    ├── White/                           # White wand
    └── tricolored wand.svg              # Tri-colored wand
```

---

## 🎨 Logo Variants

### **Primary Logo - Full Color**
**Use:** Primary option for all applications

**File:** `assets/logos/opengov/Full Color/OpenGov-Logo-RGB-Color.svg`

**When to use:**
- Default choice for all applications
- Marketing materials
- Website headers
- Presentations
- Documents

**Available formats:**
- SVG (recommended for web)
- PNG (for raster applications)
- JPG (for photos/print)
- AI, EPS (for design work)

---

### **Secondary Variants**

#### **Blurple Logo**
**File:** `assets/logos/opengov/Blurple/OpenGov-Logo-RGB-Blurple.svg`

**When to use:**
- Monochrome applications requiring brand color
- Icons and UI elements
- Simplified branding contexts

#### **Black Logo**
**File:** `assets/logos/opengov/Black/OpenGov-Logo-RGB-Black.svg`

**When to use:**
- Print materials
- Monochrome contexts
- Grayscale applications

#### **Gray Logo**
**File:** `assets/logos/opengov/Gray/OpenGov-Logo-RGB-Gray.svg`

**When to use:**
- Subtle branding
- Secondary placements
- Watermarks

#### **White Logo**
**File:** `assets/logos/opengov/White/OpenGov-Logo-RGB-White.svg`

**When to use:**
- Dark backgrounds
- Photography overlays
- Video overlays

#### **Reverse Logo**
**File:** `assets/logos/opengov/Reverse/OpenGov-Logo-RGB-Reverse.svg`

**When to use:**
- Dark mode applications
- Inverted color schemes

---

## ✨ OpenGov Wand Icon

The OpenGov Wand is the brand's signature icon representing innovation and transformation.

### **Tri-Colored Wand (Primary)**
**File:** `assets/logos/wand/tricolored wand.svg`

**When to use:**
- Standalone icon applications
- Loading indicators
- Brand accent element
- Social media profile images

### **Monochrome Variants**

| Variant | File | Use Case |
|---------|------|----------|
| **Blurple** | `assets/logos/wand/Blurple/OpenGov-Wand-RGB-Blurple.svg` | UI icons, buttons |
| **Black** | `assets/logos/wand/Black/OpenGov-Wand-RGB-Black.svg` | Print, monochrome |
| **Gray** | `assets/logos/wand/Gray/OpenGov-Wand-RGB-Gray.svg` | Subtle accents |
| **White** | `assets/logos/wand/White/OpenGov-Wand-RGB-White.svg` | Dark backgrounds |

---

## 📏 Logo Usage Rules

### **Clear Space**
Maintain clear space around the logo equal to the height of the "O" in "OpenGov"

```
┌─────────────────────────────┐
│          [clear]            │
│   [clear] LOGO [clear]      │
│          [clear]            │
└─────────────────────────────┘
Minimum clear space = height of "O"
```

### **Minimum Size**

| Context | Minimum Width |
|---------|---------------|
| **Digital (Web)** | 120px |
| **Digital (Mobile)** | 80px |
| **Print** | 1 inch (25.4mm) |
| **Social Media** | 200px |

### **Background Contrast**

| Logo Variant | Recommended Background |
|--------------|------------------------|
| **Full Color** | White, light gray, light backgrounds |
| **Blurple** | White, light backgrounds |
| **Black** | White, light backgrounds |
| **Gray** | White, medium backgrounds |
| **White** | Dark backgrounds, photos |
| **Reverse** | Dark backgrounds (dark mode) |

---

## ✅ Do's

- ✅ Use the provided logo files
- ✅ Maintain proper clear space
- ✅ Use appropriate variant for background
- ✅ Scale proportionally
- ✅ Use on contrasting backgrounds
- ✅ Use SVG files for web applications
- ✅ Use PNG files with transparency when needed

---

## ❌ Don'ts

- ❌ Don't stretch or distort the logo
- ❌ Don't change the logo colors
- ❌ Don't add effects (shadows, glows, etc.)
- ❌ Don't rotate the logo
- ❌ Don't place on busy backgrounds
- ❌ Don't use low-contrast combinations
- ❌ Don't recreate or modify the logo
- ❌ Don't use old logo versions
- ❌ Don't use logos smaller than minimum size

---

## 🎯 Quick Reference

### **Choose the Right Logo**

| Use Case | Recommended Logo |
|----------|------------------|
| **Light backgrounds** | Full Color (primary) |
| **Dark backgrounds** | White or Reverse |
| **Dark mode UI** | Reverse or White |
| **Monochrome print** | Black |
| **Simplified UI** | Blurple |
| **Watermarks** | Gray |
| **Icon only** | OpenGov Wand (tri-colored) |

### **File Format Selection**

| Format | Use Case |
|--------|----------|
| **SVG** | Web, UI, responsive applications |
| **PNG** | Web, presentations, documents (raster) |
| **JPG** | Print, photography |
| **AI/EPS** | Design work, production files |

---

## 💻 Usage in CDS Components

### **Logo Component**

The CDS includes a `<Logo>` component for easy integration:

```tsx
import { Logo } from '@/components/Logo';

// Default (Full Color)
<Logo />

// With variant
<Logo variant="white" />
<Logo variant="blurple" />
<Logo variant="black" />

// With size
<Logo size="small" />     // 80px
<Logo size="medium" />    // 120px (default)
<Logo size="large" />     // 200px

// Custom size
<Logo width={150} />
<Logo height={50} />

// Wand icon only
<Logo type="wand" variant="tricolor" />
```

### **Direct Import**

```tsx
// Import SVG directly
import OpenGovLogo from '@/assets/logos/opengov/Full Color/OpenGov-Logo-RGB-Color.svg';

<img src={OpenGovLogo} alt="OpenGov" width={120} />
```

---

## 📦 Asset Inventory

### **OpenGov Logo - Full Color**
- ✅ SVG: `OpenGov-Logo-RGB-Color.svg`
- ✅ PNG: `OpenGov-Logo-RGB-Color.png`
- ✅ JPG: `OpenGov-Logo-RGB-Color.jpg`
- ✅ AI: `OpenGov-Logo-RGB-Color.ai`
- ✅ EPS: `OpenGov-Logo-RGB-Color.eps`

### **OpenGov Logo - Blurple**
- ✅ SVG: `OpenGov-Logo-RGB-Blurple.svg`
- ✅ PNG: `OpenGov-Logo-RGB-Blurple.png`
- ✅ JPG: `OpenGov-Logo-RGB-Blurple.jpg`
- ✅ AI: `OpenGov-Logo-RGB-Blurple.ai`
- ✅ EPS: `OpenGov-Logo-RGB-Blurple.eps`

### **OpenGov Logo - Black**
- ✅ SVG: `OpenGov-Logo-RGB-Black.svg`
- ✅ PNG: `OpenGov-Logo-RGB-Black.png`
- ✅ JPG: `OpenGov-Logo-RGB-Black.jpg`
- ✅ AI: `OpenGov-Logo-RGB-Black.ai`
- ✅ EPS: `OpenGov-Logo-RGB-Black.eps`

### **OpenGov Logo - Gray**
- ✅ SVG: `OpenGov-Logo-RGB-Gray.svg`
- ✅ PNG: `OpenGov-Logo-RGB-Gray.png`
- ✅ JPG: `OpenGov-Logo-RGB-Gray.jpg`
- ✅ AI: `OpenGov-Logo-RGB-Gray.ai`
- ✅ EPS: `OpenGov-Logo-RGB-Gray.eps`

### **OpenGov Logo - White**
- ✅ SVG: `OpenGov-Logo-RGB-White.svg`
- ✅ PNG: `OpenGov-Logo-RGB-White.png`
- ✅ JPG: `OpenGov-Logo-RGB-White.jpg`
- ✅ AI: `OpenGov-Logo-RGB-White.ai`

### **OpenGov Logo - Reverse**
- ✅ SVG: `OpenGov-Logo-RGB-Reverse.svg`
- ✅ PNG: `OpenGov-Logo-RGB-Reverse.png`
- ✅ JPG: `OpenGov-Logo-RGB-Reverse.jpg`
- ✅ AI: `OpenGov-Logo-RGB-Reverse.ai`

### **OpenGov Wand**
- ✅ SVG (Tri-Colored): `tricolored wand.svg`
- ✅ SVG (Blurple): `OpenGov-Wand-RGB-Blurple.svg`
- ✅ SVG (Black): `OpenGov-Wand-RGB-Black.svg`
- ✅ SVG (Gray): `OpenGov-Wand-RGB-Gray.svg`
- ✅ SVG (White): `OpenGov-Wand-RGB-White.svg`
- ✅ PNG variants available in each color folder

---

## 📖 Brand Guidelines

**Full brand guidelines available at:**
`assets/brand/OpenGov-Brand-Guidelines.pdf`

For detailed information about:
- Color specifications
- Typography
- Voice and tone
- Photography style
- Marketing guidelines

Refer to the official brand guidelines PDF.

---

## 🔄 Updates

### **Version 1.0 - 2026-03-02**
- Initial logo asset integration
- Added all logo variants (Full Color, Blurple, Black, Gray, White, Reverse)
- Added OpenGov Wand icon variants
- Included brand guidelines PDF
- Created logo usage documentation
- Created Logo component

---

## 📞 Questions?

For brand and logo usage questions:
1. Review the brand guidelines PDF: `assets/brand/OpenGov-Brand-Guidelines.pdf`
2. Check this usage guide
3. Contact the OpenGov brand team

---

**Logo Assets:** ✅ Integrated
**Brand Guidelines:** ✅ Available
**CDS Component:** ✅ Ready to use
**Status:** Production Ready
