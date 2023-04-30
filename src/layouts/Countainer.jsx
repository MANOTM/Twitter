import React from 'react';
import './countainer.css';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Toast from '../components/Toast/Toast';
import ContainerContent from '../assets/Helper/MultiComponents';
import { BoiteMessages } from '../components/BoiteMessages/BoiteMessages';
import { useSelector } from 'react-redux';


export default function Countainer() {  
  const { loggedIn:Auth } = useSelector(state => state.Auth)
  const isInMessagePath = useLocation().pathname == '/messages'; 
  return (
    <div className='countainer'>
        <Toast  />
        <Sidebar /> 
        <Outlet />
        <ContainerContent />
        {Auth && !isInMessagePath && <BoiteMessages/> }
    </div>
  )
}
