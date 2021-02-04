import React, {Component} from 'react'
import style from './Item.module.css'
import {NavLink} from "react-router-dom";

class Item extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={style.item}>
                <NavLink
                    to={this.props.linkPath}
                    className={style.row}
                    activeClassName={style.active}
                >
                    {this.props.linkName}
                </NavLink>
            </div>
        );
    }

}

export default Item;