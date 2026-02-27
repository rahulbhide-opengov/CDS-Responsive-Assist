# Linear Progress Component Documentation

## Overview
The Linear Progress component displays progress along a horizontal line. It shows determinate progress (known completion percentage) or indeterminate progress (unknown duration) for loading states, file uploads, and task completion.

**Component Type:** Feedback / Progress Component
**Based on:** Material-UI (MUI) v6.1.0 LinearProgress
**Documentation:** [MUI LinearProgress API](https://mui.com/api/linear-progress)

---

## Design Tokens

### Layout Tokens
\`\`\`typescript
'--component/linear-progress/height': '4px',
'--component/linear-progress/border-radius': '2px',
\`\`\`

### Color Tokens
\`\`\`typescript
'--component/linear-progress/bg': 'var(--color-palatte/action/hover, rgba(0, 0, 0, 0.11))',
'--component/linear-progress/bar-primary': 'var(--color-palatte/primary/main, #4b3fff)',
'--component/linear-progress/bar-secondary': 'var(--color-palatte/secondary/main)',
\`\`\`

---

## Variant Types

### Determinate
- **Progress:** Known percentage (0-100%)
- **Bar:** Fills proportionally
- **Use Case:** File uploads, downloads, known tasks

### Indeterminate
- **Progress:** Unknown duration
- **Animation:** Continuous back-forth movement
- **Use Case:** Loading, fetching, unknown duration

### Buffer
- **Progress:** Shows both loaded and buffered
- **Use Case:** Video/audio streaming
- **Bars:** Two bars (loaded + buffered)

### Query
- **Progress:** Preparing to load
- **Animation:** Reverse direction
- **Use Case:** Pre-loading state

---

## Color Variants

- **Primary:** Default blue (#4b3fff)
- **Secondary:** Alternative color
- **Success:** Green for completion
- **Error:** Red for errors
- **Warning:** Yellow for warnings
- **Info:** Blue for information

---

## Usage Guidelines

### When to Use
- File upload/download progress
- Page loading
- Data fetching
- Task completion
- Form submission
- Multi-step processes
- System operations

### When NOT to Use
- Instant operations (< 300ms)
- Circular progress more appropriate
- Static indicators
- Non-progress feedback

---

## CDS Token Integration

Uses CDS primary/secondary colors, action colors, and border-radius tokens.

---

## Version History
- **v1.0** - Initial CDS integration documentation
- Based on MUI v6.1.0 specifications
