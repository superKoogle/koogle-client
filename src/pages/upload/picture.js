


import Uploader from "./uploader"
import { useState } from "react"

export default function Picture({picture,setPicture})
{
    

    return (
        <>
         <Uploader file={picture} setFile={setPicture} label="Add Picture" />
        </>
    )
}
