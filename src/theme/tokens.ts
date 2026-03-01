/**
 * CDS Design Tokens
 * Complete token definitions for the Component Design System
 * ALL VALUES ARE CDS BRAND COLORS - NOT MUI DEFAULTS
 *
 * COLOR SYSTEM OVERVIEW:
 * =====================
 * Primary: Blurple scale (50-900) with main at 700 (#4B3FFF)
 * Secondary: Slate scale (50-900) with main at 700 (#546574)
 *
 * Light Theme:
 * - Primary main: Blurple 700 (#4B3FFF)
 * - Primary contrast text: #FFFFFF
 * - State colors based on Blurple 700 with opacity
 *
 * Dark Theme:
 * - Primary main: Blurple 700 (#4B3FFF) - same as light
 * - Primary contrast text: rgba(0,0,0,0.87)
 * - State colors based on #94A8FF (lighter variant) with increased opacity
 *
 * Secondary follows the same pattern with Slate colors.
 */

/**
 * Color Tokens
 * All color values for the CDS system using CDS brand colors
 */
export const colorTokens = {
  // Primary Colors - Blurple Scale
  primary: {
    50: '#f5f3ff',        // Blurple 50 (Lightest)
    100: '#eef1fc',       // Blurple 100 (Very Light Surface)
    200: '#d6d4ff',       // Blurple 200 (Light Surface)
    400: '#a098ff',       // Blurple 400 (Medium Light)
    700: '#4b3fff',       // Blurple 700 (CDS Primary Main)
    900: '#19009b',       // Blurple 900 (Darkest)
    main: '#4b3fff',      // Blurple 700 (CDS Primary)
    light: '#eef1fc',     // Blurple 100 (Light Surface)
    dark: '#19009b',      // Blurple 900 (Dark)
    contrastText: '#ffffff',  // Light theme
    contrastTextDark: 'rgba(0, 0, 0, 0.87)',  // Dark theme
  },

  // Secondary Colors - Slate Scale
  secondary: {
    50: '#f8f9fa',        // Slate 50 (Lightest)
    100: '#e9ecef',       // Slate 100 (Very Light)
    200: '#cbd2d9',       // Slate 200 (Light)
    400: '#8e9ba8',       // Slate 400 (Medium)
    700: '#546574',       // Slate 700 (CDS Secondary Main)
    900: '#2d3748',       // Slate 900 (Darkest)
    main: '#546574',      // Slate 700 (CDS Secondary Gray)
    light: '#e9ecef',     // Slate 100
    dark: '#2d3748',      // Slate 900
    contrastText: '#ffffff',  // Light theme
    contrastTextDark: 'rgba(0, 0, 0, 0.87)',  // Dark theme
  },

  // Secondary Text Gray (for backward compatibility)
  secondaryGray: {
    main: '#546574',      // CDS Secondary Gray (Descriptive text)
  },

  // Semantic Colors
  error: {
    main: '#d32f2f',      // CDS Error Red
    alternate: '#d33423', // CDS Error Alternate (Forms)
    light: '#ef5350',     // CDS Error Light
    dark: '#b71c1c',      // CDS Error Dark (Hover)
    darkText: '#5f2120',  // CDS Error Dark Text
    contrastText: '#ffffff',
  },

  success: {
    main: '#2e7d32',      // CDS Success Green
    light: '#4caf50',     // CDS Success Light
    dark: '#1b5e20',      // CDS Success Dark (Hover)
    darkText: '#1e4620',  // CDS Success Dark Text
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ed6c02',      // CDS Warning Orange
    alternate: '#f5a300', // CDS Warning Alternate
    light: '#faaf00',     // CDS Warning Light
    dark: '#e65100',      // CDS Warning Dark (Hover)
    darkText: '#663c00',  // CDS Warning Dark Text
    contrastText: '#ffffff',
  },

  info: {
    main: '#0288d1',      // CDS Info Blue
    alternate: '#1976d2', // CDS Info Alternate
    light: '#42a5f5',     // CDS Info Light
    medium: '#1565c0',    // CDS Info Medium
    dark: '#01579b',      // CDS Info Dark (Hover)
    darkText: '#014361',  // CDS Info Dark Text
    contrastText: '#ffffff',
  },

  // Grey Scale
  grey: {
    50: '#fafafa',        // Light backgrounds
    100: '#f2f2f2',       // Disabled backgrounds
    200: '#eeeeee',       // Very light grey
    300: '#e0e0e0',       // Default button backgrounds
    400: '#d5d5d5',       // Hover states
    500: '#bdbdbd',       // Borders
    600: '#adafb1',       // Secondary borders
    700: '#616161',       // Dark text/backgrounds
    800: '#424242',       // Darker backgrounds
    900: '#212121',       // Darkest backgrounds
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },

  // Text Colors
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',    // 87% opacity - Main text
    secondary: 'rgba(0, 0, 0, 0.6)',   // 60% opacity - Secondary text
    tertiary: 'rgba(0, 0, 0, 0.54)',   // 54% opacity - Tertiary text, icons
    disabled: 'rgba(0, 0, 0, 0.38)',   // 38% opacity - Disabled text
    hint: 'rgba(0, 0, 0, 0.26)',       // 26% opacity - Placeholder text
  },

  // Background Colors
  background: {
    default: '#fafafa',   // Page background
    paper: '#ffffff',     // Component backgrounds
    tertiary: '#f2f2f2',  // Disabled/inactive backgrounds
  },

  // Action Colors - CDS opacity values
  action: {
    active: 'rgba(0, 0, 0, 0.54)',           // Active states - 54%
    hover: 'rgba(0, 0, 0, 0.04)',            // Hover backgrounds - 4%
    hoverOpacity: 0.04,
    subtle: 'rgba(0, 0, 0, 0.02)',           // Subtle interactions - 2%
    selected: 'rgba(0, 0, 0, 0.08)',         // Selected backgrounds - 8%
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',         // Disabled elements - 26%
    disabledBackground: 'rgba(0, 0, 0, 0.12)', // Disabled button backgrounds - 12%
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',            // Focus rings - 12%
    focusOpacity: 0.12,
    track: 'rgba(0, 0, 0, 0.11)',            // Progress track - 11%
    activatedOpacity: 0.12,
  },

  // Divider
  divider: 'rgba(0, 0, 0, 0.12)',  // Borders, dividers - 12%

  // Backdrop/Overlay Colors
  backdrop: {
    light: 'rgba(0, 0, 0, 0.3)',   // Light backdrop - 30%
    standard: 'rgba(0, 0, 0, 0.5)', // Standard backdrop - 50%
    dark: 'rgba(0, 0, 0, 0.7)',     // Dark backdrop - 70%
    heavy: 'rgba(0, 0, 0, 0.8)',    // Heavy backdrop - 80%
  },

  // White Overlays (for dark backgrounds)
  whiteOverlay: {
    hover: 'rgba(255, 255, 255, 0.12)',    // White hover - 12%
    selected: 'rgba(255, 255, 255, 0.15)', // White selected - 15%
    active: 'rgba(255, 255, 255, 0.54)',   // White active - 54%
  },

  // Primary State Colors - Light Theme (Blurple 700 based)
  primaryStates: {
    light: {
      hover: 'rgba(75, 63, 255, 0.04)',        // Blurple 700 @ 4%
      selected: 'rgba(75, 63, 255, 0.08)',     // Blurple 700 @ 8%
      focus: 'rgba(75, 63, 255, 0.12)',        // Blurple 700 @ 12%
      focusVisible: 'rgba(75, 63, 255, 0.30)', // Blurple 700 @ 30%
      outlinedBorder: 'rgba(75, 63, 255, 0.50)', // Blurple 700 @ 50%
    },
    dark: {
      hover: 'rgba(148, 168, 255, 0.08)',      // #94A8FF @ 8%
      selected: 'rgba(148, 168, 255, 0.16)',   // #94A8FF @ 16%
      focus: 'rgba(148, 168, 255, 0.12)',      // #94A8FF @ 12%
      focusVisible: 'rgba(148, 168, 255, 0.30)', // #94A8FF @ 30%
      outlinedBorder: 'rgba(148, 168, 255, 0.50)', // #94A8FF @ 50%
    },
  },

  // Secondary State Colors - Light Theme (Slate 700 based)
  secondaryStates: {
    light: {
      hover: 'rgba(84, 101, 116, 0.04)',       // #546574 @ 4%
      selected: 'rgba(84, 101, 116, 0.08)',    // #546574 @ 8%
      focus: 'rgba(84, 101, 116, 0.12)',       // #546574 @ 12%
      focusVisible: 'rgba(84, 101, 116, 0.30)', // #546574 @ 30%
      outlinedBorder: 'rgba(84, 101, 116, 0.50)', // #546574 @ 50%
    },
    dark: {
      hover: 'rgba(156, 177, 195, 0.08)',      // #9CB1C3 @ 8%
      selected: 'rgba(156, 177, 195, 0.16)',   // #9CB1C3 @ 16%
      focus: 'rgba(156, 177, 195, 0.12)',      // #9CB1C3 @ 12%
      focusVisible: 'rgba(156, 177, 195, 0.30)', // #9CB1C3 @ 30%
      outlinedBorder: 'rgba(156, 177, 195, 0.50)', // #9CB1C3 @ 50%
    },
  },

  // Blurple 700 Opacity Variants (for backward compatibility)
  primaryOpacity: {
    4: 'rgba(75, 63, 255, 0.04)',   // Blurple 700 @ 4% - Hover background
    8: 'rgba(75, 63, 255, 0.08)',   // Blurple 700 @ 8% - Selected background
    12: 'rgba(75, 63, 255, 0.12)',  // Blurple 700 @ 12% - Light background
    20: 'rgba(75, 63, 255, 0.2)',   // Blurple 700 @ 20% - Medium background
    30: 'rgba(75, 63, 255, 0.3)',   // Blurple 700 @ 30% - Track/Rail
    38: 'rgba(75, 63, 255, 0.38)',  // Blurple 700 @ 38% - Disabled
    50: 'rgba(75, 63, 255, 0.5)',   // Blurple 700 @ 50% - Border
    70: 'rgba(75, 63, 255, 0.7)',   // Blurple 700 @ 70% - Emphasis
    100: 'rgba(75, 63, 255, 1)',    // Blurple 700 @ 100% - Full
  },

  // Secondary Color Opacity Variants (for backward compatibility)
  secondaryOpacity: {
    4: 'rgba(84, 101, 116, 0.04)',    // Slate 700 @ 4% - Hover background
    8: 'rgba(84, 101, 116, 0.08)',    // Slate 700 @ 8% - Selected background
    12: 'rgba(84, 101, 116, 0.12)',   // Slate 700 @ 12% - Focus
    30: 'rgba(84, 101, 116, 0.3)',    // Slate 700 @ 30% - Track/Rail
    50: 'rgba(84, 101, 116, 0.5)',    // Slate 700 @ 50% - Border
    70: 'rgba(84, 101, 116, 0.7)',    // Slate 700 @ 70% - Emphasis
  },

  // Error Color Opacity Variants
  errorOpacity: {
    4: 'rgba(211, 47, 47, 0.04)',   // Hover background
    8: 'rgba(211, 47, 47, 0.08)',   // Selected background
    50: 'rgba(211, 47, 47, 0.5)',   // Border
    70: 'rgba(211, 47, 47, 0.7)',   // Emphasis
  },

  // Success Color Opacity Variants
  successOpacity: {
    4: 'rgba(46, 125, 50, 0.04)',   // Hover background
    8: 'rgba(46, 125, 50, 0.08)',   // Selected background
    50: 'rgba(46, 125, 50, 0.5)',   // Border
    70: 'rgba(46, 125, 50, 0.7)',   // Emphasis
  },

  // Warning Color Opacity Variants
  warningOpacity: {
    4: 'rgba(237, 108, 2, 0.04)',   // Hover background
    8: 'rgba(237, 108, 2, 0.08)',   // Selected background
    50: 'rgba(237, 108, 2, 0.5)',   // Border
    70: 'rgba(237, 108, 2, 0.7)',   // Emphasis
  },

  // Info Color Opacity Variants
  infoOpacity: {
    4: 'rgba(2, 136, 209, 0.04)',   // Hover background
    8: 'rgba(2, 136, 209, 0.08)',   // Selected background
    50: 'rgba(2, 136, 209, 0.5)',   // Border
    70: 'rgba(2, 136, 209, 0.7)',   // Emphasis
  },
} as const;

/**
 * Spacing Tokens
 * 4px base unit spacing scale
 */
export const spacingTokens = {
  base: 4, // 4px base unit
  // Spacing values in pixels
  values: {
    0: 0,      // 0px
    0.5: 2,    // 2px
    1: 4,      // 4px
    1.5: 6,    // 6px
    2: 8,      // 8px
    3: 12,     // 12px
    4: 16,     // 16px
    5: 20,     // 20px
    6: 24,     // 24px
    7: 28,     // 28px
    8: 32,     // 32px
    9: 36,     // 36px
    10: 40,    // 40px
    11: 44,    // 44px
    12: 48,    // 48px
  },
} as const;

/**
 * Typography Tokens
 * CDS BRAND TYPOGRAPHY - DM Sans
 */
export const typographyTokens = {
  fontFamily: '"DM Sans", "DM_Sans:Regular", "DM_Sans:Medium", sans-serif',

  // Font sizes
  fontSize: 14, // Base font size in px

  // Font weights - DM Sans weights
  fontWeightLight: 300,     // Light
  fontWeightRegular: 400,   // Regular
  fontWeightMedium: 500,    // Medium
  fontWeightSemiBold: 600,  // SemiBold (CDS standard for headings)
  fontWeightBold: 700,      // Bold

  // Variants - CDS Typography Scale
  h1: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '3rem',     // 48px - Display Large
    lineHeight: 1.2,
    letterSpacing: '-0.03125em', // -0.5px
  },

  h2: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '2.5rem',   // 40px - Display Medium
    lineHeight: 1.2,
    letterSpacing: '-0.01875em', // -0.3px
  },

  h3: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '2rem',     // 32px - Display Small
    lineHeight: 1.2,
    letterSpacing: '-0.0125em', // -0.2px
  },

  h4: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '1rem',     // 16px - Title Large
    lineHeight: 1.25,     // 20px
    letterSpacing: '-0.0125em', // -0.2px
  },

  h5: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '0.875rem', // 14px - Title Medium
    lineHeight: 1.2857,   // 18px
    letterSpacing: '0em',
  },

  h6: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,      // SemiBold
    fontSize: '0.75rem',  // 12px - Title Small
    lineHeight: 1.3333,   // 16px
    letterSpacing: '0em',
  },

  subtitle1: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,      // Regular
    fontSize: '1rem',     // 16px
    lineHeight: 1.75,
    letterSpacing: '0.00938em', // 0.15px
  },

  subtitle2: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,      // Medium
    fontSize: '0.875rem', // 14px
    lineHeight: 1.57,
    letterSpacing: '0.00714em', // 0.1px
  },

  body1: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,      // Regular
    fontSize: '1rem',     // 16px - Body Large
    lineHeight: 1.25,     // 20px
    letterSpacing: '0.00938em', // 0.15px
  },

  body2: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,      // Regular
    fontSize: '0.875rem', // 14px - Body Medium (Default)
    lineHeight: 1.2857,   // 18px
    letterSpacing: '0.01214em', // 0.17px
  },

  body3: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,      // Regular
    fontSize: '0.75rem',  // 12px - Body Small
    lineHeight: 1.3333,   // 16px
    letterSpacing: '0.01417em', // 0.17px
  },

  button: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,      // Medium
    fontSize: '0.875rem', // 14px
    lineHeight: 1.7143,   // 24px
    letterSpacing: '0.02857em', // 0.4px
    textTransform: 'uppercase' as const,
  },

  caption: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,      // Medium (or 400 for Regular variant)
    fontSize: '0.75rem',  // 12px
    lineHeight: 1.3333,   // 16px
    letterSpacing: '0.03333em', // 0.4px
  },

  overline: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,      // Regular
    fontSize: '0.75rem',  // 12px
    lineHeight: 2.66,
    letterSpacing: '0.08333em', // 1px
    textTransform: 'uppercase' as const,
  },
} as const;

/**
 * Sizing Tokens
 * Component sizes and dimensions
 */
export const sizingTokens = {
  // Touch Targets (WCAG AA)
  touchTarget: {
    min: 48, // Minimum touch target size in px
  },

  // Icon Sizes
  icon: {
    small: 20,
    medium: 24,
    large: 32,
  },

  // Button Heights
  button: {
    small: 32,
    medium: 40,
    large: 48,
  },

  // Avatar Sizes
  avatar: {
    small: 24,
    medium: 40,
    large: 56,
  },

  // App Bar Height
  appBar: {
    mobile: 56,
    desktop: 64,
  },

  // Drawer Width
  drawer: {
    standard: 240,
    wide: 320,
  },
} as const;

/**
 * Elevation Tokens
 * Box shadow values for depth/elevation
 */
export const elevationTokens = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
] as const;

/**
 * Z-Index Tokens
 * Stacking order for layered components
 */
export const zIndexTokens = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

/**
 * Border Radius Tokens
 * Corner radius values
 */
export const borderRadiusTokens = {
  none: 0,
  extraSmall: 2,   // 2px - chips, text skeletons
  small: 4,        // 4px - DEFAULT - buttons, inputs, cards
  medium: 8,       // 8px - rounded containers
  large: 12,       // 12px - prominent cards
  circular: '50%', // Circular - avatars, FABs
} as const;

/**
 * Transition Tokens
 * Animation duration and easing
 */
export const transitionTokens = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },

  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
} as const;

/**
 * Breakpoint Tokens
 * Responsive breakpoint values
 */
export const breakpointTokens = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
} as const;
