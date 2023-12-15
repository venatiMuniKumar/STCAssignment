import React from 'react';
import { FormControl, Select, MenuItem, InputBase } from '@mui/material';
import { styled } from '@mui/system';

// const CustomFormControl = (props) => {
//   const theme = useTheme();
//       const StyledFormControl = styled(FormControl)({
//     margin: theme.spacing(1),
//     minWidth: 120,
//     '& .MuiInputBase-root': {
//       color: theme.palette.primary.main,
//       '&.Mui-focused': {
//         borderColor: theme.palette.primary.main,
//       },
//     },
//     '& .MuiSelect-select': {
//       padding: theme.spacing(1.25, 4, 1.25, 1.5),
//       borderRadius: theme.shape.borderRadius,
//       borderColor: theme.palette.primary.main,
//       boxShadow: 'none',
//       '&:focus': {
//         borderRadius: theme.shape.borderRadius,
//         borderColor: theme.palette.primary.main,
//         boxShadow: 'none',
//       },
//     },
//     '& .MuiOutlinedInput-notchedOutline': {
//       borderColor: 'transparent',
//     },
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       borderColor: theme.palette.primary.main,
//     },
//     '& .MuiSvgIcon-root': {
//       color: theme.palette.primary.main,
//     },
//   });
//   return <StyledFormControl {...props} />;
//  };
const dropdownColor = '#F0E8F4';
const CustomSelect = styled(Select)({
  '& .MuiSelect-select': {
    backgroundColor: dropdownColor,
    color: 'Black',
    padding: '10px 26px 10px 12px',
    borderRadius: '6px',
    "&:focus": {
      backgroundColor: dropdownColor,
    }
  },
  '& .MuiSvgIcon-root': {
    color: 'black',
  },
  '& .MuiInputBase-root': {
    '&:before, &:after': {
      display: 'none',
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover:not(.Mui-disabled):before': {
    border: 'none',
  },
});
const CustomInput = styled(InputBase)({
  '&& .MuiInputBase-input': {
    backgroundColor: dropdownColor,
    color: 'black',
    borderRadius: '4px',
    padding: '10px',
    border:'1px solid white',
  },
});


// Filters component
const Filters = ({ categories, onCategoryChange, sortOptions, onSortChange }) => {
  
  return (
    <div style={{ display: 'flex', boxShadow:'0px 3px 5px rgba(0, 0, 0, 0.2)', justifyContent: 'space-between', padding: '16px', gap: '16px' }}>
      <FormControl variant="outlined" sx={{ minWidth: '280px' }}>
        <CustomSelect
          defaultValue=""
          onChange={onCategoryChange}
          input={<CustomInput />}
          displayEmpty
        >
          <MenuItem value="" disabled>Categories</MenuItem>
          {categories?.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </CustomSelect>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: '120px' }}>
        <CustomSelect
          defaultValue=""
          onChange={onSortChange}
          input={<CustomInput />}
          displayEmpty
        >
          <MenuItem value="" disabled>Sort</MenuItem>
          {sortOptions?.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
};

export default Filters;
