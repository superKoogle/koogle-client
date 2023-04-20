


import Uploader from "./uploader"
import { useState } from "react"

export default function Picture()
{
    const [picture,setPicture] = useState("")

    return (
        <>
         <Uploader file={picture} setFile={setPicture} label="Add Picture" />
        </>
    )
}
