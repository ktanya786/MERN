import styles from './ButtonContainer.module.css';

const ButtonContainer =() => {
   let list =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return(
    <div className={styles.buttonContainer}>
      {list.map((btn)=>(<button key={btn} className={styles.button}>{btn}</button>))}
    </div>
  );
};

export default ButtonContainer;