import React from 'react'
import './HeaderRightSetting.css';
import Arrow from '../../../../components/Icons/Arrow';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../../contexts/ContextProvider';

export default function HeaderRightSetting({ title , back }) {
    const navigate = useNavigate();
    const { setSettingLayouts } = useStateContext();
    return <div className="boite__header__info">
        <div className="Right_header__setting">
            {
                back ? (
                    <div className="Header__Right__icon center" onClick={() => navigate('/settings/account')} title='Back'>
                        <Arrow />
                    </div>
                ) : (
                    <div className="small__arrow__back">
                        <div className="Header__Right__icon center" onClick={() => setSettingLayouts(false)} title='Back'>
                            <Arrow />
                        </div>
                    </div>
                )
            }
            <span className='Right__header__title'>{ title }</span>
        </div>
    </div>
}
