import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListExercise from './components/list-exercise';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={ ListExercise }/>
                    <Route path='/edit/:id' component={ EditExercise }/>
                    <Route path='/create' component={ CreateExercise }/>
                    <Route path='/user' component={ CreateUser }/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
