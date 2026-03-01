/**
 * CDS Data Display Components (CDS-First Architecture)
 * Components for displaying data with CDS API - MUI is an implementation detail
 *
 * Developer uses: <Avatar size="md" />
 * NOT: <Avatar sx={{ width: 40, height: 40 }} />
 */

import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarGroup as MuiAvatarGroup,
  Badge as MuiBadge,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListItemAvatar as MuiListItemAvatar,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  ImageList as MuiImageList,
  ImageListItem as MuiImageListItem,
  Chip as MuiChip,
  Tooltip as MuiTooltip,
  Typography as MuiTypography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Avatar Sizes (Design Language)
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * CDS Table Cell Density
 */
export type TableDensity = 'comfortable' | 'standard' | 'compact';

/**
 * CDS Badge Variants
 */
export type BadgeVariant = 'standard' | 'dot';

/**
 * CDS Badge Colors
 */
export type BadgeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'default';

/**
 * CDS Chip Variants
 */
export type ChipVariant = 'filled' | 'outlined';

/**
 * CDS Tooltip Placement
 */
export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

/**
 * CDS Typography Variants (Semantic)
 */
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline';

// ============================================================================
// CDS AVATAR
// ============================================================================

export interface AvatarProps {
  /**
   * Avatar size using CDS scale
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Image source URL
   */
  src?: string;

  /**
   * Alternative text for image
   */
  alt?: string;

  /**
   * Text to display (initials)
   */
  children?: React.ReactNode;

  /**
   * Background color override
   */
  color?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Variant (circular or rounded)
   */
  variant?: 'circular' | 'rounded' | 'square';
}

/**
 * Maps CDS avatar size to pixel dimensions
 */
const getAvatarSizeStyles = (size: AvatarSize) => {
  switch (size) {
    case 'xs':
      return { width: 24, height: 24, fontSize: '0.75rem' }; // 12px
    case 'sm':
      return { width: 32, height: 32, fontSize: '0.875rem' }; // 14px
    case 'md':
      return { width: 40, height: 40, fontSize: '1rem' }; // 16px
    case 'lg':
      return { width: 56, height: 56, fontSize: '1.25rem' }; // 20px
    case 'xl':
      return { width: 72, height: 72, fontSize: '1.5rem' }; // 24px
    default:
      return { width: 40, height: 40, fontSize: '1rem' };
  }
};

const StyledMuiAvatar = styled(MuiAvatar)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,

  '&.MuiAvatar-colorDefault': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.getContrastText(theme.palette.grey[400]),
  },

  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.short,
  }),
}));

/**
 * CDS Avatar Component
 *
 * @example
 * // CDS Way (CORRECT)
 * <Avatar size="md" src="/user.jpg" alt="John Doe" />
 * <Avatar size="lg">JD</Avatar>
 * <Avatar size="sm" />
 *
 * // NOT: <Avatar sx={{ width: 40, height: 40 }} />
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = 'md',
      src,
      alt,
      children,
      color,
      className,
      sx,
      variant = 'circular',
    },
    ref
  ) => {
    const sizeStyles = getAvatarSizeStyles(size);

    return (
      <StyledMuiAvatar
        ref={ref}
        src={src}
        alt={alt}
        variant={variant}
        className={className}
        sx={{
          ...sizeStyles,
          ...(color && { backgroundColor: color }),
          ...sx,
        }}
      >
        {children}
      </StyledMuiAvatar>
    );
  }
);

Avatar.displayName = 'Avatar';

// ============================================================================
// CDS AVATAR GROUP
// ============================================================================

export interface AvatarGroupProps {
  /**
   * Avatar components to display
   */
  children: React.ReactNode;

  /**
   * Maximum number of avatars to show before "+N"
   * @default 5
   */
  max?: number;

  /**
   * Size of avatars in group
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Spacing between avatars (negative for overlap)
   * @default 'medium'
   */
  spacing?: 'small' | 'medium';

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

const StyledMuiAvatarGroup = styled(MuiAvatarGroup)(({ theme }) => ({
  '& .MuiAvatar-root': {
    border: `2px solid ${theme.palette.background.paper}`,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

/**
 * CDS Avatar Group Component
 *
 * @example
 * <AvatarGroup max={3} size="sm">
 *   <Avatar src="/user1.jpg" />
 *   <Avatar src="/user2.jpg" />
 *   <Avatar>AB</Avatar>
 * </AvatarGroup>
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max = 5, size = 'md', spacing, className, sx }, ref) => {
    return (
      <StyledMuiAvatarGroup
        ref={ref}
        max={max}
        spacing={spacing}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiAvatarGroup>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

// ============================================================================
// CDS BADGE
// ============================================================================

export interface BadgeProps {
  /**
   * Badge content (number or text)
   */
  content?: React.ReactNode;

  /**
   * Element to badge
   */
  children: React.ReactNode;

  /**
   * Badge variant
   * @default 'standard'
   */
  variant?: BadgeVariant;

  /**
   * Badge color
   * @default 'primary'
   */
  color?: BadgeColor;

  /**
   * Show badge when content is zero
   * @default false
   */
  showZero?: boolean;

  /**
   * Maximum count to display
   * @default 99
   */
  max?: number;

  /**
   * Badge position
   */
  position?: {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
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
   * Whether badge is visible
   * @default true
   */
  visible?: boolean;
}

const StyledMuiBadge = styled(MuiBadge)(({ theme }) => ({
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

    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
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
 * CDS Badge Component
 *
 * @example
 * <Badge content={4} color="error">
 *   <MailIcon />
 * </Badge>
 *
 * <Badge variant="dot" color="success">
 *   <Avatar />
 * </Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      content,
      children,
      variant = 'standard',
      color = 'primary',
      showZero = false,
      max = 99,
      position,
      className,
      sx,
      visible = true,
    },
    ref
  ) => {
    return (
      <StyledMuiBadge
        ref={ref}
        badgeContent={content}
        variant={variant}
        color={color}
        showZero={showZero}
        max={max}
        anchorOrigin={
          position
            ? {
                vertical: position.vertical || 'top',
                horizontal: position.horizontal || 'right',
              }
            : undefined
        }
        invisible={!visible}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiBadge>
    );
  }
);

Badge.displayName = 'Badge';

// ============================================================================
// CDS CHIP
// ============================================================================

export interface ChipProps {
  /**
   * Chip label
   */
  label: string;

  /**
   * Chip variant
   * @default 'filled'
   */
  variant?: ChipVariant;

  /**
   * Chip color
   * @default 'default'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'default';

  /**
   * Chip size
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Icon to display on left
   */
  icon?: React.ReactElement;

  /**
   * Enable delete functionality
   */
  onDelete?: () => void;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Avatar to display on left
   */
  avatar?: React.ReactElement;

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
}

const StyledMuiChip = styled(MuiChip)(({ theme }) => ({
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

  '&.MuiChip-clickable:hover': {
    transform: 'translateY(-1px)',
    boxShadow: theme.shadows[2],
  },

  '&.MuiChip-clickable:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
}));

/**
 * CDS Chip Component
 *
 * @example
 * <Chip label="New" color="primary" />
 * <Chip label="Delete" variant="outlined" onDelete={handleDelete} />
 * <Chip label="Status" icon={<CheckIcon />} />
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant = 'filled',
      color = 'default',
      size = 'medium',
      icon,
      onDelete,
      onClick,
      avatar,
      disabled = false,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiChip
        ref={ref}
        label={label}
        variant={variant}
        color={color}
        size={size}
        icon={icon}
        onDelete={onDelete}
        onClick={onClick}
        avatar={avatar}
        disabled={disabled}
        clickable={!!onClick}
        className={className}
        sx={sx}
      />
    );
  }
);

Chip.displayName = 'Chip';

// ============================================================================
// CDS TOOLTIP
// ============================================================================

export interface TooltipProps {
  /**
   * Tooltip content
   */
  title: React.ReactNode;

  /**
   * Element to show tooltip on
   */
  children: React.ReactElement;

  /**
   * Tooltip placement
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * Show arrow
   * @default false
   */
  arrow?: boolean;

  /**
   * Open state (controlled)
   */
  open?: boolean;

  /**
   * Open state change handler
   */
  onOpen?: () => void;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Delay before showing (ms)
   * @default 100
   */
  enterDelay?: number;

  /**
   * Delay before hiding (ms)
   * @default 0
   */
  leaveDelay?: number;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

const StyledMuiTooltip = styled(MuiTooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[800],
    fontSize: theme.typography.caption.fontSize,
    padding: theme.spacing(0.75, 1.5),
    borderRadius: theme.shape.borderRadius,
    maxWidth: 300,
    lineHeight: 1.5,
  },

  '& .MuiTooltip-arrow': {
    color: theme.palette.grey[800],
  },
}));

/**
 * CDS Tooltip Component
 *
 * @example
 * <Tooltip title="Delete item">
 *   <IconButton>
 *     <DeleteIcon />
 *   </IconButton>
 * </Tooltip>
 *
 * <Tooltip title="Information" placement="right" arrow>
 *   <Button>Hover me</Button>
 * </Tooltip>
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      title,
      children,
      placement = 'top',
      arrow = false,
      open,
      onOpen,
      onClose,
      enterDelay = 100,
      leaveDelay = 0,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiTooltip
        title={title}
        placement={placement}
        arrow={arrow}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        enterDelay={enterDelay}
        leaveDelay={leaveDelay}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiTooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';

// ============================================================================
// CDS TABLE
// ============================================================================

export interface TableProps {
  /**
   * Table content
   */
  children: React.ReactNode;

  /**
   * Table size
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;

  /**
   * Sticky header
   * @default false
   */
  stickyHeader?: boolean;
}

const StyledMuiTable = styled(MuiTable)(({ theme }) => ({
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightBold,
  },
}));

/**
 * CDS Table Component
 *
 * @example
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Name</TableCell>
 *       <TableCell>Email</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, size = 'medium', className, sx, stickyHeader = false }, ref) => {
    return (
      <StyledMuiTable
        ref={ref}
        size={size}
        stickyHeader={stickyHeader}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiTable>
    );
  }
);

Table.displayName = 'Table';

// ============================================================================
// CDS TABLE HEAD
// ============================================================================

export interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
  sx?: any;
}

const StyledMuiTableHead = styled(MuiTableHead)(({ theme }) => ({
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
}));

export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, sx }, ref) => {
    return (
      <StyledMuiTableHead ref={ref} className={className} sx={sx}>
        {children}
      </StyledMuiTableHead>
    );
  }
);

TableHead.displayName = 'TableHead';

// ============================================================================
// CDS TABLE BODY
// ============================================================================

export interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
  sx?: any;
}

const StyledMuiTableBody = styled(MuiTableBody)(({ theme }) => ({
  '& .MuiTableRow-root:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
}));

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, sx }, ref) => {
    return (
      <StyledMuiTableBody ref={ref} className={className} sx={sx}>
        {children}
      </StyledMuiTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

// ============================================================================
// CDS TABLE ROW
// ============================================================================

export interface TableRowProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  selected?: boolean;
  hover?: boolean;
  className?: string;
  sx?: any;
}

const StyledMuiTableRow = styled(MuiTableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.selectedHover,
    },
  },

  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, onClick, selected, hover = true, className, sx }, ref) => {
    return (
      <StyledMuiTableRow
        ref={ref}
        onClick={onClick}
        selected={selected}
        hover={hover}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiTableRow>
    );
  }
);

TableRow.displayName = 'TableRow';

// ============================================================================
// CDS TABLE CELL
// ============================================================================

export interface TableCellProps {
  children?: React.ReactNode;
  /**
   * Cell density level
   * @default 'standard'
   */
  density?: TableDensity;
  /**
   * Alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Column width
   */
  width?: string | number;
  className?: string;
  sx?: any;
}

/**
 * Maps CDS density to padding values
 */
const getDensityPadding = (density: TableDensity, theme: any) => {
  switch (density) {
    case 'comfortable':
      return {
        padding: theme.spacing(2, 2.5), // 16px 20px mobile
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(2.5, 3), // 20px 24px tablet+
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(3, 3.5), // 24px 28px desktop
        },
      };
    case 'standard':
      return {
        padding: theme.spacing(1.5, 2), // 12px 16px mobile
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(2), // 16px tablet+
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(2, 2.5), // 16px 20px desktop
        },
      };
    case 'compact':
      return {
        padding: theme.spacing(1, 1.5), // 8px 12px mobile
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(1, 1.5), // 8px 12px tablet+
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(1.5, 2), // 12px 16px desktop
        },
      };
    default:
      return {
        padding: theme.spacing(1.5, 2),
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(2),
        },
      };
  }
};

const StyledMuiTableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => prop !== 'density',
})<{ density?: TableDensity }>(({ theme, density = 'standard' }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontSize: '0.8125rem', // 13px mobile

  [theme.breakpoints.up('sm')]: {
    fontSize: '0.875rem', // 14px tablet+
  },

  ...getDensityPadding(density, theme),
}));

/**
 * CDS Table Cell Component
 *
 * @example
 * <TableCell density="compact">Compact cell</TableCell>
 * <TableCell density="comfortable" align="center">Spacious</TableCell>
 */
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      children,
      density = 'standard',
      align = 'left',
      width,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiTableCell
        ref={ref}
        density={density}
        align={align}
        className={className}
        sx={{
          ...(width && { width }),
          ...sx,
        }}
      >
        {children}
      </StyledMuiTableCell>
    );
  }
);

TableCell.displayName = 'TableCell';

// ============================================================================
// CDS LIST
// ============================================================================

export interface ListProps {
  children: React.ReactNode;
  /**
   * Dense list spacing
   * @default false
   */
  dense?: boolean;
  className?: string;
  sx?: any;
}

const StyledMuiList = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

/**
 * CDS List Component
 *
 * @example
 * <List>
 *   <ListItem>
 *     <ListItemText primary="Item 1" />
 *   </ListItem>
 * </List>
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ children, dense = false, className, sx }, ref) => {
    return (
      <StyledMuiList ref={ref} dense={dense} className={className} sx={sx}>
        {children}
      </StyledMuiList>
    );
  }
);

List.displayName = 'List';

// ============================================================================
// CDS LIST ITEM
// ============================================================================

export interface ListItemProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  sx?: any;
}

const StyledMuiListItem = styled(MuiListItem)(({ theme }) => ({
  padding: theme.spacing(1, 1.5), // 8px 12px mobile
  minHeight: 48,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1, 2), // 8px 16px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1.5, 2.5), // 12px 20px desktop
  },

  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, onClick, selected, disabled, className, sx }, ref) => {
    return (
      <StyledMuiListItem
        ref={ref}
        onClick={onClick}
        selected={selected}
        disabled={disabled}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiListItem>
    );
  }
);

ListItem.displayName = 'ListItem';

// ============================================================================
// CDS LIST ITEM BUTTON
// ============================================================================

export interface ListItemButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  sx?: any;
}

const StyledMuiListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 1.5), // 12px 12px mobile
  minHeight: 48,
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 2), // 12px 16px tablet+
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 2.5), // 16px 20px desktop
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

  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.short,
  }),
}));

/**
 * CDS List Item Button Component
 *
 * @example
 * <ListItemButton onClick={handleClick}>
 *   <ListItemIcon>
 *     <InboxIcon />
 *   </ListItemIcon>
 *   <ListItemText primary="Inbox" />
 * </ListItemButton>
 */
export const ListItemButton = React.forwardRef<HTMLDivElement, ListItemButtonProps>(
  ({ children, onClick, selected, disabled, className, sx }, ref) => {
    return (
      <StyledMuiListItemButton
        ref={ref}
        onClick={onClick}
        selected={selected}
        disabled={disabled}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiListItemButton>
    );
  }
);

ListItemButton.displayName = 'ListItemButton';

// ============================================================================
// CDS LIST ITEM ICON
// ============================================================================

export interface ListItemIconProps {
  children: React.ReactNode;
  className?: string;
  sx?: any;
}

const StyledMuiListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  minWidth: 40,
  color: theme.palette.text.secondary,
}));

export const ListItemIcon = React.forwardRef<HTMLDivElement, ListItemIconProps>(
  ({ children, className, sx }, ref) => {
    return (
      <StyledMuiListItemIcon ref={ref} className={className} sx={sx}>
        {children}
      </StyledMuiListItemIcon>
    );
  }
);

ListItemIcon.displayName = 'ListItemIcon';

// ============================================================================
// CDS LIST ITEM TEXT
// ============================================================================

export interface ListItemTextProps {
  /**
   * Primary text
   */
  primary?: React.ReactNode;
  /**
   * Secondary text
   */
  secondary?: React.ReactNode;
  className?: string;
  sx?: any;
}

const StyledMuiListItemText = styled(MuiListItemText)(({ theme }) => ({
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
 * CDS List Item Text Component
 *
 * @example
 * <ListItemText primary="John Doe" secondary="Software Engineer" />
 */
export const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ primary, secondary, className, sx }, ref) => {
    return (
      <StyledMuiListItemText
        ref={ref}
        primary={primary}
        secondary={secondary}
        className={className}
        sx={sx}
      />
    );
  }
);

ListItemText.displayName = 'ListItemText';

// ============================================================================
// CDS LIST ITEM AVATAR
// ============================================================================

export interface ListItemAvatarProps {
  children: React.ReactNode;
  className?: string;
  sx?: any;
}

const StyledMuiListItemAvatar = styled(MuiListItemAvatar)(({ theme }) => ({
  minWidth: 56,
}));

export const ListItemAvatar = React.forwardRef<HTMLDivElement, ListItemAvatarProps>(
  ({ children, className, sx }, ref) => {
    return (
      <StyledMuiListItemAvatar ref={ref} className={className} sx={sx}>
        {children}
      </StyledMuiListItemAvatar>
    );
  }
);

ListItemAvatar.displayName = 'ListItemAvatar';

// ============================================================================
// CDS IMAGE LIST
// ============================================================================

export interface ImageListProps {
  children: React.ReactNode;
  /**
   * Number of columns
   * @default 2
   */
  cols?: number;
  /**
   * Gap between items (px)
   * @default 8
   */
  gap?: number;
  /**
   * Row height (px or 'auto')
   * @default 'auto'
   */
  rowHeight?: number | 'auto';
  className?: string;
  sx?: any;
}

const StyledMuiImageList = styled(MuiImageList)(({ theme }) => ({
  '& .MuiImageListItem-root': {
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
}));

/**
 * CDS Image List Component
 *
 * @example
 * <ImageList cols={3} gap={8}>
 *   <ImageListItem>
 *     <img src="/photo1.jpg" alt="Photo 1" />
 *   </ImageListItem>
 * </ImageList>
 */
export const ImageList = React.forwardRef<HTMLUListElement, ImageListProps>(
  ({ children, cols = 2, gap = 8, rowHeight = 'auto', className, sx }, ref) => {
    return (
      <StyledMuiImageList
        ref={ref}
        cols={cols}
        gap={gap}
        rowHeight={rowHeight}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiImageList>
    );
  }
);

ImageList.displayName = 'ImageList';

// ============================================================================
// CDS IMAGE LIST ITEM
// ============================================================================

export interface ImageListItemProps {
  children: React.ReactNode;
  /**
   * Number of columns this item spans
   * @default 1
   */
  cols?: number;
  /**
   * Number of rows this item spans
   * @default 1
   */
  rows?: number;
  className?: string;
  sx?: any;
}

const StyledMuiImageListItem = styled(MuiImageListItem)(({ theme }) => ({
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
    background: `linear-gradient(to top, ${theme.palette.backdrop?.dark || 'rgba(0,0,0,0.7)'} 0%, ${theme.palette.backdrop?.light || 'rgba(0,0,0,0.3)'} 70%, rgba(0,0,0,0) 100%)`,
  },

  '& .MuiImageListItemBar-title': {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },

  '& .MuiImageListItemBar-subtitle': {
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const ImageListItem = React.forwardRef<HTMLLIElement, ImageListItemProps>(
  ({ children, cols = 1, rows = 1, className, sx }, ref) => {
    return (
      <StyledMuiImageListItem
        ref={ref}
        cols={cols}
        rows={rows}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiImageListItem>
    );
  }
);

ImageListItem.displayName = 'ImageListItem';

// ============================================================================
// CDS TYPOGRAPHY
// ============================================================================

export interface TypographyProps {
  /**
   * Typography variant (semantic)
   * @default 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'inherit';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Disable bottom margin
   * @default false
   */
  noWrap?: boolean;
  /**
   * HTML element to render
   */
  component?: React.ElementType;
  className?: string;
  sx?: any;
}

const StyledMuiTypography = styled(MuiTypography)(({ theme }) => ({
  // CDS typography already defined in theme
}));

/**
 * CDS Typography Component
 * Simple, semantic text component
 *
 * @example
 * <Typography variant="h1">Page Title</Typography>
 * <Typography variant="body1" color="textSecondary">
 *   Body text
 * </Typography>
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      children,
      color,
      align,
      noWrap,
      component,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiTypography
        ref={ref}
        variant={variant}
        color={color}
        align={align}
        noWrap={noWrap}
        component={component}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiTypography>
    );
  }
);

Typography.displayName = 'Typography';

// ============================================================================
// EXPORTS
// ============================================================================

export default Avatar;
