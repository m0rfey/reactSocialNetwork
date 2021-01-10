import React, {Component} from 'react'
import NewPost from './NewPost'
import Posts from './Posts'

class UserPosts extends Component {
    render() {
        return (
            <div className='user-posts'>
                <NewPost/>
                <Posts/>
            </div>
        )
    }
}

export default UserPosts;