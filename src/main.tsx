import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx'

// Páginas carregadas sob demanda para não pesar o bundle da home
const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/blog", lazy: page(() => import('./pages/BlogListPage.tsx')) },
  { path: "/blog/:slug", lazy: page(() => import('./pages/BlogPostPage.tsx')) },
  { path: "/admin/login", lazy: page(() => import('./pages/admin/LoginPage.tsx')) },
  { path: "/admin", lazy: page(() => import('./pages/admin/AdminPage.tsx')) },
  {
   path:"/sobre",
   element: <p>Esta é a página Sobre!</p>
  },
  {
    path: "*",
    lazy: page(() => import('./pages/NotFoundPage.tsx')),
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
