import React from 'react'
import Main from '../../layouts/Main'
import HeadTweet from './Components/HeadTweet/HeadTweet';
import { useStateContext } from '../../contexts/ContextProvider';
import './Home.css'
import Tweet from '../../components/posts/Tweets/Tweet';
import { WhoToFollow100 } from '../../components/ProfileComponent/WhoToFollow100/WhoToFollow100';
import Retweet from '../../components/posts/Retweet/Retweet';

export default function Home() { 
    const { SetTitle } = useStateContext();
    SetTitle('Home')
    const user = JSON.parse(localStorage.getItem('user_info')) || {name: 'ahmed chawki',pseudo: '@AhmedChawki44'};
    return (
        <>
            <Main>
                <div className="home">
                    <HeadTweet />
                    <div className="tweets__container">
                        {/* ============= POST ============= */}
                        <Tweet
                            user={user}
                            created_at="8h"
                            verifyUser={true}
                            tweet_image="https://pbs.twimg.com/media/Fvx0FtAaEAARGBp?format=jpg&name=small"
                            tweet_title="9raydis"
                            likes_count="4,875"
                            reply_count="248"
                            retweet_count="257M"
                            liked={true}
                            retweeted={false}
                        />
                        <Retweet
                            user={user}
                            created_at="8h"
                            tweet_video="hdqzdzqd"
                            tweet_title="green day still G(old)"
                            likes_count="4,875"
                            reply_count="248"
                            retweet_count="257M"
                            liked={false}
                            retweeted={true}
                        />
                        <WhoToFollow100 />
                        <Retweet
                            user={user}
                            created_at="8h"
                            tweet_video="hdqzdzqd"
                            tweet_title="green day still G(old)"
                            likes_count="4,875"
                            reply_count="248"
                            retweet_count="257M"
                            liked={false}
                            retweeted={true}
                        />
                        <WhoToFollow100 />
                        <Tweet
                            user={user}
                            created_at="8h"
                            tweet_video="hdqzdzqd"
                            tweet_title="green day still G(old)"
                            likes_count="4,875"
                            reply_count="248"
                            retweet_count="257M"
                            liked={false}
                            retweeted={true}
                        />
                    </div>
                </div>
            </Main>
        </>
    );
}
