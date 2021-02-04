import React, {Component} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs"
import style from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={style.wrapper}>
                    <Header/>
                    <Navbar/>
                    <div className={style.content}>
                        <Route component={Dialogs} path="/dialogs"/>
                        <Route component={Profile} path="/profile"/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
