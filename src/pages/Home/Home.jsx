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

export default function Home() {
  const { SetTitle } = useStateContext();
  SetTitle("Home");
  const { loggedIn: Auth } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const { tweets, newTweets, loading } = useSelector((state) => state.tweets);
  
  useEffect(() => {
    dispatch(getAllTweets());
    const intervalId = setInterval(() => {
      dispatch(getNewTweets());
      console.log(newTweets?.length);
    }, 20000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  
  function handleMixTweets() {
    dispatch(mixTweets());
  }

  return (
    <>
      <Main>
        <div className="home">
          <HeadTweet />
          <div className="tweets__container">
            {newTweets?.length > 0 && (
              <div className="showTweets center" onClick={handleMixTweets}>
              <span>Show {newTweets.length} Tweets</span>
            </div>            
            )}
            <ScrollPopup />
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
                    ) : (
                      <span style={{ textAlign: "center" }} className="small-text">
                        Nothing
                      </span>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </Main>
    </>
  );
}
