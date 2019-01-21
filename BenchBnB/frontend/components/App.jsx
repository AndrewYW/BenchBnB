import Greeting from './greeting/greeting_container';
import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <Greeting />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
