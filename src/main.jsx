import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home';
import TaskBoard from './home/ToDo/TaskBoard';
import TodoCard from './Dashboard/TodoCard';
import Three from './Dashboard/Three';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/addTask",
        element:<TaskBoard></TaskBoard>
      },
      {
        path:"/",
        element:<Three></Three>
      }
    ]
  },
  // {
  //   path:"/",
  //   element:<TodoCard></TodoCard>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
