import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
   path:"/sobre",
   element: <p>This is about page!</p>
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
