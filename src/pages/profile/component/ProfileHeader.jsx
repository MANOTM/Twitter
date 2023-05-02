import React, { useState } from "react";
import './ProfileHeader.css'
import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt ,CgCalendarDates } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useStateContext } from "../../../contexts/ContextProvider";

const ProfileHeader = () => {
  const { user } = useSelector(state => state.Auth)
  const [follow, setfollow] = useState(false)
  const { SetTitle } = useStateContext();
  SetTitle(`${user.name} (@${user.pseudo})`)
  const followHandler=()=>{
      setfollow(!follow)
  }

  return (
    <div>
        <div id="box-top">
          <span id="back-icon-box">
            <BiArrowBack id="back-icon" />
          </span>

          <div id="box-top-right">
            <p id="name-header">Smail El Faiz</p>
            <span id="tweets-number">22 Tweets</span>
          </div>
        </div>


      <div id="header-box">
        <img id="profile-image" src='https://pbs.twimg.com/profile_images/1613293977985318932/uR3GlJQf_normal.jpg'></img>
      </div>

      <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header"  />
        </span>
        <button
          className="Follow"
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}
          {/* follow */}
        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user"> { user.name } </p>
        <p id="id-user"> { user.pseudo } </p>
      </div>

      <div id="etat-box">
        <p id="etat"> { user.birthDay } </p>
      </div>
      
      <div id="date-box">
        <CgCalendarDates id="date-icon" />
        <p id="date"> { user.created_at } </p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">35</span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow === false ? 10 : 9}
        </span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div>


      
      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

    </div>
    
  )
}

export default ProfileHeader