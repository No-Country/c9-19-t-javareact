import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['Matematica', 'Lengua', 'Educacion Fisica', 'Quimica', 'Filosofia',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Hombre',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      backgroundColor: 'rgba(20, 35, 138, 0.5)',
    },
    {
      label: 'Mujer',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      backgroundColor: 'rgba(156, 37, 77, 0.5)',
    },
    {
      label: 'No binary',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      backgroundColor: 'rgba(174,174,174,0.5)',
    },
  ],
};

export const BarChart =() => {
  return <Bar options={options} data={data} />;
}
