import * as types from "./actionTypes";
import store from "../store";

export function setFormProcessing() {
    return {
        type : types.SET_FORM_PROCESSING
    }
}

export function clearErrorMessage() {
    return {
        type : types.CLEAR_FORM_ERROR
    }
}

export function clearSuccessMessage() {
    return {
        type : types.CLEAR_FORM_SUCCESS
    }
}

export function setFormError(error : string) {
    return {
        type : types.SET_FORM_ERROR,
        data : error
    }
}

export function setFormSuccess(message : string) {
    return {
        type : types.SET_FORM_SUCCESS,
        data : message
    }
}

export function setTempFormObjects(value : string, label : string) {
    let obj = (store.getState() as any).form.tempObject;
    obj[label] = value;
    return {
        type : types.SET_FORM_TEMP_OBJECT,
        data : obj
    }
}