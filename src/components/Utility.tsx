/**
 * CDS Utility Components
 * Utility components with CDS styling
 */

import React from 'react';
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps,
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
  Fade as MuiFade,
  Grow as MuiGrow,
  Slide as MuiSlide,
  Zoom as MuiZoom,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

/**
 * CDS Popover
 * Positioned floating content with CDS styling
 */
export const CDSPopover = styled(MuiPopover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
}));

/**
 * CDS Collapse
 * Expand/collapse animation component with CDS transitions
 *
 * @example
 * <CDSCollapse in={expanded}>
 *   <Typography>Collapsed content</Typography>
 * </CDSCollapse>
 */
export const CDSCollapse = styled(MuiCollapse)(({ theme }) => ({
  transition: theme.transitions.create(['height', 'opacity'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

/**
 * CDS Modal
 * Modal overlay component with CDS styling
 *
 * @example
 * <CDSModal open={open} onClose={handleClose}>
 *   <CDSBox sx={{ bgcolor: 'background.paper', p: 4 }}>
 *     Modal content
 *   </CDSBox>
 * </CDSModal>
 */
export const CDSModal = styled(MuiModal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),

  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

/**
 * CDS ClickAwayListener
 * Utility to detect clicks outside an element
 */
export const CDSClickAwayListener = MuiClickAwayListener;

/**
 * CDS Transition Components
 * Animation transition components with CDS timing
 *
 * @example
 * <CDSFade in={visible}>
 *   <Typography>Fading content</Typography>
 * </CDSFade>
 */
export const CDSFade = (props: any) => {
  const theme = useTheme();
  return (
    <MuiFade
      {...props}
      timeout={props.timeout ?? theme.transitions.duration.standard}
    />
  );
};

export const CDSGrow = (props: any) => {
  const theme = useTheme();
  return (
    <MuiGrow
      {...props}
      timeout={props.timeout ?? theme.transitions.duration.standard}
    />
  );
};

export const CDSSlide = (props: any) => {
  const theme = useTheme();
  return (
    <MuiSlide
      {...props}
      timeout={props.timeout ?? theme.transitions.duration.standard}
    />
  );
};

export const CDSZoom = (props: any) => {
  const theme = useTheme();
  return (
    <MuiZoom
      {...props}
      timeout={props.timeout ?? theme.transitions.duration.standard}
    />
  );
};

// Type exports
export type CDSPopoverProps = MuiPopoverProps;
export type CDSCollapseProps = MuiCollapseProps;
export type CDSModalProps = MuiModalProps;
export type CDSClickAwayListenerProps = MuiClickAwayListenerProps;
