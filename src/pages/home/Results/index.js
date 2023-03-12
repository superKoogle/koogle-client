import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import SinglePlace from "../../../components/SinglePlace";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Results({ location }) {
  const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState(-1);
     
    const getPlaces = async () => {
        if(!location)return;
        const response = await fetch('http://localhost:3500/api/places/general', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address:location, maxDistance:100000 })
        })
        if(response?.ok){
            const places = await response.json();
            setResults(places);
           // console.log(places);
        }
    }

    useEffect(()=>{getPlaces()}, [location])
    useEffect(()=>{if(selected!=-1){navigate('/placeDetails', {state:{idx:selected,places:results}})}},[selected])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={4}>
      {results.map((place, i) => {return <Grid item xs={4}>

        <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.place_type} key={i} setSelected={setSelected}/>

        </Grid> })}
      </Grid>
    </Box>
  );
}
