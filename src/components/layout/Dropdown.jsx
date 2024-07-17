"use client";
import Link from "next/link";
import React, { useState } from "react";
import Chevrondown from "../icons/Chevrondown";
import ChevronUp from "../icons/ChevronUp";

function Dropdown({ children, name, link }) {
  const [isopen, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-2 items-center">
        <Link href={`${link}`}>{name}</Link>
        {children?.length && (
          <span className=" cursor-pointer" onClick={()=>setOpen((prev)=>!prev)}>
            {isopen?<ChevronUp/>:<Chevrondown/>}
          </span>
        )}
      </div>
      {children?.length > 0 && isopen && (
        <div className="flex flex-col gap-2  text-[16px] pl-16">
          {children &&
            children.map((item) => <Link href={item.link}>{item.name}</Link>)}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
