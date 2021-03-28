import React, {Component} from "react";
import {ISelectListProps} from "../../interfaces/interfaces";

class SelectList extends Component<ISelectListProps, any> {
    render() {
        const elems = this.props.options;
        let customProperties = this.props.properties !== undefined;
        if (customProperties && this.props.properties.length !== 2){
            return null;
        }
        let valueName = customProperties ? this.props.properties[0] : "value";
        let textName = customProperties ? this.props.properties[1] : "text";
        return (
            <select className={this.props.class} onChange={this.props.onChange} defaultValue={this.props.selectedValue} value={this.props.selectedValue}>
                {this.props.defaultText !== undefined &&
                    <option value="" key="NOTHING">{this.props.defaultText}</option>
                }
                {elems.map((element : any) => {
                    return <option value={element[valueName]} key={element[valueName]}>{element[textName]}</option>
                })}
            </select>
        );
    };
}

export default SelectList;