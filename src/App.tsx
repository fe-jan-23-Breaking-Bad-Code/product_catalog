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
import { SuccessModal } from './components/SuccessModal';
import { CartPage } from './pages/CartPage';
import { TestPage } from './pages/TestPage';
import { FavouritesPage } from './pages/FavouritesPage';



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

          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {isModalVisible && (
          <SuccessModal onClose={handleCloseModal} />)}

        <TestPage />
        <Footer />
      </main>


    </div>
  );
};

