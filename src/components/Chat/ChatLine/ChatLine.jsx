import { NavLink } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import ThreePoints from '../../Icons/ThreePoints'
import './ChatLine.css'
import avatar from '../../../assets/images/defaultProfile.png'
import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handelInchat } from '../../../redux/Reducers/Chat'
import { DeleteIcon } from '../../Icons/DeleteIcon'
import { OptionsChat } from '../OptionsChat/OptionsChat'  
import formatTimeAgo from '../../../assets/Helper/FormatDate';

export const ChatLine = ({ user, to }) => {
    const { handelChat } = useStateContext()
    const [lastMessage, setLastMessage] = useState(null)
    const [Options, setOptions] = useState(false)
    const dispatch = useDispatch() 

    useEffect(() => {
        const sortedMessage = user?.messages.slice().sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
        })
        setLastMessage(sortedMessage?.pop())
    }, [user])

    const SelectUser = (user) => {
        handelChat(user)
        dispatch(handelInchat(true))
    }
    return (
        user?.idReceiver &&

        <div className='chat__line hover' >
            <NavLink to={to && '/messages/' + to} className="chat__line_" onClick={() => { SelectUser(user) }}>
                <div className="chat__avatar">
                    <img src={user?.receiver_pp || avatar} alt="" />
                </div>
                <div className="chat__line__content">
                    <div className="chat__line_in">
                        <div className="chat__line__info">
                            <div className="chat__line__name  ">
                                <span className='name ellipsis'>{user?.receiver_name} </span>
                            </div>
                            <div className="chat__line__username  ">
                                <span className='username '>{user?.receiver_pseudo}</span>
                            </div>
                            <div className="chat__line__time">
                                <span className='username '>{lastMessage?.created_at && <span className='point'>.</span>}{lastMessage?.created_at && formatTimeAgo(moment(lastMessage?.created_at).fromNow()) }</span>
                            </div>
                        </div>

                    </div>
                    <div className="chat__line_message ellipsis">
                        <span className='text-gray '>{lastMessage?.message_text && (user?.idReceiver !== lastMessage?.idReceiver ? 'Him:' : 'You:')}  {lastMessage?.message_text}</span>
                    </div>
                </div>
            </NavLink>
            <div className="iconH" onClick={() => setOptions(true)}>
                <ThreePoints />
            </div>
            {Options && <div onClick={() => setOptions(false)} className="overly"></div>}
            {Options && <OptionsChat userId={user?.idReceiver} setOptions={setOptions} />}

        </div>
    )
}



