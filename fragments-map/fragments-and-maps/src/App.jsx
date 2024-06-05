import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  //let healtyFoods =[];
  let [healtyFoods, setHealtyFood] =useState(["Ghee", "Avacado", "Qinua"," Lentils", "Vegitables"]);

  let [ textToShow, setTextToShow ] = useState(); 

  const onKeyDown = (event) => {
    if(event.key === "Enter"){
      console.log(event.target.value);
      let newFoodItem = event.target.value;
      let newItemArry = [...healtyFoods, newFoodItem];
      setHealtyFood(newItemArry);
    }
    //setTextToShow(event.target.value);
  }

  return (
    <Container>
      <h1>Healty foods</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <p>{textToShow}</p>
      <ErrorMessage items={healtyFoods}/>
      <FoodItems items={healtyFoods} />
    </Container>
  )
}

export default App
