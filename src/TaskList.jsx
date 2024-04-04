import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem"; 
export default function TaskList ({tasks, editTask, removeTask, doneTask}) {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks)
   function handlePriorityFilter () {
    setPriority(prev => !prev)
   }

   useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])


  useEffect(() => {
    priority ? setFilteredTasks(tasks.filter(item => item.priority===priority)):setFilteredTasks(tasks)
  }, [tasks, priority])


  if(tasks.length === 0)
    return <></>
    return (
        <>
        <div className="p-4 bg-light mb-5 border rounded">
        <h4 className="mb-3">TASKS: 
        <button onClick={handlePriorityFilter}
        className= {`btn btn-sm ${!priority ? "btn-warning" : "btn-info"} float-end`}>
          { !priority ? "Show items has priority" : "Show All items..."}
          </button></h4>
        <ul className="list-group">
          {filteredTasks.map(
            (task) => 
            <TaskListItem 
            key={task.uuid} 
            task={task} 
            editTask={editTask} 
            removeTask={removeTask} 
            doneTask={doneTask} />
           )}
        </ul>
        </div>
        </>
    )
}