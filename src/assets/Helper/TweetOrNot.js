import React from 'react'
import Tweet from '../../components/posts/Tweets/Tweet'
import Retweet from '../../components/posts/Retweet/Retweet'

export default function TweetOrNot({ tweet, index }) {

    if(tweet.type === 'tweet'){
        return <Tweet key={index} tweet={tweet} />
    }else{
        return <Retweet key={index} tweet={tweet} />
    }
}
