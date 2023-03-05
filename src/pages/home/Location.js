import { useEffect } from "react";
import { useState } from "react"


const Location = ({ setLocation }) => {
    const [address, setAddress] = useState();
    const [suggestions, setSuggestions] = useState();
    const getSuggestions = async () => {
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

    useEffect(getSuggestions, [address]);

    return (<><input placeholder="your location" onChange={e => setAddress(e.target.value)}></input>
        <select onSelect={e => setLocation(e.target.value)}>
            {suggestions.map(s => <option>{s.address}</option>)}
        </select></>)
}