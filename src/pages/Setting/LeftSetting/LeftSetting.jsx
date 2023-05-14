import React from 'react'
import HeaderLeftSetting from './HeaderLeftSetting/HeaderLeftSetting'
import SearchSetting from './SearchSetting/SearchSetting'
import SettingRow from './SettingsRow/SettingRow'
import './LeftSetting.css'
import { Account, Developer } from '../icons/SettingIcons'
import { Key } from '../icons/SettingIcons'
import { Desactivate } from '../icons/SettingIcons'
import { useSelector } from 'react-redux'

export default function LeftSetting() {
    const { loggedIn } = useSelector(state => state.Auth)
    return (
        <div className="Left__Setting">
            <div className="header__left__setting">
                <HeaderLeftSetting />
            </div>
            <div className="search__setting">
                <SearchSetting />
            </div>
            {
                loggedIn && (
                    <div className="body__user__setting">
                        <div className="setting__row">
                            <SettingRow to="account" title='Account information' Icon={Account} />
                            <SettingRow to='password' title='Change your password' Icon={Key} />
                            <SettingRow to='deactivate' title='Deactivate your account' Icon={Desactivate} />
                        </div>
                        <div className="setting__left__paragraph">
                            <p className='small-text'>See information about your account, or learn about your account deactivation options</p>
                        </div>
                    </div>
                )
            }
            <div className="footer__setting__extra__dakxi">
                <div className="setting__row">
                    <SettingRow to="developers" title='Developers' Icon={Developer} />
                </div>
                <div className="setting__left__paragraph">
                    <p className='small-text'>All these people are the ones who make this work. Thank you <a href='https://fr.wikipedia.org/wiki/Hrithik_Roshan' className="a-link" target='_blank'>Hrithik Roshan</a> </p>
                </div>
            </div>
        </div>
    )
}
