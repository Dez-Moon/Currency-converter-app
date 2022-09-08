import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import currencyBase from "./currency/currency";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [currency, setCurrency] = useState(null) as any;
  if (currency) {
    debugger;
  }
  useEffect(() => {
    const newArray: Array<CurrencyType> = [];
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currencyRes: CurrencyResponseType) => {
        if (currencyBase.has(String(currencyRes.currencyCodeA))) {
          let currencyCopy = {
            ...currencyBase.get(String(currencyRes.currencyCodeA)),
          } as CurrencyType;
          if (currencyRes.rateCross) {
            currencyCopy.rateCross = currencyRes.rateCross;
          } else {
            currencyCopy.rateBuy = currencyRes.rateBuy;
            currencyCopy.rateSell = currencyRes.rateSell;
          }
          newArray.push(currencyCopy);
        }
      });
      setCurrency(newArray);
    });
  });
  return (
    <div className='App'>
      <Header />
      {currency && currency.map((currency: CurrencyType) => <div>1</div>)}
    </div>
  );
}

export default App;
