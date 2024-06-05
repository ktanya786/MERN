import Items from "./Items";

let FoodItems = ({ items }) => {

  let [activeItem, setActiveItem] = useState();

  let onBuyButton = (item, event) =>{
    let newActiveItem = [...activeItem,item];
    setActiveItem(newActiveItem);

  }

  return(
    <ul className="list-group">
          {items.map(item=> 
            <Items 
              key={item} 
              foodItem={item}
              bought={activeItem.includes(item)}
              handleBuyButton={(event) =>onBuyButton(item, event)}
              ></Items>)}
    </ul>
  );

};

export default FoodItems;