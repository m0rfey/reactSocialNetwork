import React, {Component} from 'react';
import Wall from "../Wall/Wall";
import style from './Profile.module.css'

class Profile extends Component {
    render() {
        return (
            <div className={style.content}>
                <div className={style.background}>
                    <img
                        src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png"
                        alt=""/>
                </div>
                <div className={style.avatar}>
                    <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt=""/>
                </div>
                <div className={style.profile}>
                    <h3>User name</h3>
                    <p>Age: 30</p>
                    <p>Country: Ukraine</p>
                </div>
                <Wall/>
            </div>
        )
    }
}

export default Profile;