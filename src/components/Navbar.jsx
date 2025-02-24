import React, { useState } from 'react';
import logo from '../images/fugneiz-logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='top-5 left-4 flex gap-5 fixed z-50 bg-zinc-800 border border-slate-600 p-3'>
      <img src={logo} alt="Logo" className='w-32' />
      <svg 
        onClick={() => setOpen(!open)} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="size-6 text-white cursor-pointer hover:scale-110 duration-300 hover:text-slate-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <div 
        className={`absolute flex flex-col top-14 left-0 border border-slate-600 w-full justify-center items-center gap-2 bg-zinc-800 p-2 pl-4 transform origin-top transition-transform duration-300 ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <Link to='/' className='text-white hover:text-slate-300 hover:scale-105 duration-200 hover:border-b border-slate-300 w-full pb-1 f1'>Home</Link>
        <a href='#about' className='text-white hover:text-slate-300 hover:scale-105 duration-200 hover:border-b border-slate-300 w-full pb-1 f1'>About</a>
        <a href='#events' className='text-white hover:text-slate-300 hover:scale-105 duration-200 hover:border-b border-slate-300 w-full pb-1 f1'>Theme</a>
        <Link to='/events' className='text-white hover:text-slate-300 hover:scale-105 duration-200 hover:border-b border-slate-300 w-full pb-1 f1'>Events</Link>
        <a href='#contact' className='text-white hover:text-slate-300 hover:scale-105 duration-200 hover:border-b border-slate-300 w-full pb-1 f1'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
