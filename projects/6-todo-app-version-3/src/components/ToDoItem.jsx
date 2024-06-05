function ToDoItem({ itemName, itemDate, handleDeleteTask}){
  return(
    <div className="container item-container">
      <div className="row item-row">
        <div className="col-6">
         {itemName}
        </div>
        <div className="col-4">
          {itemDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger btn-lg kg-btn" onClick={()=> handleDeleteTask(itemName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem