/**
 * CDS Icon Usage Examples
 * Demonstrates proper usage of MUI Material Icons with CDS color tokens
 *
 * ⚠️ ICON STYLE RESTRICTION:
 * CDS permits ONLY 2 icon styles:
 * - ✅ Outlined (Primary - use this first)
 * - ✅ Filled (Secondary - use only when Outlined not suitable)
 * - ❌ NOT ALLOWED: Rounded, TwoTone, Sharp variants
 *
 * IMPORTANT Rules:
 * - Always prefer Outlined icons first
 * - Use Filled only when Outlined is not suitable
 * - All icons must use CDS colors from theme.palette
 * - Never use hardcoded colors
 *
 * Icon Sources:
 * - Primary: https://mui.com/material-ui/material-icons/?theme=Outlined
 * - Secondary: https://mui.com/material-ui/material-icons/ (Filled)
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material';
import {
  CDSButton,
  CDSCard,
  CDSCardContent,
  CDSCardActions,
  CDSListItem,
  CDSListItemIcon,
  CDSListItemText,
  CDSAvatar,
  CDSAlert,
} from '../src';

// OUTLINED ICONS (Primary preference)
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

// STATUS ICONS (Outlined)
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/**
 * Example 1: Basic Icons with CDS Colors
 */
export function BasicIconsExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Basic Icons with CDS Colors
      </Typography>

      <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
        {/* Primary color */}
        <HomeOutlinedIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: 28, sm: 32 },
          }}
        />

        {/* Secondary color */}
        <SearchOutlinedIcon
          sx={{
            color: theme.palette.secondary.main,
            fontSize: { xs: 28, sm: 32 },
          }}
        />

        {/* Text primary */}
        <PersonOutlineIcon
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: 28, sm: 32 },
          }}
        />

        {/* Text secondary */}
        <SettingsOutlinedIcon
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: 28, sm: 32 },
          }}
        />
      </Stack>
    </Box>
  );
}

/**
 * Example 2: Icons in Buttons
 */
export function IconButtonsExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icons in Buttons
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap', gap: 2 }}>
        {/* Icons automatically inherit button color */}
        <CDSButton
          variant="contained"
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </CDSButton>

        <CDSButton
          variant="outlined"
          startIcon={<AddOutlinedIcon />}
        >
          Add New
        </CDSButton>

        <CDSButton
          variant="text"
          startIcon={<EditOutlinedIcon />}
        >
          Edit
        </CDSButton>

        <CDSButton
          variant="contained"
          color="error"
          startIcon={<DeleteOutlineIcon />}
        >
          Delete
        </CDSButton>

        <CDSButton
          variant="outlined"
          color="secondary"
          endIcon={<ShareOutlinedIcon />}
        >
          Share
        </CDSButton>
      </Stack>
    </Box>
  );
}

/**
 * Example 3: Icon Buttons with CDS Colors
 */
export function IconButtonsOnlyExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icon Buttons (Accessible)
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {/* Always include aria-label for accessibility */}
        <IconButton
          aria-label="home"
          sx={{ color: theme.palette.primary.main }}
        >
          <HomeOutlinedIcon />
        </IconButton>

        <IconButton
          aria-label="search"
          sx={{ color: theme.palette.text.secondary }}
        >
          <SearchOutlinedIcon />
        </IconButton>

        <IconButton
          aria-label="notifications"
          sx={{ color: theme.palette.warning.main }}
        >
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          sx={{
            color: theme.palette.error.main,
            '&:hover': {
              backgroundColor: theme.palette.error.light + '14', // 8% opacity
            },
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>

        <IconButton
          aria-label="settings"
          disabled
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

/**
 * Example 4: Semantic Status Icons
 */
export function StatusIconsExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Status Icons (Semantic Colors)
      </Typography>

      <Stack spacing={2} sx={{ mt: 2 }}>
        {/* Success */}
        <Stack direction="row" spacing={1} alignItems="center">
          <CheckCircleOutlineIcon
            sx={{ color: theme.palette.success.main }}
          />
          <Typography>Operation completed successfully</Typography>
        </Stack>

        {/* Error */}
        <Stack direction="row" spacing={1} alignItems="center">
          <ErrorOutlineIcon
            sx={{ color: theme.palette.error.main }}
          />
          <Typography>An error occurred</Typography>
        </Stack>

        {/* Warning */}
        <Stack direction="row" spacing={1} alignItems="center">
          <WarningAmberIcon
            sx={{ color: theme.palette.warning.main }}
          />
          <Typography>Please review before proceeding</Typography>
        </Stack>

        {/* Info */}
        <Stack direction="row" spacing={1} alignItems="center">
          <InfoOutlinedIcon
            sx={{ color: theme.palette.info.main }}
          />
          <Typography>Additional information available</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

/**
 * Example 5: Icons in Lists
 */
export function IconListExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icons in List Items
      </Typography>

      <Stack spacing={1} sx={{ mt: 2 }}>
        <CDSListItem>
          <CDSListItemIcon>
            <FolderOutlinedIcon
              sx={{ color: theme.palette.primary.main }}
            />
          </CDSListItemIcon>
          <CDSListItemText primary="Documents" secondary="25 files" />
        </CDSListItem>

        <CDSListItem>
          <CDSListItemIcon>
            <EmailOutlinedIcon
              sx={{ color: theme.palette.secondary.main }}
            />
          </CDSListItemIcon>
          <CDSListItemText primary="Messages" secondary="12 unread" />
        </CDSListItem>

        <CDSListItem>
          <CDSListItemIcon>
            <AttachFileOutlinedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          </CDSListItemIcon>
          <CDSListItemText primary="Attachments" secondary="8 files" />
        </CDSListItem>
      </Stack>
    </Box>
  );
}

/**
 * Example 6: Icons in Cards
 */
export function IconCardExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icons in Cards
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap', gap: 2 }}>
        <CDSCard sx={{ minWidth: 250 }}>
          <CDSCardContent>
            {/* Large icon as feature */}
            <DownloadOutlinedIcon
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: 40, sm: 48 },
                mb: 2,
              }}
            />
            <Typography variant="h6" gutterBottom>
              Download Files
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Access and download your documents
            </Typography>
          </CDSCardContent>
          <CDSCardActions>
            <CDSButton
              size="small"
              startIcon={<DownloadOutlinedIcon />}
            >
              Download
            </CDSButton>
          </CDSCardActions>
        </CDSCard>

        <CDSCard sx={{ minWidth: 250 }}>
          <CDSCardContent>
            <ShareOutlinedIcon
              sx={{
                color: theme.palette.secondary.main,
                fontSize: { xs: 40, sm: 48 },
                mb: 2,
              }}
            />
            <Typography variant="h6" gutterBottom>
              Share Content
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Share with your team members
            </Typography>
          </CDSCardContent>
          <CDSCardActions>
            <CDSButton
              size="small"
              startIcon={<ShareOutlinedIcon />}
            >
              Share
            </CDSButton>
          </CDSCardActions>
        </CDSCard>
      </Stack>
    </Box>
  );
}

/**
 * Example 7: Icons in Avatars
 */
export function IconAvatarExample() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icons in Avatars
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <CDSAvatar sx={{ bgcolor: theme.palette.primary.main }}>
          <PersonOutlineIcon sx={{ color: theme.palette.primary.contrastText }} />
        </CDSAvatar>

        <CDSAvatar sx={{ bgcolor: theme.palette.secondary.main }}>
          <EmailOutlinedIcon sx={{ color: theme.palette.secondary.contrastText }} />
        </CDSAvatar>

        <CDSAvatar sx={{ bgcolor: theme.palette.success.main }}>
          <CheckCircleOutlineIcon sx={{ color: theme.palette.success.contrastText }} />
        </CDSAvatar>

        <CDSAvatar sx={{ bgcolor: theme.palette.error.main }}>
          <ErrorOutlineIcon sx={{ color: theme.palette.error.contrastText }} />
        </CDSAvatar>
      </Stack>
    </Box>
  );
}

/**
 * Example 8: Icons in Alerts
 */
export function IconAlertExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Icons in Alerts
      </Typography>

      <Stack spacing={2} sx={{ mt: 2 }}>
        {/* Icons automatically provided by Alert severity */}
        <CDSAlert severity="success">
          This is a success alert with icon
        </CDSAlert>

        <CDSAlert severity="error">
          This is an error alert with icon
        </CDSAlert>

        <CDSAlert severity="warning">
          This is a warning alert with icon
        </CDSAlert>

        <CDSAlert severity="info">
          This is an info alert with icon
        </CDSAlert>
      </Stack>
    </Box>
  );
}

/**
 * Complete Examples Page
 */
export function IconExamplesPage() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        CDS Icon Usage Examples
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        All examples use MUI Material Icons (Outlined theme) with CDS color tokens.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <BasicIconsExample />
      <Divider sx={{ my: 4 }} />

      <IconButtonsExample />
      <Divider sx={{ my: 4 }} />

      <IconButtonsOnlyExample />
      <Divider sx={{ my: 4 }} />

      <StatusIconsExample />
      <Divider sx={{ my: 4 }} />

      <IconListExample />
      <Divider sx={{ my: 4 }} />

      <IconCardExample />
      <Divider sx={{ my: 4 }} />

      <IconAvatarExample />
      <Divider sx={{ my: 4 }} />

      <IconAlertExample />

      <Box sx={{ mt: 6, p: 3, bgcolor: 'error.light', borderRadius: 1, border: '2px solid', borderColor: 'error.main' }}>
        <Typography variant="h6" gutterBottom color="error.dark">
          ⚠️ Icon Style Restriction
        </Typography>
        <Typography variant="body2" paragraph color="error.dark">
          <strong>CDS permits ONLY 2 icon styles:</strong>
        </Typography>
        <Typography variant="body2" component="div" color="error.dark">
          ✅ <strong>Outlined</strong> (Primary - use this first)<br/>
          ✅ <strong>Filled</strong> (Secondary - use only when Outlined not suitable)<br/>
          <br/>
          ❌ <strong>NOT ALLOWED:</strong> Rounded, TwoTone, or Sharp variants
        </Typography>
      </Box>

      <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          Icon Resources
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Primary:</strong> Outlined Icons -{' '}
          <a
            href="https://mui.com/material-ui/material-icons/?theme=Outlined"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mui.com/material-ui/material-icons/?theme=Outlined
          </a>
        </Typography>
        <Typography variant="body2">
          <strong>Secondary:</strong> Filled Icons -{' '}
          <a
            href="https://mui.com/material-ui/material-icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mui.com/material-ui/material-icons/
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default IconExamplesPage;
