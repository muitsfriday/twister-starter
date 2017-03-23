import React, {Component} from 'react';

class ProfileFollow extends Component {
    render() {  
        return (
            <div className="action last-section">
                <input type="button" 
                className={'btn btn-lg ' + (this.props.isFollowing ? 'btn-danger' : 'btn-default')} 
                value={this.props.isFollowing ? 'UnFollow' : 'Follow' }
                onClick={this.props.handleToggleFollow}/>
            </div>
        );
    }
}

export default ProfileFollow;