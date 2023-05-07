// import React, { useState } from "react";
// import './ProfileHeader.css'
// import { BiArrowBack } from "react-icons/bi";
// import { CgMoreAlt ,CgCalendarDates } from "react-icons/cg";
// import { useSelector } from "react-redux";

// const ProfileHeader = () => {
//   const { user } = useSelector(state => state.Auth)
//   const [follow, setfollow] = useState(false)
//   const followHandler=()=>{
//       setfollow(!follow)
//   }

//   return (
//     // <div>
//     //     <div id="box-top">
//     //       <span id="back-icon-box">
//     //         <BiArrowBack id="back-icon" />
//     //       </span>

//     //       <div id="box-top-right">
//     //         <p id="name-header">Smail El Faiz</p>
//     //         <span id="tweets-number">22 Tweets</span>
//     //       </div>
//     //     </div>


//     //   <div id="header-box">
//     //     <img id="profile-image" src='https://pbs.twimg.com/profile_images/1613293977985318932/uR3GlJQf_normal.jpg'></img>
//     //   </div>

//     //   <div id="edit-box">
//     //     <span id="more-box">
//     //       <CgMoreAlt id="more-header"  />
//     //     </span>
//     //     <button
//     //       className="Follow"
//     //       onClick={followHandler}
//     //     >
//     //       {follow ? "Follow" : "Following"}
//     //       {/* follow */}
//     //     </button>
//     //   </div>

//     //   <div id="name-id-box">
//     //     <p id="name-user"> { user.name } </p>
//     //     <p id="id-user"> { user.pseudo } </p>
//     //   </div>

//     //   <div id="etat-box">
//     //     <p id="etat"> { user.birthDay } </p>
//     //   </div>
      
//     //   <div id="date-box">
//     //     <CgCalendarDates id="date-icon" />
//     //     <p id="date"> { user.created_at } </p>
//     //   </div>

//     //   <div id="following-follow-box">
//     //     <span id="number-follow">35</span>
//     //     <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
//     //       Following
//     //     </a>

//     //     <span id="number-follow" className="margin-left">
//     //       {follow === false ? 10 : 9}
//     //     </span>
//     //     <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
//     //       Followers
//     //     </a>
//     //   </div>


      
//     //   <div id="nav-header">
//     //     <div id="box-nav" className="box-Tweets">
//     //       <p id="nav">Tweets</p>
//     //     </div>

//     //     <div id="box-nav" className="box-replies">
//     //       <p id="nav">Tweets & replies</p>
//     //     </div>

//     //     <div id="box-nav" className="box-Media">
//     //       <p id="nav">Media</p>
//     //     </div>

//     //     <div id="box-nav" className="box-Likes">
//     //       <p id="nav">Likes</p>
//     //     </div>
//     //   </div>

//     //   <div id="line"></div>

//     // </div>
//    <p>chp</p> 
   
//   )
// }

// export default ProfileHeader


import React from "react";
// import { useHistory } from 'history';
import { useSelector } from "react-redux";
import Icon from "./icon";
import { Header, HeaderWrapper, BackBtn } from "../style/profile";

const ProfileHeader = (props) => {
  const { heading, text } = props;
  // const history = useHistory();
  const backIconPaths = [
    "M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z",
  ];
  return (
    <HeaderWrapper >
      <Header >
        <div>
          <BackBtn >
            <Icon
              d={backIconPaths}
              width="22.5px"
              height="22.5px"
              fill="rgb(29, 161, 242)"
            />
          </BackBtn>
        </div>
        <div>
          <h2>{heading}</h2>
          {text && <p>{text}</p>}
        </div>
      </Header>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
