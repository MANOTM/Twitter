import React from "react";
import avatar from '../../../../assets/images/defaultProfile.png';
import { Link } from "react-router-dom";
import "../../Notification.css";

export default function FollowNotifications({ notif }) {
    return (
        <div className="notification">
            <Link key={notif?.id_notify} className="notification__row hover">
                <div className="notification-head">
                    svg
                    <Link
                        key={notif.id_notify}
                        to={`/${notif?.pseudo}`}
                    >
                        <img
                            src={notif?.pp || avatar}
                            alt="notification-avatar"
                            className="notification-avatar"
                        />
                    </Link>
                    <div className="notification-msg">
                        <span>
                            <Link
                                key={notif?.id_notify}
                                to={`/${notif?.pseudo}`}
                            >
                                <span className="name"> {notif?.name} </span>
                            </Link>
                            followed you
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
