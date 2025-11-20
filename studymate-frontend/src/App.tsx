//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TestGemini from './pages/TestGemini';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

function App() {
 
  return (
  
     <BrowserRouter>
      <Routes>
        <Route path="/test-gemini" element={<TestGemini />} />
        {/* <Route path="*" element={<Navigate to="/test-gemini" replace />} /> */}
      </Routes>
     
     </BrowserRouter>
    
      
   
  )
}

export default App
