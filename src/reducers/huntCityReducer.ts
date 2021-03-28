import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface HuntCityReducer {
    state: string,
    errorMessage: string,
    data: any[],
    selectedObject: object
}

const defaultState = {
    data: [],
    state: "success",
    errorMessage: "",
    selectedObject: {}
};

const huntCityReducer = (state : HuntCityReducer = defaultState, action: IAction) => {
    switch (action.type) {
        case types.SET_HUNTCITIES_CURRENT_STATE:
            return {...state, state: action.data};
        case types.SET_HUNTCITIES_ERROR:
            return {...state, errorMessage: action.data, data: [], state: "error"};
        case types.SET_HUNTCITIES_SELECTED_OBJECT:
            return {...state, selectedObject : action.data};
        case types.SET_HUNTCITIES:
            return Object.assign({}, state, {
                data: action.data,
                state: "success"
            });
        default:
            return state;
    }
};

export default huntCityReducer;
