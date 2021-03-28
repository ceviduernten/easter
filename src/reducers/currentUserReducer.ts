import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface CurrentUserReducerState {
    loginName : string,
    token : string,
    idUser : string,
    role : string,
    errorMessage : string,
    loggedIn : boolean,
    tokenExpirationDate : Date
}

const defaultState = {
    loginName : "",
    errorMessage : "",
    idUser : "",
    role : "",
    token : "",
    loggedIn : false,
    tokenExpirationDate : new Date()
};


const currentUserReducer = (state : CurrentUserReducerState = defaultState, action: IAction) => {
    switch(action.type) {
        case types.SET_LOGOUT:
            return {...state, idUser : "", loginName : "", role : 0, token : "", loggedIn : false, errorMessage: "",  tokenExpirationDate: ""};
        case types.SET_LOGIN_ERROR:
            return {...state, state: "error", errorMessage: action.data};
        case types.SET_LOGIN:
            let tokenExpirationDate = new Date();
            tokenExpirationDate.setDate(tokenExpirationDate.getDate() + 7);
            return {...state, idUser : action.data.idUser, loginName : action.data.loginName, role : action.data.role, token : action.data.token, loggedIn : true, errorMessage: "",  tokenExpirationDate : tokenExpirationDate};
        default:
            return state;
    }
};

export default currentUserReducer;