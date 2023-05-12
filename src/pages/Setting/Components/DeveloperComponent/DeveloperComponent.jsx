import React from 'react'
import { Link } from 'react-router-dom'
import { Blank } from '../../icons/SettingIcons'

export default function DeveloperComponent({ title, team }) {
    return <div className="devel__loop">
        <div className="Account__option__input">
            <span className='big-title'>{ title }</span>
        </div>
        {
            team.map(one => (
                <Link target='_blank' key={'/'+one.name} to={one.link} className="Account__option__input dev__one hover">
                    <span>{ one.name }</span>
                    <span className='develp__icon'>
                        <Blank />
                    </span>
                </Link>
                ))
        }
    </div>
}
