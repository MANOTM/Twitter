import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import axios from "axios";
import { FollowFlex } from '../style/profile';


const Follower = (props) => {
  const [response, setResponse] = useState(null);

  const { user } = props;

  const { username } = useParams();
  // const myId = useSelector((state) => state.profile.user.id);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    (async () => {
      setResponse({
        // followers: res.data.followers,
        // following: res.data.following,
        followers: 10,
        following: 20,
      });
    })();
  }, [user]);

  // if (!response) return <React.Fragment></React.Fragment>;

  return (
    <FollowFlex>
      <div>
        {/* <Link to={`/profile/${username}/following`}> */}
        <Link >
          <p>
            <span style={{ color: 'white' }}>
              {2}
              {/* {response.following.length} */}
            </span>{" "}
            <span>Following</span>
          </p>
        </Link>
      </div>
      <div>
        {/* <Link to={`/profile/${username}/followers`}> */}
        <Link >
          <p>
            <span  style={{ color: 'white' }}>
              {3}
              {/* {response.following.length} */}
            </span>{" "}
            <span>Followers</span>
          </p>
        </Link>
      </div>
    </FollowFlex>
  );
};

export default Follower;
