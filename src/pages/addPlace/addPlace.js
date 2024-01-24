export default async function addPlace(place, token) {
  let placeToSend = {};
  try {
    placeToSend = parsePlaceToSend(place);
  }
  catch {
    console.log('not all parameters were provided');
    return;
  }
  const response = await fetch('http://localhost:3500/api/places/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(placeToSend)
  })
  if (response?.ok) {
    const result = await response.json();
    console.log(result);
  }
  else {
    console.log("empty feilds required")
    console.log(response.message);
  }
  return response.status;
}
//image...
const parsePlaceToSend = (place) => {
  return {
    place_name: place.name,
    place_address: place.address,
    place_hours: place.hours,
    place_img: place.img || null,
    place_type: place.type,
    place_info_by: place.userId,
    place_img: place.image || "",
    syn_nusach: place.nusach || null,
    market_phone: place.phone || null,
    market_site_link: place.siteLink || null,
    res_phone_number: place.phone || null,
    res_type: place.resType || null,
    res_hechsher: place.kosher || null,
    res_site_link: place.siteLink || null,
    res_stars: place.stars || 5,
    habad_intermediary: place.agent || null,
    habad_phone: place.phone || null,
    habad_site_link: place.siteLink || null
  }
}