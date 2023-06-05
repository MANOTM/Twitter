import React from 'react'
import { CommentIcon, LikeIcon, RetweetIcon } from '../../../Icons/PostIcons'
import { ShareIcon } from '../../icons/postIcons'
import ShareCard from '../../Components/ShareCard/ShareCard'
import { useState } from 'react';
import axios from '../../../../api/axios';
import useFetch from '../../../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function FooterAction({ pseudo, setInterested, idTweet, comments, comment_count, retweeted, likes,like_count, retweet_count, like, showOption, ShareHover, hiddeOption }) {

    const [actionTimer,setActionTimer] = useState(false)
    // like logic
    const [addLike, setAddLike] = useState(like);
    const [likeCount, setLikeCount] = useState(likes !== undefined ? likes : like_count);
    const handleLikes = status => {
        const url = status ? '/disLikeTweet/' : '/likeTweet/';
        axios.post(url+idTweet).then(res => console.log(url))
        .catch(err => {
            setLikeCount(likeCount);
            if(!status){
                setAddLike(true)
            }else{
                setAddLike(false)
            }
        })
        if(status){
            setLikeCount(likeCount - 1);
            setAddLike(false)
        }else{
            setLikeCount(likeCount + 1);
            setAddLike(true)
        }
        setActionTimer(true);
        setTimeout(() => {
            setActionTimer(false);
        }, 999);
    }
    // retweet logic
    const [addRetweet, setAddRetweet] = useState(false);
    const [retweetCount, setRetweetCount] = useState(retweet_count || 0);
    const handleRetweet = status => {
        const url = status ? '/removeReTweet/' : '/reTweet/';
        axios.post(url+idTweet).then(res => console.log(url))
        .catch(err => {
            setRetweetCount(retweetCount);
            if(!status){
                setAddLike(true)
            }else{
                setAddLike(false)
            }
        })
        if(status){
            setRetweetCount(retweetCount - 1);
            setAddRetweet(false)
        }else{
            setRetweetCount(retweetCount + 1);
            setAddRetweet(true)
        }
        setActionTimer(true);
        setTimeout(() => {
            setActionTimer(false);
        }, 999);
    }
    return <div className="tweet__react__footer">
        <div className="tweet__actions__list">
            <Link to={`/${pseudo.substring(1)}/status/${idTweet}`} className="tweet__action" title='Reply'>
                <div className="action__icon iconStyle center">
                    <CommentIcon />
                </div>
                <span className="actions__counter">{comment_count || comments || 0}</span>
            </Link>
            <div onClick={()=>handleRetweet(addRetweet)} className={`tweet__action retweet ${addRetweet && 'hasRetweet'} ${actionTimer && 'block'}`} title='Retweet'>
                <div className="action__icon iconStyle center">
                    <RetweetIcon />
                </div>
                <span className="actions__counter">{retweetCount}</span>
            </div>
            <div onClick={()=>handleLikes(addLike)} className={`tweet__action liked ${addLike && 'hasLike'} ${actionTimer && 'block'}`} title='Like'>
                <div className="action__icon iconStyle center">
                    <LikeIcon liked={addLike} />
                </div>
                <span className="actions__counter">{ likeCount }</span>
            </div>
            <div className="tweet__action">
                <div onClick={()=>showOption(true)} className="action__icon shareAction iconStyle center">
                    <div title='Share'><ShareIcon /></div>
                    {ShareHover && 
                        <div>
                            <div onClick={hiddeOption} className="overlay__hidden"></div>
                            <ShareCard pseudo={pseudo} setInterested={()=>setInterested()} hiddeOption={hiddeOption} idTweet={idTweet} />
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
}