import {connect} from "react-redux";
import Locations from "../components/locations/Locations";

function mapStateToProps(store : any) {
    return {
        store  : store.locations,
        locations : store.locations.data
    }
}

const LocationsContainer = connect(mapStateToProps)(Locations);

export default LocationsContainer;