import React from "react";
import Main from "../../layouts/Main";
import HeadTweet from "./Components/HeadTweet/HeadTweet";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Home.css";
import Tweet from "../../components/posts/Tweets/Tweet";
import { WhoToFollow100 } from "../../components/ProfileComponent/WhoToFollow100/WhoToFollow100";
import Retweet from "../../components/posts/Retweet/Retweet";
import { useSelector } from "react-redux";

export default function Home() {
    const { SetTitle } = useStateContext();
     const {Auth}= useSelector(state => state.Auth)
    SetTitle("Home");
    const tweet = {
        comments: 0,
        created_at: "2021-05-12T15:25:32.000000Z",
        description: "hello good man",
        email: "Antigone@antigone.ma",
        id: 1,
        idUser: 3,
        image: "https://pbs.twimg.com/media/Fvx0FtAaEAARGBp?format=jpg&name=small",
        likes: 0,
        name: "Antigone",
        pp: null,
        pseudo: "@Atingone444",
        video: null,
    };
    return (
        <>
            <Main>
                <div className="home">
                    <HeadTweet />
                    <div className="tweets__container">
                        {/* ============= POST ============= */}
                        <Tweet
                            tweet={tweet}
                        />
                       {Auth && <WhoToFollow100 />} 
                        <Tweet
                            tweet={tweet}
                        />
                        <Tweet
                            tweet={tweet}
                        />
                    </div>
                </div>
            </Main>
        </>
    );
}
