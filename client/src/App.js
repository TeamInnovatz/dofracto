// App.js

import './App.css';
import Navbar from './components/navbar';
import Usernavbar from './components/navbardash';
import Footer from './components/footer';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home';
import Business from './pages/business';
import Huse from './pages/huse';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import OtpVerification from './pages/otpverification';
import OtpSuccess from './pages/otpsuccess';
import Dashboard from './pages/dashboard';
import BusinessListing from './pages/businesslisting';



// 👇 Wrapper to handle layout conditionally
const App = () => {
  const location = useLocation();

  const noNavRoutes = ['/login', '/signup', '/otpverification', '/otpsuccess'];
  const hideNav = noNavRoutes.includes(location.pathname);
  const hidenavbar = location.pathname === '/dashboard';

  return (
    <>
      {!hideNav && (hidenavbar ? <Usernavbar /> : <Navbar />)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/huse" element={<Huse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/otpsuccess" element={<OtpSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/businesslisting" element={<BusinessListing />} />
       
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      {!hideNav && <Footer />}
    </>
  );
};

export default App;
