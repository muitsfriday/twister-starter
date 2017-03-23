import React, {Component} from 'react'
import config from '../config/index'

class NewTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleOnChange = this
            .handleOnChange
            .bind(this)
        this.handleOnClick = this
            .handleOnClick
            .bind(this)
        this.handleOnKeyDown = this
            .handleOnKeyDown
            .bind(this)
        this.addTweet = this
            .addTweet
            .bind(this)
    }

    handleOnChange(event) {
        this.setState({text: event.target.value})
    }

    handleOnKeyDown(event) {
        if (event.keyCode !== 13) {
            return
        }
        event.preventDefault()
        this.addTweet({name: this.props.name, username: this.props.username, tweetText: this.state.text})
    }

    handleOnClick() {
        this.addTweet({name: this.props.name, username: this.props.username, tweetText: this.state.text})
    }

    addTweet(tweet) {
        const newTweet = tweet
        newTweet.id = Math.floor(Date.now())

        if (tweet.tweetText.length == 0) return;

        fetch(`${config.api.host}:${config.api.port}/api/tweets`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                mode: 'cors',
                body: JSON.stringify(tweet) 
            })
            .then(response => response.json())
            .then(json => {
                this.props.addToTweetList(tweet)
                this.setState({text: ''})
            })
    }

    render() {
        return (
            <div className="new-tweet">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="tweet-text col-sm-10">
                            <input
                                type="text"
                                id="tweetText"
                                className="form-control"
                                placeholder="What's happening"
                                value={this.state.text}
                                onChange={this.handleOnChange}
                                onKeyDown={this.handleOnKeyDown}/>
                        </div>
                        <div className="col-sm-2">
                            <input
                                type="button"
                                className="btn btn-default"
                                value="Tweet"
                                onClick={this.handleOnClick}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewTweet
