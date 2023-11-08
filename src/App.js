import Menu from './components/menu/Menu';
import Main from './pages/main/Main';

import './graphics/styles/style.scss';
import { Route, Routes, createBrowserRouter, useLocation, useOutlet } from 'react-router-dom';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Price from './pages/price/Price';
import Contacts from './pages/contacts/Contacts';
import Footer from './components/footer/Footer';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { createRef, useRef } from 'react';

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

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app">
      <Menu />
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="page" unmountOnExit>
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </div>
  );
}

export default App;
