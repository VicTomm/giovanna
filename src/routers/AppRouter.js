import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';

import HomePage from '../components/HomePage';
import WorkPage from '../components/WorkPage';
import AddProjectPage from '../components/AddProjectPage';
import LoginPage from '../components/LoginPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import EditProjectPage from '../components/EditProjectPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LazyLoad from 'react-lazyload';

export const history = createHistory();

const AppRouter = () => (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" component={HomePage} exact={true}/>
                <PublicRoute path="/about" component={AboutPage}/>
                <PublicRoute path="/works" component={WorkPage}/>
                <PublicRoute path="/login" component={LoginPage} exact={true}/>
                <PrivateRoute path="/create" component={AddProjectPage}/>
                <PrivateRoute path="/projects" component={ProjectsPage}/>
                <PrivateRoute path="/edit/:id" component={EditProjectPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
);

export default AppRouter;
