import React,{useState} from "react";

function ToDoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  
  const handleChange = e => {
    setNewTask(e.target.value);
  }
  
  const addTask = () => {
    if(newTask.trim() !== ''){
    setTasks(t => [...t, newTask]);
    setNewTask('');
   }
  }
  const deleteTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
   }
  
  const moveTaskup = index => {
    if(index > 0){
        const updatedTasks = [...tasks];
        [[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }  
  }
  
  const moveTaskdown = index => {
    if(index <0){
        const updatedTasks = [...tasks];
        [[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    }
  }
  const editTask = index => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  }

  const saveEdit = index => {
    if (editingText.trim() !== '') {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editingText;
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditingText('');
    }
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
    {editingIndex === index ? (
      <>
        <input 
          type="text" 
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
        />
        <button onClick={() => saveEdit(index)}>Save</button>
      </>
    ) : (
      <>
        <span>{task}</span>
        <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        <button className="move-up-button" onClick={() => moveTaskup(index)}>Move Up</button>
        <button className="move-down-button" onClick={() => moveTaskdown(index)}>Move Down</button>
      </>
    )}
  </li>
 ))}
    </ol>
    </div>
  )
}
export default ToDoList;
