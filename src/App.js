import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Header from './components/Header/header';
import Gacha from './components/Pages/Gacha/gacha';
import Footer from './components/Footer/footer';
import Home from './components/Pages/Home/home';
import NavMenu from './components/NavMenu/navMenu';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <NavMenu />
        <Routes>
          <Route path="/gacha-landing" element={<Gacha />} />
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
