import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {IoGridOutline} from 'react-icons/io5'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {SiGoogleclassroom} from 'react-icons/si'
import {BsJournalBookmark} from 'react-icons/bs'
import {ImClipboard} from 'react-icons/im'
import {FiSettings} from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import {RxCross1} from 'react-icons/rx'

const SideNav = ({setMobileColapse}) => {
    const isDesktop = useMediaQuery({minWidth:'768px'})
    const handleSidebar=()=>{
        // if(!isDesktop) 
        setMobileColapse(false)
    }

    return (
        <>
            <menu className='h-full overflow-x-hidden space-y-2 p-4 bg-primary text-white'>
                {!isDesktop && <div className='mb-4 cursor-pointer text-lg p-4 transition rounded-full aspect-square h-[50px] hover:bg-[#00000020] ' onClick={handleSidebar}><RxCross1/></div>}
                <MenuItem icon={<IoGridOutline/>} name="Dashboard" to='/' />
                <MenuItem icon={<FaGraduationCap/>} name="Students" to='/students' />
                <MenuItem icon={<AiOutlineUserSwitch/>} name="Teachers" to='/teachers' />
                <MenuItem icon={<SiGoogleclassroom/>} name="Class" to='/class' />
                <MenuItem icon={<BsJournalBookmark/>} name="Subject" to='/subject' />
                <MenuItem icon={<ImClipboard/>} name="Exam" to='/exam' />
                <MenuItem icon={<FiSettings/>} name="Settings" to='/setting' />
            </menu>
        </>
    )
}

export default SideNav


const MenuItem = ({icon,name,to}) => {
    const {pathname} = useLocation() 
    return (
        <>
            <NavLink to={to} className={`item flex items-center space-x-4 px-4 py-3 cursor-pointer rounded-md ${pathname==to ? 'bg-[#456fd5]' : 'hover:bg-[#4D7EF5]'}`}>
                <div className="icon text-xl my-1">{icon}</div>
                <div className="item_name text-[1rem] font-normal">{name}</div>
            </NavLink>
        </>
    )
}