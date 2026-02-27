/**
 * CDS-First Button Examples
 * Demonstrates the difference between MUI-centric and CDS-first approaches
 */

import React from 'react';
import { Box, Typography, Stack, Divider, Paper } from '@mui/material';
import { CDSButton, CDSIconButton, CDSFAB } from '../src/components/ButtonCDSFirst';

// CDS Outlined Icons (following icon policy)
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

/**
 * Example 1: CDS Variants (Design Language)
 */
export function CDSVariantsExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Button Variants (Design Language)
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Use semantic CDS variants, not MUI's visual variants
      </Typography>

      <Stack spacing={2} sx={{ mt: 3 }}>
        {/* Primary - Main call-to-action */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Primary - Main call-to-action
          </Typography>
          <CDSButton variant="primary">Save Changes</CDSButton>
        </Box>

        {/* Secondary - Secondary actions */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Secondary - Secondary actions
          </Typography>
          <CDSButton variant="secondary">Cancel</CDSButton>
        </Box>

        {/* Tertiary - Low emphasis */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Tertiary - Low emphasis
          </Typography>
          <CDSButton variant="tertiary">Learn More</CDSButton>
        </Box>

        {/* Danger - Destructive actions */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Danger - Destructive actions
          </Typography>
          <CDSButton variant="danger">Delete Account</CDSButton>
        </Box>

        {/* Success - Positive actions */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Success - Positive actions
          </Typography>
          <CDSButton variant="success">Approve</CDSButton>
        </Box>

        {/* Ghost - Minimal styling */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Ghost - Minimal styling
          </Typography>
          <CDSButton variant="ghost">Close</CDSButton>
        </Box>

        {/* Link - Link appearance */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Link - Link appearance
          </Typography>
          <CDSButton variant="link">View Documentation</CDSButton>
        </Box>
      </Stack>
    </Box>
  );
}

/**
 * Example 2: CDS Button Sizes (Responsive)
 */
export function CDSButtonSizesExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Button Sizes (Responsive)
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        All sizes adapt automatically across breakpoints
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
        <CDSButton variant="primary" size="small">
          Small (30px → 32px)
        </CDSButton>
        <CDSButton variant="primary" size="medium">
          Medium (38px → 40px)
        </CDSButton>
        <CDSButton variant="primary" size="large">
          Large (44px → 48px)
        </CDSButton>
      </Stack>
    </Box>
  );
}

/**
 * Example 3: Buttons with Icons (CDS naming: leftIcon/rightIcon)
 */
export function CDSButtonIconsExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Buttons with Icons
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Use <code>leftIcon</code> and <code>rightIcon</code> props (not startIcon/endIcon)
      </Typography>

      <Stack spacing={2} sx={{ mt: 3 }}>
        {/* Left icon */}
        <Stack direction="row" spacing={2}>
          <CDSButton variant="primary" leftIcon={<SaveOutlinedIcon />}>
            Save
          </CDSButton>
          <CDSButton variant="danger" leftIcon={<DeleteOutlineIcon />}>
            Delete
          </CDSButton>
          <CDSButton variant="success" leftIcon={<CheckOutlinedIcon />}>
            Confirm
          </CDSButton>
        </Stack>

        {/* Right icon */}
        <Stack direction="row" spacing={2}>
          <CDSButton variant="secondary" rightIcon={<EditOutlinedIcon />}>
            Edit
          </CDSButton>
          <CDSButton variant="tertiary" rightIcon={<DownloadOutlinedIcon />}>
            Download
          </CDSButton>
        </Stack>
      </Stack>
    </Box>
  );
}

/**
 * Example 4: Loading State
 */
export function CDSButtonLoadingExample() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Button Loading State
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Built-in loading state with spinner
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <CDSButton variant="primary" loading={loading} onClick={handleClick}>
          {loading ? 'Saving...' : 'Save'}
        </CDSButton>
        <CDSButton variant="secondary" loading={loading} onClick={handleClick}>
          {loading ? 'Loading...' : 'Load Data'}
        </CDSButton>
      </Stack>
    </Box>
  );
}

/**
 * Example 5: Button States
 */
export function CDSButtonStatesExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Button States
      </Typography>

      <Stack spacing={3} sx={{ mt: 3 }}>
        {/* Normal state */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Normal
          </Typography>
          <Stack direction="row" spacing={2}>
            <CDSButton variant="primary">Normal</CDSButton>
            <CDSButton variant="secondary">Normal</CDSButton>
            <CDSButton variant="danger">Normal</CDSButton>
          </Stack>
        </Box>

        {/* Disabled state */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Disabled
          </Typography>
          <Stack direction="row" spacing={2}>
            <CDSButton variant="primary" disabled>
              Disabled
            </CDSButton>
            <CDSButton variant="secondary" disabled>
              Disabled
            </CDSButton>
            <CDSButton variant="danger" disabled>
              Disabled
            </CDSButton>
          </Stack>
        </Box>

        {/* Full width */}
        <Box>
          <Typography variant="caption" display="block" gutterBottom>
            Full Width
          </Typography>
          <CDSButton variant="primary" fullWidth>
            Full Width Button
          </CDSButton>
        </Box>
      </Stack>
    </Box>
  );
}

/**
 * Example 6: CDS Icon Buttons
 */
export function CDSIconButtonExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CDS Icon Buttons
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Icon-only buttons with required accessibility labels
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <CDSIconButton ariaLabel="add" color="primary">
          <AddOutlinedIcon />
        </CDSIconButton>
        <CDSIconButton ariaLabel="edit" color="secondary">
          <EditOutlinedIcon />
        </CDSIconButton>
        <CDSIconButton ariaLabel="delete" color="error">
          <DeleteOutlineIcon />
        </CDSIconButton>
        <CDSIconButton ariaLabel="close" color="inherit">
          <CloseOutlinedIcon />
        </CDSIconButton>
      </Stack>
    </Box>
  );
}

/**
 * Example 7: CDS FAB (Floating Action Button)
 */
export function CDSFABExample() {
  return (
    <Box sx={{ p: 3, position: 'relative', minHeight: 200 }}>
      <Typography variant="h5" gutterBottom>
        CDS Floating Action Button
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Prominent circular button for primary actions
      </Typography>

      <Box sx={{ mt: 3 }}>
        <CDSFAB
          ariaLabel="add"
          color="primary"
          position={{ bottom: 16, right: 16 }}
        >
          <AddOutlinedIcon />
        </CDSFAB>
      </Box>
    </Box>
  );
}

/**
 * Example 8: Comparison - Old vs New
 */
export function ComparisonExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom color="error.main">
        ❌ OLD WAY (MUI-Centric)
      </Typography>

      <Paper sx={{ p: 2, bgcolor: 'error.light', mb: 4 }}>
        <pre style={{ margin: 0, fontSize: '0.875rem' }}>
{`// Developer uses MUI concepts
<CDSButton variant="contained" color="primary">
  Primary Action
</CDSButton>

<CDSButton variant="contained" color="error">
  Delete
</CDSButton>

<CDSButton variant="outlined" color="primary">
  Secondary
</CDSButton>

<CDSButton variant="text" color="primary">
  Tertiary
</CDSButton>

// Confusing: which combination for what purpose?
// Developer needs to know MUI`}
        </pre>
      </Paper>

      <Typography variant="h4" gutterBottom color="success.main">
        ✅ NEW WAY (CDS-First)
      </Typography>

      <Paper sx={{ p: 2, bgcolor: 'success.light', mb: 2 }}>
        <pre style={{ margin: 0, fontSize: '0.875rem' }}>
{`// Developer uses CDS design language
<CDSButton variant="primary">
  Primary Action
</CDSButton>

<CDSButton variant="danger">
  Delete
</CDSButton>

<CDSButton variant="secondary">
  Secondary
</CDSButton>

<CDSButton variant="tertiary">
  Tertiary
</CDSButton>

// Clear, semantic, self-documenting
// Developer only knows CDS`}
        </pre>
      </Paper>

      <Typography variant="body2" color="text.secondary">
        <strong>Benefits:</strong> Semantic naming, design system abstraction, easier onboarding,
        less coupling to MUI, ability to switch underlying library
      </Typography>
    </Box>
  );
}

/**
 * Complete Examples Page
 */
export function ButtonCDSFirstExamplesPage() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        CDS-First Button Examples
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Use CDS variants and props - MUI is an implementation detail
      </Typography>

      <Divider sx={{ my: 4 }} />
      <ComparisonExample />

      <Divider sx={{ my: 4 }} />
      <CDSVariantsExample />

      <Divider sx={{ my: 4 }} />
      <CDSButtonSizesExample />

      <Divider sx={{ my: 4 }} />
      <CDSButtonIconsExample />

      <Divider sx={{ my: 4 }} />
      <CDSButtonLoadingExample />

      <Divider sx={{ my: 4 }} />
      <CDSButtonStatesExample />

      <Divider sx={{ my: 4 }} />
      <CDSIconButtonExample />

      <Divider sx={{ my: 4 }} />
      <CDSFABExample />
    </Box>
  );
}

export default ButtonCDSFirstExamplesPage;
