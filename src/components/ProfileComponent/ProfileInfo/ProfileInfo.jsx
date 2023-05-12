import React from 'react'
import moment from 'moment';
import Born from '../../Icons/Born'
import Calendrier from '../../Icons/calendrier'
import defaultProfile from '../../../assets/images/defaultProfile.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ThreePoints from '../../Icons/ThreePoints'; 

export const ProfileInfo = ({data}) => {
  const birthday = moment(data.birthday, "YYYY/MM/DD"); 
  const joined = moment(data.created_at, "YYYY/MM/DD");  
  const { loggedIn:Auth, user } = useSelector(state => state.Auth) 
  return (
    <>
    <div className="profile_images">
    <div className="profile_banner">
      {data.cover && <img src="https://pbs.twimg.com/profile_banners/330262748/1635957145/600x200" alt="" className="img__banner" />}
    </div>  
    <div className="profile__img">
      <div className="img__profile">
        <img src={data.pp?'':defaultProfile} alt="" />
      </div>
      <div className="profile__actions">

        {Auth && data.id==user.id? 
         <button className='profile_btn btn-def'>Edit profile</button>
        :
        <>
         <div className="iconH">
          <ThreePoints/>
         </div>
         <button className='btn-def btn_follow'>Follow</button>
         </>
        }
         {/* <button className='btn-def btn_unfollow'>Following</button> */}
      </div>
    </div>
  </div>  

  <div className="profile__user_content">
    <div className='profile_column'>
      <span className="profile__user_name">{data.name}</span>
      <span className="profile__user_username">{data.pseudo}</span>
    </div>

    <div className="profile__bio">
      {data.bio || ''}
    </div>

    <div className="profile_user_info">
      <div className='profile_row'>
        <div className="profile_icon">
          <Born/>
        </div><span>Born {birthday.format("MMMM DD")}</span>
      </div>
      <div className='profile_row'>
        <div className="profile_icon">
          <Calendrier/> 
        </div><span>Joined {joined.format("MMMM YYYY")}</span>
      </div>
    </div>
    <div className="card__followers">
        <Link  className="c_followers underline">
            <span>{data.followings}</span>
            <span className='username '>Following</span>
        </Link>
        <Link className="c_followers underline">
            <span>{data.followers}</span>
            <span className='username '>Followers</span>
        </Link>
    </div> 
  </div>
  
  </>
  )
}
