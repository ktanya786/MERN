function ToDoItem({ itemName, itemDate}){
  return(
    <div class="container item-container">
      <div class="row item-row">
        <div class="col-6">
         {itemName}
        </div>
        <div class="col-4">
          {itemDate}
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger btn-lg kg-btn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem