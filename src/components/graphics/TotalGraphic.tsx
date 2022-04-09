import 'chart.js/auto';
import { Chart, Doughnut } from 'react-chartjs-2';



import './total-graphic.scss';
const data = {
  labels: ['C6Bank', 'Nubank', 'Débito', 'Saldo'],

  datasets: [
    {
      weight: 0.1,
      label: 'Dataset 1',
      data: [375, 375, 0, 750],
      backgroundColor: [
        '#1c3a58',
        '#612F74',
        '#FFF000',
        '#00FF00'
      ]
    }
  ],




}

function TotalGraphic()
{
  return (
    <div className='graph-container'>
      <Doughnut data={data} options={{
        cutout: '70%',
        plugins:
        {

          legend: {
            position: 'chartArea',
            display: false,
          }
        }
      }}></Doughnut>
    </div>

  )
}

export default TotalGraphic