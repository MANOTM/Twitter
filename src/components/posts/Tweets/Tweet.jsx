import React, { useState } from 'react'
import './Tweet.css'
import avatar from '../../../assets/images/defaultProfile.png'
import ThreePoints from '../../Icons/ThreePoints';
import { useStateContext } from '../../../contexts/ContextProvider'; 
import { useSelector } from 'react-redux'; 
import Video from '../Components/Video/Video';
import HoverCard from '../../HoverCard/HoverCard';
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon, VerifyIcon } from '../../Icons/PostIcons';
import DogIcon from '../../../pages/Home/icons/DogIcon';
import ShareCard from '../Components/ShareCard/ShareCard';
import OptionCard from '../../OptionCard/OptionCard';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useLike from '../../../hooks/useLike'; 
import { HashtagLink } from '../../../assets/Helper/HashtagLink';
import FooterAction from './FooterAction/FooterAction';
import 'react-lazy-load-image-component/src/effects/blur.css'

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
        like,
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
        } else if (timeString.includes('a day ago')) {
            return 'Yesterday'
        } else if (timeString.includes('days')) {
            const daysAgo = parseInt(timeString);
            if (!isNaN(daysAgo)) {
                if (daysAgo === 1) {
                    return 'Yesterday';
                } else if (daysAgo >= 2) {
                    const date = new Date();
                    date.setDate(date.getDate() - daysAgo);
                    const month = date.toLocaleString('default', { month: 'short' });
                    const day = date.getDate();
                    return `${month} ${day}`;
                }
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
                <div className="tweet__left__img">
                    <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="tweet__avatar__user">
                        <Link to={'/'+pseudo.substring(1)}>
                            <img loading='lazy' src={pp || avatar} />
                        </Link>
                    </div>  
                </div>
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
                                <span className='tweet__dot point'>.</span>
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
                            <p className={`tweet__paragraph  ${IsArabic(description) && 'arabic'}`}><HashtagLink text={description}/></p>
                        </div>
                    }
                    <div className="tweet__content__media m-t">
                        {
                            image && <div className="tweet__image">
                                {/* <img loading='lazy' src={image} alt="tweet__image" /> */}
                                <LazyLoadImage
                                    effect="blur"
                                    src={image}
                                    alt="tweet_img"
                                />
                            </div>
                        }
                        {
                            video && <Video video={video} />
                        }
                    </div>
                    <FooterAction
                        idTweet={idTweet}
                        like={like}
                        reply_count={reply_count}
                        retweeted={retweeted}
                        like_count={like_count}
                        hiddeOption={hiddeOption}
                        retweet_count={retweet_count}
                        ShareHover={ShareHover}
                        showOption={showOption}
                    />
                </div>
            </div>
        </div>
    )
}
