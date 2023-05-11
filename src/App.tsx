import './App.module.scss';

import React from 'react';
import {

  Routes,
  Route,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { Pagination } from './components/Pagination';
import { SuccessModal } from './components/SuccessModal';
import { CartItem } from './components/Cart/CartItem/CartItem';
import { Phones } from './types/Phones';
import { AboutSection } from './components/AboutSection/AboutSection';
import { CartPage } from './pages/CartPage';



export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <main className='section'>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/phones" element={<PhonesPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {isModalVisible && (
          <SuccessModal onClose={handleCloseModal} />)}

        <Footer />
      </main>


    </div>
  );
};

