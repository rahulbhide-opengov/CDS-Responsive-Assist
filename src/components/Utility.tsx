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
import { styled } from '@mui/material/styles';

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
 * Expand/collapse animation component
 */
export const CDSCollapse = MuiCollapse;

/**
 * CDS Modal
 * Modal overlay component
 */
export const CDSModal = styled(MuiModal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

/**
 * CDS ClickAwayListener
 * Utility to detect clicks outside an element
 */
export const CDSClickAwayListener = MuiClickAwayListener;

/**
 * CDS Transition Components
 * Animation transition components
 */
export const CDSFade = MuiFade;
export const CDSGrow = MuiGrow;
export const CDSSlide = MuiSlide;
export const CDSZoom = MuiZoom;

// Type exports
export type CDSPopoverProps = MuiPopoverProps;
export type CDSCollapseProps = MuiCollapseProps;
export type CDSModalProps = MuiModalProps;
export type CDSClickAwayListenerProps = MuiClickAwayListenerProps;
