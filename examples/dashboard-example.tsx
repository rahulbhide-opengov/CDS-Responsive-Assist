/**
 * Dashboard Example
 * Complete dashboard layout using CDS components
 */

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  cdsTheme,
  CDSAppBar,
  CDSDrawer,
  CDSBox,
  CDSGrid,
  CDSCard,
  CDSCardContent,
  CDSButton,
  CDSIconButton,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Avatar,
  Badge,
} from '../src';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

/**
 * Dashboard Example
 * Shows a complete dashboard layout with navigation
 */
function DashboardExample() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    setDrawerOpen(false); // Close drawer on mobile after selection
  };

  return (
    <ThemeProvider theme={cdsTheme}>
      <CssBaseline />
      <CDSBox sx={{ display: 'flex' }}>
        {/* App Bar */}
        <CDSAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <CDSIconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </CDSIconButton>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              CDS Dashboard
            </Typography>

            <CDSIconButton color="inherit" aria-label="notifications">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </CDSIconButton>

            <Avatar sx={{ ml: 2, bgcolor: 'secondary.main' }}>
              JD
            </Avatar>
          </Toolbar>
        </CDSAppBar>

        {/* Drawer */}
        <CDSDrawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Toolbar /> {/* Spacer for app bar */}
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick(0)}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick(1)}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick(2)}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </CDSDrawer>

        {/* Main Content */}
        <CDSBox
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            mt: 8, // Account for app bar
          }}
        >
          <Typography variant="h4" gutterBottom>
            Dashboard Overview
          </Typography>

          <CDSGrid container spacing={3}>
            {/* Stat Cards */}
            <CDSGrid item xs={12} sm={6} md={3}>
              <CDSCard>
                <CDSCardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Total Users
                  </Typography>
                  <Typography variant="h3" component="div">
                    1,234
                  </Typography>
                  <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                    +12% from last month
                  </Typography>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>

            <CDSGrid item xs={12} sm={6} md={3}>
              <CDSCard>
                <CDSCardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Revenue
                  </Typography>
                  <Typography variant="h3" component="div">
                    $45.2K
                  </Typography>
                  <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                    +8% from last month
                  </Typography>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>

            <CDSGrid item xs={12} sm={6} md={3}>
              <CDSCard>
                <CDSCardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Active Projects
                  </Typography>
                  <Typography variant="h3" component="div">
                    24
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    3 completed this week
                  </Typography>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>

            <CDSGrid item xs={12} sm={6} md={3}>
              <CDSCard>
                <CDSCardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Tasks
                  </Typography>
                  <Typography variant="h3" component="div">
                    156
                  </Typography>
                  <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
                    18 overdue
                  </Typography>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>

            {/* Main Chart Area */}
            <CDSGrid item xs={12} md={8}>
              <CDSCard>
                <CDSCardContent>
                  <Typography variant="h6" gutterBottom>
                    Analytics Overview
                  </Typography>
                  <CDSBox sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography color="text.secondary">
                      Chart component would go here
                    </Typography>
                  </CDSBox>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>

            {/* Recent Activity */}
            <CDSGrid item xs={12} md={4}>
              <CDSCard>
                <CDSCardContent>
                  <Typography variant="h6" gutterBottom>
                    Recent Activity
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="New user registered"
                        secondary="2 minutes ago"
                      />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <ListItemText
                        primary="Project completed"
                        secondary="1 hour ago"
                      />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <ListItemText
                        primary="Payment received"
                        secondary="3 hours ago"
                      />
                    </ListItem>
                  </List>
                  <CDSButton fullWidth sx={{ mt: 2 }}>
                    View All Activity
                  </CDSButton>
                </CDSCardContent>
              </CDSCard>
            </CDSGrid>
          </CDSGrid>
        </CDSBox>
      </CDSBox>
    </ThemeProvider>
  );
}

export default DashboardExample;
