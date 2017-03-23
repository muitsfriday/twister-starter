import React, {Component} from 'react';

class ProfileHeader extends Component {
    render() {
        return (
            <div className="header">
                <a href="me.html">
                    <div className="name">{this.props.name}</div>
                </a>
                <a href="me.html">
                    <div className="screen-name">@{this.props.username}</div>
                </a>
            </div>
        );
    }
}

export default ProfileHeader;