import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SidebarItem({children,text,to,notf}) {
    return (
        <li className='sidebar__item hover'>
            <NavLink to={to} className='sidebar__link' >
                <div className="link__icon">
                    {children}
                    {notf && <span></span>}
                </div>
                <div className="sidebar__text">{text}</div> 
            </NavLink>
        </li>
    )
}
