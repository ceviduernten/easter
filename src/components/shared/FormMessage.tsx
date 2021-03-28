import * as React from "react";
import {Component} from "react";
import FormInfoWrapper from "./FormInfoWrapper";
import {InfoWrapperTypes} from "../../global/InfoWrapperTypes";
import * as formActions from "../../actions/formActions";
import store from "../../store";
import SmallLoadingSpinner from "./spinner/SmallLoadingSpinner";

class FormMessage extends Component<any, any> {
    clearSuccessMessageAfterSomeTime() : void {
        setTimeout(function () {
            store.dispatch(formActions.clearSuccessMessage());
        }.bind(this), 5 * 1000);
    }

    clearErrorMessageAfterSomeTime() : void {
        setTimeout(function () {
            store.dispatch(formActions.clearErrorMessage());
        }.bind(this), 10 * 1000);
    }

    render(): React.ReactNode {
        const {formState} = this.props;
        return (
            <>
                {(() => {
                    switch (formState.state) {
                        case "success":
                            if (formState.successMessage !== "") {
                                this.clearSuccessMessageAfterSomeTime();
                                return <FormInfoWrapper info={formState.successMessage} type={InfoWrapperTypes.SUCCESS} />;
                            }
                            return null;
                        case "processing":
                            return <SmallLoadingSpinner/>;
                        case "error":
                            if (formState.errorMessage !== "") {
                                this.clearErrorMessageAfterSomeTime();
                                return <FormInfoWrapper info={formState.errorMessage} type={InfoWrapperTypes.DANGER} />;
                            }
                            return null;
                        default:
                            return null;
                    }
                })()}
            </>
        );
    }
}

export default FormMessage;