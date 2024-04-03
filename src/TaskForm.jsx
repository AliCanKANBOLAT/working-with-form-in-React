import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskForm () {
  const emptyForm = {
    task : "",
    priority: false,
  }
  const [formData, setFormData] = useState(emptyForm)
  const[tasks, setTasks] = useState([])
  function removeTask(item) {
    console.log(item)
  }

  function handleInputChange(event) {

    // const { name, type, checked, value } = event.target;
    // setFormData(prev => ({
    //   ...prev,
    //   [name]: type === "checkbox" ? checked : value
    // }));
    // console.log(formData)
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
      }
      
    })
  }


    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(formData)
        if(formData.task.length>3)  {
          setTasks(prev => 
           [ formData, ...prev])
          setFormData(emptyForm)
          event.target.reset()
          console.log(tasks)
        }
    }
    return (
        <>
        <TaskList tasks={tasks} removeTask={removeTask} />
        <form onSubmit={handleFormSubmit}>
  <div className="row mb-3">
    <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="task" name="task" 
      onChange={handleInputChange} />
    </div>
  </div>
  
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="priority" name="priority" 
        onChange={handleInputChange} /> 
        <label className="form-check-label" htmlFor="priority">
          Has Priority
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
        </>
    )
}