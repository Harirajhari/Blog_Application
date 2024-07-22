import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LandingPage from './components/pages/LandingPage.jsx';
import Login from './components/pages/Login.jsx';
import ArticlePage from './components/pages/ArticlePage.jsx';
import data from "./util/data.jsx"
import BlogPost from './components/pages/BlogPost.jsx';
import Operation from './components/pages/Operation.jsx';
import Land from './components/pages/LandingPage/Land.jsx';
import Profile from './components/pages/Profile.jsx';
import Signup from './components/pages/Signup.jsx';



const routes = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path:"/",
        element:<Land />
      },
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path:"/blogpost",
        element:<BlogPost />
      },
      {
        path: '/article/:id',
        element:<ArticlePage data={data}/>
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path: "/operation",
        element:<Operation />
      },
      {
        path:"*",
        element:<h1>Page Not Found</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
