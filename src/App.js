import React, {Component} from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from "./components/Footer";
import style from './App.module.css';

class App extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Header/>
                <Navbar/>
                <Profile/>
                <Footer/>
            </div>
        );
    }
}

export default App;
