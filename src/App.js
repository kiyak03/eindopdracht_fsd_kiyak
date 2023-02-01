import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Upload from './Pages/Upload'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from "./Pages/Profile";
import PrivateRoute from "./routing/PrivateRoute";
import Demo from "./Pages/Demo";

function App() {
  return (
    <>
        <NavBar/>

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <PrivateRoute path="/upload">
                <Upload/>
            </PrivateRoute>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <PrivateRoute exact path="/profile">
                <Profile/>
            </PrivateRoute>
            <PrivateRoute path="/files/:id">
                <Demo/>
            </PrivateRoute>

        </Switch>

    </>
  );
}

export default App;
