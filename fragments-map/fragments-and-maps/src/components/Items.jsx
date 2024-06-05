import { useState } from "react";
import styles from "./Items.module.css";

const Items = ({ foodItem , bought, handleBuyButton}) => {

 return (
  <li className={`list-group-item ${bought && active}`}>{foodItem}
    <button 
    onClick={handleBuyButton}
    className={`${styles.button} btn btn-info`}
    >
      Buy
    </button>
  </li>
 )
};

export default Items;