import React from 'react'
import TwitterIcon from '../icons/TwitterIcon'
import FollowBtn from '../buttons/FollowBtn'
import './Logout.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Reducers/AuthReducer';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import Loading from '../Loading/Loading';
import { useState } from 'react';

export default function Logout() {
    const [logout, setLogout] = useState(false);
    const { SetTitle } = useStateContext();
    SetTitle(null, true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        setLogout(true)
        setTimeout(() => {
            Cookies.remove('Auth_token');
            dispatch(logOut())
            navigate('/')
            setLogout(false)
        }, 700);
    }
    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <>
            {
                logout ? (
                <div className="logout__loading">
                    <Loading />
                    <span className='small-text'>Loging out...</span>
                </div>) : <div className="modal__logout radius">
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
            }
        </>
    )
}
