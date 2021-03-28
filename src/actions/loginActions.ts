import * as types from "./actionTypes";
import * as api from "../api/api";
import * as forms from "./formActions";
// @ts-ignore
import sha256 from 'crypto-js/sha256';

function receiveCurrentUser(data : any) {
    return {
        type : types.SET_LOGIN,
        data : data
    }
}

function receiveLoginError(errorMessage : string) {
    return {
        type: types.SET_LOGIN_ERROR,
        data: errorMessage
    }
}

function clearCurrentUser() {
    return {
        type : types.SET_LOGOUT,
        data : ""
    }
}

export function clearLoginError(): any {
    return function (dispatch : any) {
        dispatch(receiveLoginError(""));
    }
}

export function logout(): any {
    return function (dispatch : any) {
        dispatch(clearCurrentUser());
    }
}

export function login(user : any): any {
    return function (dispatch : any) {
        dispatch(forms.setFormProcessing());
        let values = JSON.parse(JSON.stringify(user));
        values.password = sha256(user.password).toString();
        api.login(values).then(function (res: any) {
            dispatch(forms.setFormSuccess("Login war erfolgreich."));
            dispatch(receiveCurrentUser(res));
        }).catch(function (error : any) {
            dispatch(receiveLoginError(error));
            dispatch(forms.setFormError(error));
        });
    }
}