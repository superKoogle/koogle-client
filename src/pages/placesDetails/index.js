import { Grid } from '@mui/material';
import {useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'
import SinglePlace from '../../components/SinglePlace'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '9px'
  }));

const PlacesDetails = ({})=>{
    const location = useLocation();
   
   const {idx, places} = location.state;
return (<>
    <Grid container spacing={0}>
        <Grid item xs={6} md={8}>
        <Grid container spacing={2}>
            {places.map((place)=>
                <Item>
                    <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.place_type}/>
                </Item>)}
            </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
        <Item>{places[idx]}{/*<primaryPlace place={places[idx]}></primaryPlace>*/}</Item>
        </Grid>
    </Grid>
</>);

}

export default PlacesDetails;