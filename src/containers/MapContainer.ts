import {connect} from "react-redux";
import Map from "../components/map/Map";

function mapStateToProps(store : any) {
    return {
        store  : store.locations,
        locations : store.locations.data,
        cities : store.cities.data
    }
}

const MapContainer = connect(mapStateToProps)(Map);

export default MapContainer;