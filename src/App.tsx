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



export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // it only for testing, start
  const items = [];

  for (let i = 1; i < 100; i++) {
    items.push(`Item ${i}`);
  }
  // end

  const itemsPerPage = 16;
  const pageByDefault = 1;

  const [currentPage, setCurrentPage] = useState(pageByDefault);

  const firstItemIndex = itemsPerPage * (currentPage - 1);
  const lastItemIndex = currentPage === pageByDefault
    ? itemsPerPage
    : itemsPerPage * currentPage;

  const shownItems = items.slice(firstItemIndex, lastItemIndex);
  //  instead, we will make a request to the server from firstItemIndex to lastItemIndex

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };
  // should to send in helpers

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

          <Route
            path="/cart"
            element={<CartPage setIsModalVisible={setIsModalVisible} />} />

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

