/**
 * CDS Feedback Components (CDS-First Architecture)
 * Feedback components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - severity: 'success' | 'info' | 'warning' | 'error' (semantic)
 * - size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen' (for Dialog)
 * - position: object with vertical/horizontal
 * - Intuitive prop names aligned with CDS design system
 */

import React from 'react';
import {
  Alert as MuiAlert,
  Snackbar as MuiSnackbar,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  CircularProgress as MuiCircularProgress,
  LinearProgress as MuiLinearProgress,
  Skeleton as MuiSkeleton,
  Backdrop as MuiBackdrop,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Alert Severity (Design Language)
 */
export type AlertSeverity = 'success' | 'info' | 'warning' | 'error';

/**
 * CDS Dialog Size (Design Language)
 */
export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

/**
 * CDS Snackbar Position (Design Language)
 */
export interface SnackbarPosition {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

/**
 * CDS Alert Props (CDS API)
 */
export interface AlertProps {
  /**
   * Alert severity (semantic)
   * @default 'info'
   */
  severity?: AlertSeverity;

  /**
   * Alert message content
   */
  children?: React.ReactNode;

  /**
   * Optional action button/link
   */
  action?: React.ReactNode;

  /**
   * Close handler (shows close button if provided)
   */
  onClose?: () => void;

  /**
   * Alert icon (overrides default)
   */
  icon?: React.ReactNode;

  /**
   * Hide default icon
   * @default false
   */
  hideIcon?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Alert role for accessibility
   * @default 'alert'
   */
  role?: string;
}

/**
 * CDS Snackbar Props (CDS API)
 */
export interface SnackbarProps {
  /**
   * Open/visible state
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Auto hide duration in milliseconds
   * @default 6000
   */
  autoHideDuration?: number;

  /**
   * Snackbar message content
   */
  message?: React.ReactNode;

  /**
   * Children (for custom content like Alert)
   */
  children?: React.ReactNode;

  /**
   * Optional action button
   */
  action?: React.ReactNode;

  /**
   * Position on screen
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  position?: SnackbarPosition;

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
 * CDS Dialog Props (CDS API)
 */
export interface DialogProps {
  /**
   * Open/visible state
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Dialog size
   * @default 'md'
   */
  size?: DialogSize;

  /**
   * Dialog content
   */
  children?: React.ReactNode;

  /**
   * Full screen on mobile
   * @default false
   */
  fullScreenMobile?: boolean;

  /**
   * Disable escape key to close
   * @default false
   */
  disableEscapeKey?: boolean;

  /**
   * Disable backdrop click to close
   * @default false
   */
  disableBackdropClick?: boolean;

  /**
   * Maximum width
   * @default based on size prop
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Accessible label
   */
  ariaLabelledBy?: string;

  /**
   * Accessible description
   */
  ariaDescribedBy?: string;
}

/**
 * CDS DialogTitle Props (CDS API)
 */
export interface DialogTitleProps {
  /**
   * Title content
   */
  children?: React.ReactNode;

  /**
   * Component ID (for aria-labelledby)
   */
  id?: string;

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
 * CDS DialogContent Props (CDS API)
 */
export interface DialogContentProps {
  /**
   * Content
   */
  children?: React.ReactNode;

  /**
   * Component ID (for aria-describedby)
   */
  id?: string;

  /**
   * Dividers above/below content
   * @default false
   */
  dividers?: boolean;

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
 * CDS DialogActions Props (CDS API)
 */
export interface DialogActionsProps {
  /**
   * Action buttons
   */
  children?: React.ReactNode;

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
 * CDS CircularProgress Props (CDS API)
 */
export interface CircularProgressProps {
  /**
   * Progress size
   * @default 'medium'
   */
  size?: number | 'small' | 'medium' | 'large';

  /**
   * Progress variant
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';

  /**
   * Progress value (0-100, for determinate)
   */
  value?: number;

  /**
   * Progress color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';

  /**
   * Thickness of the circle
   * @default 3.6
   */
  thickness?: number;

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
 * CDS LinearProgress Props (CDS API)
 */
export interface LinearProgressProps {
  /**
   * Progress variant
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';

  /**
   * Progress value (0-100, for determinate)
   */
  value?: number;

  /**
   * Buffer value (for buffer variant)
   */
  valueBuffer?: number;

  /**
   * Progress color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';

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
 * CDS Skeleton Props (CDS API)
 */
export interface SkeletonProps {
  /**
   * Skeleton variant
   * @default 'text'
   */
  variant?: 'text' | 'rectangular' | 'circular';

  /**
   * Width (CSS value)
   */
  width?: number | string;

  /**
   * Height (CSS value)
   */
  height?: number | string;

  /**
   * Animation type
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Children (for inline skeleton)
   */
  children?: React.ReactNode;
}

/**
 * CDS Backdrop Props (CDS API)
 */
export interface BackdropProps {
  /**
   * Open/visible state
   */
  open: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Children content
   */
  children?: React.ReactNode;

  /**
   * Invisible (transparent)
   * @default false
   */
  invisible?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

// ============================================================================
// INTERNAL UTILITIES (Hidden from developers)
// ============================================================================

/**
 * Maps CDS Dialog size to maxWidth and custom styling
 */
const getDialogSizeConfig = (size: DialogSize) => {
  switch (size) {
    case 'xs':
      return { maxWidth: 'xs' as const, customWidth: 280 };
    case 'sm':
      return { maxWidth: 'sm' as const, customWidth: 400 };
    case 'md':
      return { maxWidth: 'md' as const, customWidth: 600 };
    case 'lg':
      return { maxWidth: 'lg' as const, customWidth: 800 };
    case 'xl':
      return { maxWidth: 'xl' as const, customWidth: 1200 };
    case 'fullscreen':
      return { maxWidth: false as const, customWidth: '100%' };
    default:
      return { maxWidth: 'md' as const, customWidth: 600 };
  }
};

/**
 * Maps CDS CircularProgress size to pixel value
 */
const getCircularProgressSize = (size: number | 'small' | 'medium' | 'large'): number => {
  if (typeof size === 'number') return size;
  switch (size) {
    case 'small':
      return 20;
    case 'medium':
      return 40;
    case 'large':
      return 60;
    default:
      return 40;
  }
};

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * Styled Alert with CDS tokens
 */
const StyledMuiAlert = styled(MuiAlert)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  // Responsive padding
  padding: theme.spacing(1, 1.5), // 4px 6px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2), // 12px 8px tablet+
  },

  '& .MuiAlert-icon': {
    padding: 0,
    marginRight: theme.spacing(1), // 4px mobile
    fontSize: theme.typography.h6.fontSize, // Use theme token

    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1.5), // 6px tablet+
      fontSize: theme.typography.h5.fontSize, // Use theme token
    },
  },

  '& .MuiAlert-message': {
    padding: theme.spacing(1, 0),
    fontSize: theme.typography.button.fontSize, // Use theme token

    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.body2.fontSize, // Use theme token
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
 * Styled Snackbar with CDS tokens
 */
const StyledMuiSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 2),
    boxShadow: theme.shadows[6],
  },
}));

/**
 * Styled Dialog with CDS tokens
 */
const StyledMuiDialog = styled(MuiDialog)<{ customWidth?: number | string }>(({ theme, customWidth }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,

    // Responsive padding
    padding: theme.spacing(1.5), // 12px mobile
    minWidth: customWidth === '100%' ? '100%' : theme.spacing(35), // 280px mobile or fullscreen
    margin: theme.spacing(2), // 16px margin mobile

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2), // 16px tablet
      minWidth: customWidth === '100%' ? '100%' : typeof customWidth === 'number' ? Math.min(customWidth, theme.spacing(40)) : theme.spacing(40),
      margin: theme.spacing(4), // 32px margin tablet
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3), // 24px desktop
      minWidth: customWidth === '100%' ? '100%' : customWidth,
      margin: theme.spacing(6), // 48px margin desktop
    },
  },
}));

/**
 * Styled DialogTitle with CDS tokens
 */
const StyledMuiDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(1.5, 2), // 12px 16px mobile
  fontWeight: theme.typography.fontWeightBold,

  // Responsive font size
  fontSize: theme.typography.h6.fontSize, // Use theme token

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3), // 16px 24px tablet
    fontSize: theme.typography.h6.fontSize, // Use theme token
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5, 3.5), // 20px 28px desktop
    fontSize: theme.typography.h5.fontSize, // Use theme token
  },
}));

/**
 * Styled DialogContent with CDS tokens
 */
const StyledMuiDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(2), // 16px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3), // 16px 24px tablet
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 3.5), // 24px 28px desktop
  },

  // Responsive font size
  fontSize: theme.typography.body1.fontSize, // Use theme token

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.body1.fontSize, // Use theme token
  },
}));

/**
 * Styled DialogActions with CDS tokens
 */
const StyledMuiDialogActions = styled(MuiDialogActions)(({ theme }) => ({
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
 * Styled CircularProgress with CDS tokens
 */
const StyledMuiCircularProgress = styled(MuiCircularProgress)(({ theme }) => ({
  // Default size variants handled by MUI
}));

/**
 * Styled LinearProgress with CDS tokens
 */
const StyledMuiLinearProgress = styled(MuiLinearProgress)(({ theme }) => ({
  height: theme.spacing(0.5), // 4px
  borderRadius: theme.shape.borderRadius / 2,

  '& .MuiLinearProgress-bar': {
    borderRadius: theme.shape.borderRadius / 2,
  },
}));

/**
 * Styled Skeleton with CDS tokens
 */
const StyledMuiSkeleton = styled(MuiSkeleton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius / 2,

  '&.MuiSkeleton-rectangular': {
    borderRadius: theme.shape.borderRadius,
  },

  '&.MuiSkeleton-circular': {
    borderRadius: '50%',
  },
}));

/**
 * Styled Backdrop with CDS tokens
 */
const StyledMuiBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  backgroundColor: theme.palette.backdrop.standard,
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.standard,
  }),
}));

// ============================================================================
// CDS FEEDBACK COMPONENTS
// ============================================================================

/**
 * CDS Alert Component
 *
 * Alert message with semantic severity levels
 *
 * @example
 * // Success alert
 * <Alert severity="success">
 *   Operation completed successfully
 * </Alert>
 *
 * @example
 * // Error alert with close button
 * <Alert severity="error" onClose={handleClose}>
 *   An error occurred
 * </Alert>
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'info',
      children,
      action,
      onClose,
      icon,
      hideIcon = false,
      className,
      sx,
      role = 'alert',
    },
    ref
  ) => {
    return (
      <StyledMuiAlert
        ref={ref}
        severity={severity}
        action={action}
        onClose={onClose}
        icon={icon}
        iconMapping={hideIcon ? { success: false, info: false, warning: false, error: false } : undefined}
        className={className}
        sx={sx}
        role={role}
      >
        {children}
      </StyledMuiAlert>
    );
  }
);

Alert.displayName = 'Alert';

/**
 * CDS Snackbar Component
 *
 * Toast notification with auto-hide
 *
 * @example
 * <Snackbar
 *   open={open}
 *   onClose={handleClose}
 *   message="Item saved successfully"
 *   autoHideDuration={3000}
 * />
 *
 * @example
 * // With custom Alert content
 * <Snackbar open={open} onClose={handleClose}>
 *   <Alert severity="success" onClose={handleClose}>
 *     Operation successful
 *   </Alert>
 * </Snackbar>
 */
export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      open,
      onClose,
      autoHideDuration = 6000,
      message,
      children,
      action,
      position = { vertical: 'bottom', horizontal: 'left' },
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiSnackbar
        ref={ref}
        open={open}
        onClose={onClose}
        autoHideDuration={autoHideDuration}
        message={message}
        action={action}
        anchorOrigin={position}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiSnackbar>
    );
  }
);

Snackbar.displayName = 'Snackbar';

/**
 * CDS Dialog Component
 *
 * Modal dialog with size variants
 *
 * @example
 * // Medium dialog (default)
 * <Dialog open={open} onClose={handleClose}>
 *   <DialogTitle>Confirm Action</DialogTitle>
 *   <DialogContent>Are you sure?</DialogContent>
 *   <DialogActions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </DialogActions>
 * </Dialog>
 *
 * @example
 * // Large dialog
 * <Dialog open={open} onClose={handleClose} size="lg">
 *   <DialogTitle>Settings</DialogTitle>
 *   <DialogContent>...</DialogContent>
 * </Dialog>
 *
 * @example
 * // Fullscreen on mobile
 * <Dialog open={open} onClose={handleClose} fullScreenMobile>
 *   <DialogTitle>Mobile Form</DialogTitle>
 *   <DialogContent>...</DialogContent>
 * </Dialog>
 */
export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      size = 'md',
      children,
      fullScreenMobile = false,
      disableEscapeKey = false,
      disableBackdropClick = false,
      maxWidth,
      className,
      sx,
      ariaLabelledBy,
      ariaDescribedBy,
    },
    ref
  ) => {
    const sizeConfig = getDialogSizeConfig(size);

    return (
      <StyledMuiDialog
        ref={ref}
        open={open}
        onClose={(event, reason) => {
          if (disableBackdropClick && reason === 'backdropClick') return;
          if (disableEscapeKey && reason === 'escapeKeyDown') return;
          onClose?.();
        }}
        maxWidth={maxWidth ?? sizeConfig.maxWidth}
        fullWidth={size !== 'fullscreen'}
        fullScreen={size === 'fullscreen' || (fullScreenMobile && window.innerWidth < 600)}
        customWidth={sizeConfig.customWidth}
        className={className}
        sx={sx}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {children}
      </StyledMuiDialog>
    );
  }
);

Dialog.displayName = 'Dialog';

/**
 * CDS DialogTitle Component
 *
 * @example
 * <DialogTitle id="dialog-title">Confirm Action</DialogTitle>
 */
export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ children, id, className, sx }, ref) => {
    return (
      <StyledMuiDialogTitle ref={ref} id={id} className={className} sx={sx}>
        {children}
      </StyledMuiDialogTitle>
    );
  }
);

DialogTitle.displayName = 'DialogTitle';

/**
 * CDS DialogContent Component
 *
 * @example
 * <DialogContent>
 *   Are you sure you want to proceed?
 * </DialogContent>
 */
export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, id, dividers = false, className, sx }, ref) => {
    return (
      <StyledMuiDialogContent ref={ref} id={id} dividers={dividers} className={className} sx={sx}>
        {children}
      </StyledMuiDialogContent>
    );
  }
);

DialogContent.displayName = 'DialogContent';

/**
 * CDS DialogActions Component
 *
 * @example
 * <DialogActions>
 *   <Button onClick={handleClose}>Cancel</Button>
 *   <Button variant="primary" onClick={handleConfirm}>
 *     Confirm
 *   </Button>
 * </DialogActions>
 */
export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ children, className, sx }, ref) => {
    return (
      <StyledMuiDialogActions ref={ref} className={className} sx={sx}>
        {children}
      </StyledMuiDialogActions>
    );
  }
);

DialogActions.displayName = 'DialogActions';

/**
 * CDS CircularProgress Component
 *
 * Circular loading spinner
 *
 * @example
 * // Indeterminate spinner
 * <CircularProgress />
 *
 * @example
 * // Determinate with value
 * <CircularProgress variant="determinate" value={75} />
 *
 * @example
 * // Custom size
 * <CircularProgress size="large" />
 */
export const CircularProgress = React.forwardRef<HTMLSpanElement, CircularProgressProps>(
  (
    {
      size = 'medium',
      variant = 'indeterminate',
      value,
      color = 'primary',
      thickness = 3.6,
      className,
      sx,
    },
    ref
  ) => {
    const sizeValue = getCircularProgressSize(size);

    return (
      <StyledMuiCircularProgress
        ref={ref}
        size={sizeValue}
        variant={variant}
        value={value}
        color={color}
        thickness={thickness}
        className={className}
        sx={sx}
      />
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

/**
 * CDS LinearProgress Component
 *
 * Linear progress bar
 *
 * @example
 * // Indeterminate loading bar
 * <LinearProgress />
 *
 * @example
 * // Determinate with value
 * <LinearProgress variant="determinate" value={50} />
 */
export const LinearProgress = React.forwardRef<HTMLSpanElement, LinearProgressProps>(
  (
    {
      variant = 'indeterminate',
      value,
      valueBuffer,
      color = 'primary',
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiLinearProgress
        ref={ref}
        variant={variant}
        value={value}
        valueBuffer={valueBuffer}
        color={color}
        className={className}
        sx={sx}
      />
    );
  }
);

LinearProgress.displayName = 'LinearProgress';

/**
 * CDS Skeleton Component
 *
 * Loading placeholder
 *
 * @example
 * // Text skeleton
 * <Skeleton variant="text" width={200} />
 *
 * @example
 * // Rectangular skeleton
 * <Skeleton variant="rectangular" width={300} height={200} />
 *
 * @example
 * // Circular avatar skeleton
 * <Skeleton variant="circular" width={40} height={40} />
 */
export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      animation = 'pulse',
      className,
      sx,
      children,
    },
    ref
  ) => {
    return (
      <StyledMuiSkeleton
        ref={ref}
        variant={variant}
        width={width}
        height={height}
        animation={animation}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiSkeleton>
    );
  }
);

Skeleton.displayName = 'Skeleton';

/**
 * CDS Backdrop Component
 *
 * Full-screen overlay
 *
 * @example
 * <Backdrop open={loading} onClick={handleClose}>
 *   <CircularProgress color="inherit" />
 * </Backdrop>
 */
export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (
    {
      open,
      onClick,
      children,
      invisible = false,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiBackdrop
        ref={ref}
        open={open}
        onClick={onClick}
        invisible={invisible}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiBackdrop>
    );
  }
);

Backdrop.displayName = 'Backdrop';
