import React, {Component} from 'react'
import './Wall.module.css'
import style from "./Wall.module.css";

class Wall extends Component {
    render() {
        return (
            <div className={style.wall}>
                <div className={style.new}>
                    New post
                </div>
                <div className={style.posts}>
                    posts
                </div>
            </div>
        )
    }
}

export default Wall;