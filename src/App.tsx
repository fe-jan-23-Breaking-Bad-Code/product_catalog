import styles from './App.module.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { SuccessModal } from './components/SuccessModal';
import { CartPage } from './pages/CartPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './pages/AccesoriesPage/AccesoriesPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { AuthenticationPage } from './pages/AuthenticationPage';


export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.app}>
      <main
        className="section"
        style={{ display: 'grid' }}
      >


        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/phones" element={<PhonesPage />} />

          <Route path="/tablets" element={<TabletsPage />} />

          <Route path="/accesories" element={<AccessoriesPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="/page-not-found" element={<NotFoundPage />} />

          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="/registration" element={
            <AuthenticationPage
              title={'Registration'}
              typeSign={'Sign Up'}
              description={'Already have account? Sign In'}
              typeToAuth={'login'}
            />
          }
          />

          <Route path="/login" element={
            <AuthenticationPage
              title={'Login'}
              typeSign={'Sign In'}
              description={'Do not have an account? Sign Up'}
              typeToAuth={'registration'}
            />
          }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {isModalVisible && <SuccessModal onClose={handleCloseModal} />}

      </main>

      <Footer />
    </div>
  );
};
