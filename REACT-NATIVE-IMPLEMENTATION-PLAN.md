# CDS Design System - React Native Implementation Plan

**Date**: 2026-03-03
**Status**: 🚀 Implementation Started

---

## 🎯 Overview

Convert the CDS Design System from React Web (MUI-based) to **React Native** for iOS and Android applications, maintaining 100% design consistency with the web version.

---

## 📊 Scope

### Web → React Native Conversion

| Web Technology | React Native Equivalent |
|----------------|------------------------|
| **HTML Elements** | React Native Components |
| `<div>` | `<View>` |
| `<span>`, `<p>` | `<Text>` |
| `<button>` | `<TouchableOpacity>`, `<Pressable>` |
| `<input>` | `<TextInput>` |
| `<img>` | `<Image>` |
| `<a>` | `<TouchableOpacity>` + navigation |
| **CSS Styling** | **StyleSheet** |
| CSS classes | StyleSheet.create() |
| CSS-in-JS (styled) | StyleSheet or styled-components/native |
| Media queries | Platform.select(), Dimensions |
| **Material-UI (MUI)** | **React Native Paper / Custom** |
| MUI Button | Custom Button with Pressable |
| MUI TextField | Custom TextInput wrapper |
| MUI Card | Custom Card with View |

---

## 🏗️ Architecture

### Directory Structure

```
CDS-Responsive-Assist/
├── src/                          # Web version (existing)
│   ├── components/
│   ├── theme/
│   └── index.ts
├── src-native/                   # NEW - React Native version
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx        # Main component
│   │   │   ├── Button.ios.tsx   # iOS-specific overrides
│   │   │   ├── Button.android.tsx # Android-specific overrides
│   │   │   ├── Button.styles.ts  # Styles
│   │   │   └── index.ts         # Exports
│   │   ├── TextField/
│   │   ├── Card/
│   │   ├── Avatar/
│   │   └── ...
│   ├── theme/
│   │   ├── tokens.ts            # Design tokens (colors, spacing, etc.)
│   │   ├── typography.ts        # Typography system
│   │   ├── spacing.ts           # Spacing system
│   │   ├── colors.ts            # Color palette
│   │   ├── Platform.ts          # Platform-specific values
│   │   └── index.ts             # Theme provider
│   ├── utils/
│   │   ├── responsive.ts        # Responsive utilities
│   │   ├── platform.ts          # Platform detection
│   │   └── accessibility.ts     # A11y helpers
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   └── index.ts                 # Main export
├── docs-native/                  # NEW - React Native docs
│   ├── README.md
│   ├── GETTING-STARTED.md
│   ├── COMPONENTS.md
│   ├── PLATFORM-DIFFERENCES.md
│   └── MIGRATION-FROM-WEB.md
└── examples-native/              # NEW - React Native examples
    ├── ButtonExamples.tsx
    ├── FormExamples.tsx
    └── LayoutExamples.tsx
```

---

## 🎨 Design Token Mapping

### Color System
- ✅ Same color tokens as web
- ✅ Platform-specific color adjustments (iOS vs Android)

### Typography
- ✅ Same type scale
- ❗ Platform-specific fonts (San Francisco for iOS, Roboto for Android)
- ✅ Responsive sizing based on device dimensions

### Spacing
- ✅ Same 4px base unit
- ✅ Touch target minimum: 44px (iOS), 48px (Android)

### Elevation (Shadows)
- ❗ Different shadow implementation:
  - **iOS**: shadowColor, shadowOffset, shadowOpacity, shadowRadius
  - **Android**: elevation prop

---

## 📱 Platform-Specific Considerations

### iOS
- **Design System**: Human Interface Guidelines
- **Fonts**: San Francisco (system default)
- **Touch Targets**: Minimum 44x44 points
- **Shadows**: Uses iOS shadow properties
- **Animations**: Spring animations, native feel
- **Status Bar**: Light/dark content

### Android
- **Design System**: Material Design 3
- **Fonts**: Roboto (system default)
- **Touch Targets**: Minimum 48x48 dp
- **Elevation**: Uses elevation prop
- **Animations**: Material motion
- **Status Bar**: Color customization

---

## 🔄 Component Priority (Phase 1)

### Core Components (Must-Have)

| Component | Priority | Complexity | Status |
|-----------|----------|------------|--------|
| **Button** | P0 | Medium | 🔄 Planned |
| **TextField** | P0 | High | 🔄 Planned |
| **Text** | P0 | Low | 🔄 Planned |
| **View** | P0 | Low | 🔄 Planned |
| **Card** | P0 | Medium | 🔄 Planned |
| **Avatar** | P0 | Medium | 🔄 Planned |
| **Chip** | P1 | Medium | 🔄 Planned |
| **Badge** | P1 | Low | 🔄 Planned |
| **IconButton** | P1 | Low | 🔄 Planned |
| **Logo** | P1 | Low | 🔄 Planned |

### Form Components (Phase 2)

| Component | Priority | Complexity | Status |
|-----------|----------|------------|--------|
| **Checkbox** | P0 | Medium | 🔄 Planned |
| **Radio** | P0 | Medium | 🔄 Planned |
| **Switch** | P0 | Low | 🔄 Planned |
| **Select/Picker** | P0 | High | 🔄 Planned |
| **Slider** | P1 | Medium | 🔄 Planned |
| **DatePicker** | P1 | High | 🔄 Planned |

### Layout Components (Phase 3)

| Component | Priority | Complexity | Status |
|-----------|----------|------------|--------|
| **Stack** | P0 | Low | 🔄 Planned |
| **Grid** | P1 | Medium | 🔄 Planned |
| **Container** | P1 | Low | 🔄 Planned |
| **SafeAreaView** | P0 | Low | 🔄 Planned |

### Navigation Components (Phase 4)

| Component | Priority | Complexity | Status |
|-----------|----------|------------|--------|
| **AppBar** | P0 | Medium | 🔄 Planned |
| **TabBar** | P0 | High | 🔄 Planned |
| **Drawer** | P1 | High | 🔄 Planned |
| **BottomSheet** | P1 | Very High | 🔄 Planned |

### Feedback Components (Phase 5)

| Component | Priority | Complexity | Status |
|-----------|----------|------------|--------|
| **Alert** | P0 | Medium | 🔄 Planned |
| **Snackbar/Toast** | P0 | Medium | 🔄 Planned |
| **Dialog/Modal** | P0 | High | 🔄 Planned |
| **Loading** | P0 | Low | 🔄 Planned |
| **Progress** | P1 | Medium | 🔄 Planned |

---

## 🛠️ Technical Implementation

### 1. Theme System

```typescript
// src-native/theme/index.ts
import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: {
      main: '#4b3fff',
      light: '#7c6cff',
      dark: '#1a0dcc',
      contrast: '#ffffff',
    },
    // ... all color tokens
  },
  typography: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
    // ... all typography tokens
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    // ... all spacing tokens
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    circular: 999,
  },
  shadows: {
    ios: {
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      },
      // ... more elevations
    },
    android: {
      small: { elevation: 2 },
      medium: { elevation: 4 },
      large: { elevation: 8 },
    },
  },
  touchTarget: {
    ios: 44,
    android: 48,
    min: Platform.select({ ios: 44, android: 48, default: 44 }),
  },
};
```

### 2. Responsive Utilities

```typescript
// src-native/utils/responsive.ts
import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Device types
export const isPhone = width < 768;
export const isTablet = width >= 768 && width < 1024;
export const isLargeDevice = width >= 1024;

// Responsive scaling
export const scale = (size: number) => (width / 375) * size;
export const verticalScale = (size: number) => (height / 667) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Platform-specific values
export const platformValue = <T,>(ios: T, android: T): T =>
  Platform.select({ ios, android, default: ios }) as T;
```

### 3. Button Component Example

```typescript
// src-native/components/Button/Button.tsx
import React from 'react';
import { Pressable, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { styles } from './Button.styles';
import { theme } from '../../theme';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  onPress,
  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        ...buttonStyle,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      accessibilityLabel={typeof children === 'string' ? children : undefined}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? theme.colors.primary.contrast : theme.colors.primary.main}
        />
      ) : (
        <>
          {leftIcon}
          <Text style={textStyles}>{children}</Text>
          {rightIcon}
        </>
      )}
    </Pressable>
  );
};
```

### 4. Button Styles

```typescript
// src-native/components/Button/Button.styles.ts
import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.small,
    paddingHorizontal: 22,
    minHeight: theme.touchTarget.min,
    gap: 8,
  },

  // Variants
  primary: {
    backgroundColor: theme.colors.primary.main,
    ...Platform.select({
      ios: theme.shadows.ios.small,
      android: theme.shadows.android.small,
    }),
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: theme.colors.error.main,
    ...Platform.select({
      ios: theme.shadows.ios.small,
      android: theme.shadows.android.small,
    }),
  },

  // Sizes (responsive)
  small: {
    minHeight: Platform.select({ ios: 32, android: 36 }),
    paddingHorizontal: 16,
  },
  medium: {
    minHeight: Platform.select({ ios: 36, android: 40 }),
    paddingHorizontal: 22,
  },
  large: {
    minHeight: Platform.select({ ios: 44, android: 48 }),
    paddingHorizontal: 26,
  },

  // States
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.6,
  },

  // Text styles
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
  primaryText: {
    color: theme.colors.primary.contrast,
  },
  secondaryText: {
    color: theme.colors.primary.main,
  },
  tertiaryText: {
    color: theme.colors.primary.main,
  },
  dangerText: {
    color: theme.colors.error.contrast,
  },
  disabledText: {
    opacity: 0.6,
  },

  // Layout
  fullWidth: {
    width: '100%',
  },

  // Size text
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});
```

---

## 📦 Dependencies

### Required React Native Packages

```json
{
  "dependencies": {
    "react": "18.x",
    "react-native": "0.73.x",
    "@react-navigation/native": "^6.x",
    "@react-navigation/stack": "^6.x",
    "@react-navigation/bottom-tabs": "^6.x",
    "react-native-safe-area-context": "^4.x",
    "react-native-gesture-handler": "^2.x",
    "react-native-reanimated": "^3.x",
    "react-native-svg": "^14.x"
  },
  "devDependencies": {
    "@types/react": "18.x",
    "@types/react-native": "0.73.x",
    "typescript": "^5.x"
  }
}
```

### Optional Packages (Recommended)

```json
{
  "dependencies": {
    "react-native-paper": "^5.x",
    "react-native-vector-icons": "^10.x",
    "@shopify/flash-list": "^1.x",
    "react-native-linear-gradient": "^2.x"
  }
}
```

---

## 🎯 Implementation Phases

### Phase 1: Foundation (Week 1)
- ✅ Project structure
- ✅ Theme system
- ✅ Design tokens
- ✅ Responsive utilities
- ✅ Platform utilities
- ✅ TypeScript types

### Phase 2: Core Components (Week 2-3)
- ✅ Button
- ✅ Text/Typography
- ✅ View/Container
- ✅ TextField
- ✅ Card
- ✅ Avatar
- ✅ Chip
- ✅ Badge

### Phase 3: Form Components (Week 4)
- ✅ Checkbox
- ✅ Radio
- ✅ Switch
- ✅ Select/Picker
- ✅ Slider

### Phase 4: Layout & Navigation (Week 5)
- ✅ Stack
- ✅ Grid
- ✅ SafeAreaView
- ✅ AppBar
- ✅ TabBar
- ✅ Drawer

### Phase 5: Feedback & Advanced (Week 6)
- ✅ Alert
- ✅ Toast/Snackbar
- ✅ Dialog/Modal
- ✅ Loading/Progress
- ✅ BottomSheet

### Phase 6: Documentation & Examples (Week 7)
- ✅ Component documentation
- ✅ Usage examples
- ✅ Migration guide
- ✅ Platform differences guide
- ✅ Storybook/Examples app

---

## 📚 Documentation Structure

```
docs-native/
├── README.md                     # Overview
├── GETTING-STARTED.md            # Setup guide
├── COMPONENTS.md                 # Component reference
├── PLATFORM-DIFFERENCES.md       # iOS vs Android
├── MIGRATION-FROM-WEB.md        # Web → Native guide
├── THEMING.md                    # Theme customization
├── ACCESSIBILITY.md              # A11y guidelines
└── examples/
    ├── buttons/
    ├── forms/
    ├── layouts/
    └── navigation/
```

---

## ✅ Success Criteria

### Design Consistency
- ✅ 100% visual consistency with web version
- ✅ Same design tokens (colors, spacing, typography)
- ✅ Same component variants and states

### Platform Compliance
- ✅ iOS Human Interface Guidelines compliance
- ✅ Android Material Design compliance
- ✅ Platform-specific patterns respected

### Performance
- ✅ 60 FPS animations
- ✅ Optimized list rendering (FlashList)
- ✅ Minimal re-renders
- ✅ Fast app launch (<2s)

### Accessibility
- ✅ Screen reader support (VoiceOver, TalkBack)
- ✅ Minimum touch targets (44/48px)
- ✅ Keyboard navigation (Android TV)
- ✅ Dynamic type support

### Developer Experience
- ✅ TypeScript support
- ✅ Same API as web version (where applicable)
- ✅ Clear documentation
- ✅ Code examples
- ✅ Migration guide

---

## 🚀 Next Steps

1. **Create Foundation**
   - Set up `src-native/` directory structure
   - Implement theme system
   - Create utility functions

2. **Implement Core Components**
   - Start with Button (highest priority)
   - Then TextField, Card, Avatar
   - Platform-specific overrides

3. **Build Examples**
   - Create example app
   - Component showcase
   - Interactive demos

4. **Write Documentation**
   - Component API reference
   - Platform differences
   - Migration guide

5. **Testing**
   - Unit tests (Jest)
   - Component tests (@testing-library/react-native)
   - Visual regression tests
   - Platform testing (iOS Simulator, Android Emulator)

---

**Status**: 🚀 Ready to implement
**Est. Timeline**: 6-7 weeks for full implementation
**Priority**: Phase 1 (Foundation + Core Components)
