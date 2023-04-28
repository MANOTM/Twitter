import React, { useState } from 'react'
import './Input.css';
import { Eye, HiddenEye } from '../../../../components/Icons/PasswordIcons';

export default function Input(props) {

    const { type="text", pattern, style, className, id, name, label, change, icon, value, error, readonly } = props
    const [input_type,setInput] = useState(true)

    return (
        <>
            <div className="twitter__form__group">
                {/* <div className="twitter__form__group__border"></div> */}
                <input 
                    className={className}
                    readOnly={readonly}
                    name={name}
                    id={id}
                    defaultValue={value}
                    type={input_type ? type : 'text'}
                    onChange={change && (e => change(e))}
                    placeholder=' ' />
                <label htmlFor={id}>{label}</label>
                {icon && (
                    <div className="twitter__form__icon" onClick={() => setInput(!input_type)}>
                        {
                            input_type ? <Eye /> : <HiddenEye />
                        }
                    </div>)
                }
            </div>
        </>
    )
}
