import React from 'react'
import './ShareCard.css';
import { useStateContext } from '../../../../contexts/ContextProvider';
import { BookMarkIcon, CopyIcon, MessageIcon, RemoveFromBookmarkIcon, ShareIcon } from '../../icons/postIcons';
import { useState } from 'react';
import useSave from '../../../../hooks/useSave';
import { useLocation } from 'react-router-dom';

export default function ShareCard({ setInterested, hiddeOption, idTweet }) {
    
    const location = useLocation()
    const [bookmark, setBookmark] = useState(location.pathname.includes('bookmarks') || JSON.parse(localStorage.getItem('id_Save')) && JSON.parse(localStorage.getItem('id_Save')).includes(idTweet))
    const { CallToast, setShowingCard } = useStateContext()
    const handleCopie = async () => {
        await navigator.clipboard.writeText(window.location.href + 'tweet/' + idTweet);
        CallToast('Copied to clipboard');
        hiddeOption(event)
    }
    const handleShare = () => {
        navigator.share({
            title: 'Tweet',
            text: 'Check out this Tweet !!!',
            url: window.location.href + 'tweet/' + idTweet,
        })
        hiddeOption(event)
    }

    const handleBookmark = () => {
        useSave(bookmark,idTweet);
        setBookmark(!bookmark)
        hiddeOption(event)
        if(location.pathname.includes('bookmarks')) setInterested()
        if(bookmark){
            CallToast('Tweet removed from your Bookmarks',2500)
        }else{
            CallToast('Tweet added to your Bookmarks',2500)
        }
    }

    return (
        <div className="Share__card popup">
            <div className='share__list'>
                <div onClick={handleCopie}>
                    <div className="share__List__icon">
                        <CopyIcon />
                    </div>
                    <div className="share__title">
                        Copy link to Tweet
                    </div>
                </div>
                <div onClick={handleShare}>
                    <div className="share__List__icon">
                        <ShareIcon />
                    </div>
                    <div className="share__title">
                        Share tweet via...
                    </div>
                </div>
                <div onClick={()=>setShowingCard(true)}>
                    <div className="share__List__icon">
                        <MessageIcon />
                    </div>
                    <div className="share__title">
                        Send via Direct Message
                    </div>
                </div>
                <div onClick={handleBookmark}>
                    {
                        bookmark ? 
                        <>
                            <div className="share__List__icon">
                                <RemoveFromBookmarkIcon />
                            </div>
                            <div className="share__title">
                                Remove Tweet from Bookmarks
                            </div>
                        </> :
                        <>
                            <div className="share__List__icon">
                                <BookMarkIcon />
                            </div>
                            <div className="share__title">
                                Bookmark
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
