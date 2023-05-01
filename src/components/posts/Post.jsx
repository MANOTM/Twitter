import React, { useState } from 'react'
import './Post.css';
import { VerifyIcon, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from '../Icons/PostIcons';
import ThreePoints from '../Icons/ThreePoints';
import { useStateContext } from '../../contexts/ContextProvider';
import HoverCard from '../HoverCard/HoverCard';
import OptionCard from '../OptionCard/OptionCard';

export default function Post({
    profile_avatar, usename, tagname, verify, title, tweet, retweeted, liked,numberLikes,numberComments,image,video
}) {

    const { CardHover, setCardHover } = useStateContext(); 
    const MouseIn = ()=>{
        setCardHover(true)
        setisIn(true)
    }
    const MouseOut = ()=>{
        setCardHover(false) 
        setisIn(false)
    }
    const showOption = () => {
        setOptionHover(true)
    }
    const hiddeOption = () => {
        setOptionHover(false)
    }
    const [isIn, setisIn] = useState(false)
    const [OptionHover, setOptionHover] = useState(false)
    return (
        <div className="father">
            {isIn   && <HoverCard />}
            <section className="post__section">
                <div className="post__avatar avatar" onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
                    <img src="https://cdn.discordapp.com/avatars/787349101414187059/79e57a3f1d0fa6dbca1607cc95930f34.webp?size=32" alt="profile_avatar" />
                </div>

                <div className="post__body">
                    <div className="post__headerText">
                        <h3> <a href="#"> {usename} </a> {' '}
                            <small>
                                {verify && <span className="valid "><VerifyIcon /></span>}{' '}
                                {tagname}
                            </small>
                        </h3>
                        <div className="post__option">
                            <div onClick={showOption}><ThreePoints /></div>
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__option"></div>
                                <OptionCard />
                            </> }
                        </div>
                    </div>
                    <div className="post__description">
                        {title && <p> {title} </p>}
                    </div>
                    {tweet && <img className='tweet__post' src={tweet} alt="tweet__post" />}
                    <ul className="post__footer">
                        <li>
                            <span>
                                <CommentIcon />
                            </span> {'  '} {numberComments}
                        </li>
                        <li className={`Reweet__icon ${retweeted && 'reetweet'}`}>
                            <span>
                                <RetweetIcon />
                            </span> {'  '} 15
                        </li>
                        <li className={`Like__icon ${liked && 'linkedOne'}`}>
                            <span>
                                <LikeIcon liked={liked} />
                            </span> {'  '} {numberLikes}
                        </li>
                        <li>
                            <span>
                                <ShareIcon />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div >
    )
}
