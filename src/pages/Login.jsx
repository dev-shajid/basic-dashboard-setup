import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        navigate('/')
    }

    return (
        <>
            <div className="login_container flex justify-center items-center min-h-[100vh]">
                <form onSubmit={handleSubmit} className='flex flex-col max-w-[450px] w-full mx-4 p-8 justify-center items-center space-y-2 bg-[#ffffff50] border-2 border-b-0 border-white rounded-lg backdrop-blur-[20px] shadow-md'>
                    <div className="title3 select-none font-semibold flex items-center my-6">
                        <span className='bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center'>S</span>ublimo
                    </div>
                    {/* <div className="title">Hello Admin</div> */}
                    <input
                        type="email"
                        placeholder='Email'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                    />
                    <button>Login</button>
                    <Link to='/' className='text-primary font-normal hover:underline pb-6'>Forgot password?</Link>
                </form>
            </div>
        </>
    )
}

export default Login