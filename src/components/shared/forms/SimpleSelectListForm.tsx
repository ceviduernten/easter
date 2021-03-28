import React, {Component} from "react";
import {ISelectListFormProps} from "../../../interfaces/interfaces";
import {Field} from "formik";

class SimpleSelectListForm extends Component<ISelectListFormProps, any> {
    constructor(props: ISelectListFormProps) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const elems = this.props.options;
        return (
            <Field className={this.props.selectClassName} key={this.props.selectClassName} component="select" name={this.props.selectName} value={this.props.selectedValue} defaultValue={this.props.selectedValue} render={({field} : any) => (
                <select {...field}>
                    {this.props.defaultText !== undefined && this.props.defaultValue !== undefined &&
                        <option value={this.props.defaultValue} key="NOTHING">{this.props.defaultText}</option>
                    }
                    {this.props.defaultText !== undefined && this.props.defaultValue === undefined  &&
                        <option value="" key="NOTHING">{this.props.defaultText}</option>
                    }
                    {elems.map((element : any) => {
                        return <option value={element["value"]} key={element["value"]}>{element["text"]}</option>
                    })}
                </select>
            )}/>
        );
    };
}

export default SimpleSelectListForm;