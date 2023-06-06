
import './ChatContent.css'
import avatar from '../../../assets/images/defaultProfile.png'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MessageItem } from '../MessageItem/MessageItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handelInchat, scrollPls } from '../../../redux/Reducers/Chat';
import { useStateContext } from '../../../contexts/ContextProvider';

export const ChatContent = ({ userChat }) => {
    const joined = moment(userChat?.receiver_joined  , "YYYY/MM/DD");
    const [chatSort, setChatSort] = useState([])
    const dispatch=useDispatch()
    const { converstions  ,InChat} = useSelector((state) => state.Chat);

    useEffect(() => {
        if (userChat) { 
            setChatSort(userChat?.messages.slice().sort((a, b) => {
                return new Date(a.created_at) - new Date(b.created_at);
            })) 
        }  else{
            dispatch(handelInchat(false))
        }
    }, [userChat, converstions])

     useEffect(()=>{
        setTimeout(()=>{
            dispatch(scrollPls())
        },500)
     },[InChat])      

    return ( 
        <div className='chat__content' >
            <Link to={`/${userChat?.receiver_pseudo.substring(1)   }`} className="chat__content__head hover">
                <div className="avatar64">
                    <img src={userChat?.receiver_pp ||  avatar} alt="" />
                </div>
                <div className="user__InFo">
                    <span className="name underline">{userChat?.receiver_name }</span>
                    <span className="username">{userChat?.receiver_pseudo  }</span>
                </div>
                <span className='user__bio'>{userChat?.receiver_bio  }</span>
                <span className='user__joined text-gray'>{userChat?.receiver_joined && 'Joined '+ joined.format("MMMM YYYY") } </span>
            </Link>
            <div className="chat">
                {
                    chatSort.map((item, index) => <MessageItem message={item} key={index} />)
                }

            </div>
        </div>
    )
}
