import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function SidebarItem({children,text,to,bold,icon,count,notf}) {
    const location = useLocation();
    return (
        <li className='sidebar__item hover'>
            <NavLink to={to} className='sidebar__link' >
                <div className="link__icon">
                    {children}
                    {
                        location.pathname == to ? bold : icon
                    }
                    {
                        count > 0 && <div className="counter__notitification center">{count}</div>
                    }
                    {
                        notf && <span></span>
                    }
                </div>
                <div className="sidebar__text">{text}</div> 
            </NavLink>
        </li>
    )
}
