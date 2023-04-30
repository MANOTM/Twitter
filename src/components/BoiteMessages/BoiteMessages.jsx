import { useState } from 'react'
import { ChatLine } from '../ChatLine/ChatLine'
import NewMessage from '../Icons/NewMessage'
import Collapse from '../Icons/collapse'
import './BoiteMessages.css'
import Loading from '../Loading/Loading'
import { useEffect } from 'react'
import axios from 'axios'

export const BoiteMessages = () => {
    const [ToBottom, setToBottom] = useState(true)
    const [data,setData] =useState(null)
    const [loading,setLoading] =useState(true)
    const handelChange=()=>{
      setToBottom(!ToBottom)
      setData(null)
      setLoading(true)
    }
    useEffect(()=>{ 
      if(!ToBottom){
        axios.get("https://reqres.in/api/users?page=1")
        .then(function (response) {
          setTimeout(()=>{
            setData(response.data.data.map(it=>{
              return <ChatLine key={it.id} avatar={it.avatar} name={`${it.first_name} ${it.last_name} ${it.first_name}`} usernam={it.first_name+it.last_name} time={' Apr 17'} text={it.last_name}/>
            }))   
            setLoading(false)  

          },1000)
          
        })  
      }
    },[ToBottom])
  return (
    <div className={`boite__messages ${ToBottom && 'toBottom'} `}>
        <div className="boite__m__header">
            <span className='boite__header__title'>Messages</span>
            <div className="boite__header__actions"> 
              <NewMessage/>
              <Collapse onClick={handelChange} className={`Collapse ${ToBottom && 'rotate'}`}/> 
            </div>
        </div>
        {!ToBottom &&
        <div className="boite_messages_chatLines">
          {
            loading ? <Loading/>: data
          } 
        </div>
        }
    </div>
  )
}
