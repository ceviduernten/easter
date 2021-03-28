import {connect} from "react-redux";
import Login from "../components/Login";

function mapStateToProps(store : any) {
    return {
        currentUser : store.currentUser
    }
}

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;