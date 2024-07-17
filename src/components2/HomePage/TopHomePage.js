import React from 'react';

// Importa la imagen que deseas utilizar como fondo
import backgroundImage from '../../assets/head.png'; // Ajusta la ruta según tu estructura de archivos

export default function TopHomePage() {
  return (
    <div className="bg-white relative">
      <div className="relative px-6 pt-14 lg:px-8">
        {/* Fondo de imagen */}
        <div
          className="absolute inset-1 bg-black bg-opacity-65"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: '0.5', // Ajusta la opacidad del fondo
            zIndex: '20', // Asegura que el fondo esté detrás del contenido principal
            top: '130px', // Ajusta la posición del fondo
          }}
        />
        {/* Contenido principal */}
        <div className="relative z-40 max-w-200 justify-end py-20 sm:py-32 lg:py-40 text-white">
          {/* Etiqueta y texto */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Clothing Shop.
            </div>
          </div>
          <div className='text-center sm:text-end'>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-black z-index">
              The best quality in clothes just for you
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
