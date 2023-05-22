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
import moment from 'moment';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Tweet({
    tweet:
    {  
        idTweet,
        idUser,
        name,
        pseudo,
        pp,
        created_at,
        verifyUser,
        image,
        video,
        description,
        reply_count,
        like_count,
        retweet_count,
        liked,
        retweeted,
        orginaUserId
    }
}
) {
    const [interested, setInterested] = useState(false)
    const user = idUser === JSON.parse(localStorage.getItem('user_info'))?.pseudo
    const formattedDate = moment(created_at).format('MMMM Do YYYY, h:mm:ss a');
    const timeSpan = moment(created_at).fromNow();
    function formatTimeAgo(timeString) {
        if (timeString.includes('minutes ago')) {
            const minutesAgo = parseInt(timeString);
            if (!isNaN(minutesAgo)) {
                return `${minutesAgo}m`;
            }
        } else if (timeString.includes('an hour ago')) {
            return `1h`;
        } else if (timeString.includes('hours ago')) {
        const hoursAgo = parseInt(timeString);
        if (!isNaN(hoursAgo)) {
            return `${hoursAgo}h`;
        }
        }
        return timeString;
    }
    const { CardHover, setCardHover, CallToast, IsArabic } = useStateContext();  
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    const MouseIn = ()=>{
        setCardHover(true)
        setisIn(true)
    }
    const MouseOut = ()=>{ 
            setCardHover(false) 
            setisIn(false) 
    }
    const showOption = (A) => {
        if(!Auth) return CallToast('Once you join Twitter, you can open it😊',3500)
        if(A) return setShareHover(true)
        setOptionHover(true)
    }
    const hiddeOption = event => {
        console.log('1');
        if(event) event.stopPropagation();
        setOptionHover(false)
        setShareHover(false)
    }                                                                                                                                                                                                           
    const [OptionHover, setOptionHover] = useState(false)
    const [ShareHover, setShareHover] = useState(false)
    const [isIn, setisIn] = useState(false) 
    const [active, setActive] = useState(false)
    return (
        <div hidden={interested} className='Tweet' key={idTweet}>
        {isIn && CardHover ? <HoverCard pseudo={pseudo} isIn={isIn} setisIn={setisIn}/> :''}
        {orginaUserId && <div className="retweet__tweet">
            <div className="retweet__icon__tweet">
                <RetweetIcon />
            </div>
            <span className="retweet__message">This Tweet is retweeted</span>
        </div>}
        
            <div className="tweet__content">
                <Link to={'/'+pseudo.substring(1)} className="tweet__left__img">
                    <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="tweet__avatar__user">
                        <img loading='lazy' src={pp || avatar} />
                    </div>  
                </Link>
                <div className="tweet__right">
                    <div className="tweet__info__user">
                        <div className="tweet__user shrenk">
                            <Link to={'/'+pseudo.substring(1)} className='teet__profile__line' onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
                                <span className="tweet__username shrenk">{name}</span>
                                {
                                verifyUser && (<span className="tweet__icon__verify">
                                            <VerifyIcon />
                                            <DogIcon />
                                        </span>)
                                }
                                <span className="tweet__pseudo">{pseudo}</span>
                                <span className='tweet__dot'>.</span>
                            </Link>
                            <span className='tweet___date' title={formattedDate}>{formatTimeAgo(timeSpan)}</span>
                        </div>
                        <div onClick={()=>showOption(false)}  className="tweet__option__icon iconStyle center">
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__hidden"></div>
                                <OptionCard hiddeOption={hiddeOption} setInterested={()=>setInterested(true)} idTweet={idTweet} pseudo={pseudo} />
                            </> }
                            <div title='More'>
                                <ThreePoints />
                            </div>
                        </div>
                    </div>
                    {
                        description && <div className="tweet__content__body">
                            <p className={`tweet__paragraph ${IsArabic(description) && 'arabic'}`}>{description}</p>
                        </div>
                    }
                    <div className="tweet__content__media m-t">
                        {
                            image && <div className="tweet__image">
                                {/* <img loading='lazy' src={image} alt="tweet__image" /> */}
                                <LazyLoadImage
                                    effect='blur'
                                    src={image}
                                    alt="tweet_img"
                                />
                            </div>
                        }
                        {
                            video && <Video />
                        }
                    </div>
                    <div className="tweet__react__footer">
                        <div className="tweet__actions__list">
                            <div className="tweet__action" title='Reply'>
                                <div className="action__icon iconStyle center">
                                    <CommentIcon />
                                </div>
                                <span className="actions__counter">{reply_count || 0}</span>
                            </div>
                            <div className={`tweet__action retweet ${retweeted && 'hasRetweet'}`} title='Retweet'>
                                <div className="action__icon iconStyle center">
                                    <RetweetIcon />
                                </div>
                                <span className="actions__counter">{retweet_count || 0}</span>
                            </div>
                            <div className={`tweet__action liked ${liked && 'hasLike'}`} title='Like'>
                                <div className="action__icon iconStyle center">
                                    <LikeIcon liked={liked || false} />
                                </div>
                                <span className="actions__counter">{like_count || 0}</span>
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
