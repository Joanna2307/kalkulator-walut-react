import React from "react";
import "./style.css";
import Result from "../Result";
import Calculate from "../Calculate";

const Form = (props) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walut</legend>
      <p>
        <label className="form__label">
          Przelicz z:{" "}
          <select className="form__select" name="currencyFrom">
            <option value="PLN" selected>
              Złoty polski (PLN)
            </option>
            <option value="USD">Dolar amerykański (USD)</option>
            <option value="GBP">Funt brytyjski (GBP)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </label>

        <label className="form__label">
          Przelicz na:{" "}
          <select className="form__select" name="currencyTo">
            <option value="PLN" selected>
              Złoty polski (PLN)
            </option>
            <option value="USD">Dolar amerykański (USD)</option>
            <option value="GBP">Funt brytyjski (GBP)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </label>

        <label className="form__label">
          Kwota:*{" "}
          <input
            className="form__input"
            type="number"
            name="amount"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <button className="form__button">Konwertuj</button>
      </p>
      <p className="form__result" name="result">
        Kwota po przeliczeniu:
      </p>
    </fieldset>
    <p className="form__caption">* Pole wymagane</p>
  </form>
);
export default Form;
