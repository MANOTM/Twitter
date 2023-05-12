import { useState } from 'react'
import NewMessage from '../../Icons/NewMessage'
import SearchIcon from '../../Icons/SearchIcon'
import SettingsIcon from '../../Icons/SettingsIcon'
import './ChatLeft.css'
import { ChatLine } from '../ChatLine/ChatLine'
import { useStateContext } from '../../../contexts/ContextProvider'

export const ChatLeft = () => {
    const userA=[{id:2,first_name:'sma3in',last_name:"Mansouri", avatar:'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small'},{id:662,first_name:'3tman',last_name:"Mansouri" , avatar:'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small'},{id:22,first_name:'Otmane',last_name:"Mansouri" , avatar:'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small'},{id:25,first_name:'Otmane',last_name:"Mansouri" , avatar:'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small'},{id:55,first_name:'Otmane',last_name:"Mansouri" , avatar:'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small'}]
    const [InputActive, setInputActive] = useState(false)
    const {ShowingCard,setShowingCard}=useStateContext()
    return (
        <div className='chat__left scroll'>
            <div className="boite__m__header cursor_auto">
                <div className="boite__header__info">
                    <div className="boite_header__user">
                        <span className='boite__header__title'>Messages</span>
                    </div>
                </div>
                <div className="boite__header__actions">
                    <div className="iconH">
                        <SettingsIcon />
                    </div>
                    <div className="iconH" onClick={()=>setShowingCard(true)}>
                        <NewMessage />
                    </div>
                </div>
            </div>

            <div className={`search__chat ${InputActive && 'active'}`} onClick={() => setInputActive(true)}>
                <div className="search__chat_form">
                    <SearchIcon fill="rgb(113, 118, 123)" />
                    <div className="input__search">
                        <input type="text" placeholder='Search Direct Messages' onBlur={() => { setInputActive(false) }} />
                    </div>
                </div>
            </div>
            <div className="chat_left_users">
                {userA.map(item=><ChatLine user={item} key={item.id} to={item.id}/>)}
            </div>
        </div>
    )
}
