import {Action, AnyAction} from "redux";

interface IAction extends Action, AnyAction {
    type: any,
    data: any
}
