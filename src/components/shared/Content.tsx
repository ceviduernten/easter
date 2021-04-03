import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import NoMatch from "./NoMatch";
import Home from "../home/Home";
import CitiesContainer from "../../containers/CitiesContainer";
import About from "../about/About";
import LocationsContainer from "../../containers/LocationsContainer";
import MapContainer from "../../containers/MapContainer";
import {PrivateRoute} from "./PrivateRoute";
import LogoutContainer from "../../containers/LogoutContainer";
import LoginContainer from "../../containers/LoginContainer";
import MapAdminContainer from "../../containers/MapAdminContainer";

class Content extends Component {
    render(): React.ReactNode {
        return (
            <div className="main-content-wrapper">
                <div className="main-content">
                    <Switch>
                        <PrivateRoute path="/cities" component={CitiesContainer}/>
                        <Route path="/map" component={MapContainer}/>
                        <PrivateRoute path="/preview" component={MapAdminContainer}/>
                        <PrivateRoute path="/locations" component={LocationsContainer}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute exact path="/logout" component={LogoutContainer}/>
                        <Route exact path="/login" component={LoginContainer}/>
                        <Route path="*" component={NoMatch} status={404}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;