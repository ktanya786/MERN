
import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {

  let [calVal, setCalVal] = useState('');
  const onBtnAction = (btn) =>{
  if(btn === 'C'){
    setCalVal("");
  }else if (btn=== "="){
    let finalVal = eval(calVal);
    setCalVal(finalVal);
  }else{
    let newVal = calVal + btn;
    setCalVal(newVal);
  }
}

  return (
  <div className={styles.calculator}>
    <Display displayValue={calVal} />
    <ButtonContainer buttonHandler={onBtnAction} />
  </div>
  )
}

export default App
