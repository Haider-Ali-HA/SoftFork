import React from 'react'
import SoftForkLogo from "/SoftForkLogo.svg";
import { NavLink } from 'react-router-dom';
import notificationIcon from "/icons/notificationWithBadge.png"


const Navbar3 = ({showBtn=true}) => {


    const navLinks = [
        {
            name: 'Fund',
            link: '/fund'
        },
        {
            name: 'Build',
            link: '/build'
        },
        {
            name: 'Earn',
            link: '/earn'
        },
        {
            name: 'Spend',
            link: '/spend'
        },
        {
            name: 'Profile',
            link: '/profile'
        },
    ]

    return (
        <div className='p-4 w-full max-w-[1400px] mx-auto flex mb-2 justify-between items-center'>
            <div className="flex gap-3 items-center">
                <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
                <h1 className="text-primary text-lg font-black">SoftFork</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                {navLinks.map((link, index) => (
                    <NavLink to={link.link} key={index} className="text-primary font-semibold text-sm">{link.name}</NavLink>
                ))}
            </div>
            <div className="flex p-3 items-center gap-4 relative justify-center">
                <img src={notificationIcon} alt="notification" className='w-7' />
                {
                    showBtn ? (
                        <div className="flex items-center justify-center text-white bg-[#0DAC2A] p-2 rounded-lg text-sm">
                            <p>Token: 250</p>
                        </div>
                    ):(
                        <div className="flex items-center justify-center bg-transparent p-2 rounded-lg text-sm pr-12">
                        {/* <p>Token: 250</p> */}
                    </div>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar3
