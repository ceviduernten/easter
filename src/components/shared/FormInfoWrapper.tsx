import React, {Component} from "react";
import {IFormInfoWrapperProps} from "../../interfaces/interfaces";

class FormInfoWrapper extends Component<IFormInfoWrapperProps, any> {
    render() {
        const {hidden} = this.props;
        return (
            <div className={`form-info-wrapper ${this.props.type} ${hidden ? 'hide-info' : 'show-info'}`}>
                <p>{this.props.info}</p>
            </div>
        );
    };
}

export default FormInfoWrapper;