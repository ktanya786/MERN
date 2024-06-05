import { useState } from "react"

function AddToDo({onAddIem}){

  const [taskName, setTaskName] = useState();
  const [taskDate, setTaskDate] = useState();

  const handleTaskName = (event) =>{
    let newTask = event.target.value;
    setTaskName(newTask);
  }

  const handleTaskDate = (event) =>{
    let newTaskdate = event.target.value;
    setTaskDate(newTaskdate);
  }

  const handleAddItem = () => {
    onAddIem(taskName, taskDate);
    setTaskName("");
    setTaskDate("");
  }

 return(
  <div className="container">
    <div className="row item-row">
        <div className="col-6">
          <input type="text" placeholder="Enter text here" value={taskName} onChange={handleTaskName} ></input>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleTaskDate} value={taskDate} ></input>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-success btn-lg kg-btn" onClick={handleAddItem}>Add</button>
        </div>
      </div>
    </div>
)

}

export default AddToDo