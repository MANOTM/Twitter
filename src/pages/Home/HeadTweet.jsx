import React, { useState } from "react";
import "./HeadTweet.css";
import * as icons from './IconsImport'; 

export default function HeadTweet() {
    const [active, setActive] = useState(true);
    const [tweetbtn, setTweetbtn] = useState(false);
    const handleChange = () => setActive(!active); 
    const handleTweetbtn = e => {
        if(e.target.value.trim() == ''){
            return setTweetbtn(false)
        }
        setTweetbtn(true)
    }
    return (
        <header className="header__section">
            <div className="head_name_page">
                <div className="header__title">
                    <h3>Accueil</h3>
                </div>
                <div className="header__links">
                    <div onClick={handleChange} className={active ? "active" : ''}>
                    <a href="#">Pour vous</a>
                    </div>
                    <div onClick={handleChange} className={!active ? "active" : ''}>
                    <a href="#">Abonnements</a>
                    </div>
            </div>
        </div>
        <div className="header__input">
            <div className="header__fields">
                <div className="header__avatar avatar">
                    <img
                    src="https://cdn.discordapp.com/avatars/787349101414187059/79e57a3f1d0fa6dbca1607cc95930f34.webp?size=32"
                    alt="profile_avatar"
                    />
                </div>
                <input type="text" onChange={handleTweetbtn} placeholder="What's new ?" />
            </div>
            <div className="header__buttons">
            <ul>
                <li> <icons.Gallery /> </li>
                <li> <icons.Gif /> </li>
                <li> <icons.Emojis /> </li>
                <li> <icons.Map /> </li>
            </ul>
            <button className={tweetbtn ? 'active__click__btn' : ''}>Tweeter</button>
            </div>
        </div>
        </header>
    );
}
