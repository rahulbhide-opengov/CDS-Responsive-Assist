/**
 * CDS Design Tokens - React Native
 * Cross-platform design tokens for iOS and Android
 *
 * These tokens maintain 100% consistency with the web version
 * while adapting to platform-specific requirements
 */

import { Platform } from 'react-native';

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Primary Color Palette (Blurple)
 * Same as web version - OpenGov brand color
 */
export const primaryColors = {
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#4b3fff', // Main brand color
  800: '#5b21b6',
  900: '#4c1d95',
};

/**
 * Secondary Color Palette (Slate)
 */
export const secondaryColors = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

/**
 * Semantic Colors
 */
export const semanticColors = {
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrast: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrast: '#ffffff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrast: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrast: '#ffffff',
  },
};

/**
 * Neutral Colors (Grey Scale)
 */
export const greyColors = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

/**
 * Text Colors
 */
export const textColors = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.60)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  hint: 'rgba(0, 0, 0, 0.38)',
};

/**
 * Background Colors
 */
export const backgroundColors = {
  default: '#ffffff',
  paper: '#ffffff',
  tertiary: '#f2f2f2', // Disabled input background
  disabled: 'rgba(0, 0, 0, 0.12)',
  readonly: 'rgba(75, 63, 255, 0.08)', // Purple tint for read-only
};

/**
 * Action Colors (Interactive States)
 */
export const actionColors = {
  active: 'rgba(0, 0, 0, 0.54)',
  hover: 'rgba(0, 0, 0, 0.04)',
  selected: 'rgba(0, 0, 0, 0.08)',
  disabled: 'rgba(0, 0, 0, 0.26)',
  disabledBackground: 'rgba(0, 0, 0, 0.12)',
  focus: 'rgba(0, 0, 0, 0.12)',
};

/**
 * State Colors (Primary/Secondary Interaction States)
 */
export const stateColors = {
  primary: {
    hover: 'rgba(75, 63, 255, 0.04)',
    selected: 'rgba(75, 63, 255, 0.08)',
    focus: 'rgba(75, 63, 255, 0.12)',
    focusVisible: 'rgba(75, 63, 255, 0.3)',
    outlinedBorder: 'rgba(75, 63, 255, 0.5)',
  },
  secondary: {
    hover: 'rgba(51, 65, 85, 0.04)',
    selected: 'rgba(51, 65, 85, 0.08)',
    focus: 'rgba(51, 65, 85, 0.12)',
    focusVisible: 'rgba(51, 65, 85, 0.3)',
    outlinedBorder: 'rgba(51, 65, 85, 0.5)',
  },
};

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font Families - Platform Specific
 */
export const fontFamily = Platform.select({
  ios: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  android: {
    regular: 'Roboto',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
  default: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
});

/**
 * Font Weights
 */
export const fontWeights = {
  light: Platform.select({ ios: '300', android: '300', default: '300' }) as '300',
  regular: Platform.select({ ios: '400', android: '400', default: '400' }) as '400',
  medium: Platform.select({ ios: '500', android: '500', default: '500' }) as '500',
  semibold: Platform.select({ ios: '600', android: '600', default: '600' }) as '600',
  bold: Platform.select({ ios: '700', android: '700', default: '700' }) as '700',
};

/**
 * Typography Scale
 * Responsive values for phone/tablet
 */
export const typography = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0,
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0,
  },
  h5: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  h6: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeights.medium,
    letterSpacing: 0.15,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.25,
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeights.medium,
    letterSpacing: 0.75,
    textTransform: 'none' as const,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: fontWeights.medium,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  },
};

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing System (4px base unit)
 */
export const spacing = {
  base: 4,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

/**
 * Component Spacing
 */
export const componentSpacing = {
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8, // Space between icon and text
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  card: {
    padding: 16,
    gap: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
};

// ============================================================================
// SIZING TOKENS
// ============================================================================

/**
 * Touch Targets - Platform Specific Minimums
 * iOS HIG: 44pt minimum
 * Android Material: 48dp minimum
 */
export const touchTarget = {
  min: Platform.select({ ios: 44, android: 48, default: 44 }),
  ios: 44,
  android: 48,
};

/**
 * Button Sizes - Platform Specific
 */
export const buttonSizes = {
  small: {
    height: Platform.select({ ios: 32, android: 36, default: 32 }),
    paddingHorizontal: 16,
    fontSize: 14,
  },
  medium: {
    height: Platform.select({ ios: 40, android: 44, default: 40 }),
    paddingHorizontal: 22,
    fontSize: 16,
  },
  large: {
    height: Platform.select({ ios: 44, android: 48, default: 44 }),
    paddingHorizontal: 26,
    fontSize: 18,
  },
};

/**
 * Input Sizes - Platform Specific
 */
export const inputSizes = {
  small: {
    height: Platform.select({ ios: 32, android: 36, default: 32 }),
    fontSize: 14,
  },
  medium: {
    height: Platform.select({ ios: 40, android: 44, default: 40 }),
    fontSize: 16,
  },
  large: {
    height: Platform.select({ ios: 44, android: 48, default: 44 }),
    fontSize: 18,
  },
};

/**
 * Icon Sizes
 */
export const iconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
};

/**
 * Avatar Sizes
 */
export const avatarSizes = {
  small: 32,
  medium: 40,
  large: 56,
  xlarge: 80,
};

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const borderRadius = {
  none: 0,
  extraSmall: 2,
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
  circular: 9999,
};

// ============================================================================
// ELEVATION TOKENS (Shadows)
// ============================================================================

/**
 * iOS Shadows
 * Using shadowColor, shadowOffset, shadowOpacity, shadowRadius
 */
export const iosShadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 3.0,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 5.0,
  },
  xlarge: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.0,
  },
};

/**
 * Android Elevation
 * Using elevation prop
 */
export const androidElevation = {
  none: 0,
  small: 2,
  medium: 4,
  large: 8,
  xlarge: 16,
};

/**
 * Platform-agnostic shadow/elevation helper
 */
export const elevation = {
  none: Platform.select({
    ios: iosShadows.none,
    android: { elevation: androidElevation.none },
    default: {},
  }),
  small: Platform.select({
    ios: iosShadows.small,
    android: { elevation: androidElevation.small },
    default: {},
  }),
  medium: Platform.select({
    ios: iosShadows.medium,
    android: { elevation: androidElevation.medium },
    default: {},
  }),
  large: Platform.select({
    ios: iosShadows.large,
    android: { elevation: androidElevation.large },
    default: {},
  }),
  xlarge: Platform.select({
    ios: iosShadows.xlarge,
    android: { elevation: androidElevation.xlarge },
    default: {},
  }),
};

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// ============================================================================
// TRANSITION TOKENS
// ============================================================================

/**
 * Animation Durations (milliseconds)
 */
export const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
    easeIn: 'ease-in',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// ============================================================================
// EXPORTED THEME OBJECT
// ============================================================================

export const tokens = {
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
    semantic: semanticColors,
    grey: greyColors,
    text: textColors,
    background: backgroundColors,
    action: actionColors,
    state: stateColors,
  },
  typography,
  fontFamily,
  fontWeights,
  spacing,
  componentSpacing,
  sizing: {
    touchTarget,
    button: buttonSizes,
    input: inputSizes,
    icon: iconSizes,
    avatar: avatarSizes,
  },
  borderRadius,
  elevation,
  iosShadows,
  androidElevation,
  zIndex,
  transitions,
};

export type Tokens = typeof tokens;
