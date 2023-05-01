import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


export default function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "/pics/susan.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/pics/default.jpg"
        },
        {
            name: "Random Name #3",
            description: "Hello avigail!",
            image: "/pics/reka.jpg"
        },
        {
            name: "Random Name #4",
            description: "Hello noah!",
            image: "/pics/address.png"
        }

    ]

    return (


        <Carousel duration>
            {
                items.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{display:"flex",flexFlow:"column", backgroundImage:`url(${props.item.image})` , backgroundSize:"100% 100%"}}>
            <h2>{props.item.name}</h2>
            <p style={{height:"170px"}}>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}