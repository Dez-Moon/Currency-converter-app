import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWindowsWithCurrencyTC,
  InitialStateType,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import styles from "./styles.module.scss";
function Tooltip(props: any) {
  const tooltipRef = useRef(null);

  useOutsideClick(tooltipRef, props.onClose, props.opened);

  if (!props.opened) return null;

  return (
    <div ref={tooltipRef} className='tooltip'>
      <div>Some Text</div>
    </div>
  );
}
const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen, error } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  return (
    <div className={styles.conversionComponent}>
      <div>=</div>
      <Tooltip onClose={onClose} opened={opened}
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
          }
        }}
      >
        <div className={styles.addCurrency}>
          <div>Добавить валюту</div>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.conversionBlockContainer}>
        {windowsWithCurrency.map((el: any, index: number) => (
          <ConversionBlock index={index} />
        ))}
      </div>
      {error && <ErrorHandler />}
    </div>
  );
};

export default ConversionComponent;