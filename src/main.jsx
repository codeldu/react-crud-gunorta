import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Get } from './pages/get.jsx';
import { Edit } from './pages/edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      { 
        path : "/",
        element : <Get/>
      },
      {
        path : "/edit/:id",
        element : <Edit/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
