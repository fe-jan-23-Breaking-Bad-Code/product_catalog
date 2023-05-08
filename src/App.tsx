import './App.css';
import { 
  Routes,
  Route,
 } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { Navigation } from './components/Navigation';

export const App = () => (
  <main className="App">
    <Navigation />

    <section className='section'>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />
      </Routes>
    </section>
  </main>
);
