import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskChart from './TaskChart';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Lista de Tarefas</h1>
      <TaskList 
        tasks={tasks} 
        onAddTask={handleAddTask} 
        onToggleComplete={handleToggleComplete} 
        onRemoveTask={handleRemoveTask} 
      />
      <TaskChart tasks={tasks} />
    </div>
  );
}

export default App;
