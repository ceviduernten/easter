import * as types from "./actionTypes";
import * as api from "../api/api";
import * as forms from "./formActions";

function receiveHuntLocations(data : any) {
    return {
        type : types.SET_HUNTLOCATIONS,
        data : data
    }
}

function receiveHuntLocationsError(errorMessage : string) {
    return {
        type : types.SET_HUNTLOCATIONS_ERROR,
        data : errorMessage
    }
}

function changeFilteringOfData(data : any) {
    return {
        type : types.SET_HUNTLOCATIONS_FILTER,
        data : data
    }
}

function setSelectedObject(group : object) {
    return {
        type : types.SET_HUNTLOCATIONS_SELECTED_OBJECT,
        data : group
    }
}

function clearSelectedObject() {
    return {
        type : types.SET_HUNTLOCATIONS_SELECTED_OBJECT,
        data : {}
    }
}

function changeState(state : string) {
    return {
        type : types.SET_HUNTLOCATIONS_CURRENT_STATE,
        data : state
    }
}

export function backToList(): any {
    return function (dispatch : any) {
        dispatch(changeState("success"));
        dispatch(setSelectedObject({}));
    }
}

export function onFilterChanged(filter : any): any {
    return function (dispatch : any) {
        dispatch(changeFilteringOfData(filter));
    }
}

export function getHuntLocationAndCallAction(id : string, action : string) : any {
    return function (dispatch : any) {
        getHuntLocationFromAPI(id, dispatch).then(() => {
            dispatch(changeState(action));
        });
    }
}

export function addHuntLocationForm(): any {
    return function (dispatch : any) {
        dispatch(changeState("add"));
    }
}

function getHuntLocationFromAPI(id : string, dispatch : any) {
    return new Promise<void>((resolve, reject) => {
        dispatch(changeState("loading"));
        api.getHuntLocation(id).then(function (res) {
            res.isActive = res.isActive ? "true" : "false";
            res.isFound = res.isFound ? "true" : "false";
            dispatch(setSelectedObject(res));
            resolve();
        }).catch(function (error) {
            dispatch(receiveHuntLocationsError(error));
            reject();
        });
    });
}

function getHuntLocationsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getHuntLocations().then(function (res) {
        dispatch(receiveHuntLocations(res));
    }).catch(function (error) {
        dispatch(receiveHuntLocationsError(error));
    });
}

function getAllHuntLocationsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getAllHuntLocations().then(function (res) {
        dispatch(receiveHuntLocations(res));
    }).catch(function (error) {
        dispatch(receiveHuntLocationsError(error));
    });
}

export function getHuntLocations() : any {
    return function (dispatch : any) {
        getHuntLocationsFromAPI(dispatch);
    }
}

export function getAllHuntLocations() : any {
    return function (dispatch : any) {
        getAllHuntLocationsFromAPI(dispatch);
    }
}

export function deleteHuntLocation(id : string): any {
    return function (dispatch : any) {
        dispatch(forms.setFormProcessing());
        api.deleteHuntLocation(id).then(function (res) {
            dispatch(forms.setFormSuccess("Das Versteck wurde erfolgreich gelöscht."));
            dispatch(changeState("success"));
            dispatch(clearSelectedObject());
            getAllHuntLocationsFromAPI(dispatch);
        }).catch(function (error) {
            dispatch(forms.setFormError(error));
        });
    }
}

export function found(element : any): any {
    return function (dispatch : any) {
        api.foundHuntLocation(element.idHuntLocation).then(function (res : any) {
            dispatch(changeState("success"));
            getHuntLocationsFromAPI(dispatch);
        }).catch(function (error : any) {
        });
    }
}

export function addHuntLocation(values : any): any {
    return function (dispatch : any) {
        dispatch(forms.setFormProcessing());
        api.addHuntLocation(values).then(function (res : any) {
            dispatch(forms.setFormSuccess("Das Versteck wurde erfolgreich hinzugefügt."));
            dispatch(changeState("success"));
            getAllHuntLocationsFromAPI(dispatch);
        }).catch(function (error : any) {
            dispatch(forms.setFormError(error));
        });
    }
}

export function editHuntLocation(values : any): any {
    return function (dispatch: any) {
        dispatch(forms.setFormProcessing());
        api.editHuntLocation(values).then(function (res: any) {
            dispatch(forms.setFormSuccess("Die Änderungen am Versteck wurden erfolgreich gespeichert."));
            dispatch(changeState("success"));
            dispatch(clearSelectedObject());
            getAllHuntLocationsFromAPI(dispatch);
        }).catch(function (error: any) {
            dispatch(forms.setFormError(error));
        });
    }
}