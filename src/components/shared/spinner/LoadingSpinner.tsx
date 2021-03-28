import React, {Component} from "react";

class LoadingSpinner extends Component<any, any> {
    render() {
        return (
            <div className="loading-wrapper">
                <div className="loader">
                </div>
                <div className="text-loader">
                    <span>Daten werden geladen.</span>
                </div>
            </div>
        );
    };
}

export default LoadingSpinner;