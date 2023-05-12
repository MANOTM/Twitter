import React from 'react'
import Input from '../../../../../Auth/Components/Inputs/Input'
import HeaderRightSetting from '../../../../Components/HeaderRightSetting/HeaderRightSetting'
import { useStateContext } from '../../../../../../contexts/ContextProvider'

export default function PhoneOption({ value }) {
    const { CallToast } = useStateContext()

    return <div className="PhobeOption">
        <HeaderRightSetting title="Change phone" back="/settings/account" />
        <div hidden className="Account__option__input">
            <Input
                name='email'
                id='Email'
                label='Email'
                readonly={true}
                value={value}
            />
        </div>
        <div onClick={()=>CallToast("We don't have that option right now 😢")} className={`Account__option__button`}>
            <button>Add phone number</button>
        </div>
    </div>
}
