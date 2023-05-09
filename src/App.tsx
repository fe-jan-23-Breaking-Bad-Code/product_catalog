import './App.css';
import { 
  Routes,
  Route,
 } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => (
  <div className="App">
    <Navigation />

    <main className='section'>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones" element={<PhonesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);
