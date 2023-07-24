import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


export default function CarouselImg()
{
    var items = [
        {
            
            description: "theh best place for hosting",
            image:"http://localhost:3500/images/room1.jpg"
        },
        {
           
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room2.jpg"
        },
        {
            
            description:"theh best place for hosting",
            image: "http://localhost:3500/images/room3.jpg"
        },
        {
           
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room4.jpg"
        },
        {
         
            description: "theh best place for hosting",
            image:"http://localhost:3500/images/room5.jpg"
        },
        {
            
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room6.jpg"
        },
        {          
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
            <p style={{height:"300px"}}>{props.item.description}</p>
        </Paper>
    )
}