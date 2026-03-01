/**
 * CDS Theme Type Extensions
 * Extends Material-UI theme types to include CDS custom properties
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    backdrop?: {
      light: string;
      standard: string;
      dark: string;
      heavy: string;
    };
    primaryStates?: {
      light: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
      dark: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
    };
    secondaryStates?: {
      light: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
      dark: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
    };
  }

  interface PaletteOptions {
    backdrop?: {
      light: string;
      standard: string;
      dark: string;
      heavy: string;
    };
    primaryStates?: {
      light: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
      dark: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
    };
    secondaryStates?: {
      light: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
      dark: {
        hover: string;
        selected: string;
        focus: string;
        focusVisible: string;
        outlinedBorder: string;
      };
    };
  }
}
