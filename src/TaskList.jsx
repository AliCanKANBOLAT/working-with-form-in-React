import { useEffect, useState } from "react";
export default function TaskList ({tasks, removeTask, editTask}) {
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


  if(tasks.length===0)
    return <></>
    return (
        <>
        <div className="p-4 bg-light mb-5 border rounded">
        <h4 className="mb-3">TASKS: 
        <span onClick={handlePriorityFilter}
        className= {`btn btn-sm ${!priority ? "btn-warning" : "btn-info"} float-end`}>
          { !priority ? "Show items has priority" : "Show All items..."}
          </span></h4>
        <ul className="list-group">
          {filteredTasks.map(
            (item) => 
          <li className="list-group-item" key={item.uuid}>
            {item.priority && 
              <span className="badge text-bg-secondary me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-signpost" viewBox="0 0 16 16">
              <path d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0M12.532 5l1.666 2-1.666 2H2V5z"/>
              </svg>
              </span>}
            {item.task}
          <div className="btn-group float-end" role="group">
          <button  className="btn btn-sm btn-info" 
          onClick={()=>editTask(item.uuid)}
          >Tailor
          </button>
          <button  className="btn btn-sm btn-danger"
          onClick={()=>removeTask(item.uuid)}
          >Remove
          </button>
          
         </div>
         

          </li> )}
        </ul>
        </div>
        </>
    )
}