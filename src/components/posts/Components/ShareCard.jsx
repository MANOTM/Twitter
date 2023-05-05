import React from 'react'
import './ShareCard.css';
import { CopyIcon, MessageIcon, ShareIcon } from '../icons/postIcons'
import { useStateContext } from '../../../contexts/ContextProvider';

export default function ShareCard({ hiddeOption }) {
    
    const { CallToast } = useStateContext()
    const handleCopie = async () => {
        await navigator.clipboard.writeText(window.location.href);
        CallToast('Copied to clipboard');
        hiddeOption(event)
    }
    const handleShare = () => {
        navigator.share({
            title: 'Tweet',
            text: 'Check out this Tweet !!!',
            url: window.location.href,
        })
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
                <div>
                    <div className="share__List__icon">
                        <MessageIcon />
                    </div>
                    <div className="share__title">
                        Send via Direct Message
                    </div>
                </div>
                <div>
                    <div className="share__List__icon">
                        <ShareIcon />
                    </div>
                    <div className="share__title">
                        Bookmark
                    </div>
                </div>
            </div>
        </div>
    )
}
