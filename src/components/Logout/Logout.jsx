import React from 'react'
import TwitterIcon from '../icons/TwitterIcon'
import FollowBtn from '../buttons/FollowBtn'
import './Logout.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Reducers/AuthReducer';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('Auth_token');
        dispatch(logOut())
        navigate('/')
    }
    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="modal__logout radius">
            <div className="logout__logo">
                <TwitterIcon />
            </div>
            <div className='logout__content'>
                <span>Log out of Twitter?</span>
                <p className='small-text'>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </p>
            </div>
            <div className="logout__buttons">
                <FollowBtn title="Log out" click={handleLogout} />
                <FollowBtn title="Cancel" click={handleCancel} noBackground={true} />
            </div>
        </div>
    )
}
