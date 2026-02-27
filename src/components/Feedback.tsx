/**
 * CDS Feedback Components
 * Components for user feedback with CDS styling
 */

import React from 'react';
import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Alert
 * Alert message with CDS styling
 */
export const CDSAlert = styled(MuiAlert)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  // Responsive padding
  padding: theme.spacing(1, 1.5), // 4px 6px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2), // 12px 8px tablet+
  },

  '& .MuiAlert-icon': {
    padding: 0,
    marginRight: theme.spacing(1), // 4px mobile
    fontSize: '1.25rem', // 20px mobile

    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1.5), // 6px tablet+
      fontSize: '1.5rem', // 24px tablet+
    },
  },

  '& .MuiAlert-message': {
    padding: theme.spacing(1, 0),
    fontSize: '0.8125rem', // 13px mobile

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem', // 14px tablet+
    },
  },

  '& .MuiAlert-action': {
    padding: 0,
    marginRight: 0,
    marginLeft: theme.spacing(1), // 4px mobile

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2), // 8px tablet+
    },
  },
}));

/**
 * CDS Snackbar
 * Toast notification with CDS styling
 */
export const CDSSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 2),
    boxShadow: theme.shadows[6],
  },
}));

/**
 * CDS Dialog
 * Modal dialog with CDS styling
 */
export const CDSDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,

    // Responsive padding
    padding: theme.spacing(1.5), // 6px mobile
    minWidth: 280, // 280px mobile
    margin: theme.spacing(2), // 8px margin mobile

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2), // 8px tablet
      minWidth: 320, // 320px tablet
      margin: theme.spacing(4), // 16px margin tablet
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3), // 12px desktop
      minWidth: 400, // 400px desktop
      margin: theme.spacing(6), // 24px margin desktop
    },
  },
}));

/**
 * CDS DialogTitle
 * Dialog title with CDS typography
 */
export const CDSDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(1.5, 2), // 12px 8px mobile
  fontWeight: theme.typography.fontWeightBold,

  // Responsive font size
  fontSize: '1.125rem', // 18px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3), // 16px 12px tablet
    fontSize: '1.25rem', // 20px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5, 3.5), // 20px 14px desktop
    fontSize: '1.5rem', // 24px desktop
  },
}));

/**
 * CDS DialogContent
 * Dialog content area with CDS spacing
 */
export const CDSDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(2), // 8px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3), // 8px 12px tablet
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 3.5), // 12px 14px desktop
  },

  // Responsive font size
  fontSize: '0.9375rem', // 15px mobile

  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem', // 16px tablet+
  },
}));

/**
 * CDS DialogActions
 * Dialog action buttons with CDS spacing
 */
export const CDSDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  // Responsive padding and gap
  padding: theme.spacing(1.5, 2), // 12px 8px mobile
  gap: theme.spacing(1), // 4px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3), // 16px 12px tablet
    gap: theme.spacing(1.5), // 6px tablet
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5, 3.5), // 20px 14px desktop
    gap: theme.spacing(2), // 8px desktop
  },
}));

/**
 * CDS CircularProgress
 * Circular loading spinner with CDS sizing
 */
export const CDSCircularProgress = styled(MuiCircularProgress)(({ theme }) => ({
  // Default size variants handled by MUI
}));

/**
 * CDS LinearProgress
 * Linear progress bar with CDS styling
 */
export const CDSLinearProgress = styled(MuiLinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: theme.shape.borderRadius / 2,

  '& .MuiLinearProgress-bar': {
    borderRadius: theme.shape.borderRadius / 2,
  },
}));

/**
 * CDS Skeleton
 * Loading placeholder with CDS styling
 */
export const CDSSkeleton = styled(MuiSkeleton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius / 2,

  '&.MuiSkeleton-rectangular': {
    borderRadius: theme.shape.borderRadius,
  },

  '&.MuiSkeleton-circular': {
    borderRadius: '50%',
  },
}));

/**
 * CDS Backdrop
 * Full-screen overlay with CDS styling
 */
export const CDSBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.standard,
  }),
}));

// Type exports
export type CDSAlertProps = MuiAlertProps;
export type CDSSnackbarProps = MuiSnackbarProps;
export type CDSDialogProps = MuiDialogProps;
export type CDSCircularProgressProps = MuiCircularProgressProps;
export type CDSLinearProgressProps = MuiLinearProgressProps;
export type CDSSkeletonProps = MuiSkeletonProps;
export type CDSBackdropProps = MuiBackdropProps;
