import React, { useState } from 'react'
import './Post.css';
import { VerifyIcon, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from '../Icons/PostIcons';
import ThreePoints from '../Icons/ThreePoints';
import { useStateContext } from '../../contexts/ContextProvider';
import HoverCard from '../HoverCard/HoverCard';
import OptionCard from '../OptionCard/OptionCard';
import { useSelector } from 'react-redux';
import ShareCard from './Components/ShareCard';



export default function Post({
    profile_avatar, usename, tagname, verify, title, tweet, retweeted, liked,numberLikes,numberComments,image,video
}) {  
    const { CardHover, setCardHover, CallToast } = useStateContext();  
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    const [isIn, setisIn] = useState(false) 
    const [active, setActive] = useState(false) 
    const MouseIn = ()=>{
        setCardHover(true)
        setisIn(true)
    }
    const MouseOut = ()=>{ 
            setCardHover(false) 
            setisIn(false) 
    }
    const showOption = (A) => {
        if(!Auth) return CallToast('Once you join Twitter, you can open it',3500)
        if(A) return setShareHover(true)
        setOptionHover(true)
    }
    const hiddeOption = event => {
        if(event) event.stopPropagation();
        setOptionHover(false)
        setShareHover(false)
    } 
    const [OptionHover, setOptionHover] = useState(false)
    const [ShareHover, setShareHover] = useState(false)
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
                        <div onClick={()=>showOption(false)} className="post__option">
                            <div ><ThreePoints /></div>
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__hidden"></div>
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
                            </span> {'  '} {numberComments || 85}
                        </li>
                        <li className={`Reweet__icon ${retweeted && 'reetweet'}`}>
                            <span>
                                <RetweetIcon />
                            </span> {'  '} 15
                        </li>
                        <li className={`Like__icon ${liked && 'linkedOne'}`}>
                            <span>
                                <LikeIcon liked={liked} />
                            </span> {'  '} {numberLikes || 756}
                        </li>
                        <li>
                            <span onClick={()=>showOption(true)}>
                                {ShareHover && 
                                    <div>
                                        <div onClick={hiddeOption} className="overlay__hidden"></div>
                                        <ShareCard hiddeOption={hiddeOption} />
                                    </div>
                                }
                                <ShareIcon />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div >
    )
}
