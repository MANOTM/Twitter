import {useEffect, useState} from 'react' 
import defaultAvatar from '../../assets/images/defaultProfile.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'  
import useFollow from '../../hooks/useFollow'

export default function SuggestionUser({userSu , isFollowed}) {  
  
  
  const { user } = useSelector(state => state.Auth) 
  const [followHim,setfollowHim]=useState(isFollowed)  
  const follow = () =>{
    useFollow(followHim,userSu.idUser)
    setfollowHim(!followHim)
  } 
  return (
    <div className="suggestions">
        <div className="suggestion__user hover">
          <Link to={`/${userSu?.pseudo?.substring(1) || ''}`} className="suggestion__content">
            <div className="avatar">
              <img src={userSu?.image || defaultAvatar} alt=""  />
            </div>
            <div className="flex_column ">
                <span className='name ellipsis'>{userSu?.name}</span>
                <span className='username ellipsis'>{userSu?.pseudo}</span>
            </div>
          </Link> 
          {user?.id==userSu?.idUser ?'':
            <> 
            { followHim!=undefined &&followHim && <button className='btn-def btn_unfollow' onClick={follow}>Following</button>} 
            { followHim!=undefined && !followHim &&<button className='btn-def btn_follow' onClick={follow}>Follow</button>} 
            </>
          }
        </div>
      </div>
  )
}
