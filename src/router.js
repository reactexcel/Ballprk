import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import OverView from './modules/overview';
import App from './App'


const Routes = () => {
    return (
        <Router>
            <App>
                <Route path='/' component={OverView} />
            </App>
        </Router>
    );
}
export default Routes;