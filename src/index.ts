/**
 * CDS Component Library
 * Complete export of all CDS components and theme
 *
 * @example
 * // Import theme
 * import { cdsTheme } from '@cds/components';
 *
 * // Import components
 * import { CDSButton, CDSTextField, CDSCard } from '@cds/components';
 *
 * // Use with ThemeProvider
 * <ThemeProvider theme={cdsTheme}>
 *   <CDSButton>Click Me</CDSButton>
 * </ThemeProvider>
 */

// Export theme and tokens
export { cdsTheme, type CDSTheme } from './theme';
export * from './theme/tokens';

// Export Button components
export {
  CDSButton,
  CDSIconButton,
  CDSFAB,
  type CDSButtonProps,
  type CDSIconButtonProps,
  type CDSFABProps,
} from './components/Button';

// Export Form components
export {
  CDSTextField,
  CDSCheckbox,
  CDSRadio,
  CDSSwitch,
  CDSSelect,
  CDSFormLabel,
  type CDSTextFieldProps,
  type CDSCheckboxProps,
  type CDSRadioProps,
  type CDSSwitchProps,
  type CDSSelectProps,
  type CDSFormLabelProps,
} from './components/Form';

// Export Layout components
export {
  CDSContainer,
  CDSBox,
  CDSStack,
  CDSGrid,
  CDSPaper,
  CDSCard,
  CDSSection,
  CDSPageContainer,
  type CDSContainerProps,
  type CDSBoxProps,
  type CDSStackProps,
  type CDSGridProps,
  type CDSPaperProps,
  type CDSCardProps,
} from './components/Layout';

// Export Navigation components
export {
  CDSAppBar,
  CDSDrawer,
  CDSBottomNavigation,
  CDSTabs,
  CDSTab,
  CDSNavLink,
  type CDSAppBarProps,
  type CDSDrawerProps,
  type CDSBottomNavigationProps,
  type CDSTabsProps,
  type CDSTabProps,
} from './components/Navigation';

// Re-export commonly used MUI components that don't need CDS styling
export {
  Typography,
  Avatar,
  Badge,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Menu,
  MenuItem,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Skeleton,
  CircularProgress,
  LinearProgress,
  Backdrop,
  Tooltip,
  Chip,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Toolbar,
  IconButton,
} from '@mui/material';

// Re-export MUI icons for convenience
export * from '@mui/icons-material';

// Re-export styled for custom styling
export { styled } from '@mui/material/styles';
