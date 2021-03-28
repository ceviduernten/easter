interface CreateHuntCityFormValues {
    name : string,
    zip : string,
    startLocationLat : string,
    startLocationLong : string,
    zoomLevel : number
}

interface EditHuntCityFormValues extends CreateHuntCityFormValues {
    idHuntCity : string
}

interface DeleteHuntCityFormValues {
    idHuntCity : string
}