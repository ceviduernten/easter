import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface HuntLocationReducer {
    state: string,
    errorMessage: string,
    data: any[],
    selectedObject: object,
    selectedCity: string,
}

const defaultState = {
    data: [],
    state: "success",
    errorMessage: "",
    selectedObject: {},
    selectedCity: ""
};

const huntLocationReducer = (state : HuntLocationReducer = defaultState, action: IAction) => {
    switch (action.type) {
        case types.SET_HUNTLOCATIONS_CURRENT_STATE:
            return {...state, state: action.data};
        case types.SET_HUNTLOCATIONS_ERROR:
            return {...state, errorMessage: action.data, data: [], state: "error"};
        case types.SET_HUNTLOCATIONS_SELECTED_OBJECT:
            return {...state, selectedObject : action.data};
        case types.SET_HUNTLOCATIONS_FILTER:
            return {...state, selectedCity: action.data};
        case types.SET_HUNTLOCATIONS:
            return Object.assign({}, state, {
                data: action.data,
                state: "success"
            });
        default:
            return state;
    }
};

export default huntLocationReducer;
