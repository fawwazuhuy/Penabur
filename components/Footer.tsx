import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-lime-300 w-full pt-5'>
      <div className='flex p-20 bg-slate-100 px-32 justify-around'>
        <div className='flex flex-col'>
            <p className='text-xl'>LOGO</p>
            <p className='text-sm mt-2'>The advantage of hiring a workspace <br />with us is that gives you comfortable <br /> service and all-around facilities.</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-sm text-primary'>Service</p>
            <p className='text-sm'>Email Marketing</p>
            <p className='text-sm'>Campaigns</p>
            <p className='text-sm'>Branding</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-sm Text-primary'>Lorem</p>
            <p className='text-sm'>Ipsum</p>
            <p className='text-sm'>Dolor</p>
            <p className='text-sm'>Sit</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-sm text-primary'>Follow us</p>
            <p className='text-sm'>Email Marketing</p>
            <p className='text-sm'>Campaigns</p>
            <p className='text-sm'>Branding</p>
        </div>
      </div>
      <p className='text-md text-black bg-slate-100 p-12'>Copyright © 2021</p>
    </div>
  )
}

export default Footer
