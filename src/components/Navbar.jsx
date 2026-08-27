import React, { useEffect, useRef, useState } from 'react'
import NotificationICon from '../assets/icons/notificationIcon.svg'
import userAvatar from '../assets/images/userAvatar.svg'
import hamburuger from '../assets/icons/hamburuger.svg'

const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

function Navbar() {

    const [open, setOpen] = useState(false)
    const dropdownRef = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleSideBar = () => {
        document.getElementById("overlay").style.left = "0vw"
        setTimeout(()=>(
            document.getElementById("sideBar").style.left = "0px"
        ),200)
    }

    return (
        <nav className='px-[20px] py-[10px] border-b-[1px] border-[#d3d3d3a6] sticky top-0'>
            <div className='w-full flex justify-between items-center'>
                <div className='block md:hidden'>
                    <button onClick={handleSideBar}>
                        <img src={hamburuger} />
                    </button>
                </div>
                <div className='inputDiv items-center hidden md:flex md:w-[50%] lg:w-[400px] h-[30px] bg-[#f3f4f6] gap-x-[10px] px-[20px] rounded-[5px]'>
                    <label htmlFor='search'>
                        <SearchIcon />
                    </label>
                    <input id='search' type='text' placeholder='Explore datasets...' className='border-none bg-transparent w-[100%]' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[20px]'>
                        <button className='bg-transparent cursor-pointer hover:bg-[#f3f4f6] transition border-0 outline-0 rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                            <img src={NotificationICon} />
                        </button>
                        <div className='border-r-[1px] bg-[#f3f4f6] h-[30px] w-[1px]'></div>
                        <div onClick={() => setOpen(!open)} className='cursor-pointer relative flex gap-x-[10px] items-center'>
                            <div className='hidden md:block'>
                                <h3 className='text-[14px] font-[600]'>Muhammad Ali</h3>
                                <h4 className='text-[12px] font-[300] text-[gray] text-right'>React.js Dev</h4>
                            </div>
                            <img src={userAvatar} />

                            {open && (
                                <div className="dropdownProfile absolute right-[10px] top-[30px] mt-[10px] w-[180px] bg-[#fff] rounded-[10px] p-[10px] z-[50]">
                                    <button className="cursor-pointer bg-transparent border-0 outline-0 w-full text-left px-[15px] py-[10px] hover:bg-[#f3f6ff] rounded-[10px]">
                                        Profile
                                    </button>
                                    <button className="cursor-pointer bg-transparent border-0 outline-0 w-full text-left px-[15px] py-[10px] hover:bg-[#f3f6ff] rounded-[10px]">
                                        Settings
                                    </button>
                                    <button className="cursor-pointer bg-transparent border-0 outline-0 w-full text-left px-[15px] py-[10px] hover:bg-[#f3f6ff] rounded-[10px] text-[red]">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar