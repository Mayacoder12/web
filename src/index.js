import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage/homepage';
import AboutUs from './pages/about us/aboutus';
import Careers from './pages/careers/careers';
import Facility from './pages/facility/facility';
import Contact from './pages/contact us/contactus';

// Correct React 18+ method to render the app:
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
