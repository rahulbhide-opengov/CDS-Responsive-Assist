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
 * Max-width content wrapper with responsive breakpoints
 *
 * @example
 * <CDSContainer maxWidth="lg">
 *   <YourContent />
 * </CDSContainer>
 */
export const CDSContainer = MuiContainer; // No custom styling needed

/**
 * CDS Box
 * Generic container with sx prop for custom styling
 * Use this for one-off layouts with CDS tokens
 *
 * @example
 * <CDSBox sx={{ p: 3, bgcolor: 'primary.main' }}>
 *   Content
 * </CDSBox>
 */
export const CDSBox = MuiBox; // No custom styling needed

/**
 * CDS Stack
 * One-dimensional flexbox layout with spacing
 *
 * @example
 * <CDSStack spacing={3} direction="column">
 *   <Item />
 *   <Item />
 * </CDSStack>
 */
export const CDSStack = MuiStack; // No custom styling needed

/**
 * CDS Grid
 * 12-column responsive grid system
 *
 * @example
 * <CDSGrid container spacing={3}>
 *   <CDSGrid item xs={12} sm={6} md={4}>
 *     <Card />
 *   </CDSGrid>
 * </CDSGrid>
 */
export const CDSGrid = MuiGrid; // No custom styling needed

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
  marginBottom: theme.spacing(6), // 24px between sections

  // Responsive padding
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
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
