import { Grid } from '@mui/material';
import {useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react'
import SinglePlace from '../../components/SinglePlace'
import PrimaryPlace from './PrimaryPlace';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '9px'
  }));

const PlacesDetails = ({})=>{
    const [selected, setSelected] = useState(-1);
    const location = useLocation();
   
   const {idx, places} = location.state;
   console.log(location.state);
return (<>
    <Grid container spacing={0}>
        <Grid item xs={6} md={8}>
        <Grid container spacing={2}>
            {places.map((place, i)=>
                    <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.type} id={i} setSelected={setSelected}/>
                )}
            </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
        <Item><PrimaryPlace place={selected!=-1? places[selected]:places[idx]}></PrimaryPlace></Item>
        </Grid>
    </Grid>
</>);

}

export default PlacesDetails;