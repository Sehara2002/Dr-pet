import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Servicespage from './pages/Services/Servicespage';
import Doctorspage from './pages/Doctors/Doctorspage';
import Contactpage from './pages/Contact/Contactpage';
import Aboutpage from './pages/About/Aboutpage';
import Treatspage from './pages/Treats/Treatspage';
import Appointmentpage from './pages/Appointments/Appointmentpage';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>,
    errorElement:"Not Found"
  },
  {
    path:"/services",
    element:<Servicespage/>,
    errorElement:"Not Found"
  },
  {
    path:"/doctors",
    element:<Doctorspage/>,
    errorElement:"Not Found"
  },
  {
    path:"/contact",
    element:<Contactpage/>,
    errorElement:"Not Found"
  },
  {
    path:"/about",
    element:<Aboutpage/>,
    errorElement:"Not Found"
  },
  {
    path:"/treats",
    element:<Treatspage/>,
    errorElement:"Not Found"
  },
  {
    path:"/appointment",
    element:<Appointmentpage/>,
    errorElement:"Not Found"
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
