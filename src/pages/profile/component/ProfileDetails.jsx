import React from 'react'

const ProfileDetails = () => {
  return (
<div className='h-full w-full p-3'>
        <div className='h-full w-full bg-white p-5 rounded-2xl shadow-lg border border-gray-200'>
      <div className='grid grid-cols-2 items-center mb-4'>
        <p className='h-12 w-12 text-white bg-gradient-to-b from-[#4f46e5] to-orange-500 rounded-full flex items-center justify-center text-lg font-semibold shadow-md'>
          R
        </p>
        <div className='hidden md:block'>
          <p className='font-bold text-xl text-gray-800'>Kumar Rishu Ritik</p>
          <p className='text-sm text-gray-600'>rishu@gmail.com</p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-2 bg-gradient-to-br from-amber-50 via-white to-amber-100 p-5 rounded-xl'>
        <div className='text-gray-700 font-medium space-y-2'>
          <p>Role:</p>
          <p>Seniority:</p>
          <p>Department:</p>
          <p>Max Capacity:</p>
          <p>Skills:</p>
        </div>
        <div className='hidden sm:block text-gray-600 space-y-2'>
          <p>Engineer</p>
          <p>Junior</p>
          <p>Frontend Developer</p>
          <p>100%</p>
          <div className='grid grid-cols-1 sm:block sm:grid-cols-3 gap-2 text-sm'>
            <p className='bg-indigo-100 text-indigo-800 px-2 py-1 rounded'>React.js</p>
            <p className='bg-orange-100 text-orange-800 px-2 py-1 rounded'>Tailwind & Communication</p>
            <p className='bg-purple-100 text-purple-800 px-2 py-1 rounded'>TypeScript</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <div className="w-[80%] h-[1px] bg-gray-300" />
      </div>

      <div className='text-sm text-gray-500 space-y-1 px-1'>
        <p>👤 Member since: <span className="font-medium text-gray-700">8/1/2025</span></p>
        <p>🕒 Last updated: <span className="font-medium text-gray-700">8/2/2025</span></p>
      </div>
    </div>
</div>
  )
}

export default ProfileDetails
