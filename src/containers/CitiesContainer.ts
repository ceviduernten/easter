import {connect} from "react-redux";
import Cities from "../components/cities/Cities";

function mapStateToProps(store : any) {
    return {
        store  : store.cities,
        cities : store.cities.data
    }
}

const CitiesContainer = connect(mapStateToProps)(Cities);

export default CitiesContainer;