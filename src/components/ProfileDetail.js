import React, {Component} from 'react';

class ProfileDetail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="col">
                    <div className="text">Tweets</div>
                    <div className="number">{this.props.numTweets}</div>
                </div>
                <div className="col">
                    <div className="text">Followers</div>
                    <div className="number">{this.props.numFollowers}</div>
                </div>
                <div className="col">
                    <div className="text">Following</div>
                    <div className="number">{this.props.numFollowings}</div>
                </div>
            </div>
        );
    }
}

export default ProfileDetail;