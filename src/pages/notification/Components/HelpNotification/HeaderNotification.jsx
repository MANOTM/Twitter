import React from 'react'
import useFetch from '../../../../hooks/useFetch'

export default function HeaderNotification() {

    const { data, loading } = useFetch('/countNotification');

    return (
        <div className='header__notification'>
            <span className="notification__title__header">Notifications</span>

            <span className="notification__count__number">
                { loading ? '...' : (data?.data?.count_notify)  } notification
            </span>

        </div>
    )
}
