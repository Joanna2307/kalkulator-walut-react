import React, { useState } from "react";
import Calculate from "../Calculate";
import Result from "../Result";
import { currency } from "../currency";
import StyledTime from "../Time";
import {
  StyledForm,
  Fieldset,
  Legend,
  Select,
  Label,
  Input,
  StyledCaption,
} from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <StyledTime />
        <div>
          <Label>
            Przelicz z:
            <Select
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
            </Select>
          </Label>
        </div>

        <div>
          <Label>
            Przelicz na:
            <Select
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
            </Select>
          </Label>
        </div>

        <Label>
          Kwota:*
          <Input
            type="number"
            name="amount"
            required
            min="0"
            step="0.01"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </Label>

        <div>
          <Calculate />
        </div>

        <div>
          <Result result={result} />
        </div>
      </Fieldset>

      <StyledCaption>* Pole wymagane</StyledCaption>
    </StyledForm>
  );
};

export default Form;
