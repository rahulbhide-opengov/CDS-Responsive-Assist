/**
 * CDS Navigation Components (CDS-First Architecture)
 * Navigation components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - Intuitive prop names (ariaLabel not aria-label)
 * - Semantic props aligned with design system
 * - CDS token styling with full responsive behavior
 */

import React from 'react';
import {
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  BottomNavigation as MuiBottomNavigation,
  Tabs as MuiTabs,
  Tab as MuiTab,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS AppBar Props
 */
export interface AppBarProps {
  /**
   * AppBar positioning
   * @default 'fixed'
   */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';

  /**
   * AppBar color
   * @default 'primary'
   */
  color?: 'default' | 'primary' | 'secondary' | 'transparent' | 'inherit';

  /**
   * Elevation level (0-24)
   * @default 4
   */
  elevation?: number;

  /**
   * AppBar content
   */
  children?: React.ReactNode;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS Drawer Props
 */
export interface DrawerProps {
  /**
   * Drawer variant
   * @default 'temporary'
   */
  variant?: 'permanent' | 'persistent' | 'temporary';

  /**
   * Drawer anchor position
   * @default 'left'
   */
  anchor?: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Open state
   * @default false
   */
  open?: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Custom drawer width
   */
  width?: number;

  /**
   * Drawer content
   */
  children?: React.ReactNode;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS Bottom Navigation Props
 */
export interface BottomNavigationProps {
  /**
   * Selected value
   */
  value?: any;

  /**
   * Change handler
   */
  onChange?: (event: React.SyntheticEvent, value: any) => void;

  /**
   * Show labels
   * @default true
   */
  showLabels?: boolean;

  /**
   * Navigation actions
   */
  children?: React.ReactNode;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS Tabs Props
 */
export interface TabsProps {
  /**
   * Selected tab value
   */
  value?: any;

  /**
   * Change handler
   */
  onChange?: (event: React.SyntheticEvent, value: any) => void;

  /**
   * Tab orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Scrollable tabs
   * @default false
   */
  scrollable?: boolean;

  /**
   * Scroll buttons behavior
   * @default 'auto'
   */
  scrollButtons?: 'auto' | true | false;

  /**
   * Indicator color
   * @default 'primary'
   */
  indicatorColor?: 'primary' | 'secondary';

  /**
   * Text color
   * @default 'primary'
   */
  textColor?: 'primary' | 'secondary' | 'inherit';

  /**
   * Centered tabs
   * @default false
   */
  centered?: boolean;

  /**
   * Tabs content
   */
  children?: React.ReactNode;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS Tab Props
 */
export interface TabProps {
  /**
   * Tab label
   */
  label?: React.ReactNode;

  /**
   * Tab value
   */
  value?: any;

  /**
   * Tab icon
   */
  icon?: React.ReactNode;

  /**
   * Icon position
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Wrapped label
   * @default false
   */
  wrapped?: boolean;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Component ID
   */
  id?: string;
}

/**
 * CDS NavLink Props
 */
export interface NavLinkProps {
  /**
   * Link href
   */
  href: string;

  /**
   * Link target
   */
  target?: string;

  /**
   * Active state
   * @default false
   */
  active?: boolean;

  /**
   * Link content
   */
  children?: React.ReactNode;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;

  /**
   * Component ID
   */
  id?: string;
}

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * CDS AppBar - Top navigation bar with responsive sizing
 */
const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  // CDS elevation
  boxShadow: theme.shadows[4],

  // Responsive height (mobile-first)
  minHeight: 56,
  [theme.breakpoints.up('sm')]: {
    minHeight: 60,
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 64,
  },

  // CDS z-index
  zIndex: theme.zIndex.appBar,

  // Toolbar responsive styling
  '& .MuiToolbar-root': {
    minHeight: 56,
    padding: theme.spacing(0, 2),

    [theme.breakpoints.up('sm')]: {
      minHeight: 60,
      padding: theme.spacing(0, 3),
    },

    [theme.breakpoints.up('md')]: {
      minHeight: 64,
      padding: theme.spacing(0, 4),
    },
  },

  // Typography responsive sizing
  '& .MuiTypography-h6': {
    fontSize: '1.125rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
    },
  },
}));

/**
 * CDS Drawer - Side navigation panel with smooth transitions
 */
const StyledDrawer = styled(MuiDrawer)<{ width?: number }>(({ theme, width }) => ({
  '& .MuiDrawer-paper': {
    width: width || 240,
    boxShadow: theme.shadows[16],
    zIndex: theme.zIndex.drawer,
    overflowY: 'auto',

    // CDS smooth transitions
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  // Backdrop styling
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

/**
 * CDS Bottom Navigation - Mobile bottom tab navigation
 */
const StyledBottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  // CDS elevation
  boxShadow: theme.shadows[8],

  // Fixed positioning
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,

  // Height with proper touch targets
  height: 56,

  // Action styling
  '& .MuiBottomNavigationAction-root': {
    minWidth: 80,
    padding: theme.spacing(0.5, 1),
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
 * CDS Tabs - Tabbed navigation with responsive behavior
 */
const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  // Indicator styling
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: theme.shape.borderRadius,
  },

  // Minimum height for touch targets
  minHeight: 48,

  // Scrollable tabs
  '& .MuiTabs-scroller': {
    overflow: 'auto !important',
  },
}));

/**
 * CDS Tab - Individual tab with responsive sizing
 */
const StyledTab = styled(MuiTab)(({ theme }) => ({
  // CDS text styling
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,

  // Touch targets (mobile-first)
  minHeight: 48,
  minWidth: 80,
  padding: theme.spacing(1.5, 1.5),
  fontSize: '0.8125rem',

  [theme.breakpoints.up('sm')]: {
    minWidth: 90,
    padding: theme.spacing(1.5, 2),
    fontSize: '0.875rem',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 3),
    fontSize: '0.9375rem',
  },

  // CDS transitions
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  // Focus state (WCAG compliant)
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.action.focus,
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  // Selected state
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

/**
 * CDS NavLink - Navigation link with accessibility
 */
const StyledNavLink = styled('a')<{ active?: boolean }>(({ theme, active }) => ({
  // CDS text styling
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),

  // Touch target
  minHeight: 48,

  // Font styling
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,

  // CDS transitions
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
  }),

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },

  // Active state
  ...(active && {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  }),

  // Focus state (WCAG compliant)
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

// ============================================================================
// CDS COMPONENTS
// ============================================================================

/**
 * CDS AppBar Component
 *
 * @example
 * <CDSAppBar position="fixed">
 *   <Toolbar>
 *     <Typography variant="h6">App Name</Typography>
 *   </Toolbar>
 * </CDSAppBar>
 */
export const CDSAppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (
    {
      position = 'fixed',
      color = 'primary',
      elevation = 4,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledAppBar
        ref={ref}
        position={position}
        color={color}
        elevation={elevation}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledAppBar>
    );
  }
);

CDSAppBar.displayName = 'CDSAppBar';

/**
 * CDS Drawer Component
 *
 * @example
 * <CDSDrawer variant="permanent" open={open} onClose={handleClose}>
 *   <List>...</List>
 * </CDSDrawer>
 */
export const CDSDrawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      variant = 'temporary',
      anchor = 'left',
      open = false,
      onClose,
      width,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledDrawer
        ref={ref}
        variant={variant}
        anchor={anchor}
        open={open}
        onClose={onClose}
        width={width}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledDrawer>
    );
  }
);

CDSDrawer.displayName = 'CDSDrawer';

/**
 * CDS Bottom Navigation Component
 *
 * @example
 * <CDSBottomNavigation value={value} onChange={handleChange}>
 *   <BottomNavigationAction label="Home" icon={<HomeIcon />} />
 * </CDSBottomNavigation>
 */
export const CDSBottomNavigation = React.forwardRef<HTMLDivElement, BottomNavigationProps>(
  (
    {
      value,
      onChange,
      showLabels = true,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledBottomNavigation
        ref={ref}
        value={value}
        onChange={onChange}
        showLabels={showLabels}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledBottomNavigation>
    );
  }
);

CDSBottomNavigation.displayName = 'CDSBottomNavigation';

/**
 * CDS Tabs Component
 *
 * @example
 * <CDSTabs value={value} onChange={handleChange}>
 *   <CDSTab label="Overview" />
 *   <CDSTab label="Details" />
 * </CDSTabs>
 */
export const CDSTabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value,
      onChange,
      orientation = 'horizontal',
      scrollable = false,
      scrollButtons = 'auto',
      indicatorColor = 'primary',
      textColor = 'primary',
      centered = false,
      children,
      ariaLabel,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledTabs
        ref={ref}
        value={value}
        onChange={onChange}
        orientation={orientation}
        variant={scrollable ? 'scrollable' : 'standard'}
        scrollButtons={scrollButtons}
        indicatorColor={indicatorColor}
        textColor={textColor}
        centered={centered}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledTabs>
    );
  }
);

CDSTabs.displayName = 'CDSTabs';

/**
 * CDS Tab Component
 *
 * @example
 * <CDSTab label="Tab Label" icon={<Icon />} />
 */
export const CDSTab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      label,
      value,
      icon,
      iconPosition = 'top',
      disabled = false,
      wrapped = false,
      ariaLabel,
      className,
      sx,
      onClick,
      id,
    },
    ref
  ) => {
    return (
      <StyledTab
        ref={ref}
        label={label}
        value={value}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        wrapped={wrapped}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
        onClick={onClick}
        id={id}
      />
    );
  }
);

CDSTab.displayName = 'CDSTab';

/**
 * CDS NavLink Component
 *
 * @example
 * <CDSNavLink href="/about">About Us</CDSNavLink>
 */
export const CDSNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      href,
      target,
      active = false,
      children,
      ariaLabel,
      className,
      onClick,
      id,
    },
    ref
  ) => {
    return (
      <StyledNavLink
        ref={ref}
        href={href}
        target={target}
        active={active}
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
        id={id}
      >
        {children}
      </StyledNavLink>
    );
  }
);

CDSNavLink.displayName = 'CDSNavLink';

// ============================================================================
// EXPORTS
// ============================================================================

export type CDSAppBarProps = AppBarProps;
export type CDSDrawerProps = DrawerProps;
export type CDSBottomNavigationProps = BottomNavigationProps;
export type CDSTabsProps = TabsProps;
export type CDSTabProps = TabProps;
export type CDSNavLinkProps = NavLinkProps;
