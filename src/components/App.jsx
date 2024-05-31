import { Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      {/* <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};


export default App;



