// Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import ClothingCard from './ClothingCard';

import one from '../../assets/md-salman-tWOz2_EK5EQ-unsplash.jpg';
import two from '../../assets/alex-haigh-fEt6Wd4t4j0-unsplash.jpg';
import three from '../../assets/justin-buisson-JU5_bUxr5Rg-unsplash.jpg';
import four from '../../assets/ns-37rVmK3jY-c-unsplash.jpg';
import five from '../../assets/milada-vigerova-p8Drpg_duLw-unsplash.jpg';
import six from '../../assets/brandon-webb-GNPCqlUex8U-unsplash.jpg';

function Products() {
  const products = [
    { id: 1, imageSrc: one, name: "Shirt", price: 20.00, description: "Very cool shirt", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 2, imageSrc: two, name: "Better shirt", price: 18.00, description: "Very cool shirt", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 3, imageSrc: three, name: "Sweater", price: 25.00, description: "Very cool sweater", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 4, imageSrc: four, name: "Mint colored Hoodie", price: 70.00, description: "So you keep it fresh", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 5, imageSrc: five, name: "Weird shaped hoodie", price: 10.00, description: "To keep it warm", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 6, imageSrc: six, name: "Really cool hoodie", price: 90.00, description: "Just because hoodies are better", sizes: ["XS", "S", "M", "L", "XL"] }
  ];

  return (
    <main className="px-4 sm:px-8 py-4 sm:py-8">
      <div className="hidden sm:flex sm:mb-8 sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-4 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Products
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="w-full sm:w-auto ">
            <ClothingCard
              imageSrc={product.imageSrc}
              name={product.name}
              price={product.price}
              description={product.description}
              sizes={product.sizes}
              productId={product.id}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;