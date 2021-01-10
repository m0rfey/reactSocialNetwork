import React, {Component} from 'react';
import NavbarItem from './NavbarItem'

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
            <nav className='app-nav'>
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