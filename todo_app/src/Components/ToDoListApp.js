import React, { useState } from "react";
import './todoapp.css';
function ToDoApp() {
  const [List, setList] = useState([
    { id: 1, task: "Read SpringBoot", isCompleted: false },
    { id: 2, task: "Complete Assignment", isCompleted: false },
    { id: 3, task: "Prepare Breakfast", isCompleted: false },
    { id: 4, task: "Sleep for 2 hours", isCompleted: false },
    { id: 5, task: "Take a shower", isCompleted: false },
  ]);

  function markTask(taskId) {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  function handleClick(){
    setList((prevList) =>
        prevList.filter(task => !task.isCompleted)
    )
  }

  return (
    < >
      <header data-testid="header">
        <h1 className="head">To Do App</h1>
      </header>

      <div data-testid="ToDoList">
        <ul>
            {List.length === 0? "Nothing to do buddy. Sleep!!" : 
          List.map((task) => (
            <li key={task.id} style={{ display: 'flex', gap: '40px',padding:'10px' }} >
              <span className={task.isCompleted ? "completed" : "notCompleted"} onClick={()=>markTask(task.id)}>
                {task.task}
              </span>
              
            </li>
          ))}

        </ul>
        
      </div>

      <button onClick={handleClick}>Remove Completed</button>
          
    </>
  );
}

export default ToDoApp;