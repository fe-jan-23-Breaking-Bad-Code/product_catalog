import './App.css';
import React from 'react';
import { 
  Routes,
  Route,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { Header } from './components/Header';
import Footer from './components/Footer/Footer';

export const App = () => (
  <div className="App">
    

    <main className='section'>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />
      </Routes>

      <Footer />
    </main>
  </div>
);
