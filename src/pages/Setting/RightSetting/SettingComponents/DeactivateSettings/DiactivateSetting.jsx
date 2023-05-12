import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import avatar from '../../../../../assets/images/avatar_twitter.png';
import './DiactivateSetting.css'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../../../contexts/ContextProvider';

export default function DiactivateSetting() {
    const { name, pseudo } = JSON.parse(localStorage.getItem('user_info'));
    const { CallToast } = useStateContext()
    return (
        <div className='DiactivateSetting'>
            <HeaderRightSetting title="Deactivate account" />
            <div className="diactivate__setting">
                <Link to={`/profile/${name}`} className="profile__setting hover">
                    <div className="profile__setting__avatar avatar">
                        <img src={avatar} alt="avatar" width="48px" />
                    </div>
                    <div className="profile__setting__info">
                        <span className="profile__setting__name"> { name } </span>
                        <span className="profile__setting__pseudo"> { pseudo } </span>
                    </div>
                </Link>
                <div className="Account__option__input">
                    <span className='big-title'>This will deactivate your account</span>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>You’re about to start the process of deactivating your Twitter account. Your display name, @username, and public profile will no longer be viewable on Twitter.com, Twitter for iOS, or Twitter for Android.</p>
                </div>
                <div className="Account__option__input">
                    <span className='big-title'>What else you should know</span>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>You can restore your Twitter account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.</p>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>Some account information may still be available in search engines, such as Google or Bing. <a target='_blank' href="https://help.twitter.com/en/safety-and-security/remove-twitter-profile-from-google-search" className='a-link'>Learn more</a></p>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>If you just want to change your @username, you don’t need to deactivate your account — edit it in your <Link to="/settings/account" className='a-link'>settings</Link>.</p>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>To use your current @username or email address with a different Twitter account, <Link to="/settings/account" className='a-link'>change them</Link> before you deactivate this account.</p>
                </div>
                <div className="Account__option__input">
                    <p className='mini-setting'>If you want to download <a className='a-link' href="#">your Twitter data</a>, you’ll need to complete both the request and download process before deactivating your account. Links to download your data cannot be sent to deactivated accounts.</p>
                </div>
                <div onClick={()=>CallToast("We don't have that option right now 😢")} className={`Account__option__button deactivate`}>
                    <button>Deactivate</button>
                </div>
            </div>
        </div>
    )
}
