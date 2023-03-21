import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import SinglePlace from '../../components/SinglePlace'
import { getPlaces } from '../../fetchPlaces';
import PrimaryPlace from './PrimaryPlace';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '9px'
}));

const PlacesDetails = ({ }) => {
    const [selected, setSelected] = useState(-1);
    const [places, setPlaces] = useState();
    const location = useLocation();

    //const { places } = location.state||{};
    const searchParams = new URLSearchParams(location.search);
    const idx = parseInt(searchParams.get('idx'));
    const userLocation = searchParams.get('loc') || null;
    console.log(userLocation);

    const getResults = async () => {
        const places = await getPlaces(userLocation);
        setPlaces(places);
        console.log("selected", places[selected]);
        console.log(selected);
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSelected(parseInt(searchParams.get('idx')));
        const userLocation = searchParams.get('loc') || null;
        console.log(userLocation);
        getResults(userLocation);
    }, [])

    useEffect(() => {
        searchParams.set('idx', selected);
        location.search = searchParams.toString();
        //console.log(location.toString())
    }, [selected])

    return (<>
        <Grid container spacing={0}>
            <Grid item xs={6} md={8}>
                <Grid container spacing={2}>
                    {places?.map((place, i) =>
                        <SinglePlace name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.type} id={i} setSelected={setSelected} />
                    )}
                </Grid>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>{places && <PrimaryPlace place={places[selected]} userLocation={userLocation}></PrimaryPlace>}</Item>
            </Grid>
        </Grid>
    </>);

}

export default PlacesDetails;