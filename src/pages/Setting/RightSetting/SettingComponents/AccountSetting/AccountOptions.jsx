import React from 'react'
import { ArrowOn } from '../../../icons/SettingIcons'
import './AccountSetting.css';
import { Link } from 'react-router-dom';

export default function AccountOptions({ title, SecondTitle, hover, to, index }) {
    return (
        <Link key={index} to={to && `/settings/${to}`} className={`AccountOptions ${hover ? 'hover' : 'border'}`}>
            <div className="account__option__content">
                <span className="account__option__title"> { title } </span>
                <span className="account__option__miniTitle"> { SecondTitle } </span>
            </div>
            {
                hover && (
                    <div className="account__option__icon">
                        <ArrowOn />
                    </div>
                    )
            }
        </Link>
    )
}
