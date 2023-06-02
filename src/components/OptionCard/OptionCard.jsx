import React from 'react'
import './OptionCard.css'
import { Report, Block, Mute, List, Unfollow, SadImojis, DeleteIcon, EditTweetIcon } from './OptionIcons/OptionIcons'
import axios from '../../api/axios'
import { useStateContext } from '../../contexts/ContextProvider'
import { useDispatch } from 'react-redux'
import { removeTweet } from '../../redux/Reducers/HomeReducer'

export default function OptionCard({ pseudo, setInterested, idTweet, hiddeOption }) {

    const user_pseudo = JSON.parse(localStorage.getItem('user_info'))?.pseudo === pseudo;
    const { CallToast } = useStateContext();
    const dispatch = useDispatch()

    const DeleteTweet = () => {
        setInterested(true)
        hiddeOption(event)
        dispatch(removeTweet(idTweet))
        axios
        .delete('/tweets/deleteTweet/'+idTweet)
        .then(res => {
            CallToast('tweet Delete successfully😊');
        })
        .catch(err => {
            CallToast('something happend, please try later✌');
        })
    }

    const Sorry = () => {
        ()=>hiddeOption(event)
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
                        <li>
                            <div className="option__icon">
                                <EditTweetIcon />
                            </div>
                            <span className="option__title">Edit tweet</span>
                        </li>
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
                        <li onClick={Sorry}>
                            <div className="option__icon">
                                <Unfollow />
                            </div>
                            <span className="option__title">Unfollow {pseudo}</span>
                        </li>
                        <li onClick={Sorry}>
                            <div className="option__icon">
                                <Mute />
                            </div>
                            <span className="option__title">Mute {pseudo}</span>
                        </li>
                        <li onClick={Sorry}>
                            <div className="option__icon">
                                <Block />
                            </div>
                            <span className="option__title">Block {pseudo}</span>
                        </li>
                    </>)
                }
                <li onClick={Sorry}>
                    <div className="option__icon">
                        <List />
                    </div>
                    <span className="option__title">Add/remove {pseudo} from lists</span>
                </li>
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
