import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import SinglePlace from '../../components/SinglePlace'
import { getPlaces } from '../../fetchPlaces';
import PrimaryPlace from './PrimaryPlace';
import IconCheckboxes from '../../components/filterTypes';

const Item = styled(Paper)(({ theme }) => ({
    boxShadow:0,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '9px'
}));

const PlacesDetails = ({ }) => {
    const [filterTypes, setFilterTypes] = useState([true, true, true, true]);
    const [changed, setChanged] = useState(-1);
    const [selected, setSelected] = useState(-1);
    const [places, setPlaces] = useState();
    const location = useLocation();

    //const { places } = location.state||{};
    const searchParams = new URLSearchParams(location.search);
    const idx = parseInt(searchParams.get('idx'));
    const lat = searchParams.get('lat') || null;
    const lng = searchParams.get('lng') || null;
    const userLocation = {lat, lng}

    const getResults = async () => {
        const places = await getPlaces(userLocation);
        setPlaces(places);
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSelected(parseInt(searchParams.get('idx')));
        const userLocation = {lat:searchParams.get('lat'), lng:searchParams.get('lng')}; 
        getResults(userLocation);
    }, [])

    useEffect(() => {
        searchParams.set('idx', selected);
        location.search = searchParams.toString();
        //console.log(location.toString())
    }, [selected])

    useEffect(()=>{
        if(changed==-1)return;
        const values = filterTypes.map((t, i)=>{if(i==changed) return(!t); return(t);});
        setFilterTypes(values)
    }
    ,[changed])

    useEffect(()=>{setChanged(-1)}, [filterTypes])

    return (<>
    <IconCheckboxes setChanged={setChanged}/>
        <Grid container spacing={0}>
            <Grid item xs={6} md={9}>
                <Grid container spacing={2}>
                    {places?.filter((p) => {return (filterTypes[parseInt(p.place_type)-1]==true)}).map((place, i) =>
                        <SinglePlace key={i} name={place.place_name} address={place.place_address} hours={place.place_hours} img={place.place_img} type={place.type} id={i} setSelected={setSelected} />
                    )}
                </Grid>
            </Grid>
            <Grid item xs={6} md={3} >
                <Item sx={{boxShadow:0, bgcolor:'#fffef4'}}>{places && <PrimaryPlace place={places[selected]} userLocation={userLocation}></PrimaryPlace>}</Item>
            </Grid>
        </Grid>
    </>);
}

export default PlacesDetails;