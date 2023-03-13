import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Synagogue({setNusach}) {
 
    return (
        <>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-helperText"
          defaultValue="hasidish"
          helperText="nusach"
          variant="standard"
          onInput={(e)=>{setNusach(e.target.value)}}
        />
      </div>
    </Box>
    </> 
    );
}
