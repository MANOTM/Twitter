import React, { useState } from 'react'
import './OptionCard.css'
import { Report, Block, Mute, List, Unfollow, SadImojis, DeleteIcon, EditTweetIcon, FollowIcon } from './OptionIcons/OptionIcons'
import axios from '../../api/axios'
import { useStateContext } from '../../contexts/ContextProvider'
import { useDispatch } from 'react-redux'
import { removeTweet } from '../../redux/Reducers/HomeReducer'
import useFollow from '../../hooks/useFollow'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OptionCard({ pseudo, idUser, setInterested, idTweet, hiddeOptionClick, commentOption, idComment }) {

    const user_pseudo = JSON.parse(localStorage.getItem('user_info'))?.pseudo === pseudo;
    const [follow, setFollow] = useState(user_pseudo ? false : JSON.parse(localStorage.getItem('id_follows')).includes(idUser))
    const { CallToast, showErrorFunction } = useStateContext();
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const DeleteTweet = () => {
        if(!commentOption){
            setInterested(true)
            dispatch(removeTweet(idTweet))
            axios
            .delete('/tweets/deleteTweet/'+idTweet)
            .then(res => {
                if(location.pathname.includes('/status/')) navigate('/')
                CallToast('tweet Delete successfully😊');
            })
            .catch(err => {
                // CallToast('something happend, please try later✌');
                showErrorFunction()
                setInterested(false)
            })
        }else{
            setInterested(true)
            axios
            .delete('/comments/delete/'+idComment)
            .then(res => {
                CallToast('Comment Delete successfully😊');
            })
            .catch(err => {
                // CallToast('something happend, please try later✌');
                showErrorFunction()
                setInterested(false)
            })
        }
    }

    const handleFollow = () => {
        useFollow(follow, idUser)
        setFollow(!follow)
        // hiddeOptionClick()
    }

    const Sorry = () => {
        CallToast("We don't have the option yet😢",1300);
    }

    return (
        <div className="option__card popup">
            <ul>
                {
                    user_pseudo && (<>
                        <li onClick={DeleteTweet}>
                            <div className="option__icon delete">
                                <DeleteIcon />
                            </div>
                            <span className="option__title delete">Delete</span>
                        </li>
                        {/* <li onClick={Sorry}>
                            <div className="option__icon">
                                <EditTweetIcon />
                            </div>
                            <span className="option__title">Edit tweet</span>
                        </li> */}
                    </>)
                }
                <li onClick={()=>setInterested()}>
                    <div className="option__icon">
                        <SadImojis />
                    </div>
                    <span className="option__title">Not interested in this Tweet</span>
                </li>
                {
                    !user_pseudo && (<>
                        <li onClick={handleFollow}>
                            {
                                follow ? 
                            <>
                                <div className="option__icon">
                                    <Unfollow />
                                </div>
                                <span className="option__title">Unfollow {pseudo}</span>
                            </> :
                            <>
                                <div className="option__icon">
                                    <FollowIcon />
                                </div>
                                <span className="option__title">Follow {pseudo}</span>
                            </>
                            }
                        </li>
                        {/* <li onClick={()=>setInterested()}>
                            <div className="option__icon">
                                <Mute />
                            </div>
                            <span className="option__title">Mute {pseudo}</span>
                        </li> */}
                        <li onClick={Sorry}>
                            <div className="option__icon">
                                <Block />
                            </div>
                            <span className="option__title">Block {pseudo}</span>
                        </li>
                    </>)
                }
                {/* <li onClick={Sorry}>
                    <div className="option__icon">
                        <List />
                    </div>
                    <span className="option__title">Add/remove {pseudo} from lists</span>
                </li> */}
                <li onClick={Sorry}>
                    <div className="option__icon">
                        <Report />
                    </div>
                    <span className="option__title">Report Tweet</span>
                </li>
            </ul>
        </div>
    )
}
