import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import SideNav from './SideNav'

const Layout = () => {
    const [sideColapse, setColapse] = useState(false)
    const [mobileSideColapse, setMobileColapse] = useState(false)
    return (
        <>
            <div className={`App ${mobileSideColapse?'side_active':''}`}>

                <TopNav setColapse={setColapse} mobileSideColapse={mobileSideColapse} setMobileColapse={setMobileColapse}/>

                <main className={`flex-1 flex`}>
                    <div className={`h-[100vh-80px] w-[280px] sidebar ${sideColapse?'collapse_sidebar':''}`}>
                        <SideNav setMobileColapse={setMobileColapse} />
                    </div>

                    <div className='bg-gray-100 flex-1'>
                        <Outlet />
                    </div>
                </main>


            </div>
        </>
    )
}

export default Layout