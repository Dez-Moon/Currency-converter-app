import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateType, setErrorAC } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import styles from "./styles.module.scss";

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const { error } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  useEffect(() => {
    setTimeout(() => {
      dispatch(setErrorAC({ error: "" }));
    }, 3000);
  }, []);
  return (
    <CSSTransition
      in={selectOpen[props.index]}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className={styles.error}>
        <div>{error}</div>
        <button
          onClick={() => {
            dispatch(setErrorAC({ error: "" }));
          }}
        >
          ок
        </button>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
