import React, {Component} from 'react';
import NavbarItem from './NavbarItem'
import style from './Navbar.module.css'

class Navbar extends Component {

    render() {
        let navNames = [
            "Profile",
            "Messages",
            "News",
            "Music",
            "Settings"
        ]
        return (
            <nav className={style.menu}>
                {
                    navNames.map((linkName, i) => {
                        return (<NavbarItem linkName={linkName} linkPath="#"/>)
                    })
                }
            </nav>
        )
    }
}

export default Navbar;