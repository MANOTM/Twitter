import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AccountSetting from './SettingComponents/AccountSetting/AccountSetting'
import PasswordSetting from './SettingComponents/PasswordSettings/PasswordSetting'
import DiactivateSetting from './SettingComponents/DeactivateSettings/DiactivateSetting'
import { useState } from 'react'
import UsernameOption from './SettingComponents/AccountSetting/AccountComponents/UsernameOption'
import EmailOption from './SettingComponents/AccountSetting/AccountComponents/EmailOption'
import PhoneOption from './SettingComponents/AccountSetting/AccountComponents/PhoneOption'
import AgeOption from './SettingComponents/AccountSetting/AccountComponents/AgeOption'
import Developers from './SettingComponents/DevelopersSettings/Developers'
import ClearSettings from './SettingComponents/ClearSettings/ClearSettings'

export default function RightSetting() {
  const { pseudo, email, birthDay } = JSON.parse(localStorage.getItem('user_info'));
  const age = (((new Date() - new Date(birthDay)) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0));
  const [settings, setSettings] = useState([
    {path: 'account', element: <AccountSetting />},
    {path: 'password', element: <PasswordSetting />},
    {path: 'deactivate', element: <DiactivateSetting />},
    {path: 'screen_name', element: <UsernameOption value={pseudo} />},
    {path: 'phone', element: <PhoneOption />},
    {path: 'email', element: <EmailOption value={email} />},
    {path: 'Age', element: <AgeOption value={age} />},
    {path: 'developers', element: <Developers />},
    {path: 'Clear', element: <ClearSettings />},
  ])

  return <div>
    <Routes>
      {
        settings.map(one => (
          <Route key={one.path} path={one.path} element={one.element} />
        ))
      }
    </Routes>
  </div>
}
