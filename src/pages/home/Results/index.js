import { useState } from "react"

const resultList = ({ location }) => {
    const [results, setResults] = useState([]);

    useEffect = () => {
        setRestults(search(location))
        ,[location]
    }

    return (results.map(() => { <></> }))
}
