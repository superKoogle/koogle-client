import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { indigo } from '@mui/material/colors';

export default function Location({ setLocation, location }) {
    const [address, setAddress] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const getSuggestions = async () => {
        if (!address) return;
        const response = await fetch('http://localhost:3500/api/maps/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: address })
        })
        if (response?.ok) {
            const options = await response.json();
            setSuggestions(options);
        }
    }

    const findLocation = async (loc) => {
        const response = await fetch('http://localhost:3500/api/maps/geocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: loc })
        })
        console.log(response);
        if (response?.ok) {
            const newLocation = await response.json();
            if (newLocation)
                setLocation(newLocation);
        }
    }

    const getAddress = async()=>{
        console.log("get address for",location);
        const response = await fetch('http://localhost:3500/api/maps/reverseGeocode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({lat: location.lat, lng: location.lng})
    })
    const data = await response.json();
    console.log(data.results[0].formatted_address);
    setAddress(data.results[0].formatted_address);
    }

    useEffect(()=>{getAddress()},[])

    useEffect(() => { getSuggestions() }, [address]);
    return (
        <>
            <Autocomplete
                sx={{ margin: "20px", color: indigo[700] }}
                color={indigo[700]}
                id="free-solo-demo"
                freeSolo
                defaultValue={address}
                options={suggestions}
                onChange={e => { findLocation(e.target.innerHTML) }}
                renderInput={(params) => <TextField 
                    {...params}
                    label="Your location"
                    onChange={e => setAddress(e.target.value)} />}
            />
        </>
    );
}
