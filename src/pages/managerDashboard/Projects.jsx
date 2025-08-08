import React, { useState } from 'react';

const apiData = [
    {
        Name: "AI Automation Tool",
        Description: "A project to develop an AI-based automation platform",
        Date: "8/1/2025 - 9/5/2025",
        Team: "5"
    },
    {
        Name: "E-Commerce Redesign",
        Description: "Revamp the user interface and experience of our online store",
        Date: "7/15/2025 - 10/10/2025",
        Team: "8"
    },
    {
        Name: "Mobile Banking App",
        Description: "Develop a secure and user-friendly mobile banking application",
        Date: "8/20/2025 - 11/30/2025",
        Team: "6"
    },
    {
        Name: "Chatbot Integration",
        Description: "Integrate AI chatbot for customer support on all platforms",
        Date: "9/1/2025 - 11/1/2025",
        Team: "4"
    },
    {
        Name: "Cloud Migration",
        Description: "Migrate legacy systems to AWS cloud environment",
        Date: "6/10/2025 - 9/15/2025",
        Team: "7"
    },
    {
        Name: "Cybersecurity Audit",
        Description: "Perform a full security audit and implement necessary updates",
        Date: "7/1/2025 - 8/25/2025",
        Team: "3"
    },
    {
        Name: "Healthcare Dashboard",
        Description: "Develop a real-time analytics dashboard for hospitals",
        Date: "8/5/2025 - 12/1/2025",
        Team: "6"
    },
    {
        Name: "CRM Enhancement",
        Description: "Add features and fix bugs in the internal CRM system",
        Date: "7/12/2025 - 9/30/2025",
        Team: "5"
    },
    {
        Name: "IoT Device Control Panel",
        Description: "Build a control panel for managing smart IoT devices",
        Date: "8/18/2025 - 11/20/2025",
        Team: "4"
    },
    {
        Name: "Learning Management System",
        Description: "Create a platform for online learning and course management",
        Date: "7/22/2025 - 11/10/2025",
        Team: "6"
    },
    {
        Name: "Smart Attendance System",
        Description: "AI-powered facial recognition attendance system for offices",
        Date: "9/3/2025 - 12/15/2025",
        Team: "3"
    },
    {
        Name: "Performance Tracker",
        Description: "Tool to track employee KPIs and performance insights",
        Date: "6/25/2025 - 10/5/2025",
        Team: "5"
    }
]
const Projects = () => {
    const [projects, setProjects] = useState(apiData);

    const [showNewProjectForm, setShowNewProjectForm] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Description: '',
        Date: '',
        Team: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCreateProject = (e) => {
        e.preventDefault();

        if (!formData.Name || !formData.Description || !formData.Date || !formData.Team) {
            alert("Please fill all required fields");
            return;
        }

        setProjects((prev) => [...prev, formData]);
        setFormData({ Name: '', Description: '', Date: '', Team: '' });
        setShowNewProjectForm(false);
    };

    const handleProjectCancel = () => {
        setShowNewProjectForm(false);
        setFormData({ Name: '', Description: '', Date: '', Team: '' });
    };

    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* Header */}
            <div className='flex items-center justify-between p-6 bg-white shadow-md'>
                <div>
                    <p className='font-bold text-2xl text-gray-800'>Projects</p>
                    <p className='text-gray-500 text-sm'>Manage and view all projects</p>
                </div>
                <div className='flex gap-3'>
                    <button
                        onClick={() => window.location.reload()}
                        className='rounded-md border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-100'
                    >
                        Refresh
                    </button>
                    <button
                        onClick={() => setShowNewProjectForm(true)}
                        className='rounded-md border border-gray-300 px-3 py-1 text-white bg-blue-600 hover:bg-blue-700'
                    >
                        Add Project
                    </button>
                </div>
            </div>

            {/* New Project Form */}
            {showNewProjectForm && (
                <form onSubmit={handleCreateProject}>
                    <div className="bg-white p-6 mt-6 mx-auto max-w-2xl rounded-xl shadow-xl">
                        <div className="text-center mb-6">
                            <p className="text-3xl font-extrabold text-blue-700 uppercase tracking-wide">Create New Project</p>
                            <p className="text-gray-500 text-sm mt-1">
                                Set up a new project and define its requirements. <span className="text-red-500">*</span> fields are required.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <label className="text-sm font-medium text-gray-700">Project Name*</label>
                            <input
                                className="border px-4 py-2 rounded-md focus:ring-2 text-sm"
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleInputChange}
                                placeholder="Enter project name"
                            />

                            <label className="text-sm font-medium text-gray-700">Description*</label>
                            <textarea
                                rows="3"
                                name="Description"
                                value={formData.Description}
                                onChange={handleInputChange}
                                className="border px-4 py-2 rounded-md focus:ring-2 text-sm resize-none"
                                placeholder="Enter project description"
                            />

                            <label className="text-sm font-medium text-gray-700">Date*</label>
                            <input
                                className="border px-4 py-2 rounded-md focus:ring-2 text-sm"
                                type="text"
                                name="Date"
                                value={formData.Date}
                                onChange={handleInputChange}
                                placeholder='e.g. "6/25/2025 - 10/5/2025"'
                            />

                            <label className="text-sm font-medium text-gray-700">Team*</label>
                            <input
                                className="border px-4 py-2 rounded-md focus:ring-2 text-sm"
                                type="text"
                                name="Team"
                                value={formData.Team}
                                onChange={handleInputChange}
                                placeholder="Enter team size"
                            />
                        </div>

                        <div className="flex justify-center gap-6 mt-8">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                Create Project
                            </button>
                            <button
                                type="button"
                                onClick={handleProjectCancel}
                                className="bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-200 transition-all duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            )}

            {/* Project Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
                {projects.map((item, index) => (
                    <div key={index} className='p-5 bg-white rounded-xl shadow-md border hover:shadow-lg transition-all'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='font-semibold text-lg text-gray-800'>{item.Name}</p>
                            <span className='text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full'>Planning</span>
                        </div>
                        <p className='text-gray-600 mb-2 text-sm'>{item.Description}</p>
                        <p className='text-gray-500 text-sm'><strong>Date:</strong> {item.Date}</p>
                        <p className='text-gray-500 text-sm mb-2'><strong>Team:</strong> {item.Team} members</p>
                        <p className='text-gray-600 text-sm font-medium mb-1'>Required Skills:</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs'>Node.js</span>
                            <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs'>React</span>
                            <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs'>MongoDB</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
