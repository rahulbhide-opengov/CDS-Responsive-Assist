/**
 * CDS Extended Form Components (CDS-First Architecture)
 * Additional form components with CDS API - MUI is an implementation detail
 *
 * Developer uses CDS design language:
 * - Semantic prop names (value, onChange, disabled, etc.)
 * - Intuitive naming aligned with CDS design system
 */

import React from 'react';
import {
  Slider as MuiSlider,
  Rating as MuiRating,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ============================================================================
// CDS-FIRST TYPE DEFINITIONS
// ============================================================================

/**
 * CDS Slider Props (CDS API)
 */
export interface SliderProps {
  /**
   * Slider value (number or array for range)
   */
  value?: number | number[];

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number | number[];

  /**
   * Change handler
   */
  onChange?: (event: Event, value: number | number[]) => void;

  /**
   * Minimum value
   * @default 0
   */
  min?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Step increment
   * @default 1
   */
  step?: number;

  /**
   * Show marks at steps
   * @default false
   */
  marks?: boolean | Array<{ value: number; label?: string }>;

  /**
   * Show value label
   * @default 'off'
   */
  showValueLabel?: 'on' | 'off' | 'auto';

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Slider orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Slider color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';

  /**
   * Value label format function
   */
  valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

/**
 * CDS Rating Props (CDS API)
 */
export interface RatingProps {
  /**
   * Rating value
   */
  value?: number | null;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number;

  /**
   * Change handler
   */
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;

  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;

  /**
   * Precision (e.g., 0.5 for half stars)
   * @default 1
   */
  precision?: number;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean;

  /**
   * Size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Custom icon
   */
  icon?: React.ReactElement;

  /**
   * Custom empty icon
   */
  emptyIcon?: React.ReactElement;

  /**
   * Highlight selected only
   * @default false
   */
  highlightSelectedOnly?: boolean;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Name attribute
   */
  name?: string;

  /**
   * Accessible label
   */
  ariaLabel?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

/**
 * CDS Autocomplete Props (CDS API)
 */
export interface AutocompleteProps<T> {
  /**
   * Options array
   */
  options: T[];

  /**
   * Selected value(s)
   */
  value?: T | T[] | null;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: T | T[];

  /**
   * Change handler
   */
  onChange?: (event: React.SyntheticEvent, value: T | T[] | null) => void;

  /**
   * Input change handler
   */
  onInputChange?: (event: React.SyntheticEvent, value: string, reason: string) => void;

  /**
   * Render input element (required)
   */
  renderInput: (params: any) => React.ReactNode;

  /**
   * Get option label
   */
  getOptionLabel?: (option: T) => string;

  /**
   * Multiple selection
   * @default false
   */
  multiple?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Free solo (allow custom values)
   * @default false
   */
  freeSolo?: boolean;

  /**
   * Disable clearable button
   * @default false
   */
  disableClearable?: boolean;

  /**
   * Filter options function
   */
  filterOptions?: (options: T[], state: any) => T[];

  /**
   * Custom render option
   */
  renderOption?: (props: any, option: T) => React.ReactNode;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Component ID
   */
  id?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * MUI sx prop (escape hatch)
   */
  sx?: any;
}

/**
 * CDS RadioGroup Props (CDS API)
 */
export interface RadioGroupProps {
  /**
   * Selected value
   */
  value?: any;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: any;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

  /**
   * Radio group name
   */
  name?: string;

  /**
   * Children (Radio components)
   */
  children?: React.ReactNode;

  /**
   * Layout direction
   * @default 'column'
   */
  direction?: 'row' | 'column';

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

/**
 * Styled Slider with CDS tokens
 */
const StyledMuiSlider = styled(MuiSlider)(({ theme }) => ({
  height: 4,

  '& .MuiSlider-thumb': {
    width: 20,
    height: 20,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}33`,
    },
    '&.Mui-active': {
      boxShadow: `0 0 0 14px ${theme.palette.primary.main}33`,
    },
  },

  '& .MuiSlider-track': {
    height: 4,
    borderRadius: theme.shape.borderRadius / 2,
  },

  '& .MuiSlider-rail': {
    height: 4,
    opacity: 0.3,
    borderRadius: theme.shape.borderRadius / 2,
  },

  '& .MuiSlider-valueLabel': {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },

  '& .MuiSlider-mark': {
    width: 2,
    height: 8,
    backgroundColor: theme.palette.grey[400],
  },

  '& .MuiSlider-markActive': {
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * Styled Rating with CDS tokens
 */
const StyledMuiRating = styled(MuiRating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.warning.main,
  },

  '& .MuiRating-iconHover': {
    color: theme.palette.warning.dark,
  },

  '& .MuiRating-icon': {
    fontSize: '1.5rem',
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: theme.shape.borderRadius,
  },
}));

/**
 * Styled RadioGroup with CDS tokens
 */
const StyledMuiRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  gap: theme.spacing(1), // 4px gap between items

  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    marginRight: theme.spacing(2), // 8px right margin
    marginBottom: theme.spacing(0.5), // 2px bottom margin

    '& .MuiFormControlLabel-label': {
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
    },
  },
}));

// ============================================================================
// CDS FORM EXTENDED COMPONENTS
// ============================================================================

/**
 * CDS Slider Component
 *
 * Range slider for numeric input
 *
 * @example
 * // Basic slider
 * <Slider
 *   value={value}
 *   onChange={(e, val) => setValue(val)}
 *   min={0}
 *   max={100}
 * />
 *
 * @example
 * // Slider with marks and value label
 * <Slider
 *   value={value}
 *   onChange={handleChange}
 *   min={0}
 *   max={100}
 *   step={10}
 *   marks
 *   showValueLabel="auto"
 * />
 *
 * @example
 * // Range slider
 * <Slider
 *   value={[20, 80]}
 *   onChange={handleChange}
 *   min={0}
 *   max={100}
 *   showValueLabel="on"
 * />
 */
export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      marks = false,
      showValueLabel = 'off',
      disabled = false,
      orientation = 'horizontal',
      color = 'primary',
      valueLabelFormat,
      id,
      name,
      ariaLabel,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiSlider
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        marks={marks}
        valueLabelDisplay={showValueLabel}
        disabled={disabled}
        orientation={orientation}
        color={color}
        valueLabelFormat={valueLabelFormat}
        id={id}
        name={name}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
      />
    );
  }
);

Slider.displayName = 'Slider';

/**
 * CDS Rating Component
 *
 * Star rating input
 *
 * @example
 * // Basic rating
 * <Rating
 *   value={rating}
 *   onChange={(e, val) => setRating(val)}
 * />
 *
 * @example
 * // Half-star precision
 * <Rating
 *   value={rating}
 *   onChange={handleChange}
 *   precision={0.5}
 * />
 *
 * @example
 * // Read-only display
 * <Rating value={4.5} readOnly precision={0.5} />
 */
export const Rating = React.forwardRef<HTMLSpanElement, RatingProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      max = 5,
      precision = 1,
      disabled = false,
      readOnly = false,
      size = 'medium',
      icon,
      emptyIcon,
      highlightSelectedOnly = false,
      id,
      name,
      ariaLabel,
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiRating
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        max={max}
        precision={precision}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        icon={icon}
        emptyIcon={emptyIcon}
        highlightSelectedOnly={highlightSelectedOnly}
        id={id}
        name={name}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
      />
    );
  }
);

Rating.displayName = 'Rating';

/**
 * CDS Autocomplete Component
 *
 * Autocomplete input with suggestions
 *
 * @example
 * // Basic autocomplete
 * <Autocomplete
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   renderInput={(params) => <TextField {...params} label="Search" />}
 *   onChange={(e, val) => setValue(val)}
 * />
 *
 * @example
 * // Multiple selection
 * <Autocomplete
 *   multiple
 *   options={countries}
 *   getOptionLabel={(option) => option.name}
 *   renderInput={(params) => <TextField {...params} label="Countries" />}
 * />
 *
 * @example
 * // Free solo (custom values)
 * <Autocomplete
 *   freeSolo
 *   options={suggestions}
 *   renderInput={(params) => <TextField {...params} label="Tags" />}
 * />
 */
export const Autocomplete = <T,>(props: AutocompleteProps<T>) => {
  const theme = useTheme();

  const {
    options,
    value,
    defaultValue,
    onChange,
    onInputChange,
    renderInput,
    getOptionLabel,
    multiple = false,
    disabled = false,
    loading = false,
    freeSolo = false,
    disableClearable = false,
    filterOptions,
    renderOption,
    placeholder,
    id,
    className,
    sx,
  } = props;

  return (
    <MuiAutocomplete
      options={options}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onInputChange={onInputChange}
      renderInput={renderInput}
      getOptionLabel={getOptionLabel}
      multiple={multiple as any}
      disabled={disabled}
      loading={loading}
      freeSolo={freeSolo as any}
      disableClearable={disableClearable as any}
      filterOptions={filterOptions}
      renderOption={renderOption}
      placeholder={placeholder}
      id={id}
      className={className}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(0.5),

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
          },
        },

        '& .MuiAutocomplete-tag': {
          margin: theme.spacing(0.5),
          borderRadius: theme.shape.borderRadius,
        },

        '& .MuiAutocomplete-listbox': {
          padding: theme.spacing(1, 0),

          '& .MuiAutocomplete-option': {
            padding: theme.spacing(1.5, 2),
            minHeight: 48,

            '&[aria-selected="true"]': {
              backgroundColor: theme.palette.action.selected,
            },

            '&.Mui-focused': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },

        '& .MuiAutocomplete-paper': {
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[8],
        },

        ...sx,
      }}
    />
  );
};

/**
 * CDS RadioGroup Component
 *
 * Radio button group container
 *
 * @example
 * <RadioGroup value={value} onChange={handleChange}>
 *   <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
 *   <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
 * </RadioGroup>
 *
 * @example
 * // Horizontal layout
 * <RadioGroup value={value} onChange={handleChange} direction="row">
 *   <FormControlLabel value="yes" control={<Radio />} label="Yes" />
 *   <FormControlLabel value="no" control={<Radio />} label="No" />
 * </RadioGroup>
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      name,
      children,
      direction = 'column',
      className,
      sx,
    },
    ref
  ) => {
    return (
      <StyledMuiRadioGroup
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        row={direction === 'row'}
        className={className}
        sx={sx}
      >
        {children}
      </StyledMuiRadioGroup>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
