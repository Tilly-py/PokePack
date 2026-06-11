import Navbar from '../src/components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OpenPackPage from './pages/OpenPackPage';
import CollectionPage from './pages/CollectionPage';
const app = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/open" element={<OpenPackPage image="./src/assets⁄alakazam.png" />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default app;
