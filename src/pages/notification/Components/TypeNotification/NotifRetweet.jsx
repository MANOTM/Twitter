import React from 'react'
import avatar from '../../../../assets/images/defaultProfile.png'
import ThreePoints from '../../../../components/Icons/ThreePoints'
import { Link } from 'react-router-dom'
import { RetweetIcon } from '../../Icons/notificationIcons'

export default function NotifiRetweet({ notifi }) {
    return (
        <Link key={notifi.id_notify} to={`/${notifi.pseudo.substring(1)}`} className="notification__row hover">
            <div className="notification__option center" title='More'>
                <ThreePoints />
            </div>
            <div className="notification__icon__type like">
                <div className="notification__icon retweet">
                    <RetweetIcon />
                </div>
            </div>
            <div className="notification__body">
                <div className="notification__avatar">
                    <img src={notifi.pp || avatar} alt="notification__avatar" />
                </div>
                <div className="notification__message">
                    <span className="notification__span"><span className="pseudo">{notifi.name}</span> Retweeted your Tweet</span>
                </div>
                <div className="notification__content">
                    <span className="notification__span small-text">i didn't get any description for this notification from api.</span>
                </div>
            </div>
        </Link>
    )
}
