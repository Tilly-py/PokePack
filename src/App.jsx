import Navbar from '../src/components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
const app = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <h1 className="text-3xl font-bold bg-zinc-800 text-white p-4">PokePack</h1>
      <p className="text-lg text-gray-700 p-4">Welcome to PokePack, gotta catch 'em all!</p>
    </div>
  );
};

export default app;
