/**
 * Responsive Utilities for React Native
 * Platform-agnostic responsive design helpers
 */

import { Dimensions, Platform, PixelRatio, ScaledSize } from 'react-native';

// ============================================================================
// DEVICE DIMENSIONS
// ============================================================================

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

// Listen for orientation changes
Dimensions.addEventListener('change', ({ window }: { window: ScaledSize }) => {
  screenWidth = window.width;
  screenHeight = window.height;
});

/**
 * Get current screen dimensions
 */
export const getScreenDimensions = () => ({
  width: screenWidth,
  height: screenHeight,
});

// ============================================================================
// DEVICE TYPE DETECTION
// ============================================================================

/**
 * Breakpoints (matching web version where possible)
 * - Phone: < 768px width
 * - Tablet: 768px - 1024px width
 * - Large Device: > 1024px width (iPad Pro, Android tablets)
 */
export const BREAKPOINTS = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
} as const;

/**
 * Check if device is a phone
 */
export const isPhone = () => screenWidth < BREAKPOINTS.tablet;

/**
 * Check if device is a tablet
 */
export const isTablet = () =>
  screenWidth >= BREAKPOINTS.tablet && screenWidth < BREAKPOINTS.desktop;

/**
 * Check if device is a large device (iPad Pro, large Android tablets)
 */
export const isLargeDevice = () => screenWidth >= BREAKPOINTS.desktop;

/**
 * Get current device type
 */
export type DeviceType = 'phone' | 'tablet' | 'desktop';

export const getDeviceType = (): DeviceType => {
  if (isLargeDevice()) return 'desktop';
  if (isTablet()) return 'tablet';
  return 'phone';
};

// ============================================================================
// RESPONSIVE SCALING
// ============================================================================

/**
 * Base dimensions for scaling
 * iPhone 11 Pro Max dimensions as base (same as Figma designs)
 */
const BASE_WIDTH = 375; // iPhone 11 Pro base width
const BASE_HEIGHT = 667; // iPhone 11 Pro base height

/**
 * Scale a size value based on screen width
 * Useful for responsive font sizes, spacing, etc.
 *
 * @param size - Size value to scale
 * @returns Scaled size
 *
 * @example
 * ```tsx
 * const fontSize = scale(16); // Scales 16px based on device width
 * ```
 */
export const scale = (size: number): number => {
  return (screenWidth / BASE_WIDTH) * size;
};

/**
 * Scale a size value based on screen height
 * Useful for vertical spacing, heights, etc.
 *
 * @param size - Size value to scale
 * @returns Scaled size
 */
export const verticalScale = (size: number): number => {
  return (screenHeight / BASE_HEIGHT) * size;
};

/**
 * Moderate scale with a factor
 * Provides a more subtle scaling effect
 *
 * @param size - Size value to scale
 * @param factor - Scaling factor (0-1), default 0.5
 * @returns Moderately scaled size
 *
 * @example
 * ```tsx
 * const fontSize = moderateScale(16); // Scales 16px moderately
 * const spacing = moderateScale(20, 0.3); // Less aggressive scaling
 * ```
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

/**
 * Scale with pixel ratio consideration
 * Ensures crisp rendering on high-DPI screens
 */
export const scaleWithPixelRatio = (size: number): number => {
  return PixelRatio.roundToNearestPixel(scale(size));
};

// ============================================================================
// RESPONSIVE VALUES
// ============================================================================

/**
 * Get responsive value based on device type
 *
 * @param phone - Value for phones
 * @param tablet - Value for tablets
 * @param desktop - Value for large devices
 * @returns Value based on current device type
 *
 * @example
 * ```tsx
 * const fontSize = responsiveValue(14, 16, 18);
 * const padding = responsiveValue(16, 20, 24);
 * ```
 */
export function responsiveValue<T>(phone: T, tablet: T, desktop: T): T {
  const deviceType = getDeviceType();
  if (deviceType === 'desktop') return desktop;
  if (deviceType === 'tablet') return tablet;
  return phone;
}

/**
 * Responsive font size helper
 * Automatically scales font based on device type
 *
 * @param baseSize - Base font size
 * @returns Scaled font size
 */
export const responsiveFontSize = (baseSize: number): number => {
  return moderateScale(baseSize, 0.3); // Less aggressive scaling for fonts
};

// ============================================================================
// PLATFORM-SPECIFIC VALUES
// ============================================================================

/**
 * Get platform-specific value
 *
 * @param ios - Value for iOS
 * @param android - Value for Android
 * @returns Value based on current platform
 *
 * @example
 * ```tsx
 * const height = platformValue(44, 48); // 44 on iOS, 48 on Android
 * const fontFamily = platformValue('System', 'Roboto');
 * ```
 */
export function platformValue<T>(ios: T, android: T): T {
  return Platform.select({ ios, android, default: ios }) as T;
}

/**
 * Get touch target size based on platform
 * iOS: 44pt minimum
 * Android: 48dp minimum
 */
export const getTouchTargetSize = (): number => {
  return platformValue(44, 48);
};

// ============================================================================
// ORIENTATION
// ============================================================================

/**
 * Check if device is in portrait orientation
 */
export const isPortrait = () => screenHeight > screenWidth;

/**
 * Check if device is in landscape orientation
 */
export const isLandscape = () => screenWidth > screenHeight;

/**
 * Get orientation
 */
export type Orientation = 'portrait' | 'landscape';

export const getOrientation = (): Orientation => {
  return isPortrait() ? 'portrait' : 'landscape';
};

// ============================================================================
// RESPONSIVE LAYOUT HELPERS
// ============================================================================

/**
 * Calculate number of columns for a grid based on device width
 *
 * @param minColumnWidth - Minimum column width
 * @param gap - Gap between columns
 * @returns Number of columns
 */
export const calculateColumns = (
  minColumnWidth: number,
  gap: number = 16
): number => {
  const availableWidth = screenWidth - gap * 2; // Account for container padding
  const columns = Math.floor(availableWidth / (minColumnWidth + gap));
  return Math.max(1, columns); // At least 1 column
};

/**
 * Calculate item width for grid layout
 *
 * @param columns - Number of columns
 * @param gap - Gap between columns
 * @param containerPadding - Container padding
 * @returns Item width
 */
export const calculateItemWidth = (
  columns: number,
  gap: number = 16,
  containerPadding: number = 16
): number => {
  const availableWidth = screenWidth - containerPadding * 2;
  const totalGaps = (columns - 1) * gap;
  return (availableWidth - totalGaps) / columns;
};

// ============================================================================
// SAFE AREA HELPERS
// ============================================================================

/**
 * Estimated status bar height (use SafeAreaView for accurate values)
 * iOS: Varies by device (notch, Dynamic Island, etc.)
 * Android: ~24dp on most devices
 */
export const ESTIMATED_STATUS_BAR_HEIGHT = platformValue(
  isPhone() ? 44 : 20, // iOS: 44 for notch devices, 20 for older
  24 // Android
);

/**
 * Estimated bottom safe area (home indicator)
 * iOS: 34pt on devices with home indicator
 * Android: 0 (usually handled by system gestures)
 */
export const ESTIMATED_BOTTOM_SAFE_AREA = platformValue(
  isPhone() ? 34 : 0, // iOS home indicator
  0 // Android
);

// ============================================================================
// EXPORTS
// ============================================================================

export const responsive = {
  // Device detection
  isPhone,
  isTablet,
  isLargeDevice,
  getDeviceType,

  // Dimensions
  getScreenDimensions,
  getOrientation,
  isPortrait,
  isLandscape,

  // Scaling
  scale,
  verticalScale,
  moderateScale,
  scaleWithPixelRatio,

  // Responsive values
  responsiveValue,
  responsiveFontSize,

  // Platform-specific
  platformValue,
  getTouchTargetSize,

  // Layout helpers
  calculateColumns,
  calculateItemWidth,

  // Safe area
  ESTIMATED_STATUS_BAR_HEIGHT,
  ESTIMATED_BOTTOM_SAFE_AREA,

  // Constants
  BREAKPOINTS,
  BASE_WIDTH,
  BASE_HEIGHT,
};

export default responsive;
