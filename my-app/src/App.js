// App.js

import React, { useState } from 'react';
import './App.css'; // Import your existing styles


const App = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [mainTask, setmainTask] = useState([]);

  const addTask = () => {
    const newTask = { title, desc };
    setmainTask([...mainTask, newTask]);
    setdesc('');
    settitle('');
  };

  const deleteTask = (index) => {
    let tasks = [...mainTask];
    tasks.splice(index, 1);
    setmainTask(tasks);
  };

  let renderTask = mainTask.map((task, index) => {
    return (
      <li key={index}>
        <div className='tasks'>
          <h3>{task.title}</h3>
          <p>{task.desc}</p>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      </li>
    );
  });

  
  return (
    <div className='App'>
      <div className='input-container'>
      <h1 className='header'>My Todo List App</h1>
        <input
          type='text'
          placeholder='Enter title'
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter description'
          required
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className='AddBtn' onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>{renderTask}</ul>
    </div>
  );
};

export default App;
