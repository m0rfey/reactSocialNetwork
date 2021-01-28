import React, {Component} from 'react'
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <img
                    src="https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2404/2020/01/AIT_globe.jpg"
                    alt=""
                />
            </header>
        )
    }
}

export default Header;