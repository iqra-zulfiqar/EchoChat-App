import { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin.js';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username, password)

    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
            <span className='text-blue-500'> EchoChat</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label className='label p-2'>
                    <span className='text-white label-text'>Username</span>
                </label>
                <div className='flex items-center justify-around'>
                <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <FaRegUser className='absolute right-9 top-25'/>
                </div>
                </div>
                <div>
                <label className='label p-2'>
                    <span className='text-white label-text'>Password</span>
                </label>
                <div className='flex items-center justify-around'>
                <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <RiLockPasswordLine className='absolute right-9 top-25'/>
                </div>
                </div>
                <Link to='/signup' className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 text-white' disabled={loading}>
                    {loading ? <span className="loading loading-spinner"></span>: "Login"}
                    </button>
                </div>
            </form>
            

        </div>

    </div>
  )
}

export default Login

