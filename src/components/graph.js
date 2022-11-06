import '../App.css';
import {Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
function Graph() {
  Chart.register(CategoryScale);
  const data={
    labels:['Base','OpenMP','OpenCL','CUDA','OpenACC'],
    datasets:[
        {
            label:"SGEMM",
            data:[0.022188,0.126191,1.475061,0.088945,0.023138],
            borderColor:['rgb(55, 146, 55)'],
            backgroundColor:['rgb(55, 146, 55)'],
            pointBorderColor:['rgb(55, 146, 55)'],
            pointBackgroundColor:['rgb(55, 146, 55)']
        },
        {
            label:"FFT",
            data:[7.764387,8.366895,8.366895,5.960464,7.698202],
            borderColor:['rgb(0, 171, 179)'],
            backgroundColor:['rgb(0, 171, 179)'],
            pointBorderColor:['rgb(0, 171, 179)'],
            pointBackgroundColor:['rgb(0, 171, 179)']
        },
        {
            label:"SAD",
            data:[11.828904,3.787165,1.761231,1.289454,1.4968552],
            borderColor:['rgb(240, 255, 66)'],
            backgroundColor:['rgb(240, 255, 66)'],
            pointBorderColor:['rgb(240, 255, 66)'],
            pointBackgroundColor:['rgb(240, 255, 66)']
        }
    ]
  }
  return (
    <div className="Graph" id="graph">
       <h1>Pictorial Representation</h1>
      <Line className="linechart" data={data}></Line>
    </div>
  );
}

export default Graph;