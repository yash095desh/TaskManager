"use client";
import Eye from "@/components/icons/Eye";
import EyeSlash from "@/components/icons/EyeSlash";
import Link from "next/link";
import React, { useState } from "react";

function SignUp() {
  const [User, setUser] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (ev) => {
    setUser((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit =async(ev)=>{
    console.log(User)
    ev.preventDefault();
    try {
      const user = await fetch('/api/auth/signUp',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(User),
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className=" flex h-screen w-full items-center justify-center ">
      <form className="flex flex-col gap-3 max-w-md w-full  bg-white rounded-lg shadow-lg px-10 py-10"
        onSubmit={handleSubmit}
      >
        <div className="p-2">
          <h2 className=" text-2xl font-semibold py-1 text-center  text-slate-700">
            Sign Up{" "}
          </h2>
          <p className="text-slate-700 text-sm text-center font-medium mb-3">
            Let's Get Started And Manage Your Daily Tasks
          </p>
        </div>

        <input
          type="text"
          placeholder="UserName"
          name="name"
          value={User?.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={User?.email}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2 border-slate-200 border rounded-md pr-2 ">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={User?.password}
            onChange={handleChange}
            className=" grow border-none"
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <Eye /> : <EyeSlash />}
          </span>
        </div>

        <button className="btn mt-4">Sign Up</button>
        <p>
          Already Have An Account ?
          <Link
            className=" text-blue-500 font-medium underline"
            href={"/signIn"}
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
