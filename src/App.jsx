import Navbar from '../src/components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OpenPackPage from './pages/OpenPackPage';
const app = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/open" element={<OpenPackPage image="./src/assets/pokemon-card-back.png" />} />
      </Routes>
    </div>
  );
};

export default app;
