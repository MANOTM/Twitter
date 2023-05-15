import React from 'react'
import { Outlet } from 'react-router-dom'
import Toast from '../../components/Toast/Toast'

export default function Overlay() {
    return <div className='overlay__showed center'>
        <Outlet />
    </div>
}
