import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Retaurant() {

    //habad_intermediary, habad_phone, habad_site_link 

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
          defaultValue="example@.co.il"
          helperText="habad_site_link"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="habad_intermediary"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="habad_phone"
          variant="standard"
        />
      </div>
    </Box>
    </> 
    );
}
