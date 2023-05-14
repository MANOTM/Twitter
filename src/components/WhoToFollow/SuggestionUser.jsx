import {useEffect, useState} from 'react'
import FollowBtn from '../buttons/FollowBtn'
import defaultAvatar from '../../assets/images/defaultProfile.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import useFetch from '../../hooks/useFetch'
import useFollow from '../../hooks/useFollow'

export default function SuggestionUser({userSu}) {
  const { user:{pseudo} } = useSelector(state => state.Auth)   
  const [followHim,setfollowHim]=useState(null)
  const {data}=useFetch('followings/'+pseudo )  
  useEffect(()=>{ 
    if(data?.data){
      setfollowHim( data?.data?.some(user=> user?.pseudo == userSu?.pseudo))
    } 
  },[data]) 
  const follow = () =>{
    useFollow(followHim,userSu.idUser)
    setfollowHim(!followHim)
  }
  return (
    <div className="suggestions">
        <div className="suggestion__user hover">
          <Link to={`/${userSu?.pseudo.substring(1) || ''}`} className="suggestion__content">
            <div className="avatar">
              <img src={userSu?.avatar || defaultAvatar} alt=""  />
            </div>
            <div className="flex_column ">
                <span className='name ellipsis'>{userSu?.name}</span>
                <span className='username ellipsis'>{userSu?.pseudo}</span>
            </div>
          </Link> 
            { followHim!=null &&followHim && <button className='btn-def btn_unfollow' onClick={follow}>Following</button>} 
            { followHim!=null && !followHim &&<button className='btn-def btn_follow' onClick={follow}>Follow</button>} 
      
        </div>
      </div>
  )
}
