import React from 'react'
import ProfileDetails from './component/ProfileDetails'
import ProfileForm from './component/ProfileForm'

const Profile = () => {
  return (
    <div className='cursor-pointer flex gap-auto max-w-7xl mx-auto bg-amber-50'>
      <div className='w-1/2'>
        <ProfileDetails />
      </div>
      <div className='w-1/2'>
        <ProfileForm />
      </div>
    </div>
  )
}

export default Profile
