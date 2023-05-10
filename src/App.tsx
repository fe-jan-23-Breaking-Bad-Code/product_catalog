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
import { PhoneCard } from './components/Card';
import { useState } from 'react';
import { Pagination } from './components/Pagination';
import { CartItem } from './components/Cart/CartItem/CartItem';

export const App = () => {
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

  return (
    <div className="App">

    <main className='section'>
      <Header />
      
      <PhoneCard />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Pagination
        total={items.length}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={selectPage}
      />
      <CartItem />

      <Footer />
    </main>

    <ul>
      {shownItems.map(item => (
        <li
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
  )
}