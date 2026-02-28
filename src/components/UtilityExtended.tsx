/**
 * CDS Extended Utility Components
 * Additional utility components with CDS tokens
 */

import React from 'react';
import { Portal as MuiPortal, PortalProps as MuiPortalProps } from '@mui/material';

/**
 * CDS Portal
 * Renders children outside parent DOM hierarchy
 * Useful for modals, tooltips, and escaping overflow/z-index issues
 *
 * @example
 * <Portal>
 *   <div>This content renders outside the parent DOM</div>
 * </Portal>
 *
 * @example
 * // With custom container
 * <Portal container={customContainer}>
 *   <div>Rendered in custom container</div>
 * </Portal>
 */
export const Portal = MuiPortal;

// Type exports
export type PortalProps = MuiPortalProps;
