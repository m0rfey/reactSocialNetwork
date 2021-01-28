import React, {Component} from 'react'
import './Item.module.css'
import style from "./Item.module.css";

class Item extends Component {
    render() {
        return (
            <div className={style.item}>

                <div className={style.header}>
                    <div className={style.avatar}>
                        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt=""/>
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>{this.props.title}</div>
                        <div className={style.description}>
                            <div className={style.creation}>created: {this.props.created}</div>
                            <div className={style.editing}>{this.props.edited ? "Edited" : ""}</div>
                        </div>
                    </div>
                </div>

                <div className={style.text}>
                    <p>{this.props.message}</p>
                </div>

            </div>
        )
    }
}

export default Item;