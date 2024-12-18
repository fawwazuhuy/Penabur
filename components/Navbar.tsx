"use client";
import React from 'react'
import Image from 'next/image'
import logo from '../public/NaburDev.svg'
import Link from  'next/link'
import { menu } from "@data/menu"
 
const Navbar = () => {
  return (
    <div className='py-4 flex justify-between items-center'>
      <Image src={logo} alt='logo'/>
      <div className='flex gap-10'>
        {menu.map((item, i) => {
            return (
               <Link className="hover:text-primary" key={i} href={item.url}>{item.label}</Link> 
            )
        })}
      </div>
      <div className='flex gap-3 font-bold'>
        <Link href="/LoginRegister/Register" className='rounded-md text-secondary bg-primary p-4 hover:drop-shadow-xl'>Sign in</Link>
        <Link href="/LoginRegister/Login" className='rounded-md text-primary bg-secondary p-4 hover:drop-shadow-xl'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar
