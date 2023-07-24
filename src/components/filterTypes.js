import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import SynagogueOutlinedIcon from '@mui/icons-material/SynagogueOutlined';
import TapasIcon from '@mui/icons-material/Tapas';
import TapasOutlinedIcon from '@mui/icons-material/TapasOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { indigo } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo'} };

export default function IconCheckboxes({setChanged}) {

  const filter = (type)=>{
    const idx = parseInt(type)-1;
    setChanged(idx);
    
  }

  return (
    <>
    <Typography variant='h5'>Filter by Categories: </Typography>
    <Grid container spacing={3} justifyItems='center' sx={{textAlign:'center', margin:'auto'}} justifyContent='center'>
      <Grid item>
      <FormControlLabel control={<Checkbox {...label} icon={<SynagogueOutlinedIcon sx={{color:indigo[700]}}/>} checkedIcon={<SynagogueIcon sx={{color:indigo[700]}}/>} id={'1'} onChange={(e)=>{filter(e.target.id)}}/>} label="Synagogue" />
      </Grid>
        <Grid item>
      <FormControlLabel control={<Checkbox {...label} icon={<Diversity1OutlinedIcon sx={{color:indigo[700]}}/>} checkedIcon={<Diversity1Icon sx={{color:indigo[700]}}/>} id={'2'} onChange={(e)=>{filter(e.target.id)}}/>} label="Beit Habad" />
      </Grid>
      <Grid item>
      <FormControlLabel control={<Checkbox {...label} icon={<TapasOutlinedIcon sx={{color:indigo[700]}}/>} checkedIcon={<TapasIcon sx={{color:indigo[700]}}/>} id={'4'} onChange={(e)=>{filter(e.target.id)}}/>} label="Restaurant" />
      </Grid>
      <Grid item>
      <FormControlLabel control={<Checkbox {...label} icon={<LocalGroceryStoreOutlinedIcon sx={{color:indigo[700]}}/>} checkedIcon={<LocalGroceryStoreIcon sx={{color:indigo[700]}}/>} id={'3'} onChange={(e)=>{filter(e.target.id)}}/>} label="SuperMarkets" />
      </Grid>
    </Grid>
    <hr/>
    </>
  );
}
