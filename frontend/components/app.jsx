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
import ActivitiesContainer from './index/activities_container'
import RoutesContainer from './index/routes_container'
import ActivityContainer from './show/activity_container'
import RouteContainer from './show/route_container'
import EditActivityContainer from './edit/edit_activity_container'
import EditRouteContainer from './edit/edit_activity_container'
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
            <ProtectedRoute path="/athlete/activities" component={ActivitiesContainer} />
            <ProtectedRoute path="/athlete/routes" component={RoutesContainer} />
            <ProtectedRoute exact path="/activities/:activityId" component={ActivityContainer} />
            <ProtectedRoute exact path="/routes/:routeId" component={RouteContainer} />
            <ProtectedRoute exact path="/activities/:activityId/edit" component={EditActivityContainer} />
            <ProtectedRoute exact path="/routes/:routeId/edit" component={EditRouteContainer} />
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
