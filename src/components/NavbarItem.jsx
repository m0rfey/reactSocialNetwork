import React, {Component} from 'react'

class NavbarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-item">
                <a href={this.props.linkPath}>{this.props.linkName}</a>
            </div>
        );
    }

}

export default NavbarItem;