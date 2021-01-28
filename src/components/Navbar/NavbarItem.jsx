import React, {Component} from 'react'
import style from './NavbarItem.module.css'

class NavbarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.item}>
                <a href={this.props.linkPath}>{this.props.linkName}</a>
            </div>
        );
    }

}

export default NavbarItem;