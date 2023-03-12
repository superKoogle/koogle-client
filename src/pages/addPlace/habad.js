import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';


export default function Habad() {

 const [SiteLink,setSiteLink]=useState();
 const [Intermediary,setIntermediary]=useState();
 const [Phone,setPhone]=useState();

    return (
        <>
        <Box
           component="form"
           sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
           noValidate
           autoComplete="off"
        >
      <div>
        <TextField
          id="standard-helperText"
          defaultValue="example@.co.il"
          helperText="habad_site_link"
          variant="standard"
          onInput={(e)=>{setSiteLink(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="habad_intermediary"
          variant="standard"
          onInput={(e)=>{setIntermediary(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="habad_phone"
          variant="standard"
          onInput={(e)=>{setPhone(e.target.value)}}
        />
      </div>
    </Box>
   
    </> 
   );
}
