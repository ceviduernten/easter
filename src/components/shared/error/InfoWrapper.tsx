import React, {Component} from "react";
import {IInfoWrapperProps} from "../../../interfaces/interfaces";

class InfoWrapper extends Component<IInfoWrapperProps, any> {
    render() {
        const {hidden} = this.props;
        return (
            <div className={`info-wrapper ${this.props.type} ${hidden ? 'hide-info' : 'show-info'}`}>
                <h5 id="warning">{this.props.title}</h5>
                <p>{this.props.info}</p>
            </div>
        );
    };
}

export default InfoWrapper;