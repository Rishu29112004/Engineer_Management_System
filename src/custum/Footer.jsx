import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#0f172a] py-10'>
      <div className="max-w-7xl mx-auto px-4 grid items-start md:grid-cols-3 gap-8">

        <div>
          <div className='flex items-center gap-2'>
            <p className="bg-[#4f46e5] text-white h-10 w-10 flex items-center justify-center rounded-full text-sm font-bold">
              EP
            </p>
            <p className='font-medium text-white'>Engineer Panel</p>
          </div>
          <p className='text-white mt-4'>
            Streamlining engineer management and project assignments for better productivity and team collaboration.
          </p>
        </div>

        <div className='hidden md:block text-white'>
          <p className='font-medium'>Engineer Tools</p>
          <p className='mt-4'>My Dashboard</p>
          <p>My Assignments</p>
          <p>Profile</p>
        </div>

        <div className='text-white'>
          <p className='font-medium'>Help Center</p>
          <p className='mt-4'>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>
    </div>
  )
}

export default Footer;
