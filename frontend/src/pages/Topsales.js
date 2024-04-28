import React, { useState, useEffect } from 'react';
import './Topsales.css';

const Topsales = () => {
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    // Fetch top sales data from the server
    fetch('http://localhost:4000/topsales')
      .then((response) => response.json())
      .then((data) => {
        // Sort the data based on the calculated sale amount
        const sortedData = data.sort((a, b) => (a.quantity * a.saleAmount) < (b.quantity * b.saleAmount) ? 1 : -1);
        setTopSales(sortedData);
      })
      .catch((error) => console.error('Error fetching top sales:', error));
  }, []);

  // Function to generate a random sales ID
  const generateSalesId = () => {
    const randomCharCode = Math.floor(65 + Math.random() * 26);
    const randomCapitalLetter = String.fromCharCode(randomCharCode);
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return randomCapitalLetter + randomNumber;
  };

  return (
    <div className="container table">
      <h3>TOP 5 SALES</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Sales Id:</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSales.slice(0, 5).map((sale, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{generateSalesId()}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>{sale.saleAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Topsales;
