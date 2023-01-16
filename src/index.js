import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Registration from './pages/RegistrationPage';
import Login from './pages/LoginPage';
import ContactUS from './pages/ContactUS';
import Books from './pages/Books';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Footer from './pages/Footer'

const routing = (

  <Router>
  <Header/>
    
  
    <Routes>
      <Route path="/" element={ <App/>} />
      <Route path="/Login" element={ <Login/>} />
      <Route path="/Registration" element={ <Registration/>} />
      <Route path="/ContactUS" element={ <ContactUS/>} />
      <Route path="/About" element={ <About/>} />
      <Route path="/Books" element={ <Books/>} />
      <Route path="*" element={ <NotFound/>} />
      <Route path="/Registration/:id" element={ <Registration/>} />
    </Routes>
    
    <Footer/>
  </Router>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
