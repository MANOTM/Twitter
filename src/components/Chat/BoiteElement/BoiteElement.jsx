import './BoiteElement.css'
import {ChatLine} from '../ChatLine/ChatLine'
import Loading from '../../Loading/Loading'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStateContext } from '../../../contexts/ContextProvider'
export const BoiteElement = () => {
  const {ToBottom }=useStateContext()
    const [data,setData] =useState(null)
    const [loading,setLoading] =useState(true) 
    useEffect(()=>{ 
        if(!ToBottom){
          axios.get("https://reqres.in/api/users?page=2")
          .then(function (response) {
            setTimeout(()=>{ 
              setData(response.data.data.map(it=>{
                return <ChatLine key={it.id} user={it}  />
              }))   
              setLoading(false)  
  
            },1000)
            
          })  
        }
      },[ToBottom])
    return (
        <>
            {!ToBottom &&
                <div className="boite_messages_chatLines"> 
                    {
                        loading ? <Loading /> : data
                    }
                </div>
            }
        </>
    )
}
