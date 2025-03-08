import React, { useState } from "react";
import Calculate from "../Calculate";
import Result from "../Result";
import StyledTime from "../Time";
import {
  StyledForm,
  Fieldset,
  Legend,
  Select,
  Label,
  Input,
  StyledCaption,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";
import { formatDate } from "./formatDate";

const Form = () => {
  const ratesData = useRatesData();

  const [fromCurrency, setFromCurrency] = useState("PLN");
  const [toCurrency, setToCurrency] = useState("USD");

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  if (ratesData.state === "loading") {
    return (
      <StyledForm>
        <Fieldset>
          <Legend>Kalkulator walut</Legend>
          <Loading>Ładowanie... Poczekaj chwilę.</Loading>
        </Fieldset>
      </StyledForm>
    );
  }

  if (ratesData.state === "error") {
    return (
      <StyledForm>
        <Fieldset>
          <Legend>Kalkulator walut</Legend>
          <Failure>Błąd ładowania danych. Spróbuj ponownie później.</Failure>
        </Fieldset>
      </StyledForm>
    );
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, fromCurrency, toCurrency);
  };

  const calculateResult = (amount, fromCurrency, toCurrency) => {
    const fromRate = ratesData.rates[fromCurrency]?.value || 1;
    const toRate = ratesData.rates[toCurrency]?.value || 1;

    const calculatedResult = (amount * toRate) / fromRate;
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <StyledTime>{formatDate(ratesData.lastUpdated)}</StyledTime>

        <div>
          <Label>
            Przelicz z:
            <Select
              name="currencyFrom"
              value={fromCurrency}
              onChange={(event) => setFromCurrency(event.target.value)}
            >
              {ratesData.rates &&
                Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
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
              onChange={(event) => setToCurrency(event.target.value)}
            >
              {ratesData.rates &&
                Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
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
