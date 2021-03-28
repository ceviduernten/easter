import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import history from "./global/history";
import Global from "./components/Global";


ReactDOM.render(<Provider store={store}>
    <PersistGate persistor={persistor}>
        <Router history={history}>
            <>
                <Switch>
                    <Route path="/" component={Global} />
                </Switch>
            </>
        </Router>
    </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
