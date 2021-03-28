import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {ITitleProps} from "../../interfaces/interfaces";

class TitleHelper extends Component<ITitleProps, any> {
    render(): React.ReactNode {
        const titleText = (this.props.title === undefined) ? "Seite" : this.props.title;
        return (
            <Helmet>
                <title>Osterhasensuche 2021 | {titleText}</title>
            </Helmet>
        );
    }
}

export default TitleHelper;