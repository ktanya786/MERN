function AddToDo(){
return(
  <div class="container">
    <div class="row item-row">
        <div class="col-6">
          <input type="text" placeholder="Enter text here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-success btn-lg kg-btn">Add</button>
        </div>
      </div>
    </div>
)

}

export default AddToDo