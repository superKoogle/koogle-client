import * as React from 'react';
import { useState, useEffect } from "react";
import Habad from './habad';
import Retaurant from './restaurant';
import Supermarket from './supermarket';
import Synagogue from './synagogue';

export default function Try() {
const [flag,setFlag]=useState(0);

    return (
        <>
        <button onClick={()=>{setFlag(1)}}>beit habad</button>
        <button onClick={()=>{setFlag(2)}}>retaurant</button>
        <button onClick={()=>{setFlag(3)}}>supermarket</button>
        <button onClick={()=>{setFlag(4)}}>synagogue</button>
        {flag==1 && <Habad></Habad>}
        {flag==2 && <Retaurant></Retaurant>}
        {flag==3 && <Supermarket></Supermarket>}
        {flag==4 && <Synagogue></Synagogue>}
        
    </>
    );
}
