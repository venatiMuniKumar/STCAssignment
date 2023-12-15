import React, { useState } from 'react';
import './ImportantInfo.css';
import { Select, MenuItem, InputBase, FormControl } from '@mui/material';
import { styled } from '@mui/system';

const ImportantInfo = () => {
  const [details, setDetails] = useState('');

  const dropdownColor = '#6A1B9A'; // This is the color you provided

  const CustomSelect = styled(Select)({
    '& .MuiSelect-select': {
      backgroundColor: dropdownColor,
      color: 'white',
      padding: '10px 26px 10px 12px',
      borderRadius: '4px',
      "&:focus": {
        backgroundColor: dropdownColor,
      }
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
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
      color: 'white',
      borderRadius: '4px',
      padding: '10px',
      border:'1px solid white',
    },
  });

  const handleChange = (event) => {
    setDetails(event.target.value);
  };

  return (
    <div className="important-info-container">
      <div className="important-info-text">
        Important to know
        <div className="important-info-subtext">
          The must-know legal bits and details about this service.
        </div>
      </div>
      <FormControl>
        <CustomSelect
          value={details}
          onChange={handleChange}
          input={<CustomInput />}
          displayEmpty
          renderValue={
            details !== "" ? undefined : () => <span>View details</span>
          }
        >
          <MenuItem value="detail1">Detail 1</MenuItem>
          <MenuItem value="detail2">Detail 2</MenuItem>
          <MenuItem value="detail3">Detail 3</MenuItem>
        </CustomSelect>
      </FormControl>
    </div>
  );
};

export default ImportantInfo;
