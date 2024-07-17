// Ejemplo de uso de estado para el modal
import React, { useState } from 'react';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="main" className="p-4">
      <h1 className="text-2xl font-bold">Welcome to My City Threads</h1>
      <p className="mt-2">Explore a world of style and comfort at My City Threads. 
        Discover premium clothing curated for your everyday elegance. From casual essentials to statement pieces, 
        we offer the finest selection to elevate your wardrobe. 
        Experience fashion that speaks to your city lifestyle.</p>
      <div className="flex items-center justify-center mt-5  mb--40">
  <button 
    className="h-10 px-6 font-semibold rounded-md bg-customized-900 text-white mr-2 flex items-center justify-center"
    onClick={() => setShowModal(true)}
  >
    Show Modal
  </button>
</div>

{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div className="bg-white p-4 rounded relative z-50">
      <h2 className="text-xl font-bold">City Threads</h2>
      <p>Welcome</p>
      <div className="flex items-center justify-center mt-5">
        <button 
          className="h-10 px-6 font-semibold rounded-md bg-customized-900 text-white"
          onClick={() => setShowModal(false)}
        >
          Close Modal
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default MainContent;
