import store from "../store";
import {Roles} from "../global/Roles";

export function IsAdmin() {
    let role = (store.getState() as any).currentUser.role;
    return role === Roles.ADMIN;
}

export function IsScouting() {
    let role = (store.getState() as any).currentUser.role;
    return role === Roles.SCOUTING_LEADER;
}

export function IsStuff() {
    let role = (store.getState() as any).currentUser.role;
    return role === Roles.STUFF_LEADER;
}

export function HasStuffAccess() {
    return IsStuff() || IsAdmin();
}

export function HasScoutingAccess() {
    return IsScouting() || IsStuff() || IsAdmin();
}

export function LoggedIn() {
    return (store.getState() as any).currentUser.loggedIn;
}

export function NotLoggedIn() {
    return !LoggedIn();
}

