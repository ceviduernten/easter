import axios from "axios";
import * as apiLinks from "./apiLinks";
import store from "../store";

function getAPIConfigurationSecured() {
    const token = (store.getState() as any).currentUser.token;
    return axios.create({
        timeout: 1000000,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Pragma': 'no-cache',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    });
}

function getAPIConfigurationUnsecured() {
    return axios.create({
        timeout: 10000,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Pragma': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

// Cities
export function getHuntCities() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.HUNT_CITIES,
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function deleteHuntCity(id : string) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.delete(apiLinks.HUNT_CITIES + "/" + id, {})
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

export function editHuntCity(values : any) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.patch(apiLinks.HUNT_CITIES + "/" + values.idHuntCity, values)
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

export function getHuntCity(id : string) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url : apiLinks.HUNT_CITIES + "/" + id,
            method: 'get',
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            reject("Es konnte keine Verbindung zum Server hergestellt werden.");
        })
    });
}

export function addHuntCity(values : any) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.post(apiLinks.HUNT_CITIES, values)
            .then(function (response : any) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

// Locations
export function getHuntLocations() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationUnsecured();
        return apiClient({
            url: apiLinks.HUNT_LOCATIONS,
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function getAllHuntLocations() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.HUNT_LOCATIONS + "/All",
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function deleteHuntLocation(id : string) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.delete(apiLinks.HUNT_LOCATIONS + "/" + id, {})
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

export function editHuntLocation(values : any) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.patch(apiLinks.HUNT_LOCATIONS + "/" + values.idHuntLocation, values)
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

export function getHuntLocation(id : string) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationUnsecured();
        return apiClient({
            url : apiLinks.HUNT_LOCATIONS + "/" + id,
            method: 'get',
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            reject("Es konnte keine Verbindung zum Server hergestellt werden.");
        })
    });
}

export function foundHuntLocation(id : string) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.patch(apiLinks.HUNT_LOCATIONS + "/" + id + "/Found", {})
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

export function addHuntLocation(values : any) {
    return new Promise<any>((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient.post(apiLinks.HUNT_LOCATIONS, values)
            .then(function (response : any) {
                if (response.data.statusCode === 200) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message);
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}

// Login

export function login(user : any) {
    return new Promise((resolve, reject) => {
        let apiClient = getAPIConfigurationUnsecured();
        return apiClient.post(apiLinks.USERS + "/Login", user)
            .then(function (response : any) {
                if (response.data.statusCode === 200 && response.data.data.token !== "") {
                    resolve(response.data.data);
                } else {
                    reject("Kombination von Benutzer und Passwort nicht gefunden.");
                }
            }).catch(function (error) {
                reject("Es konnte keine Verbindung zum Server hergestellt werden.");
            })
    });
}