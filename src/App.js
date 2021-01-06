import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Upload from './Pages/Upload'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
        <NavBar/>

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/upload">
                <Upload/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>

        </Switch>

    </Router>
  );
}

export default App;
