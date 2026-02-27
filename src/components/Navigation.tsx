/**
 * CDS Navigation Components
 * Pre-styled navigation components with CDS tokens and accessibility
 */

import React from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps as MuiBottomNavigationProps,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  Tab as MuiTab,
  TabProps as MuiTabProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS AppBar
 * Top navigation bar with proper elevation
 *
 * @example
 * <CDSAppBar position="fixed">
 *   <Toolbar>
 *     <Typography variant="h6">App Name</Typography>
 *   </Toolbar>
 * </CDSAppBar>
 */
export const CDSAppBar = styled(MuiAppBar)(({ theme }) => ({
  // Default elevation
  boxShadow: theme.shadows[4],

  // Height
  minHeight: 64,
  [theme.breakpoints.down('sm')]: {
    minHeight: 56,
  },

  // Z-index
  zIndex: theme.zIndex.appBar, // 1100
}));

/**
 * CDS Drawer
 * Side navigation panel with proper width and elevation
 *
 * @example
 * <CDSDrawer
 *   variant="permanent"
 *   open={open}
 *   onClose={handleClose}
 * >
 *   <List>...</List>
 * </CDSDrawer>
 */
export const CDSDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240, // Standard drawer width
    boxShadow: theme.shadows[16],
    zIndex: theme.zIndex.drawer, // 1200

    // Scrollable content
    overflowY: 'auto',

    // Smooth transitions
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  // Temporary drawer backdrop
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

/**
 * CDS Bottom Navigation
 * Mobile bottom tab navigation
 *
 * @example
 * <CDSBottomNavigation value={value} onChange={handleChange}>
 *   <BottomNavigationAction label="Home" icon={<HomeIcon />} />
 *   <BottomNavigationAction label="Search" icon={<SearchIcon />} />
 * </CDSBottomNavigation>
 */
export const CDSBottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  // Elevation
  boxShadow: theme.shadows[8],

  // Position
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  // Z-index
  zIndex: theme.zIndex.appBar, // 1100

  // Height with proper touch targets
  height: 56,

  // Ensure proper spacing for labels
  '& .MuiBottomNavigationAction-root': {
    minWidth: 80,
    padding: theme.spacing(0.5, 1),

    // Touch target
    minHeight: 48,

    // Label styling
    '& .MuiBottomNavigationAction-label': {
      fontSize: theme.typography.caption.fontSize,
      '&.Mui-selected': {
        fontSize: theme.typography.caption.fontSize,
      },
    },
  },
}));

/**
 * CDS Tabs
 * Tabbed navigation with proper styling
 *
 * @example
 * <CDSTabs value={value} onChange={handleChange}>
 *   <CDSTab label="Overview" />
 *   <CDSTab label="Details" />
 *   <CDSTab label="Settings" />
 * </CDSTabs>
 */
export const CDSTabs = styled(MuiTabs)(({ theme }) => ({
  // Indicator styling
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: theme.shape.borderRadius,
  },

  // Ensure proper spacing
  minHeight: 48,

  // Scrollable tabs
  '& .MuiTabs-scroller': {
    overflow: 'auto !important',
  },
}));

/**
 * CDS Tab
 * Individual tab with proper touch target
 *
 * @example
 * <CDSTab label="Tab Label" icon={<Icon />} />
 */
export const CDSTab = styled(MuiTab)(({ theme }) => ({
  // Text transform
  textTransform: 'none',

  // Font weight
  fontWeight: theme.typography.fontWeightMedium,

  // Proper touch target
  minHeight: 48,
  minWidth: 90,

  // Padding
  padding: theme.spacing(1.5, 2),

  // Transitions
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  // Focus state
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.action.focus,
  },

  // Selected state
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

/**
 * CDS Navigation Link
 * Styled link for navigation with proper accessibility
 *
 * @example
 * <CDSNavLink href="/about">
 *   About Us
 * </CDSNavLink>
 */
export const CDSNavLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),

  // Minimum touch target
  minHeight: 48,

  // Font styling
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,

  // Transitions
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },

  // Active state
  '&.active': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },

  // Focus state
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

// Type exports
export type CDSAppBarProps = MuiAppBarProps;
export type CDSDrawerProps = MuiDrawerProps;
export type CDSBottomNavigationProps = MuiBottomNavigationProps;
export type CDSTabsProps = MuiTabsProps;
export type CDSTabProps = MuiTabProps;
