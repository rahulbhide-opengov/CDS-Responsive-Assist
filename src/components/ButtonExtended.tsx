/**
 * CDS Extended Button Components (CDS-First Architecture)
 * Additional button components with CDS API
 *
 * Note: CDSLoadingButton is deprecated - use CDSButton with loading prop instead
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

export interface CDSButtonGroupProps {
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
 * <CDSButtonGroup>
 *   <CDSButton variant="secondary">One</CDSButton>
 *   <CDSButton variant="secondary">Two</CDSButton>
 *   <CDSButton variant="secondary">Three</CDSButton>
 * </CDSButtonGroup>
 */
export const CDSButtonGroup = styled(
  React.forwardRef<HTMLDivElement, CDSButtonGroupProps>((props, ref) => (
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

CDSButtonGroup.displayName = 'CDSButtonGroup';

// ============================================================================
// CDS TOGGLE BUTTON GROUP
// ============================================================================

export interface CDSToggleButtonGroupProps {
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
 * <CDSToggleButtonGroup value={value} onChange={handleChange}>
 *   <CDSToggleButton value="left">Left</CDSToggleButton>
 *   <CDSToggleButton value="center">Center</CDSToggleButton>
 *   <CDSToggleButton value="right">Right</CDSToggleButton>
 * </CDSToggleButtonGroup>
 */
export const CDSToggleButtonGroup = styled(
  React.forwardRef<HTMLDivElement, CDSToggleButtonGroupProps>(
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

CDSToggleButtonGroup.displayName = 'CDSToggleButtonGroup';

// ============================================================================
// CDS TOGGLE BUTTON
// ============================================================================

export interface CDSToggleButtonProps {
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
 * <CDSToggleButton value="bold" ariaLabel="bold">
 *   <FormatBoldIcon />
 * </CDSToggleButton>
 */
export const CDSToggleButton = styled(
  React.forwardRef<HTMLButtonElement, CDSToggleButtonProps>(
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

CDSToggleButton.displayName = 'CDSToggleButton';

// ============================================================================
// DEPRECATED: CDSLoadingButton
// ============================================================================

/**
 * @deprecated Use CDSButton with loading prop instead
 *
 * @example
 * // OLD (deprecated)
 * <CDSLoadingButton loading={isLoading}>Save</CDSLoadingButton>
 *
 * // NEW (use this)
 * <CDSButton variant="primary" loading={isLoading}>Save</CDSButton>
 */
export const CDSLoadingButton = React.forwardRef<any, any>((props, ref) => {
  console.warn(
    'CDSLoadingButton is deprecated. Use CDSButton with loading prop instead.'
  );

  // Import CDSButton to avoid circular dependency
  const { CDSButton } = require('./Button');

  return <CDSButton ref={ref} {...props} />;
});

CDSLoadingButton.displayName = 'CDSLoadingButton (Deprecated)';

// ============================================================================
// EXPORTS
// ============================================================================

export default CDSButtonGroup;
