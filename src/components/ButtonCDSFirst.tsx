/**
 * CDS Button Components (CDS-First Architecture)
 * Button components with CDS API - MUI is an implementation detail
 *
 * Developer uses: <CDSButton variant="primary" />
 * NOT: <CDSButton variant="contained" color="primary" />
 */

import React from 'react';
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Fab as MuiFab,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Button Variants (Design Language)
 * These are the ONLY variants developers should use
 */
export type CDSButtonVariant =
  | 'primary'    // Solid, high emphasis - main CTA
  | 'secondary'  // Outlined, medium emphasis
  | 'tertiary'   // Text only, low emphasis
  | 'danger'     // Destructive actions (delete, remove)
  | 'success'    // Positive actions (confirm, approve)
  | 'ghost'      // Minimal styling, subtle
  | 'link';      // Link appearance

/**
 * CDS Button Sizes
 */
export type CDSButtonSize = 'small' | 'medium' | 'large';

/**
 * CDS Button Props (CDS API - NOT MUI API)
 */
export interface CDSButtonProps {
  /**
   * CDS button variant - defines visual style and emphasis
   * @default 'primary'
   */
  variant?: CDSButtonVariant;

  /**
   * Button size (responsive across breakpoints)
   * @default 'medium'
   */
  size?: CDSButtonSize;

  /**
   * Button takes full width of container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state - shows spinner
   * @default false
   */
  loading?: boolean;

  /**
   * Icon on left side (use CDS Outlined icons)
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon on right side (use CDS Outlined icons)
   */
  rightIcon?: React.ReactNode;

  /**
   * Button content
   */
  children?: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Form ID for submit buttons
   */
  form?: string;

  /**
   * Link href (makes button behave as link)
   */
  href?: string;

  /**
   * Link target
   */
  target?: string;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * ID of element describing button
   */
  ariaDescribedBy?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch for advanced styling)
   */
  sx?: any;

  /**
   * Tab index
   */
  tabIndex?: number;

  /**
   * Component ID
   */
  id?: string;
}

// ============================================================================
// INTERNAL UTILITIES (Hidden from developers)
// ============================================================================

/**
 * Maps CDS variant to MUI props
 * THIS IS INTERNAL - developers never see this
 */
const getMuiPropsFromCDSVariant = (variant: CDSButtonVariant) => {
  switch (variant) {
    case 'primary':
      return { variant: 'contained' as const, color: 'primary' as const };

    case 'secondary':
      return { variant: 'outlined' as const, color: 'primary' as const };

    case 'tertiary':
      return { variant: 'text' as const, color: 'primary' as const };

    case 'danger':
      return { variant: 'contained' as const, color: 'error' as const };

    case 'success':
      return { variant: 'contained' as const, color: 'success' as const };

    case 'ghost':
      return { variant: 'text' as const, color: 'inherit' as const };

    case 'link':
      return {
        variant: 'text' as const,
        color: 'primary' as const,
        underline: true
      };

    default:
      return { variant: 'contained' as const, color: 'primary' as const };
  }
};

// ============================================================================
// STYLED COMPONENTS (CDS Styling)
// ============================================================================

/**
 * Base MUI Button with CDS styling
 * This wraps MUI Button but applies CDS design tokens
 */
const StyledMuiButton = styled(MuiButton)(({ theme }) => ({
  // CDS Design Tokens
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,

  // Responsive sizing (mobile-first)
  padding: theme.spacing(1.5, 3), // 12px 24px mobile
  minHeight: 38,
  fontSize: '0.8125rem', // 13px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 4), // 12px 32px tablet+
    minHeight: 40,
    fontSize: '0.875rem', // 14px tablet+
  },

  // CDS Transitions
  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'border-color', 'transform'],
    {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }
  ),

  // Small size variant
  '&.MuiButton-sizeSmall': {
    minHeight: 30,
    padding: theme.spacing(1, 2),
    fontSize: '0.75rem',

    [theme.breakpoints.up('sm')]: {
      minHeight: 32,
      fontSize: '0.8125rem',
    },
  },

  // Large size variant
  '&.MuiButton-sizeLarge': {
    minHeight: 44,
    padding: theme.spacing(1.5, 4),
    fontSize: '0.9375rem',

    [theme.breakpoints.up('sm')]: {
      minHeight: 48,
      padding: theme.spacing(2, 5),
      fontSize: '1rem',
    },
  },

  // CDS-specific variant styles
  '&[data-cds-variant="link"]': {
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  },

  '&[data-cds-variant="ghost"]': {
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.text.primary,
    },
  },

  // WCAG Accessibility
  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 2,
  },

  // Loading state
  '&[data-cds-loading="true"]': {
    pointerEvents: 'none',
    opacity: 0.7,
  },
}));

// ============================================================================
// CDS BUTTON COMPONENT
// ============================================================================

/**
 * CDS Button Component
 *
 * Use CDS variants, not MUI variants
 *
 * @example
 * // CDS Way (CORRECT)
 * <CDSButton variant="primary">Save</CDSButton>
 * <CDSButton variant="danger">Delete</CDSButton>
 * <CDSButton variant="secondary">Cancel</CDSButton>
 *
 * // With icons (CDS props)
 * <CDSButton variant="primary" leftIcon={<SaveOutlinedIcon />}>
 *   Save
 * </CDSButton>
 *
 * // Loading state
 * <CDSButton variant="primary" loading>
 *   Saving...
 * </CDSButton>
 */
export const CDSButton = React.forwardRef<HTMLButtonElement, CDSButtonProps>(
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
      onClick,
      type = 'button',
      form,
      href,
      target,
      ariaLabel,
      ariaDescribedBy,
      className,
      sx,
      tabIndex,
      id,
    },
    ref
  ) => {
    // Map CDS variant to MUI props (internal)
    const muiProps = getMuiPropsFromCDSVariant(variant);

    // Handle loading state
    const startIcon = loading ? <CircularProgress size={18} color="inherit" /> : leftIcon;

    return (
      <StyledMuiButton
        ref={ref}
        // MUI props (mapped from CDS variant)
        variant={muiProps.variant}
        color={muiProps.color}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled || loading}
        // Icon props (CDS naming)
        startIcon={startIcon}
        endIcon={rightIcon}
        // Event handlers
        onClick={onClick}
        // Button/form props
        type={href ? undefined : type}
        form={form}
        href={href}
        target={target}
        // Accessibility
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={tabIndex}
        // Data attributes for CDS-specific styling
        data-cds-variant={variant}
        data-cds-loading={loading}
        // Style props
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiButton>
    );
  }
);

CDSButton.displayName = 'CDSButton';

// ============================================================================
// CDS ICON BUTTON
// ============================================================================

export interface CDSIconButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ariaLabel: string; // Required for accessibility
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'inherit';
  className?: string;
  sx?: any;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  id?: string;
}

/**
 * CDS Icon Button
 * Icon-only button with proper WCAG touch targets
 *
 * @example
 * <CDSIconButton ariaLabel="delete">
 *   <DeleteOutlineIcon />
 * </CDSIconButton>
 */
export const CDSIconButton = styled(
  React.forwardRef<HTMLButtonElement, CDSIconButtonProps>(
    ({ ariaLabel, ...props }, ref) => (
      <MuiIconButton ref={ref} aria-label={ariaLabel} {...props} />
    )
  )
)(({ theme }) => ({
  // WCAG touch target minimum
  minWidth: 48,
  minHeight: 48,
  padding: 12,

  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.shortest,
  }),

  '&:hover': {
    transform: 'scale(1.05)',
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

CDSIconButton.displayName = 'CDSIconButton';

// ============================================================================
// CDS FAB (Floating Action Button)
// ============================================================================

export interface CDSFABProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ariaLabel: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'inherit';
  className?: string;
  sx?: any;
  position?: { bottom?: number; right?: number; left?: number; top?: number };
}

/**
 * CDS Floating Action Button
 * Prominent circular button for primary actions
 *
 * @example
 * <CDSFAB ariaLabel="add" color="primary">
 *   <AddOutlinedIcon />
 * </CDSFAB>
 */
export const CDSFAB = styled(
  React.forwardRef<HTMLButtonElement, CDSFABProps>(
    ({ ariaLabel, position, sx, ...props }, ref) => (
      <MuiFab
        ref={ref}
        aria-label={ariaLabel}
        sx={{
          position: position ? 'fixed' : undefined,
          ...position,
          ...sx,
        }}
        {...props}
      />
    )
  )
)(({ theme }) => ({
  minWidth: 56,
  minHeight: 56,

  boxShadow: theme.shadows[6],

  '&:hover': {
    boxShadow: theme.shadows[8],
  },

  '&:active': {
    boxShadow: theme.shadows[12],
  },

  '&.MuiFab-sizeSmall': {
    minWidth: 40,
    minHeight: 40,
  },

  '&.MuiFab-sizeMedium': {
    minWidth: 56,
    minHeight: 56,
  },

  '&.MuiFab-sizeLarge': {
    minWidth: 72,
    minHeight: 72,
  },

  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 2,
  },

  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
}));

CDSFAB.displayName = 'CDSFAB';

// ============================================================================
// EXPORTS
// ============================================================================

export default CDSButton;
