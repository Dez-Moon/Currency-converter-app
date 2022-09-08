import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { ValuesType } from "../../ConversionComponent";

type PropsType = {
  currency: Array<CurrencyType>;
  index: number;
  values: ValuesType;
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
};
const ConversionBlock = React.memo((props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.index);

  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  useEffect(() => {
    const newArray = props.values.slice();
    if (props.currency[selectedValue].rateBuy) {
      newArray[props.index].ratio = Number(
        props.currency[selectedValue].rateBuy
      );
    } else if (props.currency[selectedValue].rateCross) {
      newArray[props.index].ratio = Number(
        props.currency[selectedValue].rateCross
      );
    } else {
      newArray[props.index].ratio = 1;
    }
    props.setValues(newArray);
  }, [selectedValue]);
  if (!props.currency) {
    return <div></div>;
  }
  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <img src={props.currency[selectedValue].flag} />
        <div>{props.currency[selectedValue].currency}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
        )}
        <CurrencySelect
          currency={props.currency}
          selectOpen={selectOpen}
          setSelectedValue={setSelectedValue}
        />
      </div>
      <input
        value={props.values[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const arrayCopy = props.values.slice();
          arrayCopy[props.index].value = e.target.value;
          arrayCopy.forEach((el, index) => {
            if (index !== props.index) {
              arrayCopy[index].value = String(
                Number(e.target.value) / props.values[index].ratio
              );
            }
          });
          props.setValues(arrayCopy);
        }}
      />
    </div>
  );
});

export default ConversionBlock;