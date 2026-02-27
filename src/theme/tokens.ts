/**
 * CDS Design Tokens
 * Complete token definitions for the Component Design System
 * Based on Material-UI v6.1.0 specifications
 */

/**
 * Color Tokens
 * All color values for the CDS system
 */
export const colorTokens = {
  // Primary Colors
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },

  // Secondary Colors
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },

  // Semantic Colors
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
  },

  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },

  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
  },

  // Grey Scale
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },

  // Text Colors
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },

  // Background Colors
  background: {
    default: '#fafafa',
    paper: '#ffffff',
  },

  // Action Colors
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },

  // Divider
  divider: 'rgba(0, 0, 0, 0.12)',
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
 * Font families, sizes, weights, and line heights
 */
export const typographyTokens = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

  // Font sizes
  fontSize: 14, // Base font size in px

  // Font weights
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Variants
  h1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    fontSize: '6rem',      // 96px
    lineHeight: 1.167,
    letterSpacing: '-0.01562em', // -1.5px
  },

  h2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    fontSize: '3.75rem',   // 60px
    lineHeight: 1.2,
    letterSpacing: '-0.00833em', // -0.5px
  },

  h3: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '3rem',      // 48px
    lineHeight: 1.167,
    letterSpacing: '0em',
  },

  h4: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '2.125rem',  // 34px
    lineHeight: 1.235,
    letterSpacing: '0.00735em', // 0.25px
  },

  h5: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1.5rem',    // 24px
    lineHeight: 1.334,
    letterSpacing: '0em',
  },

  h6: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',   // 20px
    lineHeight: 1.6,
    letterSpacing: '0.0075em', // 0.15px
  },

  subtitle1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',      // 16px
    lineHeight: 1.75,
    letterSpacing: '0.00938em', // 0.15px
  },

  subtitle2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',  // 14px
    lineHeight: 1.57,
    letterSpacing: '0.00714em', // 0.1px
  },

  body1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',      // 16px
    lineHeight: 1.5,
    letterSpacing: '0.00938em', // 0.15px
  },

  body2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',  // 14px
    lineHeight: 1.43,
    letterSpacing: '0.01071em', // 0.15px
  },

  button: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',  // 14px
    lineHeight: 1.75,
    letterSpacing: '0.02857em', // 0.4px
    textTransform: 'uppercase' as const,
  },

  caption: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',   // 12px
    lineHeight: 1.66,
    letterSpacing: '0.03333em', // 0.4px
  },

  overline: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',   // 12px
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
