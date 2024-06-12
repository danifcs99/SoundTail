// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/" className="hover:underline">Like Canciones</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <ul>
            <li><a href="danielsantaellarodriguez1999@gmail.com" className="hover:underline">danielsantaellarodriguez1999@gmail.com</a></li>
            <li><a href="tel:+675115766" className="hover:underline">+34 675115766</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Redes Sociales</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.585 0 0 .585 0 1.308v21.385C0 23.415.585 24 1.325 24h11.495v-9.294H9.847V11.41h2.973V8.723c0-2.937 1.79-4.543 4.406-4.543 1.253 0 2.558.187 2.558.187v2.82h-1.44c-1.42 0-1.86.879-1.86 1.775v2.199h3.293l-.525 3.295h-2.769V24h5.436C23.415 24 24 23.415 24 22.693V1.308C24 .585 23.415 0 22.675 0z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.394-1.833.656-2.825.775a4.95 4.95 0 002.163-2.723c-.95.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.72 0-4.924 2.204-4.924 4.917 0 .39.043.765.127 1.125C7.728 8.83 4.1 6.845 1.67 3.75a4.822 4.822 0 00-.666 2.473c0 1.708.87 3.216 2.19 4.098a4.903 4.903 0 01-2.228-.616c-.053 1.527.997 2.965 2.444 3.292a4.93 4.93 0 01-2.212.084c.623 1.947 2.445 3.364 4.604 3.404a9.865 9.865 0 01-6.102 2.103c-.395 0-.787-.023-1.175-.067A13.888 13.888 0 008.29 21c9.057 0 14.01-7.496 14.01-13.986 0-.215 0-.43-.016-.643A10.025 10.025 0 0024 4.557a9.856 9.856 0 01-2.046 2.012z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.053.07 5.775.129 4.663.393 3.692 1.364c-.971.971-1.235 2.083-1.293 3.361-.058 1.279-.07 1.688-.07 4.936s.012 3.657.07 4.936c.058 1.278.322 2.39 1.293 3.361.971.971 2.083 1.235 3.361 1.293 1.279.058 1.688.07 4.936.07s3.657-.012 4.936-.07c1.278-.058 2.39-.322 3.361-1.293.971-.971 1.235-2.083 1.293-3.361.058-1.279.07-1.688.07-4.936s-.012-3.657-.07-4.936c-.058-1.278-.322-2.39-1.293-3.361-.971-.971-2.083-1.235-3.361-1.293-1.279-.058-1.688-.07-4.936-.07zM12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.837 3.837 0 110-7.674 3.837 3.837 0 010 7.674zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
