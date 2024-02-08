import React from 'react'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Portifolio from './component/Portifolio/Portifolio'
export default function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
          {
      path:'/home',
      element:<Home />
    },
    {
      index:true,
      element:<Home />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact />
    }
    ,
    {
      path:'/portifolio',
      element:<Portifolio />
    }
      ]

    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

