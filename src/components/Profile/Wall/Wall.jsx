import React, {Component} from 'react'
import './Wall.module.css'
import Item from './Item/Item'
import style from "./Wall.module.css";

class Wall extends Component {

    render() {
        let items = [
            {
                "title": "John Smith",
                "created": "2020-12-29 13:00",
                "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis earum eligendi est " +
                    "eveniet fugiat, harum hic in inventore natus nobis, non porro praesentium! Alias incidunt minus " +
                    "mollitia quasi ratione?",
                "edited": false
            },
            {
                "title": "John Smith",
                "created": "2020-12-28 10:00",
                "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis earum eligendi est " +
                    "eveniet fugiat, harum hic in inventore natus nobis, non porro praesentium! Alias incidunt minus " +
                    "mollitia quasi ratione? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis earum eligendi est " +
                    "eveniet fugiat, harum hic in inventore natus nobis, non porro praesentium! Alias incidunt minus " +
                    "mollitia quasi ratione?",
                "edited": true
            },
            {
                "title": "John Smith",
                "created": "2020-12-28 09:00",
                "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis earum eligendi est ",
                "edited": true
            },
        ]
        return (
            <div className={style.wall}>
                <div className={style.new}>
                    <div className={style.form}>
                        <textarea name="new-post" id="newPost" cols="145" rows="5"></textarea>
                    </div>
                    <div className={style.buttons}>
                        <button> Add post</button>
                    </div>

                </div>
                <div className={style.posts}>
                    {
                        items.map((item, i) => {
                            return (<Item
                                    title={item.title}
                                    created={item.created}
                                    message={item.message}
                                    edited={item.edited}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Wall;