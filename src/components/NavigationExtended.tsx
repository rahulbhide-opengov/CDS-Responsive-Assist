/**
 * CDS Extended Navigation Components (CDS-First Architecture)
 * Additional navigation components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - Intuitive prop names (ariaLabel not aria-label)
 * - Semantic props aligned with design system
 * - CDS token styling with full accessibility
 */

import React from 'react';
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  Pagination as MuiPagination,
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepContent as MuiStepContent,
} from '@mui/material';
import { TreeView as MuiTreeView, TreeItem as MuiTreeItem } from '@mui/x-tree-view';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Menu Props
 */
export interface MenuProps {
  /**
   * Anchor element
   */
  anchorEl?: HTMLElement | null;

  /**
   * Open state
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Menu content
   */
  children?: React.ReactNode;

  /**
   * Anchor origin
   */
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };

  /**
   * Transform origin
   */
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };

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
 * CDS MenuItem Props
 */
export interface MenuItemProps {
  /**
   * Menu item content
   */
  children?: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;

  /**
   * Selected state
   * @default false
   */
  selected?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

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
 * CDS Pagination Props
 */
export interface PaginationProps {
  /**
   * Total page count
   */
  count: number;

  /**
   * Current page (1-indexed)
   * @default 1
   */
  page?: number;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;

  /**
   * Pagination variant
   * @default 'text'
   */
  variant?: 'text' | 'outlined';

  /**
   * Pagination shape
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';

  /**
   * Pagination size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Pagination color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'standard';

  /**
   * Show first button
   * @default false
   */
  showFirstButton?: boolean;

  /**
   * Show last button
   * @default false
   */
  showLastButton?: boolean;

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
 * CDS SpeedDial Props
 */
export interface SpeedDialProps {
  /**
   * Accessible label (required)
   */
  ariaLabel: string;

  /**
   * Speed dial icon
   */
  icon: React.ReactNode;

  /**
   * Open state
   */
  open?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Open handler
   */
  onOpen?: () => void;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Speed dial direction
   * @default 'up'
   */
  direction?: 'up' | 'down' | 'left' | 'right';

  /**
   * Hidden state
   * @default false
   */
  hidden?: boolean;

  /**
   * Speed dial actions
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
 * CDS SpeedDialAction Props
 */
export interface SpeedDialActionProps {
  /**
   * Action icon
   */
  icon: React.ReactNode;

  /**
   * Tooltip title
   */
  tooltipTitle: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Tooltip open state
   */
  tooltipOpen?: boolean;

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
 * CDS TreeView Props
 */
export interface TreeViewProps {
  /**
   * Default expanded nodes
   */
  defaultExpanded?: string[];

  /**
   * Expanded nodes (controlled)
   */
  expanded?: string[];

  /**
   * Selected nodes
   */
  selected?: string | string[];

  /**
   * Default selected nodes
   */
  defaultSelected?: string | string[];

  /**
   * Node toggle handler
   */
  onNodeToggle?: (event: React.SyntheticEvent, nodeIds: string[]) => void;

  /**
   * Node select handler
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeIds: string | string[]) => void;

  /**
   * Multi-select
   * @default false
   */
  multiSelect?: boolean;

  /**
   * Tree content
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
 * CDS TreeItem Props
 */
export interface TreeItemProps {
  /**
   * Node ID (required)
   */
  nodeId: string;

  /**
   * Node label
   */
  label: React.ReactNode;

  /**
   * Child nodes
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
 * CDS Stepper Props
 */
export interface StepperProps {
  /**
   * Active step index (0-indexed)
   * @default 0
   */
  activeStep?: number;

  /**
   * Stepper orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Stepper variant
   * @default 'elevation'
   */
  variant?: 'elevation' | 'outlined';

  /**
   * Non-linear steps
   * @default false
   */
  nonLinear?: boolean;

  /**
   * Alternative label
   * @default false
   */
  alternativeLabel?: boolean;

  /**
   * Steps content
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
 * CDS Step Props
 */
export interface StepProps {
  /**
   * Step content
   */
  children?: React.ReactNode;

  /**
   * Completed state
   * @default false
   */
  completed?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

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
 * CDS StepLabel Props
 */
export interface StepLabelProps {
  /**
   * Step label content
   */
  children?: React.ReactNode;

  /**
   * Optional label
   */
  optional?: React.ReactNode;

  /**
   * Step icon
   */
  icon?: React.ReactNode;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

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
 * CDS StepContent Props
 */
export interface StepContentProps {
  /**
   * Step content
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

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * CDS Menu - Dropdown menu with CDS styling
 */
const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow: theme.shadows[8],
  },

  '& .MuiList-root': {
    padding: theme.spacing(1, 0),
  },
}));

/**
 * CDS MenuItem - Individual menu item with responsive sizing
 */
const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  // Responsive padding (mobile-first)
  padding: theme.spacing(1.5, 1.5),
  minHeight: theme.spacing(6), // 48px
  fontSize: theme.typography.body1.fontSize, // Use theme token

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2),
    fontSize: theme.typography.body1.fontSize, // Use theme token
  },

  // Hover state
  '&:hover': {
    backgroundColor: theme.palette.primaryStates.light.hover,
  },

  // Selected state
  '&.Mui-selected': {
    backgroundColor: theme.palette.primaryStates.light.selected,
    '&:hover': {
      backgroundColor: theme.palette.primaryStates.light.focus,
    },
  },

  // Focus state (WCAG compliant)
  '&:focus-visible': {
    backgroundColor: theme.palette.primaryStates.light.focusVisible,
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: -2,
  },
}));

/**
 * CDS Pagination - Page navigation with CDS styling
 */
const StyledPagination = styled(MuiPagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    minWidth: 32,
    minHeight: 32,
    margin: theme.spacing(0, 0.5),
    borderRadius: theme.shape.borderRadius,

    // Selected state
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    // Focus state (WCAG compliant)
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
}));

/**
 * CDS SpeedDial - Floating action button with expandable actions
 */
const StyledSpeedDial = styled(MuiSpeedDial)(({ theme }) => ({
  '& .MuiSpeedDial-fab': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[6],

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[8],
    },

    // Focus state (WCAG compliant)
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.light}`,
      outlineOffset: 2,
    },
  },
}));

/**
 * CDS SpeedDialAction - Individual speed dial action
 */
const StyledSpeedDialAction = styled(MuiSpeedDialAction)(({ theme }) => ({
  '& .MuiSpeedDialAction-fab': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],

    '&:hover': {
      backgroundColor: theme.palette.secondaryStates.light.hover,
      boxShadow: theme.shadows[4],
    },

    // Focus state (WCAG compliant)
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
}));

/**
 * CDS TreeView - Hierarchical tree navigation
 */
const StyledTreeView = styled(MuiTreeView)(({ theme }) => ({
  '& .MuiTreeItem-root': {
    '&:focus > .MuiTreeItem-content': {
      backgroundColor: theme.palette.primaryStates.light.focusVisible,
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: -2,
    },
  },

  '& .MuiTreeItem-content': {
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,

    '&:hover': {
      backgroundColor: theme.palette.primaryStates.light.hover,
    },

    '&.Mui-selected': {
      backgroundColor: theme.palette.primaryStates.light.selected,

      '&:hover': {
        backgroundColor: theme.palette.primaryStates.light.focus,
      },
    },
  },

  '& .MuiTreeItem-label': {
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(1, 0),
  },
}));

/**
 * CDS TreeItem - Individual tree node
 */
const StyledTreeItem = styled(MuiTreeItem)(({ theme }) => ({
  '& .MuiTreeItem-iconContainer': {
    marginRight: theme.spacing(1),
    width: theme.spacing(3), // 24px

    '& svg': {
      fontSize: theme.spacing(2.5), // 20px
      color: theme.palette.text.secondary,
    },
  },
}));

/**
 * CDS Stepper - Multi-step navigation
 */
const StyledStepper = styled(MuiStepper)(({ theme }) => ({
  padding: theme.spacing(3, 0),

  '& .MuiStepConnector-line': {
    borderColor: theme.palette.divider,
  },

  '& .MuiStepLabel-label': {
    marginTop: theme.spacing(1),
  },
}));

/**
 * CDS Step - Individual step
 */
const StyledStep = styled(MuiStep)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    padding: theme.spacing(1, 0),
  },
}));

/**
 * CDS StepLabel - Step label with icon
 */
const StyledStepLabel = styled(MuiStepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,

    '&.Mui-active': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },

    '&.Mui-completed': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },

  '& .MuiStepLabel-iconContainer': {
    paddingRight: theme.spacing(1),

    '& .MuiSvgIcon-root': {
      fontSize: theme.spacing(3), // 24px

      '&.Mui-active': {
        color: theme.palette.primary.main,
      },

      '&.Mui-completed': {
        color: theme.palette.success.main,
      },
    },
  },
}));

/**
 * CDS StepContent - Step content area
 */
const StyledStepContent = styled(MuiStepContent)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  borderLeft: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

// ============================================================================
// CDS COMPONENTS
// ============================================================================

/**
 * CDS Menu Component
 *
 * @example
 * <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
 *   <MenuItem onClick={handleClick}>Profile</MenuItem>
 * </Menu>
 */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      anchorEl,
      open,
      onClose,
      children,
      anchorOrigin,
      transformOrigin,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMenu
        ref={ref}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMenu>
    );
  }
);

Menu.displayName = 'Menu';

/**
 * CDS MenuItem Component
 *
 * @example
 * <MenuItem onClick={handleClick}>Menu Item</MenuItem>
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      children,
      onClick,
      selected = false,
      disabled = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMenuItem
        ref={ref}
        onClick={onClick}
        selected={selected}
        disabled={disabled}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMenuItem>
    );
  }
);

MenuItem.displayName = 'MenuItem';

/**
 * CDS Pagination Component
 *
 * @example
 * <Pagination count={10} page={page} onChange={handleChange} />
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      count,
      page = 1,
      onChange,
      variant = 'text',
      shape = 'circular',
      size = 'medium',
      color = 'primary',
      showFirstButton = false,
      showLastButton = false,
      ariaLabel,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledPagination
        ref={ref}
        count={count}
        page={page}
        onChange={onChange}
        variant={variant}
        shape={shape}
        size={size}
        color={color}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
        id={id}
      />
    );
  }
);

Pagination.displayName = 'Pagination';

/**
 * CDS SpeedDial Component
 *
 * @example
 * <SpeedDial ariaLabel="Actions" icon={<SpeedDialIcon />}>
 *   <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
 * </SpeedDial>
 */
export const SpeedDial = React.forwardRef<HTMLButtonElement, SpeedDialProps>(
  (
    {
      ariaLabel,
      icon,
      open,
      onClick,
      onOpen,
      onClose,
      direction = 'up',
      hidden = false,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledSpeedDial
        ref={ref}
        ariaLabel={ariaLabel}
        icon={icon}
        open={open}
        onClick={onClick}
        onOpen={onOpen}
        onClose={onClose}
        direction={direction}
        hidden={hidden}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledSpeedDial>
    );
  }
);

SpeedDial.displayName = 'SpeedDial';

/**
 * CDS SpeedDialAction Component
 *
 * @example
 * <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
 */
export const SpeedDialAction = React.forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  (
    {
      icon,
      tooltipTitle,
      onClick,
      tooltipOpen,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledSpeedDialAction
        ref={ref}
        icon={icon}
        tooltipTitle={tooltipTitle}
        onClick={onClick}
        tooltipOpen={tooltipOpen}
        className={className}
        sx={sx}
        id={id}
      />
    );
  }
);

SpeedDialAction.displayName = 'SpeedDialAction';

/**
 * CDS TreeView Component
 *
 * @example
 * <TreeView defaultExpanded={['1']}>
 *   <TreeItem nodeId="1" label="Parent">
 *     <TreeItem nodeId="2" label="Child" />
 *   </TreeItem>
 * </TreeView>
 */
export const TreeView = React.forwardRef<HTMLUListElement, TreeViewProps>(
  (
    {
      defaultExpanded,
      expanded,
      selected,
      defaultSelected,
      onNodeToggle,
      onNodeSelect,
      multiSelect = false,
      children,
      ariaLabel,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledTreeView
        ref={ref}
        defaultExpanded={defaultExpanded}
        expanded={expanded}
        selected={selected}
        defaultSelected={defaultSelected}
        onNodeToggle={onNodeToggle}
        onNodeSelect={onNodeSelect}
        multiSelect={multiSelect}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledTreeView>
    );
  }
);

TreeView.displayName = 'TreeView';

/**
 * CDS TreeItem Component
 *
 * @example
 * <TreeItem nodeId="1" label="Parent" />
 */
export const TreeItem = React.forwardRef<HTMLLIElement, TreeItemProps>(
  (
    {
      nodeId,
      label,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledTreeItem
        ref={ref}
        nodeId={nodeId}
        label={label}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledTreeItem>
    );
  }
);

TreeItem.displayName = 'TreeItem';

/**
 * CDS Stepper Component
 *
 * @example
 * <Stepper activeStep={activeStep}>
 *   <Step><StepLabel>Step 1</StepLabel></Step>
 * </Stepper>
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep = 0,
      orientation = 'horizontal',
      variant = 'elevation',
      nonLinear = false,
      alternativeLabel = false,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledStepper
        ref={ref}
        activeStep={activeStep}
        orientation={orientation}
        nonLinear={nonLinear}
        alternativeLabel={alternativeLabel}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledStepper>
    );
  }
);

Stepper.displayName = 'Stepper';

/**
 * CDS Step Component
 *
 * @example
 * <Step><StepLabel>Step 1</StepLabel></Step>
 */
export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      children,
      completed = false,
      disabled = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledStep
        ref={ref}
        completed={completed}
        disabled={disabled}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledStep>
    );
  }
);

Step.displayName = 'Step';

/**
 * CDS StepLabel Component
 *
 * @example
 * <StepLabel>Step 1</StepLabel>
 */
export const StepLabel = React.forwardRef<HTMLSpanElement, StepLabelProps>(
  (
    {
      children,
      optional,
      icon,
      error = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledStepLabel
        ref={ref}
        optional={optional}
        icon={icon}
        error={error}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledStepLabel>
    );
  }
);

StepLabel.displayName = 'StepLabel';

/**
 * CDS StepContent Component
 *
 * @example
 * <StepContent>Step content here</StepContent>
 */
export const StepContent = React.forwardRef<HTMLDivElement, StepContentProps>(
  (
    {
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledStepContent
        ref={ref}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledStepContent>
    );
  }
);

StepContent.displayName = 'StepContent';

// ============================================================================
// EXPORTS
// ============================================================================

export type MenuProps = MenuProps;
export type MenuItemProps = MenuItemProps;
export type PaginationProps = PaginationProps;
export type SpeedDialProps = SpeedDialProps;
export type SpeedDialActionProps = SpeedDialActionProps;
export type TreeViewProps = TreeViewProps;
export type TreeItemProps = TreeItemProps;
export type StepperProps = StepperProps;
export type StepProps = StepProps;
export type StepLabelProps = StepLabelProps;
export type StepContentProps = StepContentProps;
