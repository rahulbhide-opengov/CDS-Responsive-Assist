/**
 * CDS Button Styles - React Native
 * Platform-specific styles for Button component
 */

import { StyleSheet, Platform } from 'react-native';
import type { Tokens } from '../../theme/tokens';

/**
 * Generate button styles based on theme
 */
export const getButtonStyles = (theme: Tokens) => {
  return StyleSheet.create({
    // ========================================================================
    // BASE STYLES
    // ========================================================================

    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius.small,
      overflow: 'hidden', // For android_ripple
      ...theme.elevation.small,
    },

    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },

    contentWithLeftIcon: {
      paddingLeft: 4,
    },

    contentWithRightIcon: {
      paddingRight: 4,
    },

    contentWithBothIcons: {
      paddingHorizontal: 4,
    },

    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    // ========================================================================
    // VARIANT STYLES
    // ========================================================================

    primary: {
      backgroundColor: theme.colors.primary[700],
    },

    secondary: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary[700],
    },

    tertiary: {
      backgroundColor: 'transparent',
      ...theme.elevation.none,
    },

    danger: {
      backgroundColor: theme.colors.semantic.error.main,
    },

    success: {
      backgroundColor: theme.colors.semantic.success.main,
    },

    ghost: {
      backgroundColor: 'transparent',
      ...theme.elevation.none,
    },

    link: {
      backgroundColor: 'transparent',
      ...theme.elevation.none,
    },

    // ========================================================================
    // SIZE STYLES (Platform-specific)
    // ========================================================================

    small: {
      minHeight: theme.sizing.button.small.height,
      paddingHorizontal: theme.sizing.button.small.paddingHorizontal,
      paddingVertical: 6,
    },

    medium: {
      minHeight: theme.sizing.button.medium.height,
      paddingHorizontal: theme.sizing.button.medium.paddingHorizontal,
      paddingVertical: 8,
    },

    large: {
      minHeight: theme.sizing.button.large.height,
      paddingHorizontal: theme.sizing.button.large.paddingHorizontal,
      paddingVertical: 11,
    },

    // ========================================================================
    // TEXT STYLES
    // ========================================================================

    text: {
      fontFamily: theme.fontFamily?.regular,
      fontWeight: theme.fontWeights.medium,
      textAlign: 'center',
    },

    // Variant text colors
    primaryText: {
      color: theme.colors.background.default, // White
    },

    secondaryText: {
      color: theme.colors.primary[700],
    },

    tertiaryText: {
      color: theme.colors.primary[700],
    },

    dangerText: {
      color: theme.colors.semantic.error.contrast, // White
    },

    successText: {
      color: theme.colors.semantic.success.contrast, // White
    },

    ghostText: {
      color: theme.colors.primary[700],
    },

    linkText: {
      color: theme.colors.primary[700],
      textDecorationLine: 'underline',
    },

    // Size text
    smallText: {
      fontSize: theme.sizing.button.small.fontSize,
      lineHeight: theme.sizing.button.small.fontSize * 1.4,
    },

    mediumText: {
      fontSize: theme.sizing.button.medium.fontSize,
      lineHeight: theme.sizing.button.medium.fontSize * 1.4,
    },

    largeText: {
      fontSize: theme.sizing.button.large.fontSize,
      lineHeight: theme.sizing.button.large.fontSize * 1.4,
    },

    // ========================================================================
    // STATE STYLES
    // ========================================================================

    pressed: {
      opacity: 0.8,
      ...Platform.select({
        ios: {
          transform: [{ scale: 0.98 }],
        },
        android: {
          // Android ripple handles this
        },
      }),
    },

    disabled: {
      opacity: 0.6, // Figma-compliant (60%)
      ...theme.elevation.none,
    },

    disabledText: {
      opacity: 0.6,
    },

    // ========================================================================
    // LAYOUT
    // ========================================================================

    fullWidth: {
      width: '100%',
    },
  });
};
