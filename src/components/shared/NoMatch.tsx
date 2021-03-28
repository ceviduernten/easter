import React, {Component} from "react";
import {Header} from "semantic-ui-react";

class NoMatch extends Component {
    render(): React.ReactNode {
        return (
            <>
                <Header as="h1" className="mainHeader">Seite nicht gefunden</Header>
                <img src="404.png" alt="404" className="img-404"/>
                <p>
                    Die angegebene Seite wurde nicht gefunden. Versichern Sie sich ob Sie den URL korrekt eingegeben haben.
                </p>
            </>
        );
    }
}

export default NoMatch;