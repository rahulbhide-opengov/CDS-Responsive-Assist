/**
 * CDS Extended Layout Components
 * Additional layout components with CDS tokens
 *
 * NOTE: Divider has been moved to Layout.tsx as part of CDS-first refactor
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
 * <Link href="/about">About Us</Link>
 * <Link href="https://example.com" target="_blank">External Link</Link>
 */
export const Link = styled(MuiLink)(({ theme }) => ({
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
export type LinkProps = MuiLinkProps;
