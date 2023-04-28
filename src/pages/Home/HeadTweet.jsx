import React, { useState } from "react";
import Gallery from "./icons/Gallery";
import "./HeadTweet.css";
import * as icons from './IconsImport'; 

export default function HeadTweet() {
    const [active, setActive] = useState(true);
    const handleChange = () => setActive(!active); 
    return (
        <header className="header__section">
            <div className="head_name_page">
                <div className="header__title">
                    <h3>Accueil</h3>
                </div>
                <div className="header__links">
                    <div onClick={handleChange} className={active?"active":''}>
                    <a href="#">Pour vous</a>
                    </div>
                    <div onClick={handleChange} className={!active?"active":''}>
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
                <input type="text" placeholder="Quoi de neuf ?" />
            </div>
            <div className="header__buttons">
            <ul>
                <li> <icons.Gallery /> </li>
                <li> <icons.Gif /> </li>
                <li> <icons.Emojis /> </li>
                <li> <icons.Map /> </li>
            </ul>
            <button>Tweeter</button>
            </div>
        </div>
        </header>
    );
}
