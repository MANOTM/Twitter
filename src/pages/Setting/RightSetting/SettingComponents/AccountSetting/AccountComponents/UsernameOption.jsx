import React from 'react'
import HeaderRightSetting from '../../../../Components/HeaderRightSetting/HeaderRightSetting'
import Input from '../../../../../Auth/Components/Inputs/Input'
import { useState } from 'react';
import './AccountComponents.css';
import { useStateContext } from '../../../../../../contexts/ContextProvider';

export default function UsernameOption({ value: pseudo }) {
    const [value, setValue] = useState(pseudo);
    const { showErrorFunction } = useStateContext()
    const [buttonSave, setBtnSave] = useState(false);
    const HandleChange = e => {
        setValue(e.target.value)
        setBtnSave(true)
    }

    return <div className="UsernameOption">
        <HeaderRightSetting title="Change username" back="/settings/account" />
        <div className="Account__option__input">
            <Input
                name='name'
                id='Username'
                label='Username'
                value={value}
                change={HandleChange}
            />
        </div>
        <div className={`Account__option__saveBtn ${buttonSave && value.length && 'active'}`}>
            <button onClick={()=>showErrorFunction()}>Save</button>
        </div>
    </div>
}
