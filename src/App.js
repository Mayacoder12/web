import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/Homepage/homepage';
import AboutUs from './pages/about us/aboutus';
import Facility from './pages/facility/facility';
import Careers from './pages/careers/careers';
import Contact from './pages/contact us/contactus';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* Define Routes here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <Homepage></Homepage>
          <AboutUs></AboutUs>
          <Facility text='Facility1' link='https://www.youtube.com/embed/dQw4w9WgXcQ' imglink='https://cdn.mos.cms.futurecdn.net/HFUAjfbamNhbM8dsNSQW3D.jpg' description='description'></Facility>
          <Careers></Careers>
          <Contact></Contact>
          <Footer></Footer>
    </div>
  );
}

export default App;
