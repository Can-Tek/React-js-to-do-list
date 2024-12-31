import React,{useState} from "react";

function ToDoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  
  const handleChange = e => {
    setNewTask(e.target.value);
  }
  
  const addTask = () => {

  }
  
  const deleteTask = index => {

  }
  
  const moveTaskup = index => {

  }
  
  const moveTaskdown = index => {

  }
  const editTask = index => {

  }
  return(
    <div className="to-do-list">
    
    <h1>To-Do-List</h1>
    
    <div>
    <input type="text" value={newTask} placeholder="please enter an task" onChange={handleChange}/>
    <button className="add-button" onClick={addTask}>Add Task</button>
    </div>

    <ol>
        {tasks.map((task, index) => (
        <li key={index}>
            <span>{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-up-button" onClick={() => moveTaskup(index)}>Move Up</button>
            <button className="move-down-button" onClick={() => moveTaskdown(index)}>Move Down</button>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        </li>
        ))}
    </ol>
    </div>
  )
}
export default ToDoList;