import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function Supermarket({ setMarketPhone,setMarketSiteLink}) {

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
          helperText="phone"
          variant="standard"
          onInput={(e)=>{setMarketPhone(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          placeholder='hhhh@co.il'
          helperText="site link"
          variant="standard"
          onInput={(e)=>{setMarketSiteLink(e.target.value)}}
        />
      </div>
    </Box>
    
    </> 
    );
}
