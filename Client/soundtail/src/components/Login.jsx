import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://soundtail.onrender.com/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('username', loginData.name);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        toast.success('Inicio de sesión exitoso');
        navigate('/home');
      } else {
        const errorData = await response.json();
        toast.error('Error al iniciar sesión');
        console.error('Error al iniciar sesión:', errorData);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    } catch (error) {
      toast.error('Error al procesar la solicitud');
      console.error('Error al procesar la solicitud:', error);
      // Aquí puedes manejar errores de red u otros errores imprevistos
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://soundtail.onrender.com/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });
  
      if (response.ok) {
        const data = await response.json();
        toast.success('Usuario creado exitosamente, ahora Inicia Sesion' );
        console.log('Usuario creado exitosamente:', data);
        setShowLoginForm(true);
      } else {
        const errorData = await response.json();
        toast.error('Error al crear el usuario');
        console.error('Error al crear el usuario:', errorData);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    } catch (error) {
      toast.error('Error al procesar la solicitud');
      console.error('Error al procesar la solicitud:', error);
      // Aquí puedes manejar errores de red u otros errores imprevistos
    }
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"></div>
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-2xl backdrop-blur-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">{showLoginForm ? "Iniciar Sesión" : "Registrarse"}</h2>

        {showLoginForm ? (
          <form onSubmit={handleLoginSubmit} className="w-full flex flex-col items-center mb-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={loginData.name}
              onChange={handleLoginChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={loginData.password}
              onChange={handleLoginChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full py-2 text-white font-semibold bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={registerData.name}
              onChange={handleRegisterChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={registerData.email}
              onChange={handleRegisterChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={registerData.password}
              onChange={handleRegisterChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full py-2 text-white font-semibold bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            >
              Registrarse
            </button>
          </form>
        )}

        <button
          onClick={toggleForm}
          className="text-sm text-gray-600 mt-4 hover:underline focus:outline-none"
        >
          {showLoginForm ? "¿No tienes una cuenta? Regístrate aquí" : "¿Ya tienes una cuenta? Inicia sesión aquí"}
        </button>
      </div>
    </div>
  );
}

export default Login;

