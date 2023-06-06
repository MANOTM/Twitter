import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../layouts/Main";
import HeadTweet from "./Components/HeadTweet/HeadTweet";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Home.css";
import Tweet from "../../components/posts/Tweets/Tweet";
import { WhoToFollow100 } from "../../components/ProfileComponent/WhoToFollow100/WhoToFollow100";
import Loading from "../../components/Loading/Loading";
import { getAllTweets, getNewTweets, mixTweets } from "../../redux/Reducers/HomeReducer";
import ScrollPopup from "./Components/ScrollPopup/ScrollPopup";
import tweetFromJson from '../../data/JsonTweets.json';
import { useState } from "react";
import axios from "../../api/axios";
import ConnectionCheck from "../../assets/Helper/CheckConnexion";

export default function Home() {

  
  const { SetTitle } = useStateContext();
  SetTitle("Home");
  const { loggedIn: Auth, user } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const { tweets, newTweets, loading } = useSelector((state) => state.tweets);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  
  const getIDs = async() => {
    localStorage.removeItem('id_follows');
    localStorage.removeItem('id_Save');
    // store followers id
    const {  data: { data: followingData } } = await axios.get('/followings/'+user?.pseudo);
    const idFollowers = followingData.map(one => one.idUser)
    localStorage.setItem('id_follows',JSON.stringify(idFollowers))
    // store saves id
      const {  data: { data:bookmarkData } } = await axios.get('/bookmarks/'+user?.pseudo);
      const idSave = bookmarkData.map(one => one.idTweet)
      localStorage.setItem('id_Save',JSON.stringify(idSave));
  }


  useEffect(() => {
    if (!tweets || tweets.length === 0) {
      dispatch(getAllTweets());
    }
  
    Auth && getIDs();
  
    const intervalId = setInterval(() => {
      Auth && dispatch(getNewTweets());
    }, 20000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, tweets]);
  

  const CheckpopupTweets = () => {
    console.log("scroll");
    console.log(window.scrollY);
  }

  window.addEventListener('scroll',CheckpopupTweets)

  function handleMixTweets() {
    dispatch(mixTweets());
  }

  return (
    <>
      <Main>
        <div className="home">
          {
            Auth && <HeadTweet />
          }
          <ConnectionCheck>
            <div className="tweets__container">
              {newTweets?.length > 0 && (
                <div className="showTweets center" onClick={handleMixTweets}>
                <span>Show {newTweets.length} Tweets</span>
              </div>            
              )}
              {showScrollPopup && <ScrollPopup />}
              {loading ? (
                <Loading />
              ) : (
                <>
                  {tweets && tweets.length ? (
                    tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />)
                  ) : (
                    <>
                      {Auth ? (
                        <WhoToFollow100 />
                      ) : 
                        tweetFromJson.tweets.map((tweet, index) => <Tweet key={index} tweet={tweet}  />)
                      }
                    </>
                  )}
                </>
              )}
            </div>
          </ConnectionCheck>
        </div>
      </Main>
    </>
  );
}
