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
 * <CDSPortal>
 *   <div>This content renders outside the parent DOM</div>
 * </CDSPortal>
 *
 * @example
 * // With custom container
 * <CDSPortal container={customContainer}>
 *   <div>Rendered in custom container</div>
 * </CDSPortal>
 */
export const CDSPortal = MuiPortal;

// Type exports
export type CDSPortalProps = MuiPortalProps;
