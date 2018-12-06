import React from "react"
import ReactDOM from "react-dom"
import _ from 'lodash'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import './css/tailwind.css';
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import About from "./About"

const App = () => {

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));