import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../src/assets/logo-removebg-preview.png'; // Ajusta la ruta según la estructura de tu proyecto

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHeaderVisible(!isScrollingDown || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    const debounceHandleScroll = debounce(handleScroll, 50);

    window.addEventListener('scroll', debounceHandleScroll);

    return () => window.removeEventListener('scroll', debounceHandleScroll);
  }, [prevScrollPos]);

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <header className={`bg-gradient-to-r from-customized-400 to-customized-800 text-white shadow-lg fixed w-full z-10 top-0 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="City Threads Logo" className="h-16 w-16 mr-4" /> {/* Tamaño aumentado */}
          <h1 className="text-2xl font-semibold">City Threads</h1>
        </div>

        {/* Menú de Navegación */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-customized-200">Inicio</a>
          {/* <a href="/about" className="text-white hover:text-customized-200">Acerca de</a>
          <a href="/services" className="text-white hover:text-customized-200">Servicios</a> */}
          <a href="/contact" className="text-white hover:text-customized-200">Contacto</a>
        </nav>

        {/* Iconos */}
        <nav className="flex items-center space-x-4">
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="shopping cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="menu" color="inherit" className="md:hidden">
            <MenuIcon />
          </IconButton>
        </nav>
      </div>
    </header>
  );
}

export default Header;
