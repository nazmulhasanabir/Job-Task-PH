import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home';
import TaskBoard from './home/ToDo/TaskBoard';
import TaskForm from './Dashboard/TaskForm';
;



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     
      {
        path:"/",
        element:<TaskBoard></TaskBoard>
      },
      {
        path :"taskform",
        element:<TaskForm></TaskForm>
      }
      
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
