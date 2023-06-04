import React from 'react'
import HeaderRightSetting from '../../../../Components/HeaderRightSetting/HeaderRightSetting'
import Input from '../../../../../Auth/Components/Inputs/Input'
import { useState } from 'react';
import './AccountComponents.css';
import { useStateContext } from '../../../../../../contexts/ContextProvider';
import axios from '../../../../../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../../../../Auth/Login/Login';

export default function UsernameOption({ value: pseudo }) {
    const [value, setValue] = useState(pseudo);
    const { CallToast, showErrorFunction, setRender ,render } = useStateContext()
    const { user } = useSelector(state => state.Auth)
    const [buttonSave, setBtnSave] = useState(false);
    const dispatch = useDispatch()
    const hanldeReset = () => {
        setBtnSave(false)
        setValue(pseudo)
    }
    const HandleChange = e => {
        setValue(e.target.value)
        setBtnSave(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!value?.trim()) return
        if(value?.length >= 2) {
            axios
            .post('updateInfo',{pseudo:value})
            .then(res => {
                CallToast(res?.data?.message + '😊✨✨');
                localStorage.removeItem('user_info');
                const newInfo = {...user, pseudo:value}
                localStorage.setItem('user_info',JSON.stringify(newInfo));
                dispatch(Login(newInfo))
                console.log(newInfo);
                setRender(!render)
            })
            .catch(err => showErrorFunction())
        }else{
            CallToast('Type a longer name 👀');
        }
    }

    return <form onSubmit={handleSubmit} className="UsernameOption">
        <HeaderRightSetting title="Change username" back="/settings/account" />
        <div className="Account__option__input">
            <Input
                name='name'
                id='Username'
                label='Username'
                value={value}
                change={HandleChange}
            />
            <span onClick={hanldeReset} className="reset__pseudo a-link" hidden={!buttonSave}>Reset name</span>
        </div>
        <div className={`Account__option__saveBtn ${buttonSave && value.length && 'active'}`}>
            <button>Save</button>
        </div>
    </form>
}
