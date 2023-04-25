import * as React from 'react';
import { useState } from "react";
import CustomizedButton from '../../components/Button'
import { Grid } from '@mui/material';
import Synagogue from './Synagogue';
import BeitHabad from './BeitHabad';
import Restaurant from './Restaurant';
import Supermarket from './Supermarket';

export default function AddPlace() {
    const [type, setType] = useState();

    return (
        <>
           <h1>Which place would you like to add?</h1>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                    <CustomizedButton text={"Synagogue"} onClick={() => { setType(1) }}></CustomizedButton>
                </Grid>
                <Grid item>
                    <CustomizedButton text={"Beit habad"} onClick={() => { setType(2) }}></CustomizedButton>
                </Grid>
                <Grid item>
                    <CustomizedButton text={"Restaurant"} onClick={() => { setType(3) }}></CustomizedButton>
                </Grid>
                <Grid item>
                    <CustomizedButton text={"Supermarket"} onClick={() => { setType(4) }}></CustomizedButton>
                </Grid>
            <Grid item xs={12}>
            {type == 1 && <Synagogue></Synagogue>}
            {type == 2 && <BeitHabad></BeitHabad>}
            {type == 3 && <Restaurant></Restaurant>}
            {type == 4 && <Supermarket></Supermarket>}
            </Grid>
            </Grid>
        </>
    );
}
