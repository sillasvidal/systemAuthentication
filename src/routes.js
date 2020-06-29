import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth/auth';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login />} />
            <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
            <Route exact path="/cadastro" component={() => <Cadastro />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;