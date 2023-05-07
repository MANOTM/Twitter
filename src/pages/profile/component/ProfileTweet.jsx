import {React,useState ,useEffect} from 'react'
import Post from '../../../components/posts/Post'
import axios from 'axios'
const URL = 'http://127.0.0.1:8000/api/';
const ProfileTweet = ({ slug }) => {

    // const [tweets, setTweets] = useState([]);
    // useEffect(() => {
    //   const fetchTweets = async () => {
    //     const response = await axios.get(`${URL}/tweets/${slug}`);
    //     const { tweets } = response.data;
    //     setTweets(tweets);
    //   };
  
    //   fetchTweets();
    // }, [slug]);
  
  return (
    <div>
      {/* {tweets.map((tweet) => ( */}
        <Post
        // key={tweet.id}
        usename={"Smail"}
        tagname={"@Sb3"}
        verify={true}
        title={"Eat to live and Don't Live to eat My frant"}
        tweet={
        "https://i.pinimg.com/564x/fb/a3/47/fba34776c01f241f3481d392fd296aaf.jpg"
        }
      />
      {/* ))} */}
  </div>
  )
}

export default ProfileTweet


