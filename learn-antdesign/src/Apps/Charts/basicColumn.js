import {useEffect, useState} from "react";
import {Column} from "@ant-design/plots";
function BasicColumn (){
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
    console.log(lineChart);
    const config = {
        data:lineChart,
        xField:"date",
        yField:"quanlity",
        columnWidthRatio:0.3,
        label:{
            position:"top",
        }
    };
    return (
        <>
        <h2>BasicColumn</h2>
        <Column {...config} />
        </>
    )
}
export default BasicColumn;