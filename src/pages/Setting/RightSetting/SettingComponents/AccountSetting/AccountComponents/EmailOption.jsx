import React from 'react'
import Input from '../../../../../Auth/Components/Inputs/Input'
import HeaderRightSetting from '../../../../Components/HeaderRightSetting/HeaderRightSetting'
import { useStateContext } from '../../../../../../contexts/ContextProvider'

export default function EmailOption({ value }) {
    const { CallToast, showErrorFunction } = useStateContext()
    return <div className="EmailOption">
        <HeaderRightSetting title="Change email" back="/settings/account" />
        <div className="Account__option__input">
            <Input
                name='email'
                id='Email'
                label='Email'
                readonly={true}
                value={value}
            />
        </div>
        <div className={`Account__option__button`}>
            <button onClick={()=>showErrorFunction()}>Update email address</button>
            {/* <button onClick={()=>CallToast("We don't have that option right now 😢")}>Update email address</button> */}
        </div>
    </div>
}
