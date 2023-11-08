import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Price from './pages/price/Price';
import Contacts from './pages/contacts/Contacts';

const routes = [
  {
    path: '/',
    name: 'Main',
    element: <Main />,
    nodeRef: createRef(),
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    element: <Portfolio />,
    nodeRef: createRef(),
  },
  {
    path: '/price',
    name: 'Price',
    element: <Price />,
    nodeRef: createRef(),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    element: <Contacts />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
