import {connect} from "react-redux";
import MapAdmin from "../components/map/MapAdmin";

function mapStateToProps(store : any) {
    return {
        store  : store.locations,
        locations : store.locations.data,
        cities : store.cities.data
    }
}

const MapAdminContainer = connect(mapStateToProps)(MapAdmin);

export default MapAdminContainer;