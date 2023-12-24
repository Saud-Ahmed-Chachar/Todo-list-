import React, { useState } from 'react';
import './App.css';

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
          <h5>{task.title}</h5>
          <h6>{task.desc}</h6>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      </li>
    );
 });

 return (
    <div className='App'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Enter title' required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter description' required
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className='AddBtn' onClick={addTask}>Add Task</button>
      </div>
      <ul>{renderTask}</ul>
    </div>
 );
};

export default App;