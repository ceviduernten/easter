import React, {Component} from "react";

class SmallLoadingSpinner extends Component<any, any> {
    render() {
        return (
            <div className="small-loading-wrapper">
                <div className="small-loader">
                </div>
                <div className="text-loader">
                    <span>Die Aktion wird aktuell verarbeitet. Bitte haben Sie einen Moment Geduld.</span>
                </div>
            </div>
        );
    };
}

export default SmallLoadingSpinner;