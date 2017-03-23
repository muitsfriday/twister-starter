import React, {Component} from 'react';
import MainPanel from './MainPanel'
import NewTweet from './NewTweet';
import Profile from './Profile'
import Navbar from './Navbar'
import config from '../config/'

class BodyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageOwnerUsername: 'kookengarm',
            pageOwnerName: 'armkak',
            name: 'Muu',
            username: 'mumumumu',
            enableTweet: true,
            fetched: false,
            tweets: []
        }

        this.state.enableTweet = this.state.pageOwnerUsername == this.state.username

        this.addToTweetList = this
            .addToTweetList
            .bind(this)
    }

    componentDidMount() {
        //fetch data
        const uri = `${config.api.host}:${config.api.port}/api/tweets`
        const filter = `{ "where": { "username": "${this.state.pageOwnerUsername}" }}`

        fetch(`${uri}?filter=${filter}`, {mode: 'cors'})
            .then(res => res.json())
            .then(json => {
                json.map(tweet => this.addToTweetList(tweet))
                this.setState({fetched: true})
            })
    }

    addToTweetList(tweet) {
        const newTweet = tweet
        this.setState({
            tweets: [
                ...this.state.tweets,
                newTweet
            ]
        })
    }

    toggleFollow() {
        console.log('follow')
        this.setState({
            isFollowing: !this.state.isFollowing
        })
    }

    render() {
        const pageInfo = {
            username: this.state.pageOwnerUsername,
            name: this.state.pageOwnerName,
            numTweets: 20,
            numFollowers: 30,
            numFollowings: 10,
            isFollowing: this.state.isFollowing,
            toggleFollow: this.toggleFollow.bind(this),
        }
        return (
            <div>
                <Navbar/>
                <div className="container body">
                    <div className="left-panel">
                        <Profile {...pageInfo}
                        toggleFollow={(e) => this.toggleFollow(e)}/>
                    </div>
                    <div className="main-panel">
                        <MainPanel {...this.state}
                        addToTweetList={this.addToTweetList.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyContainer;