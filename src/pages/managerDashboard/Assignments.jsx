import React, { useState } from 'react'

const data1 = [
  { Work: "Total Assignment", Number: "12" },
  { Work: "Active Assignments", Number: "10" },
  { Work: "Avg Allocation", Number: "56%" },
];

const data2 = [
  { name: "Rohit Singh", department: "AI Automation Tool", role: "Frontend Development", allocation: "70%", start: "8/2/2025", end: "12/12/2025" },
  { name: "Priya Sharma", department: "Mobile App Revamp", role: "UI/UX Designer", allocation: "60%", start: "8/10/2025", end: "1/15/2026" },
  { name: "Amit Verma", department: "E-commerce Platform", role: "Backend Developer", allocation: "80%", start: "7/25/2025", end: "11/30/2025" },
  { name: "Sneha Kapoor", department: "Project Phoenix", role: "Project Manager", allocation: "90%", start: "6/1/2025", end: "12/31/2025" },
  { name: "Arjun Mehta", department: "Design System Update", role: "Intern Designer", allocation: "40%", start: "8/5/2025", end: "10/20/2025" },
  { name: "Meera Joshi", department: "CI/CD Pipeline", role: "DevOps Engineer", allocation: "75%", start: "7/18/2025", end: "11/28/2025" },
  { name: "Vikas Yadav", department: "Security Monitoring", role: "Security Analyst", allocation: "85%", start: "8/1/2025", end: "12/15/2025" },
  { name: "Nisha Rao", department: "Health Tracker App", role: "Mobile Developer", allocation: "65%", start: "7/22/2025", end: "12/5/2025" },
  { name: "Kiran Desai", department: "Market Research Tool", role: "Business Analyst", allocation: "55%", start: "8/6/2025", end: "11/30/2025" },
  { name: "Rahul Singh", department: "ML Model Integration", role: "Data Scientist Intern", allocation: "50%", start: "8/10/2025", end: "12/1/2025" },
  { name: "Divya Nair", department: "Cloud Migration", role: "Cloud Engineer", allocation: "80%", start: "6/20/2025", end: "11/25/2025" },
  { name: "Anil Kumar", department: "User Support Portal", role: "Support Engineer", allocation: "60%", start: "7/30/2025", end: "12/10/2025" },
  { name: "Ritika Jain", department: "Finance Dashboard", role: "Frontend Developer", allocation: "50%", start: "8/3/2025", end: "11/18/2025" },
  { name: "Tushar Patel", department: "Inventory Management", role: "Backend Developer", allocation: "70%", start: "7/15/2025", end: "12/1/2025" },
  { name: "Neha Sinha", department: "Employee Portal", role: "Full Stack Developer", allocation: "90%", start: "6/28/2025", end: "12/31/2025" },
  { name: "Deepak Chawla", department: "Chatbot Integration", role: "AI Engineer", allocation: "75%", start: "8/7/2025", end: "12/20/2025" },
];

const Assignments = () => {

  const [assignment, setAssignment] = useState(data2)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
    allocation: "",
    start: "",
    end: ""
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleCreateAssignment = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.department || !formData.role || !formData.allocation || !formData.start || !formData.end) {
      alert("Please fill all required fields")
      return
    }

    setAssignment((prev) => [...prev, formData])
    setFormData({ name: "", department: "", role: "", allocation: "", start: "", end: "" });
    setShowForm(false)

  }

  const handleCancel = () => {
    setShowForm(false)
    setFormData({ name: "", department: "", role: "", allocation: "", start: "", end: "" })
  }


  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className='p-5'>
        <p className='font-bold text-2xl text-indigo-800'>Project Assignments</p>
        <p className='mt-2 text-gray-600'>Manage engineer assignments to projects</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {data1.map((item, index) => (
          <div className='bg-indigo-100 text-indigo-900 shadow-md rounded-lg p-6 flex justify-between items-center' key={index}>
            <div>
              <p className='text-md'>{item.Work}</p>
              <p className='text-xl font-bold'>{item.Number}</p>
            </div>
            <div className='text-3xl hidden sm:block'>📊</div>
          </div>
        ))}
      </div>

      <div className='px-5'>
        <div className='flex justify-between items-center mt-5'>
          <p className='font-bold text-2xl text-indigo-800'>Assignments</p>
          <button onClick={() => setShowForm(true)} className='bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-800'>+ New Assignment</button>
        </div>


        {/* New assignment form */}
        {showForm && (
          <div className="fixed inset-0 bg-white/30 backdrop-blur-md bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 mt-6 mx-auto max-w-2xl rounded-lx shadow-xl rounded-lg">
              <form onSubmit={handleCreateAssignment}>
                <div className="">
                  <p className='text-3xl font-extrabold text-blue-700 uppercase tracking-wide my-3'>Create New Assignment</p>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>Engineer:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:Rishu'
                      name='name'
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>Role:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:AI Engineer'
                      type="text"
                      name='role'
                      value={formData.role}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>Department:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:AI Automation Tool'
                      type="text"
                      name='department'
                      value={formData.department}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>Allocation:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:75%'
                      type="text"
                      name='allocation'
                      value={formData.allocation}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>Start Date:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:2/2/2025'
                      type="text"
                      name='start'
                      value={formData.start}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-700 my-2'>End Date:</p>
                    <input
                      className='border px-4 py-2 rounded-md focus:ring-2 text-sm'
                      placeholder='ex:4/5/2025'
                      type="text"
                      name="end"
                      value={formData.end}
                      onChange={handleInputChange}

                    />
                  </div>

                  <div className='flex items-center justify-around mt-4'>
                    <button type="submit" className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-xl'>Add Assignment</button>
                    <button onClick={handleCancel} className='bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-200'>Cancel</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        )}


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
          {assignment.map((item, index) => (
            <div className='bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden' key={index}>
              <div className='p-4'>
                <p className='font-bold text-lg text-indigo-800'>{item.name}</p>
                <p className='text-sm text-gray-600'>{item.department}</p>
                <p className='text-sm bg-indigo-100 text-indigo-800 inline-block px-2 py-1 rounded-full mt-2'>{item.role}</p>
              </div>
              <div className='px-4 pb-4 text-sm text-gray-700'>
                <p><strong>Allocation:</strong> {item.allocation}</p>
                <p><strong>Start:</strong> {item.start}</p>
                <p><strong>End:</strong> {item.end}</p>
                <p className='mt-2'><strong>Skills:</strong></p>
                <div className='flex flex-wrap gap-2 mt-1'>
                  <span className='bg-gray-100 px-2 py-1 rounded text-xs'>React</span>
                  <span className='bg-gray-100 px-2 py-1 rounded text-xs'>Node.js</span>
                  <span className='bg-gray-100 px-2 py-1 rounded text-xs'>MongoDB</span>
                  <span className='bg-gray-100 px-2 py-1 rounded text-xs'>+1 more</span>
                </div>
              </div>
              <div className='flex justify-around p-4 border-t border-gray-200 bg-gray-50'>
                <button className='text-indigo-700 font-semibold hover:underline'>Edit</button>
                <button className='text-red-500 font-semibold hover:underline'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;