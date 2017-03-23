import React, {Component} from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <ProfileHeader name={this.props.name} username={this.props.username}/>
                <ProfileDetail
                    numTweets={this.props.numTweets}
                    numFollowers={this.props.numFollowers}
                    numFollowings={this.props.numFollowings}/> 
                    {this.props.isOwnProfile
                    ? null
                    : <ProfileFollow
                        isFollowing={this.props.isFollowing}
                        handleToggleFollow={this.props.toggleFollow}/>}

            </div>
        );
    }
}

export default Profile;