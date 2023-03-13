import * as React from 'react';
import { useState, useEffect } from "react";
import PlaceDetailes from './placeDetailes';
import Retaurant from './restaurant';
import Supermarket from './supermarket';
import Synagogue from './synagogue';

export default function Try() {
const [type,setType]=useState();

    return (
        <> 
        <button onClick={()=>{setType(1)}}>synagogue</button>
        <button onClick={()=>{setType(2)}}>beit habad</button>
        <button onClick={()=>{setType(3)}}>supermarket</button>
        <button onClick={()=>{setType(4)}}>retaurant</button>
       
{type && <PlaceDetailes typeOf={type}></PlaceDetailes>}
        
    </>
    );
}
