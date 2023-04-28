import React from 'react'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Auth/Login/Login'
import Register from '../../pages/Auth/Register/Register'
import AsideTrends from '../../components/Trends/AsideTrends'
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow'
import NewToTwitter from '../../components/NewToTwitter/NewToTwitter'
import FooterAuth from '../../components/Auth/FooterModal/FooterAuth'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'


export function LoginComponent() {
    return (
        <>
            <Home />
            <Login />
        </>
    )
}
export function RegisterComponent() {
    return (
        <>
            <Home />
            <Register />
        </>
    )
}

export default function ContainerContent() {
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    // const path = useLocation().pathname != '/explore' && useLocation().pathname != '/profile';
    const path = useLocation().pathname != '/message';
    if(Auth){
        return path ? <WhoToFollow /> : <AsideTrends />
    }
    return <><NewToTwitter /> <FooterAuth /></>
}
