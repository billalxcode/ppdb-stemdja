import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import Home from './page/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './page/auth/Login';
import Dashboard from './page/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
