# File Upload Component Documentation

## Overview
The File Upload pattern allows users to select and upload files from their local system. While Material-UI doesn't provide a dedicated FileUpload component, this document covers best practices for implementing file upload functionality using CDS components (Button, IconButton, TextField) combined with HTML5 file inputs, drag-and-drop zones, and upload progress indicators.

**Component Type:** Input / Pattern Component
**Based on:** HTML5 File API + Material-UI (MUI) v6.1.0 Components
**Documentation:** Pattern-based implementation

---

## Design Tokens

### Button Tokens (for Upload Triggers)
```typescript
// Uses CDS Button tokens
'--component/file-upload/button-height': 'var(--sizing/button/medium, 40px)',
'--component/file-upload/button-padding': 'var(--spacing/1.5, 6px) var(--spacing/4, 16px)',
```

### Drop Zone Tokens
```typescript
'--component/file-upload/dropzone-border': '2px dashed var(--color-palatte/divider, rgba(0, 0, 0, 0.12))',
'--component/file-upload/dropzone-border-active': '2px dashed var(--color-palatte/primary/main, #4b3fff)',
'--component/file-upload/dropzone-bg': 'var(--color-palatte/action/hover, rgba(0, 0, 0, 0.04))',
'--component/file-upload/dropzone-bg-active': 'var(--color-palatte/primary/light, rgba(75, 63, 255, 0.08))',
'--component/file-upload/dropzone-padding': 'var(--spacing/8, 32px)',
'--component/file-upload/dropzone-border-radius': 'var(--border-radius/small, 4px)',
```

### File List Tokens
```typescript
'--component/file-upload/file-item-padding': 'var(--spacing/2, 8px)',
'--component/file-upload/file-item-border': '1px solid var(--color-palatte/divider)',
'--component/file-upload/file-item-border-radius': 'var(--border-radius/small, 4px)',
```

---

## Component Anatomy

### File Input (Hidden)
- **Element:** `<input type="file" />`
- **Visibility:** Hidden with CSS
- **Trigger:** Button click
- **Multiple:** Single or multiple files
- **Accept:** File type restrictions

### Upload Button
- **Component:** CDS Button or IconButton
- **Action:** Triggers file input click
- **Icon:** CloudUpload, AttachFile, etc.
- **Label:** "Upload", "Choose File", etc.

### Drop Zone (Optional)
- **Area:** Drag and drop target
- **Visual:** Dashed border, hover state
- **Feedback:** Visual indication on drag over
- **Alternative:** To button click

### File List
- **Display:** Selected files
- **Info:** Name, size, type
- **Actions:** Remove, preview
- **Progress:** Upload progress bar

---

## Implementation Patterns

### Basic Button Upload
```typescript
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

<Button
  component="label"
  variant="contained"
  startIcon={<CloudUploadIcon />}
>
  Upload File
  <input
    type="file"
    hidden
    onChange={handleFileChange}
  />
</Button>
```

### Icon Button Upload
```typescript
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';

<IconButton component="label" color="primary">
  <AttachFileIcon />
  <input
    type="file"
    hidden
    onChange={handleFileChange}
  />
</IconButton>
```

### Multiple Files
```typescript
<Button component="label" variant="outlined">
  Upload Multiple Files
  <input
    type="file"
    hidden
    multiple
    onChange={handleMultipleFiles}
  />
</Button>
```

### File Type Restrictions
```typescript
<Button component="label" variant="contained">
  Upload Image
  <input
    type="file"
    hidden
    accept="image/*"
    onChange={handleImageUpload}
  />
</Button>

// Specific types
accept=".pdf,.doc,.docx"
accept="image/png,image/jpeg"
accept="video/*"
```

---

## Usage Guidelines

### When to Use
- Document upload forms
- Profile photo upload
- Bulk file imports
- Attachment features
- Media upload (images, videos)
- CSV/Excel imports
- Resume/CV upload
- File-based configurations

### When NOT to Use
- Text input (use TextField)
- Simple data entry
- URL-based content
- Copy-paste content
- Small amounts of text

### Best Practices

#### Do
- Show selected file name and size
- Provide file type restrictions
- Display upload progress
- Allow file removal before upload
- Validate file size and type
- Show clear error messages
- Support drag-and-drop (for desktop)
- Indicate allowed file types
- Provide file preview when appropriate
- Show upload success/failure state

#### Don't
- Upload without user confirmation
- Allow unlimited file sizes
- Forget to validate file types
- Hide upload progress
- Make file selection unclear
- Forget mobile considerations
- Allow dangerous file types (.exe, .bat)
- Forget to handle errors
- Block UI during upload
- Forget to provide cancel option

---

## Component Integration (CDS Base Components)

### With CDS Button
```typescript
import Button from '@mui/material/Button';
import { useState } from 'react';

function FileUploadButton() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <Button component="label" variant="contained">
        Choose File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {file && <Typography sx={{ mt: 1 }}>Selected: {file.name}</Typography>}
    </>
  );
}
```

### With CDS LinearProgress
```typescript
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';

function FileUploadWithProgress() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file: File) => {
    setUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(i);
    }
    setUploading(false);
  };

  return (
    <>
      <Button component="label" variant="contained" disabled={uploading}>
        Upload File
        <input
          type="file"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
          }}
        />
      </Button>
      {uploading && <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />}
    </>
  );
}
```

### With CDS List (File List)
```typescript
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function FileUploadList() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button component="label" variant="contained">
        Add Files
        <input type="file" hidden multiple onChange={handleFileChange} />
      </Button>
      <List>
        {files.map((file, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleRemove(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={file.name}
              secondary={`${(file.size / 1024).toFixed(2)} KB`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
```

---

## Accessibility

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
```typescript
<Button component="label" variant="contained">
  Upload File
  <input
    type="file"
    hidden
    onChange={handleFileChange}
    aria-label="Upload file"
  />
</Button>
```
- **Tab:** Focus on button
- **Enter/Space:** Activate file picker
- **Escape:** Cancel file picker (native)

#### ARIA Attributes
```typescript
{
  // On button/label
  "aria-label": "Upload file",
  "aria-describedby": "file-upload-help",

  // On file input
  "aria-required": true,
  "aria-invalid": hasError,
}
```

#### Screen Reader Support
- Button label announced
- File selection announced
- Upload progress announced
- Error messages announced
- Success state announced

#### Color Contrast
- Button text: 4.5:1 minimum
- Error messages: 4.5:1 minimum
- Drop zone border: Visible distinction
- Progress indicator: Clear visibility

---

## Code Examples

### Basic File Upload
```tsx
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

export default function BasicFileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Choose File
        <input
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {file && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </Typography>
      )}
    </div>
  );
}
```

### Drag and Drop Zone
```tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

export default function DragDropUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        border: isDragging ? '2px dashed' : '2px dashed',
        borderColor: isDragging ? 'primary.main' : 'divider',
        bgcolor: isDragging ? 'primary.light' : 'action.hover',
        borderRadius: 1,
        p: 4,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
    >
      <CloudUploadIcon sx={{ fontSize: 48, color: 'action.active', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        {file ? file.name : 'Drag and drop file here'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        or click to browse
      </Typography>
    </Box>
  );
}
```

### Multiple File Upload with Preview
```tsx
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useState } from 'react';

export default function MultipleFileUpload() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button component="label" variant="contained">
        Add Files
        <input type="file" hidden multiple onChange={handleFileChange} />
      </Button>
      {files.length > 0 && (
        <List sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemove(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <InsertDriveFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={file.name}
                secondary={`${(file.size / 1024).toFixed(2)} KB - ${file.type || 'Unknown type'}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
```

### Image Upload with Preview
```tsx
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function ImageUploadPreview() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Button component="label" variant="contained">
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
      {preview && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>Preview:</Typography>
          <Box
            component="img"
            src={preview}
            alt="Preview"
            sx={{
              maxWidth: 300,
              maxHeight: 300,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
```

### Upload with Validation
```tsx
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function ValidatedFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setError('');

    if (!selectedFile) return;

    if (selectedFile.size > MAX_SIZE) {
      setError('File size must be less than 5MB');
      return;
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('Only JPG, PNG, and PDF files are allowed');
      return;
    }

    setFile(selectedFile);
  };

  return (
    <>
      <Button component="label" variant="contained">
        Upload File (Max 5MB)
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {file && (
        <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
          ✓ {file.name} ready to upload
        </Typography>
      )}
    </>
  );
}
```

### Complete Upload Flow
```tsx
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function CompleteUploadFlow() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setSuccess(false);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError('');

    try {
      // Simulate upload
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setProgress(i);
      }
      setSuccess(true);
      setFile(null);
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button component="label" variant="outlined" disabled={uploading}>
          Choose File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button
          variant="contained"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          Upload
        </Button>
      </Box>

      {file && !uploading && !success && (
        <Typography variant="body2">
          Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </Typography>
      )}

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Uploading... {progress}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          File uploaded successfully!
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}
```

---

## Common Patterns

### Simple Upload Button
```tsx
<Button component="label" variant="contained">
  Upload
  <input type="file" hidden onChange={handleFileChange} />
</Button>
```

### Avatar Upload
```tsx
<Avatar>
  <IconButton component="label">
    <CameraAltIcon />
    <input type="file" hidden accept="image/*" />
  </IconButton>
</Avatar>
```

### Attachment Field
```tsx
<TextField
  fullWidth
  value={fileName}
  InputProps={{
    readOnly: true,
    endAdornment: (
      <IconButton component="label">
        <AttachFileIcon />
        <input type="file" hidden />
      </IconButton>
    ),
  }}
/>
```

---

## Validation

### File Size Validation
```typescript
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

if (file.size > MAX_SIZE) {
  alert('File too large');
}
```

### File Type Validation
```typescript
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

if (!ALLOWED_TYPES.includes(file.type)) {
  alert('Invalid file type');
}
```

### File Extension Validation
```typescript
const allowedExtensions = ['.jpg', '.png', '.pdf'];
const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

if (!allowedExtensions.includes(fileExtension)) {
  alert('Invalid file extension');
}
```

---

## Responsive Behavior

### Mobile (< 600px)
- Full-width buttons
- Simplified upload UI
- Native file picker
- Touch-optimized
- Camera access (accept="image/*" on mobile)

### Tablet (600px - 900px)
- Standard button sizes
- Drag-and-drop optional
- File list with details

### Desktop (> 900px)
- Drag-and-drop zones
- Multiple file selection
- File previews
- Advanced validation

---

## CDS Token Integration

### Uses CDS Button Tokens
```typescript
button-height: var(--sizing/button/medium, 40px);
button-padding: var(--spacing/4, 16px);
```

### Uses CDS Colors
```typescript
border-color: var(--color-palatte/divider);
bg-active: var(--color-palatte/primary/light);
```

### Uses CDS Spacing
```typescript
padding: var(--spacing/8, 32px);
gap: var(--spacing/2, 8px);
```

---

## Security Considerations

### File Validation
- Always validate file types on server
- Check file size limits
- Scan for malware
- Sanitize file names
- Use secure upload endpoints

### Dangerous File Types
```typescript
// Block these extensions
const BLOCKED_EXTENSIONS = [
  '.exe', '.bat', '.cmd', '.sh',
  '.js', '.vbs', '.msi', '.app'
];
```

---

## Version History

- **v1.0** - Initial CDS integration documentation
- Based on HTML5 File API + MUI v6.1.0 components
- Pattern-based implementation
- Uses CDS Button, IconButton, List, LinearProgress, Alert
- Full CDS token integration
- WCAG 2.1 Level AA accessibility compliance

---

**Note:** File Upload is a pattern, not a dedicated MUI component. This documentation provides best practices for implementing file upload using CDS components.
