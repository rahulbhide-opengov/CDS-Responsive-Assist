# Platform Differences - iOS vs Android

Understanding key differences between iOS and Android implementations in CDS React Native.

---

## 🎯 Overview

While CDS provides a unified API, some platform-specific differences exist to ensure compliance with each platform's design guidelines:

- **iOS**: Human Interface Guidelines (HIG)
- **Android**: Material Design 3

---

## 📏 Touch Targets

### Minimum Touch Target Sizes

| Platform | Minimum Size | CDS Implementation |
|----------|-------------|-------------------|
| **iOS** | 44pt × 44pt (HIG) | `44pt` |
| **Android** | 48dp × 48dp (Material) | `48dp` |

### Button Heights by Size

| Size | iOS | Android |
|------|-----|---------|
| **Small** | 32pt | 36dp |
| **Medium** | 40pt | 44dp |
| **Large** | 44pt | 48dp |

### Example

```tsx
import { Button, platformValue } from '@cds/react-native';

// Automatically uses platform-specific height
<Button size="large">Touch-Optimized</Button>
// iOS: 44pt
// Android: 48dp

// Manual platform selection
const height = platformValue(44, 48); // (ios, android)
```

---

## 🌗 Shadows and Elevation

### iOS: Shadow Properties

iOS uses four shadow properties:

```tsx
{
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.22,
  shadowRadius: 3.0,
}
```

### Android: Elevation

Android uses a single elevation value:

```tsx
{
  elevation: 4,
}
```

### CDS Implementation

```tsx
import { tokens } from '@cds/react-native';

// Platform-agnostic elevation
const cardStyle = {
  ...tokens.elevation.medium,
  // Automatically applies:
  // iOS: shadowColor, shadowOffset, shadowOpacity, shadowRadius
  // Android: elevation
};
```

### Elevation Levels

| Level | iOS Shadow | Android Elevation | Use Case |
|-------|-----------|------------------|----------|
| **None** | No shadow | 0 | Flat surfaces |
| **Small** | opacity: 0.18, radius: 1 | 2dp | Cards, chips |
| **Medium** | opacity: 0.22, radius: 3 | 4dp | App bars, buttons |
| **Large** | opacity: 0.30, radius: 5 | 8dp | Dialogs, menus |
| **XLarge** | opacity: 0.44, radius: 10 | 16dp | Modals, overlays |

---

## 🎨 Typography

### System Fonts

| Platform | System Font | Weight Variants |
|----------|------------|-----------------|
| **iOS** | San Francisco | Ultralight, Thin, Light, Regular, Medium, Semibold, Bold, Heavy, Black |
| **Android** | Roboto | Thin, Light, Regular, Medium, Bold, Black |

### CDS Implementation

```tsx
import { tokens } from '@cds/react-native';

// Platform-specific font family
const textStyle = {
  fontFamily: tokens.fontFamily.regular,
  // iOS: 'System' (San Francisco)
  // Android: 'Roboto'
};
```

### Font Weight Mapping

| Weight | iOS | Android | Use Case |
|--------|-----|---------|----------|
| **Light** | '300' | '300' | Subtle text |
| **Regular** | '400' | '400' | Body text |
| **Medium** | '500' | '500' | Buttons, emphasis |
| **Semibold** | '600' | '600' | Headings |
| **Bold** | '700' | '700' | Strong emphasis |

---

## 🎯 Touch Interactions

### iOS: Spring Animations

iOS uses spring-based animations:

```tsx
// iOS-style press animation
<Pressable
  style={({ pressed }) => [
    styles.button,
    pressed && { transform: [{ scale: 0.98 }] }
  ]}
/>
```

### Android: Ripple Effect

Android uses Material ripple:

```tsx
// Android ripple (built into CDS Button)
<Pressable
  android_ripple={{
    color: 'rgba(0, 0, 0, 0.1)',
    borderless: false,
  }}
/>
```

### CDS Implementation

CDS Button handles both automatically:

```tsx
<Button variant="primary" onPress={handlePress}>
  Platform-Optimized Touch
</Button>
// iOS: Scale animation on press
// Android: Material ripple effect
```

---

## 🔘 Form Controls

### Switch Component

| Platform | Style | Thumb Size | Track Width |
|----------|-------|-----------|-------------|
| **iOS** | Rounded rectangle | Large | Wide |
| **Android** | Material switch | Medium | Narrow |

```tsx
import { Switch } from '@cds/react-native';

// Automatically uses platform-appropriate style
<Switch value={enabled} onValueChange={setEnabled} />
```

### Picker/Select

| Platform | Component | Style |
|----------|-----------|-------|
| **iOS** | UIPickerView | Wheel picker, bottom sheet |
| **Android** | Dropdown | Material dropdown menu |

### Text Input

| Platform | Behavior | Style |
|----------|----------|-------|
| **iOS** | Padding inside | Minimal chrome |
| **Android** | Padding outside | Material underline (legacy) |

```tsx
// CDS TextField handles platform differences
<TextField
  label="Email"
  value={email}
  onChangeText={setEmail}
/>
// Consistent appearance across platforms
```

---

## 🧭 Navigation

### Navigation Bar Height

| Platform | Default Height | With Large Title |
|----------|---------------|------------------|
| **iOS** | 44pt | 96pt (collapsed: 44pt) |
| **Android** | 56dp | Same |

### Status Bar

| Platform | Behavior | Customization |
|----------|----------|---------------|
| **iOS** | Translucent, overlays content | Light/dark content |
| **Android** | Can be colored | Background color, light/dark icons |

### Example

```tsx
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'android' ? '#4b3fff' : undefined}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Your app */}
      </SafeAreaView>
    </>
  );
}
```

---

## 📐 Safe Areas

### iOS Safe Area Insets

| Device | Top | Bottom |
|--------|-----|--------|
| **With Notch/Dynamic Island** | 44pt-59pt | 34pt |
| **Without Notch** | 20pt | 0pt |

### Android Safe Area Insets

| Device | Top | Bottom |
|--------|-----|--------|
| **Most devices** | 24dp (status bar) | 0dp |
| **Gesture Navigation** | 24dp | ~16dp |

### Handling Safe Areas

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

// Recommended approach
<SafeAreaView style={{ flex: 1 }}>
  {/* Your content is automatically inset */}
</SafeAreaView>

// Manual control
<SafeAreaView edges={['top', 'bottom']}>
  {/* Only inset top and bottom */}
</SafeAreaView>
```

---

## 🎛️ Component Behavior Differences

### Button

| Aspect | iOS | Android |
|--------|-----|---------|
| **Press Animation** | Scale (0.98) | Ripple effect |
| **Height** | 44pt (large) | 48dp (large) |
| **Shadow** | shadowRadius: 1-10 | elevation: 2-16 |

### TextField

| Aspect | iOS | Android |
|--------|-----|---------|
| **Padding** | paddingVertical: 10 | paddingVertical: 8 |
| **Focus** | Blue glow | Material ripple |
| **Cursor** | Thick | Thin |

### Dialog/Modal

| Aspect | iOS | Android |
|--------|-----|---------|
| **Animation** | Slide up | Fade + scale |
| **Dismiss** | Swipe down | Back button |
| **Position** | Center (alert), bottom (sheet) | Center |

---

## 🔧 Platform-Specific Code

### Using Platform.select()

```tsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: Platform.select({
      ios: 12,
      android: 14,
      default: 12,
    }),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.22,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
```

### Platform-Specific Files

```
Button/
├── Button.tsx         # Shared logic
├── Button.ios.tsx     # iOS-specific overrides
└── Button.android.tsx # Android-specific overrides
```

React Native automatically uses the correct file:

```tsx
// Import always uses the platform-specific file
import Button from './Button';
```

### CDS Platform Helper

```tsx
import { platformValue } from '@cds/react-native';

// Simpler syntax
const height = platformValue(44, 48); // (ios, android)

const buttonStyle = {
  height: platformValue(44, 48),
  fontSize: platformValue(16, 18),
};
```

---

## 📱 Testing on Both Platforms

### Emulator/Simulator Setup

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Specific iOS device
npm run ios -- --simulator="iPhone 15 Pro"

# Specific Android device
npm run android -- --deviceId=emulator-5554
```

### Physical Devices

```bash
# iOS (with device connected)
npm run ios -- --device

# Android (with USB debugging enabled)
npm run android -- --device
```

### Platform-Specific Testing Checklist

#### iOS Testing
- [ ] Test on multiple iPhone sizes (SE, Pro, Pro Max)
- [ ] Test on iPad (if supported)
- [ ] Test with VoiceOver enabled
- [ ] Test Dynamic Type (font scaling)
- [ ] Test dark mode
- [ ] Test with notch/Dynamic Island
- [ ] Test safe area insets

#### Android Testing
- [ ] Test on multiple screen sizes (small, normal, large, xlarge)
- [ ] Test on different Android versions (API 23+)
- [ ] Test with TalkBack enabled
- [ ] Test font scaling
- [ ] Test dark theme
- [ ] Test gesture navigation vs. button navigation
- [ ] Test different aspect ratios

---

## 🎨 Design Guidelines Compliance

### iOS Human Interface Guidelines

- **Touch Targets**: 44×44pt minimum
- **Typography**: San Francisco font
- **Spacing**: 8pt grid system
- **Colors**: System colors with dynamic support
- **Animations**: Spring-based, natural feel

### Android Material Design

- **Touch Targets**: 48×48dp minimum
- **Typography**: Roboto font
- **Spacing**: 8dp grid system
- **Colors**: Material color system
- **Animations**: Ease-in-out, responsive feel

### CDS Approach

CDS respects both guidelines while maintaining a unified API:

```tsx
// Single API, platform-appropriate implementation
<Button variant="primary" size="large">
  Platform-Optimized
</Button>
```

---

## 💡 Best Practices

### 1. Always Use Platform Tokens

```tsx
// ❌ Don't hardcode platform-specific values
const height = 44; // Only works well on iOS

// ✅ Use theme tokens
const height = theme.sizing.touchTarget.min; // Adapts to platform
```

### 2. Test on Both Platforms Regularly

```bash
# Run on both platforms during development
npm run ios & npm run android
```

### 3. Use SafeAreaView Everywhere

```tsx
// ✅ Always wrap content in SafeAreaView
<SafeAreaView style={{ flex: 1 }}>
  <YourContent />
</SafeAreaView>
```

### 4. Leverage Platform-Agnostic Components

```tsx
// ✅ Let CDS handle platform differences
<Button variant="primary">Cross-Platform</Button>

// ❌ Don't write platform-specific component logic
{Platform.OS === 'ios' ? <IOSButton /> : <AndroidButton />}
```

---

## 📊 Quick Reference

| Feature | iOS | Android | CDS Handles It? |
|---------|-----|---------|----------------|
| Touch Targets | 44pt | 48dp | ✅ Yes |
| Shadows | Shadow props | Elevation | ✅ Yes |
| Font | San Francisco | Roboto | ✅ Yes |
| Press Animation | Scale | Ripple | ✅ Yes |
| Safe Areas | Dynamic | Status bar | ⚠️ Use SafeAreaView |
| Status Bar | Overlay | Colored | ⚠️ Manual config |
| Navigation | Large titles | Standard | ⚠️ Use react-navigation |

---

## 🔗 Resources

- **iOS HIG**: https://developer.apple.com/design/human-interface-guidelines/
- **Material Design**: https://m3.material.io/
- **React Native Docs**: https://reactnative.dev/docs/platform-specific-code
- **SafeAreaView**: https://reactnavigation.org/docs/handling-safe-area/

---

**Remember**: While CDS abstracts many platform differences, understanding them helps you build better apps! 🚀
