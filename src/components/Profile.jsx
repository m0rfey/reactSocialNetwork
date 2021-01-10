import React, {Component} from 'react';
import UserPosts from "./UserPosts";

class Profile extends Component {
    render() {
        return (
            <div className='app-content'>
                <div className="content-background">
                    <img
                        src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png"
                        alt=""/>
                </div>
                <div className="avatar">
                    <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt=""/>
                </div>
                <div className='profile-info'>
                    <h3>User name</h3>
                    <p>Age: 30</p>
                    <p>Country: Ukraine</p>
                </div>
                <UserPosts/>
            </div>
        )
    }
}

export default Profile;