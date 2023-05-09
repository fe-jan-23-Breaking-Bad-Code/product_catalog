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

export const App = () => (
  <div className="App">
    

    <main className='section'>
      <Header />
      
      <PhoneCard />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </main>
  </div>
);
