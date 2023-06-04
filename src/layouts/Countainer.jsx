import React from 'react';
import './countainer.css';
import { Outlet, matchPath, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Toast from '../components/Toast/Toast';
import ContainerContent from '../assets/Helper/MultiComponents';
import { BoiteMessages } from '../components/Chat/BoiteMessages/BoiteMessages';
import { useSelector } from 'react-redux';
import CreateTweet from '../components/Modals/CreateTweet/CreateTweet';
import ErrorModal from '../components/Modals/ErrorModal/ErrorModal';
import { useStateContext } from '../contexts/ContextProvider';


export default function Countainer() {  
  const { ShowErrorModal } = useStateContext();
  const { loggedIn:Auth } = useSelector(state => state.Auth)
  const isInMessagePath = useLocation().pathname == '/messages' || useLocation().pathname == '/messages/' || useLocation().pathname == '/settings' || useLocation().pathname.includes('/settings/');  
  const match = matchPath(
    { path: "/messages/:idSender" },
    useLocation().pathname,
  );
  return (
    <div className='countainer'>
        { !ShowErrorModal && <ErrorModal /> }
        <CreateTweet />
        <Toast />
        <Sidebar /> 
        <Outlet />
        { !isInMessagePath  && !match && <ContainerContent />}
        {Auth && !isInMessagePath && !match &&  <BoiteMessages/>}
    </div>
  )
}
