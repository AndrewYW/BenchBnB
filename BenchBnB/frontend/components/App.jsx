import Greeting from './greeting/greeting_container';
import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <Greeting />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
