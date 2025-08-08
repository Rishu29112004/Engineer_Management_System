import React from 'react';

const data1 = [
  { label: 'Total Allocation', value: '270%' },
  { label: 'Active Projects', value: '3' },
  { label: 'Avg Progress', value: '36%' },
  { label: 'Skills', value: '3' },
];

const data2 = [
  { label: 'ReactJS', value: 'Active' },
  { label: 'Tailwind & Communication', value: 'Active' },
  { label: 'TypeScript', value: 'Active' },
];

const data3 = [
  { Project: 'AI Automation Tool', Size: '5 members', Start_Date: '8/1/2025', End_Date: '12/5/2025' },
  { Project: 'E-Commerce Platform', Size: '8 members', Start_Date: '7/15/2025', End_Date: '11/30/2025' },
  { Project: 'Mobile Banking App', Size: '6 members', Start_Date: '6/10/2025', End_Date: '10/20/2025' },
  { Project: 'Healthcare Dashboard', Size: '4 members', Start_Date: '5/5/2025', End_Date: '9/10/2025' },
  { Project: 'Inventory Management System', Size: '7 members', Start_Date: '7/1/2025', End_Date: '12/1/2025' },
  { Project: 'Crypto Trading Bot', Size: '3 members', Start_Date: '8/5/2025', End_Date: '10/25/2025' },
  { Project: 'Online Learning Portal', Size: '10 members', Start_Date: '4/20/2025', End_Date: '8/30/2025' },
  { Project: 'Real Estate CRM', Size: '6 members', Start_Date: '6/1/2025', End_Date: '9/15/2025' },
  { Project: 'Travel Booking Website', Size: '5 members', Start_Date: '5/25/2025', End_Date: '9/25/2025' },
  { Project: 'Fitness Tracker App', Size: '4 members', Start_Date: '7/10/2025', End_Date: '11/10/2025' }
];

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 font-sans bg-[#f9fbfd]">
      {/* Welcome Message */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rahul Kumar Sah!</h1>
        <p className="text-gray-600">Here’s your current status and project overview.</p>
      </div>

      {/* Profile Section */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="bg-red-600 text-white h-14 w-14 rounded-full flex items-center justify-center font-bold text-lg">
              R
            </p>
            <div>
              <p className="font-semibold text-lg text-gray-800">Rahul Kumar Sah</p>
              <p className="text-sm text-gray-500">rahul@gmail.com · Frontend Developer</p>
            </div>
          </div>
          <div className="text-right">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Junior</span>
            <p className="text-gray-500 text-sm mt-1">Available Capacity</p>
            <p className="font-semibold text-gray-900 text-lg">100%</p>
          </div>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data1.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-xl font-bold text-gray-900">{item.value}</p>
            </div>
            <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
              <span className="text-lg">📊</span>
            </div>
          </div>
        ))}
      </section>

      {/* Current Assignments */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Current Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data3.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              <p className="font-semibold text-lg text-[#111827]">{item.Project}</p>
              <p className="text-gray-500 text-sm">{item.Size}</p>
              <p className="text-gray-500 text-sm">{item.Start_Date} → {item.End_Date}</p>
              <p className="mt-2 text-sm text-gray-700 font-medium">Required Skills:</p>
              <div className="flex gap-2 flex-wrap mt-2">
                <button className="bg-gray-100 px-3 py-1 rounded-md text-sm">Node.js</button>
                <button className="bg-gray-100 px-3 py-1 rounded-md text-sm">React</button>
                <button className="bg-gray-100 px-3 py-1 rounded-md text-sm">MongoDB</button>
              </div>
              <div className="mt-3">
                <button className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">Planning</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Overview */}
      <section className='pb-5'>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data2.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
              <p className="text-gray-800 text-sm">{item.label}</p>
              <span className="text-green-600 bg-green-100 text-xs px-3 py-1 rounded-full">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
