import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import FooterContainer from './navbar/footer_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app-container">
        <header id="global-header">
            <Route path="/" component={NavBarContainer}/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/dashboard" component={DashboardContainer} />
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route path="" render={() => (<Redirect to="/PageNotFoundContainer" />)} /> */}
            <Route path="" render={() => (<Redirect to="/dashboard" />)} />
        </Switch>
        <footer id="global-footer">
            <Route path="/" component={FooterContainer} />
        </footer>
    </div>
);

export default App;
