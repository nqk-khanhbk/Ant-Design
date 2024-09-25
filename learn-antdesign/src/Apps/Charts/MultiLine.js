import {useEffect, useState} from "react";
import {Line} from "@ant-design/plots";
function MultiLine(){
    const [lineChart,setLineChart] = useState([]);
    useEffect(()=>{
        const fetchApi = ()=>{
         fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
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
        yField:"value",
        point:true,
        colorField: 'type',
        axis: {
            y: {
              labelFormatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
          },
          scale: { color: { range: ['#30BF78', '#F4664A', '#FAAD14'] } },
          style: {
            lineWidth: 2,
            lineDash: (data) => {
              if (data[0].type === 'register') return [4, 4];
            },
            opacity: (data) => {
              if (data[0].type !== 'register') return 0.5;
            },
          },
    };
    return (
        <>
        <h2>Vi du MultiLine</h2>
        <Line {...config} />
        </>
    )
}
export default MultiLine;