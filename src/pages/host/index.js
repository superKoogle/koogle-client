import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './host';

export default function HostorStay() {
    const [type, setType] = useState();

    return (
        <>
        <CustomizedButton text={"i want to host"} onClick={()=>{setType(1)}}></CustomizedButton>
        <CustomizedButton text={"i want to stay"} onClick={()=>{setType(2)}}></CustomizedButton>
        {type && <Host typeOf={type}></Host>}
        </>
    );
}
