import React from 'react'
import WorldIcon from '../../../Icons/WorldIcon'
import './Everyone.css';

export default function Everyone() {
    return <> <div className="create__Everyone">
        <div className="everyone__icon center">
            <WorldIcon />
        </div>
        <span>Everyone can reply</span>
    </div>
    <div className="create__line__between"></div>
</>
}
