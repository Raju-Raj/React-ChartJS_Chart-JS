import React,{useState,useEffect} from 'react';
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale,Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip)

const BarChart = () => {

    const [chart,setChart] = useState([])
    
    const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10"
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiKey = "coinranking5301219609ee0860e22071da7bd781578a7ca8004836ed6f"

    useEffect(()=>{
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin':'*'
                }
            }).then((response)=>{
                response.json().then((data)=>{
                    console.log(data)
                    setChart(data.data)
                })
            }).catch((error)=>console.log(error))
        }
        fetchCoins()
    },[baseUrl,proxyUrl,apiKey])
    
    const   data={
        labels: chart?.coins?.map(x=>x.name),
        datasets: [{
          label: `${chart?.coins?.length} Coins Available`,
          data: chart?.coins?.map(x=>x.price),
          borderWidth: 1,
          backgroundColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          borderColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        }]
    }
    const options = {
        maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend:{
            fontSize:26
        }
      }
  return (
    <div>
      <Bar height={400} data={data} options={options}/>
    </div>
  )
}

export default BarChart
