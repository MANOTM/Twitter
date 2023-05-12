import React from 'react'
import Input from '../../../../../Auth/Components/Inputs/Input'
import HeaderRightSetting from '../../../../Components/HeaderRightSetting/HeaderRightSetting'

export default function AgeOption({ value }) {
    return <div className="AgeOption">
        <HeaderRightSetting title="Age" back="/settings/account" />
        <div className="Account__option__input">
            <p className='small-text'>These are the age ranges associated with you.</p>
        </div>
        <div className="Account__option__input age">
            <p className='small-text'>{ value }</p>
        </div>
    </div>
}
