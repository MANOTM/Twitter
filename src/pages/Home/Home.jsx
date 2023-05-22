import React, { useEffect } from "react";
import Main from "../../layouts/Main";
import HeadTweet from "./Components/HeadTweet/HeadTweet";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Home.css";
import Tweet from "../../components/posts/Tweets/Tweet";
import { WhoToFollow100 } from "../../components/ProfileComponent/WhoToFollow100/WhoToFollow100";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

export default function Home() {
    const { SetTitle } = useStateContext();
    SetTitle("Home");
    const { loading, data } = useFetch('/');
    console.log(data);
    const { loggedIn: Auth } = useSelector(state => state.Auth);
    return (
        <>
            <Main>
                <div className="home">
                    <HeadTweet />
                    {/* ============= POST ============= */}
                    <div className="tweets__container">
                        {
                            loading ? <Loading /> : data?.data?.length ?
                            data?.data.map(tweet => <Tweet key={tweet.idTweet} tweet={tweet} />) : Auth ? <WhoToFollow100 /> : <span style={{textAlign:'center'}} className="small-text">Nothing</span>
                        }
                    </div>
                </div>
            </Main>
        </>
    );
}
