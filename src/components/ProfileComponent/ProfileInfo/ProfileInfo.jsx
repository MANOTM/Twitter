import React, { useState } from 'react'
import moment from 'moment';
import Born from '../../Icons/Born'
import Calendrier from '../../Icons/calendrier'
import defaultProfile from '../../../assets/images/defaultProfile.png'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ThreePoints from '../../Icons/ThreePoints';  
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard';
import { useEffect } from 'react'; 
import useFetch from '../../../hooks/useFetch';
import useFollow from '../../../hooks/useFollow';

export const ProfileInfo = ({data1}) => {
  const {pseudo}=useParams()  
  const birthday = moment(data1.birthday, "YYYY/MM/DD"); 
  const joined = moment(data1.created_at, "YYYY/MM/DD");  
  const { loggedIn:Auth, user } = useSelector(state => state.Auth) 
  const [NotAuth,setnotAuth]=useState(false)  
  const [followHim,setfollowHim]=useState(null)

  const {data}=useFetch('followings/'+user?.pseudo )
 
  useEffect(()=>{ 
    if(data?.data){
      setfollowHim( data?.data?.some(user=> user?.pseudo.substring(1) == pseudo))
    }
  },[data,data1,pseudo])
  
  const follow = () =>{
    useFollow(followHim,data1.id)
    setfollowHim(!followHim)
  }

  return (
    <>
    <div className="profile_images">
    <div className="profile_banner">
      {data1.cover && <img src="https://pbs.twimg.com/profile_banners/330262748/1635957145/600x200" alt="" className="img__banner" />}
    </div>  
    <div className="profile__img">
      <div className="img__profile">
        <img src={data1.pp?'':defaultProfile} alt="" />
      </div>
      <div className="profile__actions"> 

      {Auth && data1.id==user.id && <button className='profile_btn btn-def'>Edit profile</button>}
      {!Auth && <button className='btn-def btn_follow' onClick={()=>setnotAuth(true)}>Follow</button>}
      {Auth  && followHim!=null &&followHim && data1.id!=user.id && <button className='btn-def btn_unfollow' onClick={follow}>Following</button>} 
      {Auth  && followHim!=null && !followHim&&data1.id!=user.id &&<button className='btn-def btn_follow' onClick={follow}>Follow</button>} 
      
      </div>
    </div>
  </div>  

  <div className="profile__user_content">
    <div className='profile_column'>
      <span className="profile__user_name">{data1.name}</span>
      <span className="profile__user_username">{data1.pseudo}</span>
    </div>

    <div className="profile__bio">
      {data1.bio || ''}
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
        <Link to='i/following' className="c_followers underline">
            <span>{data1.followings}</span>
            <span className='username '>Following</span>
        </Link>
        <Link to='i/followers' className="c_followers underline">
            <span>{data1.followers}</span>
            <span className='username '>Followers</span>
        </Link>
    </div> 
  </div>
  {NotAuth && <NotAuthCard/>}
  </>
  )
}
