# Circular Progress Component Documentation

## Overview
The Circular Progress component displays progress in a circular format. It shows determinate progress (known completion percentage) or indeterminate progress (spinning animation) for loading states and async operations.

**Component Type:** Feedback / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 CircularProgress
**Documentation:** [MUI CircularProgress API](https://mui.com/api/circular-progress)

---

## Design Tokens

### Size Tokens
\`\`\`typescript
'--component/circular-progress/size-small': '20px',
'--component/circular-progress/size-medium': '40px',
'--component/circular-progress/size-large': '60px',
'--component/circular-progress/thickness': '3.6',  // Stroke width
\`\`\`

### Color Tokens
\`\`\`typescript
'--component/circular-progress/color-primary': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/circular-progress/color-secondary': 'var(--color-palatte/secondary/main)',
'--component/circular-progress/color-inherit': 'currentColor',
\`\`\`

---

## Size Variants

### Small (20px)
- **Use Case:** Inline with text, buttons, small spaces
- **Example:** Loading button, inline spinner

### Medium (40px)
- **Use Case:** Standard loading indicator
- **Example:** Card loading, section loading
- **Default:** Most common size

### Large (60px)
- **Use Case:** Full-page loading, prominent indicators
- **Example:** Initial page load, large modals

### Custom
- **Size:** Any custom pixel value
- **Thickness:** Adjustable stroke width

---

## Variant Types

### Indeterminate (Default)
- **Animation:** Continuous spinning
- **Use Case:** Unknown duration loading
- **Most Common:** Standard loading spinner

### Determinate
- **Progress:** Known percentage (0-100%)
- **Arc:** Fills proportionally
- **Use Case:** File uploads, known progress

---

## Color Variants

- **Primary:** Default blue (#4b3fff)
- **Secondary:** Alternative color
- **Success:** Green for completion
- **Error:** Red for errors
- **Warning:** Yellow for warnings
- **Info:** Blue for information
- **Inherit:** Uses parent color

---

## Usage Guidelines

### When to Use
- Page loading
- Button loading states
- Async operations
- Data fetching
- Background processes
- Modal/dialog loading
- Inline loading indicators

### When NOT to Use
- Known linear progress (use LinearProgress)
- Very fast operations (< 300ms)
- Static indicators
- Progress bars better suited

---

## Integration with CDS Components

### With LoadingButton
\`\`\`typescript
<LoadingButton loading loadingIndicator={<CircularProgress size={20} />}>
  Submit
</LoadingButton>
\`\`\`

### With Backdrop
\`\`\`typescript
<Backdrop open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>
\`\`\`

### With Box (Centered)
\`\`\`typescript
<Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
  <CircularProgress />
</Box>
\`\`\`

---

## CDS Token Integration

Uses CDS primary/secondary colors, sizing tokens, and integrates with LoadingButton, Backdrop, and other CDS components.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
