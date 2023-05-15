import React, { useEffect } from "react";
import Main from "../../layouts/Main";
import HeadTweet from "./Components/HeadTweet/HeadTweet";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Home.css";
import Tweet from "../../components/posts/Tweets/Tweet";
import { WhoToFollow100 } from "../../components/ProfileComponent/WhoToFollow100/WhoToFollow100";
import Retweet from "../../components/posts/Retweet/Retweet";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

export default function Home() {
    const { SetTitle } = useStateContext();
     const {Auth , loggedIn}= useSelector(state => state.Auth)
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
    const video = {
        comments: 0,
        created_at: "2021-05-12T15:25:32.000000Z",
        description: "green day move on to another world",
        email: "Antigone@antigone.ma",
        id: 1,
        idUser: 3,
        image: null,
        video: true,
        likes: 0,
        name: "King",
        pp: null,
        pseudo: "@Atingone444",
    };
    const { loading, data } = loggedIn ? useFetch('/') : { loading:false, data:null }
    return (
        <>
            <Main>
                <div className="home">
                    <HeadTweet />
                    {/* ============= POST ============= */}
                    <div className="tweets__container">
                        {/* {
                            loggedIn ? 
                            loading ? <Loading /> : data?.length ? 
                            data?.data.map(tweet => <Tweet tweet={tweet} />) :
                            <span className="small-text">there is no posts right now😢</span>
                            : 
                            <span className="small-text">Login in so you can see tweets😁</span>
                        } */}
                        <Tweet tweet={tweet} />
                        <Tweet tweet={video} />
                    </div>
                </div>
            </Main>
        </>
    );
}
