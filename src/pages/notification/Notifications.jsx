import React from 'react'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'
import './Notification.css';
import NotifFollow from './Components/TypeNotification/NotifFollow';
import NotFoundNotification from './Components/HelpNotification/NotFoundNotification';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import HeaderNotification from './Components/HelpNotification/HeaderNotification';
import { useEffect } from 'react';

export default function Notifications() {

  const { SetTitle } = useStateContext();
  const { data, loading } = useFetch('/notifications');
  // const { data:notification, } = useFetch('/readNotifications');
  

  SetTitle()
  return (
        <Main> 
          <div>
            <HeaderNotification />
            <div className="notification">
              {
                loading ? <Loading /> : data?.data?.length ? 
                data?.data?.map(notifi => (
                  <NotifFollow key={notifi.id_notify} notifi={notifi} />
                  ))
                  :
                  <NotFoundNotification />
              }
            </div>
          </div>
        </Main>
  ) 
}
