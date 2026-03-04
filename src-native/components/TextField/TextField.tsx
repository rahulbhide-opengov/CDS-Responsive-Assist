/**
 * CDS TextField Component - React Native
 * Text input with label, helper text, and validation states
 */

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  StyleProp,
} from 'react-native';
import { useTheme } from '../../theme';

// ============================================================================
// TYPES
// ============================================================================

/**
 * TextField States
 */
export type TextFieldState = 'default' | 'error' | 'success' | 'warning';

/**
 * TextField Sizes
 */
export type TextFieldSize = 'small' | 'medium' | 'large';

/**
 * TextField Props
 */
export interface TextFieldProps {
  /**
   * Input value
   */
  value: string;

  /**
   * Change handler
   */
  onChangeText: (text: string) => void;

  /**
   * Label text
   */
  label?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Helper text below input
   */
  helperText?: string;

  /**
   * Validation state
   * @default 'default'
   */
  state?: TextFieldState;

  /**
   * Input size
   * @default 'medium'
   */
  size?: TextFieldSize;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state (purple-tinted background)
   * @default false
   */
  readOnly?: boolean;

  /**
   * Multiline text input
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of lines (for multiline)
   */
  numberOfLines?: number;

  /**
   * Keyboard type
   */
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'url';

  /**
   * Auto-capitalize
   */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';

  /**
   * Secure text entry (password)
   * @default false
   */
  secureTextEntry?: boolean;

  /**
   * Maximum length
   */
  maxLength?: number;

  /**
   * Auto-focus on mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Custom container style
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Custom input style
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Accessibility label
   */
  accessibilityLabel?: string;

  /**
   * Test ID
   */
  testID?: string;

  /**
   * Focus handler
   */
  onFocus?: () => void;

  /**
   * Blur handler
   */
  onBlur?: () => void;

  /**
   * Submit handler
   */
  onSubmitEditing?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * TextField Component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TextField
 *   label="Email"
 *   value={email}
 *   onChangeText={setEmail}
 *   placeholder="Enter your email"
 * />
 *
 * // With validation
 * <TextField
 *   label="Password"
 *   value={password}
 *   onChangeText={setPassword}
 *   state="error"
 *   helperText="Password must be at least 8 characters"
 *   secureTextEntry
 * />
 *
 * // Read-only
 * <TextField
 *   label="Username"
 *   value="john.doe"
 *   onChangeText={() => {}}
 *   readOnly
 * />
 *
 * // Disabled
 * <TextField
 *   label="Locked Field"
 *   value="Cannot edit"
 *   onChangeText={() => {}}
 *   disabled
 * />
 * ```
 */
export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChangeText,
  label,
  placeholder,
  helperText,
  state = 'default',
  size = 'medium',
  disabled = false,
  readOnly = false,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
  maxLength,
  autoFocus = false,
  style,
  inputStyle,
  accessibilityLabel,
  testID,
  onFocus,
  onBlur,
  onSubmitEditing,
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  // Determine if input is editable
  const isEditable = !disabled && !readOnly;

  // Get border color based on state and focus
  const getBorderColor = (): string => {
    if (disabled) {
      return 'rgba(84, 101, 116, 0.5)';
    }
    if (readOnly) {
      return 'rgba(84, 101, 116, 0.5)';
    }
    if (isFocused) {
      return theme.colors.primary[700];
    }
    if (state === 'error') {
      return theme.colors.semantic.error.main;
    }
    if (state === 'success') {
      return theme.colors.semantic.success.main;
    }
    if (state === 'warning') {
      return theme.colors.semantic.warning.main;
    }
    return theme.colors.grey[300];
  };

  // Get background color
  const getBackgroundColor = (): string => {
    if (disabled) {
      return theme.colors.background.tertiary; // #f2f2f2
    }
    if (readOnly) {
      return theme.colors.background.readonly; // Purple tint
    }
    return theme.colors.background.default;
  };

  // Get helper text color
  const getHelperTextColor = (): string => {
    if (state === 'error') return theme.colors.semantic.error.main;
    if (state === 'success') return theme.colors.semantic.success.main;
    if (state === 'warning') return theme.colors.semantic.warning.main;
    return theme.colors.text.secondary;
  };

  // Get text color
  const getTextColor = (): string => {
    if (disabled || readOnly) {
      return 'rgba(0, 0, 0, 0.6)';
    }
    return theme.colors.text.primary;
  };

  // Get height based on size
  const getHeight = (): number => {
    if (multiline) return undefined;
    return theme.sizing.input[size].height;
  };

  // Handle focus
  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  // Handle blur
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const styles = createStyles(theme);

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      {label && (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      )}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          { height: getHeight() },
          {
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
          },
          isFocused && styles.inputContainerFocused,
          disabled && styles.inputContainerDisabled,
          readOnly && styles.inputContainerReadOnly,
        ]}
      >
        <TextInput
          style={[
            styles.input,
            styles[`input${size.charAt(0).toUpperCase() + size.slice(1)}`],
            { color: getTextColor() },
            multiline && styles.inputMultiline,
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.hint}
          editable={isEditable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          autoFocus={autoFocus}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={onSubmitEditing}
          accessibilityLabel={accessibilityLabel || label}
          testID={testID}
        />
      </View>

      {/* Helper Text */}
      {helperText && (
        <Text
          style={[
            styles.helperText,
            { color: getHelperTextColor() },
          ]}
        >
          {helperText}
        </Text>
      )}
    </View>
  );
};

// ============================================================================
// STYLES
// ============================================================================

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },

    label: {
      fontSize: 14,
      fontWeight: theme.fontWeights.medium,
      color: theme.colors.text.primary,
      marginBottom: 6,
    },

    labelDisabled: {
      color: theme.colors.text.disabled,
    },

    inputContainer: {
      borderWidth: 1,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.colors.background.default,
      paddingHorizontal: 12,
      paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    },

    inputContainerFocused: {
      borderWidth: 2,
      ...Platform.select({
        ios: {
          shadowColor: theme.colors.primary[700],
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        },
        android: {
          elevation: 2,
        },
      }),
    },

    inputContainerDisabled: {
      backgroundColor: theme.colors.background.tertiary,
    },

    inputContainerReadOnly: {
      backgroundColor: theme.colors.background.readonly,
    },

    input: {
      fontSize: 16,
      color: theme.colors.text.primary,
      padding: 0,
      margin: 0,
      ...Platform.select({
        android: {
          paddingVertical: 8,
        },
      }),
    },

    inputSmall: {
      fontSize: theme.sizing.input.small.fontSize,
    },

    inputMedium: {
      fontSize: theme.sizing.input.medium.fontSize,
    },

    inputLarge: {
      fontSize: theme.sizing.input.large.fontSize,
    },

    inputMultiline: {
      minHeight: 80,
      textAlignVertical: 'top',
      paddingTop: 10,
    },

    helperText: {
      fontSize: 12,
      marginTop: 4,
      paddingLeft: 12,
    },
  });

export default TextField;
