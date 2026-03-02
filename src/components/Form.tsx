/**
 * CDS Form Components (CDS-First Architecture)
 * Form components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - state: 'default' | 'error' | 'success' | 'warning'
 * - ariaLabel (not aria-label)
 * - Intuitive prop names aligned with CDS design system
 */

import React from 'react';
import {
  TextField as MuiTextField,
  Checkbox as MuiCheckbox,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  Switch as MuiSwitch,
  Select as MuiSelect,
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
  FormControlLabel as MuiFormControlLabel,
  FormHelperText as MuiFormHelperText,
  FormGroup as MuiFormGroup,
  InputLabel as MuiInputLabel,
  OutlinedInput as MuiOutlinedInput,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Input State (Design Language)
 */
export type InputState = 'default' | 'error' | 'success' | 'warning';

/**
 * CDS TextField Props (CDS API)
 */
export interface TextFieldProps {
  /**
   * Input label
   */
  label?: string;

  /**
   * Input value
   */
  value?: string | number;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string | number;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Visual state of the input
   * @default 'default'
   */
  state?: InputState;

  /**
   * Helper text below input
   */
  helperText?: string;

  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean;

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';

  /**
   * Multiline textarea
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of rows (for multiline)
   */
  rows?: number;

  /**
   * Max rows (for multiline)
   */
  maxRows?: number;

  /**
   * Min rows (for multiline)
   */
  minRows?: number;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * ID of element describing input
   */
  ariaDescribedBy?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Autocomplete attribute
   */
  autoComplete?: string;

  /**
   * Auto focus on mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Input props passed to underlying input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Start adornment (icon/text on left)
   */
  startAdornment?: React.ReactNode;

  /**
   * End adornment (icon/text on right)
   */
  endAdornment?: React.ReactNode;

  /**
   * TextField size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * CDS Checkbox Props (CDS API)
 */
export interface CheckboxProps {
  /**
   * Checked state
   */
  checked?: boolean;

  /**
   * Default checked (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * Indeterminate state
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * Accessible label (required for standalone checkboxes)
   */
  ariaLabel?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Value attribute
   */
  value?: string;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Checkbox color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * Checkbox size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * CDS Radio Props (CDS API)
 */
export interface RadioProps {
  /**
   * Checked state
   */
  checked?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Radio value
   */
  value?: any;

  /**
   * Accessible label (required for standalone radios)
   */
  ariaLabel?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Radio color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * Radio size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * CDS RadioGroup Props (CDS API)
 */
export interface RadioGroupProps {
  /**
   * Selected value
   */
  value?: any;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: any;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

  /**
   * Radio group name
   */
  name?: string;

  /**
   * Children (Radio components)
   */
  children?: React.ReactNode;

  /**
   * Layout direction
   * @default 'column'
   */
  direction?: 'row' | 'column';

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

/**
 * CDS Switch Props (CDS API)
 */
export interface SwitchProps {
  /**
   * Checked state
   */
  checked?: boolean;

  /**
   * Default checked (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * Accessible label (required for standalone switches)
   */
  ariaLabel?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Value attribute
   */
  value?: string;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Switch color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * Switch size
   * @default 'medium'
   */
  size?: 'small' | 'medium';
}

/**
 * CDS Select Props (CDS API)
 */
export interface SelectProps {
  /**
   * Selected value
   */
  value?: any;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: any;

  /**
   * Change handler
   */
  onChange?: (event: any, child?: React.ReactNode) => void;

  /**
   * Select label
   */
  label?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean;

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Multiple selection
   * @default false
   */
  multiple?: boolean;

  /**
   * Children (MenuItem components)
   */
  children?: React.ReactNode;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Visual state
   * @default 'default'
   */
  state?: InputState;

  /**
   * Auto width
   * @default false
   */
  autoWidth?: boolean;

  /**
   * Select size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * CDS FormControl Props (CDS API)
 */
export interface FormControlProps {
  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS FormLabel Props (CDS API)
 */
export interface FormLabelProps {
  /**
   * Label text
   */
  children?: React.ReactNode;

  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * HTML for attribute
   */
  htmlFor?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS FormControlLabel Props (CDS API)
 */
export interface FormControlLabelProps {
  /**
   * Form control element (Checkbox, Radio, Switch)
   */
  control: React.ReactElement;

  /**
   * Label text
   */
  label: React.ReactNode;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Label placement
   * @default 'end'
   */
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Value attribute
   */
  value?: any;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

/**
 * CDS FormHelperText Props (CDS API)
 */
export interface FormHelperTextProps {
  /**
   * Helper text content
   */
  children?: React.ReactNode;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS FormGroup Props (CDS API)
 */
export interface FormGroupProps {
  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Layout direction
   * @default 'column'
   */
  direction?: 'row' | 'column';

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

/**
 * CDS InputLabel Props (CDS API)
 */
export interface InputLabelProps {
  /**
   * Label text
   */
  children?: React.ReactNode;

  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * HTML for attribute
   */
  htmlFor?: string;

  /**
   * Shrink state (label moves up)
   */
  shrink?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS OutlinedInput Props (CDS API)
 */
export interface OutlinedInputProps {
  /**
   * Input value
   */
  value?: any;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: any;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Input type
   * @default 'text'
   */
  type?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean;

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Multiline textarea
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of rows
   */
  rows?: number;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Start adornment
   */
  startAdornment?: React.ReactNode;

  /**
   * End adornment
   */
  endAdornment?: React.ReactNode;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Input props
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Input size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

// ============================================================================
// INTERNAL UTILITIES (Hidden from developers)
// ============================================================================

/**
 * Maps CDS state to MUI error prop
 * THIS IS INTERNAL - developers never see this
 */
const getErrorStateFromCDSState = (state?: InputState): boolean => {
  return state === 'error';
};

/**
 * Gets state color from theme
 */
const getStateColor = (state: InputState, theme: any) => {
  switch (state) {
    case 'error':
      return theme.palette.error.main;
    case 'success':
      return theme.palette.success.main;
    case 'warning':
      return theme.palette.warning.main;
    default:
      return theme.palette.primary.main;
  }
};

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * Styled TextField with CDS tokens
 */
const StyledMuiTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'cdsSize',
})<{ cdsSize?: 'small' | 'medium' | 'large' }>(({ theme, cdsSize = 'medium' }) => {
  // Get size-specific styles
  const getSizeStyles = () => {
    switch (cdsSize) {
      case 'small':
        return {
          '& .MuiOutlinedInput-root': {
            // Small TextField - Responsive heights
            minHeight: 32, // Mobile base
            [theme.breakpoints.up('sm')]: {
              minHeight: 32, // Tablet
            },
            [theme.breakpoints.up('md')]: {
              minHeight: 28, // Desktop
            },
            ...theme.typography.input.valueSm,

            '& .MuiOutlinedInput-input': {
              // Responsive padding
              padding: theme.spacing(1, 1.5), // Mobile base (4px, 12px)
              [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(1, 1.5), // Tablet (4px, 12px)
              },
              [theme.breakpoints.up('md')]: {
                padding: theme.spacing(0.5, 1.5), // Desktop (2px, 12px)
              },
            },
          },
          '& .MuiInputLabel-root': {
            ...theme.typography.input.labelSm,
          },
        };

      case 'large':
        return {
          '& .MuiOutlinedInput-root': {
            // Large TextField - Responsive heights
            minHeight: 48, // Mobile base
            [theme.breakpoints.up('sm')]: {
              minHeight: 44, // Tablet
            },
            [theme.breakpoints.up('md')]: {
              minHeight: 40, // Desktop
            },
            ...theme.typography.input.valueLg,

            '& .MuiOutlinedInput-input': {
              // Responsive padding
              padding: theme.spacing(1.5, 2.5), // Mobile base (6px, 20px)
              [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(1.5, 2.25), // Tablet (6px, 18px)
              },
              [theme.breakpoints.up('md')]: {
                padding: theme.spacing(1.5, 2), // Desktop (6px, 16px)
              },
            },
          },
          '& .MuiInputLabel-root': {
            ...theme.typography.input.labelLg,
          },
        };

      case 'medium':
      default:
        return {
          '& .MuiOutlinedInput-root': {
            // Medium TextField - Responsive heights
            minHeight: 40, // Mobile base
            [theme.breakpoints.up('sm')]: {
              minHeight: 36, // Tablet
            },
            [theme.breakpoints.up('md')]: {
              minHeight: 32, // Desktop
            },
            ...theme.typography.input.valueMd,

            '& .MuiOutlinedInput-input': {
              // Responsive padding
              padding: theme.spacing(1.5, 2), // Mobile base (6px, 16px)
              [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(1.25, 1.75), // Tablet (5px, 14px)
              },
              [theme.breakpoints.up('md')]: {
                padding: theme.spacing(1, 1.75), // Desktop (4px, 14px)
              },
            },
          },
          '& .MuiInputLabel-root': {
            ...theme.typography.input.labelMd,
          },
        };
    }
  };

  return {
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

      // Success state (custom)
      '&[data-state="success"] .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.success.main,
        borderWidth: 2,
      },

      // Warning state (custom)
      '&[data-state="warning"] .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.warning.main,
        borderWidth: 2,
      },

      // Disabled state - Explicit Figma styling
      // Per Figma: background #f2f2f2, border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
      '&.Mui-disabled': {
        backgroundColor: theme.palette.background.tertiary, // #f2f2f2
        cursor: 'not-allowed',

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(84, 101, 116, 0.5)',
          borderWidth: 1,
        },

        '& .MuiOutlinedInput-input': {
          color: 'rgba(0, 0, 0, 0.6)', // Disabled text color
          cursor: 'not-allowed',
          WebkitTextFillColor: 'rgba(0, 0, 0, 0.6)', // Override browser default
        },
      },

      // Read-only state - Explicit Figma styling
      // Per Figma: background rgba(75,63,255,0.08), border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
      '&[data-readonly="true"]': {
        backgroundColor: 'rgba(75, 63, 255, 0.08)', // Primary states selected - purple tint
        cursor: 'default',

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(84, 101, 116, 0.5)',
          borderWidth: 1,
        },

        '& .MuiOutlinedInput-input': {
          color: 'rgba(0, 0, 0, 0.6)', // Read-only text color (same as disabled but background differs)
          cursor: 'default', // Different from disabled (not-allowed)
        },
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
      '&[data-state="success"]': {
        color: theme.palette.success.main,
      },
      '&[data-state="warning"]': {
        color: theme.palette.warning.main,
      },
      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.6)', // Disabled label color
      },
      '&[data-readonly="true"]': {
        color: 'rgba(0, 0, 0, 0.6)', // Read-only label color
      },
    },

    // Helper text
    '& .MuiFormHelperText-root': {
      marginTop: theme.spacing(0.5),
      ...theme.typography.input.helper,

      '&.Mui-error': {
        color: theme.palette.error.main,
      },
      '&[data-state="success"]': {
        color: theme.palette.success.main,
      },
      '&[data-state="warning"]': {
        color: theme.palette.warning.main,
      },
    },

    // Focus-visible for keyboard navigation
    '&:focus-within': {
      outline: 'none',
    },

    // Apply size-specific styles
    ...getSizeStyles(),
  };
});

/**
 * Styled Checkbox with CDS tokens
 */
const StyledMuiCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  // Medium checkbox (default) - Responsive padding
  padding: theme.spacing(1.5), // Mobile: 12px
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5), // Tablet: 12px
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.25), // Desktop: 10px
  },

  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // Color transitions
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.shortest,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.secondaryStates.light.hover,
  },

  // Small checkbox - Responsive
  '&.MuiCheckbox-sizeSmall': {
    padding: theme.spacing(1.25), // Mobile: 10px
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.25), // Tablet: 10px
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1), // Desktop: 8px
    },
  },

  // Large checkbox - Responsive
  '&.MuiCheckbox-sizeLarge': {
    padding: theme.spacing(1.75), // Mobile: 14px
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.75), // Tablet: 14px
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1.5), // Desktop: 12px
    },
  },
}));

/**
 * Styled Radio with CDS tokens
 */
const StyledMuiRadio = styled(MuiRadio)(({ theme }) => ({
  // Medium radio (default) - Responsive padding
  padding: theme.spacing(1.5), // Mobile: 12px
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5), // Tablet: 12px
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.25), // Desktop: 10px
  },

  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // Color transitions
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.shortest,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.secondaryStates.light.hover,
  },

  // Small radio - Responsive
  '&.MuiRadio-sizeSmall': {
    padding: theme.spacing(1.25), // Mobile: 10px
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.25), // Tablet: 10px
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1), // Desktop: 8px
    },
  },

  // Large radio - Responsive
  '&.MuiRadio-sizeLarge': {
    padding: theme.spacing(1.75), // Mobile: 14px
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.75), // Tablet: 14px
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1.5), // Desktop: 12px
    },
  },
}));

/**
 * Styled RadioGroup with CDS tokens
 */
const StyledMuiRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  gap: theme.spacing(1),

  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(0.5),

    '& .MuiFormControlLabel-label': {
      ...theme.typography.body1,
      color: theme.palette.text.primary,
    },
  },
}));

/**
 * Styled Switch with CDS tokens
 */
const StyledMuiSwitch = styled(MuiSwitch)(({ theme }) => ({
  // Medium switch (default) - Responsive padding
  padding: theme.spacing(1.5), // Mobile: 12px
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5), // Tablet: 12px
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.25), // Desktop: 10px
  },

  '& .MuiSwitch-switchBase': {
    '&.Mui-focusVisible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },

    // Enhanced hover state
    '&:hover': {
      backgroundColor: theme.palette.secondaryStates.light.hover,
    },
  },

  // Smooth transitions
  '& .MuiSwitch-track': {
    transition: theme.transitions.create(['background-color', 'border'], {
      duration: theme.transitions.duration.shorter,
    }),
  },

  '& .MuiSwitch-thumb': {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shorter,
    }),
  },

  // Small switch - Responsive
  '&.MuiSwitch-sizeSmall': {
    padding: theme.spacing(1.25), // Mobile: 10px
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.25), // Tablet: 10px
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1), // Desktop: 8px
    },
  },
}));

/**
 * Styled Select with CDS tokens
 */
const StyledMuiSelect = styled(MuiSelect, {
  shouldForwardProp: (prop) => prop !== 'cdsSize',
})<{ cdsSize?: 'small' | 'medium' | 'large' }>(({ theme, cdsSize = 'medium' }) => {
  // Get size-specific styles
  const getSizeStyles = () => {
    switch (cdsSize) {
      case 'small':
        return {
          minHeight: 32, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 32, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 28, // Desktop
          },

          '& .MuiSelect-select': {
            padding: theme.spacing(1, 1.5), // Mobile: 4px, 12px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1, 1.5), // Tablet: 4px, 12px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(0.5, 1.5), // Desktop: 2px, 12px
            },
            ...theme.typography.input.valueSm,
          },
        };

      case 'large':
        return {
          minHeight: 48, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 44, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 40, // Desktop
          },

          '& .MuiSelect-select': {
            padding: theme.spacing(1.5, 2.5), // Mobile: 6px, 20px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1.5, 2.25), // Tablet: 6px, 18px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(1.5, 2), // Desktop: 6px, 16px
            },
            ...theme.typography.input.valueLg,
          },
        };

      case 'medium':
      default:
        return {
          minHeight: 40, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 36, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 32, // Desktop
          },

          '& .MuiSelect-select': {
            padding: theme.spacing(1.5, 2), // Mobile: 6px, 16px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1.25, 1.75), // Tablet: 5px, 14px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(1, 1.75), // Desktop: 4px, 14px
            },
            ...theme.typography.input.valueMd,
          },
        };
    }
  };

  return {
    borderRadius: theme.shape.borderRadius,

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },

    // Error state
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
      borderWidth: 2,
    },

    // Success state (custom)
    '&[data-state="success"] .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.success.main,
      borderWidth: 2,
    },

    // Warning state (custom)
    '&[data-state="warning"] .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.warning.main,
      borderWidth: 2,
    },

    // Disabled state - Explicit Figma styling
    // Per Figma: background #f2f2f2, border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
    '&.Mui-disabled': {
      backgroundColor: theme.palette.background.tertiary, // #f2f2f2
      cursor: 'not-allowed',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(84, 101, 116, 0.5)',
        borderWidth: 1,
      },

      '& .MuiSelect-select': {
        color: 'rgba(0, 0, 0, 0.6)', // Disabled text color
        cursor: 'not-allowed',
        WebkitTextFillColor: 'rgba(0, 0, 0, 0.6)', // Override browser default
      },
    },

    // Read-only state - Explicit Figma styling
    // Per Figma: background rgba(75,63,255,0.08), border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
    '&[data-readonly="true"]': {
      backgroundColor: 'rgba(75, 63, 255, 0.08)', // Primary states selected - purple tint
      cursor: 'default',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(84, 101, 116, 0.5)',
        borderWidth: 1,
      },

      '& .MuiSelect-select': {
        color: 'rgba(0, 0, 0, 0.6)', // Read-only text color
        cursor: 'default',
      },
    },

    // Focus-visible for keyboard navigation
    '&.Mui-focusVisible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },

    // Apply size-specific styles
    ...getSizeStyles(),
  };
});

/**
 * Styled FormControl with CDS tokens
 */
const StyledMuiFormControl = styled(MuiFormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),

  '& .MuiFormLabel-root': {
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Styled FormLabel with CDS tokens
 */
const StyledMuiFormLabel = styled(MuiFormLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  ...theme.typography.body1,

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

  // Disabled state
  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
  },
}));

/**
 * Styled FormControlLabel with CDS tokens
 */
const StyledMuiFormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  marginRight: theme.spacing(2),

  '& .MuiFormControlLabel-label': {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(1),

    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },

  // Ensure proper alignment
  alignItems: 'center',

  // Touch target
  minHeight: theme.spacing(6), // 48px
}));

/**
 * Styled FormHelperText with CDS tokens
 */
const StyledMuiFormHelperText = styled(MuiFormHelperText)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  marginLeft: theme.spacing(1.75),
  ...theme.typography.input.helper,

  '&.Mui-error': {
    color: theme.palette.error.main,
  },

  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
  },
}));

/**
 * Styled FormGroup with CDS tokens
 */
const StyledMuiFormGroup = styled(MuiFormGroup)(({ theme }) => ({
  gap: theme.spacing(1),

  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    marginBottom: theme.spacing(0.5),
  },
}));

/**
 * Styled InputLabel with CDS tokens
 */
const StyledMuiInputLabel = styled(MuiInputLabel)(({ theme }) => ({
  ...theme.typography.input.labelMd,
  fontWeight: theme.typography.fontWeightMedium,

  '&.Mui-focused': {
    color: theme.palette.primary.main,
  },

  '&.Mui-error': {
    color: theme.palette.error.main,
  },

  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
  },

  // Required asterisk
  '& .MuiInputLabel-asterisk': {
    color: theme.palette.error.main,
  },
}));

/**
 * Styled OutlinedInput with CDS tokens
 */
const StyledMuiOutlinedInput = styled(MuiOutlinedInput, {
  shouldForwardProp: (prop) => prop !== 'cdsSize',
})<{ cdsSize?: 'small' | 'medium' | 'large' }>(({ theme, cdsSize = 'medium' }) => {
  // Get size-specific styles
  const getSizeStyles = () => {
    switch (cdsSize) {
      case 'small':
        return {
          minHeight: 32, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 32, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 28, // Desktop
          },

          '& .MuiOutlinedInput-input': {
            padding: theme.spacing(1, 1.5), // Mobile: 4px, 12px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1, 1.5), // Tablet: 4px, 12px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(0.5, 1.5), // Desktop: 2px, 12px
            },
            ...theme.typography.input.valueSm,
          },
        };

      case 'large':
        return {
          minHeight: 48, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 44, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 40, // Desktop
          },

          '& .MuiOutlinedInput-input': {
            padding: theme.spacing(1.5, 2.5), // Mobile: 6px, 20px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1.5, 2.25), // Tablet: 6px, 18px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(1.5, 2), // Desktop: 6px, 16px
            },
            ...theme.typography.input.valueLg,
          },
        };

      case 'medium':
      default:
        return {
          minHeight: 40, // Mobile base
          [theme.breakpoints.up('sm')]: {
            minHeight: 36, // Tablet
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 32, // Desktop
          },

          '& .MuiOutlinedInput-input': {
            padding: theme.spacing(1.5, 2), // Mobile: 6px, 16px
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(1.25, 1.75), // Tablet: 5px, 14px
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(1, 1.75), // Desktop: 4px, 14px
            },
            ...theme.typography.input.valueMd,
          },
        };
    }
  };

  return {
    borderRadius: theme.shape.borderRadius,

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },

    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
      borderWidth: 2,
    },

    // Disabled state - Explicit Figma styling
    // Per Figma: background #f2f2f2, border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
    '&.Mui-disabled': {
      backgroundColor: theme.palette.background.tertiary, // #f2f2f2
      cursor: 'not-allowed',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(84, 101, 116, 0.5)',
        borderWidth: 1,
      },

      '& .MuiOutlinedInput-input': {
        color: 'rgba(0, 0, 0, 0.6)', // Disabled text color
        cursor: 'not-allowed',
        WebkitTextFillColor: 'rgba(0, 0, 0, 0.6)', // Override browser default
      },
    },

    // Read-only state - Explicit Figma styling
    // Per Figma: background rgba(75,63,255,0.08), border rgba(84,101,116,0.5), text rgba(0,0,0,0.6)
    '&[data-readonly="true"]': {
      backgroundColor: 'rgba(75, 63, 255, 0.08)', // Primary states selected - purple tint
      cursor: 'default',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(84, 101, 116, 0.5)',
        borderWidth: 1,
      },

      '& .MuiOutlinedInput-input': {
        color: 'rgba(0, 0, 0, 0.6)', // Read-only text color
        cursor: 'default',
      },
    },

    '&.Mui-focusVisible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },

    // Apply size-specific styles
    ...getSizeStyles(),
  };
});

// ============================================================================
// CDS FORM COMPONENTS
// ============================================================================

/**
 * CDS TextField Component
 *
 * Use CDS state prop, not error boolean
 *
 * @example
 * // Default state
 * <TextField label="Email" type="email" />
 *
 * // Error state
 * <TextField
 *   label="Email"
 *   state="error"
 *   helperText="Email is required"
 * />
 *
 * // Success state
 * <TextField
 *   label="Email"
 *   state="success"
 *   helperText="Email is valid"
 * />
 *
 * // With adornments
 * <TextField
 *   label="Password"
 *   type="password"
 *   startAdornment={<LockOutlinedIcon />}
 * />
 */
export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      label,
      value,
      defaultValue,
      placeholder,
      state = 'default',
      helperText,
      required = false,
      disabled = false,
      readOnly = false,
      fullWidth = false,
      type = 'text',
      size = 'medium',
      multiline = false,
      rows,
      maxRows,
      minRows,
      onChange,
      onBlur,
      onFocus,
      ariaLabel,
      ariaDescribedBy,
      id,
      name,
      autoComplete,
      autoFocus = false,
      className,
      sx,
      inputProps,
      startAdornment,
      endAdornment,
    },
    ref
  ) => {
    const error = getErrorStateFromCDSState(state);

    return (
      <StyledMuiTextField
        ref={ref}
        cdsSize={size}
        label={label}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        type={type}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        inputProps={{
          'aria-label': ariaLabel,
          'aria-describedby': ariaDescribedBy,
          ...inputProps,
        }}
        id={id}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={className}
        sx={sx}
        InputProps={{
          startAdornment,
          endAdornment,
          readOnly,
        }}
        data-state={state}
        data-readonly={readOnly ? 'true' : undefined}
      />
    );
  }
);

TextField.displayName = 'TextField';

/**
 * CDS Checkbox Component
 *
 * @example
 * <Checkbox
 *   checked={checked}
 *   onChange={handleChange}
 *   ariaLabel="Accept terms"
 * />
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      indeterminate = false,
      disabled = false,
      onChange,
      ariaLabel,
      id,
      name,
      value,
      required = false,
      className,
      sx,
      color = 'primary',
      size = 'medium',
    },
    ref
  ) => {
    return (
      <StyledMuiCheckbox
        ref={ref}
        checked={checked}
        defaultChecked={defaultChecked}
        indeterminate={indeterminate}
        disabled={disabled}
        onChange={onChange}
        inputProps={{
          'aria-label': ariaLabel,
        }}
        id={id}
        name={name}
        value={value}
        required={required}
        className={className}
        sx={sx}
        color={color}
        size={size}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

/**
 * CDS Radio Component
 *
 * @example
 * <Radio
 *   checked={value === 'option1'}
 *   value="option1"
 *   ariaLabel="Option 1"
 * />
 */
export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      checked,
      disabled = false,
      onChange,
      value,
      ariaLabel,
      id,
      name,
      required = false,
      className,
      sx,
      color = 'primary',
      size = 'medium',
    },
    ref
  ) => {
    return (
      <StyledMuiRadio
        ref={ref}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
        inputProps={{
          'aria-label': ariaLabel,
        }}
        id={id}
        name={name}
        required={required}
        className={className}
        sx={sx}
        color={color}
        size={size}
      />
    );
  }
);

Radio.displayName = 'Radio';

/**
 * CDS RadioGroup Component
 *
 * @example
 * <RadioGroup value={value} onChange={handleChange}>
 *   <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
 *   <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
 * </RadioGroup>
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      name,
      children,
      direction = 'column',
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiRadioGroup
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        row={direction === 'row'}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiRadioGroup>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

/**
 * CDS Switch Component
 *
 * @example
 * <Switch
 *   checked={enabled}
 *   onChange={handleToggle}
 *   ariaLabel="Enable notifications"
 * />
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      disabled = false,
      onChange,
      ariaLabel,
      id,
      name,
      value,
      required = false,
      className,
      sx,
      color = 'primary',
      size = 'medium',
    },
    ref
  ) => {
    return (
      <StyledMuiSwitch
        ref={ref}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        inputProps={{
          'aria-label': ariaLabel,
        }}
        id={id}
        name={name}
        value={value}
        required={required}
        className={className}
        sx={sx}
        color={color}
        size={size}
      />
    );
  }
);

Switch.displayName = 'Switch';

/**
 * CDS Select Component
 *
 * @example
 * <Select
 *   value={value}
 *   onChange={handleChange}
 *   label="Country"
 * >
 *   <MenuItem value="us">United States</MenuItem>
 *   <MenuItem value="uk">United Kingdom</MenuItem>
 * </Select>
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      label,
      disabled = false,
      readOnly = false,
      fullWidth = false,
      multiple = false,
      children,
      ariaLabel,
      id,
      name,
      required = false,
      className,
      sx,
      state = 'default',
      autoWidth = false,
      size = 'medium',
    },
    ref
  ) => {
    const error = getErrorStateFromCDSState(state);

    return (
      <StyledMuiSelect
        ref={ref}
        cdsSize={size}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        disabled={disabled}
        fullWidth={fullWidth}
        multiple={multiple}
        error={error}
        inputProps={{
          'aria-label': ariaLabel,
          readOnly,
        }}
        id={id}
        name={name}
        required={required}
        className={className}
        sx={sx}
        autoWidth={autoWidth}
        data-state={state}
        data-readonly={readOnly ? 'true' : undefined}
      >
        {children}
      </StyledMuiSelect>
    );
  }
);

Select.displayName = 'Select';

/**
 * CDS FormControl Component
 *
 * @example
 * <FormControl fullWidth>
 *   <FormLabel>Email</FormLabel>
 *   <TextField />
 * </FormControl>
 */
export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      children,
      fullWidth = false,
      disabled = false,
      error = false,
      required = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiFormControl
        ref={ref}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        required={required}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiFormControl>
    );
  }
);

FormControl.displayName = 'FormControl';

/**
 * CDS FormLabel Component
 *
 * @example
 * <FormLabel required>Email Address</FormLabel>
 */
export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      children,
      required = false,
      disabled = false,
      error = false,
      htmlFor,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiFormLabel
        ref={ref}
        required={required}
        disabled={disabled}
        error={error}
        htmlFor={htmlFor}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiFormLabel>
    );
  }
);

FormLabel.displayName = 'FormLabel';

/**
 * CDS FormControlLabel Component
 *
 * @example
 * <FormControlLabel
 *   control={<Checkbox />}
 *   label="Accept terms"
 * />
 */
export const FormControlLabel = React.forwardRef<HTMLLabelElement, FormControlLabelProps>(
  (
    {
      control,
      label,
      disabled = false,
      labelPlacement = 'end',
      className,
      sx,
      value,
      onChange,
    },
    ref
  ) => {
    return (
      <StyledMuiFormControlLabel
        ref={ref}
        control={control}
        label={label}
        disabled={disabled}
        labelPlacement={labelPlacement}
        className={className}
        sx={sx}
        value={value}
        onChange={onChange}
      />
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

/**
 * CDS FormHelperText Component
 *
 * @example
 * <FormHelperText error>This field is required</FormHelperText>
 */
export const FormHelperText = React.forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  (
    {
      children,
      error = false,
      disabled = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiFormHelperText
        ref={ref}
        error={error}
        disabled={disabled}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiFormHelperText>
    );
  }
);

FormHelperText.displayName = 'FormHelperText';

/**
 * CDS FormGroup Component
 *
 * @example
 * <FormGroup direction="row">
 *   <FormControlLabel control={<Checkbox />} label="Option 1" />
 *   <FormControlLabel control={<Checkbox />} label="Option 2" />
 * </FormGroup>
 */
export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    {
      children,
      direction = 'column',
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiFormGroup
        ref={ref}
        row={direction === 'row'}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiFormGroup>
    );
  }
);

FormGroup.displayName = 'FormGroup';

/**
 * CDS InputLabel Component
 *
 * @example
 * <InputLabel htmlFor="email" required>Email</InputLabel>
 */
export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  (
    {
      children,
      required = false,
      disabled = false,
      error = false,
      htmlFor,
      shrink,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiInputLabel
        ref={ref}
        required={required}
        disabled={disabled}
        error={error}
        htmlFor={htmlFor}
        shrink={shrink}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiInputLabel>
    );
  }
);

InputLabel.displayName = 'InputLabel';

/**
 * CDS OutlinedInput Component
 *
 * @example
 * <OutlinedInput
 *   value={value}
 *   onChange={handleChange}
 *   placeholder="Enter text"
 * />
 */
export const OutlinedInput = React.forwardRef<HTMLDivElement, OutlinedInputProps>(
  (
    {
      value,
      defaultValue,
      placeholder,
      type = 'text',
      disabled = false,
      readOnly = false,
      fullWidth = false,
      multiline = false,
      rows,
      onChange,
      startAdornment,
      endAdornment,
      ariaLabel,
      id,
      name,
      error = false,
      required = false,
      className,
      sx,
      inputProps,
      size = 'medium',
    },
    ref
  ) => {
    return (
      <StyledMuiOutlinedInput
        ref={ref}
        cdsSize={size}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        inputProps={{
          'aria-label': ariaLabel,
          readOnly,
          ...inputProps,
        }}
        id={id}
        name={name}
        error={error}
        required={required}
        className={className}
        sx={sx}
        data-readonly={readOnly ? 'true' : undefined}
      />
    );
  }
);

OutlinedInput.displayName = 'OutlinedInput';

// ============================================================================
// EXPORTS
// ============================================================================

export default TextField;
