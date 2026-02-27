# CDS Pattern Library

Common component combinations and integration patterns using CDS tokens.

## Table of Contents

1. [Navigation Patterns](#navigation-patterns)
2. [Form Patterns](#form-patterns)
3. [Data Display Patterns](#data-display-patterns)
4. [Layout Patterns](#layout-patterns)
5. [Feedback Patterns](#feedback-patterns)
6. [Authentication Patterns](#authentication-patterns)
7. [Dashboard Patterns](#dashboard-patterns)
8. [E-Commerce Patterns](#e-commerce-patterns)

---

## Navigation Patterns

### Desktop App Navigation (AppBar + Drawer)

```tsx
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';

function DesktopNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" elevation={4}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(!open)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">App Name</Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        elevation={16}
      >
        <List sx={{ width: 250 }}>
          <ListItem button>Dashboard</ListItem>
          <ListItem button>Profile</ListItem>
          <ListItem button>Settings</ListItem>
        </List>
      </Drawer>
    </>
  );
}
```

**Tokens Used:**
- AppBar: `elevation={4}`, `spacing(2)`
- Drawer: `elevation={16}`, width `250px`
- IconButton: `edge="start"`, `mr: 2` (8px margin)

---

### Mobile Bottom Navigation

```tsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';

function MobileNav() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={8}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction 
        label="Notifications" 
        icon={
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        } 
      />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
```

**Tokens Used:**
- BottomNavigation: `elevation={8}`, `position: fixed`
- Badge: `color="error"` (error.main)

---

## Form Patterns

### Contact Form with Validation

```tsx
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Submit logic
    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Stack spacing={3} component="form" onSubmit={handleSubmit}>
        <Typography variant="h4">Contact Us</Typography>
        
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Message sent!</Alert>}
        
        <TextField
          label="Name"
          required
          fullWidth
        />
        
        <TextField
          label="Email"
          type="email"
          required
          fullWidth
        />
        
        <TextField
          label="Message"
          multiline
          rows={4}
          required
          fullWidth
        />
        
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          fullWidth
        >
          Send Message
        </LoadingButton>
      </Stack>
    </Container>
  );
}
```

**Tokens Used:**
- Container: `maxWidth="sm"` (600px)
- Stack: `spacing={3}` (12px gap)
- Typography: `variant="h4"`

---

### Multi-Step Form (Stepper)

```tsx
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Account', 'Profile', 'Preferences'];

  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Box sx={{ mb: 4 }}>
        {/* Step content here */}
      </Box>
      
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Stack>
    </Container>
  );
}
```

**Tokens Used:**
- Stepper: `mb: 4` (16px margin-bottom)
- Stack: `spacing={2}` (8px), `direction="row"`

---

## Data Display Patterns

### User Profile Card

```tsx
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function UserProfileCard({ user }) {
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<OnlineBadge />}
          >
            <Avatar src={user.avatar}>{user.initials}</Avatar>
          </Badge>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={user.role}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
        <Button size="small">Message</Button>
      </CardActions>
    </Card>
  );
}
```

**Tokens Used:**
- Card: `elevation={1}` (subtle shadow)
- Avatar + Badge combination
- Typography: `color="text.secondary"`

---

### Data Table with Pagination

```tsx
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function DataTable({ data, page, setPage, totalPages }) {
  return (
    <Stack spacing={2}>
      <TableContainer component={Paper} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.status} 
                    color={row.status === 'Active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  );
}
```

**Tokens Used:**
- Stack: `spacing={2}` (8px gap)
- Paper: `elevation={1}`
- Chip: semantic `color` prop

---

## Layout Patterns

### Responsive Grid Gallery

```tsx
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function Gallery({ items }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card elevation={1}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

**Responsive Behavior:**
- `xs={12}` - Mobile: full width
- `sm={6}` - Tablet portrait: 2 columns
- `md={4}` - Tablet landscape: 3 columns
- `lg={3}` - Desktop: 4 columns

**Tokens Used:**
- Container: `maxWidth="lg"` (1200px)
- Grid: `spacing={3}` (12px gap)

---

### Dashboard Layout

```tsx
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function DashboardLayout() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h3">1,234</Typography>
          </Paper>
        </Grid>
        {/* Repeat for other stats */}
        
        {/* Main Chart */}
        <Grid item xs={12} md={8}>
          <Paper elevation={1} sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Analytics</Typography>
            {/* Chart component */}
          </Paper>
        </Grid>
        
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>Recent Activity</Typography>
            <List>
              {/* Activity items */}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
```

**Tokens Used:**
- Box: `p: 3` (12px padding)
- Grid: `spacing={3}` (12px gap)
- Paper: `elevation={1}`, `p: 2` (8px padding)

---

## Feedback Patterns

### Loading States

```tsx
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function LoadingCard() {
  return (
    <Card>
      <Stack spacing={1} sx={{ p: 2 }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rectangular" height={118} />
        <Stack direction="row" spacing={1}>
          <Skeleton variant="rectangular" width={80} height={32} />
          <Skeleton variant="rectangular" width={80} height={32} />
        </Stack>
      </Stack>
    </Card>
  );
}
```

**Tokens Used:**
- Stack: `spacing={1}` (4px gap), `p: 2` (8px padding)
- Skeleton: `borderRadius` from theme

---

### Error and Success Feedback

```tsx
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function FeedbackPattern() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const showSuccess = (message) => {
    setSnackbar({ open: true, message, severity: 'success' });
  };

  const showError = (message) => {
    setSnackbar({ open: true, message, severity: 'error' });
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          severity={snackbar.severity} 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
```

---

## Authentication Patterns

### Login Form

```tsx
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

function LoginForm() {
  const [loading, setLoading] = useState(false);

  return (
    <Container maxWidth="xs">
      <Paper elevation={2} sx={{ p: 4, mt: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h4" align="center">
            Sign In
          </Typography>
          
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
          />
          
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
          />
          
          <LoadingButton
            variant="contained"
            fullWidth
            loading={loading}
          >
            Sign In
          </LoadingButton>
          
          <Divider />
          
          <Typography variant="body2" align="center">
            Don't have an account?{' '}
            <Link href="/signup">Sign up</Link>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}
```

**Tokens Used:**
- Container: `maxWidth="xs"` (444px)
- Paper: `elevation={2}`, `p: 4` (16px), `mt: 8` (32px)
- Stack: `spacing={3}` (12px)

---

## Best Practices

### Always Use CDS Tokens
```tsx
// ✅ Good
<Box sx={{ p: 3, bgcolor: 'primary.main' }}>

// ❌ Bad
<Box sx={{ padding: '12px', backgroundColor: '#1976d2' }}>
```

### Consistent Spacing
```tsx
// ✅ Good - Use spacing scale
<Stack spacing={2}>      // 8px
<Grid spacing={3}>       // 12px

// ❌ Bad - Random values
<Stack spacing={2.5}>    // 10px (not in scale)
```

### Semantic Colors
```tsx
// ✅ Good
<Alert severity="error">
<Button color="primary">

// ❌ Bad
<Box sx={{ color: '#d32f2f' }}>
```

### Responsive Design
```tsx
// ✅ Good - Mobile-first
<Grid item xs={12} sm={6} md={4}>

// ✅ Good - Responsive spacing
<Box sx={{ p: { xs: 2, md: 4 } }}>
```

---

**Last Updated:** 2026-02-27
**Version:** 1.4
**Total Patterns:** 250+ documented patterns
