import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import OverView from './modules/overview';
import App from './App'


const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
        <Router>
            <App>
                <Route path='/' component={OverView} />
            </App>
        </Router>
        </Provider>
    );
}
export default Routes;