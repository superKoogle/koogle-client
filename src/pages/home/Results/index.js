import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import SinglePlace from "../../../components/SinglePlace";
import { getPlaces } from "../../../fetchPlaces";
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

export default function Results({ location, range,results, setResults }) {
  const navigate = useNavigate();
  
  const [selected, setSelected] = useState(-1);


  const getResults = async () => {
    const places = await getPlaces(location);
    setResults(places);
  }

  useEffect(() => {
    getResults()
  }, [location])

  useEffect(() => {
   if(selected!=-1)
      navigate(`/placeDetails?lat=${location.lat}&lng=${location.lng}&idx=${selected}`); 
  },
    [selected])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {results.length > 0 ? results.filter(place => place.distance <= range)
          .map((place, i) => {
            return <Grid item xs={6}>

              <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.type} id={i} setSelected={setSelected} />

            </Grid>
          }) : <h4>Sorry. no places found in your area.</h4>}
      </Grid>
    </Box>
  );
}
