"use client";
import Loading from "@/components/animation/loading";
import Eye from "@/components/icons/Eye";
import EyeSlash from "@/components/icons/EyeSlash";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";


function SignUp() {
  const [User, setUser] = useState({name:'',email:'',password:''});
  const [showPass, setShowPass] = useState(false);
  const [loading,setloading] = useState(false)
  const router = useRouter();

  const handleChange = (ev) => {
    setUser((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit =async(ev)=>{
    ev.preventDefault();
    if(!User.email || !User.email || !User.password)return toast.error('Credentials Required')
      setloading(true)
    try {
      const res = await fetch('/api/auth/signUp',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(User),
      })
      setloading(false)
      setUser({name:'',email:'',password:''})
      if(!res?.ok){
        return toast.error("Something went Wrong,Please try Again")
      }
      toast.success("User Created, Please SignIn")
      router.push("/signIn")

    } catch (error) {
      setloading(false)
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

        <button className="btn mt-4 flex items-center justify-between" 
        disabled={loading}
        >{loading?<Loading/>:'Sign Up'}</button>
        <p>
          Already Have An Account ?
          <Link
            className=" text-blue-500 font-medium underline"
            href={"/signIn"}
          >
            Sign In
          </Link>
        </p>
        <p className=" text-center text-lg text-slate-500 ">or</p>
        <button
          type="button"
          className=" flex items-center rounded-lg justify-center gap-2 border border-gray-300 px-4 py-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src={"/googleLogo.png"} height={24} width={24} />
          Sign In using Google
        </button>
      </form>
    </div>
  );
}

export default SignUp;
