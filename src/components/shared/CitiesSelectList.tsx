import React, {Component} from "react";
import {ICitiesSelectListProps} from "../../interfaces/interfaces";
import SelectList from "./SelectList";

class CitiesSelectList extends Component<ICitiesSelectListProps, any> {
    render() {
        let properties = ["idHuntCity", "name"];
        return (
            <SelectList options={this.props.options} class="customer-list" onChange={this.props.onChange} selectedValue={this.props.selectedValue} properties={properties} defaultText="Ortsteil auswählen" />
        );
    };
}

export default CitiesSelectList;