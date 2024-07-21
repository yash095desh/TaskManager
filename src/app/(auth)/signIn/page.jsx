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

function SignIn() {
  const [User, setUser] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const handleChange = (ev) => {
    setUser((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!User.email || !User.password)return toast.error("Credentials Required");
    setloading(true);
    const res = await signIn("credentials", { ...User, redirect: false });
    setloading(false);
    setUser({ email: "", password: "" });
    if (!res.url) {
      return toast.error("Invalid UserName or Password")
    }
    toast.success("Successfully Signed In ")
    return router.push("/");
  };

  return (
    <div className=" flex h-screen w-full items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-md w-full  bg-white rounded-lg shadow-lg px-10 py-10"
      >
        <div className="p-2">
          <h2 className=" text-2xl font-semibold text-center py-1 text-slate-700">
            Sign In{" "}
          </h2>
          <p className="text-slate-700 text-center text-sm font-medium mb-3">
            Let's Get Started And Manage Your Tasks
          </p>
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={User?.email}
          onChange={(ev) => handleChange(ev)}
        />

        <div className="flex items-center gap-2 border-slate-200 border rounded-md pr-2 ">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={User?.password}
            onChange={(ev) => handleChange(ev)}
            className=" grow border-none"
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <Eye /> : <EyeSlash />}
          </span>
        </div>
        <button className="btn mt-4" disabled={loading}>
          {loading ? <Loading /> : "Sign In"}
        </button>
        <p>
          Don't Have An Account ?
          <Link
            className=" text-blue-500 font-medium underline"
            href={"/signUp"}
          >
            Sign Up
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

export default SignIn;
