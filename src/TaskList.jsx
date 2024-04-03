export default function TaskList ({tasks}) {
    if(tasks.length===0)
    return <></>
    return (
        <>
        <p className="lead">TASKS</p>
        <ul className="list-group my-3">
          {tasks.map(
            (item,index) => 
          <li className="list-group-item" key={index}>{item.task}
          <span className="btn btn-sm btn-danger float-end" onClick={()=>removeTask(index)}>Remove</span>
          </li> )}
        </ul>
        </>
    )
}