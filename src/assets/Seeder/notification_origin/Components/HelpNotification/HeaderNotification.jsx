import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import { SettingIcon } from '../../Icons/notificationIcons'

export default function HeaderNotification() {

    return (
        <div className='header__notification'>
            <span className="notification__title__header">Notifications</span>

            <span className="notification__setting center">
                <SettingIcon />
            </span>

        </div>
    )
}
