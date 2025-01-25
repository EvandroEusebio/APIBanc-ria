import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/index.tsx';
import SignIn from './pages/SignIn/index.tsx';
import SignUp from './pages/SignUp/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className=" bg-backgroundColor">
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
);


/* 


*/