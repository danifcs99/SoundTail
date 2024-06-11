import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/soundTail-image .png';
import LogoUser from '../assets/img/usuario.png';

const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    navigate('/login');
  };

  return (
        <header className="flex items-center justify-between w-full p-4 md:p-6 bg-white bg-opacity-70 backdrop-blur-md text-gray-800 rounded-lg shadow-md">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-20" />
            <nav className="ml-7">
              <ul className="flex items-center space-x-6">
                <li className="text-lg">
                  <NavLink
                    to="/home"
                    activeClassName="font-semibold text-gray-900"
                    className="hover:text-gray-900"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-lg">
                  <NavLink
                    to="/songs"
                    activeClassName="font-semibold text-gray-900"
                    className="hover:text-gray-900"
                  >
                    Like Canciones
                  </NavLink>
                </li>
                <li className="text-lg">
                  <NavLink
                    to="/contact"
                    activeClassName="font-semibold text-gray-900"
                    className="hover:text-gray-900"
                  >
                    Contacta Con Nosotros
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
      
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img
                src={LogoUser}
                className="w-12 h-12 object-cover rounded-full shadow-md"
                alt="Avatar"
              />
              <p className="text-lg font-semibold text-gray-700 ml-4">{username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-white px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition duration-300"
            >
              Cerrar sesión
            </button>
          </div>
        </header>
      );
}
export default Header;
