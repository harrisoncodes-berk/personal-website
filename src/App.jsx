import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/sections/Home.jsx'
import About from '@/sections/About.jsx'
import Experience from '@/sections/Experience.jsx'
import Projects from '@/sections/Projects.jsx'
// Contact removed

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        {/* Contact route removed */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
