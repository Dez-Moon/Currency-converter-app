import React, { useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import arrowBottomImg from "../../assets/icons/arrow-bottom.png";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [value1, setValue1] = useState("");
  const [selectedValue1, setSelectedValue1] = useState(0);
  const [value2, setValue2] = useState("");
  return (
    <div className={styles.conversionComponent}>
      <div className={styles.flexContainer}>
        <div className={styles.selectedCurrency}>
          <img src={props.currency[selectedValue1].flag} />
          <div>{props.currency[selectedValue1].currency}</div>
          <img src={arrowBottomImg} className={styles.arrowImg} />
        </div>
        <input
          value={value1}
          onChange={(e: any) => {
            setValue1(e.target.value);
            setValue2(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={value2}
          onChange={(e: any) => {
            setValue2(e.target.value);
          }}
        />
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
