import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  addErrorAC,
  InitialStateType,
  setListOfCurrenciesOpenTC,
  setSelectedCurrencyTC,
} from "../../../../store/currency-reducer";
import { checkSelectedCurrencies } from "../../../../functions/functions";
import React from "react";

type PropsType = {
  index: number;
};

const CurrencySelect = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <CSSTransition
      in={windowsWithCurrency[props.index].listOfCurrenciesOpen}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {currency.map((el: CurrencyType, index: number) => (
          <div
            className='currency'
            key={el.code}
            onClick={(e: any) => {
              //   if (
              //     checkSelectedCurrencies(
              //       windowsWithCurrency,
              //       el.currency,
              //       windowsWithCurrency[props.index].selectedCurrency.currency
              //     )
              //   ) {
              setSelectedCurrencyTC(
                windowsWithCurrency,
                currency,
                props.index,
                index,
                el.currency
              )(dispatch);
              //     setListOfCurrenciesOpenTC(
              //       windowsWithCurrency,
              //       props.index
              //     )(dispatch);
              //   } else {
              //     dispatch(addErrorAC({ error: "Валюта уже выбрана" }));
              //   }
            }}
          >
            <img src={el.flag} />
            <div>{el.currency}</div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
});

export default CurrencySelect;
