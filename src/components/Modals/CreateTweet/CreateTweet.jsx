import React from 'react';
import './CreateTweet.css';
import CloseIcon from '../../Icons/CloseIcon';
import avatar from '../../../assets/images/defaultProfile.png';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function CreateTweet() {

    const { show__createTweet, setshow__createTweet } = useStateContext()

    return <div className={`create ${show__createTweet && 'active'}`}>
        <div onClick={()=>setshow__createTweet(false)} className="overlay__showed"></div>
        <div className="create__tweet">
            <div className="createTweet__header">
                <div className="createTweet__closeIcon">
                    <CloseIcon />
                </div>
                <span></span>
                <span></span>
            </div>
            <div className="createTweet__body">
                <div className="createTweet__avatar">
                    <div className="avatar__createTweet">
                        {/* <img src={avatar} alt="profile_avatar" /> */}
                    </div>
                </div>
                <div className="createTweet__content">
                    <div className="create__input__feild">
                        {/* <textarea cols="30" rows="10" placeholder='What is happening?!'></textarea> */}
                    </div>
                </div>
            </div>
            <span className="create__line__between"></span>
            <div className="createTweet__footer">
                footer
            </div>
        </div>
    </div>
}
