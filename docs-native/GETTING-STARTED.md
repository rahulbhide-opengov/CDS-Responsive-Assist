# Getting Started - CDS React Native

Quick start guide for integrating CDS Design System into your React Native application.

---

## 📋 Prerequisites

- **Node.js**: 18+ recommended
- **React Native**: 0.73+
- **TypeScript**: 5.x (recommended)
- **iOS Development**: Xcode 15+ (for iOS)
- **Android Development**: Android Studio (for Android)

---

## 🚀 Installation

### Step 1: Install React Native

If you don't have a React Native project yet:

```bash
npx react-native@latest init MyCDSApp --template react-native-template-typescript
cd MyCDSApp
```

### Step 2: Install CDS Components

Copy the CDS React Native files to your project:

```bash
# From the CDS repository root
cp -r src-native path/to/your-project/src/cds

# Or if using as a package
npm install @cds/react-native
```

### Step 3: Install Peer Dependencies

```bash
npm install react-native-safe-area-context react-native-gesture-handler
```

### Step 4: iOS Setup

```bash
cd ios
pod install
cd ..
```

### Step 5: Configure App Entry

Update your `App.tsx`:

```tsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './src/cds'; // or '@cds/react-native'

function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {/* Your app content */}
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
```

---

## 🎯 Your First Component

### Create a Simple Screen

```tsx
// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextField } from '../cds';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    // Your login logic here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button
        variant="primary"
        size="large"
        fullWidth
        loading={loading}
        onPress={handleLogin}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </Button>

      <Button
        variant="tertiary"
        fullWidth
        onPress={() => console.log('Forgot password')}
      >
        Forgot Password?
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
```

### Run Your App

```bash
# iOS
npm run ios

# Android
npm run android
```

---

## 📱 Platform-Specific Setup

### iOS Configuration

#### Info.plist

Add required permissions if needed:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to your camera</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>We need access to your photos</string>
```

#### Safe Area

CDS components work best with SafeAreaView:

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }}>
  {/* Your content */}
</SafeAreaView>
```

### Android Configuration

#### AndroidManifest.xml

Configure your app for edge-to-edge:

```xml
<application
  android:theme="@style/AppTheme">
  <!-- Your activities -->
</application>
```

#### Gradle Configuration

Ensure minimum SDK version:

```gradle
// android/app/build.gradle
android {
    compileSdkVersion 34

    defaultConfig {
        minSdkVersion 23
        targetSdkVersion 34
    }
}
```

---

## 🎨 Using the Theme

### Access Theme Values

```tsx
import { useTheme } from '../cds';
import { View, Text, StyleSheet } from 'react-native';

function MyComponent() {
  const theme = useTheme();

  return (
    <View style={{
      backgroundColor: theme.colors.primary[700],
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.small,
    }}>
      <Text style={{ color: theme.colors.background.default }}>
        Custom Component with Theme
      </Text>
    </View>
  );
}
```

### Custom Theme

```tsx
import { ThemeProvider, tokens } from '../cds';

const customTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    primary: {
      ...tokens.colors.primary,
      700: '#ff0000', // Custom primary color
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

---

## 📐 Responsive Design

### Using Responsive Utilities

```tsx
import { responsive } from '../cds';
import { View, Text } from 'react-native';

function ResponsiveComponent() {
  const fontSize = responsive.responsiveFontSize(16);
  const padding = responsive.scale(16);

  return (
    <View style={{ padding }}>
      <Text style={{ fontSize }}>
        {responsive.isPhone() ? 'Phone Layout' : 'Tablet Layout'}
      </Text>
    </View>
  );
}
```

### Breakpoint-Based Layouts

```tsx
import { responsive } from '../cds';
import { View } from 'react-native';

function AdaptiveLayout() {
  const columns = responsive.isPhone() ? 1 : responsive.isTablet() ? 2 : 3;

  return (
    <View style={{
      flexDirection: columns === 1 ? 'column' : 'row',
      flexWrap: columns > 1 ? 'wrap' : 'nowrap',
    }}>
      {/* Your content */}
    </View>
  );
}
```

---

## ♿ Accessibility

### Screen Reader Support

```tsx
import { Button, TextField } from '../cds';

// Components have built-in accessibility
<Button
  variant="primary"
  onPress={handleAction}
  accessibilityLabel="Save your changes"
  accessibilityHint="Saves the form and returns to the previous screen"
>
  Save
</Button>

<TextField
  label="Email"
  value={email}
  onChangeText={setEmail}
  accessibilityLabel="Email input field"
/>
```

### Testing with Screen Readers

**iOS (VoiceOver):**
- Settings → Accessibility → VoiceOver → Enable

**Android (TalkBack):**
- Settings → Accessibility → TalkBack → Enable

---

## 🧪 Testing

### Jest Configuration

```json
// package.json
{
  "jest": {
    "preset": "react-native",
    "moduleNameMapper": {
      "^@cds/(.*)$": "<rootDir>/src/cds/$1"
    }
  }
}
```

### Component Test Example

```tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../cds';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button onPress={onPress}>Click Me</Button>);

    fireEvent.press(getByText('Click Me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Metro Bundler Cache Issues

```bash
npm start -- --reset-cache
```

#### 2. iOS Build Errors

```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

#### 3. Android Build Errors

```bash
cd android
./gradlew clean
cd ..
npm run android
```

#### 4. TypeScript Errors

```bash
npm run type-check
# or
npx tsc --noEmit
```

---

## 📚 Next Steps

- **[Component Reference](COMPONENTS.md)** - Learn about all available components
- **[Platform Differences](PLATFORM-DIFFERENCES.md)** - iOS vs Android specifics
- **[Migration from Web](MIGRATION-FROM-WEB.md)** - Moving from web to native
- **[Examples](../examples-native/)** - Real-world usage examples

---

## 💡 Tips

1. **Always use ThemeProvider** at the root of your app
2. **Use SafeAreaView** for proper notch/home indicator handling
3. **Test on both iOS and Android** - platform differences matter
4. **Use responsive utilities** for consistent sizing across devices
5. **Enable accessibility** from the start - it's easier than retrofitting

---

## 🆘 Getting Help

- **Documentation**: Check [docs-native/](.)
- **Examples**: See [examples-native/](../examples-native/)
- **Issues**: Report bugs on GitHub

---

**Happy Building!** 🎉
