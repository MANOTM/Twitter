import React from 'react';
import './Setting.css';
import LeftSetting from './LeftSetting/LeftSetting';
import RightSetting from './RightSetting/RightSetting';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Setting() {
    const { SettingLayouts } = useStateContext();

    return (
        <div className='Setting'>
            <div className={`setting__Left__Side ${SettingLayouts && 'show-left-setting'}`}>
                <LeftSetting />
            </div>
            <div className={`setting__Right__Side ${!SettingLayouts && 'show-right-setting'}`}>
                <RightSetting />
            </div>
        </div>
    )
}
