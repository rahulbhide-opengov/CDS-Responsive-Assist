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
  padding: theme.spacing(1.5, 2),

  '& .MuiAlert-icon': {
    padding: 0,
    marginRight: theme.spacing(1.5),
  },

  '& .MuiAlert-message': {
    padding: theme.spacing(1, 0),
  },

  '& .MuiAlert-action': {
    padding: 0,
    marginRight: 0,
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
    padding: theme.spacing(2),
    minWidth: 320,
  },
}));

/**
 * CDS DialogTitle
 * Dialog title with CDS typography
 */
export const CDSDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  fontWeight: theme.typography.fontWeightBold,
}));

/**
 * CDS DialogContent
 * Dialog content area with CDS spacing
 */
export const CDSDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  padding: theme.spacing(2, 3),
}));

/**
 * CDS DialogActions
 * Dialog action buttons with CDS spacing
 */
export const CDSDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  gap: theme.spacing(1),
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
