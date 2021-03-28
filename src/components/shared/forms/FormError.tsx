import React, {Component} from "react";
import {ErrorMessage} from "formik";
import {IFormErrorProps} from "../../../interfaces/interfaces";

class FormError extends Component<IFormErrorProps, any> {
    render() {
        return (
            <ErrorMessage name={this.props.name} component="div" className="form-error" />
        );
    };
}


export default FormError;