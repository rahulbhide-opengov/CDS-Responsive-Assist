# TextField Specifications - CDS Design System
## Based on Figma Variables (Desktop 1440 / Tablet 768 / Mobile 390)

---

## 📏 Field Sizes (Height)

### Small TextField
| Device | Height |
|--------|--------|
| Desktop (1440) | 28px |
| Tablet (768) | 32px |
| Mobile (390) | 32px |

### Medium TextField (Default)
| Device | Height |
|--------|--------|
| Desktop (1440) | 32px |
| Tablet (768) | 36px |
| Mobile (390) | 40px |

### Large TextField
| Device | Height |
|--------|--------|
| Desktop (1440) | 40px |
| Tablet (768) | 44px |
| Mobile (390) | 48px |

---

## 📝 Typography Specifications

### Label Text (Above Field)

#### Small Label
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 14px | 20px | 400 (Regular) |
| Tablet | 14px | 20px | 400 (Regular) |
| Mobile | 10px | 14px | 400 (Regular) |

#### Medium Label (Default)
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 16px | 24px | 400 (Regular) |
| Tablet | 16px | 24px | 400 (Regular) |
| Mobile | 16px | 24px | 400 (Regular) |

#### Large Label
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 20px | 28px | 400 (Regular) |
| Tablet | 22px | 32px | 400 (Regular) |
| Mobile | 24px | 32px | 400 (Regular) |

---

### Input Value Text (User Input)

#### Small Value
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 16px | 24px | 500 (Medium) |
| Tablet | 16px | 24px | 500 (Medium) |
| Mobile | 16px | 24px | 500 (Medium) |

#### Medium Value (Default)
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 16px | 24px | 500 (Medium) |
| Tablet | 18px | 26px | 500 (Medium) |
| Mobile | 20px | 28px | 500 (Medium) |

#### Large Value
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 20px | 28px | 500 (Medium) |
| Tablet | 22px | 32px | 500 (Medium) |
| Mobile | 26px | 36px | 500 (Medium) |

---

### Helper Text (Below Field)
| Device | Font Size | Line Height | Font Weight |
|--------|-----------|-------------|-------------|
| Desktop | 14px | 20px | 400 (Regular) |
| Tablet | 14px | 20px | 400 (Regular) |
| Mobile | 14px | 20px | 400 (Regular) |

### Placeholder Text
**Same as Input Value Text** (uses input.value typography specs above)

---

## 📦 Padding Specifications

### Small TextField
| Device | Vertical Padding | Horizontal Padding |
|--------|------------------|---------------------|
| Desktop | 4px | 12px |
| Tablet | 6px | 12px |
| Mobile | 6px | 12px |

### Medium TextField (Default)
| Device | Vertical Padding | Horizontal Padding |
|--------|------------------|---------------------|
| Desktop | 6px | 14px |
| Tablet | 8px | 14px |
| Mobile | 10px | 16px |

### Large TextField
| Device | Vertical Padding | Horizontal Padding |
|--------|------------------|---------------------|
| Desktop | 10px | 16px |
| Tablet | 11px | 18px |
| Mobile | 14px | 20px |

---

## 📐 Complete Size Calculation

### Medium TextField Example (Default)

#### Desktop (1440)
- **Total Height**: 32px
- **Vertical Padding**: 6px (top) + 6px (bottom) = 12px
- **Content Height**: 32px - 12px = 20px (line height)
- **Font Size**: 16px
- **Line Height**: 24px (but constrained to 20px by container)
- **Horizontal Padding**: 14px (left + right)

#### Tablet (768)
- **Total Height**: 36px
- **Vertical Padding**: 8px (top) + 8px (bottom) = 16px
- **Content Height**: 36px - 16px = 20px
- **Font Size**: 18px
- **Line Height**: 26px (but constrained to 20px by container)
- **Horizontal Padding**: 14px (left + right)

#### Mobile (390)
- **Total Height**: 40px
- **Vertical Padding**: 10px (top) + 10px (bottom) = 20px
- **Content Height**: 40px - 20px = 20px
- **Font Size**: 20px
- **Line Height**: 28px (but constrained to 20px by container)
- **Horizontal Padding**: 16px (left + right)

---

## 🎯 Current Implementation Status

### ❌ NOT IMPLEMENTED YET
The current Form.tsx uses **FIXED sizing**:
- Fixed height (calculated by MUI based on padding)
- Fixed padding: 16px 14px (theme.spacing(2, 1.75))
- Fixed font size: 16px (theme.typography.body1.fontSize)
- No responsive sizing based on size prop (small/medium/large)
- No device-specific adjustments

### ✅ TOKENS ARE READY
All the values above are defined in `src/theme/tokens.ts`:
- `sizingTokens.input.small/medium/large` - Heights
- `typographyTokens.input.labelSm/Md/Lg` - Label typography
- `typographyTokens.input.valueSm/Md/Lg` - Input value typography
- `typographyTokens.input.helper` - Helper text typography

### 🔨 NEEDS IMPLEMENTATION
The Form.tsx component needs to be updated to:
1. Accept `size` prop (small | medium | large)
2. Apply responsive heights from sizingTokens
3. Apply responsive typography from typographyTokens
4. Calculate appropriate padding based on size and device
5. Use media queries for device-specific values

---

## 💡 Usage Example (After Implementation)

```typescript
// Small TextField - Mobile optimized
<TextField
  size="small"
  label="Email"
  placeholder="Enter email"
  helperText="We'll never share your email"
/>

// Medium TextField - Default (Recommended)
<TextField
  size="medium"
  label="Full Name"
  placeholder="John Doe"
/>

// Large TextField - Desktop forms
<TextField
  size="large"
  label="Address"
  placeholder="123 Main St"
/>
```

---

## 🎨 Additional Specifications

**Letter Spacing**: 0.15px on all typography
**Border Radius**: 4px (theme.shape.borderRadius)
**Border Width**:
- Default: 1px
- Focused: 2px
- Error: 2px

**Colors**:
- Border (default): rgba(0, 0, 0, 0.23)
- Border (hover): rgba(0, 0, 0, 0.87)
- Border (focused): Primary (#4B3FFF)
- Border (error): Error (#d32f2f)
- Label (default): rgba(0, 0, 0, 0.6)
- Label (focused): Primary (#4B3FFF)
- Input text: rgba(0, 0, 0, 0.87)
- Placeholder: rgba(0, 0, 0, 0.38)
- Helper text: rgba(0, 0, 0, 0.6)
- Helper text (error): Error (#d32f2f)

**Transitions**:
- Duration: 200ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

## 📊 Visual Comparison

### Small TextField Height Progression
```
Desktop: ████████████████████████████ 28px
Tablet:  ████████████████████████████████ 32px
Mobile:  ████████████████████████████████ 32px
```

### Medium TextField Height Progression
```
Desktop: ████████████████████████████████ 32px
Tablet:  ████████████████████████████████████ 36px
Mobile:  ████████████████████████████████████████ 40px
```

### Large TextField Height Progression
```
Desktop: ████████████████████████████████████████ 40px
Tablet:  ████████████████████████████████████████████ 44px
Mobile:  ████████████████████████████████████████████████ 48px
```

---

## 🔗 Related Documentation
- [tokens.ts](./src/theme/tokens.ts) - Complete token definitions
- [theme/index.ts](./src/theme/index.ts) - Theme configuration
- [Form.tsx](./src/components/Form.tsx) - TextField component
- [RESPONSIVE_THEME_UPDATE.md](./RESPONSIVE_THEME_UPDATE.md) - Responsive system guide
