import React from 'react'
import LogoIcon from '../assets/icons/LogoIcon'
import DashboardIcon from '../assets/icons/DashboardIcon'
import AnalyticsIcon from '../assets/icons/AnalyticsIcon'
import ReportsIcon from '../assets/icons/ReportsIcon'
import UsersIcon from '../assets/icons/UsersIcon'
import SettingsIcon from '../assets/icons/SettingsIcon'
import { NavLink } from 'react-router-dom'

let routes = [
    {
        lable: "Dashboard",
        link: "/",
        icon: (active) => (
            <DashboardIcon
                color={active ? "#fff" : "gray"}
                width={18}
                height={18}
            />
        )
    },
    {
        lable: "Products",
        link: "/products",
        icon: (active) => (
            <AnalyticsIcon
                color={active ? "#fff" : "gray"}
                width={18}
                height={18}
            />
        )
    },
    {
        lable: "Users",
        link: "/users",
        icon: (active) => (
            <UsersIcon
                color={active ? "#fff" : "gray"}
                width={18}
                height={18}
            />
        )
    }
]

function Sidebar() {
    return (
        <aside className='p-[20px]'>
            <div className='logoDiv flex items-center gap-x-[10px]'>
                <div className='px-2 bg-[#3a388b] w-[30px] h-[30px] flex items-center justify-center rounded-[8px]'>
                    <LogoIcon color="#fff" width={10} height={10} />
                </div>
                <h2 className='text-[18px] font-[600] text-[#3a388b]'>Sample Logo</h2>
            </div>

            <div className='navLinks mt-[30px]'>
                <ul className='flex flex-col'>
                    {routes.map((navItem, i) => (
                        <li key={i} className='inline'>
                            <NavLink className='transition no-underline text-[gray] flex items-center gap-x-[10px] p-[10px]' to={navItem.link}>
                                {navItem.icon(false)}
                                {navItem.lable}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar