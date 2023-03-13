import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Restaurant({setRestaurantPhone,setRestaurantType,setRestaurantHechsher,setRestaurantSiteLink,setRestaurantStars}) {
  
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
          helperText="phone"
          variant="standard"
          onInput={(e)=>{setRestaurantPhone(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="type"
          variant="standard"
          onInput={(e)=>{setRestaurantType(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="hechsher"
          variant="standard"
          onInput={(e)=>{setRestaurantHechsher(e.target.value)}}
        />
        <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="site link"
          variant="standard"
          onInput={(e)=>{setRestaurantSiteLink(e.target.value)}}
        />
            <TextField
          id="standard-helperText"
          defaultValue=""
          helperText="stars"
          variant="standard"
          onInput={(e)=>{setRestaurantStars(e.target.value)}}
        />
      </div>
    </Box>
    </> 
    );
}
