// src/components/TableData.jsx
import React from 'react';

const TableData = ({ coins, onSearch, onSortMarketCap, onSortPercentage, searchValue }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-4 w-11/12">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search By Name or Symbol"
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded-md w-1/3"
        />

        {/* Sorting buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onSortMarketCap}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sort by Market Cap
          </button>
          <button
            onClick={onSortPercentage}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sort by Percentage
          </button>
        </div>
      </div>

      {/* Table content */}
      <div className="flex flex-col space-y-4 w-11/12" >
        {coins.map((coin) => (
          <div key={coin.id} className="bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between text-white">
            {/* Image */}
            <img src={coin.image} alt={coin.name} className="w-16 h-16 rounded-full object-cover" />

            {/* Name */}
            <div className="mx-4 flex flex-col items-start">
              <p className="text-lg font-semibold">{coin.name}</p>
            </div>

            {/* Symbol */}
            <div className="mx-4 flex flex-col items-start">
              <p className="text-sm text-gray-400 uppercase">{coin.symbol}</p>
            </div>

            {/* Current Price */}
            <div className="text-xl font-bold text-green-500 mx-4 text-center">
              <p>${coin.current_price.toFixed(2)}</p>
            </div>

            {/* Valuation */}
            <div className="text-md font-medium text-gray-300 mx-4 text-center">
              <p>${coin.total_volume.toLocaleString()}</p>
              {console.log(coin.total_volume)}
              {console.log(coin)}
            </div>

            {/* Formatted Percentage */}
            <div className="text-md mx-4 text-center">
              <p className={`${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>

            {/* Market Cap */}
            <div className="text-sm text-gray-400 mx-4 text-center">
              <p>Market Cap: <span className="font-semibold text-gray-200">${coin.market_cap.toLocaleString()}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableData;
