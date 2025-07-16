import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './helpers/ErrorElement/ErrorElement.jsx';
import React, { Suspense } from 'react';
import Loading from './helpers/Loading/Loading.jsx';
import Layout from './pages/Layout.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Profile from './pages/Profile/Profile.jsx';
import { CATEGORIES } from './constants/constants.js';
import OneCard from './components/OneCard/OneCard.jsx';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';
import SearchProducts from './SearchProducts/SearchProducts.jsx';
import ScrollTopButton from './helpers/ScrollTopButton/ScrollTopButton.jsx';
import ScrollToTopButton from './helpers/ScrollTopButton/ScrollTopButton.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorElement />,
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Menu />,
      },
      ...CATEGORIES.map((el) => ({
        path: el.url,
        element: <CategoryCard />,
      })),
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/product/:id',
        element: <OneCard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ScrollToTopButton />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
