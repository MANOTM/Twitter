import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'; 

export const MessageItem = ({message}) => { 
    console.log();
    const { user} = useSelector(state => state.Auth)  
    return ( 
        <div className={`chat_ele ${message.message_text.length<8 && 'text-center'} ${user?.id!=message?.idReceiver && 'align__flex_end'}`}>
            <span className="chat__text">{message?.message_text}</span>
            <small className="chat__date text-gray">{message.created_at? moment.utc(message.created_at).local().format("MMM D, YYYY, h:mm A"):'sending...'}</small>
        </div>  
    )
}
