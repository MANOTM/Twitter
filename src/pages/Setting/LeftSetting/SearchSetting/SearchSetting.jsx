import React from 'react'
import SearchIcon from '../../../../components/Icons/SearchIcon'
import { useState } from 'react'
import './SearchSetting.css';

export default function SearchSetting() {
    const [InputActive, setInputActive] = useState(false)

    return (
        <div className={`search__Setting ${InputActive && 'active'}`} onClick={() => setInputActive(true)}>
            <div className="search__Setting_form">
                <SearchIcon fill="rgb(113, 118, 123)" />
                <div className="input__search">
                    <input type="text" placeholder='Search Settings' onBlur={() => { setInputActive(false) }} />
                </div>
            </div>
        </div>
    )
}
