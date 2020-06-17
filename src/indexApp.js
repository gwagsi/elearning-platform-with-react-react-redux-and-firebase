
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Index from "layouts/Home.js";
import Firebase, { FirebaseContext } from './components/Firebase';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import Profile from './views/profile/Profile';
import Admin from './layouts/Admin';

import * as ROUTES from './routes.js';
import { withAuthentication } from './components/Session/index.js';

const IndexApp = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path={ROUTES.LANDING} component={Index} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={Index} />
      <Route exact path={ROUTES.ACCOUNT} component={Profile} />
      <Route exact path={ROUTES.ADMIN} component={Admin} />
    </Switch>
  </BrowserRouter>
);
export default withAuthentication(IndexApp);