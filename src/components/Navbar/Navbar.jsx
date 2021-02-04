import React, {Component} from 'react';
import Item from './Item/Item'
import style from './Navbar.module.css'

class Navbar extends Component {

    render() {
        let navNames = [
            ["Profile", "/profile"],
            ["Messages", "/dialogs"],
            ["News", "/news"],
            ["Music", "/music"],
            ["Settings", "/settings"],
        ]
        return (
            <nav className={style.menu}>
                {
                    navNames.map((item, i) => {
                        return (<Item linkName={item[0]} linkPath={item[1]} key={i}/>)
                    })
                }
            </nav>
        )
    }
}

export default Navbar;