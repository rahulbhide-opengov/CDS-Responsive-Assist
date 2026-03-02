/**
 * CDS Logo Component
 * OpenGov branding components for consistent logo usage
 */

import React from 'react';
import { styled } from '@mui/material/styles';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Logo variant types
 */
export type LogoVariant =
  | 'fullcolor'   // Full color (primary)
  | 'blurple'     // Blurple monochrome
  | 'black'       // Black monochrome
  | 'gray'        // Gray monochrome
  | 'white'       // White monochrome (for dark backgrounds)
  | 'reverse';    // Reverse (for dark mode)

/**
 * Wand variant types
 */
export type WandVariant =
  | 'tricolor'    // Tri-colored (primary)
  | 'blurple'     // Blurple monochrome
  | 'black'       // Black monochrome
  | 'gray'        // Gray monochrome
  | 'white';      // White monochrome

/**
 * Logo size presets
 */
export type LogoSize = 'small' | 'medium' | 'large';

/**
 * Logo type (full logo or wand icon only)
 */
export type LogoType = 'logo' | 'wand';

/**
 * Logo Props
 */
export interface LogoProps {
  /**
   * Logo type - full logo or wand icon
   * @default 'logo'
   */
  type?: LogoType;

  /**
   * Logo variant (color scheme)
   * @default 'fullcolor'
   */
  variant?: LogoVariant | WandVariant;

  /**
   * Size preset
   * @default 'medium'
   */
  size?: LogoSize;

  /**
   * Custom width (overrides size preset)
   */
  width?: number | string;

  /**
   * Custom height (overrides size preset)
   */
  height?: number | string;

  /**
   * Alt text for accessibility
   */
  alt?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Additional props for img element
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Get logo path based on type and variant
 */
const getLogoPath = (type: LogoType, variant: LogoVariant | WandVariant): string => {
  if (type === 'wand') {
    // Wand paths
    const wandVariant = variant as WandVariant;
    switch (wandVariant) {
      case 'tricolor':
        return '/assets/logos/wand/tricolored wand.svg';
      case 'blurple':
        return '/assets/logos/wand/Blurple/OpenGov-Wand-RGB-Blurple.svg';
      case 'black':
        return '/assets/logos/wand/Black/OpenGov-Wand-RGB-Black.svg';
      case 'gray':
        return '/assets/logos/wand/Gray/OpenGov-Wand-RGB-Gray.svg';
      case 'white':
        return '/assets/logos/wand/White/OpenGov-Wand-RGB-White.svg';
      default:
        return '/assets/logos/wand/tricolored wand.svg';
    }
  } else {
    // Logo paths
    const logoVariant = variant as LogoVariant;
    switch (logoVariant) {
      case 'fullcolor':
        return '/assets/logos/opengov/Full Color/OpenGov-Logo-RGB-Color.svg';
      case 'blurple':
        return '/assets/logos/opengov/Blurple/OpenGov-Logo-RGB-Blurple.svg';
      case 'black':
        return '/assets/logos/opengov/Black/OpenGov-Logo-RGB-Black.svg';
      case 'gray':
        return '/assets/logos/opengov/Gray/OpenGov-Logo-RGB-Gray.svg';
      case 'white':
        return '/assets/logos/opengov/White/OpenGov-Logo-RGB-White.svg';
      case 'reverse':
        return '/assets/logos/opengov/Reverse/OpenGov-Logo-RGB-Reverse.svg';
      default:
        return '/assets/logos/opengov/Full Color/OpenGov-Logo-RGB-Color.svg';
    }
  }
};

/**
 * Get size dimensions based on preset
 */
const getSizeDimensions = (size: LogoSize, type: LogoType): { width: number; height: number } => {
  if (type === 'wand') {
    // Wand is square
    switch (size) {
      case 'small':
        return { width: 32, height: 32 };
      case 'medium':
        return { width: 48, height: 48 };
      case 'large':
        return { width: 64, height: 64 };
      default:
        return { width: 48, height: 48 };
    }
  } else {
    // Logo has aspect ratio ~3.5:1
    switch (size) {
      case 'small':
        return { width: 80, height: 23 };
      case 'medium':
        return { width: 120, height: 34 };
      case 'large':
        return { width: 200, height: 57 };
      default:
        return { width: 120, height: 34 };
    }
  }
};

/**
 * Get default alt text
 */
const getDefaultAlt = (type: LogoType, variant: LogoVariant | WandVariant): string => {
  if (type === 'wand') {
    return 'OpenGov Wand Icon';
  }
  return 'OpenGov Logo';
};

// ============================================================================
// STYLED COMPONENT
// ============================================================================

const StyledLogo = styled('img')(({ theme }) => ({
  display: 'block',
  userSelect: 'none',

  // Prevent image distortion
  objectFit: 'contain',

  // Smooth transitions
  transition: theme.transitions.create(['opacity', 'transform'], {
    duration: theme.transitions.duration.short,
  }),

  // Clickable logos
  '&[data-clickable="true"]': {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
}));

// ============================================================================
// LOGO COMPONENT
// ============================================================================

/**
 * CDS Logo Component
 *
 * Displays the OpenGov logo or wand icon with consistent sizing and variants.
 *
 * @example
 * // Default logo (full color)
 * <Logo />
 *
 * @example
 * // White logo for dark backgrounds
 * <Logo variant="white" />
 *
 * @example
 * // Wand icon (tri-colored)
 * <Logo type="wand" />
 *
 * @example
 * // Small blurple logo
 * <Logo variant="blurple" size="small" />
 *
 * @example
 * // Custom size
 * <Logo width={150} height={50} />
 *
 * @example
 * // Clickable logo
 * <Logo onClick={() => navigate('/')} />
 */
export const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  (
    {
      type = 'logo',
      variant = 'fullcolor',
      size = 'medium',
      width,
      height,
      alt,
      className,
      onClick,
      imgProps,
    },
    ref
  ) => {
    // Get logo path
    const logoPath = getLogoPath(type, variant);

    // Get dimensions
    const dimensions = getSizeDimensions(size, type);
    const finalWidth = width || dimensions.width;
    const finalHeight = height || dimensions.height;

    // Get alt text
    const finalAlt = alt || getDefaultAlt(type, variant);

    return (
      <StyledLogo
        ref={ref}
        src={logoPath}
        alt={finalAlt}
        width={finalWidth}
        height={finalHeight}
        className={className}
        onClick={onClick}
        data-clickable={onClick ? 'true' : 'false'}
        {...imgProps}
      />
    );
  }
);

Logo.displayName = 'Logo';

// ============================================================================
// CONVENIENCE COMPONENTS
// ============================================================================

/**
 * OpenGov Full Logo (Full Color)
 *
 * @example
 * <OpenGovLogo size="large" />
 */
export const OpenGovLogo: React.FC<Omit<LogoProps, 'type'>> = (props) => (
  <Logo type="logo" {...props} />
);

/**
 * OpenGov Wand Icon (Tri-Colored)
 *
 * @example
 * <OpenGovWand size="medium" />
 */
export const OpenGovWand: React.FC<Omit<LogoProps, 'type'>> = (props) => (
  <Logo type="wand" variant="tricolor" {...props} />
);

// ============================================================================
// EXPORTS
// ============================================================================

export default Logo;
