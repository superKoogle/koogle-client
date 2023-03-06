import { useEffect } from "react";
import { useState } from "react";


const Location = ({ setLocation }) => {
    const [address, setAddress] = useState();
    const [suggestions, setSuggestions] = useState();
    const getSuggestions = async () => {
        if(!address)return;
        const response = await fetch('http://localhost:3500/api/maps/complete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: address })
        })
        if (response.ok) {
            setSuggestions(await response.json());
        }
    }

    useEffect(()=>{getSuggestions()}, [address]);
    //const p = ["yam suf", "yarmuch", "yamit"]
    return (<><input placeholder="your location" onChange={e => setAddress(e.target.value)}></input>
        <select onChange={e => {console.log(e.target.value);setLocation(e.target.value)}}>
            {suggestions && suggestions.map(s => <option>{s.address}</option>)}
            {/*p.map(s => <option>{s}</option>)*/}
        </select></>)
}

export default Location