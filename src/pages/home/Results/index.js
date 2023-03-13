import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import SinglePlace from "../../../components/SinglePlace";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Results.css'

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
            const _places = await response.json();
            const places = _places.map((p)=>{return {...p, type:p.place_type==1?'synagogue':p.place_type==2?'Beit habad':p.place_type==3?'Supermarket':'Restaurant'}})
            setResults(places);
        }
        else{
          setResults([]);
        }
    }

    useEffect(()=>{getPlaces()}, [location])
    useEffect(()=>{if(selected!=-1){console.log(selected);navigate('/placeDetails', {state:{idx:selected,places:results}})}},[selected])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={4}>
      {results.length>0 ? results.map((place, i) => {return <Grid item xs={4}>

        <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.type} id={i} setSelected={setSelected}/>

        </Grid> }): <h4>Sorry. no places found in your area.</h4>}
      </Grid>
    </Box>
  );
}
