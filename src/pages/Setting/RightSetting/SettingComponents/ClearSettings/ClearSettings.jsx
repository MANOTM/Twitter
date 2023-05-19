import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import axios from '../../../../../api/axios'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function ClearSettings() {

    const { CallToast } = useStateContext();
    const ClearBookmark = () => {
        axios
        .delete('/clearAllSaved')
        .then(res => {
            CallToast('Bookmarks Clear with success');
        })
        .catch(err => {
            CallToast('something happend, please try later');
        })
    }

    return (
        <div className='DiactivateSetting'>
            <HeaderRightSetting title="Clear account" />
            <div className="diactivate__setting">
                <div className="notification__clear">
                    <div className="Account__option__input">
                        <span className='big-title'>Clear all Notifications</span>
                    </div>
                    <div className="Account__option__input">
                        <p className='mini-setting'>the kinds of notifications you get about your activities, interests, and recommendations, you can clear by clicking in the button ballow.</p>
                    </div>
                    <div onClick={()=>CallToast("We don't have that option right now 😢")} className={`Account__option__button`}>
                        <button>Clear</button>
                    </div>
                </div>
                <div className="bookmark__clear">
                    <div className="Account__option__input">
                        <span className='big-title'>Clear all Bookmarks</span>
                    </div>
                    <div className="Account__option__input">
                        <p className='mini-setting'>These option won’t affect your bookmarks, but there is no back after this.</p>
                    </div>
                    <div onClick={ClearBookmark} className={`Account__option__button deactivate`}>
                        <button>Claer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
