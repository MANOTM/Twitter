import React, { useState } from 'react'
import './Tweet.css'
import avatar from '../../../assets/images/defaultProfile.png'
import ThreePoints from '../../Icons/ThreePoints';
import { useStateContext } from '../../../contexts/ContextProvider'; 
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import Video from '../Components/Video/Video';
import HoverCard from '../../HoverCard/HoverCard';
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon, VerifyIcon } from '../../Icons/PostIcons';
import DogIcon from '../../../pages/Home/icons/DogIcon';
import ShareCard from '../Components/ShareCard/ShareCard';
import OptionCard from '../../OptionCard/OptionCard';

export default function Tweet(
    {
        user,
        created_at,
        verifyUser,
        tweet_image,
        tweet_video,
        postIsRetweeted,
        tweet_title,
        reply_count,
        likes_count,
        retweet_count,
        liked,
        retweeted
    }
) {
    const { CardHover, setCardHover, CallToast } = useStateContext();  
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    const MouseIn = ()=>{
        console.log(1);
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
    const [isIn, setisIn] = useState(false) 
    const [active, setActive] = useState(false)

    return (
        <div className='Tweet'>
        {isIn && CardHover ? <HoverCard user={user} isIn={isIn} setisIn={setisIn}/> :''}
            <div className="tweet__content">
                <div className="tweet__left__img">
                    <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="tweet__avatar__user">
                        <img src={avatar} />
                    </div>  
                </div>
                <div className="tweet__right">
                    <div className="tweet__info__user">
                        <div className="tweet__user shrenk">
                            <span className='teet__profile__line' onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
                                <span className="tweet__username shrenk">{user.name}</span>
                                {
                                verifyUser && (<span className="tweet__icon__verify">
                                            <VerifyIcon />
                                            <DogIcon />
                                        </span>)
                                }
                                <span className="tweet__pseudo">{user.pseudo}</span>
                                <span className='tweet__dot'>.</span>
                            </span>
                            <span className='tweet___date' title='6:01 AM . May 13, 2023'>{created_at}</span>
                        </div>
                        <div onClick={()=>showOption(false)}  className="tweet__option__icon iconStyle center" title='More'>
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__hidden"></div>
                                <OptionCard pseudo={user.pseudo} />
                            </> }
                            <ThreePoints />
                        </div>
                    </div>
                    {
                        tweet_title && <div className="tweet__content__body">
                            <p className='tweet__paragraph'>{tweet_title}</p>
                        </div>
                    }
                    <div className="tweet__content__media m-t">
                        {
                            tweet_image && <div className="tweet__image">
                                <img src={tweet_image || avatar} alt="tweet__image" />
                            </div>
                        }
                        {
                            tweet_video && <Video />
                        }
                    </div>
                    <div className="tweet__react__footer">
                        <div className="tweet__actions__list">
                            <div className="tweet__action" title='Reply'>
                                <div className="action__icon iconStyle center">
                                    <CommentIcon />
                                </div>
                                <span className="actions__counter">{reply_count}</span>
                            </div>
                            <div className={`tweet__action retweet ${retweeted && 'hasRetweet'}`} title='Retweet'>
                                <div className="action__icon iconStyle center">
                                    <RetweetIcon />
                                </div>
                                <span className="actions__counter">{retweet_count}</span>
                            </div>
                            <div className={`tweet__action liked ${liked && 'hasLike'}`} title='Like'>
                                <div className="action__icon iconStyle center">
                                    <LikeIcon liked={liked || false} />
                                    {/* <span className="like-icon">♥</span> */}
                                </div>
                                <span className="actions__counter">{likes_count}</span>
                            </div>
                            <div className="tweet__action">
                                <div onClick={()=>showOption(true)} className="action__icon shareAction iconStyle center">
                                    <div title='Share'><ShareIcon /></div>
                                    {ShareHover && 
                                        <div>
                                            <div onClick={hiddeOption} className="overlay__hidden"></div>
                                            <ShareCard hiddeOption={hiddeOption} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
