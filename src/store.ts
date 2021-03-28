import {applyMiddleware, createStore} from "redux";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import reducers from "./reducers";
import {persistReducer, persistStore} from "redux-persist";
import promise from "redux-promise-middleware";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk"

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['cities', 'locations']
};

const middleware = applyMiddleware(promise, thunk);
// @ts-ignore
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);
export default store;

