import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import AccountOptions from './AccountOptions'
import { useState } from 'react'
import moment from 'moment'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function AccountSetting() {
    const { SetTitle } = useStateContext()
    SetTitle('Your Account')
    const { pseudo, email, created_at, birthDay } = JSON.parse(localStorage.getItem('user_info'));
    const age = (((new Date() - new Date(birthDay)) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0));
    const created = moment.utc(created_at).local()
    const [Account, setAccount] = useState([
        {title: 'Username', second: pseudo, hover: true, to: 'screen_name'},
        {title: 'Phone', hover: true, to: 'phone' },
        {title: 'Email', second: email, hover: true, to: 'email'},
        {title: 'Verified', second: 'No. Learn more' },
        {title: 'Protected Tweets', second: 'No', hover: true },
        {title: 'Account creation', second: created.format('D, YYYY, h:mm:ss A') },
        {title: 'Country', second: 'Morocco', hover: true},
        {title: 'Language', second: 'English', hover: true},
        {title: 'Gender', second: 'Home', hover: true},
        {title: 'Birth date', second: birthDay},
        {title: 'Age', second: age, hover: true, to: 'age'},
        {title: 'Automation', second: 'Manage your automated account.', hover: true },
    ])

    return (
        <div className="AccountSetting">
            <div className="Account__header">
                <HeaderRightSetting title="Account information" />
            </div>
            <div className="Account__options">
                {
                    Account.map((one,index) => (
                        <AccountOptions key={index} index={index} title={one.title} SecondTitle={one.second || null} hover={one.hover || null} to={one.to || null} />
                    ))
                }
            </div>
        </div>
    )
}
