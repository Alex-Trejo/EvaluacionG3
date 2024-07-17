import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';

import one from '../../assets/md-salman-tWOz2_EK5EQ-unsplash.jpg';
import two from '../../assets/alex-haigh-fEt6Wd4t4j0-unsplash.jpg';
import three from '../../assets/justin-buisson-JU5_bUxr5Rg-unsplash.jpg';
import four from '../../assets/ns-37rVmK3jY-c-unsplash.jpg';
import five from '../../assets/milada-vigerova-p8Drpg_duLw-unsplash.jpg';
import six from '../../assets/brandon-webb-GNPCqlUex8U-unsplash.jpg';

const products = [
  { id: 1, imageSrc: one, name: "Shirt", price: 20.00, description: "Very cool shirt", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 2, imageSrc: two, name: "Better shirt", price: 18.00, description: "Very cool shirt", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 3, imageSrc: three, name: "Sweater", price: 25.00, description: "Very cool sweater", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 4, imageSrc: four, name: "Mint colored Hoodie", price: 70.00, description: "So you keep it fresh", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 5, imageSrc: five, name: "Weird shaped hoodie", price: 10.00, description: "To keep it warm", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 6, imageSrc: six, name: "Really cool hoodie", price: 90.00, description: "Just because hoodies are better", sizes: ["XS", "S", "M", "L", "XL"] }
];

const ProductDetailPage = () => {
  const { productId } = useParams(); // Obtiene el productId de los parámetros de la URL
  const navigate = useNavigate();

  const product = products.find(product => product.id === parseInt(productId));

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { name, price, description, imageSrc, sizes } = product;

  const initialSize = searchParams.get('size');
  const initialSelectedSize = initialSize || sizes[0];

  const [selectedSize, setSelectedSize] = useState(initialSelectedSize);
  const [message, setMessage] = useState('');

  // Busca el producto correspondiente en el array products

  // Si el producto no existe, puedes manejarlo aquí
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Desestructura los datos del producto para acceder a ellos más fácilmente
  const handleSizeChange = (size) => {
    // Actualiza el tamaño seleccionado
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    setMessage('Product purchased successfully!');
    setTimeout(() => {
      setMessage('');
      navigate('/');
    }, 2000); // Redirige después de 2 segundos
  };


  const handleAddToBag = () => {
    setMessage('Product added to bag!');
    setTimeout(() => {
      setMessage('');
      navigate('/');
    }, 2000); // Redirige después de 2 segundos
  };


  // Move the conditional logic outside of the component
  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  



  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-auto m-44">
        <div className="border-solid border-2 border-none shadow-2xl rounded-2xl bg-white flex flex-col sm:flex-row">
          <div className="flex-none w-full sm:w-48 relative">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-slate-900 mb-2">{name}</h1>
                <div className="text-lg font-semibold text-slate-500">${price.toFixed(2)}</div>
                <div className="text-sm font-medium text-slate-700 mt-2">In stock</div>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <div className="space-x-2 flex text-sm">
                  {sizes.map((size) => (
                    <label key={size}>
                      <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value={size}
                        checked={selectedSize === size}
                        onChange={() => handleSizeChange(size)}
                      />
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 ${selectedSize === size ? 'peer-checked:font-semibold peer-checked:bg-customized-900 peer-checked:text-white' : ''}`}>
                        {size}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="flex-auto h-10 px-6 font-semibold rounded-md bg-customized-900 text-white" type="button" onClick={handleBuyNow}>
                Buy now
              </button>
              <button className="flex-auto h-10 px-6 font-semibold rounded-md border border-slate-200 text-customized-900" type="button" onClick={handleAddToBag}>
                Add to bag
              </button>
              <button className="flex-none w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700 mt-4">{description}</p>
          </form>
        </div>
        {message && (
          <div className="fixed top-13 right-10 bg-stone-700 text-black p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md bg-opacity-90">
            {message}
          </div>
        )}
      </main>
      <Footer /> {/* Agrega el footer al final de la página */}
    </div>
  );
};

export default ProductDetailPage;