interface CreateHuntLocationFormValues {
    name : string,
    isActive : string,
    isFound : string,
    description : string,
    latitude : string,
    longitude : string,
    huntCity : object
}

interface EditHuntLocationFormValues extends CreateHuntLocationFormValues {
    idHuntLocation : string
}

interface DeleteHuntLocationFormValues {
    idHuntLocation : string
}

interface FoundHuntLocationFormValues {
    idHuntLocation : string,
    name: string
}