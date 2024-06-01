import { Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};


export default App;



