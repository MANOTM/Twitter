import React, { useEffect, useRef, useState } from 'react';
import './CreateTweet.css';
import CloseIcon from '../../Icons/CloseIcon';
import avatar from '../../../assets/images/defaultProfile.png';
import { useStateContext } from '../../../contexts/ContextProvider';
import Gallery from '../../Icons/Gallery';
import Gif from '../../../pages/Home/icons/Gif';
import Emojis from '../../../pages/Home/icons/Emojis';
import Map from '../../../pages/Home/icons/Map';
import axios from '../../../api/axios';
import { set } from 'lodash';
import WorldIcon from '../../Icons/WorldIcon';

export default function CreateTweet() {

    const { show__createTweet, setshow__createTweet, CallToast } = useStateContext()
    const [tweet, setTweet] = useState(null)
    const [selectedMedia,setSelectedMedia] = useState(null)
    const description = useRef()
    const Media = useRef()
    const handleImage = e => {
        setSelectedMedia(e.target.files[0]);
        setTweet(prev => (
            {...prev, image:e.target.files[0]}
        ))
    }
    const clearMedia = () => 
    {
        Media.current.value = null
        setSelectedMedia(null);
        setTweet(prev => (
            {...prev, image:null}
        ))
    }
    const clearCreateTweet = () => {
        console.log('clear');
        setTweet(null)
        Media.current.value = null
        setshow__createTweet(true)
    }
    const hanldeCreateTweet = async() => {
        if(!tweet) return
        setshow__createTweet(true)
        let prifex = '/tweets/createTweet';
        try{
            if(tweet?.image) prifex = '/tweets/createImage';
            console.log(tweet);
            const { data } = await axios.post(prifex,tweet)
            if(data){
                CallToast('Your Tweet was sent.',3500)
            }
        }catch(err){
            CallToast('someThing Happend, please try later.',3500)
        }
        clearMedia()
    }

    return <div className={`create ${show__createTweet && 'active'}`}>
        <div onClick={clearCreateTweet} className="overlay__showed"></div>
        <div className="create__tweet">
            <div className="createTweet__header">
                <span className="createTweet__closeIcon center">
                    <div onClick={clearCreateTweet} className="iconClose__create center">
                        <CloseIcon />
                    </div>
                </span>
                <span></span>
            </div>
            <div className="createTweet__content">
                <div className="createTweet__body">
                    <div className="createTweet__avatar">
                        <div className="avatar__createTweet">
                            <img src={avatar} alt="profile_avatar" />
                        </div>
                    </div>
                    <div className="createTweet__content__input">
                        <label htmlFor='post_tweet' className={`create__input__feild ${selectedMedia && 'small-textarea'}`}>
                            <textarea value={tweet?.description} onChange={e=>setTweet(prev=>({...prev, [e.target.name]:e.target.value}))} name='description' ref={description} placeholder='What is happening?!' id="post_tweet"></textarea>
                        </label>
                        {
                            selectedMedia && <div className="createTweet__media">
                                <img src={URL.createObjectURL(selectedMedia)} alt="Selected file" />
                                <div onClick={clearMedia} className="createTweet__cancel__image center">
                                    <CloseIcon />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="create__Everyone a-link">
                    <div className="everyone__icon center">
                        <WorldIcon />
                    </div>
                    <span>Everyone can reply</span>
                </div>
                <span className="create__line__between"></span>
                <div className="createTweet__footer">
                    <div className="createTweet__actions">
                        <div className="createTweet__buttons__withImoji">
                            <input onChange={handleImage} type="file" accept=".jpg,.jpeg,.png,.mp4,.webm" ref={Media} hidden />
                            <span onClick={()=> Media.current.click()} className='center' title='Media'><Gallery /></span>
                            <span className='center' title='Emoji'><Gif /></span>
                            <span className='center'><Emojis /></span>
                            <span className='center'><Map /></span>
                        </div>
                        <div onClick={hanldeCreateTweet} className={`createTweet__Tweet__button ${!tweet?.description?.length && 'disabled'}`}>
                            <button>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
