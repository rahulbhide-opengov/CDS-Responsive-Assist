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
    // CDS State Colors (for direct access)
    primaryStates: colorTokens.primaryStates,
    secondaryStates: colorTokens.secondaryStates,
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
        // Primary Color - Contained (Filled) - CDS Blurple states
        containedPrimary: {
          '&:hover': {
            backgroundColor: colorTokens.primary[700], // Blurple 700
            // Overlay with hover state
            backgroundImage: `linear-gradient(${colorTokens.primaryStates.light.hover}, ${colorTokens.primaryStates.light.hover})`,
          },
          '&:active': {
            backgroundImage: `linear-gradient(${colorTokens.primaryStates.light.selected}, ${colorTokens.primaryStates.light.selected})`,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        // Primary Color - Outlined - CDS Blurple states
        outlinedPrimary: {
          borderColor: colorTokens.primaryStates.light.outlinedBorder,
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
            borderColor: colorTokens.primary[700],
          },
          '&:active': {
            backgroundColor: colorTokens.primaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        // Primary Color - Text - CDS Blurple states
        textPrimary: {
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&:active': {
            backgroundColor: colorTokens.primaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        // Secondary Color - Contained (Filled) - CDS Slate states
        containedSecondary: {
          '&:hover': {
            backgroundColor: colorTokens.secondary[700], // Slate 700
            backgroundImage: `linear-gradient(${colorTokens.secondaryStates.light.hover}, ${colorTokens.secondaryStates.light.hover})`,
          },
          '&:active': {
            backgroundImage: `linear-gradient(${colorTokens.secondaryStates.light.selected}, ${colorTokens.secondaryStates.light.selected})`,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.secondaryStates.light.focusVisible}`,
          },
        },
        // Secondary Color - Outlined - CDS Slate states
        outlinedSecondary: {
          borderColor: colorTokens.secondaryStates.light.outlinedBorder,
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
            borderColor: colorTokens.secondary[700],
          },
          '&:active': {
            backgroundColor: colorTokens.secondaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.secondaryStates.light.focusVisible}`,
          },
        },
        // Secondary Color - Text - CDS Slate states
        textSecondary: {
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
          },
          '&:active': {
            backgroundColor: colorTokens.secondaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.secondaryStates.light.focusVisible}`,
          },
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
        // Primary color icon button - CDS Blurple states
        colorPrimary: {
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&:active': {
            backgroundColor: colorTokens.primaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        // Secondary color icon button - CDS Slate states
        colorSecondary: {
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
          },
          '&:active': {
            backgroundColor: colorTokens.secondaryStates.light.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.secondaryStates.light.focusVisible}`,
          },
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
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorTokens.primary[700],
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colorTokens.primary[700],
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              // Focus ring using CDS primary focus state
              boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
            },
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
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colorTokens.primary[700],
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: colorTokens.secondary[700],
          },
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 12, // Ensures 48px touch target with 24px icon
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colorTokens.primary[700],
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: colorTokens.secondary[700],
          },
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 12,
        },
        switchBase: {
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colorTokens.primary[700],
            '& + .MuiSwitch-track': {
              backgroundColor: colorTokens.primary[700],
            },
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: colorTokens.secondary[700],
            '& + .MuiSwitch-track': {
              backgroundColor: colorTokens.secondary[700],
            },
          },
          '&:hover': {
            backgroundColor: colorTokens.secondaryStates.light.hover,
          },
        },
      },
    },

    // Tabs - CDS primary state colors
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: typographyTokens.fontWeightMedium,
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&.Mui-selected': {
            color: colorTokens.primary[700],
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
      },
    },

    // Chip - CDS state colors
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusTokens.extraSmall,
        },
        colorPrimary: {
          backgroundColor: colorTokens.primary[100],
          color: colorTokens.primary[700],
          '&:hover': {
            backgroundColor: colorTokens.primary[200],
          },
        },
        colorSecondary: {
          backgroundColor: colorTokens.secondary[100],
          color: colorTokens.secondary[700],
          '&:hover': {
            backgroundColor: colorTokens.secondary[200],
          },
        },
        clickable: {
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&:active': {
            backgroundColor: colorTokens.primaryStates.light.selected,
          },
        },
      },
    },

    // List Item - CDS state colors
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colorTokens.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: colorTokens.primaryStates.light.selected,
            '&:hover': {
              backgroundColor: colorTokens.primaryStates.light.hover,
            },
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${colorTokens.primaryStates.light.focusVisible}`,
          },
        },
      },
    },

    // Menu Item - CDS state colors
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colorTokens.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: colorTokens.primaryStates.light.selected,
            '&:hover': {
              backgroundColor: colorTokens.primaryStates.light.hover,
            },
          },
          '&.Mui-focusVisible': {
            backgroundColor: colorTokens.primaryStates.light.focus,
          },
        },
      },
    },

    // Toggle Button - CDS state colors
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&:hover': {
            backgroundColor: colorTokens.primaryStates.light.hover,
          },
          '&.Mui-selected': {
            backgroundColor: colorTokens.primaryStates.light.selected,
            color: colorTokens.primary[700],
            '&:hover': {
              backgroundColor: colorTokens.primaryStates.light.hover,
            },
          },
        },
      },
    },

    // Slider - CDS primary colors
    MuiSlider: {
      styleOverrides: {
        root: {
          color: colorTokens.primary[700],
        },
        thumb: {
          '&:hover': {
            boxShadow: `0 0 0 8px ${colorTokens.primaryStates.light.hover}`,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 8px ${colorTokens.primaryStates.light.focusVisible}`,
          },
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
