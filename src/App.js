
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import CustomerForm from './components/pages/CustomerForm';

function App() {
  return (
   <>
   <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/get-started' element={<CustomerForm />} />
      <></>
    </Routes>
    
    <Footer></Footer>
   </Router>
   </>
     
      
 
  );
}

export default App;
