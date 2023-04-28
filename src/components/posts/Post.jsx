import React, { useState } from 'react'
import './Post.css';
import { VerifyIcon, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from '../Icons/PostIcons';
import ThreePoints from '../Icons/ThreePoints';
import { useStateContext } from '../../contexts/ContextProvider';
import HoverCard from '../HoverCard/HoverCard';

export default function Post({
    profile_avatar, usename, tagname, verify, title, tweet, retweeted, liked,
}) {

    const { CardHover, setCardHover } = useStateContext();  
    const [isIn, setisIn] = useState(false) 
    const MouseIn = ()=>{
        setCardHover(true)
        setisIn(true)
    }
    const MouseOut = ()=>{ 
            setCardHover(false) 
            setisIn(false) 
    }
    return (
        <div className="father">
            {isIn && CardHover ? <HoverCard isIn={isIn} setisIn={setisIn}/> :''}
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
                            <ThreePoints />
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
                            </span> {'  '} 155
                        </li>
                        <li className='Reweet__icon retweet'>
                            <span>
                                <RetweetIcon />
                            </span> {'  '} 15
                        </li>
                        <li className='Like__icon liked'>
                            <span>
                                <LikeIcon />
                            </span> {'  '} 15
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
