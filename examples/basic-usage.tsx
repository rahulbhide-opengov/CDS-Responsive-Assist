/**
 * Basic Usage Example
 * Shows how to set up and use CDS components
 */

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  cdsTheme,
  CDSButton,
  CDSTextField,
  CDSStack,
  CDSContainer,
  CDSCard,
  CDSCardContent,
  Typography,
} from '../src';

/**
 * Basic Example App
 * Demonstrates theme setup and basic component usage
 */
function BasicExample() {
  return (
    <ThemeProvider theme={cdsTheme}>
      {/* CssBaseline for consistent baseline styles */}
      <CssBaseline />

      <CDSContainer maxWidth="sm" sx={{ py: 4 }}>
        <CDSStack spacing={3}>
          {/* Typography with CDS variants */}
          <Typography variant="h3" gutterBottom>
            CDS Components
          </Typography>

          <Typography variant="body1" color="text.secondary">
            All components below use CDS design tokens automatically.
          </Typography>

          {/* Buttons */}
          <CDSCard>
            <CDSCardContent>
              <Typography variant="h6" gutterBottom>
                Buttons
              </Typography>
              <CDSStack direction="row" spacing={2}>
                <CDSButton variant="contained" color="primary">
                  Primary
                </CDSButton>
                <CDSButton variant="outlined" color="secondary">
                  Secondary
                </CDSButton>
                <CDSButton variant="text">
                  Text
                </CDSButton>
              </CDSStack>
            </CDSCardContent>
          </CDSCard>

          {/* Form Inputs */}
          <CDSCard>
            <CDSCardContent>
              <Typography variant="h6" gutterBottom>
                Form Inputs
              </Typography>
              <CDSStack spacing={2}>
                <CDSTextField
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  helperText="Enter your email address"
                />
                <CDSTextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  helperText="Enter your message"
                />
                <CDSButton variant="contained" fullWidth>
                  Submit
                </CDSButton>
              </CDSStack>
            </CDSCardContent>
          </CDSCard>
        </CDSStack>
      </CDSContainer>
    </ThemeProvider>
  );
}

export default BasicExample;
