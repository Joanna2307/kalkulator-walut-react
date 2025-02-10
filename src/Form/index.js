import React, { useState } from "react";
import "./style.css";
import Calculate from "../Calculate";
import Result from "../Result";
import { currency } from "../currency";

const Form = () => {
  const [fromCurrency, setFromCurrency] = useState(currency[0].rate);
  const [toCurrency, setToCurrency] = useState(currency[0].rate);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, fromCurrency, toCurrency);
  };

  const calculateResult = (amount, fromCurrency, toCurrency) => {
    const calculatedResult = (amount / fromCurrency) * toCurrency;
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>

        <div>
          <label className="form__label">
            Przelicz z:
            <select
              className="form__select"
              name="currencyFrom"
              value={fromCurrency}
              onChange={(event) =>
                setFromCurrency(parseFloat(event.target.value))
              }
            >
              {currency.map((item) => (
                <option key={item.code || item.rate} value={item.rate}>
                  {item.name} ({item.code})
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="form__label">
            Przelicz na:
            <select
              className="form__select"
              name="currencyTo"
              value={toCurrency}
              onChange={(event) =>
                setToCurrency(parseFloat(event.target.value))
              }
            >
              {currency.map((item) => (
                <option key={item.code || item.rate} value={item.rate}>
                  {item.name} ({item.code})
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="form__label">
            Kwota:*{" "}
            <input
              className="form__input"
              type="number"
              name="amount"
              required
              min="0"
              step="0.01"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </div>

        <div>
          <Calculate />
        </div>

        <div className="form__result" name="result">
          <Result result={result} />
        </div>
      </fieldset>

      <p className="form__caption">* Pole wymagane</p>
    </form>
  );
};

export default Form;
