import React from 'react'
import FollowBtn from '../buttons/FollowBtn'

export default function SuggestionUser({name,username,avatar}) {
  return (
    <div className="suggestions">
        <div className="suggestion__user hover">
          <div className="suggestion__content">
            <div className="avatar">
              <img src={avatar} alt=""  />
            </div>
            <div className="flex_column ">
                <span className='name ellipsis'>{name}</span>
                <span className='username ellipsis'>@{username}</span>
            </div>
          </div>
          <FollowBtn title="Follow"/>
        </div>
      </div>
  )
}
