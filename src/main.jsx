import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home.jsx'
import App from './App.jsx'
import Reproduct from './routes/Reproduct/Reproduct.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/reproduct/:name',
        element: <Reproduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
