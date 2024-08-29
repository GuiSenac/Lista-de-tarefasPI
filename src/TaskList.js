import React, { useState } from 'react';

function TaskList({ tasks, onAddTask, onToggleComplete, onRemoveTask }) {
  const [task, setTask] = useState('');

  const handleAddTaskClick = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask(''); 
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Digite uma nova tarefa" 
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button 
          onClick={handleAddTaskClick} 
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Adicionar Tarefa
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li 
            key={index} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '10px', 
              backgroundColor: '#f9f9f9', 
              padding: '10px', 
              borderRadius: '5px' 
            }}
          >
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggleComplete(index)} 
                style={{ marginRight: '10px' }}
              />
              <button 
                onClick={() => onRemoveTask(index)} 
                style={{ cursor: 'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
