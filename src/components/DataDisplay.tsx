/**
 * CDS Data Display Components
 * Components for displaying data with CDS styling
 */

import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps,
  Badge as MuiBadge,
  BadgeProps as MuiBadgeProps,
  List as MuiList,
  ListProps as MuiListProps,
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  ImageList as MuiImageList,
  ImageListProps as MuiImageListProps,
  ImageListItem as MuiImageListItem,
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * CDS Avatar
 * User avatar with CDS sizing and styling
 */
export const CDSAvatar = styled(MuiAvatar)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,

  '&.MuiAvatar-colorDefault': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.getContrastText(theme.palette.grey[400]),
  },

  // Responsive sizing
  '&.MuiAvatar-root': {
    fontSize: '1rem', // Default size
  },

  // Small avatar - responsive
  '&.MuiAvatar-small': {
    width: 24,
    height: 24,
    fontSize: '0.875rem', // 14px
  },

  // Medium avatar - responsive
  '&.MuiAvatar-medium': {
    width: 32, // 32px mobile
    height: 32,
    fontSize: '1rem', // 16px mobile

    [theme.breakpoints.up('sm')]: {
      width: 40, // 40px tablet+
      height: 40,
      fontSize: '1.125rem', // 18px tablet+
    },
  },

  // Large avatar - responsive
  '&.MuiAvatar-large': {
    width: 48, // 48px mobile
    height: 48,
    fontSize: '1.5rem', // 24px mobile

    [theme.breakpoints.up('sm')]: {
      width: 56, // 56px tablet+
      height: 56,
      fontSize: '1.75rem', // 28px tablet+
    },
  },
}));

/**
 * CDS AvatarGroup
 * Group of avatars with proper spacing
 */
export const CDSAvatarGroup = styled(MuiAvatarGroup)(({ theme }) => ({
  '& .MuiAvatar-root': {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

/**
 * CDS Badge
 * Notification badge with CDS styling
 */
export const CDSBadge = styled(MuiBadge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '0.6875rem', // 11px mobile
    fontWeight: theme.typography.fontWeightMedium,
    minWidth: 18, // 18px mobile
    height: 18,
    padding: theme.spacing(0, 0.5),

    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.caption.fontSize, // 12px tablet+
      minWidth: 20, // 20px tablet+
      height: 20,
      padding: theme.spacing(0, 0.75),
    },
  },

  '& .MuiBadge-dot': {
    width: 6, // 6px mobile
    height: 6,
    borderRadius: '50%',

    [theme.breakpoints.up('sm')]: {
      width: 8, // 8px tablet+
      height: 8,
    },
  },
}));

/**
 * CDS List
 * Vertical list with CDS spacing
 */
export const CDSList = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

/**
 * CDS ListItem
 * Individual list item
 */
export const CDSListItem = styled(MuiListItem)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(1, 1.5), // 4px 6px mobile
  minHeight: 48,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1, 2), // 4px 8px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.5, 2.5), // 6px 10px desktop
  },
}));

/**
 * CDS ListItemButton
 * Clickable list item button
 */
export const CDSListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(1.5, 1.5), // 12px 6px mobile
  minHeight: 48,
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2), // 12px 8px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 2.5), // 16px 10px desktop
  },

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
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: -2,
  },
}));

/**
 * CDS ListItemIcon
 * Icon in list item with proper sizing
 */
export const CDSListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  minWidth: 40,
  color: theme.palette.text.secondary,
}));

/**
 * CDS ListItemText
 * Text in list item with CDS typography
 */
export const CDSListItemText = styled(MuiListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
  },

  '& .MuiListItemText-secondary': {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5),
  },
}));

/**
 * CDS Table
 * Data table with CDS styling
 */
export const CDSTable = styled(MuiTable)(({ theme }) => ({
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const CDSTableHead = styled(MuiTableHead)(({ theme }) => ({
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
}));

export const CDSTableBody = styled(MuiTableBody)(({ theme }) => ({
  '& .MuiTableRow-root:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
}));

export const CDSTableRow = styled(MuiTableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const CDSTableCell = styled(MuiTableCell)(({ theme }) => ({
  // Responsive padding
  padding: theme.spacing(1.5, 2), // 12px 8px mobile
  borderBottom: `1px solid ${theme.palette.divider}`,

  // Responsive font size
  fontSize: '0.8125rem', // 13px mobile

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2), // 16px tablet+
    fontSize: '0.875rem', // 14px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 2.5), // 16px 20px desktop
  },
}));

/**
 * CDS ImageList
 * Image gallery grid with CDS spacing
 */
export const CDSImageList = styled(MuiImageList)(({ theme }) => ({
  '& .MuiImageListItem-root': {
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
}));

export const CDSImageListItem = styled(MuiImageListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',

  '& img': {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
  },

  '&:hover img': {
    transform: 'scale(1.05)',
  },

  '& .MuiImageListItemBar-root': {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  '& .MuiImageListItemBar-title': {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },

  '& .MuiImageListItemBar-subtitle': {
    fontSize: theme.typography.caption.fontSize,
  },
}));

/**
 * CDS Accordion
 * Expandable panels with CDS styling
 */
export const CDSAccordion = styled(MuiAccordion)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  '&:before': {
    display: 'none',
  },

  '&.Mui-expanded': {
    margin: theme.spacing(2, 0),
  },
}));

export const CDSAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  minHeight: 64,

  '&.Mui-expanded': {
    minHeight: 64,
  },

  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1.5, 0),

    '&.Mui-expanded': {
      margin: theme.spacing(1.5, 0),
    },
  },
}));

export const CDSAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

/**
 * CDS Chip
 * Compact element with CDS styling
 */
export const CDSChip = styled(MuiChip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.fontWeightMedium,

  // Responsive sizing
  height: 28, // 28px mobile
  fontSize: '0.8125rem', // 13px mobile

  [theme.breakpoints.up('sm')]: {
    height: 32, // 32px tablet+
    fontSize: '0.875rem', // 14px tablet+
  },

  '& .MuiChip-label': {
    padding: theme.spacing(0, 1.5), // 0 12px mobile
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2), // 0 16px tablet+
    },
  },

  '& .MuiChip-icon': {
    marginLeft: theme.spacing(0.75), // 6px mobile
    marginRight: theme.spacing(-0.5),
    fontSize: '1.125rem', // 18px mobile

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1), // 8px tablet+
      fontSize: '1.25rem', // 20px tablet+
    },
  },

  '&.MuiChip-clickable:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

/**
 * CDS Tooltip
 * Tooltip with CDS styling
 */
export const CDSTooltip = styled(MuiTooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[800],
    fontSize: theme.typography.caption.fontSize,
    padding: theme.spacing(0.75, 1.5),
    borderRadius: theme.shape.borderRadius,
  },

  '& .MuiTooltip-arrow': {
    color: theme.palette.grey[800],
  },
}));

// Type exports
export type CDSAvatarProps = MuiAvatarProps;
export type CDSAvatarGroupProps = MuiAvatarGroupProps;
export type CDSBadgeProps = MuiBadgeProps;
export type CDSListProps = MuiListProps;
export type CDSListItemProps = MuiListItemProps;
export type CDSListItemButtonProps = MuiListItemButtonProps;
export type CDSListItemIconProps = MuiListItemIconProps;
export type CDSListItemTextProps = MuiListItemTextProps;
export type CDSTableProps = MuiTableProps;
export type CDSImageListProps = MuiImageListProps;
export type CDSAccordionProps = MuiAccordionProps;
export type CDSChipProps = MuiChipProps;
export type CDSTooltipProps = MuiTooltipProps;
