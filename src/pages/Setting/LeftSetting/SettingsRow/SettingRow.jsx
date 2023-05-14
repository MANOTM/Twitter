import React from 'react';
import './SettingRow.css';
import { NavLink } from 'react-router-dom';
import { ArrowOn } from '../../icons/SettingIcons';
import { useStateContext } from '../../../../contexts/ContextProvider';

export default function SettingRow({ to, title, Icon }) {
    const { setSettingLayouts } = useStateContext();
    return (
        <NavLink to={to} onClick={()=>setSettingLayouts(true)}>
            <div className={`setting__one__row hover`}>
                <div className="setting__link__body">
                    <div className="setting__link__icon">
                        <Icon />
                    </div>
                    <span className="setting__link__title">{ title }</span>
                </div>
                <div className="setting__link__arrow">
                    <ArrowOn />
                </div>
            </div>
        </NavLink>
    )
}
