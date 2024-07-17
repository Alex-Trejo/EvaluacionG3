import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClothingCard({ imageSrc, name, price, description, productId, sizes }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]); // Estado inicial con la primera talla seleccionada

  const handleSizeChange = (size, e) => {
    e.stopPropagation(); // Evitar la propagación del evento hacia arriba
    setSelectedSize(size);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation(); // Evitar la propagación del evento hacia arriba
    // Aquí puedes añadir la lógica para "Comprar ahora"
    // Utilizamos el componente Link para navegar a la página de detalles del producto
  };

  const handleAddToBagClick = (e) => {
    e.stopPropagation(); // Evitar la propagación del evento hacia arriba
    // Aquí puedes añadir la lógica para "Agregar al carrito"
  };


  return (
    <div className="w-full sm:max-w-md mx-auto mb-8">
      <div className="border-solid border-2 border-none shadow-2xl rounded-2xl bg-white overflow-hidden">
        <div className="relative w-full h-64 sm:h-80">
          <img src={imageSrc} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-t-lg" loading="lazy" />
        </div>
        <div className="p-4 sm:p-6">
          <h1 className="text-lg font-semibold text-slate-900 mb-2">{name}</h1>
          <div className="text-lg font-semibold text-slate-500">${price.toFixed(2)}</div>
          <div className="text-sm font-medium text-slate-700 mt-2">In stock</div>
          <div className="flex justify-center items-center mt-4"> {/* Centrar los tamaños horizontal y verticalmente */}
            <div className="flex space-x-2">
              {sizes.map(size => (
                <label key={size} className="flex items-center">
                  <input
                    type="radio"
                    className="sr-only peer"
                    name={`size-${productId}`}
                    value={size}
                    checked={selectedSize === size}
                    onChange={(e) => handleSizeChange(size, e)}
                  />
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-700 border border-slate-200 cursor-pointer peer-checked:font-semibold peer-checked:bg-customized-900 peer-checked:text-white ${selectedSize === size ? 'peer-checked:font-semibold peer-checked:bg-customized-900 peer-checked:text-white' : ''}`}>
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4"></div> {/* Espacio vacío */}
          <div className="flex justify-center mt-4">
            <Link
              to={`/product/${productId}?size=${selectedSize}`}
              className="h-10 px-6 font-semibold rounded-md bg-customized-900 text-white mr-2 flex items-center justify-center"
              onClick={handleBuyNowClick}
            >
              Buy now
            </Link>
            <Link
              to={`/product/${productId}?size=${selectedSize}`}
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-customized-900 flex items-center justify-center"
              onClick={handleAddToBagClick}
            >
              Add to bag
            </Link>
            <button className="flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 ml-2" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700 mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ClothingCard;