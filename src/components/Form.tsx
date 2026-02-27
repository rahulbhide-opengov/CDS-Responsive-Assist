/**
 * CDS Form Components
 * Pre-styled form input components with CDS tokens and accessibility
 */

import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  FormLabel as MuiFormLabel,
  FormLabelProps as MuiFormLabelProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS TextField
 * Text input with CDS styling and built-in accessibility
 *
 * @example
 * <CDSTextField
 *   label="Email"
 *   type="email"
 *   required
 *   fullWidth
 *   helperText="Enter your email address"
 * />
 */
export const CDSTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius, // 4px

    // Focus state
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },

    // Error state - ensure proper contrast
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
      borderWidth: 2,
    },
  },

  // Label styling
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },

  // Helper text
  '& .MuiFormHelperText-root': {
    marginTop: theme.spacing(0.5),
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
})) as typeof MuiTextField;

/**
 * CDS Checkbox
 * Checkbox with proper touch target and accessibility
 *
 * @example
 * <CDSCheckbox
 *   checked={checked}
 *   onChange={handleChange}
 *   inputProps={{ 'aria-label': 'Accept terms' }}
 * />
 */
export const CDSCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  // Ensure WCAG touch target minimum (48px)
  padding: 12,

  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // Color transitions
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * CDS Radio
 * Radio button with proper touch target and accessibility
 *
 * @example
 * <CDSRadio
 *   checked={value === 'option1'}
 *   onChange={handleChange}
 *   value="option1"
 *   inputProps={{ 'aria-label': 'Option 1' }}
 * />
 */
export const CDSRadio = styled(MuiRadio)(({ theme }) => ({
  // Ensure WCAG touch target minimum (48px)
  padding: 12,

  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // Color transitions
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * CDS Switch
 * Toggle switch with proper accessibility
 *
 * @example
 * <CDSSwitch
 *   checked={enabled}
 *   onChange={handleToggle}
 *   inputProps={{ 'aria-label': 'Enable notifications' }}
 * />
 */
export const CDSSwitch = styled(MuiSwitch)(({ theme }) => ({
  // Proper sizing for touch target
  padding: 12,

  '& .MuiSwitch-switchBase': {
    '&.Mui-focusVisible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },

  // Smooth transitions
  '& .MuiSwitch-track': {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

/**
 * CDS Select
 * Dropdown select with CDS styling
 *
 * @example
 * <CDSSelect
 *   value={value}
 *   onChange={handleChange}
 *   label="Country"
 * >
 *   <MenuItem value="us">United States</MenuItem>
 *   <MenuItem value="uk">United Kingdom</MenuItem>
 * </CDSSelect>
 */
export const CDSSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // 4px

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
  },

  // Ensure proper spacing
  '& .MuiSelect-select': {
    padding: theme.spacing(1.5, 2), // 12px 16px
  },
})) as typeof MuiSelect;

/**
 * CDS FormLabel
 * Accessible form label with CDS typography
 *
 * @example
 * <CDSFormLabel required>
 *   Email Address
 * </CDSFormLabel>
 */
export const CDSFormLabel = styled(MuiFormLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,

  // Required asterisk styling
  '& .MuiFormLabel-asterisk': {
    color: theme.palette.error.main,
  },

  // Focus state
  '&.Mui-focused': {
    color: theme.palette.primary.main,
  },

  // Error state
  '&.Mui-error': {
    color: theme.palette.error.main,
  },
}));

// Type exports
export type CDSTextFieldProps = MuiTextFieldProps;
export type CDSCheckboxProps = MuiCheckboxProps;
export type CDSRadioProps = MuiRadioProps;
export type CDSSwitchProps = MuiSwitchProps;
export type CDSSelectProps = MuiSelectProps;
export type CDSFormLabelProps = MuiFormLabelProps;
