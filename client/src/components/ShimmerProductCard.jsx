
import React from 'react';

const ShimmerProductCard = () => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-xl animate-pulse">
      <div className="w-full h-48 bg-gray-700"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        <div className="h-8 bg-gray-700 rounded w-full mt-4"></div>
      </div>
    </div>
  );
};

export default ShimmerProductCard;
