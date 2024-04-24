import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SingUp from './components/SignUp.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee", 
    element: <AddCoffee></AddCoffee>
  }, 
  {
    path: 'updateCoffee/:id', 
    element: <UpdateCoffee></UpdateCoffee>, 
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/SignIn',
    element:<SignIn></SignIn>
  },
  {
    path:'/SignUp',
    element:<SingUp></SingUp>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
