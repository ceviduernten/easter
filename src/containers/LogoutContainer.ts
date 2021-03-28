import {connect} from "react-redux";
import Logout from "../components/Logout";

function mapStateToProps(store : any) {
    return {
        currentUser : store.currentUser
    }
}

const LogoutContainer = connect(mapStateToProps)(Logout);

export default LogoutContainer;