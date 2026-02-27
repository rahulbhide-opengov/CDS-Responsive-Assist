/**
 * CDS Layout Components
 * Pre-styled layout components with CDS tokens and responsive design
 */

import React from 'react';
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
  Box as MuiBox,
  BoxProps as MuiBoxProps,
  Stack as MuiStack,
  StackProps as MuiStackProps,
  Grid as MuiGrid,
  GridProps as MuiGridProps,
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
  Card as MuiCard,
  CardProps as MuiCardProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Container
 * Max-width content wrapper with responsive breakpoints and CDS spacing
 *
 * @example
 * <CDSContainer maxWidth="lg">
 *   <YourContent />
 * </CDSContainer>
 */
export const CDSContainer = styled(MuiContainer)(({ theme }) => ({
  paddingLeft: theme.spacing(2), // 8px mobile
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3), // 12px tablet
    paddingRight: theme.spacing(3),
  },

  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4), // 16px desktop
    paddingRight: theme.spacing(4),
  },
}));

/**
 * CDS Box
 * Generic container with sx prop for custom styling using CDS tokens
 * Use this for one-off layouts with CDS tokens
 *
 * @example
 * <CDSBox sx={{ p: 3, bgcolor: 'primary.main' }}>
 *   Content
 * </CDSBox>
 */
export const CDSBox = styled(MuiBox)(({ theme }) => ({
  // Box is intentionally flexible, only ensuring proper box-sizing
  boxSizing: 'border-box',
}));

/**
 * CDS Stack
 * One-dimensional flexbox layout with CDS spacing
 *
 * @example
 * <CDSStack spacing={3} direction="column">
 *   <Item />
 *   <Item />
 * </CDSStack>
 */
export const CDSStack = styled(MuiStack)(({ theme }) => ({
  '& > *': {
    minWidth: 0, // Prevent flex children overflow
    minHeight: 0,
  },
}));

/**
 * CDS Grid
 * 12-column responsive grid system with CDS spacing
 *
 * @example
 * <CDSGrid container spacing={3}>
 *   <CDSGrid item xs={12} sm={6} md={4}>
 *     <Card />
 *   </CDSGrid>
 * </CDSGrid>
 */
export const CDSGrid = styled(MuiGrid)(({ theme }) => ({
  // Grid container spacing
  '&.MuiGrid-container': {
    width: '100%',
  },

  // Grid item responsive padding
  '&.MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
  },
}));

/**
 * CDS Paper
 * Elevated surface with shadow
 *
 * @example
 * <CDSPaper elevation={2} sx={{ p: 3 }}>
 *   Content
 * </CDSPaper>
 */
export const CDSPaper = styled(MuiPaper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // 4px
  padding: theme.spacing(2), // 16px default
}));

/**
 * CDS Card
 * Content card with elevation and rounded corners
 *
 * @example
 * <CDSCard>
 *   <CDSCardHeader title="Card Title" />
 *   <CDSCardContent>Content here</CDSCardContent>
 *   <CDSCardActions>
 *     <CDSButton>Action</CDSButton>
 *   </CDSCardActions>
 * </CDSCard>
 */
export const CDSCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // 4px

  // Default subtle elevation
  boxShadow: theme.shadows[1],

  // Hover effect
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),

  '&:hover': {
    boxShadow: theme.shadows[4],
  },

  // Responsive padding for card content
  '& .MuiCardContent-root': {
    padding: theme.spacing(2), // 8px mobile
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2.5), // 10px tablet
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3), // 12px desktop
    },

    '&:last-child': {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(2.5),
      },
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(3),
      },
    },
  },

  // Card header responsive
  '& .MuiCardHeader-root': {
    padding: theme.spacing(2), // 8px mobile
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2.5), // 10px tablet
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3), // 12px desktop
    },
  },

  // Card actions responsive
  '& .MuiCardActions-root': {
    padding: theme.spacing(1, 2), // 4px 8px mobile
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 2.5), // 4px 10px tablet
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3), // 4px 12px desktop
    },
  },
}));

/**
 * CDS Section
 * Page section with consistent spacing
 *
 * @example
 * <CDSSection>
 *   <Typography variant="h4">Section Title</Typography>
 *   <Typography>Content...</Typography>
 * </CDSSection>
 */
export const CDSSection = styled(MuiBox)(({ theme }) => ({
  // Responsive margin between sections
  marginBottom: theme.spacing(4), // 16px mobile
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(5), // 20px tablet
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6), // 24px desktop
  },

  // Responsive padding
  padding: theme.spacing(2), // 8px mobile
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3), // 12px tablet
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4), // 16px desktop
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(5), // 20px large
  },
}));

/**
 * CDS PageContainer
 * Full-page container with consistent padding
 *
 * @example
 * <CDSPageContainer>
 *   <Typography variant="h3">Page Title</Typography>
 *   <CDSSection>...</CDSSection>
 * </CDSPageContainer>
 */
export const CDSPageContainer = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

// Type exports
export type CDSContainerProps = MuiContainerProps;
export type CDSBoxProps = MuiBoxProps;
export type CDSStackProps = MuiStackProps;
export type CDSGridProps = MuiGridProps;
export type CDSPaperProps = MuiPaperProps;
export type CDSCardProps = MuiCardProps;
