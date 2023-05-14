import React from 'react'
import FollowBtn from '../buttons/FollowBtn'
import defaultAvatar from '../../assets/images/defaultProfile.png'
import { Link } from 'react-router-dom'

export default function SuggestionUser({name,username,avatar}) {
  
  return (
    <div className="suggestions">
        <div className="suggestion__user hover">
          <Link to={`/${username.substring(1) || ''}`} className="suggestion__content">
            <div className="avatar">
              <img src={avatar || defaultAvatar} alt=""  />
            </div>
            <div className="flex_column ">
                <span className='name ellipsis'>{name}</span>
                <span className='username ellipsis'>{username}</span>
            </div>
          </Link>
          <FollowBtn title="Follow"/>
        </div>
      </div>
  )
}
