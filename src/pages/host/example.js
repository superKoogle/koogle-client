import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Image } from '@mui/icons-material';


export default function Example()
{
    var items = [
        {
            name: "1 theh best place for hosting",
            description: "theh best place for hosting",
            image:"http://localhost:3500/images/room1.jpg"
        },
        {
            name: "2 theh best place for hosting",
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room2.jpg"
        },
        {
            name:"3 theh best place for hosting",
            description:"theh best place for hosting",
            image: "http://localhost:3500/images/room3.jpg"
        },
        {
            name:"4 theh best place for hosting",
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room4.jpg"
        },
        {
            name:"5 theh best place for hosting",
            description: "theh best place for hosting",
            image:"http://localhost:3500/images/room5.jpg"
        },
        {
            name:"5 theh best place for hosting",
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room6.jpg"
        },
        {
            name:"5 theh best place for hosting",
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room7.jpg"
        },

    ]

    return (


        <Carousel animation='slide' duration={2500}>
            {
                items.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className="carousel-image" sx={{flexFlow:"column", backgroundImage:`url(${props.item.image})` , backgroundSize:"100% 100%" }}>
            <h2>{props.item.name}</h2>
            <p style={{height:"400px"}}>{props.item.description}</p>
        </Paper>
    )
}