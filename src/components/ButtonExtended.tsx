/**
 * CDS Extended Button Components
 * Additional button components with CDS tokens applied
 */

import React from 'react';
import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';
import { LoadingButton as MuiLoadingButton, LoadingButtonProps as MuiLoadingButtonProps } from '@mui/lab';
import { styled } from '@mui/material/styles';

/**
 * CDS Button Group
 * Group of related buttons
 *
 * @example
 * <CDSButtonGroup variant="contained">
 *   <CDSButton>One</CDSButton>
 *   <CDSButton>Two</CDSButton>
 *   <CDSButton>Three</CDSButton>
 * </CDSButtonGroup>
 */
export const CDSButtonGroup = styled(MuiButtonGroup)(({ theme }) => ({
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
export const CDSToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2),

    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

/**
 * CDS Toggle Button
 * Individual toggle button
 *
 * @example
 * <CDSToggleButton value="bold">
 *   <FormatBoldIcon />
 * </CDSToggleButton>
 */
export const CDSToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1, 2),
  minHeight: 40,

  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

/**
 * CDS Loading Button
 * Button with loading state and spinner
 * From @mui/lab package
 *
 * @example
 * <CDSLoadingButton
 *   loading={isLoading}
 *   loadingPosition="start"
 *   startIcon={<SaveIcon />}
 *   variant="contained"
 * >
 *   Save
 * </CDSLoadingButton>
 */
export const CDSLoadingButton = styled(MuiLoadingButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1.5, 4),
  minHeight: 40,

  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'border-color'],
    {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }
  ),

  '&.MuiLoadingButton-loading': {
    opacity: 0.7,
  },

  '& .MuiLoadingButton-loadingIndicator': {
    color: 'inherit',
  },

  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.light}`,
    outlineOffset: 2,
  },
}));

// Type exports
export type CDSButtonGroupProps = MuiButtonGroupProps;
export type CDSToggleButtonGroupProps = MuiToggleButtonGroupProps;
export type CDSToggleButtonProps = MuiToggleButtonProps;
export type CDSLoadingButtonProps = MuiLoadingButtonProps;
