'use client'
import Eye from "@/components/icons/Eye";
import EyeSlash from "@/components/icons/EyeSlash";
import Link from "next/link";
import React, { useState } from "react";

function SignIn() {
  const [User ,setUser] = useState('');
  const [showPass,setShowPass] = useState(false)

  const handleChange = (ev) =>{
    setUser((prev)=>({...prev,[ev.target.name]:ev.target.value}))
  }

  return (
    <div className=" flex h-screen w-full items-center justify-center ">
      <form className="flex flex-col gap-3 max-w-md w-full  bg-white rounded-lg shadow-lg px-10 py-10">
        <div className="p-2">
          <h2 className=" text-2xl font-semibold text-center py-1 text-slate-700">Sign In </h2>
          <p className="text-slate-700 text-center text-sm font-medium mb-3">
            Let's Get Started And Manage Your Tasks
          </p>
        </div>

        <input type="email" placeholder="Email" />

        <div className='flex items-center gap-2 border-slate-200 border rounded-md pr-2 '>
        <input type={showPass?'text':'password'} placeholder="Password" name='password' className=' grow border-none' />
          <span onClick={()=>setShowPass((prev)=>!prev)}>{showPass?<Eye/>:<EyeSlash/>}</span>
        </div>

        <button className="btn mt-4">Sign In</button>
        <p>
          Don't Have An Account ?{" "}
          <Link className=" text-blue-500 font-medium underline" href={'/signUp'}>Sign Up</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignIn;
