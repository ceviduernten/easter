import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface FormReducerState {
    state: string,
    errorMessage: string,
    successMessage: string
    tempObject : object
}

const defaultState = {
    state: "success",
    errorMessage: "",
    successMessage: "",
    tempObject : {}
};


const formReducer = (state : FormReducerState = defaultState, action: IAction) => {
    switch(action.type) {
        case types.SET_FORM_PROCESSING:
            return {...state, state: "processing", errorMessage: "", successMessage: ""};
        case types.SET_FORM_ERROR:
            return {...state, state: "error", errorMessage: action.data, successMessage: "" };
        case types.SET_FORM_SUCCESS:
            return {...state, state: "success", successMessage: action.data };
        case types.CLEAR_FORM_ERROR:
            return {...state, errorMessage: ""};
        case types.CLEAR_FORM_SUCCESS:
            return {...state, successMessage: ""};
        case types.SET_FORM_TEMP_OBJECT:
            return {...state, tempObject: action.data};
        case types.CLEAR_FORM_TEMP_OBJECT:
            return {...state, tempObject: {}};
        default:
            return state;
    }
};

export default formReducer;