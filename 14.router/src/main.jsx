import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Home, About, Events, Products, Contact } from './pages/pages';
import { ErrorPage } from "./pages/error-pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
