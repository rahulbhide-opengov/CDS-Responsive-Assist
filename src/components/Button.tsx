/**
 * CDS Button Components
 * Pre-styled button components with CDS tokens applied
 */

import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  Fab as MuiFab,
  FabProps as MuiFabProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Button
 * Standard button with CDS styling pre-applied
 *
 * @example
 * <CDSButton variant="contained" color="primary">
 *   Click Me
 * </CDSButton>
 */
export const CDSButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // 4px
  textTransform: 'none', // No uppercase
  fontWeight: theme.typography.fontWeightMedium,

  // Responsive padding and sizing
  padding: theme.spacing(1.5, 3), // 12px 12px mobile
  minHeight: 38, // 38px mobile
  fontSize: '0.8125rem', // 13px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 4), // 12px 32px tablet+
    minHeight: 40, // 40px tablet+
    fontSize: '0.875rem', // 14px tablet+
  },

  // Transitions
  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'border-color'],
    {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }
  ),

  // Ensure touch target minimum - responsive sizes
  '&.MuiButton-sizeSmall': {
    minHeight: 30, // 30px mobile
    padding: theme.spacing(1, 2), // 8px 16px
    fontSize: '0.75rem', // 12px mobile

    [theme.breakpoints.up('sm')]: {
      minHeight: 32, // 32px tablet+
      fontSize: '0.8125rem', // 13px tablet+
    },
  },

  '&.MuiButton-sizeLarge': {
    minHeight: 44, // 44px mobile
    padding: theme.spacing(1.5, 4), // 12px 32px
    fontSize: '0.9375rem', // 15px mobile

    [theme.breakpoints.up('sm')]: {
      minHeight: 48, // 48px tablet+
      padding: theme.spacing(2, 5), // 16px 40px
      fontSize: '1rem', // 16px tablet+
    },
  },

  // Accessible focus indicator
  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 2,
  },
}));

/**
 * CDS Icon Button
 * Icon-only button with proper touch target sizing
 *
 * @example
 * <CDSIconButton aria-label="delete">
 *   <DeleteIcon />
 * </CDSIconButton>
 */
export const CDSIconButton = styled(MuiIconButton)(({ theme }) => ({
  // Ensure WCAG touch target minimum
  minWidth: 48,
  minHeight: 48,
  padding: 12,

  // Transitions
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),

  // Hover effect
  '&:hover': {
    transform: 'scale(1.05)',
  },

  // Focus indicator
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

/**
 * CDS FAB (Floating Action Button)
 * Prominent circular button for primary actions
 *
 * @example
 * <CDSFAB color="primary" aria-label="add">
 *   <AddIcon />
 * </CDSFAB>
 */
export const CDSFAB = styled(MuiFab)(({ theme }) => ({
  minWidth: 56,
  minHeight: 56,
  borderRadius: '50%',

  // Elevation
  boxShadow: theme.shadows[6],

  '&:hover': {
    boxShadow: theme.shadows[8],
  },

  '&:active': {
    boxShadow: theme.shadows[12],
  },

  // Size variants
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

  // Focus indicator
  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 2,
  },

  // Transition
  transition: theme.transitions.create(
    ['box-shadow', 'transform'],
    {
      duration: theme.transitions.duration.short,
    }
  ),
}));

// Type exports for TypeScript
export type CDSButtonProps = MuiButtonProps;
export type CDSIconButtonProps = MuiIconButtonProps;
export type CDSFABProps = MuiFabProps;
