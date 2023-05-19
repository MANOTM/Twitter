import React, { useRef, useState } from "react";
import "./HeadTweet.css";
import * as icons from '../../IconsImport'; 
import HeaderHome from "../HeaderHome/HeaderHome";
import avatar from '../../../../assets/images/defaultProfile.png';
import CreateFooter from "../../../../components/Modals/CreateTweet/CreateFooter/CreateFooter";
import Everyone from "../../../../components/Modals/CreateTweet/EveryoneCreate/Everyone";
import CloseIcon from "../../../../components/Icons/CloseIcon";
import axios from "../../../../api/axios";
import { useStateContext } from "../../../../contexts/ContextProvider";

export default function HeadTweet() {
    const { CallToast, IsArabic } = useStateContext()
    const [everyone, setEverone] = useState(true);
    const [tweet, setTweet] = useState();
    const Media = useRef();
    const input = useRef();
    // set image
    const handleImage = e => {
        setEverone(false)
        setTweet(prev => (
            { ...prev, image: e.target.files[0] }
        ));
    }
    // clear image 
    const clearMedia = () => {
        Media.current.value = null
        setTweet(prev => (
            { ...prev, image: null }
        ));
    }
    // post tweet
    const click = () => {
        Media.current.value = null
        setEverone(true)
        setTweet(null)

        const prefix = tweet?.image ? '/tweets/createImage' : '/tweets/createTweet';
        axios.post(prefix, tweet, {
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
    return (
        <header className="header__section">
            <HeaderHome />
            <div className="create__home">
                <div className="create__Avatar">
                    <div className="tweet__avatar__user">
                        <img src={avatar} />
                    </div>
                </div>
                <div className="create__right">
                    <div className="create__input">
                        <input className={IsArabic(tweet?.description) ? 'arabic' : ''} value={tweet?.description || ''} onChange={e => setTweet(prev => ({ ...prev, [e.target.name]: e.target.value }))} onFocus={()=>setEverone(false)} type="text" placeholder="What is happening?!" name="description" />
                    </div>
                    {
                        tweet?.image && (<div className="createTweet__media">
                            <img src={URL.createObjectURL(tweet?.image)} alt="Selected file" />
                            <div onClick={clearMedia} className="createTweet__cancel__image center">
                                <CloseIcon />
                            </div>
                        </div>
                        )
                    }
                    <div hidden={everyone}>
                        <Everyone />
                    </div>
                    <CreateFooter
                        setTweet={emoji => 
                            setTweet(prev => (
                                { ...prev, description: `${prev?.description || ''}` + `${emoji}` }))} 
                        image={handleImage}
                        tweet={tweet} 
                        Media={Media} 
                        click={click}
                    />
                </div>
            </div>






































            {/* <div className="header__input">
                <div className="header__fields">
                    <div className="header__avatar avatar">
                        <img
                        src="https://cdn.discordapp.com/avatars/787349101414187059/79e57a3f1d0fa6dbca1607cc95930f34.webp?size=32"
                        alt="profile_avatar"
                        />
                    </div>
                    <input type="text" onChange={handleTweetbtn} placeholder="What's Happening ?" />
                </div>
                <div className="header__buttons">
                    <ul>
                        <input hidden type="file"  ref={GalleryBtn}/>
                        <li onClick={()=>GalleryBtn.current.click()}> <icons.Gallery /> </li>
                        <li> <icons.Gif /> </li>
                        <li> <icons.Emojis /> </li>
                        <li> <icons.Map /> </li>
                    </ul>
                    <button className={tweetbtn ? 'active__click__btn' : ''}>Tweeter</button>
                </div>
            </div> */}
        </header>
    );
}
