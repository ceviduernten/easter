import React, {Component} from "react";
import store from "../store";
import * as loginActions from "../actions/loginActions";
import {Redirect} from "react-router-dom";
import {Button, Header} from "semantic-ui-react";

class Logout extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() : void {
        store.dispatch(loginActions.logout())
    }

    render(): React.ReactNode {
        const {currentUser} = this.props;
        if (!currentUser.loggedIn && currentUser.token === "") {
            return <Redirect to={{ pathname : '/'}} />
        }
        return (<>
            <Header as="h1" className="mainHeader">Logout</Header>
            <div className="content">
                <p>Klicke auf den Button um dich korrekt von der Anwendung abzumelden.</p>
                <Button onClick={this.handleLogout} className="danger" type="submit">Logout</Button>
            </div>
        </>);
    }
}

export default Logout;