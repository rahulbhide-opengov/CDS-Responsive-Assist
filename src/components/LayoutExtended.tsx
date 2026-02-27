/**
 * CDS Extended Layout Components
 * Additional layout components with CDS tokens
 */

import React from 'react';
import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Divider
 * Visual separator line with CDS styling
 *
 * @example
 * <CDSDivider />
 * <CDSDivider orientation="vertical" />
 */
export const CDSDivider = styled(MuiDivider)(({ theme }) => ({
  borderColor: theme.palette.divider,

  '&.MuiDivider-vertical': {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  '&.MuiDivider-withChildren': {
    '&::before, &::after': {
      borderColor: theme.palette.divider,
    },
  },
}));

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
export type CDSDividerProps = MuiDividerProps;
export type CDSLinkProps = MuiLinkProps;
