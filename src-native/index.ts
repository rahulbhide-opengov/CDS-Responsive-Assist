/**
 * CDS Design System - React Native
 * Main export file for all components, theme, and utilities
 *
 * @example
 * ```tsx
 * import { Button, TextField, ThemeProvider, useTheme } from '@cds/react-native';
 * ```
 */

// ============================================================================
// THEME
// ============================================================================

export { ThemeProvider, useTheme, tokens, defaultTheme } from './theme';
export type { Tokens } from './theme/tokens';

// ============================================================================
// COMPONENTS
// ============================================================================

// Button
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

// TextField
export { TextField } from './components/TextField';
export type {
  TextFieldProps,
  TextFieldState,
  TextFieldSize,
} from './components/TextField';

// ============================================================================
// UTILITIES
// ============================================================================

export { responsive, platformValue, scale, verticalScale, moderateScale } from './utils/responsive';
export type { DeviceType, Orientation } from './utils/responsive';

// ============================================================================
// VERSION
// ============================================================================

export const VERSION = '1.0.0-native';
