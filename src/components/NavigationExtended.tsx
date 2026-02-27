/**
 * CDS Extended Navigation Components
 * Additional navigation components with CDS tokens
 */

import React from 'react';
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
  SpeedDial as MuiSpeedDial,
  SpeedDialProps as MuiSpeedDialProps,
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialActionProps as MuiSpeedDialActionProps,
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepContent as MuiStepContent,
} from '@mui/material';
import { TreeView as MuiTreeView, TreeItem as MuiTreeItem } from '@mui/x-tree-view';
import { styled } from '@mui/material/styles';

/**
 * CDS Menu
 * Dropdown menu with CDS styling
 *
 * @example
 * <CDSMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
 *   <CDSMenuItem onClick={handleClick}>Profile</CDSMenuItem>
 *   <CDSMenuItem onClick={handleClick}>Settings</CDSMenuItem>
 * </CDSMenu>
 */
export const CDSMenu = styled(MuiMenu)(({ theme }) => ({
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
 * CDS MenuItem
 * Individual menu item with CDS styling
 *
 * @example
 * <CDSMenuItem onClick={handleClick}>Menu Item</CDSMenuItem>
 */
export const CDSMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  minHeight: 48,

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.selectedHover,
    },
  },

  '&:focus-visible': {
    backgroundColor: theme.palette.action.focus,
  },
}));

/**
 * CDS Pagination
 * Page navigation component with CDS styling
 *
 * @example
 * <CDSPagination count={10} page={page} onChange={handleChange} />
 */
export const CDSPagination = styled(MuiPagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    minWidth: 32,
    minHeight: 32,
    margin: theme.spacing(0, 0.5),
    borderRadius: theme.shape.borderRadius,

    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
}));

/**
 * CDS SpeedDial
 * Floating action button with expandable actions
 *
 * @example
 * <CDSSpeedDial ariaLabel="Actions" icon={<SpeedDialIcon />}>
 *   <CDSSpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
 *   <CDSSpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
 * </CDSSpeedDial>
 */
export const CDSSpeedDial = styled(MuiSpeedDial)(({ theme }) => ({
  '& .MuiSpeedDial-fab': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[6],

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[8],
    },
  },
}));

/**
 * CDS SpeedDialAction
 * Individual speed dial action
 */
export const CDSSpeedDialAction = styled(MuiSpeedDialAction)(({ theme }) => ({
  '& .MuiSpeedDialAction-fab': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

/**
 * CDS TreeView
 * Hierarchical tree navigation with CDS styling
 * Requires @mui/x-tree-view package
 *
 * @example
 * <CDSTreeView defaultExpanded={['1']}>
 *   <CDSTreeItem nodeId="1" label="Parent">
 *     <CDSTreeItem nodeId="2" label="Child" />
 *   </CDSTreeItem>
 * </CDSTreeView>
 */
export const CDSTreeView = styled(MuiTreeView)(({ theme }) => ({
  '& .MuiTreeItem-root': {
    '&:focus > .MuiTreeItem-content': {
      backgroundColor: theme.palette.action.focus,
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: -2,
    },
  },

  '& .MuiTreeItem-content': {
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },

    '&.Mui-selected': {
      backgroundColor: theme.palette.action.selected,

      '&:hover': {
        backgroundColor: theme.palette.action.selectedHover,
      },
    },
  },

  '& .MuiTreeItem-label': {
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(1, 0),
  },
}));

export const CDSTreeItem = styled(MuiTreeItem)(({ theme }) => ({
  '& .MuiTreeItem-iconContainer': {
    marginRight: theme.spacing(1),
    width: 24,

    '& svg': {
      fontSize: 20,
      color: theme.palette.text.secondary,
    },
  },
}));

/**
 * CDS Stepper
 * Multi-step navigation component
 *
 * @example
 * <CDSStepper activeStep={activeStep}>
 *   <CDSStep><CDSStepLabel>Step 1</CDSStepLabel></CDSStep>
 *   <CDSStep><CDSStepLabel>Step 2</CDSStepLabel></CDSStep>
 * </CDSStepper>
 */
export const CDSStepper = styled(MuiStepper)(({ theme }) => ({
  padding: theme.spacing(3, 0),

  '& .MuiStepConnector-line': {
    borderColor: theme.palette.divider,
  },

  '& .MuiStepLabel-label': {
    marginTop: theme.spacing(1),
  },
}));

/**
 * CDS Step Components
 * Individual step components with CDS styling
 */
export const CDSStep = styled(MuiStep)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    padding: theme.spacing(1, 0),
  },
}));

export const CDSStepLabel = styled(MuiStepLabel)(({ theme }) => ({
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
      fontSize: 24,

      '&.Mui-active': {
        color: theme.palette.primary.main,
      },

      '&.Mui-completed': {
        color: theme.palette.success.main,
      },
    },
  },
}));

export const CDSStepContent = styled(MuiStepContent)(({ theme }) => ({
  paddingLeft: theme.spacing(4), // 32px
  paddingRight: theme.spacing(2), // 16px
  marginLeft: theme.spacing(2), // 24px
  borderLeft: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

// Type exports
export type CDSMenuProps = MuiMenuProps;
export type CDSMenuItemProps = MuiMenuItemProps;
export type CDSPaginationProps = MuiPaginationProps;
export type CDSSpeedDialProps = MuiSpeedDialProps;
export type CDSSpeedDialActionProps = MuiSpeedDialActionProps;
export type CDSStepperProps = MuiStepperProps;
