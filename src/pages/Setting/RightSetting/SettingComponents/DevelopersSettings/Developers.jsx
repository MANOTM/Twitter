import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import './Developers.css';
import json from '../../../../../data/developers.json';
import DeveloperComponent from '../../../Components/DeveloperComponent/DeveloperComponent';

export default function Developers() {
    return (
        <div className='Developers'>
            <HeaderRightSetting title="Developers List" />
            <div className="developers__List">
                <div className="Account__option__input">
                    <span className='mini-setting'>I would like to extend my heartfelt thanks to everyone who worked on this project.</span>
                </div>
                {
                    json.DD201.map(one => <DeveloperComponent key={one.title} title={one.title} team={one.team} />)
                }
            </div>
        </div>
    )
}
