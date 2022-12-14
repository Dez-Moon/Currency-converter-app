import "./styles.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteErrorAC } from "../../../store/currency-reducer";

type PropsType = {
  error: { error: string; index: string };
  style: { top?: string; bottom?: string };
};
const Error = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteErrorAC({ index: props.error.index }));
    }, 1500);
  });
  // event functions
  const deleteError = () => {
    dispatch(deleteErrorAC({ index: props.error.index }));
  };
  return (
    <div className='error' style={props.style}>
      <div>{props.error.error}</div>
      <button onClick={deleteError}>ок</button>
    </div>
  );
});

export default Error;
