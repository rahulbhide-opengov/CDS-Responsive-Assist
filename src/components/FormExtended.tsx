/**
 * CDS Extended Form Components
 * Additional form input components with CDS tokens
 */

import React from 'react';
import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

/**
 * CDS Slider
 * Range slider with CDS styling
 *
 * @example
 * <CDSSlider
 *   value={value}
 *   onChange={handleChange}
 *   min={0}
 *   max={100}
 *   valueLabelDisplay="auto"
 * />
 */
export const CDSSlider = styled(MuiSlider)(({ theme }) => ({
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
 * CDS Rating
 * Star rating input with CDS styling
 *
 * @example
 * <CDSRating
 *   value={rating}
 *   onChange={handleChange}
 *   precision={0.5}
 * />
 */
export const CDSRating = styled(MuiRating)(({ theme }) => ({
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
 * CDS Autocomplete
 * Autocomplete input with CDS styling
 * Wrapper component that applies CDS tokens
 *
 * @example
 * <CDSAutocomplete
 *   options={options}
 *   renderInput={(params) => <CDSTextField {...params} label="Search" />}
 * />
 */
export const CDSAutocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  props: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
  const theme = useTheme();

  return (
    <MuiAutocomplete
      {...props}
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

        ...props.sx,
      }}
    />
  );
};

/**
 * CDS RadioGroup
 * Radio button group with CDS spacing
 *
 * @example
 * <CDSRadioGroup value={value} onChange={handleChange}>
 *   <FormControlLabel value="option1" control={<CDSRadio />} label="Option 1" />
 *   <FormControlLabel value="option2" control={<CDSRadio />} label="Option 2" />
 * </CDSRadioGroup>
 */
export const CDSRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
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

// Type exports
export type CDSSliderProps = MuiSliderProps;
export type CDSRatingProps = MuiRatingProps;
export type CDSAutocompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
> = MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;
export type CDSRadioGroupProps = MuiRadioGroupProps;
