/**
 * CDS Theme
 * Main theme configuration using CDS design tokens
 * Import and use with Material-UI ThemeProvider
 */

import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  elevationTokens,
  zIndexTokens,
  borderRadiusTokens,
  transitionTokens,
  breakpointTokens,
} from './tokens';

/**
 * CDS Theme Configuration
 * Complete Material-UI theme with all CDS tokens
 */
const themeOptions: ThemeOptions = {
  // Color Palette
  palette: {
    mode: 'light',
    primary: colorTokens.primary,
    secondary: colorTokens.secondary,
    error: colorTokens.error,
    warning: colorTokens.warning,
    info: colorTokens.info,
    success: colorTokens.success,
    grey: colorTokens.grey,
    text: colorTokens.text,
    background: colorTokens.background,
    action: colorTokens.action,
    divider: colorTokens.divider,
    backdrop: colorTokens.backdrop,
  },

  // Spacing
  spacing: spacingTokens.base, // 4px base unit

  // Typography
  typography: {
    fontFamily: typographyTokens.fontFamily,
    fontSize: typographyTokens.fontSize,
    fontWeightLight: typographyTokens.fontWeightLight,
    fontWeightRegular: typographyTokens.fontWeightRegular,
    fontWeightMedium: typographyTokens.fontWeightMedium,
    fontWeightBold: typographyTokens.fontWeightBold,
    h1: typographyTokens.h1,
    h2: typographyTokens.h2,
    h3: typographyTokens.h3,
    h4: typographyTokens.h4,
    h5: typographyTokens.h5,
    h6: typographyTokens.h6,
    subtitle1: typographyTokens.subtitle1,
    subtitle2: typographyTokens.subtitle2,
    body1: typographyTokens.body1,
    body2: typographyTokens.body2,
    button: typographyTokens.button,
    caption: typographyTokens.caption,
    overline: typographyTokens.overline,
  },

  // Shape (Border Radius)
  shape: {
    borderRadius: borderRadiusTokens.small, // 4px default
  },

  // Shadows (Elevation)
  shadows: elevationTokens,

  // Z-Index
  zIndex: zIndexTokens,

  // Transitions
  transitions: {
    duration: transitionTokens.duration,
    easing: transitionTokens.easing,
  },

  // Breakpoints
  breakpoints: {
    values: breakpointTokens.values,
  },

  // Component Overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.small,
          textTransform: 'none', // Override uppercase default
          fontWeight: typographyTokens.fontWeightMedium,
        },
        sizeSmall: {
          minHeight: 32,
          padding: '6px 16px',
        },
        sizeMedium: {
          minHeight: 40,
          padding: '8px 22px',
        },
        sizeLarge: {
          minHeight: 48,
          padding: '11px 26px',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          // Ensure minimum touch target
          minWidth: 48,
          minHeight: 48,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: borderRadiusTokens.small,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.small,
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.small,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.extraSmall,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.circular,
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 4,
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240, // Standard drawer width
        },
      },
    },

    MuiBottomNavigation: {
      defaultProps: {
        elevation: 8,
      },
    },

    MuiFab: {
      styleOverrides: {
        root: {
          minHeight: 56,
          minWidth: 56,
        },
      },
    },

    // Ensure all interactive elements meet touch target requirements
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 12, // Ensures 48px touch target with 24px icon
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 12, // Ensures 48px touch target with 24px icon
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 12,
        },
      },
    },
  },
};

/**
 * CDS Theme Instance
 * Ready-to-use theme for ThemeProvider
 *
 * @example
 * import { ThemeProvider } from '@mui/material/styles';
 * import { cdsTheme } from './theme';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={cdsTheme}>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 */
export const cdsTheme = createTheme(themeOptions);

// Export tokens for direct access if needed
export * from './tokens';

// Export theme type for TypeScript
export type CDSTheme = typeof cdsTheme;
