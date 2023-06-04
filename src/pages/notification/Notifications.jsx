import React from 'react'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'
import './Notification.css';
import NotifFollow from './Components/TypeNotification/NotifFollow';
import NotFoundNotification from './Components/HelpNotification/NotFoundNotification';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import HeaderNotification from './Components/HelpNotification/HeaderNotification';
import NotifiLike from './Components/TypeNotification/NotifiLike';
import { useEffect } from 'react';
import axios from '../../api/axios';
import NotifTweet from './Components/TypeNotification/NotifTweet';

export default function Notifications() {
  const { SetTitle, setCountNotifi  } = useStateContext();
  const { data, loading } = useFetch('/notifications');
  useEffect(()=>{
    axios
    .get('/readNotifications')
    .then(res =>setCountNotifi(0))
    .catch(err =>console.log);
  },[])
  SetTitle()

  return (
        <Main> 
          <div>
            <HeaderNotification />
            <div className="notification">
              {
                loading ? <Loading /> : data?.data?.length ? 
                data?.data?.map(notifi => {
                  if(notifi.type === 'follow'){
                    return <NotifFollow key={notifi.id_notify} notifi={notifi} />
                  }
                  else if(notifi.type === 'Like'){
                    return <NotifiLike key={notifi.id_notify} notifi={notifi} />
                  }
                  else if(notifi.type === 'Tweet'){
                    return <NotifTweet key={notifi.id_notify} notifi={notifi} />
                  }
                })
                  :
                  <NotFoundNotification />
              }
            </div>
          </div>
        </Main>
  ) 
}
