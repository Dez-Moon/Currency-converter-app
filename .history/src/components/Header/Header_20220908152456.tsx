import React from "react";
import { useSelector } from "react-redux";
import {
  InitialStateType,
  setSelectOpenTC,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";

const Header = () => {
  const { currency, selectOpen } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const array: Array<CurrencyType> = [];
  currency.forEach((el) => {
    if (el.currency === "USD" || el.currency === "EUR") {
      array.push(el);
    }
  });
  return (
    <div className={styles.header} onClick={() => setSelectOpenTC()}>
      <h1>Конвертер валют</h1>
      <div className={styles.currencyRates}>
        {array.map((el) => (
          <div className={styles.currency}>
            <div className={styles.currencyName}>
              <div>{el.currency}</div>
              <img src={el.flag} />
            </div>
            <div className={styles.rates}>
              <div>
                <div className={styles.value}>
                  <div>Покупка</div>
                  <div>{el.rateBuy?.toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div className={styles.value}>
                  <div>Продажа</div>
                  <div>{el.rateSell?.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
