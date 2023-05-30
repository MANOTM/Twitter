import React, { useRef, useState } from 'react';
import './CreateTweet.css';
import avatar from '../../../assets/images/defaultProfile.png';
import CloseIcon from '../../Icons/CloseIcon';
import { useStateContext } from '../../../contexts/ContextProvider';
import axios from '../../../api/axios';
import HeaderCreate from './HeaderCreateTweet/HeaderCreate';
import CreateFooter from './CreateFooter/CreateFooter';
import Everyone from './EveryoneCreate/Everyone';

export default function CreateTweet() {

    const { show__createTweet, setshow__createTweet, CallToast } = useStateContext()
    const [tweet, setTweet] = useState(null)
    const description = useRef()
    const Media = useRef()
    const handleImage = e => {
        const file = e.target.files[0];
        if (file) {
          if (file.type.includes("video")) {
            setTweet((prev) => ({ ...prev, video: file, image: null }));
          } else {
            setTweet((prev) => ({ ...prev, image: file, video: null }));
          }
        }
    }
    // clear image when you close
    const clearMedia = () => {
        Media.current.value = null
        setTweet(prev => (
            { ...prev, image: null, video: null }
        ))
    }
    // close
    const clearCreateTweet = () => {
        setTweet(null)
        description.current.value = ''
        Media.current.value = null
        setshow__createTweet(true)
    }
    // post tweet
    const createTweet = () => {
        if (!tweet) return;
        setshow__createTweet(true);
        clearCreateTweet()
        let prefix = "/tweets/createTweet";
        if (tweet?.video) {
            prefix = "/tweets/createVideo";
        } else if (tweet?.image) {
            prefix = "/tweets/createImage";
        }        axios.post(prefix, tweet, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            CallToast('Your Tweet was sent.', 3500);
        })
        .catch(error => {
            CallToast('Something happened, please try later.', 3500);
        });
    }

    return <div className={`create ${show__createTweet && 'active'}`}>
        <div onClick={clearCreateTweet} className="overlay__showed"></div>
        <div className="create__tweet">
            <HeaderCreate clear={clearCreateTweet} />
            <div className="createTweet__content">
                <div className="createTweet__body">
                    <div className="createTweet__avatar">
                        <div className="avatar__createTweet">
                            <img src={avatar} alt="profile_avatar" />
                        </div>
                    </div>
                    <div className="createTweet__content__input">
                        <label htmlFor='post_tweet' className={`create__input__feild ${(tweet?.image || tweet?.video) && 'small-textarea'}`}>
                            <textarea value={tweet?.description} onChange={e => setTweet(prev => ({ ...prev, [e.target.name]: e.target.value }))} name='description' ref={description} placeholder='What is happening?!' id="post_tweet"></textarea>
                        </label>
                        {
                            tweet?.image && <div className="createTweet__media">
                                <img src={URL.createObjectURL(tweet?.image)} alt="Selected file" />
                                <div onClick={clearMedia} className="createTweet__cancel__image center">
                                    <CloseIcon />
                                </div>
                            </div>
                        }
                        {
                            tweet?.video && (
                                <div className="createTweet__media">
                                <video src={URL.createObjectURL(tweet?.video)} controls>
                                    Your browser does not support the video tag.
                                </video>
                                <div onClick={clearMedia} className="createTweet__cancel__image center">
                                    <CloseIcon />
                                </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Everyone />
                <CreateFooter 
                image={handleImage} 
                setTweet={emoji => 
                    setTweet(prev => (
                        { ...prev, description: `${prev?.description || ''}` + `${emoji}` }))} 
                tweet={tweet} 
                Media={Media} 
                click={createTweet} />
            </div>
        </div>
    </div>
}
