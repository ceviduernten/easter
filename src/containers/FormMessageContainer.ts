import {connect} from "react-redux";
import FormMessage from "../components/shared/FormMessage";

function mapStateToProps(store : any) {
    return {
        formState : store.form
    }
}

const FormMessageContainer = connect(mapStateToProps)(FormMessage);

export default FormMessageContainer;