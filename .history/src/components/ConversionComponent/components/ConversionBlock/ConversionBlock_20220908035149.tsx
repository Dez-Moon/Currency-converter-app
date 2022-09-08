import React, { useEffect, useState } from "react";
import { CurrencyType, WindowsWithCurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  deleteWindowsWithCurrencyAC,
  InitialStateType,
  setValuesWindowsWithCurrencyTC,
} from "../../../../store/currency-reducer";

type PropsType = {
  index: number;
};
const ConversionBlock = (props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const [selectOpen, setSelectOpen] = useState(false);
  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];
  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <div className='flagAndAbbreviation'>
          <img src={currentCurrency.flag} />
          <div>{currentCurrency.currency}</div>
        </div>
        <div>{currentCurrency.name}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
        )}
        <CurrencySelect selectOpen={selectOpen} index={props.index} />
      </div>
      <input
        min='0'
        value={windowsWithCurrency[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValuesWindowsWithCurrencyTC(
            windowsWithCurrency,
            e.target.value,
            props.index
          )(dispatch);
        }}
      />
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
};

export default ConversionBlock;
