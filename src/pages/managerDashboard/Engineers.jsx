import React, { useState } from 'react';

const data1 = [
  { Name: "Rohit Singh", seniority: "Senior", Department: "Software Development", Email: "rohit@example.com" },
  { Name: "Priya Sharma", seniority: "Junior", Department: "Software Development", Email: "priya@example.com" },
  { Name: "Amit Verma", seniority: "Mid-Level", Department: "Quality Assurance", Email: "amit@example.com" },
  { Name: "Sneha Kapoor", seniority: "Senior", Department: "Project Management", Email: "sneha@example.com" },
  { Name: "Arjun Mehta", seniority: "Intern", Department: "UI/UX Design", Email: "arjun@example.com" },
  { Name: "Meera Joshi", seniority: "Mid-Level", Department: "DevOps", Email: "meera@example.com" },
  { Name: "Vikas Yadav", seniority: "Senior", Department: "Cyber Security", Email: "vikas@example.com" },
  { Name: "Nisha Rao", seniority: "Junior", Department: "Mobile Development", Email: "nisha@example.com" },
  { Name: "Kiran Desai", seniority: "Mid-Level", Department: "Business Analysis", Email: "kiran@example.com" },
  { Name: "Rahul Singh", seniority: "Intern", Department: "Data Science", Email: "rahul@example.com" },
  { Name: "Divya Nair", seniority: "Senior", Department: "Cloud Engineering", Email: "divya@example.com" },
  { Name: "Anil Kumar", seniority: "Junior", Department: "Technical Support", Email: "anil@example.com" }
];

const Engineers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = () => {
    const trimmedInput = searchTerm.trim().toLowerCase();
    if (trimmedInput === "") {
      return data1;
    }
    return data1.filter((data) =>
      data.Name.toLowerCase().includes(trimmedInput) || data.Department.toLowerCase().includes(trimmedInput)
    );
  };

  return (
    <div className='p-6 bg-[#f9fbfd] min-h-screen'>
      <div className='mb-6'>
        <p className='font-bold text-3xl text-gray-800'>Engineers</p>
        <p className='text-gray-600'>Manage and View all engineers in your team</p>
        <input
          className='mt-4 p-2 w-full sm:w-[300px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="text"
          placeholder='Search by Name or Department...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterData().map((item, index) => (
          <div
            key={index}
            className='bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 p-5 rounded-2xl flex justify-between'
          >
            <div>
              <p className='font-semibold text-gray-900 text-lg'>{item.Name}</p>
              <p className='text-sm text-gray-500'>Seniority: <span className='capitalize'>{item.seniority}</span></p>
              <p className='text-sm text-gray-500'>Department: {item.Department}</p>
              <p className='text-sm text-gray-500'>Email: {item.Email}</p>
              <p className='text-sm text-gray-500 mt-2 mb-1'>Skills:</p>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-700'>React</span>
                <span className='bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-700'>Node.js</span>
                <span className='bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-700'>MongoDB</span>
                <span className='bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-700'>+1 more</span>
              </div>
            </div>
            <div className='hidden sm:flex items-start'>
              <span className='text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium'>engineer</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engineers;
