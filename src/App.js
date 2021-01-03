import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import TopMenu from './components/TopMenu'
import Home from './Pages/Home'
import Upload from './Pages/Uplaod'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
        <TopMenu/>

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
