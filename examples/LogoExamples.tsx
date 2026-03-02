/**
 * OpenGov Logo Component Examples
 * Demonstrates all logo variants and usage patterns
 */

import React from 'react';
import {
  Logo,
  OpenGovLogo,
  OpenGovWand,
  Stack,
  Paper,
  Typography,
  Box,
} from '../src';

/**
 * Example 1: Basic Logo Usage
 */
export const BasicLogoExample = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Basic Logo (Default - Full Color)</Typography>
      <Logo />
    </Stack>
  );
};

/**
 * Example 2: Logo Size Variants
 */
export const LogoSizesExample = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Logo Sizes</Typography>

      <Box>
        <Typography variant="body2" color="text.secondary">Small (80px)</Typography>
        <Logo size="small" />
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary">Medium (120px - Default)</Typography>
        <Logo size="medium" />
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary">Large (200px)</Typography>
        <Logo size="large" />
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary">Custom Size (150px)</Typography>
        <Logo width={150} />
      </Box>
    </Stack>
  );
};

/**
 * Example 3: Logo Color Variants
 */
export const LogoVariantsExample = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Logo Color Variants</Typography>

      {/* Full Color (Primary) */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Full Color (Primary)
        </Typography>
        <Logo variant="fullcolor" />
      </Paper>

      {/* Blurple */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Blurple
        </Typography>
        <Logo variant="blurple" />
      </Paper>

      {/* Black */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Black
        </Typography>
        <Logo variant="black" />
      </Paper>

      {/* Gray */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Gray
        </Typography>
        <Logo variant="gray" />
      </Paper>

      {/* White (on dark background) */}
      <Paper sx={{ p: 2, bgcolor: '#1a1a1a' }}>
        <Typography variant="body2" color="white" mb={1}>
          White (for dark backgrounds)
        </Typography>
        <Logo variant="white" />
      </Paper>

      {/* Reverse (on dark background) */}
      <Paper sx={{ p: 2, bgcolor: '#1a1a1a' }}>
        <Typography variant="body2" color="white" mb={1}>
          Reverse (for dark mode)
        </Typography>
        <Logo variant="reverse" />
      </Paper>
    </Stack>
  );
};

/**
 * Example 4: Wand Icon Variants
 */
export const WandVariantsExample = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">OpenGov Wand Icon Variants</Typography>

      {/* Tri-Colored (Primary) */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Tri-Colored (Primary)
        </Typography>
        <Logo type="wand" variant="tricolor" size="large" />
      </Paper>

      {/* Blurple */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Blurple Wand
        </Typography>
        <Logo type="wand" variant="blurple" size="large" />
      </Paper>

      {/* Black */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Black Wand
        </Typography>
        <Logo type="wand" variant="black" size="large" />
      </Paper>

      {/* Gray */}
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Gray Wand
        </Typography>
        <Logo type="wand" variant="gray" size="large" />
      </Paper>

      {/* White (on dark background) */}
      <Paper sx={{ p: 2, bgcolor: '#1a1a1a' }}>
        <Typography variant="body2" color="white" mb={1}>
          White Wand (for dark backgrounds)
        </Typography>
        <Logo type="wand" variant="white" size="large" />
      </Paper>
    </Stack>
  );
};

/**
 * Example 5: Clickable Logo (Navigation)
 */
export const ClickableLogoExample = () => {
  const handleLogoClick = () => {
    console.log('Logo clicked - navigate to home');
    // In real app: navigate('/');
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Clickable Logo (for Navigation)</Typography>
      <Typography variant="body2" color="text.secondary">
        Click the logo below (check console)
      </Typography>
      <Logo onClick={handleLogoClick} />
    </Stack>
  );
};

/**
 * Example 6: Convenience Components
 */
export const ConvenienceComponentsExample = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Convenience Components</Typography>

      <Box>
        <Typography variant="body2" color="text.secondary" mb={1}>
          OpenGovLogo (shorthand for full logo)
        </Typography>
        <OpenGovLogo size="medium" />
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary" mb={1}>
          OpenGovWand (shorthand for tri-colored wand)
        </Typography>
        <OpenGovWand size="medium" />
      </Box>
    </Stack>
  );
};

/**
 * Example 7: Real-World Usage in AppBar
 */
export const AppBarLogoExample = () => {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          bgcolor: 'white',
        }}
      >
        {/* Logo */}
        <Logo onClick={() => console.log('Navigate home')} />

        {/* Navigation items would go here */}
        <Stack direction="row" spacing={2}>
          <Typography>Products</Typography>
          <Typography>Solutions</Typography>
          <Typography>About</Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

/**
 * Example 8: Dark Mode AppBar
 */
export const DarkModeAppBarExample = () => {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          bgcolor: '#1a1a1a',
        }}
      >
        {/* White logo for dark background */}
        <Logo variant="white" onClick={() => console.log('Navigate home')} />

        {/* Navigation items */}
        <Stack direction="row" spacing={2}>
          <Typography color="white">Products</Typography>
          <Typography color="white">Solutions</Typography>
          <Typography color="white">About</Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

/**
 * Example 9: Footer Logo
 */
export const FooterLogoExample = () => {
  return (
    <Paper>
      <Box
        sx={{
          p: 4,
          bgcolor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Logo variant="gray" size="small" />
        <Typography variant="body2" color="text.secondary" mt={2}>
          © 2026 OpenGov. All rights reserved.
        </Typography>
      </Box>
    </Paper>
  );
};

/**
 * Example 10: Loading Indicator with Wand
 */
export const LoadingWandExample = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h6">Loading State with Wand Icon</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 4,
        }}
      >
        <OpenGovWand size="large" />
        <Typography>Loading...</Typography>
      </Box>
    </Stack>
  );
};

/**
 * Complete Demo Page
 */
export const LogoExamplesDemo = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        OpenGov Logo Component Examples
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Complete guide to using the OpenGov Logo component with all variants and patterns.
      </Typography>

      <Stack spacing={6} mt={4}>
        <BasicLogoExample />
        <LogoSizesExample />
        <LogoVariantsExample />
        <WandVariantsExample />
        <ClickableLogoExample />
        <ConvenienceComponentsExample />
        <AppBarLogoExample />
        <DarkModeAppBarExample />
        <FooterLogoExample />
        <LoadingWandExample />
      </Stack>
    </Box>
  );
};

export default LogoExamplesDemo;
