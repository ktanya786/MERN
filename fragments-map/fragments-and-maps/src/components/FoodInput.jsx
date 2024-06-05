import styles from './FoodInput.module.css';
const FoodInput = ({handleKeyDown}) => {
 return (
  <input type='text' 
  placeholder="Enter food name" 
  className={styles.foodInput}
  onKeyDown={handleKeyDown}
  ></input>
 )
};
export default FoodInput;