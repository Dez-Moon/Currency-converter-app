import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorAC, InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  useEffect(() => {
    setTimeout(() => {
      dispatch(setErrorAC({ error: "" }));
    }, 4000);
  }, [errors]);
  return (
    <CSSTransition
      in={errors.length !== 0}
      unmountOnExit
      timeout={200}
      classNames='error'
    >
      <div className={"errors"}>
        {errors.map((error, index) => (
          <div>{error}</div>
        ))}
        <button
          onClick={() => {
            dispatch(deleteErrorAC({ index }));
          }}
        >
          ок
        </button>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
