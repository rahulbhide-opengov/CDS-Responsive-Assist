/**
 * CDS Utility Components (CDS-First Architecture)
 * Utility components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - Semantic prop names (open, onClose, position, etc.)
 * - Intuitive naming aligned with CDS design system
 */

import React from 'react';
import {
  Popover as MuiPopover,
  Collapse as MuiCollapse,
  Modal as MuiModal,
  ClickAwayListener as MuiClickAwayListener,
  Fade as MuiFade,
  Grow as MuiGrow,
  Slide as MuiSlide,
  Zoom as MuiZoom,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Popover Position
 */
export interface PopoverPosition {
  top?: number;
  left?: number;
}

/**
 * CDS Popover Origin
 */
export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}

/**
 * CDS Popover Props (CDS API)
 */
export interface PopoverProps {
  /**
   * Open/visible state
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Anchor element (element to attach to)
   */
  anchorEl?: Element | null;

  /**
   * Anchor position (alternative to anchorEl)
   */
  anchorPosition?: PopoverPosition;

  /**
   * Anchor origin point
   * @default { vertical: 'top', horizontal: 'left' }
   */
  anchorOrigin?: PopoverOrigin;

  /**
   * Transform origin point
   * @default { vertical: 'top', horizontal: 'left' }
   */
  transformOrigin?: PopoverOrigin;

  /**
   * Popover content
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

  /**
   * Disable auto focus
   * @default false
   */
  disableAutoFocus?: boolean;

  /**
   * Disable restore focus
   * @default false
   */
  disableRestoreFocus?: boolean;
}

/**
 * CDS Collapse Props (CDS API)
 */
export interface CollapseProps {
  /**
   * Expanded state
   */
  in: boolean;

  /**
   * Collapse content
   */
  children?: React.ReactNode;

  /**
   * Timeout duration in ms
   * @default 300
   */
  timeout?: number | { enter?: number; exit?: number };

  /**
   * Unmount on exit
   * @default false
   */
  unmountOnExit?: boolean;

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
 * CDS Modal Props (CDS API)
 */
export interface ModalProps {
  /**
   * Open/visible state
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Modal content
   */
  children?: React.ReactNode;

  /**
   * Hide backdrop
   * @default false
   */
  hideBackdrop?: boolean;

  /**
   * Disable escape key to close
   * @default false
   */
  disableEscapeKey?: boolean;

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
 * CDS ClickAwayListener Props (CDS API)
 */
export interface ClickAwayListenerProps {
  /**
   * Click away handler
   */
  onClickAway: (event: MouseEvent | TouchEvent) => void;

  /**
   * Children (must be a single element)
   */
  children: React.ReactElement;

  /**
   * Mouse event type
   * @default 'onClick'
   */
  mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;

  /**
   * Touch event type
   * @default 'onTouchEnd'
   */
  touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;
}

/**
 * CDS Transition Props (CDS API)
 */
export interface TransitionProps {
  /**
   * Visible state
   */
  in: boolean;

  /**
   * Transition content
   */
  children?: React.ReactElement;

  /**
   * Timeout duration in ms
   */
  timeout?: number | { enter?: number; exit?: number };

  /**
   * Unmount on exit
   * @default false
   */
  unmountOnExit?: boolean;

  /**
   * Appear animation on mount
   * @default true
   */
  appear?: boolean;
}

/**
 * CDS Slide Props (extends TransitionProps)
 */
export interface SlideProps extends TransitionProps {
  /**
   * Slide direction
   * @default 'down'
   */
  direction?: 'left' | 'right' | 'up' | 'down';

  /**
   * Container element
   */
  container?: Element | null;
}

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * Styled Popover with CDS tokens
 */
const StyledMuiPopover = styled(MuiPopover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
}));

/**
 * Styled Collapse with CDS tokens
 */
const StyledMuiCollapse = styled(MuiCollapse)(({ theme }) => ({
  transition: theme.transitions.create(['height', 'opacity'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

/**
 * Styled Modal with CDS tokens
 */
const StyledMuiModal = styled(MuiModal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),

  '& .MuiBackdrop-root': {
    backgroundColor: theme.palette.backdrop.standard,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.standard,
    }),
  },

  // Common modal content styling when used with Box
  '& > *': {
    outline: 'none', // Remove default focus outline (use custom focus styling)
    maxHeight: '90vh',
    maxWidth: '90vw',
    overflowY: 'auto',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[24],
  },
}));

// ============================================================================
// CDS UTILITY COMPONENTS
// ============================================================================

/**
 * CDS Popover Component
 *
 * Positioned floating content
 *
 * @example
 * <Popover
 *   open={open}
 *   onClose={handleClose}
 *   anchorEl={anchorEl}
 *   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
 * >
 *   <Box sx={{ p: 2 }}>Popover content</Box>
 * </Popover>
 */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      open,
      onClose,
      anchorEl,
      anchorPosition,
      anchorOrigin = { vertical: 'top', horizontal: 'left' },
      transformOrigin = { vertical: 'top', horizontal: 'left' },
      children,
      className,
      sx,
      disableAutoFocus = false,
      disableRestoreFocus = false,
    },
    ref
  ) => {
    return (
      <StyledMuiPopover
        ref={ref}
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorPosition={anchorPosition}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        disableAutoFocus={disableAutoFocus}
        disableRestoreFocus={disableRestoreFocus}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiPopover>
    );
  }
);

Popover.displayName = 'Popover';

/**
 * CDS Collapse Component
 *
 * Expand/collapse animation
 *
 * @example
 * <Collapse in={expanded}>
 *   <Typography>Collapsed content</Typography>
 * </Collapse>
 */
export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      in: inProp,
      children,
      timeout = 300,
      unmountOnExit = false,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiCollapse
        ref={ref}
        in={inProp}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiCollapse>
    );
  }
);

Collapse.displayName = 'Collapse';

/**
 * CDS Modal Component
 *
 * Modal overlay
 *
 * @example
 * <Modal open={open} onClose={handleClose}>
 *   <Box sx={{ bgcolor: 'background.paper', p: 4 }}>
 *     Modal content
 *   </Box>
 * </Modal>
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      children,
      hideBackdrop = false,
      disableEscapeKey = false,
      className,
      sx,
      ariaLabelledBy,
      ariaDescribedBy,
    },
    ref
  ) => {
    return (
      <StyledMuiModal
        ref={ref}
        open={open}
        onClose={(event, reason) => {
          if (disableEscapeKey && reason === 'escapeKeyDown') return;
          onClose?.();
        }}
        hideBackdrop={hideBackdrop}
        className={className}
        sx={sx}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {children}
      </StyledMuiModal>
    );
  }
);

Modal.displayName = 'Modal';

/**
 * CDS ClickAwayListener Component
 *
 * Utility to detect clicks outside an element
 *
 * @example
 * <ClickAwayListener onClickAway={handleClickAway}>
 *   <div>Click outside me</div>
 * </ClickAwayListener>
 */
export const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  onClickAway,
  children,
  mouseEvent = 'onClick',
  touchEvent = 'onTouchEnd',
}) => {
  return (
    <MuiClickAwayListener
      onClickAway={onClickAway}
      mouseEvent={mouseEvent}
      touchEvent={touchEvent}
    >
      {children}
    </MuiClickAwayListener>
  );
};

/**
 * CDS Fade Component
 *
 * Fade in/out transition
 *
 * @example
 * <Fade in={visible}>
 *   <Typography>Fading content</Typography>
 * </Fade>
 */
export const Fade: React.FC<TransitionProps> = ({
  in: inProp,
  children,
  timeout,
  unmountOnExit = false,
  appear = true,
}) => {
  const theme = useTheme();
  return (
    <MuiFade
      in={inProp}
      timeout={timeout ?? theme.transitions.duration.standard}
      unmountOnExit={unmountOnExit}
      appear={appear}
    >
      {children}
    </MuiFade>
  );
};

/**
 * CDS Grow Component
 *
 * Grow in/out transition
 *
 * @example
 * <Grow in={visible}>
 *   <Box>Growing content</Box>
 * </Grow>
 */
export const Grow: React.FC<TransitionProps> = ({
  in: inProp,
  children,
  timeout,
  unmountOnExit = false,
  appear = true,
}) => {
  const theme = useTheme();
  return (
    <MuiGrow
      in={inProp}
      timeout={timeout ?? theme.transitions.duration.standard}
      unmountOnExit={unmountOnExit}
      appear={appear}
    >
      {children}
    </MuiGrow>
  );
};

/**
 * CDS Slide Component
 *
 * Slide in/out transition
 *
 * @example
 * <Slide in={visible} direction="left">
 *   <Box>Sliding content</Box>
 * </Slide>
 */
export const Slide: React.FC<SlideProps> = ({
  in: inProp,
  children,
  timeout,
  unmountOnExit = false,
  appear = true,
  direction = 'down',
  container,
}) => {
  const theme = useTheme();
  return (
    <MuiSlide
      in={inProp}
      timeout={timeout ?? theme.transitions.duration.standard}
      unmountOnExit={unmountOnExit}
      appear={appear}
      direction={direction}
      container={container}
    >
      {children}
    </MuiSlide>
  );
};

/**
 * CDS Zoom Component
 *
 * Zoom in/out transition
 *
 * @example
 * <Zoom in={visible}>
 *   <Box>Zooming content</Box>
 * </Zoom>
 */
export const Zoom: React.FC<TransitionProps> = ({
  in: inProp,
  children,
  timeout,
  unmountOnExit = false,
  appear = true,
}) => {
  const theme = useTheme();
  return (
    <MuiZoom
      in={inProp}
      timeout={timeout ?? theme.transitions.duration.standard}
      unmountOnExit={unmountOnExit}
      appear={appear}
    >
      {children}
    </MuiZoom>
  );
};
