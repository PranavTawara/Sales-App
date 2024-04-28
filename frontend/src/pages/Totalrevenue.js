// Totalrevenue.js

import React, { useState, useEffect } from 'react';

const Totalrevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch total revenue data from the server
    fetch('http://localhost:4000/totalrevenue')
      .then((response) => response.json())
      .then((data) => {
        setTotalRevenue(data.totalRevenue);
      })
      .catch((error) => console.error('Error fetching total revenue:', error));
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '10px' }}>
        TODAY'S REVENUE IS {totalRevenue}
      </h2>
    </div>
  );
}

export default Totalrevenue;
