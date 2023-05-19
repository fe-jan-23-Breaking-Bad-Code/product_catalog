import styles from './App.module.scss';

import React, { useEffect } from 'react';
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
import { OrdersPage } from './pages/OrdersPage';
import { useAppSelector } from './hooks';
import {
  getCart,
  getFavourites,
  saveCart,
  saveFavourites,
} from './API/FetchUsers';
import { useDispatch } from 'react-redux';
import { actions as favouritesActions } from './app/reducers/favourites';
import { actions as cartActions } from './app/reducers/cart';
import { OrderDetailsPage } from './pages/OrderDetailsPage';


export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { googleId } = useAppSelector(store => store.user);
  const cart = useAppSelector(store => store.cart);
  const favourites = useAppSelector(store => store.favourites);
  const dispatch = useDispatch();
  const [isCartSynced, setIsCartSynced] = useState(false);
  const [isFavouritesSynced, setIsFavouritesSynced] = useState(false);

  useEffect(() => {
    if (!googleId || !isCartSynced) {
      return;
    }

    saveCart(googleId, cart);
  }, [cart]);

  useEffect(() => {
    if (!googleId || !isFavouritesSynced) {
      return;
    }

    saveFavourites(googleId, favourites);
  }, [favourites]);

  useEffect(() => {
    if (!googleId) {
      return;
    }

    getFavourites(googleId)
      .then(data => {
        setIsFavouritesSynced(true);
        dispatch(favouritesActions.set(data));
      });

    getCart(googleId)
      .then(data => {
        setIsCartSynced(true);
        dispatch(cartActions.set(data));
      });

  }, [googleId]);

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

          <Route path="/accessories" element={<AccessoriesPage />} />

          <Route path='/orders' element={<OrdersPage />} />

          <Route path='/orders/:orderId' element={<OrderDetailsPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="/page-not-found" element={<NotFoundPage />} />

          <Route path="/favourites" element={<FavouritesPage />} />

          <Route
            path="/login"
            element={
              <AuthenticationPage />
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
