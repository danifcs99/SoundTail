import './App.css';
import {Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login } from './components';
import LikedSongsPage from './components/LikedSongsPage';

function App() {
  return (
      <div className="h-auto min-w-[680px] bg-blue-400 flex justify-center items-center">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/songs" element={<LikedSongsPage />} />
        </Routes>
      </div>
  );
}

export default App;
