/**
 * CDS Button Component - React Native
 * Cross-platform button with CDS-First API
 *
 * Matches web version API while adapting to native platforms
 */

import React from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleProp,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme';
import { platformValue } from '../../utils/responsive';
import { getButtonStyles } from './Button.styles';

// ============================================================================
// TYPES
// ============================================================================

/**
 * Button Variants (Same as web version)
 */
export type ButtonVariant =
  | 'primary'    // Solid, high emphasis
  | 'secondary'  // Outlined, medium emphasis
  | 'tertiary'   // Text only, low emphasis
  | 'danger'     // Destructive actions
  | 'success'    // Positive actions
  | 'ghost'      // Minimal styling
  | 'link';      // Link appearance

/**
 * Button Sizes
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button Props
 */
export interface ButtonProps {
  /**
   * Button variant - defines visual style and emphasis
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state - shows activity indicator
   * @default false
   */
  loading?: boolean;

  /**
   * Icon on left side
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon on right side
   */
  rightIcon?: React.ReactNode;

  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Press handler
   */
  onPress?: () => void;

  /**
   * Long press handler
   */
  onLongPress?: () => void;

  /**
   * Custom button style
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Custom text style
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Accessibility label
   */
  accessibilityLabel?: string;

  /**
   * Accessibility hint
   */
  accessibilityHint?: string;

  /**
   * Test ID for testing
   */
  testID?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Button Component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Button onPress={() => console.log('Pressed')}>
 *   Click Me
 * </Button>
 *
 * // With variant and size
 * <Button variant="secondary" size="large" onPress={handlePress}>
 *   Secondary Action
 * </Button>
 *
 * // With icons
 * <Button
 *   variant="primary"
 *   leftIcon={<SaveIcon />}
 *   onPress={handleSave}
 * >
 *   Save Changes
 * </Button>
 *
 * // Loading state
 * <Button variant="primary" loading onPress={handleSubmit}>
 *   Submit
 * </Button>
 *
 * // Disabled
 * <Button variant="danger" disabled onPress={handleDelete}>
 *   Delete Item
 * </Button>
 * ```
 */
export const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      onPress,
      onLongPress,
      style,
      textStyle,
      accessibilityLabel,
      accessibilityHint,
      testID,
    },
    ref
  ) => {
    const theme = useTheme();
    const styles = getButtonStyles(theme);

    // Determine if button is interactive
    const isDisabled = disabled || loading;

    // Get content for accessibility label
    const contentString = typeof children === 'string' ? children : undefined;

    // Get activity indicator color based on variant
    const getActivityIndicatorColor = (): string => {
      if (variant === 'primary' || variant === 'danger' || variant === 'success') {
        return theme.colors.background.default; // White
      }
      return theme.colors.primary[700]; // Primary color
    };

    // Combine styles
    const buttonStyle = [
      styles.base,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      isDisabled && styles.disabled,
      style,
    ];

    const contentContainerStyle = [
      styles.contentContainer,
      leftIcon && rightIcon && styles.contentWithBothIcons,
      leftIcon && !rightIcon && styles.contentWithLeftIcon,
      !leftIcon && rightIcon && styles.contentWithRightIcon,
    ];

    const textStyles = [
      styles.text,
      styles[`${variant}Text`],
      styles[`${size}Text`],
      isDisabled && styles.disabledText,
      textStyle,
    ];

    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          ...buttonStyle,
          pressed && !isDisabled && styles.pressed,
        ]}
        onPress={isDisabled ? undefined : onPress}
        onLongPress={isDisabled ? undefined : onLongPress}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityState={{
          disabled: isDisabled,
          busy: loading,
        }}
        accessibilityLabel={accessibilityLabel || contentString}
        accessibilityHint={accessibilityHint}
        testID={testID}
        android_ripple={
          !isDisabled
            ? {
                color:
                  variant === 'primary' || variant === 'danger' || variant === 'success'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : theme.colors.state.primary.hover,
                borderless: false,
              }
            : undefined
        }
      >
        <View style={contentContainerStyle}>
          {loading ? (
            <ActivityIndicator
              size={size === 'small' ? 'small' : 'small'}
              color={getActivityIndicatorColor()}
            />
          ) : (
            <>
              {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
              <Text
                style={textStyles}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {children}
              </Text>
              {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
            </>
          )}
        </View>
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export default Button;
