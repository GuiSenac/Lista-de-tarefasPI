import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

function TaskChart({ tasks }) {
  const chartData = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [
          tasks.filter(task => task.completed).length,
          tasks.filter(task => !task.completed).length,
        ],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Progresso das Tarefas</h2>
      <Doughnut data={chartData} />
    </div>
  );
}

export default TaskChart;
