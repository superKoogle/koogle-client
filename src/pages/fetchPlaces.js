

const getPlaces = async (location) => {
    if (!location) return;
    const response = await fetch('http://localhost:3500/api/places/general', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lat: location.lat, lng:location.lng, maxDistance: 100000 })
    })
    if (response?.ok) {
        const _places = await response.json();
        const places = _places.map((p) => { return { ...p, type: p.place_type == 1 ? 'synagogue' : p.place_type == 2 ? 'Beit habad' : p.place_type == 3 ? 'Supermarket' : 'Restaurant' } });
        console.log(places);
        return places;
    }
    else {
        return [];
    }
}

export {
    getPlaces
}