import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function ReportToFill({wrongField, setWrongField, setText}) {
  //const [wrongField, setWrongField] = React.useState('');
  const [filled, setFilled] = React.useState(false);
  const handleChange = (event) => {
    setWrongField(event.target.value);
    setFilled(true);
  };

  return (
    <>
      <FormControl required sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-required-label">The Wrong field</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={wrongField}
          label="Wrong field *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Place name</MenuItem>
          <MenuItem value={2}>Place address</MenuItem>
          <MenuItem value={3}>Open hours</MenuItem>
          <MenuItem value={4}>Place Image</MenuItem>
          <MenuItem value={5}>Other</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      {filled && <TextField
           autoFocus
           margin="dense"
          id="standard-multiline-static"
          label="Do you know the correct info? please share it with us"
          fullWidth
          multiline
          maxRows={4}
          variant="standard"
          onInput={(e)=>{setText(e.target.value)}}
        />}
      </>
  );
}
