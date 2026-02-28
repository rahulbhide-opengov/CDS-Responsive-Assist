/**
 * CDS File Upload Component (CDS-First Architecture)
 * File input with drag-and-drop, validation, and CDS API
 *
 * Developer uses CDS design language:
 * - accept: file type string (semantic)
 * - maxSize: number in bytes
 * - onUpload: async upload handler
 * - Intuitive prop names aligned with CDS design system
 */

import React, { useState, useCallback, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * File Upload File (internal type)
 */
export interface FileUploadFile {
  file: File;
  id: string;
  progress?: number;
  error?: string;
}

/**
 * CDS FileUpload Props (CDS API)
 */
export interface FileUploadProps {
  /**
   * Accepted file types (e.g., "image/*", "application/pdf", ".jpg,.png")
   */
  accept?: string;

  /**
   * Maximum file size in bytes
   * @default 10485760 (10MB)
   */
  maxSize?: number;

  /**
   * Allow multiple file selection
   * @default false
   */
  multiple?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback when files are selected
   */
  onChange?: (files: File[]) => void;

  /**
   * Callback when files are uploaded (async upload handler)
   */
  onUpload?: (files: File[]) => Promise<void>;

  /**
   * Custom text for drop zone
   * @default 'Drag & drop files here, or click to select'
   */
  dropZoneText?: string;

  /**
   * Show file list below drop zone
   * @default true
   */
  showFileList?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

// ============================================================================
// STYLED COMPONENTS (CDS Styling Priority)
// ============================================================================

const DropZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: theme.transitions.create(['border-color', 'background-color'], {
    duration: theme.transitions.duration.short,
  }),

  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },

  '&.drag-active': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
  },

  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
    '&:hover': {
      borderColor: theme.palette.divider,
      backgroundColor: 'transparent',
    },
  },
}));

// ============================================================================
// CDS FILE UPLOAD COMPONENT
// ============================================================================

/**
 * CDS FileUpload Component
 *
 * File input with drag-and-drop, validation, and progress tracking
 *
 * @example
 * // Basic file upload
 * <FileUpload
 *   accept="image/*"
 *   maxSize={5242880} // 5MB
 *   multiple
 *   onChange={(files) => console.log('Selected:', files)}
 * />
 *
 * @example
 * // With async upload handler
 * <FileUpload
 *   accept=".pdf,.doc,.docx"
 *   onUpload={async (files) => {
 *     await uploadToServer(files);
 *   }}
 * />
 *
 * @example
 * // Custom drop zone text
 * <FileUpload
 *   accept="image/*"
 *   dropZoneText="Drop your images here"
 *   showFileList={false}
 * />
 */
export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  maxSize = 10485760, // 10MB default
  multiple = false,
  disabled = false,
  onChange,
  onUpload,
  dropZoneText = 'Drag & drop files here, or click to select',
  showFileList = true,
  className,
  sx,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<FileUploadFile[]>([]);
  const [error, setError] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${(maxSize / 1048576).toFixed(1)}MB`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map((t) => t.trim());
      const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      const mimeType = file.type;

      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith('.')) {
          return fileExtension === type;
        }
        if (type.endsWith('/*')) {
          return mimeType.startsWith(type.replace('/*', ''));
        }
        return mimeType === type;
      });

      if (!isAccepted) {
        return `File type not accepted. Accepted: ${accept}`;
      }
    }
    return null;
  }, [accept, maxSize]);

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList || disabled) return;

    const newFiles: File[] = [];
    const errors: string[] = [];

    Array.from(fileList).forEach((file) => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
      } else {
        newFiles.push(file);
      }
    });

    if (errors.length > 0) {
      setError(errors.join('; '));
    } else {
      setError('');
    }

    if (newFiles.length > 0) {
      const fileObjects: FileUploadFile[] = newFiles.map((file) => ({
        file,
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        progress: 0,
      }));

      setFiles((prev) => (multiple ? [...prev, ...fileObjects] : fileObjects));
      onChange?.(newFiles);

      if (onUpload) {
        setUploading(true);
        onUpload(newFiles)
          .then(() => {
            setFiles((prev) =>
              prev.map((f) =>
                fileObjects.find((fo) => fo.id === f.id)
                  ? { ...f, progress: 100 }
                  : f
              )
            );
          })
          .catch((err) => {
            setError(err.message || 'Upload failed');
          })
          .finally(() => {
            setUploading(false);
          });
      }
    }
  }, [disabled, multiple, validateFile, onChange, onUpload]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, [disabled]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  }, [disabled, handleFiles]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      inputRef.current?.click();
    }
  }, [disabled]);

  const handleRemove = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <Box sx={sx} className={className}>
      <DropZone
        className={`${dragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          style={{ display: 'none' }}
        />
        <Typography variant="body1" gutterBottom>
          {dropZoneText}
        </Typography>
        <Button variant="contained" disabled={disabled} sx={{ mt: 2 }}>
          Select Files
        </Button>
        {accept && (
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
            Accepted: {accept}
          </Typography>
        )}
        {maxSize && (
          <Typography variant="caption" color="text.secondary">
            Max size: {(maxSize / 1048576).toFixed(1)}MB
          </Typography>
        )}
      </DropZone>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {showFileList && files.length > 0 && (
        <List sx={{ mt: 2 }}>
          {files.map((fileObj) => (
            <ListItem key={fileObj.id}>
              <ListItemText
                primary={fileObj.file.name}
                secondary={`${(fileObj.file.size / 1024).toFixed(1)} KB`}
              />
              {fileObj.progress !== undefined && fileObj.progress < 100 && (
                <Box sx={{ width: '100px', mr: 2 }}>
                  <LinearProgress variant="determinate" value={fileObj.progress} />
                </Box>
              )}
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemove(fileObj.id)}
                  disabled={uploading}
                >
                  ×
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export type { FileUploadFile };
