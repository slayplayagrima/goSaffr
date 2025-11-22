"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--cambridge-blue)] w-full border-b border-gray-400 px-8 py-0 flex items-center justify-between min-h-[64px]">
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="GoSaffr Logo" 
          className="h-[62px] object-contain object-center"
        />
      </div>

      <nav className="flex items-center space-x-8">
        <a className="text-[var(--text-secondary-light)] hover:text-[var(--primary)] font-medium cursor-pointer">
          Ride
        </a>
        <a className="text-[var(--text-secondary-light)] hover:text-[var(--primary)] font-medium cursor-pointer">
          Safety
        </a>
        <a className="text-[var(--text-secondary-light)] hover:text-[var(--primary)] font-medium cursor-pointer">
          About
        </a>

        {/* <button className=" text-[var(--text-secondary-light)] font-bold px-3 py-1.5 rounded-md hover:bg-[var(--primary)] hover:text-white transition">
          Sign In
        </button>
        <button className="bg-[var(--primary)] text-white font-bold px-3 py-1.5 rounded-md hover:bg-[var(--cambridge-blue-dark)] hover:text-[var(--text-secondary-light)] transition">Sign Up</button> */}
      </nav>
    </header>
  );
}
