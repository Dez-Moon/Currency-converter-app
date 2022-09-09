import React from "react";
import arrowImg from "../../../../assets/icons/arrow-bottom.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect, { useOutside } from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  deleteWindowsWithCurrencyAC,
  InitialStateType,
  setListOfCurrenciesOpenAC,
  setValuesWindowsWithCurrencyTC,
} from "../../../../store/currency-reducer";

type PropsType = {
  index: number;
};
const ConversionBlock = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const inputMargin = `${String(
    55 -
      windowsWithCurrency[props.index].value.length *
        (windowsWithCurrency[props.index].selectedCurrency.currency === "CZK"
          ? 5
          : 4)
  )}px`;
  const inputStyle = {
    right: inputMargin,
  };
  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];
  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className='conversionBlock'>
      <div
        className='selectedCurrency'
        onClick={async () => {
          setTimeout(() => {
            dispatch(setListOfCurrenciesOpenAC({ index: props.index }));
          }, 0);
        }}
      >
        <div className='flagAndAbbreviation'>
          <img src={currentCurrency.flag} />
          <div>{currentCurrency.currency}</div>
        </div>
        <div>{currentCurrency.name}</div>
        <img
          src={arrowImg}
          className={
            !windowsWithCurrency[props.index].listOfCurrenciesOpen
              ? "arrowBottom"
              : "arrowTop"
          }
        />
      </div>
      <CurrencySelect index={props.index} ref={ref} isShow={isShow} />
      <div className={"input"}>
        <input
          min='0'
          value={windowsWithCurrency[props.index].value}
          onChange={(e: any) => {
            // setValuesWindowsWithCurrencyTC(
            //   windowsWithCurrency,
            //   e.target.value,
            //   props.index
            // )(dispatch);
            setIsShow(!isShow);
          }}
        />
        {windowsWithCurrency[props.index].value && (
          <div style={inputStyle}>
            {windowsWithCurrency[props.index].selectedCurrency.symbol}
          </div>
        )}
      </div>
      {windowsWithCurrency.length > 2 && (
        <img
          src={deleteImg}
          className='deleteBtn'
          onClick={() => {
            dispatch(deleteWindowsWithCurrencyAC({ index: props.index }));
          }}
        />
      )}
    </div>
  );
});

export default ConversionBlock;
