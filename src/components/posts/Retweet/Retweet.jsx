import React, { useState } from 'react'
import './Retweet.css'
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
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useLike from '../../../hooks/useLike'; 
import { HashtagLink } from '../../../assets/Helper/HashtagLink';
import FooterAction from '../Tweets/FooterAction/FooterAction'
import 'react-lazy-load-image-component/src/effects/blur.css'
import formatTimeAgo from '../../../assets/Helper/FormatDate';

export default function Retweet({tweet,Tweet4Comment,
    tweet:
    {  
        id,
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
        comment_count,
        like_count,
        likes,
        retweet_count,
        like,
        retweeted,
        orginaUserId,
        originalUserId,
        originalUserName,
        originalUserPseudo,
        comments,
        type,
    }
}
) {    
    const typeTweet = type === 'tweet'
    const [interested, setInterested] = useState(false)
    // const user = pseudo === JSON.parse(localStorage.getItem('user_info'))?.pseudo
    const formattedDate = moment(created_at).format('MMMM Do YYYY, h:mm:ss a');
    const timeSpan = moment(created_at).fromNow();
    const { CardHover, setCardHover, CallToast, IsArabic } = useStateContext();  
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    const myPseudo = JSON.parse(localStorage.getItem('user_info'))?.pseudo || false
    const userIsMe = (myPseudo || false) === pseudo
    const [OptionHover, setOptionHover] = useState(false)
    const [ShareHover, setShareHover] = useState(false)
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isIn, setisIn] = useState(false) 
    const navigate = useNavigate() 
    const MouseIn = ()=>{
        if(!Auth || userIsMe) return
        clearTimeout(hoverTimeout);
        const timeoutId = setTimeout(() => {
            setCardHover(true)
            setisIn(true)
        }, 800);
        setHoverTimeout(timeoutId);
    }
    const MouseOut = () => {
        if(!Auth || userIsMe) return
        if(hoverTimeout) return clearTimeout(hoverTimeout)
        setHoverTimeout(
            setTimeout(() => {
                setCardHover(false);
                setisIn(false);
            }, 300)
        );
    };
    const showOption = (A) => {
        if(!Auth) return CallToast('Once you join Wazoo, you can open it😊',3500)
        if(A) return setShareHover(true)
        setOptionHover(true)
    }
    const hiddeOption = event => {
        if(event) event.stopPropagation();
        setOptionHover(false)
        setShareHover(false)
    }
    return (
        <div  hidden={interested} className='Tweet' key={idTweet}>
            {isIn && CardHover ? <HoverCard IfollowHim={tweet?.following} setHoverTimeout={setHoverTimeout} hoverTimeout={hoverTimeout} pseudo={originalUserPseudo} isIn={isIn} setisIn={setisIn}/> :''}
            {originalUserId && <Link to={'/'+originalUserPseudo.substring(1)} className="retweet__tweet">
                <div className="retweet__icon__tweet">
                    <RetweetIcon />
                </div>
                <span className="retweet__message">
                    {
                        `${pseudo} Retweeted`
                    }
                </span>
            </Link>}
        
            <div className="tweet__content">
                <div className="tweet__left__img">
                    <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="tweet__avatar__user">
                        <Link to={'/'+pseudo.substring(1)} >
                            <img loading='lazy' src={pp || avatar} />
                        </Link>
                    </div>  
                </div>
                <div className="tweet__right">
                    <div className="tweet__info__user">
                        <div className="tweet__user shrenk">
                            <Link to={'/'+pseudo.substring(1)} className='teet__profile__line' onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
                                <span className="tweet__username shrenk">{originalUserName}</span>
                                {
                                verifyUser && (<span className="tweet__icon__verify">
                                            <VerifyIcon />
                                            <DogIcon />
                                        </span>)
                                }
                                <span className="tweet__pseudo">{originalUserPseudo}</span>
                                <span className='tweet__dot point'>.</span>
                            </Link>
                            <span className='tweet___date' title={formattedDate}> {timeSpan !=='Invalid date'?  formatTimeAgo(timeSpan):created_at}</span>
                        </div>
                        <div onClick={()=>JSON.parse(localStorage.getItem('id_follows')) && showOption(false)}  className="tweet__option__icon iconStyle center">
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__hidden"></div>
                                <OptionCard 
                                OptionHover={OptionHover}
                                hiddeOptionClick={()=>hiddeOption}
                                setInterested={()=>setInterested(true)} 
                                idTweet={idTweet || id}  idUser={originalUserId}
                                pseudo={originalUserPseudo} />
                            </> }
                            <div title='More'>
                                <ThreePoints />
                            </div>
                        </div>
                    </div>
                    {
                        description && Tweet4Comment ? <div className='tweet__content__body'>
                            <p onClick={e => e.stopPropagation()} className={`tweet__paragraph  ${IsArabic(description) && 'arabic'}`}><HashtagLink text={description}/></p>
                        </div> : <Link onClick={e => e.preventDefault()} to={`${pseudo.substring(1)}/status/${idTweet}`} className="tweet__content__body">
                            <p onClick={e => e.stopPropagation()} className={`tweet__paragraph  ${IsArabic(description) && 'arabic'}`}><HashtagLink text={description}/></p>
                        </Link>
                    }
                    {
                        Tweet4Comment ? <div className='tweet__content__media m-t'>
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
                        :
                    <Link to={`${pseudo.substring(1)}/status/${idTweet}`} className="tweet__content__media m-t">
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
                    </Link>
                    }
                    <FooterAction
                        pseudo={pseudo}
                        idTweet={idTweet || id}
                        like={like}
                        comment_count={comment_count}
                        retweeted={retweeted}
                        like_count={like_count}
                        likes={likes}
                        comments={comments}
                        hiddeOption={hiddeOption}
                        retweet_count={retweet_count}
                        ShareHover={ShareHover}
                        showOption={showOption}
                        setInterested={()=>setInterested(true)} 
                    />
                </div>
            </div>
        </div>
    )
}
