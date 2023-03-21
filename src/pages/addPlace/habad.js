import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Habad({setHabadSiteLink,setIntermediary,setHabadPhone}) {
  
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
          placeholder="example@.co.il"
          helperText="site link"
          variant="standard"
          onInput={(e)=>{setHabadSiteLink(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="intermediary"
          variant="standard"
          onInput={(e)=>{setIntermediary(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="phone"
          variant="standard"
          onInput={(e)=>{setHabadPhone(e.target.value)}}
        />
      </div>
    </Box>
    </> 
    );
}
