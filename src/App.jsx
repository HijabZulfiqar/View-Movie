import React from "react"
import Layout from "./Components/Layout/Layout"

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from 'react-router-dom';
import Sidebar from "./Components/SideBar/SideBar";
import Home from "./Components/Pages/Home";
import Special from "./Components/Pages/Special";
import Trending from "./Components/Pages/Trending";
import Suggestions from "./Components/Pages/Suggestions";
import Category from "./Components/Pages/Category";
import LoginForm from "./Components/auth/loginForm";
import path from "path";
import SignupForm from "./Components/auth/signupForm";
const router = createBrowserRouter([
  { path: "/", element:<Layout/> ,
      children:[
       { path: "/sidebar", element: <Sidebar/> },
        {path:"/",element:<Home/>
      },
   
      { path:"/trending",element: <Trending/>},
      { path:"/suggestions",element:<Suggestions/> },
      { path:"/categories",element: <Category/>},
       {path:"/home",element:<Home/>},
      ]
 },
 
  {path:"/movies/:id", element:<Special/>  },
     {path:"/login",element:<LoginForm/>},
     {path:"/signup",element:<SignupForm/>},
  
]);


function App() {
  
  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
