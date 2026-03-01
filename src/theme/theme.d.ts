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
  }

  interface PaletteOptions {
    backdrop?: {
      light: string;
      standard: string;
      dark: string;
      heavy: string;
    };
  }
}
