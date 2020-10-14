import React from 'react';
import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header id="global-header">
            <Route path="/" component={NavBarContainer}/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
);

export default App;
