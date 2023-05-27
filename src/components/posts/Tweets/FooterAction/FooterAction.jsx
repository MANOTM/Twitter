import React from 'react'
import { CommentIcon, LikeIcon, RetweetIcon } from '../../../Icons/PostIcons'
import { ShareIcon } from '../../icons/postIcons'
import ShareCard from '../../Components/ShareCard/ShareCard'
import { useState } from 'react';
import axios from '../../../../api/axios';
import useFetch from '../../../../hooks/useFetch';

export default function FooterAction({ idTweet, reply_count, retweeted, like_count, retweet_count, like, showOption, ShareHover, hiddeOption }) {
    const [actions, setActions] = useState();
    const renderTweet = async() => {
        const { data } = await axios.get('/');
        if(data) {
            setAddToCount(0);
            const tweet = data.data.find(one => one.idTweet === idTweet);
            setActions(tweet);
        }
    }
    // like logic
    const [addLike, setAddLike] = useState(actions?.like || like);
    const [add_to_count, setAddToCount] = useState(0)
    const [actionTimer, setActionTimer] = useState(false)
    const handleLikes = status => {
        if(status){
            setAddToCount(-1)
            setAddLike(false)
        }else{
            setAddToCount(+1);
            setAddLike(true)
        }
        const url = status ? '/disLikeTweet/' : '/likeTweet/';
        axios
        .post(url+idTweet)
        .then(res=>{
            renderTweet(status)
            console.log(url);
        })
        .catch(err=>{
            console.log('error');
            setAddLike(!addLike)
        });
        setActionTimer(true);
        setTimeout(() => {
            setActionTimer(false);
        }, 2222);
    }
    return <div className="tweet__react__footer">
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
            <div onClick={()=>handleLikes(addLike)} className={`tweet__action liked ${addLike && 'hasLike'} ${actionTimer && 'block'}`} title='Like'>
                <div className="action__icon iconStyle center">
                    <LikeIcon liked={addLike} />
                </div>
                <span className="actions__counter">{ ((actions?.like_count || like_count) + add_to_count) || 0 }</span>
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
}
