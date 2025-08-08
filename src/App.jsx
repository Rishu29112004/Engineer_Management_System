import Footer from "./custum/Footer";
import Navbar from "./custum/Navbar";
import HeroSection from "./pages/assignment/HeroSection";
import Assignments from "./pages/managerDashboard/Assignments";
import Engineers from "./pages/managerDashboard/Engineers";
import Home from "./pages/managerDashboard/Home";
import Projects from "./pages/managerDashboard/Projects";
import Profile from "./pages/profile/Profile"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const isAdmin = false; // 👉 Change to false to simulate a normal user

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />

        <div className="max-w-7xl mx-auto mt-[64px] flex-grow">
          <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/engineers" element={<Engineers />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/projects" element={<Projects />} />
            
                <Route path="/" element={<HeroSection />} />
                <Route path="/my-assignments" element={<HeroSection />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
