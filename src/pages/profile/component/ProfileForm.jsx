import React, { useState } from 'react'

const ProfileForm = () => {

  const [option, setOption] = useState(false)
  const handleUpdate = () => {
    setOption(true)
  }

  return (
    <div className='h-full w-full p-3'>
      <div className='w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-200'>
        <p className='font-bold text-2xl text-indigo-700 mb-6'>✏️ Edit Profile</p>

        <div className='space-y-4 text-sm text-gray-700'>
          <div>
            <p className='font-semibold'>Name</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='Kumar Rishu Ritik' />
          </div>

          <div>
            <p className='font-semibold'>Role</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='Engineer' />
          </div>

          <div>
            <p className='font-semibold'>Skills (comma-separated)</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='React.js, Tailwind, Good Communication Skills, TypeScript' />
          </div>

          <div>
            <p className='font-semibold'>Seniority</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='Junior' />
          </div>

          <div>
            <p className='font-semibold'>Max Capacity (%)</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='100' />
          </div>

          <div>
            <p className='font-semibold'>Department</p>
            <input className='border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-1 w-full' type="text" placeholder='Frontend Developer' />
          </div>

        </div>
        {
          option ? (
            <div className='bg-white pt-5 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4'>
              <button className='bg-amber-200 rounded-3xl w-full sm:w-40 px-4 py-2 border-2'>Submit</button>
              <button onClick={() => setOption(false)} className='bg-amber-200 rounded-3xl w-full sm:w-40 px-4 py-2 border-2'>Cancel</button>
            </div>

          ) : (
            <button onClick={handleUpdate} className='mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300 w-full'>
              Update Profile
            </button>
          )
        }
 </div>

    </div>
  )
}

export default ProfileForm
