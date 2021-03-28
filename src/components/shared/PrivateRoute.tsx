import {Redirect, Route} from 'react-router-dom';
import React, {Component} from "react";
import store from "../../store";

export class PrivateRoute extends Component<any, any> {
    render() {
        let {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={props =>
                ((store.getState() as any).currentUser.loggedIn && (store.getState() as any).currentUser.token !== "") ?
                    <Component {...props} /> : <Redirect to={{ pathname : "login", state : { from: props.location }}} />
            }/>
        );
    }
}