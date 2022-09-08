import React, { useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.css";

type PropsType = {
  currency: Array<CurrencyType>;
};
const ConversionComponent = (props: PropsType) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <div className={styles.conversionComponent}>
      <div>
        <input
          value={value1}
          onChange={(e: any) => {
            setValue1;
          }}
        />
        <select>
          {props.currency &&
            props.currency.map((currency: CurrencyType) => (
              <option value={currency.name}>{currency.name}</option>
            ))}
        </select>
      </div>
      <div>
        <input />
        <select>
          {props.currency &&
            props.currency.map((currency: CurrencyType) => (
              <option value={currency.name}>{currency.name}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ConversionComponent;
