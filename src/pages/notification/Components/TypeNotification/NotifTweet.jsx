import React from 'react'
import avatar from '../../../../assets/images/defaultProfile.png'
import ThreePoints from '../../../../components/Icons/ThreePoints'
import { Link } from 'react-router-dom'
import { TweetIcon } from '../../Icons/notificationIcons'

export default function NotifTweet({ notifi }) {
    const { idTweet, id_notify, pseudo, name, pp } = notifi
    return (
        <Link to={`/${pseudo.substring(1)}/status/${idTweet}`} key={id_notify} className="notification__row hover">
            <div className="notification__option center" title='More'>
                <ThreePoints />
            </div>
            <div className="notification__icon__type like">
                <div className="notification__icon tweet">
                    <TweetIcon />
                </div>
            </div>
            <div className="notification__body">
                <div className="notification__avatar">
                    <img src={pp || avatar} alt="notification__avatar" />
                </div>
                <div className="notification__message">
                    <span className="notification__span"><span className="pseudo">{name}</span> post new Tweet</span>
                </div>
            </div>
        </Link>
    )
}
