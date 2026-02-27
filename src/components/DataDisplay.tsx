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
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    minWidth: 20,
    height: 20,
    padding: theme.spacing(0, 0.75),
  },

  '& .MuiBadge-dot': {
    width: 8,
    height: 8,
    borderRadius: '50%',
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
  padding: theme.spacing(1, 2),
  minHeight: 48,
}));

/**
 * CDS ListItemButton
 * Clickable list item button
 */
export const CDSListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  minHeight: 48,
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
export const CDSListItemText = MuiListItemText;

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

export const CDSTableHead = MuiTableHead;
export const CDSTableBody = MuiTableBody;

export const CDSTableRow = styled(MuiTableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const CDSTableCell = styled(MuiTableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
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

export const CDSImageListItem = MuiImageListItem;

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
