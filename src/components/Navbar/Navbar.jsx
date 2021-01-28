import React, {Component} from 'react';
import Item from './Item/Item'
import style from './Navbar.module.css'

class Navbar extends Component {

    render() {
        let navNames = [
            ["Profile", true],
            ["Messages", false],
            ["News", false],
            ["Music", false],
            ["Settings", false],
        ]
        return (
            <nav className={style.menu}>
                {
                    navNames.map((item, i) => {
                        return (<Item linkName={item[0]} active={item[1]} linkPath="#" key={i}/>)
                    })
                }
            </nav>
        )
    }
}

export default Navbar;