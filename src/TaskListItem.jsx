import Icon from "./Icon"

export default function TaskListItem({task}) {
    return( <li className="list-group-item" >
            {task.priority && 
              <span className="badge text-bg-secondary me-2">
              <Icon />
              </span>}
            {task.task}
          <div className="btn-group float-end" role="group">
          <button  className="btn btn-sm btn-info" 
          onClick={()=>editTask(task.uuid)}
          >Tailor
          </button>
          <button  className="btn btn-sm btn-danger"
          onClick={()=>removeTask(task.uuid)}
          >Remove
          </button>
          
         </div>
         

          </li>
          )
}