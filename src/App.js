import './App.css';
import React, { useEffect, useState } from 'react';
function App() {

  const options = [
    { value: '1', text: 'USD' },
    { value: '2', text: 'PHP' },
    { value: '3', text: 'GBP' }
  ]

  const [selectedCcy, setSelectedCcy] = useState(options[0].value);
  const handleChange = event => {
    console.log(event.target.value);
    setSelectedCcy(event.target.value);
  };

  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    fetch('api/currency/' + 1)
      .then(response => response.json())
      .then(data => {
        const ccy: Currency = data;
        setCurrency(ccy);
      })
  }, []);

  const getCurrency  => {
    fetch('api/currency/' + 1)
      .then(response => response.json())
      .then(data => {
        const ccy: Currency = data;
        setCurrency(ccy);
      })
  };

  return (
    <div className="App" style={{ margin: 10 }}>
      <div style={{ width: 400, padding: 10 }}>
        <select value={selectedCcy} onChange={handleChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <div style={{ width: 400, padding: 10 }}>
        <table style={{ backgroundColor: 'black', border: 0 }}>
          <tbody>
            <tr>
              <th colSpan={2} style={{ fontSize: 40, color: 'white', backgroundColor: 'black' }}>{currency.name}</th>
            </tr>
           
              <tr style={{ fontSize: 100 }}>
                <td style={{ color: 'black', backgroundColor: 'green' }}>
                  <div>
                    <sub>{currency.bidPrice?.bigFigure}</sub>
                    <span style={{ fontWeight: 'bold' }}>{currency.bidPrice?.dealingPrice}</span>
                    <sup>{currency.bidPrice?.fractionalPips}</sup>
                  </div>
                </td>
                <td style={{ color: 'black', backgroundColor: 'yellow' }}>
                  <div>
                    <sub>{currency.offerPrice?.bigFigure}</sub>
                    <span style={{ fontWeight: 'bold' }}>{currency.offerPrice?.dealingPrice}</span>
                    <sup>{currency.offerPrice?.fractionalPips}</sup>
                  </div>
                </td>
              </tr>
           
            <tr style={{ fontSize: 20, fontWeight: 'bold', color: 'black', backgroundColor: 'gray' }}>
              <td>Bid</td>
              <td>Offer</td>
            </tr></tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
