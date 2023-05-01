import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Overlay() {
    return <div className='overlay__showed center'>
        <Outlet />
    </div>
}
