
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function RadioButtonsGroup({flag}) {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="always avalible" onClick={()=>{flag(true)}} control={<Radio/>} label="Always avalible" />
          <FormControlLabel value="choose dates" onClick={()=>{flag(false)}} control={<Radio/>} label="choose dates" />
        </RadioGroup>
      </FormControl>
    );
  }