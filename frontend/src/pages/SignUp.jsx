import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox.jsx";
import "../index.css";
import { useState } from "react";
import useSignup from "../hooks/useSignup.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> EchoChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Full Name</span>
            </label>
            <div className='flex items-center justify-around'>
            <input
              type="text"
              placeholder="Mark Smith"
              className="w-full input input-bordered h-10" value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
              <MdOutlineDriveFileRenameOutline className='absolute right-9 top-25' />
              </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <div className='flex items-center justify-around'>
            <input
              type="text"
              placeholder="marksmith"
              className="w-full input input-bordered h-10" value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
              <FaRegUser className='absolute right-9 top-25'/>
              </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Password</span>
            </label>
            <div className='flex items-center justify-around'>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
              <RiLockPasswordLine className='absolute right-9 top-25'/>
              </div>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Confirm Password</span>
            </label>
            <div className='flex items-center justify-around'>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} />
              <MdPassword className='absolute right-9 top-25' />
              </div>
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender= {inputs.gender}/>
          <Link
            to={"/login"}
            className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 text-white" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
