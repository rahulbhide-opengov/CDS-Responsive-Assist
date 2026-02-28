/**
 * CDS Layout Components (CDS-First Architecture)
 * Layout components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - elevation: 'none' | 'low' | 'medium' | 'high' (not numeric)
 * - ariaLabel (not aria-label)
 * - Semantic prop names aligned with CDS design system
 */

import React from 'react';
import {
  Container as MuiContainer,
  Box as MuiBox,
  Stack as MuiStack,
  Grid as MuiGrid,
  Paper as MuiPaper,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardMedia as MuiCardMedia,
  Divider as MuiDivider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Elevation Levels (Design Language)
 */
export type CDSElevation = 'none' | 'low' | 'medium' | 'high';

/**
 * CDS Container Props (CDS API)
 */
export interface ContainerProps {
  /**
   * Maximum width of container
   * @default 'lg'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

  /**
   * Disable horizontal padding
   * @default false
   */
  disableGutters?: boolean;

  /**
   * Container is fixed (not fluid)
   * @default false
   */
  fixed?: boolean;

  /**
   * Children elements
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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS Box Props (CDS API)
 */
export interface BoxProps {
  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch for styling)
   */
  sx?: any;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS Stack Props (CDS API)
 */
export interface StackProps {
  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Layout direction
   * @default 'column'
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * Spacing between children (theme spacing units)
   * @default 0
   */
  spacing?: number;

  /**
   * Divider element between children
   */
  divider?: React.ReactNode;

  /**
   * Align items
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

  /**
   * Justify content
   */
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS Grid Props (CDS API)
 */
export interface GridProps {
  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Is this a grid container (vs grid item)
   * @default false
   */
  container?: boolean;

  /**
   * Is this a grid item (vs grid container)
   * @default false
   */
  item?: boolean;

  /**
   * Spacing between grid items (theme spacing units)
   * @default 0
   */
  spacing?: number;

  /**
   * Column width (1-12) for all breakpoints
   */
  xs?: number | 'auto' | boolean;

  /**
   * Column width (1-12) for small breakpoint and up
   */
  sm?: number | 'auto' | boolean;

  /**
   * Column width (1-12) for medium breakpoint and up
   */
  md?: number | 'auto' | boolean;

  /**
   * Column width (1-12) for large breakpoint and up
   */
  lg?: number | 'auto' | boolean;

  /**
   * Column width (1-12) for extra large breakpoint and up
   */
  xl?: number | 'auto' | boolean;

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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS Paper Props (CDS API)
 */
export interface PaperProps {
  /**
   * CDS elevation level - defines shadow depth
   * @default 'low'
   */
  elevation?: CDSElevation;

  /**
   * Square corners (no border radius)
   * @default false
   */
  square?: boolean;

  /**
   * Children elements
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

  /**
   * Component to render as
   */
  component?: React.ElementType;

  /**
   * Outlined variant (instead of elevated)
   * @default false
   */
  variant?: 'elevation' | 'outlined';
}

/**
 * CDS Card Props (CDS API)
 */
export interface CardProps {
  /**
   * CDS elevation level - defines shadow depth
   * @default 'low'
   */
  elevation?: CDSElevation;

  /**
   * Raised state (enhanced elevation on hover)
   * @default true
   */
  raised?: boolean;

  /**
   * Children elements
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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS CardHeader Props (CDS API)
 */
export interface CardHeaderProps {
  /**
   * Title content
   */
  title?: React.ReactNode;

  /**
   * Subtitle content
   */
  subtitle?: React.ReactNode;

  /**
   * Avatar element (left side)
   */
  avatar?: React.ReactNode;

  /**
   * Action element (right side)
   */
  action?: React.ReactNode;

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
 * CDS CardContent Props (CDS API)
 */
export interface CardContentProps {
  /**
   * Children elements
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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS CardActions Props (CDS API)
 */
export interface CardActionsProps {
  /**
   * Children elements (typically buttons)
   */
  children?: React.ReactNode;

  /**
   * Disable spacing between actions
   * @default false
   */
  disableSpacing?: boolean;

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
 * CDS CardMedia Props (CDS API)
 */
export interface CardMediaProps {
  /**
   * Image source URL
   */
  image?: string;

  /**
   * Media component (img, video, etc)
   * @default 'div'
   */
  component?: React.ElementType;

  /**
   * Alt text for image
   */
  alt?: string;

  /**
   * Height of media (CSS value)
   */
  height?: number | string;

  /**
   * Source element for video/audio
   */
  src?: string;

  /**
   * Children elements
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
 * CDS Section Props (CDS API)
 */
export interface SectionProps {
  /**
   * Children elements
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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

/**
 * CDS Divider Props (CDS API)
 */
export interface DividerProps {
  /**
   * Orientation of divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Divider variant
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';

  /**
   * Text content (creates divider with text)
   */
  children?: React.ReactNode;

  /**
   * Text alignment when children provided
   * @default 'center'
   */
  textAlign?: 'left' | 'center' | 'right';

  /**
   * Flex item behavior
   * @default false
   */
  flexItem?: boolean;

  /**
   * Light variant
   * @default false
   */
  light?: boolean;

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

  /**
   * Component to render as
   */
  component?: React.ElementType;
}

// ============================================================================
// INTERNAL UTILITIES (Hidden from developers)
// ============================================================================

/**
 * Maps CDS elevation to MUI numeric elevation
 * THIS IS INTERNAL - developers never see this
 */
const getMuiElevationFromCDS = (elevation?: CDSElevation): number => {
  switch (elevation) {
    case 'none':
      return 0;
    case 'low':
      return 2;
    case 'medium':
      return 4;
    case 'high':
      return 8;
    default:
      return 2; // Default to 'low'
  }
};

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

/**
 * Styled MUI Container with CDS tokens
 */
const StyledMuiContainer = styled(MuiContainer)(({ theme }) => ({
  // CDS responsive padding (mobile-first)
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
 * Styled MUI Box with CDS tokens
 */
const StyledMuiBox = styled(MuiBox)(({ theme }) => ({
  // Box is intentionally flexible, only ensuring proper box-sizing
  boxSizing: 'border-box',
}));

/**
 * Styled MUI Stack with CDS tokens
 */
const StyledMuiStack = styled(MuiStack)(({ theme }) => ({
  '& > *': {
    minWidth: 0, // Prevent flex children overflow
    minHeight: 0,
  },
}));

/**
 * Styled MUI Grid with CDS tokens
 */
const StyledMuiGrid = styled(MuiGrid)(({ theme }) => ({
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
 * Styled MUI Paper with CDS tokens
 */
const StyledMuiPaper = styled(MuiPaper)(({ theme }) => ({
  // CDS border radius
  borderRadius: theme.shape.borderRadius, // 4px

  // CDS padding
  padding: theme.spacing(2), // 16px default

  // CDS transitions
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

/**
 * Styled MUI Card with CDS tokens
 */
const StyledMuiCard = styled(MuiCard)(({ theme }) => ({
  // CDS border radius
  borderRadius: theme.shape.borderRadius, // 4px

  // CDS transitions
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),

  // Hover effect (only if data-raised is true)
  '&[data-raised="true"]:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
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
 * Styled MUI Box for Section with CDS tokens
 */
const StyledMuiSection = styled(MuiBox)(({ theme }) => ({
  // CDS responsive margin between sections (mobile-first)
  marginBottom: theme.spacing(4), // 16px mobile
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(5), // 20px tablet
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6), // 24px desktop
  },

  // CDS responsive padding
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
 * Styled MUI Container for PageContainer with CDS tokens
 */
const StyledMuiPageContainer = styled(MuiContainer)(({ theme }) => ({
  // CDS responsive vertical padding (mobile-first)
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

/**
 * Styled MUI CardHeader with CDS tokens
 */
const StyledMuiCardHeader = styled(MuiCardHeader)(({ theme }) => ({
  // Padding is handled by parent Card component
}));

/**
 * Styled MUI CardContent with CDS tokens
 */
const StyledMuiCardContent = styled(MuiCardContent)(({ theme }) => ({
  // Padding is handled by parent Card component
}));

/**
 * Styled MUI CardActions with CDS tokens
 */
const StyledMuiCardActions = styled(MuiCardActions)(({ theme }) => ({
  // Padding is handled by parent Card component
}));

/**
 * Styled MUI CardMedia with CDS tokens
 */
const StyledMuiCardMedia = styled(MuiCardMedia)(({ theme }) => ({
  // Standard card media styling
}));

/**
 * Styled MUI Divider with CDS tokens
 */
const StyledMuiDivider = styled(MuiDivider)(({ theme }) => ({
  // CDS border color
  borderColor: theme.palette.divider,

  // Vertical divider spacing
  '&.MuiDivider-vertical': {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  // Divider with text
  '&.MuiDivider-withChildren': {
    '&::before, &::after': {
      borderColor: theme.palette.divider,
    },
  },
}));

// ============================================================================
// CDS LAYOUT COMPONENTS
// ============================================================================

/**
 * CDS Container Component
 *
 * Max-width content wrapper with responsive breakpoints
 *
 * @example
 * <CDSContainer maxWidth="lg">
 *   <YourContent />
 * </CDSContainer>
 */
export const CDSContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'lg',
      disableGutters = false,
      fixed = false,
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiContainer
        ref={ref}
        maxWidth={maxWidth}
        disableGutters={disableGutters}
        fixed={fixed}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiContainer>
    );
  }
);

CDSContainer.displayName = 'CDSContainer';

/**
 * CDS Box Component
 *
 * Generic container with sx prop for custom styling using CDS tokens
 * Use this for one-off layouts with CDS tokens
 *
 * @example
 * <CDSBox sx={{ p: 3, bgcolor: 'primary.main' }}>
 *   Content
 * </CDSBox>
 */
export const CDSBox = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiBox
        ref={ref}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiBox>
    );
  }
);

CDSBox.displayName = 'CDSBox';

/**
 * CDS Stack Component
 *
 * One-dimensional flexbox layout with CDS spacing
 *
 * @example
 * <CDSStack spacing={3} direction="column">
 *   <Item />
 *   <Item />
 * </CDSStack>
 */
export const CDSStack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      direction = 'column',
      spacing = 0,
      divider,
      alignItems,
      justifyContent,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiStack
        ref={ref}
        direction={direction}
        spacing={spacing}
        divider={divider}
        alignItems={alignItems}
        justifyContent={justifyContent}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiStack>
    );
  }
);

CDSStack.displayName = 'CDSStack';

/**
 * CDS Grid Component
 *
 * 12-column responsive grid system with CDS spacing
 *
 * @example
 * <CDSGrid container spacing={3}>
 *   <CDSGrid item xs={12} sm={6} md={4}>
 *     <Card />
 *   </CDSGrid>
 * </CDSGrid>
 */
export const CDSGrid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      container = false,
      item = false,
      spacing = 0,
      xs,
      sm,
      md,
      lg,
      xl,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiGrid
        ref={ref}
        container={container}
        item={item}
        spacing={spacing}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiGrid>
    );
  }
);

CDSGrid.displayName = 'CDSGrid';

/**
 * CDS Paper Component
 *
 * Elevated surface with shadow
 *
 * Use CDS elevation prop, not MUI numeric elevation
 *
 * @example
 * // CDS Way (CORRECT)
 * <CDSPaper elevation="low" sx={{ p: 3 }}>
 *   Content
 * </CDSPaper>
 *
 * <CDSPaper elevation="high" sx={{ p: 3 }}>
 *   Important Content
 * </CDSPaper>
 */
export const CDSPaper = React.forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      elevation = 'low',
      square = false,
      variant = 'elevation',
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    // Map CDS elevation to MUI numeric elevation (internal)
    const muiElevation = getMuiElevationFromCDS(elevation);

    return (
      <StyledMuiPaper
        ref={ref}
        elevation={muiElevation}
        square={square}
        variant={variant}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiPaper>
    );
  }
);

CDSPaper.displayName = 'CDSPaper';

/**
 * CDS Card Component
 *
 * Content card with elevation and rounded corners
 *
 * Use CDS elevation prop, not MUI numeric elevation
 *
 * @example
 * // CDS Way (CORRECT)
 * <CDSCard elevation="low">
 *   <CDSCardHeader title="Card Title" />
 *   <CDSCardContent>Content here</CDSCardContent>
 *   <CDSCardActions>
 *     <CDSButton>Action</CDSButton>
 *   </CDSCardActions>
 * </CDSCard>
 *
 * // High elevation card
 * <CDSCard elevation="high" raised>
 *   Important content
 * </CDSCard>
 */
export const CDSCard = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = 'low',
      raised = true,
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    // Map CDS elevation to MUI numeric elevation (internal)
    const muiElevation = getMuiElevationFromCDS(elevation);

    return (
      <StyledMuiCard
        ref={ref}
        elevation={muiElevation}
        className={className}
        sx={sx}
        id={id}
        component={component}
        data-raised={raised}
      >
        {children}
      </StyledMuiCard>
    );
  }
);

CDSCard.displayName = 'CDSCard';

/**
 * CDS CardHeader Component
 *
 * Card header with title, subtitle, avatar, and action
 *
 * @example
 * <CDSCardHeader
 *   title="Card Title"
 *   subtitle="Card subtitle"
 *   avatar={<Avatar>A</Avatar>}
 *   action={<IconButton><MoreVertIcon /></IconButton>}
 * />
 */
export const CDSCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      title,
      subtitle,
      avatar,
      action,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiCardHeader
        ref={ref}
        title={title}
        subheader={subtitle}
        avatar={avatar}
        action={action}
        className={className}
        sx={sx}
        id={id}
      />
    );
  }
);

CDSCardHeader.displayName = 'CDSCardHeader';

/**
 * CDS CardContent Component
 *
 * Card content area
 *
 * @example
 * <CDSCardContent>
 *   <Typography>Card content goes here</Typography>
 * </CDSCardContent>
 */
export const CDSCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (
    {
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiCardContent
        ref={ref}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiCardContent>
    );
  }
);

CDSCardContent.displayName = 'CDSCardContent';

/**
 * CDS CardActions Component
 *
 * Card actions area (typically buttons)
 *
 * @example
 * <CDSCardActions>
 *   <CDSButton variant="primary">Save</CDSButton>
 *   <CDSButton variant="secondary">Cancel</CDSButton>
 * </CDSCardActions>
 */
export const CDSCardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  (
    {
      children,
      disableSpacing = false,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiCardActions
        ref={ref}
        disableSpacing={disableSpacing}
        className={className}
        sx={sx}
        id={id}
      >
        {children}
      </StyledMuiCardActions>
    );
  }
);

CDSCardActions.displayName = 'CDSCardActions';

/**
 * CDS CardMedia Component
 *
 * Card media area (images, videos)
 *
 * @example
 * <CDSCardMedia
 *   component="img"
 *   height={200}
 *   image="/path/to/image.jpg"
 *   alt="Image description"
 * />
 */
export const CDSCardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  (
    {
      image,
      component = 'div',
      alt,
      height,
      src,
      children,
      className,
      sx,
      id,
    },
    ref
  ) => {
    return (
      <StyledMuiCardMedia
        ref={ref}
        image={image}
        component={component}
        title={alt}
        sx={{
          height,
          ...sx,
        }}
        src={src}
        className={className}
        id={id}
      >
        {children}
      </StyledMuiCardMedia>
    );
  }
);

CDSCardMedia.displayName = 'CDSCardMedia';

/**
 * CDS Section Component
 *
 * Page section with consistent spacing
 *
 * @example
 * <CDSSection>
 *   <Typography variant="h4">Section Title</Typography>
 *   <Typography>Content...</Typography>
 * </CDSSection>
 */
export const CDSSection = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiSection
        ref={ref}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiSection>
    );
  }
);

CDSSection.displayName = 'CDSSection';

/**
 * CDS PageContainer Component
 *
 * Full-page container with consistent padding
 *
 * @example
 * <CDSPageContainer>
 *   <Typography variant="h3">Page Title</Typography>
 *   <CDSSection>...</CDSSection>
 * </CDSPageContainer>
 */
export const CDSPageContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'lg',
      disableGutters = false,
      fixed = false,
      children,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiPageContainer
        ref={ref}
        maxWidth={maxWidth}
        disableGutters={disableGutters}
        fixed={fixed}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiPageContainer>
    );
  }
);

CDSPageContainer.displayName = 'CDSPageContainer';

/**
 * CDS Divider Component
 *
 * Visual separator line with CDS styling
 *
 * @example
 * // Horizontal divider
 * <CDSDivider />
 *
 * // Vertical divider
 * <CDSDivider orientation="vertical" />
 *
 * // Divider with text
 * <CDSDivider>OR</CDSDivider>
 */
export const CDSDivider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'fullWidth',
      children,
      textAlign = 'center',
      flexItem = false,
      light = false,
      className,
      sx,
      id,
      component,
    },
    ref
  ) => {
    return (
      <StyledMuiDivider
        ref={ref}
        orientation={orientation}
        variant={variant}
        textAlign={textAlign}
        flexItem={flexItem}
        light={light}
        className={className}
        sx={sx}
        id={id}
        component={component}
      >
        {children}
      </StyledMuiDivider>
    );
  }
);

CDSDivider.displayName = 'CDSDivider';

// ============================================================================
// EXPORTS
// ============================================================================

export default CDSContainer;
