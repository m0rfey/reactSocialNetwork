import React, {Component} from 'react'
import style from './Item.module.css'

class Item extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={style.item}>
                <a
                    href={this.props.linkPath}
                    className={`${style.row} ${this.props.active ? style.active : ""}`}
                >
                    {this.props.linkName}
                </a>
            </div>
        );
    }

}

export default Item;