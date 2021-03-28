import React, {Component} from "react";
import App from "./App";
import 'semantic-ui-css/semantic.min.css';
import '../styles/main.scss';
import * as huntCityActions from "../actions/huntCityActions";
import * as huntLocationActions from "../actions/huntLocationActions";
import store from "../store";

class Global extends Component<any, any> {
    componentDidMount(): void {
        store.dispatch(huntCityActions.getHuntCities());
        store.dispatch(huntLocationActions.getHuntLocations());
    }

    render(): React.ReactNode {
        return <App/>
    }
}

export default Global;