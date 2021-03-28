import * as types from "./actionTypes";
import * as api from "../api/api";
import * as forms from "./formActions";

function receiveHuntCities(data : any) {
    return {
        type : types.SET_HUNTCITIES,
        data : data
    }
}

function receiveHuntCitiesError(errorMessage : string) {
    return {
        type : types.SET_HUNTCITIES_ERROR,
        data : errorMessage
    }
}

function setSelectedObject(group : object) {
    return {
        type : types.SET_HUNTCITIES_SELECTED_OBJECT,
        data : group
    }
}

function clearSelectedObject() {
    return {
        type : types.SET_HUNTCITIES_SELECTED_OBJECT,
        data : {}
    }
}

function changeState(state : string) {
    return {
        type : types.SET_HUNTCITIES_CURRENT_STATE,
        data : state
    }
}

export function backToList(): any {
    return function (dispatch : any) {
        dispatch(changeState("success"));
        dispatch(setSelectedObject({}));
    }
}

export function getHuntCityAndCallAction(id : string, action : string) : any {
    return function (dispatch : any) {
        getHuntCityFromAPI(id, dispatch).then(() => {
            dispatch(changeState(action));
        });
    }
}

export function addHuntCityForm(): any {
    return function (dispatch : any) {
        dispatch(changeState("add"));
    }
}

function getHuntCityFromAPI(id : string, dispatch : any) {
    return new Promise<void>((resolve, reject) => {
        dispatch(changeState("loading"));
        api.getHuntCity(id).then(function (res) {
            dispatch(setSelectedObject(res));
            resolve();
        }).catch(function (error) {
            dispatch(receiveHuntCitiesError(error));
            reject();
        });
    });
}

function getHuntCitiesFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getHuntCities().then(function (res) {
        dispatch(receiveHuntCities(res));
    }).catch(function (error) {
        dispatch(receiveHuntCitiesError(error));
    });
}

export function getHuntCities() : any {
    return function (dispatch : any) {
        getHuntCitiesFromAPI(dispatch);
    }
}

export function deleteHuntCity(id : string): any {
    return function (dispatch : any) {
        dispatch(forms.setFormProcessing());
        api.deleteHuntCity(id).then(function (res) {
            dispatch(forms.setFormSuccess("Der Ortsbezirk wurde erfolgreich gelöscht."));
            dispatch(changeState("success"));
            dispatch(clearSelectedObject());
            getHuntCitiesFromAPI(dispatch);
        }).catch(function (error) {
            dispatch(forms.setFormError(error));
        });
    }
}

export function addHuntCity(values : any): any {
    return function (dispatch : any) {
        dispatch(forms.setFormProcessing());
        api.addHuntCity(values).then(function (res : any) {
            dispatch(forms.setFormSuccess("Der Ortsbezirk wurde erfolgreich hinzugefügt."));
            dispatch(changeState("success"));
            getHuntCitiesFromAPI(dispatch);
        }).catch(function (error : any) {
            dispatch(forms.setFormError(error));
        });
    }
}

export function editHuntCity(values : any): any {
    return function (dispatch: any) {
        dispatch(forms.setFormProcessing());
        api.editHuntCity(values).then(function (res: any) {
            dispatch(forms.setFormSuccess("Die Änderungen am Ortsbezirk wurden erfolgreich gespeichert."));
            dispatch(changeState("success"));
            dispatch(clearSelectedObject());
            getHuntCitiesFromAPI(dispatch);
        }).catch(function (error: any) {
            dispatch(forms.setFormError(error));
        });
    }
}