
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {Chip} from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const Uploader = ({file, setFile, label}) => {
  const [selectFile, setSelectFile] = useState(null) 

  useEffect(() => {
    if(selectFile){
        const formData = new FormData()
        formData.append("file", selectFile)
        axios.post("http://localhost:3500/api/upload",formData,{}).then(({data})=>{
        console.log(data.statusText)   
        if(data?.name){
            setFile(data.name)
           }
        }).catch(err=>{
            console.log("error", err)
        })
    }

  }, [selectFile])
    


  const onSelectFile = (e)=>{
    console.log(e.target.files[0])
    setSelectFile(e.target.files[0])
  }
  return (
    <>
     {!selectFile && <Button variant="outlined" component="label">{label? label : "File  "} &nbsp;<FileUploadOutlinedIcon/>
    <input type="file" onChange={onSelectFile} id="file" hidden/>
    </Button>}
   
    
{selectFile && <Chip variant="outlined" color="primary" onDelete={()=>{setSelectFile(null)}} icon={<ImageOutlinedIcon />} label={selectFile.name}/>}

    </>
  )
}

export default Uploader