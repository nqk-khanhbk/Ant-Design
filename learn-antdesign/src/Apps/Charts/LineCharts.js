import {useEffect, useState} from "react";
import {Line} from "@ant-design/plots";
function LineCharts (){
    const [lineChart,setLineChart] = useState([]);
    useEffect(()=>{
        const fetchApi = ()=>{
         fetch('http://localhost:4000/dataChart')
            .then(res => res.json())
            .then(data=>{
                setLineChart(data);
            })
        }
        fetchApi();
    },[]);
  
    const config = {
        data:lineChart,
        xField:"date",
        yField:"quanlity",
        width:900,
        height:500,
        autofit:false,
        smooth:true,
        point:true,
        color:"red"
    };
    return (
        <>
        <h2> Basic LineChart </h2>
        <Line {...config} />
       
        </>
    )
}
export default LineCharts;