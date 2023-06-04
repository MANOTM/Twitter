import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import { SettingIcon } from '../../Icons/notificationIcons'
import { useNavigate } from 'react-router-dom'

export default function HeaderNotification() {
    const navigate = useNavigate()
    return (
        <div className='header__notification'>
            <span className="notification__title__header">Notifications</span>

            <span onClick={()=>navigate('/settings/Clear')} className="notification__setting center">
                <SettingIcon />
            </span>

        </div>
    )
}
