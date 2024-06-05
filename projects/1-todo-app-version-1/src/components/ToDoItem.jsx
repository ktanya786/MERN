function ToDoItem(){
  return(
    <div class="container item-container">
      <div class="row item-row">
        <div class="col-6">
          Buy milk
        </div>
        <div class="col-4">
          4/10/24
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger btn-lg kg-btn">Delete</button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
         Finish shopping
        </div>
        <div class="col-4">
          8/8/24
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger btn-lg kg-btn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem