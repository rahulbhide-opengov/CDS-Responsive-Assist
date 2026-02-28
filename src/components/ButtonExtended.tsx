/**
 * CDS Extended Button Components (CDS-First Architecture)
 * Additional button components with CDS API
 *
 * Note: LoadingButton is deprecated - use Button with loading prop instead
 */

import React from 'react';
import {
  ButtonGroup as MuiButtonGroup,
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS BUTTON GROUP
// ============================================================================

export interface ButtonGroupProps {
  children: React.ReactNode;
  /**
   * CDS orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * CDS size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Buttons take full width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  className?: string;
  sx?: any;
}

/**
 * CDS Button Group
 * Group of related buttons
 *
 * @example
 * <ButtonGroup>
 *   <Button variant="secondary">One</Button>
 *   <Button variant="secondary">Two</Button>
 *   <Button variant="secondary">Three</Button>
 * </ButtonGroup>
 */
export const ButtonGroup = styled(
  React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => (
    <MuiButtonGroup ref={ref} {...props} />
  ))
)(({ theme }) => ({
  // CDS styling for grouped buttons
  '& .MuiButton-root': {
    borderRadius: 0,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
    '&:last-of-type': {
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
  },
}));

ButtonGroup.displayName = 'ButtonGroup';

// ============================================================================
// CDS TOGGLE BUTTON GROUP
// ============================================================================

export interface ToggleButtonGroupProps {
  children: React.ReactNode;
  /**
   * Current value (controlled)
   */
  value?: string | string[];
  /**
   * Change handler
   */
  onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  /**
   * CDS orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * CDS size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Allow multiple selection
   * @default false
   */
  exclusive?: boolean;
  /**
   * Buttons take full width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  className?: string;
  sx?: any;
  ariaLabel?: string;
}

/**
 * CDS Toggle Button Group
 * Group of toggle buttons for multi-select or single-select
 *
 * @example
 * <ToggleButtonGroup value={value} onChange={handleChange}>
 *   <ToggleButton value="left">Left</ToggleButton>
 *   <ToggleButton value="center">Center</ToggleButton>
 *   <ToggleButton value="right">Right</ToggleButton>
 * </ToggleButtonGroup>
 */
export const ToggleButtonGroup = styled(
  React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
    ({ ariaLabel, ...props }, ref) => (
      <MuiToggleButtonGroup ref={ref} aria-label={ariaLabel} {...props} />
    )
  )
)(({ theme }) => ({
  // CDS styling for toggle group
  '& .MuiToggleButton-root': {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2),

    // CDS selected state
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    // CDS focus indicator
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
}));

ToggleButtonGroup.displayName = 'ToggleButtonGroup';

// ============================================================================
// CDS TOGGLE BUTTON
// ============================================================================

export interface ToggleButtonProps {
  children: React.ReactNode;
  /**
   * Value of this toggle button
   */
  value: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Selected state (controlled)
   */
  selected?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * CDS size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Buttons take full width
   * @default false
   */
  fullWidth?: boolean;
  className?: string;
  sx?: any;
  ariaLabel?: string;
}

/**
 * CDS Toggle Button
 * Individual toggle button
 *
 * @example
 * <ToggleButton value="bold" ariaLabel="bold">
 *   <FormatBoldIcon />
 * </ToggleButton>
 */
export const ToggleButton = styled(
  React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
    ({ ariaLabel, ...props }, ref) => (
      <MuiToggleButton ref={ref} aria-label={ariaLabel} {...props} />
    )
  )
)(({ theme }) => ({
  // CDS styling
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1, 2),
  minHeight: 40,

  // CDS selected state
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  // CDS focus indicator
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // CDS transitions
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
  }),
}));

ToggleButton.displayName = 'ToggleButton';

// ============================================================================
// DEPRECATED: LoadingButton
// ============================================================================

/**
 * @deprecated Use Button with loading prop instead
 *
 * @example
 * // OLD (deprecated)
 * <LoadingButton loading={isLoading}>Save</LoadingButton>
 *
 * // NEW (use this)
 * <Button variant="primary" loading={isLoading}>Save</Button>
 */
export const LoadingButton = React.forwardRef<any, any>((props, ref) => {
  console.warn(
    'LoadingButton is deprecated. Use Button with loading prop instead.'
  );

  // Import Button to avoid circular dependency
  const { Button } = require('./Button');

  return <Button ref={ref} {...props} />;
});

LoadingButton.displayName = 'LoadingButton (Deprecated)';

// ============================================================================
// EXPORTS
// ============================================================================

export default ButtonGroup;
