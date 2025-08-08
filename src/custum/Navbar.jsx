// Navbar.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [role, setRole] = useState("admin");
  const [mess, setMess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeAccess = () => {
    setRole((prev) => prev === "admin" ? "user" : "admin");
  };

  const handleClick = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogoutMess = () => {
    setMess(true);
    setTimeout(() => {
      setMess(false);
      setShowLogout(false);
    }, 2000);
  };

  const user = {
    name: 'Kumar Rishu Ritik',
    email: 'rishu@gmail.com',
  };

  // 👇 Define all paths to check for active tab
  const adminLinks = [
    { path: '/', label: 'Home' },
    { path: '/engineers', label: 'Engineers' },
    { path: '/assignments', label: 'Assignments' },
    { path: '/projects', label: 'Projects' },
  ];

  const userLinks = [
    { path: '/my-assignments', label: 'My Assignment' },
    { path: '/profile', label: 'Profile' },
  ];

  const activeTab = (path) => location.pathname === path;

  return (
    <div className='bg-[#0f172a] text-white h-[64px] px-4 flex items-center justify-between fixed inset-0 w-full z-50'>
      
      {/* Left Logo */}
      <div className='flex items-center gap-4'>
        <button
          onClick={() => navigate("/")}
          className="bg-[#4f46e5] w-10 h-10 rounded-full text-white font-bold flex items-center justify-center"
        >
          EP
        </button>
        <p className='md:block cursor-pointer select-none' onClick={handleChangeAccess}>
          Engineer Panel
        </p>
      </div>

      {/* Center Nav Links */}
      <div className='hidden md:flex items-center gap-8 relative'>
        {(role === "admin" ? adminLinks : userLinks).map((link) => (
          <div key={link.path} className='relative group'>
            <p
              className={`cursor-pointer transition-all duration-200 ${
                activeTab(link.path) ? 'text-red-500 font-bold' : 'text-white'
              }`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </p>
            {/* Underline animation */}
            <div
              className={`absolute bottom-[-2px] left-0 h-[2px] w-full bg-red-500 transition-all duration-300 ${
                activeTab(link.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Right Avatar & Logout */}
      <div className='relative'>
        <button
          onClick={handleClick}
          className='w-10 h-10 bg-gradient-to-b from-indigo-600 to-orange-400 text-white rounded-full flex items-center justify-center text-lg font-semibold'
        >
          R
        </button>

        {/* Logout Menu */}
        {showLogout && (
          <div className='absolute top-14 right-0 w-64 bg-white text-gray-800 p-4 rounded-lg shadow-lg z-50'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='h-12 w-12 bg-gradient-to-b from-indigo-600 to-orange-400 text-white rounded-full flex items-center justify-center text-lg font-semibold'>
                R
              </div>
              <div>
                <p className='font-bold'>{user.name}</p>
                <p className='text-sm text-gray-500'>{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogoutMess}
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition'
            >
              Sign Out
            </button>
          </div>
        )}

        {/* Toast Message */}
        {mess && (
          <div className='fixed bottom-10 right-10 z-50'>
            <p className='text-white bg-gradient-to-b from-[#4f46e5] to-orange-500 px-4 py-2 rounded-lg shadow-md w-[250px] text-center'>
              Logout Successfully
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
