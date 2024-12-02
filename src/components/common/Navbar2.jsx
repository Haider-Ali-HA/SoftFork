import React from 'react'
import SoftForkLogo from "/SoftForkLogo.svg";
import { NavLink } from 'react-router-dom';
import notificationIcon from "/icons/notification.png"
import profile1 from "/images/profile1.png"
import { FaArrowDown, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';

const Navbar2 = () => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }


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
            link: '#'
        },
        {
            name: 'Profile',
            link: '#'
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
                <img src={notificationIcon} alt="notification" />
                <div className="flex items-center gap-2">
                    <div className="">
                        <img src={profile1} alt="profile-photo" className='w-9 h-9' />
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h2 className='text-[#151D48]'>Alen Miller</h2>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <p className='text-[#737791] w-full font-light'>Admin</p>
                            {
                                showDropdown ? <FaChevronUp className='cursor-pointer' onClick={handleDropdown} size={10} /> : <FaChevronDown className='cursor-pointer' onClick={handleDropdown} size={10} />
                            }
                        </div>
                    </div>
                </div>


                {showDropdown && <div className='absolute top-16 right-0 bg-white rounded-md shadow-md p-2 w-full mt-2'>
                    <div className='flex flex-col gap-2'>
                        <NavLink to='#' className='text-[#151D48] flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>New Funding <br />
                                    opportunities (Backer)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className=' text-[#151D48] flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>New Funding <br />
                                    opportunities (Backer)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className=' text-[#151D48] flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>New gig tasks available <br />
                                    (Gig Worker)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className='text-[#151D48]  flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>Progress on your project <br />
                                    (Founder)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className='text-[#151D48]  flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>New Funding <br />
                                    opportunities (Backer)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className='text-[#151D48] flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>New gig tasks available <br />
                                    (Gig Worker)</p>
                            </div>
                        </NavLink>
                        <NavLink to='#' className='text-[#151D48] flex font-semibold text-sm'>
                            <AiOutlineBell className='text-[#151D48]' size={22} />
                            <div className="">
                                <p>Progress on your project <br />
                                    (Founder)</p>
                            </div>
                        </NavLink>


                    </div>
                </div>
                }

            </div>
        </div>
    )
}

export default Navbar2
