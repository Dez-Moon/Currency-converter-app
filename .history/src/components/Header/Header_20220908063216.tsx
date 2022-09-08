import React from "react";
import { useSelector } from "react-redux";
import { InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";

const Header = () => {
  const { currency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const array: Array<CurrencyType> = [];
  currency.forEach((el) => {
    if (el.currency === ("USD" || "EUR")) {
      array.push(el);
    }
  });
  return (
    <div className={styles.header}>
      {array.map((el) => (
        <div>
          <div>{el.currency}</div>
          <div className={styles.rates}>
            <div>{el.rateBuy?.toFixed(2)}</div>
            <div>{el.rateSell?.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
