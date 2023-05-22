import React from 'react'
import "../../Notification.css";



export default function LikeNotifications() {
    return (
        <div className="notification">

            
                <div className="notification__option center" title='More'></div>
                    
                <div className="notification-head">
                    like icon
                    {/*} <img src={ } alt="notification-avatar" className='notification-avatar'/>*/}
                            
                    <div className="notification-msg">
                        <span >
                        
                                <span className="name">hhhh </span>
                            
                            liked your post
                        </span>
                    </div>
                </div>
        </div>
    )
}