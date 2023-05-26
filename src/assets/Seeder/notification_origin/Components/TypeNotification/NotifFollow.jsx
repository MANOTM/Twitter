import React from 'react'
import avatar from '../../../../assets/images/defaultProfile.png'
import ThreePoints from '../../../../components/Icons/ThreePoints'
import { Link } from 'react-router-dom'
import { Follow } from '../../Icons/notificationIcons'

export default function NotifFollow({ notifi }) {
    return (
        <Link key={notifi.id_notify} to={`/${notifi.pseudo.replace('@', '')}`} className="notification__row hover">
            <div className="notification__option center" title='More'>
                <ThreePoints />
            </div>
            <div className="notification__icon__type">
                <div className="notification__icon">
                    <Follow />
                </div>
            </div>
            <div className="notification__body">
                <div className="notification__avatar">
                    <img src={notifi.pp || avatar} alt="notification__avatar" />
                </div>
                <div className="notification__message">
                    <span className="notification__span"><span className="pseudo">{notifi.name}</span> followed you</span>
                </div>
            </div>
        </Link>
    )
}
