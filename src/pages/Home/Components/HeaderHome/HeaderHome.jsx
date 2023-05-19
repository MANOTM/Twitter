import React from 'react'
import { useState } from 'react';

export default function HeaderHome() {
    const [active, setActive] = useState(true);
    const handleChange = () => setActive(!active); 
    return <div className="head_name_page">
        <div className="header__title">
            <h3>Home</h3>
        </div>
        <div className="header__links">
            <div onClick={handleChange} className={active ? "active" : ''}>
            <a href="#">For you</a>
            </div>
            <div onClick={handleChange} className={!active ? "active" : ''}>
            <a href="#">Following</a>
            </div>
        </div>
    </div>
}
