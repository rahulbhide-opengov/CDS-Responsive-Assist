/**
 * CDS Extended Layout Components
 * Additional layout components with CDS tokens
 *
 * NOTE: CDSDivider has been moved to Layout.tsx as part of CDS-first refactor
 */

import React from 'react';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Link
 * Styled link component with CDS tokens
 *
 * @example
 * <CDSLink href="/about">About Us</CDSLink>
 * <CDSLink href="https://example.com" target="_blank">External Link</CDSLink>
 */
export const CDSLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontWeight: theme.typography.fontWeightMedium,

  transition: theme.transitions.create(['color', 'text-decoration'], {
    duration: theme.transitions.duration.shortest,
  }),

  '&:hover': {
    color: theme.palette.primary.dark,
    textDecoration: 'underline',
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: theme.shape.borderRadius / 2,
  },

  '&:visited': {
    color: theme.palette.primary.main,
  },
}));

// Type exports
export type CDSLinkProps = MuiLinkProps;
