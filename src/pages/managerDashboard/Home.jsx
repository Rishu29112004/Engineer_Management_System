import React, { useState } from 'react'

const Home = () => {
  const data1 = [
    { label: 'Total Engineers', value: '15' },
    { label: 'Active Projects', value: '5' },
    { label: 'Avg Allocation', value: '1%' },
    { label: 'Total Projects', value: '13' },
  ]

  const data2 = [
    { Name: 'Rohit Singh', Position: 'Software Development', Seniority: 'Senior', Allocation: '20%' },
    { Name: 'Rahul Kumar', Position: 'Backend Development', Seniority: 'Junior', Allocation: '40%' },
    { Name: 'Sneha Mehta', Position: 'Frontend Development', Seniority: 'Mid-Level', Allocation: '60%' },
    { Name: 'Amit Verma', Position: 'UI/UX Design', Seniority: 'Senior', Allocation: '35%' },
    { Name: 'Neha Sharma', Position: 'QA Testing', Seniority: 'Junior', Allocation: '50%' },
    { Name: 'Vikram Joshi', Position: 'Project Management', Seniority: 'Senior', Allocation: '25%' },
    { Name: 'Ritu Agarwal', Position: 'Data Analysis', Seniority: 'Mid-Level', Allocation: '45%' },
    { Name: 'Manoj Patel', Position: 'DevOps Engineering', Seniority: 'Senior', Allocation: '30%' },
    { Name: 'Pooja Rani', Position: 'Mobile Development', Seniority: 'Junior', Allocation: '55%' },
    { Name: 'Saurabh Jain', Position: 'Security Engineering', Seniority: 'Senior', Allocation: '20%' },
    { Name: 'Tanya Kapoor', Position: 'Machine Learning', Seniority: 'Mid-Level', Allocation: '40%' },
    { Name: 'Arjun Das', Position: 'Cloud Engineering', Seniority: 'Junior', Allocation: '50%' }
  ]

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
  ]

  const [searchItem, setSearchItem] = useState("")


  const filterData = () => {
    const trimmedInput = searchItem.trim().toLowerCase()
    if (trimmedInput === "") return data2
    return data2.filter((data) =>
      data.Name.toLowerCase().includes(trimmedInput) || data.Position.toLowerCase().includes(trimmedInput)
    )
  }

  
  const [project, setProject] = useState(data3)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const handleCreateProject = () => {
    setShowProjectForm(true)
  }

  const [formData, setFormData] = useState({
    Project: "",
    Size: "",
    Start_Date: "",
    End_Date: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const submitNewProject = (e) => {
    e.preventDefault()

    if (!formData.Project || !formData.Size || !formData.Start_Date || !formData.End_Date) {
      alert("Please fill all required fields")
      return
    }

    setProject((prev) => [...prev, formData])
    setFormData({ Project: "", Size: "", Start_Date: "", End_Date: "" })
    setShowProjectForm(false)
  }

  const handleFormCancel = () => {
    setShowProjectForm(false)
    // setShowProjectForm({ Project: "", Size: "", Start_Date: "", End_Date: "" })
  }

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-[#1f2937]">
      <div className="px-6 py-8">
        <p className="text-4xl font-bold text-[#111827]">Dashboard</p>
        <p className="text-lg text-gray-600 mb-6">Welcome to EngineerHub - Manage your team and projects</p>

        {/* Summary Boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-8'>
          {data1.map((item, index) => (
            <div key={index} className='flex items-center justify-between bg-white shadow-md rounded-xl p-4'>
              <div>
                <p className='text-gray-500'>{item.label}</p>
                <p className='text-2xl font-bold text-[#111827]'>{item.value}</p>
              </div>
              <div className='h-12 w-12 rounded-full bg-[#e0f2fe] text-[#2563eb] flex items-center justify-center text-xl'>
                🧑
              </div>
            </div>
          ))}
        </div>

        {/* Engineer Search Input */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
          <p className='text-2xl font-bold text-[#111827]'>Engineers</p>
          <input
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className='bg-white shadow-md rounded-xl p-2 mt-2 sm:mt-0 w-full sm:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            type="text"
            placeholder='Search engineers...'
          />
        </div>

        {/* Engineer Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filterData().map((item, index) => (
            <div key={index} className='bg-white p-5 rounded-xl shadow-md'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-lg font-semibold text-[#111827]'>{item.Name}</p>
                  <p className='text-sm text-gray-500'>{item.Position}</p>
                  <span className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md'>{item.Seniority.toLowerCase()}</span>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Allocation</p>
                  <p className='font-bold text-[#111827]'>{item.Allocation}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[90%] border-t-2 border-gray-200 my-4" />
              </div>
              <div className='flex flex-wrap gap-2'>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>React</button>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>Node.js</button>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>MongoDB</button>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>+1 more</button>
              </div>
            </div>
          ))}
        </div>

        {/* Create New Project */}
        {showProjectForm && (
          <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex bg-opacity-40 justify-center items-center z-50">
            <div className="bg-white p-6 mt-6 mx-auto max-w-2xl rounded-lx shadow-xl rounded-lg">
              <form onSubmit={submitNewProject}>
                <div>
                  <p className="text-blue-700 font-bold text-2xl mb-2">CREATE NEW PROJECT</p>
                  <p className="text-gray-600 font-medium mb-6">
                    Set up a new project and define its requirements. Fields marked with * are required.
                  </p>

                  <div className="space-y-4">


                    <div>
                      <label className="font-bold block mb-1">Project:</label>
                      <input
                        type="text"
                        name='Project'
                        value={formData.Project}
                        onChange={handleInput}
                        placeholder="Enter project manager name..."
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="font-bold block mb-1">Size:</label>
                      <input
                        type="text"
                        name='Size'
                        value={formData.Size}
                        onChange={handleInput}
                        placeholder="Enter department..."
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>



                    <div>
                      <label className="font-bold block mb-1">Start Date:</label>
                      <input
                        type="text"
                        name='Start_Date'
                        value={formData.Start_Date}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="font-bold block mb-1">End Date:</label>
                      <input
                        type="text"
                        name='End_Date'
                        value={formData.End_Date}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    

                    <div className="flex justify-between mt-6">
                      <button type='submit' className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                        Create Project
                      </button>
                      <button onClick={handleFormCancel} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}


        {/* Project Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mt-10 mb-4'>
          <p className='text-2xl font-bold text-[#111827]'>Recent Projects</p>
          <input onClick={() => setShowProjectForm(true)} className='bg-white shadow-md rounded-md p-2 mt-2 sm:mt-0 w-full sm:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Create New Project' />
        </div>

        {/* Project Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {project.map((item, index) => (
            <div key={index} className='bg-white p-5 rounded-xl shadow-md'>
              <p className='font-semibold text-lg text-[#111827]'>{item.Project}</p>
              <p className='text-gray-500 text-sm'>{item.Size}</p>
              <p className='text-gray-500 text-sm'>{item.Start_Date} - {item.End_Date}</p>
              <p className='mt-2 text-sm text-gray-700 font-medium'>Required Skills:</p>
              <div className='flex gap-2 flex-wrap mt-2'>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>Node.js</button>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>React</button>
                <button className='bg-gray-100 px-3 py-1 rounded-md text-sm'>MongoDb</button>
              </div>
              <div className='mt-3'>
                <button className='bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm'>Planning</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
