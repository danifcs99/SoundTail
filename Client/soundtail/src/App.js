import './App.css';
import {Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login } from './components';

function App() {
  return (
      <div className="h-auto min-w-[680px] bg-blue-400 flex justify-center items-center">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
  );
}

export default App;
