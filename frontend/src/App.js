/* eslint-disable */
import React, { Fragment, useEffect } from 'react';
import './app.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profile/profiles';
import Profile from './components/profile/profile';
import Posts from './components/posts/posts';
import Post from './components/post/post';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <BrowserRouter>
            <Fragment>
                <Navbar />
                <Route exact path="/" component={Landing} />
                <section className="container">
                    <Alert />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profiles" component={Profiles} />
                        <Route exact path="/profile/:id" component={Profile} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />
                        <PrivateRoute
                            exact
                            path="/create-profile"
                            component={CreateProfile}
                        />
                        <PrivateRoute
                            exact
                            path="/edit-profile"
                            component={EditProfile}
                        />
                        <PrivateRoute
                            exact
                            path="/add-experience"
                            component={AddExperience}
                        />
                        <PrivateRoute
                            exact
                            path="/add-education"
                            component={AddEducation}
                        />
                        <PrivateRoute exact path="/posts" component={Posts} />
                        <PrivateRoute
                            exact
                            path="/posts/:id"
                            component={Post}
                        />
                    </Switch>
                </section>
            </Fragment>
        </BrowserRouter>
    );
}

/* ----------LINKS ON MY QUESTIONS-------------
 * switch, exact:
 * https://stackoverflow.com/questions/45122800/react-router-switch-behavior
 * */

export default App;
