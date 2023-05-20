import React from 'react'
import SearchIcon from '../../../Icons/SearchIcon'
import SettingsIcon from '../../../Icons/SettingsIcon'
import './SearchComponent.css'

export default function SearchComponent({ hashtag }) {
    return <div className="trends__search">
        <div className="trend__header__search">
        <div className="trend__search__input">
            <label className='search__icon center' htmlFor="search">
            <SearchIcon fill="#71767b" />
            </label>
            <input type="text" defaultValue={hashtag ? hashtag : ''} placeholder='Search Twitter' className='input trand__search__input' id='search' />
        </div>
        <div className="trend__search__parametre center">
            <SettingsIcon />
        </div>
        </div>
    </div>  
}
