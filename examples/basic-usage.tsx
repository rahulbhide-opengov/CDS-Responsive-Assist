/**
 * Basic Usage Example
 * Shows how to set up and use CDS components
 */

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  cdsTheme,
  Button,
  TextField,
  Stack,
  Container,
  Card,
  CardContent,
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

      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Stack spacing={3}>
          {/* Typography with CDS variants */}
          <Typography variant="h3" gutterBottom>
            CDS Components
          </Typography>

          <Typography variant="body1" color="text.secondary">
            All components below use CDS design tokens automatically.
          </Typography>

          {/* Buttons */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Buttons
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="primary">
                  Primary
                </Button>
                <Button variant="secondary">
                  Secondary
                </Button>
                <Button variant="tertiary">
                  Tertiary
                </Button>
              </Stack>
            </CardContent>
          </Card>

          {/* Form Inputs */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Form Inputs
              </Typography>
              <Stack spacing={2}>
                <TextField
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  helperText="Enter your email address"
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  helperText="Enter your message"
                />
                <Button variant="primary" fullWidth>
                  Submit
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default BasicExample;
