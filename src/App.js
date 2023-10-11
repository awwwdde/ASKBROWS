import Menu from './components/menu/Menu';
import Main from './pages/main/Main';

import './graphics/styles/style.scss';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Price from './pages/price/Price';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
