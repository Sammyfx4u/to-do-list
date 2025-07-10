import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // No empty tasks!
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What’s next?"
        />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;