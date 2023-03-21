import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Habad from './habad';
import Supermarket from './supermarket';
import Restaurant from './restaurant';
import Synagogue from './synagogue';

export default function PlaceDetailes({ typeOf }) {
  const [valid, setValid] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [hours, setHours] = useState();
  const [img, setImg] = useState();
  const [nusach, setNusach] = useState();
  const [habadSiteLink, setHabadSiteLink] = useState();
  const [intermediary, setIntermediary] = useState();
  const [habadPhone, setHabadPhone] = useState();
  const [marketPhone, setMarketPhone] = useState();
  const [marketSiteLink, setMarketSiteLink] = useState();
  const [restaurantPhone, setRestaurantPhone] = useState();
  const [restaurantType, setRestaurantType] = useState();
  const [restaurantHechsher, setRestaurantHechsher] = useState();
  const [restaurantSiteLink, setRestaurantSiteLink] = useState();
  const [restaurantStars, setRestaurantStars] = useState();
  const [err, setErr] = useState();


  const detailesObj = { place_name: name, place_address: address, place_hours: hours, place_img: img, place_type: typeOf }

  const addPlaceDetailes = async () => {
    switch (typeOf) {
      case 1:
        nusach ? setValid(true) : setErr("required field")
        break;
      case 2:
        (intermediary && habadPhone && habadSiteLink) ? setValid(true) : setErr("required fields")
        break;
      case 3:
        (marketPhone && marketSiteLink) ? setValid(true) : setErr("required fields")
        break;
      case 4:
        restaurantPhone && restaurantType && restaurantHechsher && restaurantSiteLink && restaurantStars ? setValid(true) : setErr("required field")
        break;
    }
    if (valid) {
      const token = sessionStorage.getItem("token");
      if (!token) {
        ///////////////////////
        console.log("no token");
        return;
      }
      const response = await fetch('http://localhost:3500/api/places/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: typeOf == 1 ? JSON.stringify({ ...detailesObj, syn_nusach: nusach }) :
          typeOf == 2 ? JSON.stringify({ ...detailesObj, habad_intermediary: intermediary, habad_phone: habadPhone, habad_site_link: habadSiteLink }) :
            typeOf == 3 ? JSON.stringify({ ...detailesObj, market_phone: marketPhone, market_site_link: marketSiteLink }) :
              typeOf == 4 ? JSON.stringify({ ...detailesObj, res_phone_number: restaurantPhone, res_type: restaurantType, res_hechsher: restaurantHechsher, res_site_link: restaurantSiteLink, res_stars: restaurantStars }) : detailesObj
      })
      if (response?.ok) {
        const options = await response.json();
      }
    }
    else {
      setErr("empty feilds required")
      console.log(err);
    }
  }
  return (
    <>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-helperText"
            helperText="name"
            variant="standard"
            onInput={(e) => { setName(e.target.value) }}
          />
          <TextField
            id="standard-helperText"
            helperText="address"
            variant="standard"
            onInput={(e) => { setAddress(e.target.value) }}
          />
          <TextField
            id="standard-helperText"
            helperText="hours"
            variant="standard"
            onInput={(e) => { setHours(e.target.value) }}
          />
          <TextField
            id="standard-helperText"
            helperText="img"
            variant="standard"
            onInput={(e) => { setImg(e.target.value) }}
          />
        </div>
      </Box>
      {typeOf == 1 && <Synagogue setNusach={setNusach}></Synagogue>}
      {typeOf == 2 && <Habad setHabadSiteLink={setHabadSiteLink} setIntermediary={setIntermediary} setHabadPhone={setHabadPhone} ></Habad>}
      {typeOf == 3 && <Supermarket setMarketPhone={setMarketPhone} setMarketSiteLink={setMarketSiteLink}></Supermarket>}
      {typeOf == 4 && <Restaurant setRestaurantPhone={setRestaurantPhone} setRestaurantType={setRestaurantType} setRestaurantHechsher={setRestaurantHechsher} setRestaurantSiteLink={setRestaurantSiteLink} setRestaurantStars={setRestaurantStars}></Restaurant>}

      <button onClick={() => { addPlaceDetailes() }}>Add place</button>
    </>
  );
}



