// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Market_Api } from './utils';
import TableData from './TableData';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await Market_Api();
      setData(result);
      setSortedData(result); // Set the default sorted data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    const filteredData = data.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedData(filteredData);
  };

  const handleSortByMarketCap = () => {
    const sorted = [...sortedData].sort((a, b) => b.market_cap - a.market_cap);
    setSortedData(sorted);
  };

  const handleSortByPercentage = () => {
    const sorted = [...sortedData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    setSortedData(sorted);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableData
          coins={sortedData}
          onSearch={handleSearch}
          onSortMarketCap={handleSortByMarketCap}
          onSortPercentage={handleSortByPercentage}
          searchValue={search}
        />
      )}
    </div>
  );
};

export default Home;
