import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Layout/Main.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ErrorPage from './error-page';
import Login from './components/Login/Login';
import SignUP from './components/SignUP/SignUP';
import Home from './components/Home/Home/Home';
import ToyDetails from './components/ToyDetails/ToyDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>,
      },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/gallery'),
      },
      {
        path: 'viewDetails/:id',
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
