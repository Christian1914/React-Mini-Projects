import React, { useState, useEffect } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([
    "EUR",
    "USD",
    "GBP",
    "JPY",
    "BGN",
  ]);

  useEffect(() => {
    if (amount !== "" && !isNaN(amount) && fromCurrency !== toCurrency) {
      fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          setConvertedAmount(data.rates[toCurrency]);
        });
    } else {
      setConvertedAmount(0);
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Type in some number"
      />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      to
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div>
        Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
      </div>
    </div>
  );
}

export default CurrencyConverter;
