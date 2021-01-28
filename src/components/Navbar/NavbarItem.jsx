import React, {Component} from 'react'
import style from './NavbarItem.module.css'

class NavbarItem extends Component {

    render() {
        return (
            <div className={style.item}>
                <a href={this.props.linkPath}>{this.props.linkName}</a>
            </div>
        );
    }

}

export default NavbarItem;