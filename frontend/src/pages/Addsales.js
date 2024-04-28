import React, { useState } from 'react';

const Addsales = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [saleAmount, setSaleAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      productName,
      quantity: parseInt(quantity, 10),
      saleAmount: parseInt(saleAmount, 10),
    };

    // Send data to the server to add a new sale
    fetch('http://localhost:4000/addsales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((newSale) => {
        console.log('New sale added:', newSale);
        // Optionally, you can update the UI or reset form fields here
        setProductName('');
        setQuantity('');
        setSaleAmount('');
      })
      .catch((error) => console.error('Error adding sale:', error));
  };

  return (
    <div className="container">
      <div className="col">
        <div className="card">
          <div className="card-body px-5">
            <h4 className="card-title text-center mt-3 fw-bold">ADD SALE ENTRY</h4>
            <form onSubmit={handleSubmit}>
              <label htmlFor="productName">Product Name:</label>
              <input
                id='productName'
                type="text"
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label htmlFor="productName">Quantity:</label>
              <input
                id='quantity'
                type="number"
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label htmlFor="productName">Amount:</label>
              <input
                id='amount'
                type="number"
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={saleAmount}
                onChange={(e) => setSaleAmount(e.target.value)}
              />
              <div className="mt-3 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addsales;
