import React from 'react'
import SoftForkLogo from "/SoftForkLogo.svg";
import { NavLink } from 'react-router-dom';
import notificationIcon from "/icons/notification.png"
import profile1 from "/images/profile1.png"

const Navbar2 = () => {


    const navLinks = [
        {
            name: 'Fund',
            link: '#'
        },
        {
            name: 'Build',
            link: '#'
        },
        {
            name: 'Earn',
            link: '#'
        },
        {
            name: 'Spend',
            link: '#'
        },
        {
            name: 'Profile',
            link: '#'
        },
    ]
    
    return (
        <div className='p-4 w-full max-w-[1400px] mx-auto flex items-start justify-between'>
            <div className="flex gap-3 items-center">
                <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
                <h1 className="text-primary text-lg font-black">SoftFork</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                {navLinks.map((link, index) => (
                    <NavLink href={link.link} key={index} className="text-primary font-semibold text-sm">{link.name}</NavLink>
                ))}
            </div>
            <div className="flex">
                <img src={notificationIcon} alt="notification" />
            </div>
        </div>
    )
}

export default Navbar2
