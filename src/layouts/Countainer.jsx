import React from 'react';
import './countainer.css';
import { Outlet, matchPath, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Toast from '../components/Toast/Toast';
import ContainerContent from '../assets/Helper/MultiComponents';
import { BoiteMessages } from '../components/Chat/BoiteMessages/BoiteMessages';
import { useSelector } from 'react-redux';


export default function Countainer() {  
  const { loggedIn:Auth } = useSelector(state => state.Auth)
  const isInMessagePath = useLocation().pathname == '/messages' || useLocation().pathname == '/messages/';  
  const match = matchPath(
    { path: "/messages/:idSender" },
    useLocation().pathname,
  ); 
  return (
    <div className='countainer'>
        <Toast  />
        <Sidebar /> 
        <Outlet />
        { !isInMessagePath  && !match && <ContainerContent />}
        {Auth && !isInMessagePath && !match &&  <BoiteMessages/>}
    </div>
  )
}
